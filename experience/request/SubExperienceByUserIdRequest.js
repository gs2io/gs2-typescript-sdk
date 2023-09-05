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
var SubExperienceByUserIdRequest = /** @class */ (function () {
    function SubExperienceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.experienceValue = null;
        this.duplicationAvoider = null;
    }
    SubExperienceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubExperienceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubExperienceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubExperienceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SubExperienceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    SubExperienceByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SubExperienceByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    SubExperienceByUserIdRequest.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubExperienceByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubExperienceByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubExperienceByUserIdRequest.fromDict = function (data) {
        return new SubExperienceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"]);
    };
    SubExperienceByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
        };
    };
    return SubExperienceByUserIdRequest;
}());
exports.default = SubExperienceByUserIdRequest;
//# sourceMappingURL=SubExperienceByUserIdRequest.js.map