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
var EvaluateCompleteRequest = /** @class */ (function () {
    function EvaluateCompleteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.missionGroupName = null;
        this.duplicationAvoider = null;
    }
    EvaluateCompleteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EvaluateCompleteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EvaluateCompleteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EvaluateCompleteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EvaluateCompleteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EvaluateCompleteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EvaluateCompleteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EvaluateCompleteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EvaluateCompleteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EvaluateCompleteRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    EvaluateCompleteRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EvaluateCompleteRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EvaluateCompleteRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    EvaluateCompleteRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    EvaluateCompleteRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    EvaluateCompleteRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EvaluateCompleteRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EvaluateCompleteRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EvaluateCompleteRequest.fromDict = function (data) {
        return new EvaluateCompleteRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    EvaluateCompleteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return EvaluateCompleteRequest;
}());
exports.default = EvaluateCompleteRequest;
//# sourceMappingURL=EvaluateCompleteRequest.js.map