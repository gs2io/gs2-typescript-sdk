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
var ApplyRankCapRequest = /** @class */ (function () {
    function ApplyRankCapRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.gradeName = null;
        this.propertyId = null;
        this.duplicationAvoider = null;
    }
    ApplyRankCapRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ApplyRankCapRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyRankCapRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyRankCapRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ApplyRankCapRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyRankCapRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyRankCapRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ApplyRankCapRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyRankCapRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyRankCapRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ApplyRankCapRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ApplyRankCapRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ApplyRankCapRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    ApplyRankCapRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    ApplyRankCapRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    ApplyRankCapRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ApplyRankCapRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ApplyRankCapRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ApplyRankCapRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ApplyRankCapRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyRankCapRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyRankCapRequest.fromDict = function (data) {
        return new ApplyRankCapRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"]);
    };
    ApplyRankCapRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return ApplyRankCapRequest;
}());
exports.default = ApplyRankCapRequest;
//# sourceMappingURL=ApplyRankCapRequest.js.map