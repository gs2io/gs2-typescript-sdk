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
var GetDashboardRequest = /** @class */ (function () {
    function GetDashboardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dashboardName = null;
    }
    GetDashboardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDashboardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDashboardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDashboardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDashboardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDashboardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDashboardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDashboardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDashboardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDashboardRequest.prototype.getDashboardName = function () {
        return this.dashboardName;
    };
    GetDashboardRequest.prototype.setDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    GetDashboardRequest.prototype.withDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    GetDashboardRequest.fromDict = function (data) {
        return new GetDashboardRequest()
            .withNamespaceName(data["namespaceName"])
            .withDashboardName(data["dashboardName"]);
    };
    GetDashboardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dashboardName": this.getDashboardName(),
        };
    };
    return GetDashboardRequest;
}());
exports.default = GetDashboardRequest;
//# sourceMappingURL=GetDashboardRequest.js.map