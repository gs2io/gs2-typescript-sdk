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
exports.Region = exports.Gs2Constant = exports.ProjectTokenGs2Credential = exports.ProjectToken = exports.Gs2WebSocketSession = exports.Gs2RestSession = exports.steadyAgents = exports.isConnectFailure = exports.steadyRestUrl = exports.isSteadyUrl = exports.steadyWebSocketUrl = exports.steadyRestTemplate = exports.normalizeSteadyEndpoint = exports.STEADY_CONNECT_TIMEOUT_CODE = exports.STEADY_CONNECT_TIMEOUT_MS = exports.BasicGs2Credential = void 0;
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
var Gs2WebSocketSession = /** @class */ (function () {
    function Gs2WebSocketSession(credential, region, options) {
        var _a;
        this.client = null;
        this.inflightRequest = {};
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
            var url, data, response, result, wsUrl;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                            this.client = new NodeWebSocket(wsUrl, this.webSocketOptions());
                        }
                        else {
                            this.client = new WebSocket(wsUrl);
                        }
                        this.client.onopen = function (event) {
                            for (var i = 0; i < _this.onOpenHandlers.length; i++) {
                                _this.onOpenHandlers[i]();
                            }
                        };
                        this.client.onmessage = function (message) {
                            var payload = JSON.parse(message.data);
                            if (payload.type == 'notification') {
                                for (var i = 0; i < _this.onNotificationHandlers.length; i++) {
                                    _this.onNotificationHandlers[i](payload.body);
                                }
                            }
                            else {
                                _this.inflightRequest[payload.requestId] = payload;
                            }
                        };
                        this.client.onerror = function (error) {
                            for (var i = 0; i < _this.onErrorHandlers.length; i++) {
                                _this.onErrorHandlers[i](error);
                            }
                        };
                        this.client.onclose = function () {
                            for (var i = 0; i < _this.onCloseHandlers.length; i++) {
                                _this.onCloseHandlers[i]();
                            }
                        };
                        if (!(typeof window === 'undefined')) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.client == null || _this.client.readyState == NodeWebSocket.CLOSED || _this.client.readyState == NodeWebSocket.OPEN; })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.client == null || _this.client.readyState == WebSocket.CLOSED || _this.client.readyState == WebSocket.OPEN; })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Gs2WebSocketSession.prototype.send = function (service, component, func, payload) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var requestId, result;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        requestId = (0, uuid_1.v4)();
                        this.inflightRequest[requestId] = null;
                        (_a = this.client) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify(Object.assign({}, payload, {
                            xGs2ClientId: this.credential.clientId,
                            xGs2ProjectToken: this.projectToken,
                            x_gs2: {
                                service: service,
                                component: component,
                                function: func,
                                contentType: "application/json",
                                requestId: requestId,
                            },
                        })));
                        return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.inflightRequest[requestId] != null; })];
                    case 1:
                        _b.sent();
                        result = this.inflightRequest[requestId];
                        delete this.inflightRequest[requestId];
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
    Gs2WebSocketSession.prototype.disconnect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.client != null)) return [3 /*break*/, 5];
                        this.client.close();
                        if (!(typeof window === 'undefined')) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.client == null || _this.client.readyState == NodeWebSocket.CLOSED; })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.client == null || _this.client.readyState == WebSocket.CLOSED; })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.client = null;
                        _a.label = 5;
                    case 5:
                        this.projectToken = null;
                        return [2 /*return*/];
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