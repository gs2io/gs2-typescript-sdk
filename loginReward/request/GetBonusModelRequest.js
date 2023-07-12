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
var GetBonusModelRequest = /** @class */ (function () {
    function GetBonusModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.accessToken = null;
    }
    GetBonusModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBonusModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBonusModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBonusModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBonusModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBonusModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBonusModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBonusModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBonusModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBonusModelRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    GetBonusModelRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetBonusModelRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetBonusModelRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetBonusModelRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBonusModelRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBonusModelRequest.fromDict = function (data) {
        return new GetBonusModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withAccessToken(data["accessToken"]);
    };
    GetBonusModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetBonusModelRequest;
}());
exports.default = GetBonusModelRequest;
//# sourceMappingURL=GetBonusModelRequest.js.map