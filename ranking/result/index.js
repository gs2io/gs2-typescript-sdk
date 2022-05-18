"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeSubscribesByCategoryNameAndUserIdResult = exports.DescribeSubscribesByCategoryNameResult = exports.UnsubscribeByUserIdResult = exports.UnsubscribeResult = exports.GetSubscribeByUserIdResult = exports.GetSubscribeResult = exports.UpdateCurrentRankingMasterFromGitHubResult = exports.UpdateCurrentRankingMasterResult = exports.GetCurrentRankingMasterResult = exports.ExportMasterResult = exports.CalcRankingResult = exports.PutScoreByUserIdResult = exports.PutScoreResult = exports.GetRankingByUserIdResult = exports.GetRankingResult = exports.DescribeNearRankingsResult = exports.DescribeRankingssByUserIdResult = exports.DescribeRankingsResult = exports.GetScoreByUserIdResult = exports.GetScoreResult = exports.DescribeScoresByUserIdResult = exports.DescribeScoresResult = exports.SubscribeByUserIdResult = exports.SubscribeResult = exports.DeleteCategoryModelMasterResult = exports.UpdateCategoryModelMasterResult = exports.GetCategoryModelMasterResult = exports.CreateCategoryModelMasterResult = exports.DescribeCategoryModelMastersResult = exports.GetCategoryModelResult = exports.DescribeCategoryModelsResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
var tslib_1 = require("tslib");
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
var DescribeNamespacesResult_1 = tslib_1.__importDefault(require("./DescribeNamespacesResult"));
exports.DescribeNamespacesResult = DescribeNamespacesResult_1.default;
var CreateNamespaceResult_1 = tslib_1.__importDefault(require("./CreateNamespaceResult"));
exports.CreateNamespaceResult = CreateNamespaceResult_1.default;
var GetNamespaceStatusResult_1 = tslib_1.__importDefault(require("./GetNamespaceStatusResult"));
exports.GetNamespaceStatusResult = GetNamespaceStatusResult_1.default;
var GetNamespaceResult_1 = tslib_1.__importDefault(require("./GetNamespaceResult"));
exports.GetNamespaceResult = GetNamespaceResult_1.default;
var UpdateNamespaceResult_1 = tslib_1.__importDefault(require("./UpdateNamespaceResult"));
exports.UpdateNamespaceResult = UpdateNamespaceResult_1.default;
var DeleteNamespaceResult_1 = tslib_1.__importDefault(require("./DeleteNamespaceResult"));
exports.DeleteNamespaceResult = DeleteNamespaceResult_1.default;
var DescribeCategoryModelsResult_1 = tslib_1.__importDefault(require("./DescribeCategoryModelsResult"));
exports.DescribeCategoryModelsResult = DescribeCategoryModelsResult_1.default;
var GetCategoryModelResult_1 = tslib_1.__importDefault(require("./GetCategoryModelResult"));
exports.GetCategoryModelResult = GetCategoryModelResult_1.default;
var DescribeCategoryModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeCategoryModelMastersResult"));
exports.DescribeCategoryModelMastersResult = DescribeCategoryModelMastersResult_1.default;
var CreateCategoryModelMasterResult_1 = tslib_1.__importDefault(require("./CreateCategoryModelMasterResult"));
exports.CreateCategoryModelMasterResult = CreateCategoryModelMasterResult_1.default;
var GetCategoryModelMasterResult_1 = tslib_1.__importDefault(require("./GetCategoryModelMasterResult"));
exports.GetCategoryModelMasterResult = GetCategoryModelMasterResult_1.default;
var UpdateCategoryModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCategoryModelMasterResult"));
exports.UpdateCategoryModelMasterResult = UpdateCategoryModelMasterResult_1.default;
var DeleteCategoryModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteCategoryModelMasterResult"));
exports.DeleteCategoryModelMasterResult = DeleteCategoryModelMasterResult_1.default;
var SubscribeResult_1 = tslib_1.__importDefault(require("./SubscribeResult"));
exports.SubscribeResult = SubscribeResult_1.default;
var SubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./SubscribeByUserIdResult"));
exports.SubscribeByUserIdResult = SubscribeByUserIdResult_1.default;
var DescribeScoresResult_1 = tslib_1.__importDefault(require("./DescribeScoresResult"));
exports.DescribeScoresResult = DescribeScoresResult_1.default;
var DescribeScoresByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeScoresByUserIdResult"));
exports.DescribeScoresByUserIdResult = DescribeScoresByUserIdResult_1.default;
var GetScoreResult_1 = tslib_1.__importDefault(require("./GetScoreResult"));
exports.GetScoreResult = GetScoreResult_1.default;
var GetScoreByUserIdResult_1 = tslib_1.__importDefault(require("./GetScoreByUserIdResult"));
exports.GetScoreByUserIdResult = GetScoreByUserIdResult_1.default;
var DescribeRankingsResult_1 = tslib_1.__importDefault(require("./DescribeRankingsResult"));
exports.DescribeRankingsResult = DescribeRankingsResult_1.default;
var DescribeRankingssByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeRankingssByUserIdResult"));
exports.DescribeRankingssByUserIdResult = DescribeRankingssByUserIdResult_1.default;
var DescribeNearRankingsResult_1 = tslib_1.__importDefault(require("./DescribeNearRankingsResult"));
exports.DescribeNearRankingsResult = DescribeNearRankingsResult_1.default;
var GetRankingResult_1 = tslib_1.__importDefault(require("./GetRankingResult"));
exports.GetRankingResult = GetRankingResult_1.default;
var GetRankingByUserIdResult_1 = tslib_1.__importDefault(require("./GetRankingByUserIdResult"));
exports.GetRankingByUserIdResult = GetRankingByUserIdResult_1.default;
var PutScoreResult_1 = tslib_1.__importDefault(require("./PutScoreResult"));
exports.PutScoreResult = PutScoreResult_1.default;
var PutScoreByUserIdResult_1 = tslib_1.__importDefault(require("./PutScoreByUserIdResult"));
exports.PutScoreByUserIdResult = PutScoreByUserIdResult_1.default;
var CalcRankingResult_1 = tslib_1.__importDefault(require("./CalcRankingResult"));
exports.CalcRankingResult = CalcRankingResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentRankingMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentRankingMasterResult"));
exports.GetCurrentRankingMasterResult = GetCurrentRankingMasterResult_1.default;
var UpdateCurrentRankingMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRankingMasterResult"));
exports.UpdateCurrentRankingMasterResult = UpdateCurrentRankingMasterResult_1.default;
var UpdateCurrentRankingMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRankingMasterFromGitHubResult"));
exports.UpdateCurrentRankingMasterFromGitHubResult = UpdateCurrentRankingMasterFromGitHubResult_1.default;
var GetSubscribeResult_1 = tslib_1.__importDefault(require("./GetSubscribeResult"));
exports.GetSubscribeResult = GetSubscribeResult_1.default;
var GetSubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./GetSubscribeByUserIdResult"));
exports.GetSubscribeByUserIdResult = GetSubscribeByUserIdResult_1.default;
var UnsubscribeResult_1 = tslib_1.__importDefault(require("./UnsubscribeResult"));
exports.UnsubscribeResult = UnsubscribeResult_1.default;
var UnsubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./UnsubscribeByUserIdResult"));
exports.UnsubscribeByUserIdResult = UnsubscribeByUserIdResult_1.default;
var DescribeSubscribesByCategoryNameResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesByCategoryNameResult"));
exports.DescribeSubscribesByCategoryNameResult = DescribeSubscribesByCategoryNameResult_1.default;
var DescribeSubscribesByCategoryNameAndUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesByCategoryNameAndUserIdResult"));
exports.DescribeSubscribesByCategoryNameAndUserIdResult = DescribeSubscribesByCategoryNameAndUserIdResult_1.default;
//# sourceMappingURL=index.js.map