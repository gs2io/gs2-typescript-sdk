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
var AddSubscribeByUserIdRequest = /** @class */ (function () {
    function AddSubscribeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.targetUserId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AddSubscribeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddSubscribeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddSubscribeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddSubscribeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    AddSubscribeByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddSubscribeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    AddSubscribeByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AddSubscribeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddSubscribeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddSubscribeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddSubscribeByUserIdRequest.fromDict = function (data) {
        return new AddSubscribeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AddSubscribeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AddSubscribeByUserIdRequest;
}());
exports.default = AddSubscribeByUserIdRequest;
//# sourceMappingURL=AddSubscribeByUserIdRequest.js.map