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
var Room = /** @class */ (function () {
    function Room() {
        this.roomId = null;
        this.name = null;
        this.ipAddress = null;
        this.port = null;
        this.encryptionKey = null;
        this.notificationUserIds = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
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
    Room.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    Room.prototype.setIpAddress = function (ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    };
    Room.prototype.withIpAddress = function (ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    };
    Room.prototype.getPort = function () {
        return this.port;
    };
    Room.prototype.setPort = function (port) {
        this.port = port;
        return this;
    };
    Room.prototype.withPort = function (port) {
        this.port = port;
        return this;
    };
    Room.prototype.getEncryptionKey = function () {
        return this.encryptionKey;
    };
    Room.prototype.setEncryptionKey = function (encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    };
    Room.prototype.withEncryptionKey = function (encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    };
    Room.prototype.getNotificationUserIds = function () {
        return this.notificationUserIds;
    };
    Room.prototype.setNotificationUserIds = function (notificationUserIds) {
        this.notificationUserIds = notificationUserIds;
        return this;
    };
    Room.prototype.withNotificationUserIds = function (notificationUserIds) {
        this.notificationUserIds = notificationUserIds;
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
    Room.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Room()
            .withRoomId(data["roomId"])
            .withName(data["name"])
            .withIpAddress(data["ipAddress"])
            .withPort(data["port"])
            .withEncryptionKey(data["encryptionKey"])
            .withNotificationUserIds(data.notificationUserIds ?
            data.notificationUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Room.prototype.toDict = function () {
        return {
            "roomId": this.getRoomId(),
            "name": this.getName(),
            "ipAddress": this.getIpAddress(),
            "port": this.getPort(),
            "encryptionKey": this.getEncryptionKey(),
            "notificationUserIds": this.getNotificationUserIds() ?
                this.getNotificationUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Room;
}());
export default Room;
//# sourceMappingURL=Room.js.map