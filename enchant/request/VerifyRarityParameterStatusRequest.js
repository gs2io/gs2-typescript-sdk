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
var VerifyRarityParameterStatusRequest = /** @class */ (function () {
    function VerifyRarityParameterStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
        this.accessToken = null;
        this.propertyId = null;
        this.verifyType = null;
        this.parameterValueName = null;
        this.parameterCount = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyRarityParameterStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRarityParameterStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRarityParameterStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRarityParameterStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    VerifyRarityParameterStatusRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyRarityParameterStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyRarityParameterStatusRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRarityParameterStatusRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getParameterValueName = function () {
        return this.parameterValueName;
    };
    VerifyRarityParameterStatusRequest.prototype.setParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withParameterValueName = function (parameterValueName) {
        this.parameterValueName = parameterValueName;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getParameterCount = function () {
        return this.parameterCount;
    };
    VerifyRarityParameterStatusRequest.prototype.setParameterCount = function (parameterCount) {
        this.parameterCount = parameterCount;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withParameterCount = function (parameterCount) {
        this.parameterCount = parameterCount;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyRarityParameterStatusRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRarityParameterStatusRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRarityParameterStatusRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRarityParameterStatusRequest.fromDict = function (data) {
        return new VerifyRarityParameterStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"])
            .withAccessToken(data["accessToken"])
            .withPropertyId(data["propertyId"])
            .withVerifyType(data["verifyType"])
            .withParameterValueName(data["parameterValueName"])
            .withParameterCount(data["parameterCount"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyRarityParameterStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
            "accessToken": this.getAccessToken(),
            "propertyId": this.getPropertyId(),
            "verifyType": this.getVerifyType(),
            "parameterValueName": this.getParameterValueName(),
            "parameterCount": this.getParameterCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyRarityParameterStatusRequest;
}());
exports.default = VerifyRarityParameterStatusRequest;
//# sourceMappingURL=VerifyRarityParameterStatusRequest.js.map