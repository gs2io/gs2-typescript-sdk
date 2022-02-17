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
var DescribeMissionTaskModelMastersRequest = /** @class */ (function () {
    function DescribeMissionTaskModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMissionTaskModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMissionTaskModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMissionTaskModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMissionTaskModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    DescribeMissionTaskModelMastersRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMissionTaskModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMissionTaskModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMissionTaskModelMastersRequest.fromDict = function (data) {
        return new DescribeMissionTaskModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMissionTaskModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMissionTaskModelMastersRequest;
}());
exports.default = DescribeMissionTaskModelMastersRequest;
//# sourceMappingURL=DescribeMissionTaskModelMastersRequest.js.map