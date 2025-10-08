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
var GetRankingCategoryModelMetricsRequest = /** @class */ (function () {
    function GetRankingCategoryModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
    }
    GetRankingCategoryModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRankingCategoryModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRankingCategoryModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRankingCategoryModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    GetRankingCategoryModelMetricsRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetRankingCategoryModelMetricsRequest.fromDict = function (data) {
        return new GetRankingCategoryModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"]);
    };
    GetRankingCategoryModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
        };
    };
    return GetRankingCategoryModelMetricsRequest;
}());
exports.default = GetRankingCategoryModelMetricsRequest;
//# sourceMappingURL=GetRankingCategoryModelMetricsRequest.js.map