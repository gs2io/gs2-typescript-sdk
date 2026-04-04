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
var DeleteDashboardRequest = /** @class */ (function () {
    function DeleteDashboardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dashboardName = null;
    }
    DeleteDashboardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteDashboardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDashboardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDashboardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteDashboardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDashboardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDashboardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteDashboardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDashboardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDashboardRequest.prototype.getDashboardName = function () {
        return this.dashboardName;
    };
    DeleteDashboardRequest.prototype.setDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    DeleteDashboardRequest.prototype.withDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    DeleteDashboardRequest.fromDict = function (data) {
        return new DeleteDashboardRequest()
            .withNamespaceName(data["namespaceName"])
            .withDashboardName(data["dashboardName"]);
    };
    DeleteDashboardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dashboardName": this.getDashboardName(),
        };
    };
    return DeleteDashboardRequest;
}());
exports.default = DeleteDashboardRequest;
//# sourceMappingURL=DeleteDashboardRequest.js.map