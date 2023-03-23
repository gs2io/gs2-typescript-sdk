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
var ActivateRegionRequest = /** @class */ (function () {
    function ActivateRegionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.projectName = null;
        this.regionName = null;
    }
    ActivateRegionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ActivateRegionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ActivateRegionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ActivateRegionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ActivateRegionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ActivateRegionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ActivateRegionRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    ActivateRegionRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    ActivateRegionRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    ActivateRegionRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    ActivateRegionRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    ActivateRegionRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    ActivateRegionRequest.prototype.getRegionName = function () {
        return this.regionName;
    };
    ActivateRegionRequest.prototype.setRegionName = function (regionName) {
        this.regionName = regionName;
        return this;
    };
    ActivateRegionRequest.prototype.withRegionName = function (regionName) {
        this.regionName = regionName;
        return this;
    };
    ActivateRegionRequest.fromDict = function (data) {
        return new ActivateRegionRequest()
            .withAccountToken(data["accountToken"])
            .withProjectName(data["projectName"])
            .withRegionName(data["regionName"]);
    };
    ActivateRegionRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "projectName": this.getProjectName(),
            "regionName": this.getRegionName(),
        };
    };
    return ActivateRegionRequest;
}());
exports.default = ActivateRegionRequest;
//# sourceMappingURL=ActivateRegionRequest.js.map