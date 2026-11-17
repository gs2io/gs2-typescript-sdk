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
var VerifyRatingRequest = /** @class */ (function () {
    function VerifyRatingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.ratingName = null;
        this.verifyType = null;
        this.rateValue = null;
        this.duplicationAvoider = null;
    }
    VerifyRatingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRatingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRatingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRatingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRatingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRatingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRatingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyRatingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRatingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyRatingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyRatingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyRatingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyRatingRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    VerifyRatingRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    VerifyRatingRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    VerifyRatingRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyRatingRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRatingRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyRatingRequest.prototype.getRateValue = function () {
        return this.rateValue;
    };
    VerifyRatingRequest.prototype.setRateValue = function (rateValue) {
        this.rateValue = rateValue;
        return this;
    };
    VerifyRatingRequest.prototype.withRateValue = function (rateValue) {
        this.rateValue = rateValue;
        return this;
    };
    VerifyRatingRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyRatingRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRatingRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyRatingRequest.fromDict = function (data) {
        return new VerifyRatingRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRatingName(data["ratingName"])
            .withVerifyType(data["verifyType"])
            .withRateValue(data["rateValue"]);
    };
    VerifyRatingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "ratingName": this.getRatingName(),
            "verifyType": this.getVerifyType(),
            "rateValue": this.getRateValue(),
        };
    };
    return VerifyRatingRequest;
}());
exports.default = VerifyRatingRequest;
//# sourceMappingURL=VerifyRatingRequest.js.map