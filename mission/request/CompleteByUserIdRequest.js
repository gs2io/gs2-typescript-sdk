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
var CompleteByUserIdRequest = /** @class */ (function () {
    function CompleteByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.missionTaskName = null;
        this.userId = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CompleteByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CompleteByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CompleteByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CompleteByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CompleteByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CompleteByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CompleteByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CompleteByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CompleteByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CompleteByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    CompleteByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    CompleteByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    CompleteByUserIdRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    CompleteByUserIdRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    CompleteByUserIdRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    CompleteByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CompleteByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CompleteByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CompleteByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    CompleteByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    CompleteByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    CompleteByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CompleteByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CompleteByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CompleteByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CompleteByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CompleteByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CompleteByUserIdRequest.fromDict = function (data) {
        return new CompleteByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withMissionTaskName(data["missionTaskName"])
            .withUserId(data["userId"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Mission.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CompleteByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "missionTaskName": this.getMissionTaskName(),
            "userId": this.getUserId(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CompleteByUserIdRequest;
}());
exports.default = CompleteByUserIdRequest;
//# sourceMappingURL=CompleteByUserIdRequest.js.map