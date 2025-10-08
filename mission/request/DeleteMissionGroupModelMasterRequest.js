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
var DeleteMissionGroupModelMasterRequest = /** @class */ (function () {
    function DeleteMissionGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
    }
    DeleteMissionGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMissionGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMissionGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMissionGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    DeleteMissionGroupModelMasterRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DeleteMissionGroupModelMasterRequest.fromDict = function (data) {
        return new DeleteMissionGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    DeleteMissionGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return DeleteMissionGroupModelMasterRequest;
}());
exports.default = DeleteMissionGroupModelMasterRequest;
//# sourceMappingURL=DeleteMissionGroupModelMasterRequest.js.map