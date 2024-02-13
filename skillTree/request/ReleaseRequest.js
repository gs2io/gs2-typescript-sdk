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
var ReleaseRequest = /** @class */ (function () {
    function ReleaseRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.propertyId = null;
        this.nodeModelNames = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ReleaseRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReleaseRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReleaseRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReleaseRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReleaseRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReleaseRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReleaseRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReleaseRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReleaseRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReleaseRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReleaseRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReleaseRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReleaseRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ReleaseRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ReleaseRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ReleaseRequest.prototype.getNodeModelNames = function () {
        return this.nodeModelNames;
    };
    ReleaseRequest.prototype.setNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    ReleaseRequest.prototype.withNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    ReleaseRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReleaseRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReleaseRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReleaseRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReleaseRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReleaseRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReleaseRequest.fromDict = function (data) {
        return new ReleaseRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyId(data["propertyId"])
            .withNodeModelNames(data.nodeModelNames ?
            data.nodeModelNames.map(function (item) {
                return item;
            }) : [])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2SkillTree.Config.fromDict(item);
            }) : []);
    };
    ReleaseRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyId": this.getPropertyId(),
            "nodeModelNames": this.getNodeModelNames() ?
                this.getNodeModelNames().map(function (item) {
                    return item;
                }) : [],
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ReleaseRequest;
}());
exports.default = ReleaseRequest;
//# sourceMappingURL=ReleaseRequest.js.map