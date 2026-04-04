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
var DuplicateDashboardRequest = /** @class */ (function () {
    function DuplicateDashboardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dashboardName = null;
    }
    DuplicateDashboardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DuplicateDashboardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DuplicateDashboardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DuplicateDashboardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DuplicateDashboardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DuplicateDashboardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DuplicateDashboardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DuplicateDashboardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DuplicateDashboardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DuplicateDashboardRequest.prototype.getDashboardName = function () {
        return this.dashboardName;
    };
    DuplicateDashboardRequest.prototype.setDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    DuplicateDashboardRequest.prototype.withDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    DuplicateDashboardRequest.fromDict = function (data) {
        return new DuplicateDashboardRequest()
            .withNamespaceName(data["namespaceName"])
            .withDashboardName(data["dashboardName"]);
    };
    DuplicateDashboardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dashboardName": this.getDashboardName(),
        };
    };
    return DuplicateDashboardRequest;
}());
exports.default = DuplicateDashboardRequest;
//# sourceMappingURL=DuplicateDashboardRequest.js.map