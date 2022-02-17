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
var Status = /** @class */ (function () {
    function Status() {
        this.statusId = null;
        this.experienceName = null;
        this.userId = null;
        this.propertyId = null;
        this.experienceValue = null;
        this.rankValue = null;
        this.rankCapValue = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Status.prototype.getStatusId = function () {
        return this.statusId;
    };
    Status.prototype.setStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.withStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    Status.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    Status.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    Status.prototype.getUserId = function () {
        return this.userId;
    };
    Status.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    Status.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Status.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Status.prototype.getExperienceValue = function () {
        return this.experienceValue;
    };
    Status.prototype.setExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    Status.prototype.withExperienceValue = function (experienceValue) {
        this.experienceValue = experienceValue;
        return this;
    };
    Status.prototype.getRankValue = function () {
        return this.rankValue;
    };
    Status.prototype.setRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    Status.prototype.withRankValue = function (rankValue) {
        this.rankValue = rankValue;
        return this;
    };
    Status.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    Status.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    Status.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    Status.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Status.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Status.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withExperienceName(data["experienceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"])
            .withRankValue(data["rankValue"])
            .withRankCapValue(data["rankCapValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Status.prototype.toDict = function () {
        return {
            "statusId": this.getStatusId(),
            "experienceName": this.getExperienceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
            "rankValue": this.getRankValue(),
            "rankCapValue": this.getRankCapValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Status;
}());
export default Status;
//# sourceMappingURL=Status.js.map