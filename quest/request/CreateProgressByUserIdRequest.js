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
var Gs2Quest = tslib_1.__importStar(require("../model"));
var CreateProgressByUserIdRequest = /** @class */ (function () {
    function CreateProgressByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.questModelId = null;
        this.force = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CreateProgressByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateProgressByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateProgressByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateProgressByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateProgressByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getQuestModelId = function () {
        return this.questModelId;
    };
    CreateProgressByUserIdRequest.prototype.setQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getForce = function () {
        return this.force;
    };
    CreateProgressByUserIdRequest.prototype.setForce = function (force) {
        this.force = force;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withForce = function (force) {
        this.force = force;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    CreateProgressByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CreateProgressByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateProgressByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateProgressByUserIdRequest.fromDict = function (data) {
        return new CreateProgressByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withQuestModelId(data["questModelId"])
            .withForce(data["force"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Quest.Config.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CreateProgressByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "questModelId": this.getQuestModelId(),
            "force": this.getForce(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CreateProgressByUserIdRequest;
}());
exports.default = CreateProgressByUserIdRequest;
//# sourceMappingURL=CreateProgressByUserIdRequest.js.map