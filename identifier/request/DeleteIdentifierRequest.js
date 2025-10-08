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
var DeleteIdentifierRequest = /** @class */ (function () {
    function DeleteIdentifierRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.clientId = null;
    }
    DeleteIdentifierRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteIdentifierRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteIdentifierRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteIdentifierRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteIdentifierRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteIdentifierRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteIdentifierRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DeleteIdentifierRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DeleteIdentifierRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DeleteIdentifierRequest.prototype.getClientId = function () {
        return this.clientId;
    };
    DeleteIdentifierRequest.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    DeleteIdentifierRequest.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    DeleteIdentifierRequest.fromDict = function (data) {
        return new DeleteIdentifierRequest()
            .withUserName(data["userName"])
            .withClientId(data["clientId"]);
    };
    DeleteIdentifierRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "clientId": this.getClientId(),
        };
    };
    return DeleteIdentifierRequest;
}());
exports.default = DeleteIdentifierRequest;
//# sourceMappingURL=DeleteIdentifierRequest.js.map