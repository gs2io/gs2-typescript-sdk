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
var GetReceiveStatusRequest = /** @class */ (function () {
    function GetReceiveStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.accessToken = null;
    }
    GetReceiveStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReceiveStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReceiveStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReceiveStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveStatusRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    GetReceiveStatusRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetReceiveStatusRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetReceiveStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetReceiveStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetReceiveStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetReceiveStatusRequest.fromDict = function (data) {
        return new GetReceiveStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withAccessToken(data["accessToken"]);
    };
    GetReceiveStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetReceiveStatusRequest;
}());
exports.default = GetReceiveStatusRequest;
//# sourceMappingURL=GetReceiveStatusRequest.js.map