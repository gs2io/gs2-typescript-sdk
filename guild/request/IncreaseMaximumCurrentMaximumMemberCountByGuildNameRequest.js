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
var IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest = /** @class */ (function () {
    function IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.value = null;
        this.duplicationAvoider = null;
    }
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getValue = function () {
        return this.value;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.fromDict = function (data) {
        return new IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withValue(data["value"]);
    };
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "value": this.getValue(),
        };
    };
    return IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest;
}());
exports.default = IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest;
//# sourceMappingURL=IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest.js.map