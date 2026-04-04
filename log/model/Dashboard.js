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
var grnFormat = "grn:gs2:{region}:{ownerId}:log:{namespaceName}:dashboard:{dashboardName}";
var Dashboard = /** @class */ (function () {
    function Dashboard() {
        this.dashboardId = null;
        this.name = null;
        this.displayName = null;
        this.description = null;
        this.payload = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Dashboard.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{dashboardName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Dashboard.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{dashboardName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Dashboard.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{dashboardName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Dashboard.getDashboardName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{dashboardName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Dashboard.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getDashboardName(grn) == null || this.getDashboardName(grn) === '') {
            return false;
        }
        return true;
    };
    Dashboard.createGrn = function (region, ownerId, namespaceName, dashboardName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{dashboardName}', dashboardName !== null && dashboardName !== void 0 ? dashboardName : '');
    };
    Dashboard.prototype.getDashboardId = function () {
        return this.dashboardId;
    };
    Dashboard.prototype.setDashboardId = function (dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    };
    Dashboard.prototype.withDashboardId = function (dashboardId) {
        this.dashboardId = dashboardId;
        return this;
    };
    Dashboard.prototype.getName = function () {
        return this.name;
    };
    Dashboard.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Dashboard.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Dashboard.prototype.getDisplayName = function () {
        return this.displayName;
    };
    Dashboard.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    Dashboard.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    Dashboard.prototype.getDescription = function () {
        return this.description;
    };
    Dashboard.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Dashboard.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Dashboard.prototype.getPayload = function () {
        return this.payload;
    };
    Dashboard.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    Dashboard.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    Dashboard.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Dashboard.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Dashboard.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Dashboard.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Dashboard.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Dashboard.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Dashboard.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Dashboard()
            .withDashboardId(data["dashboardId"])
            .withName(data["name"])
            .withDisplayName(data["displayName"])
            .withDescription(data["description"])
            .withPayload(data["payload"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Dashboard.prototype.toDict = function () {
        return {
            "dashboardId": this.getDashboardId(),
            "name": this.getName(),
            "displayName": this.getDisplayName(),
            "description": this.getDescription(),
            "payload": this.getPayload(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Dashboard;
}());
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map