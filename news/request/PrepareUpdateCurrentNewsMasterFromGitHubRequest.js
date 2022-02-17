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
var Gs2News = (0, tslib_1.__importStar)(require("../model"));
var PrepareUpdateCurrentNewsMasterFromGitHubRequest = /** @class */ (function () {
    function PrepareUpdateCurrentNewsMasterFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.checkoutSetting = null;
    }
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.fromDict = function (data) {
        return new PrepareUpdateCurrentNewsMasterFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withCheckoutSetting(Gs2News.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    PrepareUpdateCurrentNewsMasterFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return PrepareUpdateCurrentNewsMasterFromGitHubRequest;
}());
exports.default = PrepareUpdateCurrentNewsMasterFromGitHubRequest;
//# sourceMappingURL=PrepareUpdateCurrentNewsMasterFromGitHubRequest.js.map