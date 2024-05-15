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
var SetMaximumCurrentMaximumMemberCountByGuildNameRequest = /** @class */ (function () {
    function SetMaximumCurrentMaximumMemberCountByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildName = null;
        this.guildModelName = null;
        this.value = null;
        this.duplicationAvoider = null;
    }
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getValue = function () {
        return this.value;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.fromDict = function (data) {
        return new SetMaximumCurrentMaximumMemberCountByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildName(data["guildName"])
            .withGuildModelName(data["guildModelName"])
            .withValue(data["value"]);
    };
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildName": this.getGuildName(),
            "guildModelName": this.getGuildModelName(),
            "value": this.getValue(),
        };
    };
    return SetMaximumCurrentMaximumMemberCountByGuildNameRequest;
}());
exports.default = SetMaximumCurrentMaximumMemberCountByGuildNameRequest;
//# sourceMappingURL=SetMaximumCurrentMaximumMemberCountByGuildNameRequest.js.map