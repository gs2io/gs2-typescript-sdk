"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomDisplayItemByUserIdResult = exports.GetRandomDisplayItemResult = exports.DescribeRandomDisplayItemsByUserIdResult = exports.DescribeRandomDisplayItemsResult = exports.ForceReDrawByUserIdByStampSheetResult = exports.ForceReDrawByUserIdResult = exports.DecrementPurchaseCountByStampSheetResult = exports.IncrementPurchaseCountByStampTaskResult = exports.DecrementPurchaseCountByUserIdResult = exports.IncrementPurchaseCountByUserIdResult = exports.DeleteRandomShowcaseMasterResult = exports.UpdateRandomShowcaseMasterResult = exports.GetRandomShowcaseMasterResult = exports.CreateRandomShowcaseMasterResult = exports.DescribeRandomShowcaseMastersResult = exports.BuyByUserIdResult = exports.BuyResult = exports.GetShowcaseByUserIdResult = exports.GetShowcaseResult = exports.DescribeShowcasesByUserIdResult = exports.DescribeShowcasesResult = exports.UpdateCurrentShowcaseMasterFromGitHubResult = exports.UpdateCurrentShowcaseMasterResult = exports.GetCurrentShowcaseMasterResult = exports.ExportMasterResult = exports.DeleteShowcaseMasterResult = exports.UpdateShowcaseMasterResult = exports.GetShowcaseMasterResult = exports.CreateShowcaseMasterResult = exports.DescribeShowcaseMastersResult = exports.DeleteSalesItemGroupMasterResult = exports.UpdateSalesItemGroupMasterResult = exports.GetSalesItemGroupMasterResult = exports.CreateSalesItemGroupMasterResult = exports.DescribeSalesItemGroupMastersResult = exports.DeleteSalesItemMasterResult = exports.UpdateSalesItemMasterResult = exports.GetSalesItemMasterResult = exports.CreateSalesItemMasterResult = exports.DescribeSalesItemMastersResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.RandomShowcaseBuyByUserIdResult = exports.RandomShowcaseBuyResult = void 0;
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
var DescribeSalesItemMastersResult_1 = tslib_1.__importDefault(require("./DescribeSalesItemMastersResult"));
exports.DescribeSalesItemMastersResult = DescribeSalesItemMastersResult_1.default;
var CreateSalesItemMasterResult_1 = tslib_1.__importDefault(require("./CreateSalesItemMasterResult"));
exports.CreateSalesItemMasterResult = CreateSalesItemMasterResult_1.default;
var GetSalesItemMasterResult_1 = tslib_1.__importDefault(require("./GetSalesItemMasterResult"));
exports.GetSalesItemMasterResult = GetSalesItemMasterResult_1.default;
var UpdateSalesItemMasterResult_1 = tslib_1.__importDefault(require("./UpdateSalesItemMasterResult"));
exports.UpdateSalesItemMasterResult = UpdateSalesItemMasterResult_1.default;
var DeleteSalesItemMasterResult_1 = tslib_1.__importDefault(require("./DeleteSalesItemMasterResult"));
exports.DeleteSalesItemMasterResult = DeleteSalesItemMasterResult_1.default;
var DescribeSalesItemGroupMastersResult_1 = tslib_1.__importDefault(require("./DescribeSalesItemGroupMastersResult"));
exports.DescribeSalesItemGroupMastersResult = DescribeSalesItemGroupMastersResult_1.default;
var CreateSalesItemGroupMasterResult_1 = tslib_1.__importDefault(require("./CreateSalesItemGroupMasterResult"));
exports.CreateSalesItemGroupMasterResult = CreateSalesItemGroupMasterResult_1.default;
var GetSalesItemGroupMasterResult_1 = tslib_1.__importDefault(require("./GetSalesItemGroupMasterResult"));
exports.GetSalesItemGroupMasterResult = GetSalesItemGroupMasterResult_1.default;
var UpdateSalesItemGroupMasterResult_1 = tslib_1.__importDefault(require("./UpdateSalesItemGroupMasterResult"));
exports.UpdateSalesItemGroupMasterResult = UpdateSalesItemGroupMasterResult_1.default;
var DeleteSalesItemGroupMasterResult_1 = tslib_1.__importDefault(require("./DeleteSalesItemGroupMasterResult"));
exports.DeleteSalesItemGroupMasterResult = DeleteSalesItemGroupMasterResult_1.default;
var DescribeShowcaseMastersResult_1 = tslib_1.__importDefault(require("./DescribeShowcaseMastersResult"));
exports.DescribeShowcaseMastersResult = DescribeShowcaseMastersResult_1.default;
var CreateShowcaseMasterResult_1 = tslib_1.__importDefault(require("./CreateShowcaseMasterResult"));
exports.CreateShowcaseMasterResult = CreateShowcaseMasterResult_1.default;
var GetShowcaseMasterResult_1 = tslib_1.__importDefault(require("./GetShowcaseMasterResult"));
exports.GetShowcaseMasterResult = GetShowcaseMasterResult_1.default;
var UpdateShowcaseMasterResult_1 = tslib_1.__importDefault(require("./UpdateShowcaseMasterResult"));
exports.UpdateShowcaseMasterResult = UpdateShowcaseMasterResult_1.default;
var DeleteShowcaseMasterResult_1 = tslib_1.__importDefault(require("./DeleteShowcaseMasterResult"));
exports.DeleteShowcaseMasterResult = DeleteShowcaseMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentShowcaseMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentShowcaseMasterResult"));
exports.GetCurrentShowcaseMasterResult = GetCurrentShowcaseMasterResult_1.default;
var UpdateCurrentShowcaseMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentShowcaseMasterResult"));
exports.UpdateCurrentShowcaseMasterResult = UpdateCurrentShowcaseMasterResult_1.default;
var UpdateCurrentShowcaseMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentShowcaseMasterFromGitHubResult"));
exports.UpdateCurrentShowcaseMasterFromGitHubResult = UpdateCurrentShowcaseMasterFromGitHubResult_1.default;
var DescribeShowcasesResult_1 = tslib_1.__importDefault(require("./DescribeShowcasesResult"));
exports.DescribeShowcasesResult = DescribeShowcasesResult_1.default;
var DescribeShowcasesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeShowcasesByUserIdResult"));
exports.DescribeShowcasesByUserIdResult = DescribeShowcasesByUserIdResult_1.default;
var GetShowcaseResult_1 = tslib_1.__importDefault(require("./GetShowcaseResult"));
exports.GetShowcaseResult = GetShowcaseResult_1.default;
var GetShowcaseByUserIdResult_1 = tslib_1.__importDefault(require("./GetShowcaseByUserIdResult"));
exports.GetShowcaseByUserIdResult = GetShowcaseByUserIdResult_1.default;
var BuyResult_1 = tslib_1.__importDefault(require("./BuyResult"));
exports.BuyResult = BuyResult_1.default;
var BuyByUserIdResult_1 = tslib_1.__importDefault(require("./BuyByUserIdResult"));
exports.BuyByUserIdResult = BuyByUserIdResult_1.default;
var DescribeRandomShowcaseMastersResult_1 = tslib_1.__importDefault(require("./DescribeRandomShowcaseMastersResult"));
exports.DescribeRandomShowcaseMastersResult = DescribeRandomShowcaseMastersResult_1.default;
var CreateRandomShowcaseMasterResult_1 = tslib_1.__importDefault(require("./CreateRandomShowcaseMasterResult"));
exports.CreateRandomShowcaseMasterResult = CreateRandomShowcaseMasterResult_1.default;
var GetRandomShowcaseMasterResult_1 = tslib_1.__importDefault(require("./GetRandomShowcaseMasterResult"));
exports.GetRandomShowcaseMasterResult = GetRandomShowcaseMasterResult_1.default;
var UpdateRandomShowcaseMasterResult_1 = tslib_1.__importDefault(require("./UpdateRandomShowcaseMasterResult"));
exports.UpdateRandomShowcaseMasterResult = UpdateRandomShowcaseMasterResult_1.default;
var DeleteRandomShowcaseMasterResult_1 = tslib_1.__importDefault(require("./DeleteRandomShowcaseMasterResult"));
exports.DeleteRandomShowcaseMasterResult = DeleteRandomShowcaseMasterResult_1.default;
var IncrementPurchaseCountByUserIdResult_1 = tslib_1.__importDefault(require("./IncrementPurchaseCountByUserIdResult"));
exports.IncrementPurchaseCountByUserIdResult = IncrementPurchaseCountByUserIdResult_1.default;
var DecrementPurchaseCountByUserIdResult_1 = tslib_1.__importDefault(require("./DecrementPurchaseCountByUserIdResult"));
exports.DecrementPurchaseCountByUserIdResult = DecrementPurchaseCountByUserIdResult_1.default;
var IncrementPurchaseCountByStampTaskResult_1 = tslib_1.__importDefault(require("./IncrementPurchaseCountByStampTaskResult"));
exports.IncrementPurchaseCountByStampTaskResult = IncrementPurchaseCountByStampTaskResult_1.default;
var DecrementPurchaseCountByStampSheetResult_1 = tslib_1.__importDefault(require("./DecrementPurchaseCountByStampSheetResult"));
exports.DecrementPurchaseCountByStampSheetResult = DecrementPurchaseCountByStampSheetResult_1.default;
var ForceReDrawByUserIdResult_1 = tslib_1.__importDefault(require("./ForceReDrawByUserIdResult"));
exports.ForceReDrawByUserIdResult = ForceReDrawByUserIdResult_1.default;
var ForceReDrawByUserIdByStampSheetResult_1 = tslib_1.__importDefault(require("./ForceReDrawByUserIdByStampSheetResult"));
exports.ForceReDrawByUserIdByStampSheetResult = ForceReDrawByUserIdByStampSheetResult_1.default;
var DescribeRandomDisplayItemsResult_1 = tslib_1.__importDefault(require("./DescribeRandomDisplayItemsResult"));
exports.DescribeRandomDisplayItemsResult = DescribeRandomDisplayItemsResult_1.default;
var DescribeRandomDisplayItemsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeRandomDisplayItemsByUserIdResult"));
exports.DescribeRandomDisplayItemsByUserIdResult = DescribeRandomDisplayItemsByUserIdResult_1.default;
var GetRandomDisplayItemResult_1 = tslib_1.__importDefault(require("./GetRandomDisplayItemResult"));
exports.GetRandomDisplayItemResult = GetRandomDisplayItemResult_1.default;
var GetRandomDisplayItemByUserIdResult_1 = tslib_1.__importDefault(require("./GetRandomDisplayItemByUserIdResult"));
exports.GetRandomDisplayItemByUserIdResult = GetRandomDisplayItemByUserIdResult_1.default;
var RandomShowcaseBuyResult_1 = tslib_1.__importDefault(require("./RandomShowcaseBuyResult"));
exports.RandomShowcaseBuyResult = RandomShowcaseBuyResult_1.default;
var RandomShowcaseBuyByUserIdResult_1 = tslib_1.__importDefault(require("./RandomShowcaseBuyByUserIdResult"));
exports.RandomShowcaseBuyByUserIdResult = RandomShowcaseBuyByUserIdResult_1.default;
//# sourceMappingURL=index.js.map