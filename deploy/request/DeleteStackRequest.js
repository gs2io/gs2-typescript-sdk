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
var DeleteStackRequest = /** @class */ (function () {
    function DeleteStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    DeleteStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStackRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    DeleteStackRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DeleteStackRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    DeleteStackRequest.fromDict = function (data) {
        return new DeleteStackRequest()
            .withStackName(data["stackName"]);
    };
    DeleteStackRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return DeleteStackRequest;
}());
exports.default = DeleteStackRequest;
//# sourceMappingURL=DeleteStackRequest.js.map