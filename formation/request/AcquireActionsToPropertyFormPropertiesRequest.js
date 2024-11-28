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
var Gs2Formation = tslib_1.__importStar(require("../model"));
var AcquireActionsToPropertyFormPropertiesRequest = /** @class */ (function () {
    function AcquireActionsToPropertyFormPropertiesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyFormModelName = null;
        this.propertyId = null;
        this.acquireAction = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getAcquireAction = function () {
        return this.acquireAction;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setAcquireAction = function (acquireAction) {
        this.acquireAction = acquireAction;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withAcquireAction = function (acquireAction) {
        this.acquireAction = acquireAction;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesRequest.fromDict = function (data) {
        return new AcquireActionsToPropertyFormPropertiesRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withPropertyId(data["propertyId"])
            .withAcquireAction(Gs2Formation.AcquireAction.fromDict(data["acquireAction"]))
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Formation.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcquireActionsToPropertyFormPropertiesRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "propertyId": this.getPropertyId(),
            "acquireAction": (_a = this.getAcquireAction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AcquireActionsToPropertyFormPropertiesRequest;
}());
exports.default = AcquireActionsToPropertyFormPropertiesRequest;
//# sourceMappingURL=AcquireActionsToPropertyFormPropertiesRequest.js.map