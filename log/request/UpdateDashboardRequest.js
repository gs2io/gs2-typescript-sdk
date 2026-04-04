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
var UpdateDashboardRequest = /** @class */ (function () {
    function UpdateDashboardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dashboardName = null;
        this.displayName = null;
        this.description = null;
        this.payload = null;
    }
    UpdateDashboardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateDashboardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDashboardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDashboardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateDashboardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDashboardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDashboardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateDashboardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDashboardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDashboardRequest.prototype.getDashboardName = function () {
        return this.dashboardName;
    };
    UpdateDashboardRequest.prototype.setDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    UpdateDashboardRequest.prototype.withDashboardName = function (dashboardName) {
        this.dashboardName = dashboardName;
        return this;
    };
    UpdateDashboardRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    UpdateDashboardRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateDashboardRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateDashboardRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateDashboardRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateDashboardRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateDashboardRequest.prototype.getPayload = function () {
        return this.payload;
    };
    UpdateDashboardRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    UpdateDashboardRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    UpdateDashboardRequest.fromDict = function (data) {
        return new UpdateDashboardRequest()
            .withNamespaceName(data["namespaceName"])
            .withDashboardName(data["dashboardName"])
            .withDisplayName(data["displayName"])
            .withDescription(data["description"])
            .withPayload(data["payload"]);
    };
    UpdateDashboardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dashboardName": this.getDashboardName(),
            "displayName": this.getDisplayName(),
            "description": this.getDescription(),
            "payload": this.getPayload(),
        };
    };
    return UpdateDashboardRequest;
}());
exports.default = UpdateDashboardRequest;
//# sourceMappingURL=UpdateDashboardRequest.js.map