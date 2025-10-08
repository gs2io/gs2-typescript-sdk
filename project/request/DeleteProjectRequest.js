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
var DeleteProjectRequest = /** @class */ (function () {
    function DeleteProjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.projectName = null;
    }
    DeleteProjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteProjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteProjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteProjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteProjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteProjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteProjectRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DeleteProjectRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DeleteProjectRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DeleteProjectRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    DeleteProjectRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    DeleteProjectRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    DeleteProjectRequest.fromDict = function (data) {
        return new DeleteProjectRequest()
            .withAccountToken(data["accountToken"])
            .withProjectName(data["projectName"]);
    };
    DeleteProjectRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "projectName": this.getProjectName(),
        };
    };
    return DeleteProjectRequest;
}());
exports.default = DeleteProjectRequest;
//# sourceMappingURL=DeleteProjectRequest.js.map