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
var SubRankCapByUserIdRequest = /** @class */ (function () {
    function SubRankCapByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.rankCapValue = null;
        this.duplicationAvoider = null;
    }
    SubRankCapByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubRankCapByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubRankCapByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubRankCapByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SubRankCapByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    SubRankCapByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SubRankCapByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    SubRankCapByUserIdRequest.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubRankCapByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubRankCapByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubRankCapByUserIdRequest.fromDict = function (data) {
        return new SubRankCapByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withRankCapValue(data["rankCapValue"]);
    };
    SubRankCapByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "rankCapValue": this.getRankCapValue(),
        };
    };
    return SubRankCapByUserIdRequest;
}());
exports.default = SubRankCapByUserIdRequest;
//# sourceMappingURL=SubRankCapByUserIdRequest.js.map