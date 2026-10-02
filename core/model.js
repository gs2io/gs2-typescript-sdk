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
exports.Region = exports.Gs2Constant = exports.ProjectTokenGs2Credential = exports.ProjectToken = exports.Gs2WebSocketSession = exports.ConnectionBrokenError = exports.Gs2RestSession = exports.STEADY_CONNECT_TIMEOUT_CODE = exports.STEADY_CONNECT_TIMEOUT_MS = exports.BasicGs2Credential = void 0;
exports.normalizeSteadyEndpoint = normalizeSteadyEndpoint;
exports.steadyRestTemplate = steadyRestTemplate;
exports.steadyWebSocketUrl = steadyWebSocketUrl;
exports.isSteadyUrl = isSteadyUrl;
exports.steadyRestUrl = steadyRestUrl;
exports.isConnectFailure = isConnectFailure;
exports.steadyAgents = steadyAgents;
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
exports.STEADY_CONNECT_TIMEOUT_MS = 5000;
exports.STEADY_CONNECT_TIMEOUT_CODE = 'GS2_STEADY_CONNECT_TIMEOUT';
function normalizeSteadyEndpoint(value) {
    if (value == null) {
        return '';
    }
    return value.trim().replace(/\/+$/, '');
}
function steadyRestTemplate(steadyEndpoint) {
    var steady = normalizeSteadyEndpoint(steadyEndpoint);
    if (steady === '') {
        return '';
    }
    return steady + '/{service}';
}
function steadyWebSocketUrl(steadyEndpoint) {
    var base = normalizeSteadyEndpoint(steadyEndpoint);
    if (base === '') {
        return '';
    }
    var match = /^(https?):\/\/([^/]+)/i.exec(base);
    if (match == null) {
        return '';
    }
    var scheme = match[1].toLowerCase() === 'http' ? 'ws' : 'wss';
    return scheme + '://' + match[2] + '/';
}
function isSteadyUrl(steadyEndpoint, url) {
    var base = normalizeSteadyEndpoint(steadyEndpoint);
    if (base === '') {
        return false;
    }
    return url === base || url.indexOf(base + '/') === 0;
}
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
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
        return url;
    }
    return steady + '/' + match[1] + url.substring(match[0].length);
}
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
function isConnectFailure(error) {
    var _a, _b;
    if (error == null || error.response) {
        return false;
    }
    var code = (_a = error.code) !== null && _a !== void 0 ? _a : (_b = error.cause) === null || _b === void 0 ? void 0 : _b.code;
    return typeof code === 'string' && CONNECT_FAILURE_CODES[code] === true;
}
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
    var options = { keepAlive: true, scheduling: 'lifo', timeout: 5000 };
    var agents = {
        http: new SteadyHttpAgent(options),
        https: new SteadyHttpsAgent(options),
    };
    steadyAgentCache[timeoutMs] = agents;
    return agents;
}
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
                case 4: return [2 /*return*/, _a.sent()];
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
    Gs2RestSession.prototype.endpointHost = function (service) {
        var template = steadyRestTemplate(this.steadyEndpoint) || exports.Gs2Constant.ENDPOINT_HOST;
        return template
            .replace('{service}', service)
            .replace('{region}', this.region);
    };
    Gs2RestSession.prototype.connect = function () {
        var _this = this;
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
var ConnectionBrokenError = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionBrokenError, _super);
    function ConnectionBrokenError(detail) {
        var _this = _super.call(this, detail == null ? 'connection broken' : 'connection broken (' + detail + ')') || this;
        _this.name = 'ConnectionBrokenError';
        Object.setPrototypeOf(_this, ConnectionBrokenError.prototype);
        return _this;
    }
    return ConnectionBrokenError;
}(Error));
exports.ConnectionBrokenError = ConnectionBrokenError;
var WS_OPEN = 1;
var WS_CLOSED = 3;
function closeQuietly(client) {
    try {
        if (client != null && client.readyState !== WS_CLOSED) {
            client.close();
        }
    }
    catch (e) {
    }
}
function terminateQuietly(client) {
    try {
        if (client != null && typeof client.terminate === 'function') {
            client.terminate();
            return;
        }
    }
    catch (e) {
    }
    closeQuietly(client);
}
var Gs2WebSocketSession = /** @class */ (function () {
    function Gs2WebSocketSession(credential, region, options) {
        var _a;
        this.client = null;
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
    Gs2WebSocketSession.prototype.webSocketUrl = function () {
        var url = steadyWebSocketUrl(this.steadyEndpoint);
        if (url !== '') {
            return url;
        }
        return exports.Gs2Constant.WS_ENDPOINT_HOST.replace('{region}', this.region);
    };
    Gs2WebSocketSession.prototype.webSocketOptions = function () {
        if (normalizeSteadyEndpoint(this.steadyEndpoint) === '') {
            return undefined;
        }
        return { handshakeTimeout: this.steadyConnectTimeoutMs };
    };
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
                            if (pending != null) {
                                pending.resolve(payload);
                            }
                        };
                        client.onerror = function (error) {
                            _this.dropConnection(client, 'error');
                            for (var i = 0; i < _this.onErrorHandlers.length; i++) {
                                _this.onErrorHandlers[i](error);
                            }
                        };
                        client.onclose = function () {
                            _this.dropConnection(client, 'closed by peer');
                            for (var i = 0; i < _this.onCloseHandlers.length; i++) {
                                _this.onCloseHandlers[i]();
                            }
                        };
                        return [4 /*yield*/, (0, async_wait_until_1.default)(function () { return _this.client !== client || client.readyState == WS_CLOSED || client.readyState == WS_OPEN; })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    Gs2WebSocketSession.prototype.failPending = function (detail) {
        var pendingRequests = this.pendingRequests;
        this.pendingRequests = {};
        var error = new ConnectionBrokenError(detail);
        Object.keys(pendingRequests).forEach(function (requestId) {
            pendingRequests[requestId].reject(error);
        });
    };
    Gs2WebSocketSession.prototype.dropConnection = function (client, detail) {
        if (this.client !== client) {
            terminateQuietly(client);
            return;
        }
        this.client = null;
        this.projectToken = null;
        this.expiresAt = null;
        this.failPending(detail);
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
                                _this.pendingRequests[requestId] = { resolve: resolve, reject: reject };
                                try {
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