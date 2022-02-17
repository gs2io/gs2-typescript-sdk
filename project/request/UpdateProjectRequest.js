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
var UpdateProjectRequest = /** @class */ (function () {
    function UpdateProjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.projectName = null;
        this.description = null;
        this.plan = null;
        this.billingMethodName = null;
        this.enableEventBridge = null;
        this.eventBridgeAwsAccountId = null;
        this.eventBridgeAwsRegion = null;
    }
    UpdateProjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateProjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateProjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProjectRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    UpdateProjectRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    UpdateProjectRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    UpdateProjectRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    UpdateProjectRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    UpdateProjectRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    UpdateProjectRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateProjectRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateProjectRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateProjectRequest.prototype.getPlan = function () {
        return this.plan;
    };
    UpdateProjectRequest.prototype.setPlan = function (plan) {
        this.plan = plan;
        return this;
    };
    UpdateProjectRequest.prototype.withPlan = function (plan) {
        this.plan = plan;
        return this;
    };
    UpdateProjectRequest.prototype.getBillingMethodName = function () {
        return this.billingMethodName;
    };
    UpdateProjectRequest.prototype.setBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    UpdateProjectRequest.prototype.withBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    UpdateProjectRequest.prototype.getEnableEventBridge = function () {
        return this.enableEventBridge;
    };
    UpdateProjectRequest.prototype.setEnableEventBridge = function (enableEventBridge) {
        this.enableEventBridge = enableEventBridge;
        return this;
    };
    UpdateProjectRequest.prototype.withEnableEventBridge = function (enableEventBridge) {
        this.enableEventBridge = enableEventBridge;
        return this;
    };
    UpdateProjectRequest.prototype.getEventBridgeAwsAccountId = function () {
        return this.eventBridgeAwsAccountId;
    };
    UpdateProjectRequest.prototype.setEventBridgeAwsAccountId = function (eventBridgeAwsAccountId) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    };
    UpdateProjectRequest.prototype.withEventBridgeAwsAccountId = function (eventBridgeAwsAccountId) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    };
    UpdateProjectRequest.prototype.getEventBridgeAwsRegion = function () {
        return this.eventBridgeAwsRegion;
    };
    UpdateProjectRequest.prototype.setEventBridgeAwsRegion = function (eventBridgeAwsRegion) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    };
    UpdateProjectRequest.prototype.withEventBridgeAwsRegion = function (eventBridgeAwsRegion) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    };
    UpdateProjectRequest.fromDict = function (data) {
        return new UpdateProjectRequest()
            .withAccountToken(data["accountToken"])
            .withProjectName(data["projectName"])
            .withDescription(data["description"])
            .withPlan(data["plan"])
            .withBillingMethodName(data["billingMethodName"])
            .withEnableEventBridge(data["enableEventBridge"])
            .withEventBridgeAwsAccountId(data["eventBridgeAwsAccountId"])
            .withEventBridgeAwsRegion(data["eventBridgeAwsRegion"]);
    };
    UpdateProjectRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "projectName": this.getProjectName(),
            "description": this.getDescription(),
            "plan": this.getPlan(),
            "billingMethodName": this.getBillingMethodName(),
            "enableEventBridge": this.getEnableEventBridge(),
            "eventBridgeAwsAccountId": this.getEventBridgeAwsAccountId(),
            "eventBridgeAwsRegion": this.getEventBridgeAwsRegion(),
        };
    };
    return UpdateProjectRequest;
}());
export { UpdateProjectRequest };
//# sourceMappingURL=UpdateProjectRequest.js.map