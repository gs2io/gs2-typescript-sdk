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
var VerifyCodeByUserIdRequest = /** @class */ (function () {
    function VerifyCodeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.code = null;
        this.campaignModelName = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyCodeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCodeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCodeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCodeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyCodeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getCode = function () {
        return this.code;
    };
    VerifyCodeByUserIdRequest.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    VerifyCodeByUserIdRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCodeByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyCodeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCodeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCodeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCodeByUserIdRequest.fromDict = function (data) {
        return new VerifyCodeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCode(data["code"])
            .withCampaignModelName(data["campaignModelName"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyCodeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "code": this.getCode(),
            "campaignModelName": this.getCampaignModelName(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyCodeByUserIdRequest;
}());
exports.default = VerifyCodeByUserIdRequest;
//# sourceMappingURL=VerifyCodeByUserIdRequest.js.map