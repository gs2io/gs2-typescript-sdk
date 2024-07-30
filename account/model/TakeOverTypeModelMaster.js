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
var OpenIdConnectSetting_1 = tslib_1.__importDefault(require("./OpenIdConnectSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:model:takeOver:{type}";
var TakeOverTypeModelMaster = /** @class */ (function () {
    function TakeOverTypeModelMaster() {
        this.takeOverTypeModelId = null;
        this.type = null;
        this.description = null;
        this.metadata = null;
        this.openIdConnectSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    TakeOverTypeModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{type}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModelMaster.getType = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    TakeOverTypeModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getType(grn) == null || this.getType(grn) === '') {
            return false;
        }
        return true;
    };
    TakeOverTypeModelMaster.createGrn = function (region, ownerId, namespaceName, type) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{type}', type !== null && type !== void 0 ? type : '');
    };
    TakeOverTypeModelMaster.prototype.getTakeOverTypeModelId = function () {
        return this.takeOverTypeModelId;
    };
    TakeOverTypeModelMaster.prototype.setTakeOverTypeModelId = function (takeOverTypeModelId) {
        this.takeOverTypeModelId = takeOverTypeModelId;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withTakeOverTypeModelId = function (takeOverTypeModelId) {
        this.takeOverTypeModelId = takeOverTypeModelId;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getType = function () {
        return this.type;
    };
    TakeOverTypeModelMaster.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    TakeOverTypeModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    TakeOverTypeModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getOpenIdConnectSetting = function () {
        return this.openIdConnectSetting;
    };
    TakeOverTypeModelMaster.prototype.setOpenIdConnectSetting = function (openIdConnectSetting) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withOpenIdConnectSetting = function (openIdConnectSetting) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    TakeOverTypeModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    TakeOverTypeModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    TakeOverTypeModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    TakeOverTypeModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    TakeOverTypeModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    TakeOverTypeModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TakeOverTypeModelMaster()
            .withTakeOverTypeModelId(data["takeOverTypeModelId"])
            .withType(data["type"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withOpenIdConnectSetting(OpenIdConnectSetting_1.default.fromDict(data["openIdConnectSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    TakeOverTypeModelMaster.prototype.toDict = function () {
        var _a;
        return {
            "takeOverTypeModelId": this.getTakeOverTypeModelId(),
            "type": this.getType(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "openIdConnectSetting": (_a = this.getOpenIdConnectSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return TakeOverTypeModelMaster;
}());
exports.default = TakeOverTypeModelMaster;
//# sourceMappingURL=TakeOverTypeModelMaster.js.map