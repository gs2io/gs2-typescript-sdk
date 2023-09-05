"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentCategoryMasterFromGitHubRequest = exports.UpdateCurrentCategoryMasterRequest = exports.GetCurrentCategoryMasterRequest = exports.ExportMasterRequest = exports.DecreaseMaximumIdleMinutesByStampTaskRequest = exports.IncreaseMaximumIdleMinutesByStampSheetRequest = exports.DecreaseMaximumIdleMinutesByUserIdRequest = exports.IncreaseMaximumIdleMinutesByUserIdRequest = exports.ReceiveByUserIdRequest = exports.ReceiveRequest = exports.PredictionByUserIdRequest = exports.PredictionRequest = exports.GetStatusByUserIdRequest = exports.GetStatusRequest = exports.DescribeStatusesByUserIdRequest = exports.DescribeStatusesRequest = exports.GetCategoryModelRequest = exports.DescribeCategoryModelsRequest = exports.DeleteCategoryModelMasterRequest = exports.UpdateCategoryModelMasterRequest = exports.GetCategoryModelMasterRequest = exports.CreateCategoryModelMasterRequest = exports.DescribeCategoryModelMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeCategoryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeCategoryModelsRequest"));
exports.DescribeCategoryModelsRequest = DescribeCategoryModelsRequest_1.default;
var GetCategoryModelRequest_1 = tslib_1.__importDefault(require("./GetCategoryModelRequest"));
exports.GetCategoryModelRequest = GetCategoryModelRequest_1.default;
var DescribeStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesRequest"));
exports.DescribeStatusesRequest = DescribeStatusesRequest_1.default;
var DescribeStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdRequest"));
exports.DescribeStatusesByUserIdRequest = DescribeStatusesByUserIdRequest_1.default;
var GetStatusRequest_1 = tslib_1.__importDefault(require("./GetStatusRequest"));
exports.GetStatusRequest = GetStatusRequest_1.default;
var GetStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStatusByUserIdRequest"));
exports.GetStatusByUserIdRequest = GetStatusByUserIdRequest_1.default;
var PredictionRequest_1 = tslib_1.__importDefault(require("./PredictionRequest"));
exports.PredictionRequest = PredictionRequest_1.default;
var PredictionByUserIdRequest_1 = tslib_1.__importDefault(require("./PredictionByUserIdRequest"));
exports.PredictionByUserIdRequest = PredictionByUserIdRequest_1.default;
var ReceiveRequest_1 = tslib_1.__importDefault(require("./ReceiveRequest"));
exports.ReceiveRequest = ReceiveRequest_1.default;
var ReceiveByUserIdRequest_1 = tslib_1.__importDefault(require("./ReceiveByUserIdRequest"));
exports.ReceiveByUserIdRequest = ReceiveByUserIdRequest_1.default;
var IncreaseMaximumIdleMinutesByUserIdRequest_1 = tslib_1.__importDefault(require("./IncreaseMaximumIdleMinutesByUserIdRequest"));
exports.IncreaseMaximumIdleMinutesByUserIdRequest = IncreaseMaximumIdleMinutesByUserIdRequest_1.default;
var DecreaseMaximumIdleMinutesByUserIdRequest_1 = tslib_1.__importDefault(require("./DecreaseMaximumIdleMinutesByUserIdRequest"));
exports.DecreaseMaximumIdleMinutesByUserIdRequest = DecreaseMaximumIdleMinutesByUserIdRequest_1.default;
var IncreaseMaximumIdleMinutesByStampSheetRequest_1 = tslib_1.__importDefault(require("./IncreaseMaximumIdleMinutesByStampSheetRequest"));
exports.IncreaseMaximumIdleMinutesByStampSheetRequest = IncreaseMaximumIdleMinutesByStampSheetRequest_1.default;
var DecreaseMaximumIdleMinutesByStampTaskRequest_1 = tslib_1.__importDefault(require("./DecreaseMaximumIdleMinutesByStampTaskRequest"));
exports.DecreaseMaximumIdleMinutesByStampTaskRequest = DecreaseMaximumIdleMinutesByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentCategoryMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentCategoryMasterRequest"));
exports.GetCurrentCategoryMasterRequest = GetCurrentCategoryMasterRequest_1.default;
var UpdateCurrentCategoryMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentCategoryMasterRequest"));
exports.UpdateCurrentCategoryMasterRequest = UpdateCurrentCategoryMasterRequest_1.default;
var UpdateCurrentCategoryMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentCategoryMasterFromGitHubRequest"));
exports.UpdateCurrentCategoryMasterFromGitHubRequest = UpdateCurrentCategoryMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map