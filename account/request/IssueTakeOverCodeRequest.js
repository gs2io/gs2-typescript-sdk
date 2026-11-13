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
var IssueTakeOverCodeRequest = /** @class */ (function () {
    function IssueTakeOverCodeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
    }
    IssueTakeOverCodeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueTakeOverCodeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueTakeOverCodeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IssueTakeOverCodeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    IssueTakeOverCodeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.getType = function () {
        return this.type;
    };
    IssueTakeOverCodeRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    IssueTakeOverCodeRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    IssueTakeOverCodeRequest.fromDict = function (data) {
        return new IssueTakeOverCodeRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"]);
    };
    IssueTakeOverCodeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
        };
    };
    return IssueTakeOverCodeRequest;
}());
exports.default = IssueTakeOverCodeRequest;
//# sourceMappingURL=IssueTakeOverCodeRequest.js.map