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
var GetProjectRequest = /** @class */ (function () {
    function GetProjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.projectName = null;
    }
    GetProjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetProjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetProjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProjectRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    GetProjectRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    GetProjectRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    GetProjectRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    GetProjectRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    GetProjectRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    GetProjectRequest.fromDict = function (data) {
        return new GetProjectRequest()
            .withAccountToken(data["accountToken"])
            .withProjectName(data["projectName"]);
    };
    GetProjectRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "projectName": this.getProjectName(),
        };
    };
    return GetProjectRequest;
}());
export { GetProjectRequest };
//# sourceMappingURL=GetProjectRequest.js.map