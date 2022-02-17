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
var BlackList = /** @class */ (function () {
    function BlackList() {
        this.blackListId = null;
        this.userId = null;
        this.targetUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    BlackList.prototype.getBlackListId = function () {
        return this.blackListId;
    };
    BlackList.prototype.setBlackListId = function (blackListId) {
        this.blackListId = blackListId;
        return this;
    };
    BlackList.prototype.withBlackListId = function (blackListId) {
        this.blackListId = blackListId;
        return this;
    };
    BlackList.prototype.getUserId = function () {
        return this.userId;
    };
    BlackList.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BlackList.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BlackList.prototype.getTargetUserIds = function () {
        return this.targetUserIds;
    };
    BlackList.prototype.setTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    BlackList.prototype.withTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    BlackList.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BlackList.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BlackList.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BlackList.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BlackList.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BlackList.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BlackList.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BlackList()
            .withBlackListId(data["blackListId"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
            data.targetUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    BlackList.prototype.toDict = function () {
        return {
            "blackListId": this.getBlackListId(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return BlackList;
}());
export default BlackList;
//# sourceMappingURL=BlackList.js.map