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
var GetStackRequest = /** @class */ (function () {
    function GetStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    GetStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStackRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    GetStackRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetStackRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    GetStackRequest.fromDict = function (data) {
        return new GetStackRequest()
            .withStackName(data["stackName"]);
    };
    GetStackRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return GetStackRequest;
}());
exports.default = GetStackRequest;
//# sourceMappingURL=GetStackRequest.js.map