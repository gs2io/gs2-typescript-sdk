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
var VerifyBalanceParameterStatusByUserIdRequest = /** @class */ (function () {
    function VerifyBalanceParameterStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.parameterValueName = null;
        this.verifyType = null;
        this.parameterValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getParameterValueName = function () {
        return this.parameterValueName;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getParameterValue = function () {
        return this.parameterValue;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setParameterValue = function (parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withParameterValue = function (parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBalanceParameterStatusByUserIdRequest.fromDict = function (data) {
        return new VerifyBalanceParameterStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withParameterValueName(data["parameterValueName"])
            .withVerifyType(data["verifyType"])
            .withParameterValue(data["parameterValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyBalanceParameterStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "parameterValueName": this.getParameterValueName(),
            "verifyType": this.getVerifyType(),
            "parameterValue": this.getParameterValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyBalanceParameterStatusByUserIdRequest;
}());
exports.default = VerifyBalanceParameterStatusByUserIdRequest;
//# sourceMappingURL=VerifyBalanceParameterStatusByUserIdRequest.js.map