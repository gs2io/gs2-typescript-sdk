"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPrizeLimitRequest = exports.GetPrizeLimitRequest = exports.DescribePrizeLimitsRequest = exports.UpdateCurrentLotteryMasterFromGitHubRequest = exports.UpdateCurrentLotteryMasterRequest = exports.GetCurrentLotteryMasterRequest = exports.ExportMasterRequest = exports.DescribeProbabilitiesByUserIdRequest = exports.DescribeProbabilitiesRequest = exports.DrawByStampSheetRequest = exports.DrawByUserIdRequest = exports.GetPrizeTableRequest = exports.DescribePrizeTablesRequest = exports.GetLotteryModelRequest = exports.DescribeLotteryModelsRequest = exports.ResetBoxByUserIdRequest = exports.ResetBoxRequest = exports.GetBoxByUserIdRequest = exports.GetBoxRequest = exports.DescribeBoxesByUserIdRequest = exports.DescribeBoxesRequest = exports.DeletePrizeTableMasterRequest = exports.UpdatePrizeTableMasterRequest = exports.GetPrizeTableMasterRequest = exports.CreatePrizeTableMasterRequest = exports.DescribePrizeTableMastersRequest = exports.DeleteLotteryModelMasterRequest = exports.UpdateLotteryModelMasterRequest = exports.GetLotteryModelMasterRequest = exports.CreateLotteryModelMasterRequest = exports.DescribeLotteryModelMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeLotteryModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeLotteryModelMastersRequest"));
exports.DescribeLotteryModelMastersRequest = DescribeLotteryModelMastersRequest_1.default;
var CreateLotteryModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateLotteryModelMasterRequest"));
exports.CreateLotteryModelMasterRequest = CreateLotteryModelMasterRequest_1.default;
var GetLotteryModelMasterRequest_1 = tslib_1.__importDefault(require("./GetLotteryModelMasterRequest"));
exports.GetLotteryModelMasterRequest = GetLotteryModelMasterRequest_1.default;
var UpdateLotteryModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateLotteryModelMasterRequest"));
exports.UpdateLotteryModelMasterRequest = UpdateLotteryModelMasterRequest_1.default;
var DeleteLotteryModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteLotteryModelMasterRequest"));
exports.DeleteLotteryModelMasterRequest = DeleteLotteryModelMasterRequest_1.default;
var DescribePrizeTableMastersRequest_1 = tslib_1.__importDefault(require("./DescribePrizeTableMastersRequest"));
exports.DescribePrizeTableMastersRequest = DescribePrizeTableMastersRequest_1.default;
var CreatePrizeTableMasterRequest_1 = tslib_1.__importDefault(require("./CreatePrizeTableMasterRequest"));
exports.CreatePrizeTableMasterRequest = CreatePrizeTableMasterRequest_1.default;
var GetPrizeTableMasterRequest_1 = tslib_1.__importDefault(require("./GetPrizeTableMasterRequest"));
exports.GetPrizeTableMasterRequest = GetPrizeTableMasterRequest_1.default;
var UpdatePrizeTableMasterRequest_1 = tslib_1.__importDefault(require("./UpdatePrizeTableMasterRequest"));
exports.UpdatePrizeTableMasterRequest = UpdatePrizeTableMasterRequest_1.default;
var DeletePrizeTableMasterRequest_1 = tslib_1.__importDefault(require("./DeletePrizeTableMasterRequest"));
exports.DeletePrizeTableMasterRequest = DeletePrizeTableMasterRequest_1.default;
var DescribeBoxesRequest_1 = tslib_1.__importDefault(require("./DescribeBoxesRequest"));
exports.DescribeBoxesRequest = DescribeBoxesRequest_1.default;
var DescribeBoxesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeBoxesByUserIdRequest"));
exports.DescribeBoxesByUserIdRequest = DescribeBoxesByUserIdRequest_1.default;
var GetBoxRequest_1 = tslib_1.__importDefault(require("./GetBoxRequest"));
exports.GetBoxRequest = GetBoxRequest_1.default;
var GetBoxByUserIdRequest_1 = tslib_1.__importDefault(require("./GetBoxByUserIdRequest"));
exports.GetBoxByUserIdRequest = GetBoxByUserIdRequest_1.default;
var ResetBoxRequest_1 = tslib_1.__importDefault(require("./ResetBoxRequest"));
exports.ResetBoxRequest = ResetBoxRequest_1.default;
var ResetBoxByUserIdRequest_1 = tslib_1.__importDefault(require("./ResetBoxByUserIdRequest"));
exports.ResetBoxByUserIdRequest = ResetBoxByUserIdRequest_1.default;
var DescribeLotteryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeLotteryModelsRequest"));
exports.DescribeLotteryModelsRequest = DescribeLotteryModelsRequest_1.default;
var GetLotteryModelRequest_1 = tslib_1.__importDefault(require("./GetLotteryModelRequest"));
exports.GetLotteryModelRequest = GetLotteryModelRequest_1.default;
var DescribePrizeTablesRequest_1 = tslib_1.__importDefault(require("./DescribePrizeTablesRequest"));
exports.DescribePrizeTablesRequest = DescribePrizeTablesRequest_1.default;
var GetPrizeTableRequest_1 = tslib_1.__importDefault(require("./GetPrizeTableRequest"));
exports.GetPrizeTableRequest = GetPrizeTableRequest_1.default;
var DrawByUserIdRequest_1 = tslib_1.__importDefault(require("./DrawByUserIdRequest"));
exports.DrawByUserIdRequest = DrawByUserIdRequest_1.default;
var DrawByStampSheetRequest_1 = tslib_1.__importDefault(require("./DrawByStampSheetRequest"));
exports.DrawByStampSheetRequest = DrawByStampSheetRequest_1.default;
var DescribeProbabilitiesRequest_1 = tslib_1.__importDefault(require("./DescribeProbabilitiesRequest"));
exports.DescribeProbabilitiesRequest = DescribeProbabilitiesRequest_1.default;
var DescribeProbabilitiesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeProbabilitiesByUserIdRequest"));
exports.DescribeProbabilitiesByUserIdRequest = DescribeProbabilitiesByUserIdRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentLotteryMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentLotteryMasterRequest"));
exports.GetCurrentLotteryMasterRequest = GetCurrentLotteryMasterRequest_1.default;
var UpdateCurrentLotteryMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentLotteryMasterRequest"));
exports.UpdateCurrentLotteryMasterRequest = UpdateCurrentLotteryMasterRequest_1.default;
var UpdateCurrentLotteryMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentLotteryMasterFromGitHubRequest"));
exports.UpdateCurrentLotteryMasterFromGitHubRequest = UpdateCurrentLotteryMasterFromGitHubRequest_1.default;
var DescribePrizeLimitsRequest_1 = tslib_1.__importDefault(require("./DescribePrizeLimitsRequest"));
exports.DescribePrizeLimitsRequest = DescribePrizeLimitsRequest_1.default;
var GetPrizeLimitRequest_1 = tslib_1.__importDefault(require("./GetPrizeLimitRequest"));
exports.GetPrizeLimitRequest = GetPrizeLimitRequest_1.default;
var ResetPrizeLimitRequest_1 = tslib_1.__importDefault(require("./ResetPrizeLimitRequest"));
exports.ResetPrizeLimitRequest = ResetPrizeLimitRequest_1.default;
//# sourceMappingURL=index.js.map