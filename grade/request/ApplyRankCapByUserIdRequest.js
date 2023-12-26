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
var ApplyRankCapByUserIdRequest = /** @class */ (function () {
    function ApplyRankCapByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.gradeName = null;
        this.propertyId = null;
        this.duplicationAvoider = null;
    }
    ApplyRankCapByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ApplyRankCapByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ApplyRankCapByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ApplyRankCapByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ApplyRankCapByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    ApplyRankCapByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ApplyRankCapByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ApplyRankCapByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyRankCapByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyRankCapByUserIdRequest.fromDict = function (data) {
        return new ApplyRankCapByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"]);
    };
    ApplyRankCapByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return ApplyRankCapByUserIdRequest;
}());
exports.default = ApplyRankCapByUserIdRequest;
//# sourceMappingURL=ApplyRankCapByUserIdRequest.js.map