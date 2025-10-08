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
var DecreaseMaximumCurrentMaximumMemberCountRequest = /** @class */ (function () {
    function DecreaseMaximumCurrentMaximumMemberCountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.value = null;
        this.duplicationAvoider = null;
    }
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getValue = function () {
        return this.value;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.fromDict = function (data) {
        return new DecreaseMaximumCurrentMaximumMemberCountRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withValue(data["value"]);
    };
    DecreaseMaximumCurrentMaximumMemberCountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "value": this.getValue(),
        };
    };
    return DecreaseMaximumCurrentMaximumMemberCountRequest;
}());
exports.default = DecreaseMaximumCurrentMaximumMemberCountRequest;
//# sourceMappingURL=DecreaseMaximumCurrentMaximumMemberCountRequest.js.map