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
exports.UpdateStackRequest = void 0;
var UpdateStackRequest = /** @class */ (function () {
    function UpdateStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.description = null;
        this.template = null;
    }
    UpdateStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStackRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    UpdateStackRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    UpdateStackRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    UpdateStackRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateStackRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStackRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStackRequest.prototype.getTemplate = function () {
        return this.template;
    };
    UpdateStackRequest.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    UpdateStackRequest.prototype.withTemplate = function (template) {
        this.template = template;
        return this;
    };
    UpdateStackRequest.fromDict = function (data) {
        return new UpdateStackRequest()
            .withStackName(data["stackName"])
            .withDescription(data["description"])
            .withTemplate(data["template"]);
    };
    UpdateStackRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "description": this.getDescription(),
            "template": this.getTemplate(),
        };
    };
    return UpdateStackRequest;
}());
exports.UpdateStackRequest = UpdateStackRequest;
//# sourceMappingURL=UpdateStackRequest.js.map