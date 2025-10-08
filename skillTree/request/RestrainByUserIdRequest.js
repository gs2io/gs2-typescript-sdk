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
var Gs2SkillTree = tslib_1.__importStar(require("../model"));
var RestrainByUserIdRequest = /** @class */ (function () {
    function RestrainByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyId = null;
        this.nodeModelNames = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RestrainByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RestrainByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RestrainByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RestrainByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RestrainByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RestrainByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RestrainByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RestrainByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RestrainByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RestrainByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RestrainByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RestrainByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RestrainByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    RestrainByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    RestrainByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    RestrainByUserIdRequest.prototype.getNodeModelNames = function () {
        return this.nodeModelNames;
    };
    RestrainByUserIdRequest.prototype.setNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    RestrainByUserIdRequest.prototype.withNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    RestrainByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    RestrainByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    RestrainByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    RestrainByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RestrainByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RestrainByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RestrainByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RestrainByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RestrainByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RestrainByUserIdRequest.fromDict = function (data) {
        return new RestrainByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withNodeModelNames(data.nodeModelNames ?
            data.nodeModelNames.map(function (item) {
                return item;
            }) : null)
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2SkillTree.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RestrainByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "nodeModelNames": this.getNodeModelNames() ?
                this.getNodeModelNames().map(function (item) {
                    return item;
                }) : null,
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RestrainByUserIdRequest;
}());
exports.default = RestrainByUserIdRequest;
//# sourceMappingURL=RestrainByUserIdRequest.js.map