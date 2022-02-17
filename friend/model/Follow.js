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
var Follow = /** @class */ (function () {
    function Follow() {
        this.followId = null;
        this.userId = null;
        this.targetUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Follow.prototype.getFollowId = function () {
        return this.followId;
    };
    Follow.prototype.setFollowId = function (followId) {
        this.followId = followId;
        return this;
    };
    Follow.prototype.withFollowId = function (followId) {
        this.followId = followId;
        return this;
    };
    Follow.prototype.getUserId = function () {
        return this.userId;
    };
    Follow.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Follow.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Follow.prototype.getTargetUserIds = function () {
        return this.targetUserIds;
    };
    Follow.prototype.setTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Follow.prototype.withTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Follow.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Follow.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Follow.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Follow.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Follow.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Follow.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Follow.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Follow()
            .withFollowId(data["followId"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
            data.targetUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Follow.prototype.toDict = function () {
        return {
            "followId": this.getFollowId(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Follow;
}());
export default Follow;
//# sourceMappingURL=Follow.js.map