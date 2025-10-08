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
var GetSendRequestRequest = /** @class */ (function () {
    function GetSendRequestRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.guildModelName = null;
        this.targetGuildName = null;
    }
    GetSendRequestRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSendRequestRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSendRequestRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSendRequestRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSendRequestRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSendRequestRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSendRequestRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSendRequestRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSendRequestRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSendRequestRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSendRequestRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSendRequestRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSendRequestRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    GetSendRequestRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetSendRequestRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    GetSendRequestRequest.prototype.getTargetGuildName = function () {
        return this.targetGuildName;
    };
    GetSendRequestRequest.prototype.setTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    GetSendRequestRequest.prototype.withTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    GetSendRequestRequest.fromDict = function (data) {
        return new GetSendRequestRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withTargetGuildName(data["targetGuildName"]);
    };
    GetSendRequestRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "targetGuildName": this.getTargetGuildName(),
        };
    };
    return GetSendRequestRequest;
}());
exports.default = GetSendRequestRequest;
//# sourceMappingURL=GetSendRequestRequest.js.map