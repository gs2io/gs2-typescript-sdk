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
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:user:{userId}:sendBox:{guildModelName}";
var SendBox = /** @class */ (function () {
    function SendBox() {
        this.sendBoxId = null;
        this.userId = null;
        this.guildModelName = null;
        this.targetGuildNames = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SendBox.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SendBox.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SendBox.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SendBox.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{guildModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SendBox.getGuildModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SendBox.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getGuildModelName(grn) == null || this.getGuildModelName(grn) === '') {
            return false;
        }
        return true;
    };
    SendBox.createGrn = function (region, ownerId, namespaceName, userId, guildModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{guildModelName}', guildModelName !== null && guildModelName !== void 0 ? guildModelName : '');
    };
    SendBox.prototype.getSendBoxId = function () {
        return this.sendBoxId;
    };
    SendBox.prototype.setSendBoxId = function (sendBoxId) {
        this.sendBoxId = sendBoxId;
        return this;
    };
    SendBox.prototype.withSendBoxId = function (sendBoxId) {
        this.sendBoxId = sendBoxId;
        return this;
    };
    SendBox.prototype.getUserId = function () {
        return this.userId;
    };
    SendBox.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendBox.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendBox.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    SendBox.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SendBox.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SendBox.prototype.getTargetGuildNames = function () {
        return this.targetGuildNames;
    };
    SendBox.prototype.setTargetGuildNames = function (targetGuildNames) {
        this.targetGuildNames = targetGuildNames;
        return this;
    };
    SendBox.prototype.withTargetGuildNames = function (targetGuildNames) {
        this.targetGuildNames = targetGuildNames;
        return this;
    };
    SendBox.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SendBox.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SendBox.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SendBox.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SendBox.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SendBox.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SendBox.prototype.getRevision = function () {
        return this.revision;
    };
    SendBox.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SendBox.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SendBox.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendBox()
            .withSendBoxId(data["sendBoxId"])
            .withUserId(data["userId"])
            .withGuildModelName(data["guildModelName"])
            .withTargetGuildNames(data.targetGuildNames ?
            data.targetGuildNames.map(function (item) {
                return item;
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SendBox.prototype.toDict = function () {
        return {
            "sendBoxId": this.getSendBoxId(),
            "userId": this.getUserId(),
            "guildModelName": this.getGuildModelName(),
            "targetGuildNames": this.getTargetGuildNames() ?
                this.getTargetGuildNames().map(function (item) {
                    return item;
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SendBox;
}());
exports.default = SendBox;
//# sourceMappingURL=SendBox.js.map