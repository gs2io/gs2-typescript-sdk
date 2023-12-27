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
var UnleashByUserIdRequest = /** @class */ (function () {
    function UnleashByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.userId = null;
        this.targetItemSetId = null;
        this.materials = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    UnleashByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnleashByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnleashByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnleashByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnleashByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnleashByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnleashByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnleashByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnleashByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnleashByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UnleashByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UnleashByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UnleashByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UnleashByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnleashByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnleashByUserIdRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    UnleashByUserIdRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    UnleashByUserIdRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    UnleashByUserIdRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    UnleashByUserIdRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    UnleashByUserIdRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    UnleashByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    UnleashByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    UnleashByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    UnleashByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnleashByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnleashByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnleashByUserIdRequest.fromDict = function (data) {
        return new UnleashByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withUserId(data["userId"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return item;
            }) : [])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : []);
    };
    UnleashByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "userId": this.getUserId(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item;
                }) : [],
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UnleashByUserIdRequest;
}());
exports.default = UnleashByUserIdRequest;
//# sourceMappingURL=UnleashByUserIdRequest.js.map