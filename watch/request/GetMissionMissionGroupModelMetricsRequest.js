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
var GetMissionMissionGroupModelMetricsRequest = /** @class */ (function () {
    function GetMissionMissionGroupModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
    }
    GetMissionMissionGroupModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionMissionGroupModelMetricsRequest.fromDict = function (data) {
        return new GetMissionMissionGroupModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    GetMissionMissionGroupModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return GetMissionMissionGroupModelMetricsRequest;
}());
exports.default = GetMissionMissionGroupModelMetricsRequest;
//# sourceMappingURL=GetMissionMissionGroupModelMetricsRequest.js.map