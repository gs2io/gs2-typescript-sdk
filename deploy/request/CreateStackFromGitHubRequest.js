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
var tslib_1 = require("tslib");
var Gs2Deploy = tslib_1.__importStar(require("../model"));
var CreateStackFromGitHubRequest = /** @class */ (function () {
    function CreateStackFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.checkoutSetting = null;
    }
    CreateStackFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateStackFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateStackFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.getName = function () {
        return this.name;
    };
    CreateStackFromGitHubRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateStackFromGitHubRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    CreateStackFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    CreateStackFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    CreateStackFromGitHubRequest.fromDict = function (data) {
        return new CreateStackFromGitHubRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withCheckoutSetting(Gs2Deploy.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    CreateStackFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CreateStackFromGitHubRequest;
}());
exports.default = CreateStackFromGitHubRequest;
//# sourceMappingURL=CreateStackFromGitHubRequest.js.map