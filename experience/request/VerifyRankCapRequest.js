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
var VerifyRankCapRequest = /** @class */ (function () {
    function VerifyRankCapRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.experienceName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.rankCapValue = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyRankCapRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRankCapRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRankCapRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRankCapRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRankCapRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRankCapRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRankCapRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRankCapRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRankCapRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRankCapRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyRankCapRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyRankCapRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyRankCapRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    VerifyRankCapRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    VerifyRankCapRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    VerifyRankCapRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRankCapRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRankCapRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRankCapRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyRankCapRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRankCapRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRankCapRequest.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    VerifyRankCapRequest.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    VerifyRankCapRequest.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    VerifyRankCapRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyRankCapRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRankCapRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRankCapRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRankCapRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRankCapRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRankCapRequest.fromDict = function (data) {
        return new VerifyRankCapRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withExperienceName(data["experienceName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withRankCapValue(data["rankCapValue"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyRankCapRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "experienceName": this.getExperienceName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "rankCapValue": this.getRankCapValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyRankCapRequest;
}());
exports.default = VerifyRankCapRequest;
//# sourceMappingURL=VerifyRankCapRequest.js.map