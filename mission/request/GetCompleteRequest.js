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
var GetCompleteRequest = /** @class */ (function () {
    function GetCompleteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.missionGroupName = null;
        this.accessToken = null;
    }
    GetCompleteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCompleteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCompleteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCompleteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCompleteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCompleteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCompleteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCompleteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCompleteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCompleteRequest.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    GetCompleteRequest.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetCompleteRequest.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    GetCompleteRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetCompleteRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetCompleteRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetCompleteRequest.fromDict = function (data) {
        return new GetCompleteRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withAccessToken(data["accessToken"]);
    };
    GetCompleteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetCompleteRequest;
}());
export default GetCompleteRequest;
//# sourceMappingURL=GetCompleteRequest.js.map