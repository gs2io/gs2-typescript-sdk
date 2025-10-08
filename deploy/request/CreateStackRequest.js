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
var CreateStackRequest = /** @class */ (function () {
    function CreateStackRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.mode = null;
        this.template = null;
        this.uploadToken = null;
    }
    CreateStackRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateStackRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStackRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStackRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateStackRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStackRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStackRequest.prototype.getName = function () {
        return this.name;
    };
    CreateStackRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateStackRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateStackRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateStackRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStackRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStackRequest.prototype.getMode = function () {
        return this.mode;
    };
    CreateStackRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    CreateStackRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    CreateStackRequest.prototype.getTemplate = function () {
        return this.template;
    };
    CreateStackRequest.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    CreateStackRequest.prototype.withTemplate = function (template) {
        this.template = template;
        return this;
    };
    CreateStackRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    CreateStackRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    CreateStackRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    CreateStackRequest.fromDict = function (data) {
        return new CreateStackRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withMode(data["mode"])
            .withTemplate(data["template"])
            .withUploadToken(data["uploadToken"]);
    };
    CreateStackRequest.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "mode": this.getMode(),
            "template": this.getTemplate(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return CreateStackRequest;
}());
exports.default = CreateStackRequest;
//# sourceMappingURL=CreateStackRequest.js.map