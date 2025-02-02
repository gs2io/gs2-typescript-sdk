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
var Gs2Enhance = tslib_1.__importStar(require("../model"));
var DirectEnhanceByUserIdRequest = /** @class */ (function () {
    function DirectEnhanceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.userId = null;
        this.targetItemSetId = null;
        this.materials = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DirectEnhanceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DirectEnhanceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DirectEnhanceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DirectEnhanceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DirectEnhanceByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DirectEnhanceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    DirectEnhanceByUserIdRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    DirectEnhanceByUserIdRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    DirectEnhanceByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DirectEnhanceByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DirectEnhanceByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DirectEnhanceByUserIdRequest.fromDict = function (data) {
        return new DirectEnhanceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withUserId(data["userId"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return Gs2Enhance.Material.fromDict(item);
            }) : null)
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DirectEnhanceByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "userId": this.getUserId(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item.toDict();
                }) : null,
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DirectEnhanceByUserIdRequest;
}());
exports.default = DirectEnhanceByUserIdRequest;
//# sourceMappingURL=DirectEnhanceByUserIdRequest.js.map