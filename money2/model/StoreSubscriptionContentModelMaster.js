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
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:master:subscription:content:{contentName}";
var StoreSubscriptionContentModelMaster = /** @class */ (function () {
    function StoreSubscriptionContentModelMaster() {
        this.storeSubscriptionContentModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.scheduleNamespaceId = null;
        this.triggerName = null;
        this.reallocateSpanDays = null;
        this.triggerExtendMode = null;
        this.rollupHour = null;
        this.appleAppStore = null;
        this.googlePlay = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    StoreSubscriptionContentModelMaster.getRegion = function (grn) {
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
    StoreSubscriptionContentModelMaster.getOwnerId = function (grn) {
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
    StoreSubscriptionContentModelMaster.getNamespaceName = function (grn) {
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
    StoreSubscriptionContentModelMaster.getContentName = function (grn) {
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
    StoreSubscriptionContentModelMaster.isValid = function (grn) {
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
    StoreSubscriptionContentModelMaster.createGrn = function (region, ownerId, namespaceName, contentName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentName}', contentName !== null && contentName !== void 0 ? contentName : '');
    };
    StoreSubscriptionContentModelMaster.prototype.getStoreSubscriptionContentModelId = function () {
        return this.storeSubscriptionContentModelId;
    };
    StoreSubscriptionContentModelMaster.prototype.setStoreSubscriptionContentModelId = function (storeSubscriptionContentModelId) {
        this.storeSubscriptionContentModelId = storeSubscriptionContentModelId;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withStoreSubscriptionContentModelId = function (storeSubscriptionContentModelId) {
        this.storeSubscriptionContentModelId = storeSubscriptionContentModelId;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getName = function () {
        return this.name;
    };
    StoreSubscriptionContentModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    StoreSubscriptionContentModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    StoreSubscriptionContentModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getScheduleNamespaceId = function () {
        return this.scheduleNamespaceId;
    };
    StoreSubscriptionContentModelMaster.prototype.setScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    StoreSubscriptionContentModelMaster.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getReallocateSpanDays = function () {
        return this.reallocateSpanDays;
    };
    StoreSubscriptionContentModelMaster.prototype.setReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getTriggerExtendMode = function () {
        return this.triggerExtendMode;
    };
    StoreSubscriptionContentModelMaster.prototype.setTriggerExtendMode = function (triggerExtendMode) {
        this.triggerExtendMode = triggerExtendMode;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withTriggerExtendMode = function (triggerExtendMode) {
        this.triggerExtendMode = triggerExtendMode;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getRollupHour = function () {
        return this.rollupHour;
    };
    StoreSubscriptionContentModelMaster.prototype.setRollupHour = function (rollupHour) {
        this.rollupHour = rollupHour;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withRollupHour = function (rollupHour) {
        this.rollupHour = rollupHour;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    StoreSubscriptionContentModelMaster.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    StoreSubscriptionContentModelMaster.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    StoreSubscriptionContentModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    StoreSubscriptionContentModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    StoreSubscriptionContentModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    StoreSubscriptionContentModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    StoreSubscriptionContentModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StoreSubscriptionContentModelMaster()
            .withStoreSubscriptionContentModelId(data["storeSubscriptionContentModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleNamespaceId(data["scheduleNamespaceId"])
            .withTriggerName(data["triggerName"])
            .withReallocateSpanDays(data["reallocateSpanDays"])
            .withTriggerExtendMode(data["triggerExtendMode"])
            .withRollupHour(data["rollupHour"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreSubscriptionContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySubscriptionContent.fromDict(data["googlePlay"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    StoreSubscriptionContentModelMaster.prototype.toDict = function () {
        var _a, _b;
        return {
            "storeSubscriptionContentModelId": this.getStoreSubscriptionContentModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleNamespaceId": this.getScheduleNamespaceId(),
            "triggerName": this.getTriggerName(),
            "reallocateSpanDays": this.getReallocateSpanDays(),
            "triggerExtendMode": this.getTriggerExtendMode(),
            "rollupHour": this.getRollupHour(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return StoreSubscriptionContentModelMaster;
}());
exports.default = StoreSubscriptionContentModelMaster;
//# sourceMappingURL=StoreSubscriptionContentModelMaster.js.map