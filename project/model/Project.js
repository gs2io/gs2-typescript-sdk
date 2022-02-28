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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:project:{projectName}";
var Project = /** @class */ (function () {
    function Project() {
        this.projectId = null;
        this.accountName = null;
        this.name = null;
        this.description = null;
        this.plan = null;
        this.billingMethodName = null;
        this.enableEventBridge = null;
        this.eventBridgeAwsAccountId = null;
        this.eventBridgeAwsRegion = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Project.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Project.getProjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Project.isValid = function (grn) {
        if (this.getAccountName(grn) == null || this.getAccountName(grn) === '') {
            return false;
        }
        if (this.getProjectName(grn) == null || this.getProjectName(grn) === '') {
            return false;
        }
        return true;
    };
    Project.createGrn = function (accountName, projectName) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '')
            .replace('{projectName}', projectName !== null && projectName !== void 0 ? projectName : '');
    };
    Project.prototype.getProjectId = function () {
        return this.projectId;
    };
    Project.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
        return this;
    };
    Project.prototype.withProjectId = function (projectId) {
        this.projectId = projectId;
        return this;
    };
    Project.prototype.getAccountName = function () {
        return this.accountName;
    };
    Project.prototype.setAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    Project.prototype.withAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    Project.prototype.getName = function () {
        return this.name;
    };
    Project.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Project.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Project.prototype.getDescription = function () {
        return this.description;
    };
    Project.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Project.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Project.prototype.getPlan = function () {
        return this.plan;
    };
    Project.prototype.setPlan = function (plan) {
        this.plan = plan;
        return this;
    };
    Project.prototype.withPlan = function (plan) {
        this.plan = plan;
        return this;
    };
    Project.prototype.getBillingMethodName = function () {
        return this.billingMethodName;
    };
    Project.prototype.setBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    Project.prototype.withBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    Project.prototype.getEnableEventBridge = function () {
        return this.enableEventBridge;
    };
    Project.prototype.setEnableEventBridge = function (enableEventBridge) {
        this.enableEventBridge = enableEventBridge;
        return this;
    };
    Project.prototype.withEnableEventBridge = function (enableEventBridge) {
        this.enableEventBridge = enableEventBridge;
        return this;
    };
    Project.prototype.getEventBridgeAwsAccountId = function () {
        return this.eventBridgeAwsAccountId;
    };
    Project.prototype.setEventBridgeAwsAccountId = function (eventBridgeAwsAccountId) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    };
    Project.prototype.withEventBridgeAwsAccountId = function (eventBridgeAwsAccountId) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    };
    Project.prototype.getEventBridgeAwsRegion = function () {
        return this.eventBridgeAwsRegion;
    };
    Project.prototype.setEventBridgeAwsRegion = function (eventBridgeAwsRegion) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    };
    Project.prototype.withEventBridgeAwsRegion = function (eventBridgeAwsRegion) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    };
    Project.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Project.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Project.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Project.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Project.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Project.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Project.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Project()
            .withProjectId(data["projectId"])
            .withAccountName(data["accountName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPlan(data["plan"])
            .withBillingMethodName(data["billingMethodName"])
            .withEnableEventBridge(data["enableEventBridge"])
            .withEventBridgeAwsAccountId(data["eventBridgeAwsAccountId"])
            .withEventBridgeAwsRegion(data["eventBridgeAwsRegion"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Project.prototype.toDict = function () {
        return {
            "projectId": this.getProjectId(),
            "accountName": this.getAccountName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "plan": this.getPlan(),
            "billingMethodName": this.getBillingMethodName(),
            "enableEventBridge": this.getEnableEventBridge(),
            "eventBridgeAwsAccountId": this.getEventBridgeAwsAccountId(),
            "eventBridgeAwsRegion": this.getEventBridgeAwsRegion(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Project;
}());
exports.default = Project;
//# sourceMappingURL=Project.js.map