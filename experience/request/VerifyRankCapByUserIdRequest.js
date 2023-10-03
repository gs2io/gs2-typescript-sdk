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
var VerifyRankCapByUserIdRequest = /** @class */ (function () {
    function VerifyRankCapByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.verifyType = null;
        this.propertyId = null;
        this.rankCapValue = null;
        this.duplicationAvoider = null;
    }
    VerifyRankCapByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRankCapByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRankCapByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRankCapByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyRankCapByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    VerifyRankCapByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRankCapByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyRankCapByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    VerifyRankCapByUserIdRequest.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRankCapByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRankCapByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRankCapByUserIdRequest.fromDict = function (data) {
        return new VerifyRankCapByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withVerifyType(data["verifyType"])
            .withPropertyId(data["propertyId"])
            .withRankCapValue(data["rankCapValue"]);
    };
    VerifyRankCapByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "verifyType": this.getVerifyType(),
            "propertyId": this.getPropertyId(),
            "rankCapValue": this.getRankCapValue(),
        };
    };
    return VerifyRankCapByUserIdRequest;
}());
exports.default = VerifyRankCapByUserIdRequest;
//# sourceMappingURL=VerifyRankCapByUserIdRequest.js.map