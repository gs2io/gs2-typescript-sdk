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
import * as Gs2Deploy from '../model';
var UpdateStackFromGitHubRequest = /** @class */ (function () {
    function UpdateStackFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stackName = null;
        this.description = null;
        this.checkoutSetting = null;
    }
    UpdateStackFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStackFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStackFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.getStackName = function () {
        return this.stackName;
    };
    UpdateStackFromGitHubRequest.prototype.setStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.withStackName = function (stackName) {
        this.stackName = stackName;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateStackFromGitHubRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    UpdateStackFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateStackFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateStackFromGitHubRequest.fromDict = function (data) {
        return new UpdateStackFromGitHubRequest()
            .withStackName(data["stackName"])
            .withDescription(data["description"])
            .withCheckoutSetting(Gs2Deploy.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    UpdateStackFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "stackName": this.getStackName(),
            "description": this.getDescription(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateStackFromGitHubRequest;
}());
export { UpdateStackFromGitHubRequest };
//# sourceMappingURL=UpdateStackFromGitHubRequest.js.map