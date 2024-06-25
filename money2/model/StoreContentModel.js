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
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:model:content:{contentName}";
var StoreContentModel = /** @class */ (function () {
    function StoreContentModel() {
        this.storeContentModelId = null;
        this.name = null;
        this.metadata = null;
        this.appleAppStore = null;
        this.googlePlay = null;
    }
    StoreContentModel.getRegion = function (grn) {
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
    StoreContentModel.getOwnerId = function (grn) {
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
    StoreContentModel.getNamespaceName = function (grn) {
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
    StoreContentModel.getContentName = function (grn) {
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
    StoreContentModel.isValid = function (grn) {
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
    StoreContentModel.createGrn = function (region, ownerId, namespaceName, contentName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentName}', contentName !== null && contentName !== void 0 ? contentName : '');
    };
    StoreContentModel.prototype.getStoreContentModelId = function () {
        return this.storeContentModelId;
    };
    StoreContentModel.prototype.setStoreContentModelId = function (storeContentModelId) {
        this.storeContentModelId = storeContentModelId;
        return this;
    };
    StoreContentModel.prototype.withStoreContentModelId = function (storeContentModelId) {
        this.storeContentModelId = storeContentModelId;
        return this;
    };
    StoreContentModel.prototype.getName = function () {
        return this.name;
    };
    StoreContentModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StoreContentModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    StoreContentModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    StoreContentModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreContentModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreContentModel.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    StoreContentModel.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreContentModel.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreContentModel.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    StoreContentModel.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreContentModel.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreContentModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StoreContentModel()
            .withStoreContentModelId(data["storeContentModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withAppleAppStore(AppleAppStoreContent_1.default.fromDict(data["appleAppStore"]))
            .withGooglePlay(GooglePlayContent_1.default.fromDict(data["googlePlay"]));
    };
    StoreContentModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "storeContentModelId": this.getStoreContentModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return StoreContentModel;
}());
exports.default = StoreContentModel;
//# sourceMappingURL=StoreContentModel.js.map