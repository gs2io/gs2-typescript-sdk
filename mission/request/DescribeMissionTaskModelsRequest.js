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
var DescribeMissionTaskModelsRequest = /** @class */ (function () {
    function DescribeMissionTaskModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
    }
    DescribeMissionTaskModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMissionTaskModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMissionTaskModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMissionTaskModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    DescribeMissionTaskModelsRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DescribeMissionTaskModelsRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DescribeMissionTaskModelsRequest.fromDict = function (data) {
        return new DescribeMissionTaskModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"]);
    };
    DescribeMissionTaskModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
        };
    };
    return DescribeMissionTaskModelsRequest;
}());
exports.default = DescribeMissionTaskModelsRequest;
//# sourceMappingURL=DescribeMissionTaskModelsRequest.js.map