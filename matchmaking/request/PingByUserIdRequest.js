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
var PingByUserIdRequest = /** @class */ (function () {
    function PingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PingByUserIdRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    PingByUserIdRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    PingByUserIdRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    PingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PingByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PingByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PingByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PingByUserIdRequest.fromDict = function (data) {
        return new PingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PingByUserIdRequest;
}());
exports.default = PingByUserIdRequest;
//# sourceMappingURL=PingByUserIdRequest.js.map