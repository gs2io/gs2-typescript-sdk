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
var EarlyCompleteByUserIdRequest = /** @class */ (function () {
    function EarlyCompleteByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    EarlyCompleteByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EarlyCompleteByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EarlyCompleteByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EarlyCompleteByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    EarlyCompleteByUserIdRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    EarlyCompleteByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    EarlyCompleteByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EarlyCompleteByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EarlyCompleteByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EarlyCompleteByUserIdRequest.fromDict = function (data) {
        return new EarlyCompleteByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    EarlyCompleteByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return EarlyCompleteByUserIdRequest;
}());
exports.default = EarlyCompleteByUserIdRequest;
//# sourceMappingURL=EarlyCompleteByUserIdRequest.js.map