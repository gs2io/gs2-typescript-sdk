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
var AddExperienceByUserIdRequest = /** @class */ (function () {
    function AddExperienceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.experienceValue = null;
    }
    AddExperienceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddExperienceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddExperienceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddExperienceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddExperienceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    AddExperienceByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    AddExperienceByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    AddExperienceByUserIdRequest.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    AddExperienceByUserIdRequest.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    AddExperienceByUserIdRequest.fromDict = function (data) {
        return new AddExperienceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"]);
    };
    AddExperienceByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
        };
    };
    return AddExperienceByUserIdRequest;
}());
export default AddExperienceByUserIdRequest;
//# sourceMappingURL=AddExperienceByUserIdRequest.js.map