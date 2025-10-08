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
var ReceiveGlobalMessageRequest = /** @class */ (function () {
    function ReceiveGlobalMessageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    ReceiveGlobalMessageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveGlobalMessageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveGlobalMessageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveGlobalMessageRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReceiveGlobalMessageRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveGlobalMessageRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveGlobalMessageRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveGlobalMessageRequest.fromDict = function (data) {
        return new ReceiveGlobalMessageRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    ReceiveGlobalMessageRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return ReceiveGlobalMessageRequest;
}());
exports.default = ReceiveGlobalMessageRequest;
//# sourceMappingURL=ReceiveGlobalMessageRequest.js.map