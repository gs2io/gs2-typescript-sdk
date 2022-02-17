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
var CreateProjectRequest = /** @class */ (function () {
    function CreateProjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.name = null;
        this.description = null;
        this.plan = null;
        this.billingMethodName = null;
        this.enableEventBridge = null;
        this.eventBridgeAwsAccountId = null;
        this.eventBridgeAwsRegion = null;
    }
    CreateProjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateProjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateProjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateProjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateProjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateProjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateProjectRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    CreateProjectRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    CreateProjectRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    CreateProjectRequest.prototype.getName = function () {
        return this.name;
    };
    CreateProjectRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateProjectRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateProjectRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateProjectRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateProjectRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateProjectRequest.prototype.getPlan = function () {
        return this.plan;
    };
    CreateProjectRequest.prototype.setPlan = function (plan) {
        this.plan = plan;
        return this;
    };
    CreateProjectRequest.prototype.withPlan = function (plan) {
        this.plan = plan;
        return this;
    };
    CreateProjectRequest.prototype.getBillingMethodName = function () {
        return this.billingMethodName;
    };
    CreateProjectRequest.prototype.setBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    CreateProjectRequest.prototype.withBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    CreateProjectRequest.prototype.getEnableEventBridge = function () {
        return this.enableEventBridge;
    };
    CreateProjectRequest.prototype.setEnableEventBridge = function (enableEventBridge) {
        this.enableEventBridge = enableEventBridge;
        return this;
    };
    CreateProjectRequest.prototype.withEnableEventBridge = function (enableEventBridge) {
        this.enableEventBridge = enableEventBridge;
        return this;
    };
    CreateProjectRequest.prototype.getEventBridgeAwsAccountId = function () {
        return this.eventBridgeAwsAccountId;
    };
    CreateProjectRequest.prototype.setEventBridgeAwsAccountId = function (eventBridgeAwsAccountId) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    };
    CreateProjectRequest.prototype.withEventBridgeAwsAccountId = function (eventBridgeAwsAccountId) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    };
    CreateProjectRequest.prototype.getEventBridgeAwsRegion = function () {
        return this.eventBridgeAwsRegion;
    };
    CreateProjectRequest.prototype.setEventBridgeAwsRegion = function (eventBridgeAwsRegion) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    };
    CreateProjectRequest.prototype.withEventBridgeAwsRegion = function (eventBridgeAwsRegion) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    };
    CreateProjectRequest.fromDict = function (data) {
        return new CreateProjectRequest()
            .withAccountToken(data["accountToken"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPlan(data["plan"])
            .withBillingMethodName(data["billingMethodName"])
            .withEnableEventBridge(data["enableEventBridge"])
            .withEventBridgeAwsAccountId(data["eventBridgeAwsAccountId"])
            .withEventBridgeAwsRegion(data["eventBridgeAwsRegion"]);
    };
    CreateProjectRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "name": this.getName(),
            "description": this.getDescription(),
            "plan": this.getPlan(),
            "billingMethodName": this.getBillingMethodName(),
            "enableEventBridge": this.getEnableEventBridge(),
            "eventBridgeAwsAccountId": this.getEventBridgeAwsAccountId(),
            "eventBridgeAwsRegion": this.getEventBridgeAwsRegion(),
        };
    };
    return CreateProjectRequest;
}());
exports.default = CreateProjectRequest;
//# sourceMappingURL=CreateProjectRequest.js.map