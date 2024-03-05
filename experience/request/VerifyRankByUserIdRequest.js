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
var VerifyRankByUserIdRequest = /** @class */ (function () {
    function VerifyRankByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.rankValue = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyRankByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRankByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRankByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRankByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyRankByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    VerifyRankByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRankByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyRankByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getRankValue = function () {
        return this.rankValue;
    };
    VerifyRankByUserIdRequest.prototype.setRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyRankByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRankByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRankByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRankByUserIdRequest.fromDict = function (data) {
        return new VerifyRankByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withRankValue(data["rankValue"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyRankByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "rankValue": this.getRankValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyRankByUserIdRequest;
}());
exports.default = VerifyRankByUserIdRequest;
//# sourceMappingURL=VerifyRankByUserIdRequest.js.map