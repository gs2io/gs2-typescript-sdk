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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = exports.Gs2Constant = exports.ProjectTokenGs2Credential = exports.ProjectToken = exports.Gs2WebSocketSession = exports.Gs2RestSession = exports.BasicGs2Credential = void 0;
var tslib_1 = require("tslib");
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
var async_wait_until_1 = (0, tslib_1.__importDefault)(require("async-wait-until"));
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
var Gs2RestSession = /** @class */ (function () {
    function Gs2RestSession(credential, region) {
        this.credential = credential;
        this.region = region;
        this.projectToken = null;
        this.expiresAt = null;
    }
    Gs2RestSession.prototype.connect = function () {
        var _this = this;
        var service = 'identifier';
        var url = exports.Gs2Constant.ENDPOINT_HOST
            .replace('{service}', service)
            .replace('{region}', this.region)
            + '/projectToken/login';
        if (this.credential instanceof BasicGs2Credential) {
            var data = {
                client_id: this.credential.clientId,
                client_secret: this.credential.clientSecret,
            };
            return axios_1.default.post(url, data)
                .then(function (response) {
                var result = new LoginResult(response.data);
                _this.projectToken = result.accessToken;
                _this.expiresAt = new Date().getTime() + result.expiresIn * 1000;
                return result;
            }).catch(function (error) {
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
    function Gs2WebSocketSession(credential, region) {
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
    }
    Gs2WebSocketSession.prototype.connect = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var service, url, data, response, result;
            var _this = this;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = 'identifier';
                        url = exports.Gs2Constant.ENDPOINT_HOST
                            .replace('{service}', service)
                            .replace('{region}', this.region)
                            + '/projectToken/login';
                        if (!(this.credential instanceof BasicGs2Credential)) return [3 /*break*/, 2];
                        data = {
                            client_id: this.credential.clientId,
                            client_secret: this.credential.clientSecret,
                        };
                        return [4 /*yield*/, axios_1.default.post(url, data)];
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
                        if (typeof window === 'undefined') {
                            this.client = new NodeWebSocket(exports.Gs2Constant.WS_ENDPOINT_HOST.replace('{region}', this.region));
                        }
                        else {
                            this.client = new WebSocket(exports.Gs2Constant.WS_ENDPOINT_HOST.replace('{region}', this.region));
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var requestId, result;
            var _this = this;
            return (0, tslib_1.__generator)(this, function (_b) {
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
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0, tslib_1.__generator)(this, function (_a) {
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