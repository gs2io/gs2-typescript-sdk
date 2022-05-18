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
var SetRankCapByUserIdRequest = /** @class */ (function () {
    function SetRankCapByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.rankCapValue = null;
        this.duplicationAvoider = null;
    }
    SetRankCapByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRankCapByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRankCapByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetRankCapByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetRankCapByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    SetRankCapByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetRankCapByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    SetRankCapByUserIdRequest.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetRankCapByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRankCapByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRankCapByUserIdRequest.fromDict = function (data) {
        return new SetRankCapByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withRankCapValue(data["rankCapValue"]);
    };
    SetRankCapByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "rankCapValue": this.getRankCapValue(),
        };
    };
    return SetRankCapByUserIdRequest;
}());
exports.default = SetRankCapByUserIdRequest;
//# sourceMappingURL=SetRankCapByUserIdRequest.js.map