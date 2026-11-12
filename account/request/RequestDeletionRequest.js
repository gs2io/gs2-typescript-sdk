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
var RequestDeletionRequest = /** @class */ (function () {
    function RequestDeletionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    RequestDeletionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RequestDeletionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RequestDeletionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RequestDeletionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RequestDeletionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RequestDeletionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RequestDeletionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RequestDeletionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RequestDeletionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RequestDeletionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    RequestDeletionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RequestDeletionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RequestDeletionRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RequestDeletionRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RequestDeletionRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RequestDeletionRequest.fromDict = function (data) {
        return new RequestDeletionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    RequestDeletionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return RequestDeletionRequest;
}());
exports.default = RequestDeletionRequest;
//# sourceMappingURL=RequestDeletionRequest.js.map