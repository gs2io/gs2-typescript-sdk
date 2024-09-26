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
var Gs2Script = tslib_1.__importStar(require("../model"));
var UpdateScriptFromGitHubRequest = /** @class */ (function () {
    function UpdateScriptFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.scriptName = null;
        this.description = null;
        this.checkoutSetting = null;
        this.disableStringNumberToNumber = null;
    }
    UpdateScriptFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateScriptFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateScriptFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateScriptFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.getScriptName = function () {
        return this.scriptName;
    };
    UpdateScriptFromGitHubRequest.prototype.setScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateScriptFromGitHubRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    UpdateScriptFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.getDisableStringNumberToNumber = function () {
        return this.disableStringNumberToNumber;
    };
    UpdateScriptFromGitHubRequest.prototype.setDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    UpdateScriptFromGitHubRequest.prototype.withDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    UpdateScriptFromGitHubRequest.fromDict = function (data) {
        return new UpdateScriptFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withScriptName(data["scriptName"])
            .withDescription(data["description"])
            .withCheckoutSetting(Gs2Script.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]))
            .withDisableStringNumberToNumber(data["disableStringNumberToNumber"]);
    };
    UpdateScriptFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "scriptName": this.getScriptName(),
            "description": this.getDescription(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "disableStringNumberToNumber": this.getDisableStringNumberToNumber(),
        };
    };
    return UpdateScriptFromGitHubRequest;
}());
exports.default = UpdateScriptFromGitHubRequest;
//# sourceMappingURL=UpdateScriptFromGitHubRequest.js.map