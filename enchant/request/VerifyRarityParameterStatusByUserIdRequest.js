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
var VerifyRarityParameterStatusByUserIdRequest = /** @class */ (function () {
    function VerifyRarityParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
        this.userId = null;
        this.propertyId = null;
        this.verifyType = null;
        this.parameterValueName = null;
        this.parameterCount = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyRarityParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getParameterValueName = function () {
        return this.parameterValueName;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getParameterCount = function () {
        return this.parameterCount;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setParameterCount = function (parameterCount) {
        this.parameterCount = parameterCount;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withParameterCount = function (parameterCount) {
        this.parameterCount = parameterCount;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRarityParameterStatusByUserIdRequest.fromDict = function (data) {
        return new VerifyRarityParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withVerifyType(data["verifyType"])
            .withParameterValueName(data["parameterValueName"])
            .withParameterCount(data["parameterCount"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyRarityParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "verifyType": this.getVerifyType(),
            "parameterValueName": this.getParameterValueName(),
            "parameterCount": this.getParameterCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyRarityParameterStatusByUserIdRequest;
}());
exports.default = VerifyRarityParameterStatusByUserIdRequest;
//# sourceMappingURL=VerifyRarityParameterStatusByUserIdRequest.js.map