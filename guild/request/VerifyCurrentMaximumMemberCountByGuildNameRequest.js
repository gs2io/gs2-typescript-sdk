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
var VerifyCurrentMaximumMemberCountByGuildNameRequest = /** @class */ (function () {
    function VerifyCurrentMaximumMemberCountByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.verifyType = null;
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.fromDict = function (data) {
        return new VerifyCurrentMaximumMemberCountByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyCurrentMaximumMemberCountByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "verifyType": this.getVerifyType(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyCurrentMaximumMemberCountByGuildNameRequest;
}());
exports.default = VerifyCurrentMaximumMemberCountByGuildNameRequest;
//# sourceMappingURL=VerifyCurrentMaximumMemberCountByGuildNameRequest.js.map