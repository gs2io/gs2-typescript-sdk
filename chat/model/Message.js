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
var Message = /** @class */ (function () {
    function Message() {
        this.messageId = null;
        this.roomName = null;
        this.name = null;
        this.userId = null;
        this.category = null;
        this.metadata = null;
        this.createdAt = null;
    }
    Message.prototype.getMessageId = function () {
        return this.messageId;
    };
    Message.prototype.setMessageId = function (messageId) {
        this.messageId = messageId;
        return this;
    };
    Message.prototype.withMessageId = function (messageId) {
        this.messageId = messageId;
        return this;
    };
    Message.prototype.getRoomName = function () {
        return this.roomName;
    };
    Message.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    Message.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    Message.prototype.getName = function () {
        return this.name;
    };
    Message.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Message.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Message.prototype.getUserId = function () {
        return this.userId;
    };
    Message.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Message.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Message.prototype.getCategory = function () {
        return this.category;
    };
    Message.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    Message.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    Message.prototype.getMetadata = function () {
        return this.metadata;
    };
    Message.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Message.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Message.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Message.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Message.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Message.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Message()
            .withMessageId(data["messageId"])
            .withRoomName(data["roomName"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCategory(data["category"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"]);
    };
    Message.prototype.toDict = function () {
        return {
            "messageId": this.getMessageId(),
            "roomName": this.getRoomName(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "category": this.getCategory(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=Message.js.map