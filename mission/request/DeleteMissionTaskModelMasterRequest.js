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
var DeleteMissionTaskModelMasterRequest = /** @class */ (function () {
    function DeleteMissionTaskModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.missionTaskName = null;
    }
    DeleteMissionTaskModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMissionTaskModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMissionTaskModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMissionTaskModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    DeleteMissionTaskModelMasterRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    DeleteMissionTaskModelMasterRequest.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    DeleteMissionTaskModelMasterRequest.fromDict = function (data) {
        return new DeleteMissionTaskModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withMissionTaskName(data["missionTaskName"]);
    };
    DeleteMissionTaskModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "missionTaskName": this.getMissionTaskName(),
        };
    };
    return DeleteMissionTaskModelMasterRequest;
}());
export default DeleteMissionTaskModelMasterRequest;
//# sourceMappingURL=DeleteMissionTaskModelMasterRequest.js.map