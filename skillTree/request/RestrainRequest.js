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
var RestrainRequest = /** @class */ (function () {
    function RestrainRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.propertyId = null;
        this.nodeModelNames = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    RestrainRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RestrainRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RestrainRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RestrainRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RestrainRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RestrainRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RestrainRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RestrainRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RestrainRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RestrainRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    RestrainRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RestrainRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RestrainRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    RestrainRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    RestrainRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    RestrainRequest.prototype.getNodeModelNames = function () {
        return this.nodeModelNames;
    };
    RestrainRequest.prototype.setNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    RestrainRequest.prototype.withNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    RestrainRequest.prototype.getConfig = function () {
        return this.config;
    };
    RestrainRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    RestrainRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    RestrainRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RestrainRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RestrainRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RestrainRequest.fromDict = function (data) {
        return new RestrainRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyId(data["propertyId"])
            .withNodeModelNames(data.nodeModelNames ?
            data.nodeModelNames.map(function (item) {
                return item;
            }) : null)
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2SkillTree.Config.fromDict(item);
            }) : null);
    };
    RestrainRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyId": this.getPropertyId(),
            "nodeModelNames": this.getNodeModelNames() ?
                this.getNodeModelNames().map(function (item) {
                    return item;
                }) : null,
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return RestrainRequest;
}());
exports.default = RestrainRequest;
//# sourceMappingURL=RestrainRequest.js.map