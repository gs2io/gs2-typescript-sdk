"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractGs2WebSocketClient_1 = tslib_1.__importDefault(require("../core/AbstractGs2WebSocketClient"));
var Result = tslib_1.__importStar(require("./result"));
var Gs2GatewayWebSocketClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2GatewayWebSocketClient, _super);
    function Gs2GatewayWebSocketClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2GatewayWebSocketClient.prototype.setUserId = function (request) {
        var _a, _b, _c, _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.session.send("gateway", "webSocketSession", "setUserId", {
                            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
                            'namespaceName': (_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : null,
                            'xGs2AccessToken': (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null,
                            'allowConcurrentAccess': (_d = request.getAllowConcurrentAccess()) !== null && _d !== void 0 ? _d : null,
                        })];
                    case 1:
                        result = _e.sent();
                        return [2 /*return*/, Result.SetUserIdResult.fromDict(result)];
                }
            });
        });
    };
    return Gs2GatewayWebSocketClient;
}(AbstractGs2WebSocketClient_1.default));
exports.default = Gs2GatewayWebSocketClient;
//# sourceMappingURL=websocket.js.map