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
var Friend = /** @class */ (function () {
    function Friend() {
        this.friendId = null;
        this.userId = null;
        this.targetUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Friend.prototype.getFriendId = function () {
        return this.friendId;
    };
    Friend.prototype.setFriendId = function (friendId) {
        this.friendId = friendId;
        return this;
    };
    Friend.prototype.withFriendId = function (friendId) {
        this.friendId = friendId;
        return this;
    };
    Friend.prototype.getUserId = function () {
        return this.userId;
    };
    Friend.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Friend.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Friend.prototype.getTargetUserIds = function () {
        return this.targetUserIds;
    };
    Friend.prototype.setTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Friend.prototype.withTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Friend.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Friend.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Friend.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Friend.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Friend.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Friend.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Friend.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Friend()
            .withFriendId(data["friendId"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
            data.targetUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Friend.prototype.toDict = function () {
        return {
            "friendId": this.getFriendId(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Friend;
}());
export default Friend;
//# sourceMappingURL=Friend.js.map