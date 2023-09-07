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
var AcquireActionsToFormPropertiesRequest = /** @class */ (function () {
    function AcquireActionsToFormPropertiesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.index = null;
        this.acquireAction = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    AcquireActionsToFormPropertiesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getIndex = function () {
        return this.index;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getAcquireAction = function () {
        return this.acquireAction;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setAcquireAction = function (acquireAction) {
        this.acquireAction = acquireAction;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withAcquireAction = function (acquireAction) {
        this.acquireAction = acquireAction;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.fromDict = function (data) {
        return new AcquireActionsToFormPropertiesRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withAcquireAction(Gs2Formation.AcquireAction.fromDict(data["acquireAction"]))
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Formation.AcquireActionConfig.fromDict(item);
            }) : []);
    };
    AcquireActionsToFormPropertiesRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "acquireAction": (_a = this.getAcquireAction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return AcquireActionsToFormPropertiesRequest;
}());
exports.default = AcquireActionsToFormPropertiesRequest;
//# sourceMappingURL=AcquireActionsToFormPropertiesRequest.js.map