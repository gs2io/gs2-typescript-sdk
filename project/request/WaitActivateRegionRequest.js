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
var WaitActivateRegionRequest = /** @class */ (function () {
    function WaitActivateRegionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.ownerId = null;
        this.projectName = null;
        this.regionName = null;
    }
    WaitActivateRegionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WaitActivateRegionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitActivateRegionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitActivateRegionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WaitActivateRegionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitActivateRegionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitActivateRegionRequest.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    WaitActivateRegionRequest.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    WaitActivateRegionRequest.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    WaitActivateRegionRequest.prototype.getProjectName = function () {
        return this.projectName;
    };
    WaitActivateRegionRequest.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    WaitActivateRegionRequest.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    WaitActivateRegionRequest.prototype.getRegionName = function () {
        return this.regionName;
    };
    WaitActivateRegionRequest.prototype.setRegionName = function (regionName) {
        this.regionName = regionName;
        return this;
    };
    WaitActivateRegionRequest.prototype.withRegionName = function (regionName) {
        this.regionName = regionName;
        return this;
    };
    WaitActivateRegionRequest.fromDict = function (data) {
        return new WaitActivateRegionRequest()
            .withOwnerId(data["ownerId"])
            .withProjectName(data["projectName"])
            .withRegionName(data["regionName"]);
    };
    WaitActivateRegionRequest.prototype.toDict = function () {
        return {
            "ownerId": this.getOwnerId(),
            "projectName": this.getProjectName(),
            "regionName": this.getRegionName(),
        };
    };
    return WaitActivateRegionRequest;
}());
exports.default = WaitActivateRegionRequest;
//# sourceMappingURL=WaitActivateRegionRequest.js.map