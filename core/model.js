"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = exports.Gs2Constant = exports.ProjectTokenGs2Credential = exports.ProjectToken = exports.Gs2WebSocketSession = exports.ConnectionBrokenError = exports.Gs2RestSession = exports.steadyAgents = exports.isConnectFailure = exports.steadyRestUrl = exports.isSteadyUrl = exports.steadyWebSocketUrl = exports.steadyRestTemplate = exports.normalizeSteadyEndpoint = exports.STEADY_CONNECT_TIMEOUT_CODE = exports.STEADY_CONNECT_TIMEOUT_MS = exports.BasicGs2Credential = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var async_wait_until_1 = tslib_1.__importDefault(require("async-wait-until"));
var uuid_1 = require("uuid");
var NodeWebSocket = require('ws');
var BasicGs2Credential = /** @class */ (function () {
    function BasicGs2Credential(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    return BasicGs2Credential;
}());
exports.BasicGs2Credential = BasicGs2Credential;
// ---------------------------------------------------------------- Steady（専用フリート）の基点
//
// フリートは 1 つの名前（steadyEndpoint、例 https://bs-dev.ap-northeast-1.dev.gen2.gs2io.com）で受け、
// REST は <steady>/<service>/...、WebSocket は wss://<host>/ を使う。名前はフリートのノードへ直接
// 解決される（間に ALB は無い）ので、フリートが手放した公開 IP に当たると SYN が落ちる。
// そのため Steady のときだけ接続段階に上限（steadyConnectTimeoutMs）を置き、接続段階の失敗
// （1 バイトも送っていない）だけは同じ要求をもう 1 回だけ送る。送信後の失敗は届いたかもしれない
// ので再送しない（非冪等要求の二重実行を作らない）。
/**
 * Steady の基点への接続（DNS / TCP / TLS handshake）の上限（ms）。
 * フリートが手放した公開 IP は SYN を落とすので、OS 既定（数十秒〜数分）に任せない。
 * ★ブラウザでは接続だけの上限を持てない（XHR / fetch の timeout は要求全体にかかり、
 *  GS2 の長い API を殺す）ので、ブラウザでは上限を置かず 1 回の再送だけが効く。
 */
exports.STEADY_CONNECT_TIMEOUT_MS = 5000;
/** 接続段階の上限で落としたときに載せる code（Node だけ。再送の判定に使う） */
exports.STEADY_CONNECT_TIMEOUT_CODE = 'GS2_STEADY_CONNECT_TIMEOUT';
/** 末尾の / と空白を落とす。未設定なら '' */
function normalizeSteadyEndpoint(value) {
    if (value == null) {
        return '';
    }
    return value.trim().replace(/\/+$/, '');
}
exports.normalizeSteadyEndpoint = normalizeSteadyEndpoint;
/** steadyEndpoint から REST の template（{service} 付き）を作る。未設定なら '' */
function steadyRestTemplate(steadyEndpoint) {
    var steady = normalizeSteadyEndpoint(steadyEndpoint);
    if (steady === '') {
        return '';
    }
    return steady + '/{service}';
}
exports.steadyRestTemplate = steadyRestTemplate;
/**
 * steadyEndpoint から WebSocket の接続先を作る。未設定・壊れた基点なら ''。
 * http:// の基点（ローカルの試験・開発）は ws:// に、https:// は wss:// に。
 */
function steadyWebSocketUrl(steadyEndpoint) {
    var base = normalizeSteadyEndpoint(steadyEndpoint);
    if (base === '') {
        return '';
    }
    // 基点に path が付いていても host だけを見る（Go の url.Parse と同じ）。
    var match = /^(https?):\/\/([^/]+)/i.exec(base);
    if (match == null) {
        return '';
    }
    var scheme = match[1].toLowerCase() === 'http' ? 'ws' : 'wss';
    return scheme + '://' + match[2] + '/';
}
exports.steadyWebSocketUrl = steadyWebSocketUrl;
/** 要求 URL が Steady の基点宛か */
function isSteadyUrl(steadyEndpoint, url) {
    var base = normalizeSteadyEndpoint(steadyEndpoint);
    if (base === '') {
        return false;
    }
    return url === base || url.indexOf(base + '/') === 0;
}
exports.isSteadyUrl = isSteadyUrl;
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
/**
 * 生成クライアントが組んだ URL を Steady の基点配下へ書き換える。
 *
 * 生成クライアントは `(Gs2XxxRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + <path>` で
 * URL を組む。★共有クラウドの template（Gs2Constant.ENDPOINT_HOST）から組まれた URL だけを
 * `<steady>/<service><path>` に書き換えるので、優先順は
 * サービスごとの override ＞ steadyEndpoint ＞ 共有クラウドの template になる
 * （override の URL は template に当たらないので、そのまま残る）。
 * steadyEndpoint が未設定なら URL は従来と byte 単位で同じ。
 */
function steadyRestUrl(steadyEndpoint, region, url) {
    var steady = normalizeSteadyEndpoint(steadyEndpoint);
    if (steady === '' || isSteadyUrl(steady, url)) {
        return url;
    }
    var template = exports.Gs2Constant.ENDPOINT_HOST;
    if (template.indexOf('{service}') < 0) {
        return url;
    }
    var pattern = new RegExp('^' + escapeRegExp(template)
        .replace('\\{service\\}', '([^/]+)')
        .replace('\\{region\\}', escapeRegExp(region)) + '(?=$|/)');
    var match = pattern.exec(url);
    if (match == null) {
        // サービスごとの override（または region 違い）―― 触らない。
        return url;
    }
    return steady + '/' + match[1] + url.substring(match[0].length);
}
exports.steadyRestUrl = steadyRestUrl;
/**
 * 「1 バイトも送っていない」接続段階の失敗のエラーコード。これだけが再送の対象。
 * 送信後の失敗（ECONNRESET / socket hang up / 読み取りタイムアウト / 5xx）は届いたかもしれないので
 * 再送しない（非冪等要求の二重実行を作らない）。
 */
var CONNECT_FAILURE_CODES = (_a = {
        'ECONNREFUSED': true,
        'ENOTFOUND': true,
        'EAI_AGAIN': true
    },
    _a[exports.STEADY_CONNECT_TIMEOUT_CODE] = true,
    _a['CERT_HAS_EXPIRED'] = true,
    _a['UNABLE_TO_VERIFY_LEAF_SIGNATURE'] = true,
    _a['ERR_TLS_CERT_ALTNAME_INVALID'] = true,
    _a['DEPTH_ZERO_SELF_SIGNED_CERT'] = true,
    _a['SELF_SIGNED_CERT_IN_CHAIN'] = true,
    _a);
/**
 * 接続段階の失敗か（応答が無く、code が接続系）。
 * ★ブラウザの axios は接続失敗も送信後の切断もまとめて ERR_NETWORK（応答無し）にするので、
 *  ブラウザでは両者を見分けられない ―― 再送が効くのは Node だけ。
 */
function isConnectFailure(error) {
    var _a, _b;
    if (error == null || error.response) {
        return false;
    }
    var code = (_a = error.code) !== null && _a !== void 0 ? _a : (_b = error.cause) === null || _b === void 0 ? void 0 : _b.code;
    return typeof code === 'string' && CONNECT_FAILURE_CODES[code] === true;
}
exports.isConnectFailure = isConnectFailure;
var steadyAgentCache = {};
function withConnectTimeout(socket, timeoutMs, connectedEvent) {
    var timer = setTimeout(function () {
        var error = new Error('connect timeout (' + timeoutMs + 'ms)');
        error.code = exports.STEADY_CONNECT_TIMEOUT_CODE;
        socket.destroy(error);
    }, timeoutMs);
    var clear = function () { return clearTimeout(timer); };
    socket.once(connectedEvent, clear);
    socket.once('error', clear);
    socket.once('close', clear);
    return socket;
}
/**
 * Node のときだけ: 接続（DNS / TCP / TLS handshake）に上限を置く Agent を作る（timeout ごとに使い回す）。
 * ★要求全体の timeout は使わない ―― GS2 には応答まで長くかかる API があるので殺せない。
 * ブラウザ（window がある）では接続だけの上限を持てないので null を返す（再送だけが効く）。
 */
function steadyAgents(timeoutMs) {
    if (typeof window !== 'undefined' || typeof require !== 'function') {
        return null;
    }
    var cached = steadyAgentCache[timeoutMs];
    if (cached != null) {
        return cached;
    }
    var http;
    var https;
    try {
        http = require('http');
        https = require('https');
    }
    catch (e) {
        return null;
    }
    if ((http === null || http === void 0 ? void 0 : http.Agent) == null || (https === null || https === void 0 ? void 0 : https.Agent) == null) {
        return null;
    }
    var SteadyHttpAgent = /** @class */ (function (_super) {
        tslib_1.__extends(SteadyHttpAgent, _super);
        function SteadyHttpAgent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SteadyHttpAgent.prototype.createConnection = function (options, callback) {
            return withConnectTimeout(_super.prototype.createConnection.call(this, options, callback), timeoutMs, 'connect');
        };
        return SteadyHttpAgent;
    }(http.Agent));
    var SteadyHttpsAgent = /** @class */ (function (_super) {
        tslib_1.__extends(SteadyHttpsAgent, _super);
        function SteadyHttpsAgent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SteadyHttpsAgent.prototype.createConnection = function (options, callback) {
            return withConnectTimeout(_super.prototype.createConnection.call(this, options, callback), timeoutMs, 'secureConnect');
        };
        return SteadyHttpsAgent;
    }(https.Agent));
    // ★接続は使い回す（Node 既定の globalAgent と同じ keepAlive）。Steady だけ毎回 3-way handshake に
    // なると、接続段階の上限を付けた意味（速く諦める）と引き換えに遅くなってしまう。
    var options = { keepAlive: true, scheduling: 'lifo', timeout: 5000 };
    var agents = {
        http: new SteadyHttpAgent(options),
        https: new SteadyHttpsAgent(options),
    };
    steadyAgentCache[timeoutMs] = agents;
    return agents;
}
exports.steadyAgents = steadyAgents;
/**
 * Steady のときだけ、接続段階に上限を置いた POST を投げ、接続段階の失敗なら
 * 同じ要求をもう 1 回だけ送る（プロジェクトトークンのログイン用）。
 * steadyEndpoint が未設定なら従来どおり素の axios.post。
 */
function postWithSteadyResilience(url, data, steadyEndpoint, steadyConnectTimeoutMs) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var agents, config, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isSteadyUrl(steadyEndpoint, url)) {
                        return [2 /*return*/, axios_1.default.post(url, data)];
                    }
                    agents = steadyAgents(steadyConnectTimeoutMs);
                    config = agents == null ? {} : { httpAgent: agents.http, httpsAgent: agents.https };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, axios_1.default.post(url, data, config)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    if (!isConnectFailure(error_1)) {
                        throw error_1;
                    }
                    return [4 /*yield*/, axios_1.default.post(url, data, config)];
                case 4: 
                // ★接続段階の失敗（DNS / dial / TLS。1 バイトも送っていない）だけ、同じ要求をもう 1 回だけ。
                // フリートが手放した IP に当たったとき、名前を引き直して別のノードへ着く機会を 1 回だけ作る。
                return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var Gs2RestSession = /** @class */ (function () {
    function Gs2RestSession(credential, region, options) {
        var _a, _b, _c;
        this.credential = credential;
        this.region = region;
        this.projectToken = null;
        this.expiresAt = null;
        this.compressRequest = (_a = options === null || options === void 0 ? void 0 : options.compressRequest) !== null && _a !== void 0 ? _a : true;
        this.acceptGzipResponse = (_b = options === null || options === void 0 ? void 0 : options.acceptGzipResponse) !== null && _b !== void 0 ? _b : true;
        this.steadyEndpoint = normalizeSteadyEndpoint(options === null || options === void 0 ? void 0 : options.steadyEndpoint);
        this.steadyConnectTimeoutMs = (_c = options === null || options === void 0 ? void 0 : options.steadyConnectTimeoutMs) !== null && _c !== void 0 ? _c : exports.STEADY_CONNECT_TIMEOUT_MS;
    }
    /**
     * サービスの接続先。優先順: steadyEndpoint ＞ 共有クラウドの `Gs2Constant.ENDPOINT_HOST`。
     * steadyEndpoint が未設定なら従来の文字列と byte 単位で一致する
     * （生成クライアントのサービスごとの override はこれより強い。`steadyRestUrl` の説明）。
     */
    Gs2RestSession.prototype.endpointHost = function (service) {
        var template = steadyRestTemplate(this.steadyEndpoint) || exports.Gs2Constant.ENDPOINT_HOST;
        return template
            .replace('{service}', service)
            .replace('{region}', this.region);
    };
    Gs2RestSession.prototype.connect = function () {
        var _this = this;
        // ★プロジェクトトークンのログインも Steady 配下（<steady>/identifier）へ向ける
        // ―― 放置すると Steady のアプリの identifier だけ共有クラウドへ行く。
        var url = this.endpointHost('identifier') + '/projectToken/login';
        if (this.credential instanceof BasicGs2Credential) {
            var data = {
                client_id: this.credential.clientId,
                client_secret: this.credential.clientSecret,
            };
            return postWithSteadyResilience(url, data, this.steadyEndpoint, this.steadyConnectTimeoutMs)
                .then(function (response) {
                var result = new LoginResult(response.data);
                _this.projectToken = result.accessToken;
                _this.expiresAt = new Date().getTime() + result.expiresIn * 1000;
                return result;
            }).catch(function (error) {
                // ★応答が無い失敗（接続段階の失敗・切断）では error.response が無いので、
                // 元の誤りをそのまま投げる（従来はここで TypeError になっていた）。
                if ((error === null || error === void 0 ? void 0 : error.response) == null) {
                    throw error;
                }
                throw JSON.parse(error.response.data.message);
            });
        }
        else if (this.credential instanceof ProjectTokenGs2Credential) {
            this.projectToken = this.credential.projectToken;
        }
    };
    Gs2RestSession.prototype.disconnect = function () {
        this.projectToken = null;
    };
    return Gs2RestSession;
}());
exports.Gs2RestSession = Gs2RestSession;
// ---------------------------------------------------------------- WebSocket が切れたときの誤り
//
// ★サーバーは応答を返す前に接続を閉じることがある
// （gateway の setUserId を force=true で呼ぶと呼び手自身の接続が切られる／ノードの停止／
//  ネットワーク断）。そのとき待ち中の要求を決着させないと、呼び手は永久に await したままになる。
// 切れたら待ち中の要求すべてをこの誤りで落とし、繋ぎ直すまで以後の send も即座にこの誤りで落とす。
var ConnectionBrokenError = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionBrokenError, _super);
    function ConnectionBrokenError(detail) {
        var _this = _super.call(this, detail == null ? 'connection broken' : 'connection broken (' + detail + ')') || this;
        _this.name = 'ConnectionBrokenError';
        // ★target: es5 では Error を継承すると prototype が失われ instanceof が偽になるので繋ぎ直す。
        Object.setPrototypeOf(_this, ConnectionBrokenError.prototype);
        return _this;
    }
    return ConnectionBrokenError;
}(Error));
exports.ConnectionBrokenError = ConnectionBrokenError;
/** readyState（Node の `ws` もブラウザの WebSocket も同じ値） */
var WS_OPEN = 1;
var WS_CLOSED = 3;
/** 閉じる挨拶を送る（既に閉じている接続でも安全。例外は握る） */
function closeQuietly(client) {
    try {
        if (client != null && client.readyState !== WS_CLOSED) {
            client.close();
        }
    }
    catch (e) {
        // 既に閉じている / 閉じ途中 ―― 何もしない。
    }
}
/**
 * 接続を叩き落とす（★相手がもう居ない接続に close() を送ると、`ws` は閉じる挨拶の返事を
 * 30 秒待つタイマーを置くので、socket もタイマーも残さないようにこちらを使う）。
 * terminate を持たないブラウザの WebSocket では close() に落とす。
 */
function terminateQuietly(client) {
    try {
        if (client != null && typeof client.terminate === 'function') {
            client.terminate();
            return;
        }
    }
    catch (e) {
        // 何もしない。
    }
    closeQuietly(client);
}
var Gs2WebSocketSession = /** @class */ (function () {
    function Gs2WebSocketSession(credential, region, options) {
        var _a;
        this.client = null;
        /**
         * 応答待ちの要求（requestId → Promise の決着口）。
         * ★応答が来たもの・接続が切れたものは必ず取り除く。以前は応答の無い要求が残り続け、
         *  呼び手は「応答も誤りも来ない」まま待っていた（送信の成否も見ていなかった）。
         */
        this.pendingRequests = {};
        this.onOpenHandlers = [];
        this.onErrorHandlers = [];
        this.onCloseHandlers = [];
        this.onNotificationHandlers = [];
        this.credential = credential;
        this.region = region;
        this.projectToken = null;
        this.expiresAt = null;
        this.steadyEndpoint = normalizeSteadyEndpoint(options === null || options === void 0 ? void 0 : options.steadyEndpoint);
        this.steadyConnectTimeoutMs = (_a = options === null || options === void 0 ? void 0 : options.steadyConnectTimeoutMs) !== null && _a !== void 0 ? _a : exports.STEADY_CONNECT_TIMEOUT_MS;
    }
    /** 接続先。steadyEndpoint ＞ 共有クラウドの `Gs2Constant.WS_ENDPOINT_HOST` */
    Gs2WebSocketSession.prototype.webSocketUrl = function () {
        var url = steadyWebSocketUrl(this.steadyEndpoint);
        if (url !== '') {
            return url;
        }
        return exports.Gs2Constant.WS_ENDPOINT_HOST.replace('{region}', this.region);
    };
    /**
     * Node の `ws` に渡す接続オプション。Steady のときだけ handshake に上限を置く。
     * ★ブラウザの WebSocket は handshake の上限を持てない（オプションが無い）ので、
     *  ブラウザでは上限が効かない。共有クラウドは従来どおりオプション無し（undefined）。
     */
    Gs2WebSocketSession.prototype.webSocketOptions = function () {
        if (normalizeSteadyEndpoint(this.steadyEndpoint) === '') {
            return undefined;
        }
        return { handshakeTimeout: this.steadyConnectTimeoutMs };
    };
    /** ログイン（identifier）の REST 接続先。steady があれば `<steady>/identifier`、無ければ従来 */
    Gs2WebSocketSession.prototype.endpointHost = function (service) {
        var template = steadyRestTemplate(this.steadyEndpoint) || exports.Gs2Constant.ENDPOINT_HOST;
        return template
            .replace('{service}', service)
            .replace('{region}', this.region);
    };
    Gs2WebSocketSession.prototype.connect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, data, response, result, wsUrl, client;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // ★繋ぎ直す前に古い接続を片付ける（そこに残した要求が決着しないまま忘れられないように）。
                        //  ログインより前に済ませる ―― dropConnection は projectToken も捨てるので、
                        //  この後で取り直したトークンを消させない。
                        if (this.client != null) {
                            this.dropConnection(this.client, 'reconnect');
                        }
                        url = this.endpointHost('identifier') + '/projectToken/login';
                        if (!(this.credential instanceof BasicGs2Credential)) return [3 /*break*/, 2];
                        data = {
                            client_id: this.credential.clientId,
                            client_secret: this.credential.clientSecret,
                        };
                        return [4 /*yield*/, postWithSteadyResilience(url, data, this.steadyEndpoint, this.steadyConnectTimeoutMs)];
                    case 1:
                        response = _a.sent();
                        result = new LoginResult(response.data);
                        this.projectToken = result.accessToken;
                        this.expiresAt = new Date().getTime() + result.expiresIn * 1000;
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.credential instanceof ProjectTokenGs2Credential) {
                            this.projectToken = this.credential.projectToken;
                        }
                        _a.label = 3;
                    case 3:
                        wsUrl = this.webSocketUrl();
                        if (typeof window === 'undefined') {
                            client = new NodeWebSocket(wsUrl, this.webSocketOptions());
                        }
                        else {
                            client = new WebSocket(wsUrl);
                        }
                        this.client = client;
                        client.onopen = function (event) {
                            for (var i = 0; i < _this.onOpenHandlers.length; i++) {
                                _this.onOpenHandlers[i]();
                            }
                        };
                        client.onmessage = function (message) {
                            var payload = JSON.parse(message.data);
                            if (payload.type == 'notification') {
                                for (var i = 0; i < _this.onNotificationHandlers.length; i++) {
                                    _this.onNotificationHandlers[i](payload.body);
                                }
                                return;
                            }
                            var pending = _this.takePending(payload.requestId);
                            // ★待ち行列に無い requestId（既に決着した要求への応答など）は捨てる。
                            if (pending != null) {
                                pending.resolve(payload);
                            }
                        };
                        client.onerror = function (error) {
                            // ★close が来ないまま error だけ来ることがある（TCP が黙って切れた・handshake が失敗した）。
                            //  ここでも待ち中の要求を決着させる（dropConnection は同じ接続に何度呼んでも無害）。
                            _this.dropConnection(client, 'error');
                            for (var i = 0; i < _this.onErrorHandlers.length; i++) {
                                _this.onErrorHandlers[i](error);
                            }
                        };
                        client.onclose = function () {
                            // ★応答を返す前にサーバーが閉じても、待ち中の要求は必ず ConnectionBrokenError で決着させる。
                            _this.dropConnection(client, 'closed by peer');
                            for (var i = 0; i < _this.onCloseHandlers.length; i++) {
                                _this.onCloseHandlers[i]();
                            }
                        };
                        // 開くか閉じるまで待つ（this.client が差し替わった・捨てられた場合も抜ける）。
                        return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.client !== client || client.readyState == WS_CLOSED || client.readyState == WS_OPEN; })];
                    case 4:
                        // 開くか閉じるまで待つ（this.client が差し替わった・捨てられた場合も抜ける）。
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** requestId の要求を待ち行列から外して返す（無ければ null） */
    Gs2WebSocketSession.prototype.takePending = function (requestId) {
        if (requestId == null) {
            return null;
        }
        var pending = this.pendingRequests[requestId];
        if (pending == null) {
            return null;
        }
        delete this.pendingRequests[requestId];
        return pending;
    };
    /** 待ち中の要求すべてを ConnectionBrokenError で決着させ、待ち行列を空にする */
    Gs2WebSocketSession.prototype.failPending = function (detail) {
        var pendingRequests = this.pendingRequests;
        this.pendingRequests = {};
        var error = new ConnectionBrokenError(detail);
        // ★先に待ち行列を空にしてから落とす（reject の先で send が呼ばれても混ざらない）。
        Object.keys(pendingRequests).forEach(function (requestId) {
            pendingRequests[requestId].reject(error);
        });
    };
    /**
     * 切れた接続を捨て、待ち中の要求すべてを ConnectionBrokenError で決着させる。
     * ★既に別の接続へ差し替わっていたら（disconnect → connect の後の古い接続）何もしない。
     * ★同じ接続に二度呼ばれても 2 回目は待ち行列が空なので無害（close と error の両方から来る）。
     */
    Gs2WebSocketSession.prototype.dropConnection = function (client, detail) {
        if (this.client !== client) {
            terminateQuietly(client);
            return;
        }
        this.client = null;
        this.projectToken = null;
        this.expiresAt = null;
        this.failPending(detail);
        // ★相手はもう居ないので閉じる挨拶はしない（socket もタイマーも残さない）。
        terminateQuietly(client);
    };
    Gs2WebSocketSession.prototype.send = function (service, component, func, payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var client, requestId, body, result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // ★接続が無い／閉じかけ・閉じた接続への送信は、待たずにその場で落とす
                        //  （以前は送ったつもりになって応答を待ち続けていた）。
                        if (client == null) {
                            throw new ConnectionBrokenError('not connected');
                        }
                        if (client.readyState !== WS_OPEN) {
                            throw new ConnectionBrokenError('readyState=' + client.readyState);
                        }
                        requestId = (0, uuid_1.v4)();
                        body = JSON.stringify(Object.assign({}, payload, {
                            xGs2ClientId: this.credential.clientId,
                            xGs2ProjectToken: this.projectToken,
                            x_gs2: {
                                service: service,
                                component: component,
                                function: func,
                                contentType: "application/json",
                                requestId: requestId,
                            },
                        }));
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                // ★送信の前に待ち行列へ載せる（応答が先に届いても取り落とさない）。
                                _this.pendingRequests[requestId] = { resolve: resolve, reject: reject };
                                try {
                                    // ★Node の `ws` は第 2 引数に書き込みの結果を受ける口を取る（ブラウザの WebSocket は
                                    //  余分な引数を無視する）。送れなかった要求は届いていないので、その場で落とす。
                                    client.send(body, function (error) {
                                        if (error == null) {
                                            return;
                                        }
                                        var pending = _this.takePending(requestId);
                                        if (pending != null) {
                                            pending.reject(new ConnectionBrokenError(error.message));
                                        }
                                    });
                                }
                                catch (error) {
                                    var pending_1 = _this.takePending(requestId);
                                    if (pending_1 != null) {
                                        pending_1.reject(error);
                                    }
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        if (result.status != 200) {
                            throw result.body;
                        }
                        return [2 /*return*/, result.body];
                }
            });
        });
    };
    Gs2WebSocketSession.prototype.onOpen = function (func) {
        this.onOpenHandlers.push(func);
    };
    Gs2WebSocketSession.prototype.onError = function (func) {
        this.onErrorHandlers.push(func);
    };
    Gs2WebSocketSession.prototype.onClose = function (func) {
        this.onCloseHandlers.push(func);
    };
    Gs2WebSocketSession.prototype.onNotification = function (func) {
        this.onNotificationHandlers.push(func);
    };
    /** 接続を閉じる。★待ち中の要求には ConnectionBrokenError が返る（close を待たずに決着させる） */
    Gs2WebSocketSession.prototype.disconnect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var client, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        this.client = null;
                        this.projectToken = null;
                        this.expiresAt = null;
                        // ★close イベントを待たない（来ないこともある）。
                        this.failPending('disconnected');
                        if (!(client != null)) return [3 /*break*/, 5];
                        closeQuietly(client);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return client.readyState == WS_CLOSED; }, { timeout: 1000 })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (client.readyState !== WS_CLOSED) {
                            // ★閉じ切らないまま抜けると socket とタイマーが残るので叩き落とす。
                            terminateQuietly(client);
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Gs2WebSocketSession;
}());
exports.Gs2WebSocketSession = Gs2WebSocketSession;
var LoginResult = /** @class */ (function () {
    function LoginResult(data) {
        if (data) {
            this.accessToken = data.access_token;
            this.tokenType = data.token_type;
            this.expiresIn = data.expires_in;
        }
    }
    return LoginResult;
}());
var ProjectToken = /** @class */ (function () {
    function ProjectToken(data) {
        this.token = null;
        this.expiresAt = null;
        this.token = data.token;
        this.expiresAt = data.expiresAt;
    }
    return ProjectToken;
}());
exports.ProjectToken = ProjectToken;
var ProjectTokenGs2Credential = /** @class */ (function () {
    function ProjectTokenGs2Credential(clientId, projectToken) {
        this.clientId = clientId;
        this.projectToken = projectToken;
    }
    return ProjectTokenGs2Credential;
}());
exports.ProjectTokenGs2Credential = ProjectTokenGs2Credential;
exports.Gs2Constant = {
    ENDPOINT_HOST: 'https://{service}.{region}.gen2.gs2io.com',
    WS_ENDPOINT_HOST: 'wss://gateway-ws.{region}.gen2.gs2io.com',
};
exports.Region = {
    AP_NORTHEAST_1: 'ap-northeast-1',
    US_EAST_1: 'us-east-1',
    EU_WEST_1: 'eu-west-1',
    AP_SOUTHEAST_1: 'ap-southeast-1',
};
//# sourceMappingURL=model.js.map