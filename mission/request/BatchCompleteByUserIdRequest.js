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
var BatchCompleteByUserIdRequest = /** @class */ (function () {
    function BatchCompleteByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.userId = null;
        this.missionTaskNames = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    BatchCompleteByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchCompleteByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchCompleteByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchCompleteByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    BatchCompleteByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    BatchCompleteByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getMissionTaskNames = function () {
        return this.missionTaskNames;
    };
    BatchCompleteByUserIdRequest.prototype.setMissionTaskNames = function (missionTaskNames) {
        this.missionTaskNames = missionTaskNames;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withMissionTaskNames = function (missionTaskNames) {
        this.missionTaskNames = missionTaskNames;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    BatchCompleteByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    BatchCompleteByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchCompleteByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchCompleteByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchCompleteByUserIdRequest.fromDict = function (data) {
        return new BatchCompleteByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withUserId(data["userId"])
            .withMissionTaskNames(data.missionTaskNames ?
            data.missionTaskNames.map(function (item) {
                return item;
            }) : [])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Mission.Config.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    BatchCompleteByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "userId": this.getUserId(),
            "missionTaskNames": this.getMissionTaskNames() ?
                this.getMissionTaskNames().map(function (item) {
                    return item;
                }) : [],
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return BatchCompleteByUserIdRequest;
}());
exports.default = BatchCompleteByUserIdRequest;
//# sourceMappingURL=BatchCompleteByUserIdRequest.js.map