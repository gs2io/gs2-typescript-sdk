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
import * as Gs2Script from '../model';
var CreateScriptFromGitHubRequest = /** @class */ (function () {
    function CreateScriptFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.checkoutSetting = null;
    }
    CreateScriptFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateScriptFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateScriptFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateScriptFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.getName = function () {
        return this.name;
    };
    CreateScriptFromGitHubRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateScriptFromGitHubRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    CreateScriptFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    CreateScriptFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    CreateScriptFromGitHubRequest.fromDict = function (data) {
        return new CreateScriptFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withCheckoutSetting(Gs2Script.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    CreateScriptFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CreateScriptFromGitHubRequest;
}());
export default CreateScriptFromGitHubRequest;
//# sourceMappingURL=CreateScriptFromGitHubRequest.js.map