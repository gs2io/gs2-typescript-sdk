"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportMasterRequest = exports.DeleteStoreSubscriptionContentModelMasterRequest = exports.UpdateStoreSubscriptionContentModelMasterRequest = exports.GetStoreSubscriptionContentModelMasterRequest = exports.CreateStoreSubscriptionContentModelMasterRequest = exports.DescribeStoreSubscriptionContentModelMastersRequest = exports.GetStoreSubscriptionContentModelRequest = exports.DescribeStoreSubscriptionContentModelsRequest = exports.DeleteStoreContentModelMasterRequest = exports.UpdateStoreContentModelMasterRequest = exports.GetStoreContentModelMasterRequest = exports.CreateStoreContentModelMasterRequest = exports.DescribeStoreContentModelMastersRequest = exports.GetStoreContentModelRequest = exports.DescribeStoreContentModelsRequest = exports.TakeoverSubscriptionStatusByUserIdRequest = exports.TakeoverSubscriptionStatusRequest = exports.AllocateSubscriptionStatusByUserIdRequest = exports.AllocateSubscriptionStatusRequest = exports.GetSubscriptionStatusByUserIdRequest = exports.GetSubscriptionStatusRequest = exports.DescribeSubscriptionStatusesByUserIdRequest = exports.DescribeSubscriptionStatusesRequest = exports.VerifyReceiptByStampTaskRequest = exports.VerifyReceiptByUserIdRequest = exports.VerifyReceiptRequest = exports.GetEventByTransactionIdRequest = exports.DescribeEventsByUserIdRequest = exports.WithdrawByStampTaskRequest = exports.DepositByStampSheetRequest = exports.WithdrawByUserIdRequest = exports.WithdrawRequest = exports.DepositByUserIdRequest = exports.GetWalletByUserIdRequest = exports.GetWalletRequest = exports.DescribeWalletsByUserIdRequest = exports.DescribeWalletsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.GetUnusedBalanceRequest = exports.DescribeUnusedBalancesRequest = exports.GetDailyTransactionHistoryRequest = exports.DescribeDailyTransactionHistoriesRequest = exports.DescribeDailyTransactionHistoriesByCurrencyRequest = exports.UpdateCurrentModelMasterFromGitHubRequest = exports.UpdateCurrentModelMasterRequest = exports.GetCurrentModelMasterRequest = void 0;
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
var DumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdRequest"));
exports.DumpUserDataByUserIdRequest = DumpUserDataByUserIdRequest_1.default;
var CheckDumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdRequest"));
exports.CheckDumpUserDataByUserIdRequest = CheckDumpUserDataByUserIdRequest_1.default;
var CleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdRequest"));
exports.CleanUserDataByUserIdRequest = CleanUserDataByUserIdRequest_1.default;
var CheckCleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdRequest"));
exports.CheckCleanUserDataByUserIdRequest = CheckCleanUserDataByUserIdRequest_1.default;
var PrepareImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdRequest"));
exports.PrepareImportUserDataByUserIdRequest = PrepareImportUserDataByUserIdRequest_1.default;
var ImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdRequest"));
exports.ImportUserDataByUserIdRequest = ImportUserDataByUserIdRequest_1.default;
var CheckImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdRequest"));
exports.CheckImportUserDataByUserIdRequest = CheckImportUserDataByUserIdRequest_1.default;
var DescribeWalletsRequest_1 = tslib_1.__importDefault(require("./DescribeWalletsRequest"));
exports.DescribeWalletsRequest = DescribeWalletsRequest_1.default;
var DescribeWalletsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeWalletsByUserIdRequest"));
exports.DescribeWalletsByUserIdRequest = DescribeWalletsByUserIdRequest_1.default;
var GetWalletRequest_1 = tslib_1.__importDefault(require("./GetWalletRequest"));
exports.GetWalletRequest = GetWalletRequest_1.default;
var GetWalletByUserIdRequest_1 = tslib_1.__importDefault(require("./GetWalletByUserIdRequest"));
exports.GetWalletByUserIdRequest = GetWalletByUserIdRequest_1.default;
var DepositByUserIdRequest_1 = tslib_1.__importDefault(require("./DepositByUserIdRequest"));
exports.DepositByUserIdRequest = DepositByUserIdRequest_1.default;
var WithdrawRequest_1 = tslib_1.__importDefault(require("./WithdrawRequest"));
exports.WithdrawRequest = WithdrawRequest_1.default;
var WithdrawByUserIdRequest_1 = tslib_1.__importDefault(require("./WithdrawByUserIdRequest"));
exports.WithdrawByUserIdRequest = WithdrawByUserIdRequest_1.default;
var DepositByStampSheetRequest_1 = tslib_1.__importDefault(require("./DepositByStampSheetRequest"));
exports.DepositByStampSheetRequest = DepositByStampSheetRequest_1.default;
var WithdrawByStampTaskRequest_1 = tslib_1.__importDefault(require("./WithdrawByStampTaskRequest"));
exports.WithdrawByStampTaskRequest = WithdrawByStampTaskRequest_1.default;
var DescribeEventsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeEventsByUserIdRequest"));
exports.DescribeEventsByUserIdRequest = DescribeEventsByUserIdRequest_1.default;
var GetEventByTransactionIdRequest_1 = tslib_1.__importDefault(require("./GetEventByTransactionIdRequest"));
exports.GetEventByTransactionIdRequest = GetEventByTransactionIdRequest_1.default;
var VerifyReceiptRequest_1 = tslib_1.__importDefault(require("./VerifyReceiptRequest"));
exports.VerifyReceiptRequest = VerifyReceiptRequest_1.default;
var VerifyReceiptByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyReceiptByUserIdRequest"));
exports.VerifyReceiptByUserIdRequest = VerifyReceiptByUserIdRequest_1.default;
var VerifyReceiptByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyReceiptByStampTaskRequest"));
exports.VerifyReceiptByStampTaskRequest = VerifyReceiptByStampTaskRequest_1.default;
var DescribeSubscriptionStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeSubscriptionStatusesRequest"));
exports.DescribeSubscriptionStatusesRequest = DescribeSubscriptionStatusesRequest_1.default;
var DescribeSubscriptionStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeSubscriptionStatusesByUserIdRequest"));
exports.DescribeSubscriptionStatusesByUserIdRequest = DescribeSubscriptionStatusesByUserIdRequest_1.default;
var GetSubscriptionStatusRequest_1 = tslib_1.__importDefault(require("./GetSubscriptionStatusRequest"));
exports.GetSubscriptionStatusRequest = GetSubscriptionStatusRequest_1.default;
var GetSubscriptionStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetSubscriptionStatusByUserIdRequest"));
exports.GetSubscriptionStatusByUserIdRequest = GetSubscriptionStatusByUserIdRequest_1.default;
var AllocateSubscriptionStatusRequest_1 = tslib_1.__importDefault(require("./AllocateSubscriptionStatusRequest"));
exports.AllocateSubscriptionStatusRequest = AllocateSubscriptionStatusRequest_1.default;
var AllocateSubscriptionStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./AllocateSubscriptionStatusByUserIdRequest"));
exports.AllocateSubscriptionStatusByUserIdRequest = AllocateSubscriptionStatusByUserIdRequest_1.default;
var TakeoverSubscriptionStatusRequest_1 = tslib_1.__importDefault(require("./TakeoverSubscriptionStatusRequest"));
exports.TakeoverSubscriptionStatusRequest = TakeoverSubscriptionStatusRequest_1.default;
var TakeoverSubscriptionStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./TakeoverSubscriptionStatusByUserIdRequest"));
exports.TakeoverSubscriptionStatusByUserIdRequest = TakeoverSubscriptionStatusByUserIdRequest_1.default;
var DescribeStoreContentModelsRequest_1 = tslib_1.__importDefault(require("./DescribeStoreContentModelsRequest"));
exports.DescribeStoreContentModelsRequest = DescribeStoreContentModelsRequest_1.default;
var GetStoreContentModelRequest_1 = tslib_1.__importDefault(require("./GetStoreContentModelRequest"));
exports.GetStoreContentModelRequest = GetStoreContentModelRequest_1.default;
var DescribeStoreContentModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeStoreContentModelMastersRequest"));
exports.DescribeStoreContentModelMastersRequest = DescribeStoreContentModelMastersRequest_1.default;
var CreateStoreContentModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateStoreContentModelMasterRequest"));
exports.CreateStoreContentModelMasterRequest = CreateStoreContentModelMasterRequest_1.default;
var GetStoreContentModelMasterRequest_1 = tslib_1.__importDefault(require("./GetStoreContentModelMasterRequest"));
exports.GetStoreContentModelMasterRequest = GetStoreContentModelMasterRequest_1.default;
var UpdateStoreContentModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateStoreContentModelMasterRequest"));
exports.UpdateStoreContentModelMasterRequest = UpdateStoreContentModelMasterRequest_1.default;
var DeleteStoreContentModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteStoreContentModelMasterRequest"));
exports.DeleteStoreContentModelMasterRequest = DeleteStoreContentModelMasterRequest_1.default;
var DescribeStoreSubscriptionContentModelsRequest_1 = tslib_1.__importDefault(require("./DescribeStoreSubscriptionContentModelsRequest"));
exports.DescribeStoreSubscriptionContentModelsRequest = DescribeStoreSubscriptionContentModelsRequest_1.default;
var GetStoreSubscriptionContentModelRequest_1 = tslib_1.__importDefault(require("./GetStoreSubscriptionContentModelRequest"));
exports.GetStoreSubscriptionContentModelRequest = GetStoreSubscriptionContentModelRequest_1.default;
var DescribeStoreSubscriptionContentModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeStoreSubscriptionContentModelMastersRequest"));
exports.DescribeStoreSubscriptionContentModelMastersRequest = DescribeStoreSubscriptionContentModelMastersRequest_1.default;
var CreateStoreSubscriptionContentModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateStoreSubscriptionContentModelMasterRequest"));
exports.CreateStoreSubscriptionContentModelMasterRequest = CreateStoreSubscriptionContentModelMasterRequest_1.default;
var GetStoreSubscriptionContentModelMasterRequest_1 = tslib_1.__importDefault(require("./GetStoreSubscriptionContentModelMasterRequest"));
exports.GetStoreSubscriptionContentModelMasterRequest = GetStoreSubscriptionContentModelMasterRequest_1.default;
var UpdateStoreSubscriptionContentModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateStoreSubscriptionContentModelMasterRequest"));
exports.UpdateStoreSubscriptionContentModelMasterRequest = UpdateStoreSubscriptionContentModelMasterRequest_1.default;
var DeleteStoreSubscriptionContentModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteStoreSubscriptionContentModelMasterRequest"));
exports.DeleteStoreSubscriptionContentModelMasterRequest = DeleteStoreSubscriptionContentModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentModelMasterRequest"));
exports.GetCurrentModelMasterRequest = GetCurrentModelMasterRequest_1.default;
var UpdateCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterRequest"));
exports.UpdateCurrentModelMasterRequest = UpdateCurrentModelMasterRequest_1.default;
var UpdateCurrentModelMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterFromGitHubRequest"));
exports.UpdateCurrentModelMasterFromGitHubRequest = UpdateCurrentModelMasterFromGitHubRequest_1.default;
var DescribeDailyTransactionHistoriesByCurrencyRequest_1 = tslib_1.__importDefault(require("./DescribeDailyTransactionHistoriesByCurrencyRequest"));
exports.DescribeDailyTransactionHistoriesByCurrencyRequest = DescribeDailyTransactionHistoriesByCurrencyRequest_1.default;
var DescribeDailyTransactionHistoriesRequest_1 = tslib_1.__importDefault(require("./DescribeDailyTransactionHistoriesRequest"));
exports.DescribeDailyTransactionHistoriesRequest = DescribeDailyTransactionHistoriesRequest_1.default;
var GetDailyTransactionHistoryRequest_1 = tslib_1.__importDefault(require("./GetDailyTransactionHistoryRequest"));
exports.GetDailyTransactionHistoryRequest = GetDailyTransactionHistoryRequest_1.default;
var DescribeUnusedBalancesRequest_1 = tslib_1.__importDefault(require("./DescribeUnusedBalancesRequest"));
exports.DescribeUnusedBalancesRequest = DescribeUnusedBalancesRequest_1.default;
var GetUnusedBalanceRequest_1 = tslib_1.__importDefault(require("./GetUnusedBalanceRequest"));
exports.GetUnusedBalanceRequest = GetUnusedBalanceRequest_1.default;
//# sourceMappingURL=index.js.map