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
var ValidateRequest = /** @class */ (function () {
    function ValidateRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.mode = null;
        this.template = null;
        this.uploadToken = null;
    }
    ValidateRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ValidateRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ValidateRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ValidateRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ValidateRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ValidateRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ValidateRequest.prototype.getMode = function () {
        return this.mode;
    };
    ValidateRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    ValidateRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    ValidateRequest.prototype.getTemplate = function () {
        return this.template;
    };
    ValidateRequest.prototype.setTemplate = function (template) {
        this.template = template;
        return this;
    };
    ValidateRequest.prototype.withTemplate = function (template) {
        this.template = template;
        return this;
    };
    ValidateRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    ValidateRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    ValidateRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    ValidateRequest.fromDict = function (data) {
        return new ValidateRequest()
            .withMode(data["mode"])
            .withTemplate(data["template"])
            .withUploadToken(data["uploadToken"]);
    };
    ValidateRequest.prototype.toDict = function () {
        return {
            "mode": this.getMode(),
            "template": this.getTemplate(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return ValidateRequest;
}());
exports.default = ValidateRequest;
//# sourceMappingURL=ValidateRequest.js.map