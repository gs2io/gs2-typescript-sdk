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
var EvaluateCompleteByUserIdRequest = /** @class */ (function () {
    function EvaluateCompleteByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.missionGroupName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    EvaluateCompleteByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EvaluateCompleteByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EvaluateCompleteByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EvaluateCompleteByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    EvaluateCompleteByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    EvaluateCompleteByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    EvaluateCompleteByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EvaluateCompleteByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EvaluateCompleteByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EvaluateCompleteByUserIdRequest.fromDict = function (data) {
        return new EvaluateCompleteByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMissionGroupName(data["missionGroupName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    EvaluateCompleteByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "missionGroupName": this.getMissionGroupName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return EvaluateCompleteByUserIdRequest;
}());
exports.default = EvaluateCompleteByUserIdRequest;
//# sourceMappingURL=EvaluateCompleteByUserIdRequest.js.map