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
var Gs2SeasonRating = tslib_1.__importStar(require("../model"));
var UpdateCurrentSeasonModelMasterFromGitHubRequest = /** @class */ (function () {
    function UpdateCurrentSeasonModelMasterFromGitHubRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.checkoutSetting = null;
    }
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.getCheckoutSetting = function () {
        return this.checkoutSetting;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.setCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.withCheckoutSetting = function (checkoutSetting) {
        this.checkoutSetting = checkoutSetting;
        return this;
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.fromDict = function (data) {
        return new UpdateCurrentSeasonModelMasterFromGitHubRequest()
            .withNamespaceName(data["namespaceName"])
            .withCheckoutSetting(Gs2SeasonRating.GitHubCheckoutSetting.fromDict(data["checkoutSetting"]));
    };
    UpdateCurrentSeasonModelMasterFromGitHubRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "checkoutSetting": (_a = this.getCheckoutSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateCurrentSeasonModelMasterFromGitHubRequest;
}());
exports.default = UpdateCurrentSeasonModelMasterFromGitHubRequest;
//# sourceMappingURL=UpdateCurrentSeasonModelMasterFromGitHubRequest.js.map