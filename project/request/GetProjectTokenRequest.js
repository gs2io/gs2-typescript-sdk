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
var GetProjectTokenRequest = /** @class */ (function () {
    function GetProjectTokenRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.projectName = null;
        this.accountToken = null;
    }
    GetProjectTokenRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetProjectTokenRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProjectTokenRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProjectTokenRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetProjectTokenRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProjectTokenRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProjectTokenRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    GetProjectTokenRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    GetProjectTokenRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    GetProjectTokenRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    GetProjectTokenRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    GetProjectTokenRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    GetProjectTokenRequest.fromDict = function (data) {
        return new GetProjectTokenRequest()
            .withProjectName(data["projectName"])
            .withAccountToken(data["accountToken"]);
    };
    GetProjectTokenRequest.prototype.toDict = function () {
        return {
            "projectName": this.getProjectName(),
            "accountToken": this.getAccountToken(),
        };
    };
    return GetProjectTokenRequest;
}());
export { GetProjectTokenRequest };
//# sourceMappingURL=GetProjectTokenRequest.js.map