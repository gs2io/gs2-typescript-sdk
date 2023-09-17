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
var ChangeSetRequest = /** @class */ (function () {
    function ChangeSetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.template = null;
    }
    ChangeSetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ChangeSetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ChangeSetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ChangeSetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ChangeSetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ChangeSetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ChangeSetRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    ChangeSetRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    ChangeSetRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    ChangeSetRequest.prototype.getTemplate = function () {
        return this.template;
    };
    ChangeSetRequest.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    ChangeSetRequest.prototype.withTemplate = function (template) {
        this.template = template;
        return this;
    };
    ChangeSetRequest.fromDict = function (data) {
        return new ChangeSetRequest()
            .withStackName(data["stackName"])
            .withTemplate(data["template"]);
    };
    ChangeSetRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "template": this.getTemplate(),
        };
    };
    return ChangeSetRequest;
}());
exports.default = ChangeSetRequest;
//# sourceMappingURL=ChangeSetRequest.js.map