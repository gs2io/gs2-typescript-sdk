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
var WithdrawalRequest = /** @class */ (function () {
    function WithdrawalRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.guildModelName = null;
        this.guildName = null;
        this.duplicationAvoider = null;
    }
    WithdrawalRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WithdrawalRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawalRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawalRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WithdrawalRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawalRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawalRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WithdrawalRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawalRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawalRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    WithdrawalRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    WithdrawalRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    WithdrawalRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    WithdrawalRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    WithdrawalRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    WithdrawalRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    WithdrawalRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    WithdrawalRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    WithdrawalRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WithdrawalRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawalRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawalRequest.fromDict = function (data) {
        return new WithdrawalRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"]);
    };
    WithdrawalRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
        };
    };
    return WithdrawalRequest;
}());
exports.default = WithdrawalRequest;
//# sourceMappingURL=WithdrawalRequest.js.map