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
var grnFormat = "grn:gs2:{region}:{ownerId}:serialKey:{namespaceName}:serialKey:{serialKeyCode}";
var SerialKey = /** @class */ (function () {
    function SerialKey() {
        this.serialKeyId = null;
        this.campaignModelName = null;
        this.code = null;
        this.metadata = null;
        this.status = null;
        this.usedUserId = null;
        this.createdAt = null;
        this.usedAt = null;
        this.updatedAt = null;
    }
    SerialKey.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{serialKeyCode}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SerialKey.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{serialKeyCode}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SerialKey.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{serialKeyCode}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SerialKey.getSerialKeyCode = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{serialKeyCode}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SerialKey.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getSerialKeyCode(grn) == null || this.getSerialKeyCode(grn) === '') {
            return false;
        }
        return true;
    };
    SerialKey.createGrn = function (region, ownerId, namespaceName, serialKeyCode) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{serialKeyCode}', serialKeyCode !== null && serialKeyCode !== void 0 ? serialKeyCode : '');
    };
    SerialKey.prototype.getSerialKeyId = function () {
        return this.serialKeyId;
    };
    SerialKey.prototype.setSerialKeyId = function (serialKeyId) {
        this.serialKeyId = serialKeyId;
        return this;
    };
    SerialKey.prototype.withSerialKeyId = function (serialKeyId) {
        this.serialKeyId = serialKeyId;
        return this;
    };
    SerialKey.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    SerialKey.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    SerialKey.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    SerialKey.prototype.getCode = function () {
        return this.code;
    };
    SerialKey.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    SerialKey.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    SerialKey.prototype.getMetadata = function () {
        return this.metadata;
    };
    SerialKey.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SerialKey.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SerialKey.prototype.getStatus = function () {
        return this.status;
    };
    SerialKey.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    SerialKey.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    SerialKey.prototype.getUsedUserId = function () {
        return this.usedUserId;
    };
    SerialKey.prototype.setUsedUserId = function (usedUserId) {
        this.usedUserId = usedUserId;
        return this;
    };
    SerialKey.prototype.withUsedUserId = function (usedUserId) {
        this.usedUserId = usedUserId;
        return this;
    };
    SerialKey.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SerialKey.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SerialKey.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SerialKey.prototype.getUsedAt = function () {
        return this.usedAt;
    };
    SerialKey.prototype.setUsedAt = function (usedAt) {
        this.usedAt = usedAt;
        return this;
    };
    SerialKey.prototype.withUsedAt = function (usedAt) {
        this.usedAt = usedAt;
        return this;
    };
    SerialKey.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SerialKey.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SerialKey.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SerialKey.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SerialKey()
            .withSerialKeyId(data["serialKeyId"])
            .withCampaignModelName(data["campaignModelName"])
            .withCode(data["code"])
            .withMetadata(data["metadata"])
            .withStatus(data["status"])
            .withUsedUserId(data["usedUserId"])
            .withCreatedAt(data["createdAt"])
            .withUsedAt(data["usedAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    SerialKey.prototype.toDict = function () {
        return {
            "serialKeyId": this.getSerialKeyId(),
            "campaignModelName": this.getCampaignModelName(),
            "code": this.getCode(),
            "metadata": this.getMetadata(),
            "status": this.getStatus(),
            "usedUserId": this.getUsedUserId(),
            "createdAt": this.getCreatedAt(),
            "usedAt": this.getUsedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return SerialKey;
}());
exports.default = SerialKey;
//# sourceMappingURL=SerialKey.js.map