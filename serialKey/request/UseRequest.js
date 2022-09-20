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
var UseRequest = /** @class */ (function () {
    function UseRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.code = null;
    }
    UseRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UseRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UseRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UseRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UseRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UseRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UseRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UseRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UseRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UseRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UseRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UseRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UseRequest.prototype.getCode = function () {
        return this.code;
    };
    UseRequest.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    UseRequest.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    UseRequest.fromDict = function (data) {
        return new UseRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCode(data["code"]);
    };
    UseRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "code": this.getCode(),
        };
    };
    return UseRequest;
}());
exports.default = UseRequest;
//# sourceMappingURL=UseRequest.js.map