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
var VerifyCodeRequest = /** @class */ (function () {
    function VerifyCodeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.code = null;
        this.campaignModelName = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyCodeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCodeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCodeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCodeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCodeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCodeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCodeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCodeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCodeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCodeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyCodeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCodeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCodeRequest.prototype.getCode = function () {
        return this.code;
    };
    VerifyCodeRequest.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    VerifyCodeRequest.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    VerifyCodeRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    VerifyCodeRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    VerifyCodeRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    VerifyCodeRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCodeRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCodeRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCodeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCodeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCodeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCodeRequest.fromDict = function (data) {
        return new VerifyCodeRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCode(data["code"])
            .withCampaignModelName(data["campaignModelName"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyCodeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "code": this.getCode(),
            "campaignModelName": this.getCampaignModelName(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyCodeRequest;
}());
exports.default = VerifyCodeRequest;
//# sourceMappingURL=VerifyCodeRequest.js.map