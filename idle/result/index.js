"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentCategoryMasterFromGitHubResult = exports.UpdateCurrentCategoryMasterResult = exports.GetCurrentCategoryMasterResult = exports.ExportMasterResult = exports.DecreaseMaximumIdleMinutesByStampTaskResult = exports.IncreaseMaximumIdleMinutesByStampSheetResult = exports.DecreaseMaximumIdleMinutesByUserIdResult = exports.IncreaseMaximumIdleMinutesByUserIdResult = exports.ReceiveByUserIdResult = exports.ReceiveResult = exports.PredictionByUserIdResult = exports.PredictionResult = exports.GetStatusByUserIdResult = exports.GetStatusResult = exports.DescribeStatusesByUserIdResult = exports.DescribeStatusesResult = exports.GetCategoryModelResult = exports.DescribeCategoryModelsResult = exports.DeleteCategoryModelMasterResult = exports.UpdateCategoryModelMasterResult = exports.GetCategoryModelMasterResult = exports.CreateCategoryModelMasterResult = exports.DescribeCategoryModelMastersResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdResult"));
exports.DumpUserDataByUserIdResult = DumpUserDataByUserIdResult_1.default;
var CheckDumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdResult"));
exports.CheckDumpUserDataByUserIdResult = CheckDumpUserDataByUserIdResult_1.default;
var CleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdResult"));
exports.CleanUserDataByUserIdResult = CleanUserDataByUserIdResult_1.default;
var CheckCleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdResult"));
exports.CheckCleanUserDataByUserIdResult = CheckCleanUserDataByUserIdResult_1.default;
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
var DescribeCategoryModelsResult_1 = tslib_1.__importDefault(require("./DescribeCategoryModelsResult"));
exports.DescribeCategoryModelsResult = DescribeCategoryModelsResult_1.default;
var GetCategoryModelResult_1 = tslib_1.__importDefault(require("./GetCategoryModelResult"));
exports.GetCategoryModelResult = GetCategoryModelResult_1.default;
var DescribeStatusesResult_1 = tslib_1.__importDefault(require("./DescribeStatusesResult"));
exports.DescribeStatusesResult = DescribeStatusesResult_1.default;
var DescribeStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdResult"));
exports.DescribeStatusesByUserIdResult = DescribeStatusesByUserIdResult_1.default;
var GetStatusResult_1 = tslib_1.__importDefault(require("./GetStatusResult"));
exports.GetStatusResult = GetStatusResult_1.default;
var GetStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetStatusByUserIdResult"));
exports.GetStatusByUserIdResult = GetStatusByUserIdResult_1.default;
var PredictionResult_1 = tslib_1.__importDefault(require("./PredictionResult"));
exports.PredictionResult = PredictionResult_1.default;
var PredictionByUserIdResult_1 = tslib_1.__importDefault(require("./PredictionByUserIdResult"));
exports.PredictionByUserIdResult = PredictionByUserIdResult_1.default;
var ReceiveResult_1 = tslib_1.__importDefault(require("./ReceiveResult"));
exports.ReceiveResult = ReceiveResult_1.default;
var ReceiveByUserIdResult_1 = tslib_1.__importDefault(require("./ReceiveByUserIdResult"));
exports.ReceiveByUserIdResult = ReceiveByUserIdResult_1.default;
var IncreaseMaximumIdleMinutesByUserIdResult_1 = tslib_1.__importDefault(require("./IncreaseMaximumIdleMinutesByUserIdResult"));
exports.IncreaseMaximumIdleMinutesByUserIdResult = IncreaseMaximumIdleMinutesByUserIdResult_1.default;
var DecreaseMaximumIdleMinutesByUserIdResult_1 = tslib_1.__importDefault(require("./DecreaseMaximumIdleMinutesByUserIdResult"));
exports.DecreaseMaximumIdleMinutesByUserIdResult = DecreaseMaximumIdleMinutesByUserIdResult_1.default;
var IncreaseMaximumIdleMinutesByStampSheetResult_1 = tslib_1.__importDefault(require("./IncreaseMaximumIdleMinutesByStampSheetResult"));
exports.IncreaseMaximumIdleMinutesByStampSheetResult = IncreaseMaximumIdleMinutesByStampSheetResult_1.default;
var DecreaseMaximumIdleMinutesByStampTaskResult_1 = tslib_1.__importDefault(require("./DecreaseMaximumIdleMinutesByStampTaskResult"));
exports.DecreaseMaximumIdleMinutesByStampTaskResult = DecreaseMaximumIdleMinutesByStampTaskResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentCategoryMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentCategoryMasterResult"));
exports.GetCurrentCategoryMasterResult = GetCurrentCategoryMasterResult_1.default;
var UpdateCurrentCategoryMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentCategoryMasterResult"));
exports.UpdateCurrentCategoryMasterResult = UpdateCurrentCategoryMasterResult_1.default;
var UpdateCurrentCategoryMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentCategoryMasterFromGitHubResult"));
exports.UpdateCurrentCategoryMasterFromGitHubResult = UpdateCurrentCategoryMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map