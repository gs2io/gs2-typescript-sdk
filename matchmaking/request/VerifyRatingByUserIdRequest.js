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
var VerifyRatingByUserIdRequest = /** @class */ (function () {
    function VerifyRatingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.ratingName = null;
        this.verifyType = null;
        this.rateValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyRatingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRatingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRatingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRatingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyRatingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    VerifyRatingByUserIdRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRatingByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getRateValue = function () {
        return this.rateValue;
    };
    VerifyRatingByUserIdRequest.prototype.setRateValue = function (rateValue) {
        this.rateValue = rateValue;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withRateValue = function (rateValue) {
        this.rateValue = rateValue;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyRatingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRatingByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRatingByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRatingByUserIdRequest.fromDict = function (data) {
        return new VerifyRatingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRatingName(data["ratingName"])
            .withVerifyType(data["verifyType"])
            .withRateValue(data["rateValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyRatingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "ratingName": this.getRatingName(),
            "verifyType": this.getVerifyType(),
            "rateValue": this.getRateValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyRatingByUserIdRequest;
}());
exports.default = VerifyRatingByUserIdRequest;
//# sourceMappingURL=VerifyRatingByUserIdRequest.js.map