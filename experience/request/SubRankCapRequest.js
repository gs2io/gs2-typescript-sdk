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
var SubRankCapRequest = /** @class */ (function () {
    function SubRankCapRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.experienceName = null;
        this.propertyId = null;
        this.rankCapValue = null;
        this.duplicationAvoider = null;
    }
    SubRankCapRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubRankCapRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubRankCapRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubRankCapRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubRankCapRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubRankCapRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubRankCapRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubRankCapRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubRankCapRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubRankCapRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SubRankCapRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubRankCapRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubRankCapRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    SubRankCapRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubRankCapRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubRankCapRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SubRankCapRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubRankCapRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubRankCapRequest.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    SubRankCapRequest.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    SubRankCapRequest.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    SubRankCapRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubRankCapRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubRankCapRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubRankCapRequest.fromDict = function (data) {
        return new SubRankCapRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withRankCapValue(data["rankCapValue"]);
    };
    SubRankCapRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "rankCapValue": this.getRankCapValue(),
        };
    };
    return SubRankCapRequest;
}());
exports.default = SubRankCapRequest;
//# sourceMappingURL=SubRankCapRequest.js.map