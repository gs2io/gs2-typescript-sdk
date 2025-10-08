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
var DeleteMatchSessionRequest = /** @class */ (function () {
    function DeleteMatchSessionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.sessionName = null;
    }
    DeleteMatchSessionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMatchSessionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMatchSessionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMatchSessionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMatchSessionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMatchSessionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMatchSessionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMatchSessionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMatchSessionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMatchSessionRequest.prototype.getSessionName = function () {
        return this.sessionName;
    };
    DeleteMatchSessionRequest.prototype.setSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    DeleteMatchSessionRequest.prototype.withSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    DeleteMatchSessionRequest.fromDict = function (data) {
        return new DeleteMatchSessionRequest()
            .withNamespaceName(data["namespaceName"])
            .withSessionName(data["sessionName"]);
    };
    DeleteMatchSessionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "sessionName": this.getSessionName(),
        };
    };
    return DeleteMatchSessionRequest;
}());
exports.default = DeleteMatchSessionRequest;
//# sourceMappingURL=DeleteMatchSessionRequest.js.map