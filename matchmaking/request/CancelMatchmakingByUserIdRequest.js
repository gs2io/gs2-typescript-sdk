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
var CancelMatchmakingByUserIdRequest = /** @class */ (function () {
    function CancelMatchmakingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.userId = null;
    }
    CancelMatchmakingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CancelMatchmakingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CancelMatchmakingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CancelMatchmakingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    CancelMatchmakingByUserIdRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CancelMatchmakingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CancelMatchmakingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CancelMatchmakingByUserIdRequest.fromDict = function (data) {
        return new CancelMatchmakingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withUserId(data["userId"]);
    };
    CancelMatchmakingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "userId": this.getUserId(),
        };
    };
    return CancelMatchmakingByUserIdRequest;
}());
exports.default = CancelMatchmakingByUserIdRequest;
//# sourceMappingURL=CancelMatchmakingByUserIdRequest.js.map