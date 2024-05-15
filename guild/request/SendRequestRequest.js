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
var SendRequestRequest = /** @class */ (function () {
    function SendRequestRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.guildModelName = null;
        this.targetGuildName = null;
        this.duplicationAvoider = null;
    }
    SendRequestRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendRequestRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendRequestRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendRequestRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendRequestRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendRequestRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendRequestRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendRequestRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendRequestRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendRequestRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SendRequestRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SendRequestRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SendRequestRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    SendRequestRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SendRequestRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SendRequestRequest.prototype.getTargetGuildName = function () {
        return this.targetGuildName;
    };
    SendRequestRequest.prototype.setTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    SendRequestRequest.prototype.withTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    SendRequestRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SendRequestRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendRequestRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendRequestRequest.fromDict = function (data) {
        return new SendRequestRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withTargetGuildName(data["targetGuildName"]);
    };
    SendRequestRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "targetGuildName": this.getTargetGuildName(),
        };
    };
    return SendRequestRequest;
}());
exports.default = SendRequestRequest;
//# sourceMappingURL=SendRequestRequest.js.map