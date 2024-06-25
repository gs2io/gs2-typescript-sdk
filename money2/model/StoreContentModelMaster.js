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
var AppleAppStoreContent_1 = tslib_1.__importDefault(require("./AppleAppStoreContent"));
var GooglePlayContent_1 = tslib_1.__importDefault(require("./GooglePlayContent"));
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:master:content:{contentName}";
var StoreContentModelMaster = /** @class */ (function () {
    function StoreContentModelMaster() {
        this.storeContentModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.appleAppStore = null;
        this.googlePlay = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    StoreContentModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StoreContentModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StoreContentModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{contentName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StoreContentModelMaster.getContentName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StoreContentModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getContentName(grn) == null || this.getContentName(grn) === '') {
            return false;
        }
        return true;
    };
    StoreContentModelMaster.createGrn = function (region, ownerId, namespaceName, contentName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentName}', contentName !== null && contentName !== void 0 ? contentName : '');
    };
    StoreContentModelMaster.prototype.getStoreContentModelId = function () {
        return this.storeContentModelId;
    };
    StoreContentModelMaster.prototype.setStoreContentModelId = function (storeContentModelId) {
        this.storeContentModelId = storeContentModelId;
        return this;
    };
    StoreContentModelMaster.prototype.withStoreContentModelId = function (storeContentModelId) {
        this.storeContentModelId = storeContentModelId;
        return this;
    };
    StoreContentModelMaster.prototype.getName = function () {
        return this.name;
    };
    StoreContentModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StoreContentModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    StoreContentModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    StoreContentModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    StoreContentModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    StoreContentModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    StoreContentModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreContentModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreContentModelMaster.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    StoreContentModelMaster.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreContentModelMaster.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreContentModelMaster.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    StoreContentModelMaster.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreContentModelMaster.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreContentModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    StoreContentModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StoreContentModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StoreContentModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    StoreContentModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StoreContentModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StoreContentModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    StoreContentModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    StoreContentModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    StoreContentModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StoreContentModelMaster()
            .withStoreContentModelId(data["storeContentModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withAppleAppStore(AppleAppStoreContent_1.default.fromDict(data["appleAppStore"]))
            .withGooglePlay(GooglePlayContent_1.default.fromDict(data["googlePlay"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    StoreContentModelMaster.prototype.toDict = function () {
        var _a, _b;
        return {
            "storeContentModelId": this.getStoreContentModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return StoreContentModelMaster;
}());
exports.default = StoreContentModelMaster;
//# sourceMappingURL=StoreContentModelMaster.js.map