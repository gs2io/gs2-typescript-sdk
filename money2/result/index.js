"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentModelMasterFromGitHubResult = exports.UpdateCurrentModelMasterResult = exports.GetCurrentModelMasterResult = exports.ExportMasterResult = exports.DeleteStoreContentModelMasterResult = exports.UpdateStoreContentModelMasterResult = exports.GetStoreContentModelMasterResult = exports.CreateStoreContentModelMasterResult = exports.DescribeStoreContentModelMastersResult = exports.GetStoreContentModelResult = exports.DescribeStoreContentModelsResult = exports.VerifyReceiptByStampTaskResult = exports.VerifyReceiptByUserIdResult = exports.VerifyReceiptResult = exports.GetEventByTransactionIdResult = exports.DescribeEventsByUserIdResult = exports.WithdrawByStampTaskResult = exports.DepositByStampSheetResult = exports.WithdrawByUserIdResult = exports.WithdrawResult = exports.DepositByUserIdResult = exports.GetWalletByUserIdResult = exports.GetWalletResult = exports.DescribeWalletsByUserIdResult = exports.DescribeWalletsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var PrepareImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdResult"));
exports.PrepareImportUserDataByUserIdResult = PrepareImportUserDataByUserIdResult_1.default;
var ImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdResult"));
exports.ImportUserDataByUserIdResult = ImportUserDataByUserIdResult_1.default;
var CheckImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdResult"));
exports.CheckImportUserDataByUserIdResult = CheckImportUserDataByUserIdResult_1.default;
var DescribeWalletsResult_1 = tslib_1.__importDefault(require("./DescribeWalletsResult"));
exports.DescribeWalletsResult = DescribeWalletsResult_1.default;
var DescribeWalletsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeWalletsByUserIdResult"));
exports.DescribeWalletsByUserIdResult = DescribeWalletsByUserIdResult_1.default;
var GetWalletResult_1 = tslib_1.__importDefault(require("./GetWalletResult"));
exports.GetWalletResult = GetWalletResult_1.default;
var GetWalletByUserIdResult_1 = tslib_1.__importDefault(require("./GetWalletByUserIdResult"));
exports.GetWalletByUserIdResult = GetWalletByUserIdResult_1.default;
var DepositByUserIdResult_1 = tslib_1.__importDefault(require("./DepositByUserIdResult"));
exports.DepositByUserIdResult = DepositByUserIdResult_1.default;
var WithdrawResult_1 = tslib_1.__importDefault(require("./WithdrawResult"));
exports.WithdrawResult = WithdrawResult_1.default;
var WithdrawByUserIdResult_1 = tslib_1.__importDefault(require("./WithdrawByUserIdResult"));
exports.WithdrawByUserIdResult = WithdrawByUserIdResult_1.default;
var DepositByStampSheetResult_1 = tslib_1.__importDefault(require("./DepositByStampSheetResult"));
exports.DepositByStampSheetResult = DepositByStampSheetResult_1.default;
var WithdrawByStampTaskResult_1 = tslib_1.__importDefault(require("./WithdrawByStampTaskResult"));
exports.WithdrawByStampTaskResult = WithdrawByStampTaskResult_1.default;
var DescribeEventsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeEventsByUserIdResult"));
exports.DescribeEventsByUserIdResult = DescribeEventsByUserIdResult_1.default;
var GetEventByTransactionIdResult_1 = tslib_1.__importDefault(require("./GetEventByTransactionIdResult"));
exports.GetEventByTransactionIdResult = GetEventByTransactionIdResult_1.default;
var VerifyReceiptResult_1 = tslib_1.__importDefault(require("./VerifyReceiptResult"));
exports.VerifyReceiptResult = VerifyReceiptResult_1.default;
var VerifyReceiptByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyReceiptByUserIdResult"));
exports.VerifyReceiptByUserIdResult = VerifyReceiptByUserIdResult_1.default;
var VerifyReceiptByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyReceiptByStampTaskResult"));
exports.VerifyReceiptByStampTaskResult = VerifyReceiptByStampTaskResult_1.default;
var DescribeStoreContentModelsResult_1 = tslib_1.__importDefault(require("./DescribeStoreContentModelsResult"));
exports.DescribeStoreContentModelsResult = DescribeStoreContentModelsResult_1.default;
var GetStoreContentModelResult_1 = tslib_1.__importDefault(require("./GetStoreContentModelResult"));
exports.GetStoreContentModelResult = GetStoreContentModelResult_1.default;
var DescribeStoreContentModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeStoreContentModelMastersResult"));
exports.DescribeStoreContentModelMastersResult = DescribeStoreContentModelMastersResult_1.default;
var CreateStoreContentModelMasterResult_1 = tslib_1.__importDefault(require("./CreateStoreContentModelMasterResult"));
exports.CreateStoreContentModelMasterResult = CreateStoreContentModelMasterResult_1.default;
var GetStoreContentModelMasterResult_1 = tslib_1.__importDefault(require("./GetStoreContentModelMasterResult"));
exports.GetStoreContentModelMasterResult = GetStoreContentModelMasterResult_1.default;
var UpdateStoreContentModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateStoreContentModelMasterResult"));
exports.UpdateStoreContentModelMasterResult = UpdateStoreContentModelMasterResult_1.default;
var DeleteStoreContentModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteStoreContentModelMasterResult"));
exports.DeleteStoreContentModelMasterResult = DeleteStoreContentModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentModelMasterResult"));
exports.GetCurrentModelMasterResult = GetCurrentModelMasterResult_1.default;
var UpdateCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterResult"));
exports.UpdateCurrentModelMasterResult = UpdateCurrentModelMasterResult_1.default;
var UpdateCurrentModelMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterFromGitHubResult"));
exports.UpdateCurrentModelMasterFromGitHubResult = UpdateCurrentModelMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map