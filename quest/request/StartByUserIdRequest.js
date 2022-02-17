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
var Gs2Quest = (0, tslib_1.__importStar)(require("../model"));
var StartByUserIdRequest = /** @class */ (function () {
    function StartByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.questName = null;
        this.userId = null;
        this.force = null;
        this.config = null;
    }
    StartByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    StartByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    StartByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    StartByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StartByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StartByUserIdRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    StartByUserIdRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    StartByUserIdRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    StartByUserIdRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    StartByUserIdRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    StartByUserIdRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    StartByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    StartByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    StartByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    StartByUserIdRequest.prototype.getForce = function () {
        return this.force;
    };
    StartByUserIdRequest.prototype.setForce = function (force) {
        this.force = force;
        return this;
    };
    StartByUserIdRequest.prototype.withForce = function (force) {
        this.force = force;
        return this;
    };
    StartByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    StartByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    StartByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    StartByUserIdRequest.fromDict = function (data) {
        return new StartByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"])
            .withUserId(data["userId"])
            .withForce(data["force"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Quest.Config.fromDict(item);
            }) : []);
    };
    StartByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
            "userId": this.getUserId(),
            "force": this.getForce(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return StartByUserIdRequest;
}());
exports.default = StartByUserIdRequest;
//# sourceMappingURL=StartByUserIdRequest.js.map