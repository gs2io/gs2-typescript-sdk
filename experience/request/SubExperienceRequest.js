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
var SubExperienceRequest = /** @class */ (function () {
    function SubExperienceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.experienceName = null;
        this.propertyId = null;
        this.experienceValue = null;
        this.duplicationAvoider = null;
    }
    SubExperienceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubExperienceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubExperienceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubExperienceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubExperienceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubExperienceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubExperienceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubExperienceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubExperienceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubExperienceRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SubExperienceRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubExperienceRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubExperienceRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    SubExperienceRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubExperienceRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SubExperienceRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SubExperienceRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubExperienceRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SubExperienceRequest.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    SubExperienceRequest.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    SubExperienceRequest.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    SubExperienceRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubExperienceRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubExperienceRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubExperienceRequest.fromDict = function (data) {
        return new SubExperienceRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"]);
    };
    SubExperienceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
        };
    };
    return SubExperienceRequest;
}());
exports.default = SubExperienceRequest;
//# sourceMappingURL=SubExperienceRequest.js.map