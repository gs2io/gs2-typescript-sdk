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
var ApplyBuffRequest = /** @class */ (function () {
    function ApplyBuffRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    ApplyBuffRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ApplyBuffRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyBuffRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyBuffRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ApplyBuffRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyBuffRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyBuffRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ApplyBuffRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyBuffRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyBuffRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ApplyBuffRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ApplyBuffRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ApplyBuffRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ApplyBuffRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyBuffRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyBuffRequest.fromDict = function (data) {
        return new ApplyBuffRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    ApplyBuffRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return ApplyBuffRequest;
}());
exports.default = ApplyBuffRequest;
//# sourceMappingURL=ApplyBuffRequest.js.map