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
var SetExperienceByUserIdRequest = /** @class */ (function () {
    function SetExperienceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.experienceValue = null;
    }
    SetExperienceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetExperienceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetExperienceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetExperienceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetExperienceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    SetExperienceByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetExperienceByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    SetExperienceByUserIdRequest.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    SetExperienceByUserIdRequest.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    SetExperienceByUserIdRequest.fromDict = function (data) {
        return new SetExperienceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"]);
    };
    SetExperienceByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
        };
    };
    return SetExperienceByUserIdRequest;
}());
export default SetExperienceByUserIdRequest;
//# sourceMappingURL=SetExperienceByUserIdRequest.js.map