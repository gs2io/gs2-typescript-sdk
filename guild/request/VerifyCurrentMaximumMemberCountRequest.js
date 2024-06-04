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
var VerifyCurrentMaximumMemberCountRequest = /** @class */ (function () {
    function VerifyCurrentMaximumMemberCountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.verifyType = null;
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyCurrentMaximumMemberCountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCurrentMaximumMemberCountRequest.fromDict = function (data) {
        return new VerifyCurrentMaximumMemberCountRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyCurrentMaximumMemberCountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "verifyType": this.getVerifyType(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyCurrentMaximumMemberCountRequest;
}());
exports.default = VerifyCurrentMaximumMemberCountRequest;
//# sourceMappingURL=VerifyCurrentMaximumMemberCountRequest.js.map