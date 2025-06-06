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
var PreChangeSetRequest = /** @class */ (function () {
    function PreChangeSetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
    }
    PreChangeSetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreChangeSetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreChangeSetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreChangeSetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreChangeSetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreChangeSetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreChangeSetRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    PreChangeSetRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    PreChangeSetRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    PreChangeSetRequest.fromDict = function (data) {
        return new PreChangeSetRequest()
            .withStackName(data["stackName"]);
    };
    PreChangeSetRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
        };
    };
    return PreChangeSetRequest;
}());
exports.default = PreChangeSetRequest;
//# sourceMappingURL=PreChangeSetRequest.js.map