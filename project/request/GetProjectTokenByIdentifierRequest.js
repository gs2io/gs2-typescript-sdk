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
var GetProjectTokenByIdentifierRequest = /** @class */ (function () {
    function GetProjectTokenByIdentifierRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountName = null;
        this.projectName = null;
        this.userName = null;
        this.password = null;
    }
    GetProjectTokenByIdentifierRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetProjectTokenByIdentifierRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetProjectTokenByIdentifierRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.getAccountName = function () {
        return this.accountName;
    };
    GetProjectTokenByIdentifierRequest.prototype.setAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.withAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    GetProjectTokenByIdentifierRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.getUserName = function () {
        return this.userName;
    };
    GetProjectTokenByIdentifierRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.getPassword = function () {
        return this.password;
    };
    GetProjectTokenByIdentifierRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    GetProjectTokenByIdentifierRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    GetProjectTokenByIdentifierRequest.fromDict = function (data) {
        return new GetProjectTokenByIdentifierRequest()
            .withAccountName(data["accountName"])
            .withProjectName(data["projectName"])
            .withUserName(data["userName"])
            .withPassword(data["password"]);
    };
    GetProjectTokenByIdentifierRequest.prototype.toDict = function () {
        return {
            "accountName": this.getAccountName(),
            "projectName": this.getProjectName(),
            "userName": this.getUserName(),
            "password": this.getPassword(),
        };
    };
    return GetProjectTokenByIdentifierRequest;
}());
export { GetProjectTokenByIdentifierRequest };
//# sourceMappingURL=GetProjectTokenByIdentifierRequest.js.map