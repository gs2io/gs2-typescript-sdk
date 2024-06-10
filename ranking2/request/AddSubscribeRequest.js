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
var AddSubscribeRequest = /** @class */ (function () {
    function AddSubscribeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    AddSubscribeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddSubscribeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddSubscribeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddSubscribeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddSubscribeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddSubscribeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddSubscribeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddSubscribeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddSubscribeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddSubscribeRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    AddSubscribeRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    AddSubscribeRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    AddSubscribeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AddSubscribeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddSubscribeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddSubscribeRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    AddSubscribeRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddSubscribeRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddSubscribeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddSubscribeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddSubscribeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddSubscribeRequest.fromDict = function (data) {
        return new AddSubscribeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    AddSubscribeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return AddSubscribeRequest;
}());
exports.default = AddSubscribeRequest;
//# sourceMappingURL=AddSubscribeRequest.js.map