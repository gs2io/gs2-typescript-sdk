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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var BatchCompleteRequest = /** @class */ (function () {
    function BatchCompleteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.accessToken = null;
        this.missionTaskNames = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    BatchCompleteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchCompleteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchCompleteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchCompleteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchCompleteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchCompleteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchCompleteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchCompleteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchCompleteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchCompleteRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    BatchCompleteRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    BatchCompleteRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    BatchCompleteRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    BatchCompleteRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BatchCompleteRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BatchCompleteRequest.prototype.getMissionTaskNames = function () {
        return this.missionTaskNames;
    };
    BatchCompleteRequest.prototype.setMissionTaskNames = function (missionTaskNames) {
        this.missionTaskNames = missionTaskNames;
        return this;
    };
    BatchCompleteRequest.prototype.withMissionTaskNames = function (missionTaskNames) {
        this.missionTaskNames = missionTaskNames;
        return this;
    };
    BatchCompleteRequest.prototype.getConfig = function () {
        return this.config;
    };
    BatchCompleteRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchCompleteRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchCompleteRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchCompleteRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchCompleteRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchCompleteRequest.fromDict = function (data) {
        return new BatchCompleteRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withAccessToken(data["accessToken"])
            .withMissionTaskNames(data.missionTaskNames ?
            data.missionTaskNames.map(function (item) {
                return item;
            }) : null)
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Mission.Config.fromDict(item);
            }) : null);
    };
    BatchCompleteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "accessToken": this.getAccessToken(),
            "missionTaskNames": this.getMissionTaskNames() ?
                this.getMissionTaskNames().map(function (item) {
                    return item;
                }) : null,
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return BatchCompleteRequest;
}());
exports.default = BatchCompleteRequest;
//# sourceMappingURL=BatchCompleteRequest.js.map