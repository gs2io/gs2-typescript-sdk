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
var VerifyIncludeMemberRequest = /** @class */ (function () {
    function VerifyIncludeMemberRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.accessToken = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyIncludeMemberRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyIncludeMemberRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyIncludeMemberRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyIncludeMemberRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    VerifyIncludeMemberRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    VerifyIncludeMemberRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyIncludeMemberRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyIncludeMemberRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyIncludeMemberRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyIncludeMemberRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyIncludeMemberRequest.fromDict = function (data) {
        return new VerifyIncludeMemberRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withAccessToken(data["accessToken"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyIncludeMemberRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "accessToken": this.getAccessToken(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyIncludeMemberRequest;
}());
exports.default = VerifyIncludeMemberRequest;
//# sourceMappingURL=VerifyIncludeMemberRequest.js.map