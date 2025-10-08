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
var GetResourceRequest = /** @class */ (function () {
    function GetResourceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.resourceName = null;
    }
    GetResourceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetResourceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetResourceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetResourceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetResourceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetResourceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetResourceRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    GetResourceRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetResourceRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetResourceRequest.prototype.getResourceName = function () {
        return this.resourceName;
    };
    GetResourceRequest.prototype.setResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    GetResourceRequest.prototype.withResourceName = function (resourceName) {
        this.resourceName = resourceName;
        return this;
    };
    GetResourceRequest.fromDict = function (data) {
        return new GetResourceRequest()
            .withStackName(data["stackName"])
            .withResourceName(data["resourceName"]);
    };
    GetResourceRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "resourceName": this.getResourceName(),
        };
    };
    return GetResourceRequest;
}());
exports.default = GetResourceRequest;
//# sourceMappingURL=GetResourceRequest.js.map