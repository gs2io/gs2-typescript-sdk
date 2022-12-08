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
var DirectEnhanceRequest = /** @class */ (function () {
    function DirectEnhanceRequest() {
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
    DirectEnhanceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DirectEnhanceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DirectEnhanceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DirectEnhanceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DirectEnhanceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DirectEnhanceRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DirectEnhanceRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DirectEnhanceRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DirectEnhanceRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DirectEnhanceRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DirectEnhanceRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DirectEnhanceRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    DirectEnhanceRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    DirectEnhanceRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    DirectEnhanceRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    DirectEnhanceRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    DirectEnhanceRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    DirectEnhanceRequest.prototype.getConfig = function () {
        return this.config;
    };
    DirectEnhanceRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    DirectEnhanceRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    DirectEnhanceRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DirectEnhanceRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DirectEnhanceRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DirectEnhanceRequest.fromDict = function (data) {
        return new DirectEnhanceRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withAccessToken(data["accessToken"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return Gs2Enhance.Material.fromDict(item);
            }) : [])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : []);
    };
    DirectEnhanceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "accessToken": this.getAccessToken(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item.toDict();
                }) : [],
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DirectEnhanceRequest;
}());
exports.default = DirectEnhanceRequest;
//# sourceMappingURL=DirectEnhanceRequest.js.map