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
var StartRequest = /** @class */ (function () {
    function StartRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.targetItemSetId = null;
        this.materials = null;
        this.accessToken = null;
        this.force = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    StartRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    StartRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    StartRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    StartRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StartRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StartRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    StartRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    StartRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    StartRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    StartRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    StartRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    StartRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    StartRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    StartRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    StartRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    StartRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    StartRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    StartRequest.prototype.getForce = function () {
        return this.force;
    };
    StartRequest.prototype.setForce = function (force) {
        this.force = force;
        return this;
    };
    StartRequest.prototype.withForce = function (force) {
        this.force = force;
        return this;
    };
    StartRequest.prototype.getConfig = function () {
        return this.config;
    };
    StartRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    StartRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    StartRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    StartRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    StartRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    StartRequest.fromDict = function (data) {
        return new StartRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return Gs2Enhance.Material.fromDict(item);
            }) : null)
            .withAccessToken(data["accessToken"])
            .withForce(data["force"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : null);
    };
    StartRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item.toDict();
                }) : null,
            "accessToken": this.getAccessToken(),
            "force": this.getForce(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return StartRequest;
}());
exports.default = StartRequest;
//# sourceMappingURL=StartRequest.js.map