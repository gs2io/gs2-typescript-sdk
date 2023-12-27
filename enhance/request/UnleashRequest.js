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
var UnleashRequest = /** @class */ (function () {
    function UnleashRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.accessToken = null;
        this.targetItemSetId = null;
        this.materials = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    UnleashRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnleashRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnleashRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnleashRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnleashRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnleashRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnleashRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnleashRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnleashRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnleashRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UnleashRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UnleashRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UnleashRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UnleashRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnleashRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnleashRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    UnleashRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    UnleashRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    UnleashRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    UnleashRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    UnleashRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    UnleashRequest.prototype.getConfig = function () {
        return this.config;
    };
    UnleashRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    UnleashRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    UnleashRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnleashRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnleashRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnleashRequest.fromDict = function (data) {
        return new UnleashRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withAccessToken(data["accessToken"])
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
    UnleashRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "accessToken": this.getAccessToken(),
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
    return UnleashRequest;
}());
exports.default = UnleashRequest;
//# sourceMappingURL=UnleashRequest.js.map