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
var Gs2Ranking = tslib_1.__importStar(require("../model"));
var UpdateCurrentRankingMasterFromGitHubRequest = /** @class */ (function () {
    function UpdateCurrentRankingMasterFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.checkoutSetting = null;
    }
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentRankingMasterFromGitHubRequest.fromDict = function (data) {
        return new UpdateCurrentRankingMasterFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withCheckoutSetting(Gs2Ranking.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    UpdateCurrentRankingMasterFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentRankingMasterFromGitHubRequest;
}());
exports.default = UpdateCurrentRankingMasterFromGitHubRequest;
//# sourceMappingURL=UpdateCurrentRankingMasterFromGitHubRequest.js.map