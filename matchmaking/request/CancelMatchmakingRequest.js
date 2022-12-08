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
var CancelMatchmakingRequest = /** @class */ (function () {
    function CancelMatchmakingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    CancelMatchmakingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CancelMatchmakingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelMatchmakingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelMatchmakingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CancelMatchmakingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelMatchmakingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelMatchmakingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CancelMatchmakingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelMatchmakingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelMatchmakingRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    CancelMatchmakingRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    CancelMatchmakingRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    CancelMatchmakingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CancelMatchmakingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CancelMatchmakingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CancelMatchmakingRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CancelMatchmakingRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CancelMatchmakingRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CancelMatchmakingRequest.fromDict = function (data) {
        return new CancelMatchmakingRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withAccessToken(data["accessToken"]);
    };
    CancelMatchmakingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return CancelMatchmakingRequest;
}());
exports.default = CancelMatchmakingRequest;
//# sourceMappingURL=CancelMatchmakingRequest.js.map