"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevertRecordReceiptByStampSheetRequest = exports.RecordReceiptByStampTaskRequest = exports.RevertRecordReceiptRequest = exports.RecordReceiptRequest = exports.GetByUserIdAndTransactionIdRequest = exports.DescribeReceiptsRequest = exports.WithdrawByStampTaskRequest = exports.DepositByStampSheetRequest = exports.WithdrawByUserIdRequest = exports.WithdrawRequest = exports.DepositByUserIdRequest = exports.GetWalletByUserIdRequest = exports.GetWalletRequest = exports.DescribeWalletsByUserIdRequest = exports.DescribeWalletsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeReceiptsRequest_1 = tslib_1.__importDefault(require("./DescribeReceiptsRequest"));
exports.DescribeReceiptsRequest = DescribeReceiptsRequest_1.default;
var GetByUserIdAndTransactionIdRequest_1 = tslib_1.__importDefault(require("./GetByUserIdAndTransactionIdRequest"));
exports.GetByUserIdAndTransactionIdRequest = GetByUserIdAndTransactionIdRequest_1.default;
var RecordReceiptRequest_1 = tslib_1.__importDefault(require("./RecordReceiptRequest"));
exports.RecordReceiptRequest = RecordReceiptRequest_1.default;
var RevertRecordReceiptRequest_1 = tslib_1.__importDefault(require("./RevertRecordReceiptRequest"));
exports.RevertRecordReceiptRequest = RevertRecordReceiptRequest_1.default;
var RecordReceiptByStampTaskRequest_1 = tslib_1.__importDefault(require("./RecordReceiptByStampTaskRequest"));
exports.RecordReceiptByStampTaskRequest = RecordReceiptByStampTaskRequest_1.default;
var RevertRecordReceiptByStampSheetRequest_1 = tslib_1.__importDefault(require("./RevertRecordReceiptByStampSheetRequest"));
exports.RevertRecordReceiptByStampSheetRequest = RevertRecordReceiptByStampSheetRequest_1.default;
//# sourceMappingURL=index.js.map