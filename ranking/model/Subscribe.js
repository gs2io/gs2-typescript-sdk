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
var Subscribe = /** @class */ (function () {
    function Subscribe() {
        this.subscribeId = null;
        this.categoryName = null;
        this.userId = null;
        this.targetUserIds = null;
        this.subscribedUserIds = null;
        this.createdAt = null;
    }
    Subscribe.prototype.getSubscribeId = function () {
        return this.subscribeId;
    };
    Subscribe.prototype.setSubscribeId = function (subscribeId) {
        this.subscribeId = subscribeId;
        return this;
    };
    Subscribe.prototype.withSubscribeId = function (subscribeId) {
        this.subscribeId = subscribeId;
        return this;
    };
    Subscribe.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    Subscribe.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    Subscribe.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    Subscribe.prototype.getUserId = function () {
        return this.userId;
    };
    Subscribe.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Subscribe.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Subscribe.prototype.getTargetUserIds = function () {
        return this.targetUserIds;
    };
    Subscribe.prototype.setTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Subscribe.prototype.withTargetUserIds = function (targetUserIds) {
        this.targetUserIds = targetUserIds;
        return this;
    };
    Subscribe.prototype.getSubscribedUserIds = function () {
        return this.subscribedUserIds;
    };
    Subscribe.prototype.setSubscribedUserIds = function (subscribedUserIds) {
        this.subscribedUserIds = subscribedUserIds;
        return this;
    };
    Subscribe.prototype.withSubscribedUserIds = function (subscribedUserIds) {
        this.subscribedUserIds = subscribedUserIds;
        return this;
    };
    Subscribe.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Subscribe.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Subscribe.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Subscribe.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Subscribe()
            .withSubscribeId(data["subscribeId"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
            data.targetUserIds.map(function (item) {
                return item;
            }) : [])
            .withSubscribedUserIds(data.subscribedUserIds ?
            data.subscribedUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"]);
    };
    Subscribe.prototype.toDict = function () {
        return {
            "subscribeId": this.getSubscribeId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds().map(function (item) {
                    return item;
                }) : [],
            "subscribedUserIds": this.getSubscribedUserIds() ?
                this.getSubscribedUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
        };
    };
    return Subscribe;
}());
export default Subscribe;
//# sourceMappingURL=Subscribe.js.map