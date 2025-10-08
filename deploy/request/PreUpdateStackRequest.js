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
var PreUpdateStackRequest = /** @class */ (function () {
    function PreUpdateStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    PreUpdateStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreUpdateStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreUpdateStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateStackRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    PreUpdateStackRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    PreUpdateStackRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    PreUpdateStackRequest.fromDict = function (data) {
        return new PreUpdateStackRequest()
            .withStackName(data["stackName"]);
    };
    PreUpdateStackRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return PreUpdateStackRequest;
}());
exports.default = PreUpdateStackRequest;
//# sourceMappingURL=PreUpdateStackRequest.js.map