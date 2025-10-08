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
var DeleteStackResourcesRequest = /** @class */ (function () {
    function DeleteStackResourcesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    DeleteStackResourcesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStackResourcesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStackResourcesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStackResourcesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStackResourcesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStackResourcesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStackResourcesRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    DeleteStackResourcesRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DeleteStackResourcesRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DeleteStackResourcesRequest.fromDict = function (data) {
        return new DeleteStackResourcesRequest()
            .withStackName(data["stackName"]);
    };
    DeleteStackResourcesRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return DeleteStackResourcesRequest;
}());
exports.default = DeleteStackResourcesRequest;
//# sourceMappingURL=DeleteStackResourcesRequest.js.map