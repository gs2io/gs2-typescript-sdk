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
var BatchReceiveByUserIdRequest = /** @class */ (function () {
    function BatchReceiveByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.userId = null;
        this.missionTaskNames = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    BatchReceiveByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchReceiveByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchReceiveByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchReceiveByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    BatchReceiveByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    BatchReceiveByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getMissionTaskNames = function () {
        return this.missionTaskNames;
    };
    BatchReceiveByUserIdRequest.prototype.setMissionTaskNames = function (missionTaskNames) {
        this.missionTaskNames = missionTaskNames;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withMissionTaskNames = function (missionTaskNames) {
        this.missionTaskNames = missionTaskNames;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    BatchReceiveByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchReceiveByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchReceiveByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchReceiveByUserIdRequest.fromDict = function (data) {
        return new BatchReceiveByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withUserId(data["userId"])
            .withMissionTaskNames(data.missionTaskNames ?
            data.missionTaskNames.map(function (item) {
                return item;
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    BatchReceiveByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "userId": this.getUserId(),
            "missionTaskNames": this.getMissionTaskNames() ?
                this.getMissionTaskNames().map(function (item) {
                    return item;
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return BatchReceiveByUserIdRequest;
}());
exports.default = BatchReceiveByUserIdRequest;
//# sourceMappingURL=BatchReceiveByUserIdRequest.js.map