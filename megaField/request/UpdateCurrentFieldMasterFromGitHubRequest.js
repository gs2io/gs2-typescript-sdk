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
var Gs2MegaField = tslib_1.__importStar(require("../model"));
var UpdateCurrentFieldMasterFromGitHubRequest = /** @class */ (function () {
    function UpdateCurrentFieldMasterFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.checkoutSetting = null;
    }
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentFieldMasterFromGitHubRequest.fromDict = function (data) {
        return new UpdateCurrentFieldMasterFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withCheckoutSetting(Gs2MegaField.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    UpdateCurrentFieldMasterFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentFieldMasterFromGitHubRequest;
}());
exports.default = UpdateCurrentFieldMasterFromGitHubRequest;
//# sourceMappingURL=UpdateCurrentFieldMasterFromGitHubRequest.js.map