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
var ResetByUserIdRequest = /** @class */ (function () {
    function ResetByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyId = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ResetByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ResetByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ResetByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ResetByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ResetByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ResetByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ResetByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ResetByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ResetByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ResetByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    ResetByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ResetByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ResetByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ResetByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ResetByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ResetByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ResetByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetByUserIdRequest.fromDict = function (data) {
        return new ResetByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2SkillTree.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ResetByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ResetByUserIdRequest;
}());
exports.default = ResetByUserIdRequest;
//# sourceMappingURL=ResetByUserIdRequest.js.map