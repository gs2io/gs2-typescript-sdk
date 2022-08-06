"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPrizeLimitResult = exports.GetPrizeLimitResult = exports.DescribePrizeLimitsResult = exports.UpdateCurrentLotteryMasterFromGitHubResult = exports.UpdateCurrentLotteryMasterResult = exports.GetCurrentLotteryMasterResult = exports.ExportMasterResult = exports.DescribeProbabilitiesByUserIdResult = exports.DescribeProbabilitiesResult = exports.DrawByStampSheetResult = exports.DrawByUserIdResult = exports.GetPrizeTableResult = exports.DescribePrizeTablesResult = exports.GetLotteryModelResult = exports.DescribeLotteryModelsResult = exports.ResetBoxByUserIdResult = exports.ResetBoxResult = exports.GetBoxByUserIdResult = exports.GetBoxResult = exports.DescribeBoxesByUserIdResult = exports.DescribeBoxesResult = exports.DeletePrizeTableMasterResult = exports.UpdatePrizeTableMasterResult = exports.GetPrizeTableMasterResult = exports.CreatePrizeTableMasterResult = exports.DescribePrizeTableMastersResult = exports.DeleteLotteryModelMasterResult = exports.UpdateLotteryModelMasterResult = exports.GetLotteryModelMasterResult = exports.CreateLotteryModelMasterResult = exports.DescribeLotteryModelMastersResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeLotteryModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeLotteryModelMastersResult"));
exports.DescribeLotteryModelMastersResult = DescribeLotteryModelMastersResult_1.default;
var CreateLotteryModelMasterResult_1 = tslib_1.__importDefault(require("./CreateLotteryModelMasterResult"));
exports.CreateLotteryModelMasterResult = CreateLotteryModelMasterResult_1.default;
var GetLotteryModelMasterResult_1 = tslib_1.__importDefault(require("./GetLotteryModelMasterResult"));
exports.GetLotteryModelMasterResult = GetLotteryModelMasterResult_1.default;
var UpdateLotteryModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateLotteryModelMasterResult"));
exports.UpdateLotteryModelMasterResult = UpdateLotteryModelMasterResult_1.default;
var DeleteLotteryModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteLotteryModelMasterResult"));
exports.DeleteLotteryModelMasterResult = DeleteLotteryModelMasterResult_1.default;
var DescribePrizeTableMastersResult_1 = tslib_1.__importDefault(require("./DescribePrizeTableMastersResult"));
exports.DescribePrizeTableMastersResult = DescribePrizeTableMastersResult_1.default;
var CreatePrizeTableMasterResult_1 = tslib_1.__importDefault(require("./CreatePrizeTableMasterResult"));
exports.CreatePrizeTableMasterResult = CreatePrizeTableMasterResult_1.default;
var GetPrizeTableMasterResult_1 = tslib_1.__importDefault(require("./GetPrizeTableMasterResult"));
exports.GetPrizeTableMasterResult = GetPrizeTableMasterResult_1.default;
var UpdatePrizeTableMasterResult_1 = tslib_1.__importDefault(require("./UpdatePrizeTableMasterResult"));
exports.UpdatePrizeTableMasterResult = UpdatePrizeTableMasterResult_1.default;
var DeletePrizeTableMasterResult_1 = tslib_1.__importDefault(require("./DeletePrizeTableMasterResult"));
exports.DeletePrizeTableMasterResult = DeletePrizeTableMasterResult_1.default;
var DescribeBoxesResult_1 = tslib_1.__importDefault(require("./DescribeBoxesResult"));
exports.DescribeBoxesResult = DescribeBoxesResult_1.default;
var DescribeBoxesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeBoxesByUserIdResult"));
exports.DescribeBoxesByUserIdResult = DescribeBoxesByUserIdResult_1.default;
var GetBoxResult_1 = tslib_1.__importDefault(require("./GetBoxResult"));
exports.GetBoxResult = GetBoxResult_1.default;
var GetBoxByUserIdResult_1 = tslib_1.__importDefault(require("./GetBoxByUserIdResult"));
exports.GetBoxByUserIdResult = GetBoxByUserIdResult_1.default;
var ResetBoxResult_1 = tslib_1.__importDefault(require("./ResetBoxResult"));
exports.ResetBoxResult = ResetBoxResult_1.default;
var ResetBoxByUserIdResult_1 = tslib_1.__importDefault(require("./ResetBoxByUserIdResult"));
exports.ResetBoxByUserIdResult = ResetBoxByUserIdResult_1.default;
var DescribeLotteryModelsResult_1 = tslib_1.__importDefault(require("./DescribeLotteryModelsResult"));
exports.DescribeLotteryModelsResult = DescribeLotteryModelsResult_1.default;
var GetLotteryModelResult_1 = tslib_1.__importDefault(require("./GetLotteryModelResult"));
exports.GetLotteryModelResult = GetLotteryModelResult_1.default;
var DescribePrizeTablesResult_1 = tslib_1.__importDefault(require("./DescribePrizeTablesResult"));
exports.DescribePrizeTablesResult = DescribePrizeTablesResult_1.default;
var GetPrizeTableResult_1 = tslib_1.__importDefault(require("./GetPrizeTableResult"));
exports.GetPrizeTableResult = GetPrizeTableResult_1.default;
var DrawByUserIdResult_1 = tslib_1.__importDefault(require("./DrawByUserIdResult"));
exports.DrawByUserIdResult = DrawByUserIdResult_1.default;
var DrawByStampSheetResult_1 = tslib_1.__importDefault(require("./DrawByStampSheetResult"));
exports.DrawByStampSheetResult = DrawByStampSheetResult_1.default;
var DescribeProbabilitiesResult_1 = tslib_1.__importDefault(require("./DescribeProbabilitiesResult"));
exports.DescribeProbabilitiesResult = DescribeProbabilitiesResult_1.default;
var DescribeProbabilitiesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeProbabilitiesByUserIdResult"));
exports.DescribeProbabilitiesByUserIdResult = DescribeProbabilitiesByUserIdResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentLotteryMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentLotteryMasterResult"));
exports.GetCurrentLotteryMasterResult = GetCurrentLotteryMasterResult_1.default;
var UpdateCurrentLotteryMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentLotteryMasterResult"));
exports.UpdateCurrentLotteryMasterResult = UpdateCurrentLotteryMasterResult_1.default;
var UpdateCurrentLotteryMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentLotteryMasterFromGitHubResult"));
exports.UpdateCurrentLotteryMasterFromGitHubResult = UpdateCurrentLotteryMasterFromGitHubResult_1.default;
var DescribePrizeLimitsResult_1 = tslib_1.__importDefault(require("./DescribePrizeLimitsResult"));
exports.DescribePrizeLimitsResult = DescribePrizeLimitsResult_1.default;
var GetPrizeLimitResult_1 = tslib_1.__importDefault(require("./GetPrizeLimitResult"));
exports.GetPrizeLimitResult = GetPrizeLimitResult_1.default;
var ResetPrizeLimitResult_1 = tslib_1.__importDefault(require("./ResetPrizeLimitResult"));
exports.ResetPrizeLimitResult = ResetPrizeLimitResult_1.default;
//# sourceMappingURL=index.js.map