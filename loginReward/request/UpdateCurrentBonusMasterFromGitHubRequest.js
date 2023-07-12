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
var Gs2LoginReward = tslib_1.__importStar(require("../model"));
var UpdateCurrentBonusMasterFromGitHubRequest = /** @class */ (function () {
    function UpdateCurrentBonusMasterFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.checkoutSetting = null;
    }
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentBonusMasterFromGitHubRequest.fromDict = function (data) {
        return new UpdateCurrentBonusMasterFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withCheckoutSetting(Gs2LoginReward.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    UpdateCurrentBonusMasterFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentBonusMasterFromGitHubRequest;
}());
exports.default = UpdateCurrentBonusMasterFromGitHubRequest;
//# sourceMappingURL=UpdateCurrentBonusMasterFromGitHubRequest.js.map