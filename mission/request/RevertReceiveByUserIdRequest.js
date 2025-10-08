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
var RevertReceiveByUserIdRequest = /** @class */ (function () {
    function RevertReceiveByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.missionTaskName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RevertReceiveByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RevertReceiveByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RevertReceiveByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RevertReceiveByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    RevertReceiveByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    RevertReceiveByUserIdRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RevertReceiveByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RevertReceiveByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RevertReceiveByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RevertReceiveByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RevertReceiveByUserIdRequest.fromDict = function (data) {
        return new RevertReceiveByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withMissionTaskName(data["missionTaskName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RevertReceiveByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "missionTaskName": this.getMissionTaskName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RevertReceiveByUserIdRequest;
}());
exports.default = RevertReceiveByUserIdRequest;
//# sourceMappingURL=RevertReceiveByUserIdRequest.js.map