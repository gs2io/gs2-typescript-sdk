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
var GetMissionTaskModelRequest = /** @class */ (function () {
    function GetMissionTaskModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.missionTaskName = null;
    }
    GetMissionTaskModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMissionTaskModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionTaskModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionTaskModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMissionTaskModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionTaskModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionTaskModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMissionTaskModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionTaskModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionTaskModelRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    GetMissionTaskModelRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionTaskModelRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionTaskModelRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    GetMissionTaskModelRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    GetMissionTaskModelRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    GetMissionTaskModelRequest.fromDict = function (data) {
        return new GetMissionTaskModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withMissionTaskName(data["missionTaskName"]);
    };
    GetMissionTaskModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "missionTaskName": this.getMissionTaskName(),
        };
    };
    return GetMissionTaskModelRequest;
}());
export default GetMissionTaskModelRequest;
//# sourceMappingURL=GetMissionTaskModelRequest.js.map