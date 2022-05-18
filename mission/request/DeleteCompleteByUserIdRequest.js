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
var DeleteCompleteByUserIdRequest = /** @class */ (function () {
    function DeleteCompleteByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.missionGroupName = null;
        this.duplicationAvoider = null;
    }
    DeleteCompleteByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCompleteByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCompleteByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCompleteByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteCompleteByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    DeleteCompleteByUserIdRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteCompleteByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCompleteByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCompleteByUserIdRequest.fromDict = function (data) {
        return new DeleteCompleteByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    DeleteCompleteByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return DeleteCompleteByUserIdRequest;
}());
exports.default = DeleteCompleteByUserIdRequest;
//# sourceMappingURL=DeleteCompleteByUserIdRequest.js.map