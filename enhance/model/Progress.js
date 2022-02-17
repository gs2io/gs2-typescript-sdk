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
var Progress = /** @class */ (function () {
    function Progress() {
        this.progressId = null;
        this.userId = null;
        this.rateName = null;
        this.propertyId = null;
        this.experienceValue = null;
        this.rate = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Progress.prototype.getProgressId = function () {
        return this.progressId;
    };
    Progress.prototype.setProgressId = function (progressId) {
        this.progressId = progressId;
        return this;
    };
    Progress.prototype.withProgressId = function (progressId) {
        this.progressId = progressId;
        return this;
    };
    Progress.prototype.getUserId = function () {
        return this.userId;
    };
    Progress.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Progress.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Progress.prototype.getRateName = function () {
        return this.rateName;
    };
    Progress.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    Progress.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    Progress.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    Progress.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Progress.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Progress.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    Progress.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    Progress.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    Progress.prototype.getRate = function () {
        return this.rate;
    };
    Progress.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    Progress.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    Progress.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Progress.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Progress.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Progress.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Progress.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Progress.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Progress.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Progress()
            .withProgressId(data["progressId"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"])
            .withRate(data["rate"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Progress.prototype.toDict = function () {
        return {
            "progressId": this.getProgressId(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
            "rate": this.getRate(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Progress;
}());
export default Progress;
//# sourceMappingURL=Progress.js.map