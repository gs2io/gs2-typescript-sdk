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
var CreateDashboardRequest = /** @class */ (function () {
    function CreateDashboardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.displayName = null;
        this.description = null;
    }
    CreateDashboardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateDashboardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateDashboardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateDashboardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateDashboardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateDashboardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateDashboardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateDashboardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateDashboardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateDashboardRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    CreateDashboardRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateDashboardRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateDashboardRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateDashboardRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateDashboardRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateDashboardRequest.fromDict = function (data) {
        return new CreateDashboardRequest()
            .withNamespaceName(data["namespaceName"])
            .withDisplayName(data["displayName"])
            .withDescription(data["description"]);
    };
    CreateDashboardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "displayName": this.getDisplayName(),
            "description": this.getDescription(),
        };
    };
    return CreateDashboardRequest;
}());
exports.default = CreateDashboardRequest;
//# sourceMappingURL=CreateDashboardRequest.js.map