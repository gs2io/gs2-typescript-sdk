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
var VerifyBalanceParameterStatusRequest = /** @class */ (function () {
    function VerifyBalanceParameterStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.parameterName = null;
        this.propertyId = null;
        this.parameterValueName = null;
        this.verifyType = null;
        this.parameterValue = null;
        this.duplicationAvoider = null;
    }
    VerifyBalanceParameterStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyBalanceParameterStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyBalanceParameterStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyBalanceParameterStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyBalanceParameterStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    VerifyBalanceParameterStatusRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyBalanceParameterStatusRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getParameterValueName = function () {
        return this.parameterValueName;
    };
    VerifyBalanceParameterStatusRequest.prototype.setParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyBalanceParameterStatusRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getParameterValue = function () {
        return this.parameterValue;
    };
    VerifyBalanceParameterStatusRequest.prototype.setParameterValue = function (parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withParameterValue = function (parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyBalanceParameterStatusRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBalanceParameterStatusRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyBalanceParameterStatusRequest.fromDict = function (data) {
        return new VerifyBalanceParameterStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withParameterValueName(data["parameterValueName"])
            .withVerifyType(data["verifyType"])
            .withParameterValue(data["parameterValue"]);
    };
    VerifyBalanceParameterStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "parameterValueName": this.getParameterValueName(),
            "verifyType": this.getVerifyType(),
            "parameterValue": this.getParameterValue(),
        };
    };
    return VerifyBalanceParameterStatusRequest;
}());
exports.default = VerifyBalanceParameterStatusRequest;
//# sourceMappingURL=VerifyBalanceParameterStatusRequest.js.map