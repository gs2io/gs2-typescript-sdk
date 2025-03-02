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
var CreateStoreSubscriptionContentModelMasterRequest = /** @class */ (function () {
    function CreateStoreSubscriptionContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.scheduleNamespaceId = null;
        this.triggerName = null;
        this.reallocateSpanDays = null;
        this.appleAppStore = null;
        this.googlePlay = null;
    }
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getScheduleNamespaceId = function () {
        return this.scheduleNamespaceId;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withScheduleNamespaceId = function (scheduleNamespaceId) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getReallocateSpanDays = function () {
        return this.reallocateSpanDays;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withReallocateSpanDays = function (reallocateSpanDays) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    CreateStoreSubscriptionContentModelMasterRequest.fromDict = function (data) {
        return new CreateStoreSubscriptionContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleNamespaceId(data["scheduleNamespaceId"])
            .withTriggerName(data["triggerName"])
            .withReallocateSpanDays(data["reallocateSpanDays"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreSubscriptionContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySubscriptionContent.fromDict(data["googlePlay"]));
    };
    CreateStoreSubscriptionContentModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleNamespaceId": this.getScheduleNamespaceId(),
            "triggerName": this.getTriggerName(),
            "reallocateSpanDays": this.getReallocateSpanDays(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return CreateStoreSubscriptionContentModelMasterRequest;
}());
exports.default = CreateStoreSubscriptionContentModelMasterRequest;
//# sourceMappingURL=CreateStoreSubscriptionContentModelMasterRequest.js.map