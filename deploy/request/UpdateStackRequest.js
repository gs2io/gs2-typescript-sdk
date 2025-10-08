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
var UpdateStackRequest = /** @class */ (function () {
    function UpdateStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.description = null;
        this.mode = null;
        this.template = null;
        this.uploadToken = null;
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
    UpdateStackRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateStackRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateStackRequest.prototype.withMode = function (mode) {
        this.mode = mode;
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
    UpdateStackRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    UpdateStackRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateStackRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateStackRequest.fromDict = function (data) {
        return new UpdateStackRequest()
            .withStackName(data["stackName"])
            .withDescription(data["description"])
            .withMode(data["mode"])
            .withTemplate(data["template"])
            .withUploadToken(data["uploadToken"]);
    };
    UpdateStackRequest.prototype.toDict = function () {
        return {
            "stackName": this.getStackName(),
            "description": this.getDescription(),
            "mode": this.getMode(),
            "template": this.getTemplate(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return UpdateStackRequest;
}());
exports.default = UpdateStackRequest;
//# sourceMappingURL=UpdateStackRequest.js.map