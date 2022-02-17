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
exports.ForceDeleteStackRequest = void 0;
var ForceDeleteStackRequest = /** @class */ (function () {
    function ForceDeleteStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    ForceDeleteStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ForceDeleteStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForceDeleteStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForceDeleteStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ForceDeleteStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForceDeleteStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForceDeleteStackRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    ForceDeleteStackRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    ForceDeleteStackRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    ForceDeleteStackRequest.fromDict = function (data) {
        return new ForceDeleteStackRequest()
            .withStackName(data["stackName"]);
    };
    ForceDeleteStackRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return ForceDeleteStackRequest;
}());
exports.ForceDeleteStackRequest = ForceDeleteStackRequest;
//# sourceMappingURL=ForceDeleteStackRequest.js.map