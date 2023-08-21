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
var grnFormat = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}:room:{roomName}";
var Room = /** @class */ (function () {
    function Room() {
        this.roomId = null;
        this.name = null;
        this.userId = null;
        this.metadata = null;
        this.password = null;
        this.whiteListUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Room.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Room.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Room.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{roomName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Room.getRoomName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{roomName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Room.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRoomName(grn) == null || this.getRoomName(grn) === '') {
            return false;
        }
        return true;
    };
    Room.createGrn = function (region, ownerId, namespaceName, roomName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{roomName}', roomName !== null && roomName !== void 0 ? roomName : '');
    };
    Room.prototype.getRoomId = function () {
        return this.roomId;
    };
    Room.prototype.setRoomId = function (roomId) {
        this.roomId = roomId;
        return this;
    };
    Room.prototype.withRoomId = function (roomId) {
        this.roomId = roomId;
        return this;
    };
    Room.prototype.getName = function () {
        return this.name;
    };
    Room.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Room.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Room.prototype.getUserId = function () {
        return this.userId;
    };
    Room.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Room.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Room.prototype.getMetadata = function () {
        return this.metadata;
    };
    Room.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Room.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Room.prototype.getPassword = function () {
        return this.password;
    };
    Room.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    Room.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    Room.prototype.getWhiteListUserIds = function () {
        return this.whiteListUserIds;
    };
    Room.prototype.setWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    Room.prototype.withWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    Room.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Room.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Room.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Room.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Room.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Room.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Room.prototype.getRevision = function () {
        return this.revision;
    };
    Room.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Room.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Room.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Room()
            .withRoomId(data["roomId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
            data.whiteListUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Room.prototype.toDict = function () {
        return {
            "roomId": this.getRoomId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Room;
}());
exports.default = Room;
//# sourceMappingURL=Room.js.map