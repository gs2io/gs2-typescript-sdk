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
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var UpdateStoreSubscriptionContentModelMasterRequest = /** @class */ (function () {
    function UpdateStoreSubscriptionContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
        this.description = null;
        this.metadata = null;
        this.scheduleNamespaceId = null;
        this.triggerName = null;
        this.triggerExtendMode = null;
        this.rollupHour = null;
        this.reallocateSpanDays = null;
        this.appleAppStore = null;
        this.googlePlay = null;
    }
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getScheduleNamespaceId = function () {
        return this.scheduleNamespaceId;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getTriggerExtendMode = function () {
        return this.triggerExtendMode;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setTriggerExtendMode = function (triggerExtendMode) {
        this.triggerExtendMode = triggerExtendMode;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withTriggerExtendMode = function (triggerExtendMode) {
        this.triggerExtendMode = triggerExtendMode;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getRollupHour = function () {
        return this.rollupHour;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setRollupHour = function (rollupHour) {
        this.rollupHour = rollupHour;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withRollupHour = function (rollupHour) {
        this.rollupHour = rollupHour;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getReallocateSpanDays = function () {
        return this.reallocateSpanDays;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    UpdateStoreSubscriptionContentModelMasterRequest.fromDict = function (data) {
        return new UpdateStoreSubscriptionContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleNamespaceId(data["scheduleNamespaceId"])
            .withTriggerName(data["triggerName"])
            .withTriggerExtendMode(data["triggerExtendMode"])
            .withRollupHour(data["rollupHour"])
            .withReallocateSpanDays(data["reallocateSpanDays"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreSubscriptionContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySubscriptionContent.fromDict(data["googlePlay"]));
    };
    UpdateStoreSubscriptionContentModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleNamespaceId": this.getScheduleNamespaceId(),
            "triggerName": this.getTriggerName(),
            "triggerExtendMode": this.getTriggerExtendMode(),
            "rollupHour": this.getRollupHour(),
            "reallocateSpanDays": this.getReallocateSpanDays(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UpdateStoreSubscriptionContentModelMasterRequest;
}());
exports.default = UpdateStoreSubscriptionContentModelMasterRequest;
//# sourceMappingURL=UpdateStoreSubscriptionContentModelMasterRequest.js.map