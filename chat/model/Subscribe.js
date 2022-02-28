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
var tslib_1 = require("tslib");
var NotificationType_1 = (0, tslib_1.__importDefault)(require("./NotificationType"));
var grnFormat = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}:user:{userId}:subscribe:{roomName}";
var Subscribe = /** @class */ (function () {
    function Subscribe() {
        this.subscribeId = null;
        this.userId = null;
        this.roomName = null;
        this.notificationTypes = null;
        this.createdAt = null;
    }
    Subscribe.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.getRoomName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{roomName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Subscribe.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getRoomName(grn) == null) {
            return false;
        }
        return true;
    };
    Subscribe.createGrn = function (region, ownerId, namespaceName, userId, roomName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{roomName}', roomName !== null && roomName !== void 0 ? roomName : '');
    };
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
    Subscribe.prototype.getRoomName = function () {
        return this.roomName;
    };
    Subscribe.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    Subscribe.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    Subscribe.prototype.getNotificationTypes = function () {
        return this.notificationTypes;
    };
    Subscribe.prototype.setNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    Subscribe.prototype.withNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
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
            .withUserId(data["userId"])
            .withRoomName(data["roomName"])
            .withNotificationTypes(data.notificationTypes ?
            data.notificationTypes.map(function (item) {
                return NotificationType_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"]);
    };
    Subscribe.prototype.toDict = function () {
        return {
            "subscribeId": this.getSubscribeId(),
            "userId": this.getUserId(),
            "roomName": this.getRoomName(),
            "notificationTypes": this.getNotificationTypes() ?
                this.getNotificationTypes().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
        };
    };
    return Subscribe;
}());
exports.default = Subscribe;
//# sourceMappingURL=Subscribe.js.map