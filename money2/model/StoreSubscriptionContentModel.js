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
var Gs2Money2 = tslib_1.__importStar(require("../../money2/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:model:subscription:content:{contentName}";
var StoreSubscriptionContentModel = /** @class */ (function () {
    function StoreSubscriptionContentModel() {
        this.storeSubscriptionContentModelId = null;
        this.name = null;
        this.metadata = null;
        this.scheduleNamespaceId = null;
        this.triggerName = null;
        this.reallocateSpanDays = null;
        this.appleAppStore = null;
        this.googlePlay = null;
    }
    StoreSubscriptionContentModel.getRegion = function (grn) {
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
    StoreSubscriptionContentModel.getOwnerId = function (grn) {
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
    StoreSubscriptionContentModel.getNamespaceName = function (grn) {
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
    StoreSubscriptionContentModel.getContentName = function (grn) {
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
    StoreSubscriptionContentModel.isValid = function (grn) {
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
    StoreSubscriptionContentModel.createGrn = function (region, ownerId, namespaceName, contentName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentName}', contentName !== null && contentName !== void 0 ? contentName : '');
    };
    StoreSubscriptionContentModel.prototype.getStoreSubscriptionContentModelId = function () {
        return this.storeSubscriptionContentModelId;
    };
    StoreSubscriptionContentModel.prototype.setStoreSubscriptionContentModelId = function (storeSubscriptionContentModelId) {
        this.storeSubscriptionContentModelId = storeSubscriptionContentModelId;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withStoreSubscriptionContentModelId = function (storeSubscriptionContentModelId) {
        this.storeSubscriptionContentModelId = storeSubscriptionContentModelId;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getName = function () {
        return this.name;
    };
    StoreSubscriptionContentModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    StoreSubscriptionContentModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getScheduleNamespaceId = function () {
        return this.scheduleNamespaceId;
    };
    StoreSubscriptionContentModel.prototype.setScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    StoreSubscriptionContentModel.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getReallocateSpanDays = function () {
        return this.reallocateSpanDays;
    };
    StoreSubscriptionContentModel.prototype.setReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    StoreSubscriptionContentModel.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreSubscriptionContentModel.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    StoreSubscriptionContentModel.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreSubscriptionContentModel.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreSubscriptionContentModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StoreSubscriptionContentModel()
            .withStoreSubscriptionContentModelId(data["storeSubscriptionContentModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScheduleNamespaceId(data["scheduleNamespaceId"])
            .withTriggerName(data["triggerName"])
            .withReallocateSpanDays(data["reallocateSpanDays"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreSubscriptionContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySubscriptionContent.fromDict(data["googlePlay"]));
    };
    StoreSubscriptionContentModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "storeSubscriptionContentModelId": this.getStoreSubscriptionContentModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scheduleNamespaceId": this.getScheduleNamespaceId(),
            "triggerName": this.getTriggerName(),
            "reallocateSpanDays": this.getReallocateSpanDays(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return StoreSubscriptionContentModel;
}());
exports.default = StoreSubscriptionContentModel;
//# sourceMappingURL=StoreSubscriptionContentModel.js.map