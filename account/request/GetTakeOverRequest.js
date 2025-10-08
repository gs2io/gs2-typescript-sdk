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
var GetTakeOverRequest = /** @class */ (function () {
    function GetTakeOverRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
    }
    GetTakeOverRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTakeOverRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTakeOverRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTakeOverRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetTakeOverRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetTakeOverRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetTakeOverRequest.prototype.getType = function () {
        return this.type;
    };
    GetTakeOverRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverRequest.fromDict = function (data) {
        return new GetTakeOverRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"]);
    };
    GetTakeOverRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
        };
    };
    return GetTakeOverRequest;
}());
exports.default = GetTakeOverRequest;
//# sourceMappingURL=GetTakeOverRequest.js.map