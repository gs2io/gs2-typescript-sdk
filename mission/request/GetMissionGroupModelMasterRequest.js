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
var GetMissionGroupModelMasterRequest = /** @class */ (function () {
    function GetMissionGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
    }
    GetMissionGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMissionGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMissionGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMissionGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    GetMissionGroupModelMasterRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionGroupModelMasterRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionGroupModelMasterRequest.fromDict = function (data) {
        return new GetMissionGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    GetMissionGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return GetMissionGroupModelMasterRequest;
}());
exports.default = GetMissionGroupModelMasterRequest;
//# sourceMappingURL=GetMissionGroupModelMasterRequest.js.map