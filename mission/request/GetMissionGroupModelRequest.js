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
var GetMissionGroupModelRequest = /** @class */ (function () {
    function GetMissionGroupModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
    }
    GetMissionGroupModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMissionGroupModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionGroupModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMissionGroupModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMissionGroupModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionGroupModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMissionGroupModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMissionGroupModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionGroupModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMissionGroupModelRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    GetMissionGroupModelRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionGroupModelRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetMissionGroupModelRequest.fromDict = function (data) {
        return new GetMissionGroupModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    GetMissionGroupModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return GetMissionGroupModelRequest;
}());
export default GetMissionGroupModelRequest;
//# sourceMappingURL=GetMissionGroupModelRequest.js.map