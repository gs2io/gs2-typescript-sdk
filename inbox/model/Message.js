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
var AcquireAction_1 = (0, tslib_1.__importDefault)(require("./AcquireAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}:message:{messageName}";
var Message = /** @class */ (function () {
    function Message() {
        this.messageId = null;
        this.name = null;
        this.userId = null;
        this.metadata = null;
        this.isRead = null;
        this.readAcquireActions = null;
        this.receivedAt = null;
        this.readAt = null;
        this.expiresAt = null;
    }
    Message.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{messageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Message.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{messageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Message.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{messageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Message.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{messageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Message.getMessageName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{messageName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Message.isValid = function (grn) {
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
        if (this.getMessageName(grn) == null) {
            return false;
        }
        return true;
    };
    Message.createGrn = function (region, ownerId, namespaceName, userId, messageName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (userId == null || userId === '') {
            return null;
        }
        if (messageName == null || messageName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId)
            .replace('{messageName}', messageName);
    };
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
    Message.prototype.getIsRead = function () {
        return this.isRead;
    };
    Message.prototype.setIsRead = function (isRead) {
        this.isRead = isRead;
        return this;
    };
    Message.prototype.withIsRead = function (isRead) {
        this.isRead = isRead;
        return this;
    };
    Message.prototype.getReadAcquireActions = function () {
        return this.readAcquireActions;
    };
    Message.prototype.setReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    Message.prototype.withReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    Message.prototype.getReceivedAt = function () {
        return this.receivedAt;
    };
    Message.prototype.setReceivedAt = function (receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    };
    Message.prototype.withReceivedAt = function (receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    };
    Message.prototype.getReadAt = function () {
        return this.readAt;
    };
    Message.prototype.setReadAt = function (readAt) {
        this.readAt = readAt;
        return this;
    };
    Message.prototype.withReadAt = function (readAt) {
        this.readAt = readAt;
        return this;
    };
    Message.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    Message.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    Message.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    Message.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Message()
            .withMessageId(data["messageId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withIsRead(data["isRead"])
            .withReadAcquireActions(data.readAcquireActions ?
            data.readAcquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withReceivedAt(data["receivedAt"])
            .withReadAt(data["readAt"])
            .withExpiresAt(data["expiresAt"]);
    };
    Message.prototype.toDict = function () {
        return {
            "messageId": this.getMessageId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "isRead": this.getIsRead(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "receivedAt": this.getReceivedAt(),
            "readAt": this.getReadAt(),
            "expiresAt": this.getExpiresAt(),
        };
    };
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=Message.js.map