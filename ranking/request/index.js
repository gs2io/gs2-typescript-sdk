"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeSubscribesByCategoryNameAndUserIdRequest = exports.DescribeSubscribesByCategoryNameRequest = exports.UnsubscribeByUserIdRequest = exports.UnsubscribeRequest = exports.GetSubscribeByUserIdRequest = exports.GetSubscribeRequest = exports.UpdateCurrentRankingMasterFromGitHubRequest = exports.UpdateCurrentRankingMasterRequest = exports.GetCurrentRankingMasterRequest = exports.ExportMasterRequest = exports.CalcRankingRequest = exports.PutScoreByUserIdRequest = exports.PutScoreRequest = exports.GetRankingByUserIdRequest = exports.GetRankingRequest = exports.DescribeNearRankingsRequest = exports.DescribeRankingssByUserIdRequest = exports.DescribeRankingsRequest = exports.GetScoreByUserIdRequest = exports.GetScoreRequest = exports.DescribeScoresByUserIdRequest = exports.DescribeScoresRequest = exports.SubscribeByUserIdRequest = exports.SubscribeRequest = exports.DeleteCategoryModelMasterRequest = exports.UpdateCategoryModelMasterRequest = exports.GetCategoryModelMasterRequest = exports.CreateCategoryModelMasterRequest = exports.DescribeCategoryModelMastersRequest = exports.GetCategoryModelRequest = exports.DescribeCategoryModelsRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeNamespacesRequest_1 = tslib_1.__importDefault(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = tslib_1.__importDefault(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = tslib_1.__importDefault(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = tslib_1.__importDefault(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = tslib_1.__importDefault(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = tslib_1.__importDefault(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DescribeCategoryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeCategoryModelsRequest"));
exports.DescribeCategoryModelsRequest = DescribeCategoryModelsRequest_1.default;
var GetCategoryModelRequest_1 = tslib_1.__importDefault(require("./GetCategoryModelRequest"));
exports.GetCategoryModelRequest = GetCategoryModelRequest_1.default;
var DescribeCategoryModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeCategoryModelMastersRequest"));
exports.DescribeCategoryModelMastersRequest = DescribeCategoryModelMastersRequest_1.default;
var CreateCategoryModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateCategoryModelMasterRequest"));
exports.CreateCategoryModelMasterRequest = CreateCategoryModelMasterRequest_1.default;
var GetCategoryModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCategoryModelMasterRequest"));
exports.GetCategoryModelMasterRequest = GetCategoryModelMasterRequest_1.default;
var UpdateCategoryModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCategoryModelMasterRequest"));
exports.UpdateCategoryModelMasterRequest = UpdateCategoryModelMasterRequest_1.default;
var DeleteCategoryModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteCategoryModelMasterRequest"));
exports.DeleteCategoryModelMasterRequest = DeleteCategoryModelMasterRequest_1.default;
var SubscribeRequest_1 = tslib_1.__importDefault(require("./SubscribeRequest"));
exports.SubscribeRequest = SubscribeRequest_1.default;
var SubscribeByUserIdRequest_1 = tslib_1.__importDefault(require("./SubscribeByUserIdRequest"));
exports.SubscribeByUserIdRequest = SubscribeByUserIdRequest_1.default;
var DescribeScoresRequest_1 = tslib_1.__importDefault(require("./DescribeScoresRequest"));
exports.DescribeScoresRequest = DescribeScoresRequest_1.default;
var DescribeScoresByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeScoresByUserIdRequest"));
exports.DescribeScoresByUserIdRequest = DescribeScoresByUserIdRequest_1.default;
var GetScoreRequest_1 = tslib_1.__importDefault(require("./GetScoreRequest"));
exports.GetScoreRequest = GetScoreRequest_1.default;
var GetScoreByUserIdRequest_1 = tslib_1.__importDefault(require("./GetScoreByUserIdRequest"));
exports.GetScoreByUserIdRequest = GetScoreByUserIdRequest_1.default;
var DescribeRankingsRequest_1 = tslib_1.__importDefault(require("./DescribeRankingsRequest"));
exports.DescribeRankingsRequest = DescribeRankingsRequest_1.default;
var DescribeRankingssByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeRankingssByUserIdRequest"));
exports.DescribeRankingssByUserIdRequest = DescribeRankingssByUserIdRequest_1.default;
var DescribeNearRankingsRequest_1 = tslib_1.__importDefault(require("./DescribeNearRankingsRequest"));
exports.DescribeNearRankingsRequest = DescribeNearRankingsRequest_1.default;
var GetRankingRequest_1 = tslib_1.__importDefault(require("./GetRankingRequest"));
exports.GetRankingRequest = GetRankingRequest_1.default;
var GetRankingByUserIdRequest_1 = tslib_1.__importDefault(require("./GetRankingByUserIdRequest"));
exports.GetRankingByUserIdRequest = GetRankingByUserIdRequest_1.default;
var PutScoreRequest_1 = tslib_1.__importDefault(require("./PutScoreRequest"));
exports.PutScoreRequest = PutScoreRequest_1.default;
var PutScoreByUserIdRequest_1 = tslib_1.__importDefault(require("./PutScoreByUserIdRequest"));
exports.PutScoreByUserIdRequest = PutScoreByUserIdRequest_1.default;
var CalcRankingRequest_1 = tslib_1.__importDefault(require("./CalcRankingRequest"));
exports.CalcRankingRequest = CalcRankingRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentRankingMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentRankingMasterRequest"));
exports.GetCurrentRankingMasterRequest = GetCurrentRankingMasterRequest_1.default;
var UpdateCurrentRankingMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRankingMasterRequest"));
exports.UpdateCurrentRankingMasterRequest = UpdateCurrentRankingMasterRequest_1.default;
var UpdateCurrentRankingMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRankingMasterFromGitHubRequest"));
exports.UpdateCurrentRankingMasterFromGitHubRequest = UpdateCurrentRankingMasterFromGitHubRequest_1.default;
var GetSubscribeRequest_1 = tslib_1.__importDefault(require("./GetSubscribeRequest"));
exports.GetSubscribeRequest = GetSubscribeRequest_1.default;
var GetSubscribeByUserIdRequest_1 = tslib_1.__importDefault(require("./GetSubscribeByUserIdRequest"));
exports.GetSubscribeByUserIdRequest = GetSubscribeByUserIdRequest_1.default;
var UnsubscribeRequest_1 = tslib_1.__importDefault(require("./UnsubscribeRequest"));
exports.UnsubscribeRequest = UnsubscribeRequest_1.default;
var UnsubscribeByUserIdRequest_1 = tslib_1.__importDefault(require("./UnsubscribeByUserIdRequest"));
exports.UnsubscribeByUserIdRequest = UnsubscribeByUserIdRequest_1.default;
var DescribeSubscribesByCategoryNameRequest_1 = tslib_1.__importDefault(require("./DescribeSubscribesByCategoryNameRequest"));
exports.DescribeSubscribesByCategoryNameRequest = DescribeSubscribesByCategoryNameRequest_1.default;
var DescribeSubscribesByCategoryNameAndUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeSubscribesByCategoryNameAndUserIdRequest"));
exports.DescribeSubscribesByCategoryNameAndUserIdRequest = DescribeSubscribesByCategoryNameAndUserIdRequest_1.default;
//# sourceMappingURL=index.js.map