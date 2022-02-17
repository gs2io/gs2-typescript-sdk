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
var Gs2Mission = (0, tslib_1.__importStar)(require("../model"));
var CompleteRequest = /** @class */ (function () {
    function CompleteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.missionTaskName = null;
        this.accessToken = null;
        this.config = null;
    }
    CompleteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CompleteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CompleteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CompleteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CompleteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CompleteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CompleteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CompleteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CompleteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CompleteRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    CompleteRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    CompleteRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    CompleteRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    CompleteRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    CompleteRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    CompleteRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CompleteRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CompleteRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CompleteRequest.prototype.getConfig = function () {
        return this.config;
    };
    CompleteRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    CompleteRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    CompleteRequest.fromDict = function (data) {
        return new CompleteRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withMissionTaskName(data["missionTaskName"])
            .withAccessToken(data["accessToken"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Mission.Config.fromDict(item);
            }) : []);
    };
    CompleteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "missionTaskName": this.getMissionTaskName(),
            "accessToken": this.getAccessToken(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CompleteRequest;
}());
exports.default = CompleteRequest;
//# sourceMappingURL=CompleteRequest.js.map