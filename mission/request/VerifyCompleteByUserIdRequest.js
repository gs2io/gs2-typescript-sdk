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
var VerifyCompleteByUserIdRequest = /** @class */ (function () {
    function VerifyCompleteByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.userId = null;
        this.verifyType = null;
        this.missionTaskName = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyCompleteByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCompleteByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCompleteByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCompleteByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    VerifyCompleteByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyCompleteByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCompleteByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    VerifyCompleteByUserIdRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCompleteByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyCompleteByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCompleteByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCompleteByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCompleteByUserIdRequest.fromDict = function (data) {
        return new VerifyCompleteByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withUserId(data["userId"])
            .withVerifyType(data["verifyType"])
            .withMissionTaskName(data["missionTaskName"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyCompleteByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "userId": this.getUserId(),
            "verifyType": this.getVerifyType(),
            "missionTaskName": this.getMissionTaskName(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyCompleteByUserIdRequest;
}());
exports.default = VerifyCompleteByUserIdRequest;
//# sourceMappingURL=VerifyCompleteByUserIdRequest.js.map