"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRarityParameterStatusByStampSheetResult = exports.AddRarityParameterStatusByUserIdResult = exports.ReDrawRarityParameterStatusByStampSheetResult = exports.ReDrawRarityParameterStatusByUserIdResult = exports.DeleteRarityParameterStatusByUserIdResult = exports.GetRarityParameterStatusByUserIdResult = exports.GetRarityParameterStatusResult = exports.DescribeRarityParameterStatusesByUserIdResult = exports.DescribeRarityParameterStatusesResult = exports.SetBalanceParameterStatusByStampSheetResult = exports.SetBalanceParameterStatusByUserIdResult = exports.ReDrawBalanceParameterStatusByStampSheetResult = exports.ReDrawBalanceParameterStatusByUserIdResult = exports.DeleteBalanceParameterStatusByUserIdResult = exports.GetBalanceParameterStatusByUserIdResult = exports.GetBalanceParameterStatusResult = exports.DescribeBalanceParameterStatusesByUserIdResult = exports.DescribeBalanceParameterStatusesResult = exports.UpdateCurrentParameterMasterFromGitHubResult = exports.UpdateCurrentParameterMasterResult = exports.PreUpdateCurrentParameterMasterResult = exports.GetCurrentParameterMasterResult = exports.ExportMasterResult = exports.DeleteRarityParameterModelMasterResult = exports.UpdateRarityParameterModelMasterResult = exports.GetRarityParameterModelMasterResult = exports.CreateRarityParameterModelMasterResult = exports.DescribeRarityParameterModelMastersResult = exports.GetRarityParameterModelResult = exports.DescribeRarityParameterModelsResult = exports.DeleteBalanceParameterModelMasterResult = exports.UpdateBalanceParameterModelMasterResult = exports.GetBalanceParameterModelMasterResult = exports.CreateBalanceParameterModelMasterResult = exports.DescribeBalanceParameterModelMastersResult = exports.GetBalanceParameterModelResult = exports.DescribeBalanceParameterModelsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.SetRarityParameterStatusByStampSheetResult = exports.SetRarityParameterStatusByUserIdResult = exports.VerifyRarityParameterStatusByStampTaskResult = exports.VerifyRarityParameterStatusByUserIdResult = exports.VerifyRarityParameterStatusResult = void 0;
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
var DescribeBalanceParameterModelsResult_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterModelsResult"));
exports.DescribeBalanceParameterModelsResult = DescribeBalanceParameterModelsResult_1.default;
var GetBalanceParameterModelResult_1 = tslib_1.__importDefault(require("./GetBalanceParameterModelResult"));
exports.GetBalanceParameterModelResult = GetBalanceParameterModelResult_1.default;
var DescribeBalanceParameterModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterModelMastersResult"));
exports.DescribeBalanceParameterModelMastersResult = DescribeBalanceParameterModelMastersResult_1.default;
var CreateBalanceParameterModelMasterResult_1 = tslib_1.__importDefault(require("./CreateBalanceParameterModelMasterResult"));
exports.CreateBalanceParameterModelMasterResult = CreateBalanceParameterModelMasterResult_1.default;
var GetBalanceParameterModelMasterResult_1 = tslib_1.__importDefault(require("./GetBalanceParameterModelMasterResult"));
exports.GetBalanceParameterModelMasterResult = GetBalanceParameterModelMasterResult_1.default;
var UpdateBalanceParameterModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateBalanceParameterModelMasterResult"));
exports.UpdateBalanceParameterModelMasterResult = UpdateBalanceParameterModelMasterResult_1.default;
var DeleteBalanceParameterModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteBalanceParameterModelMasterResult"));
exports.DeleteBalanceParameterModelMasterResult = DeleteBalanceParameterModelMasterResult_1.default;
var DescribeRarityParameterModelsResult_1 = tslib_1.__importDefault(require("./DescribeRarityParameterModelsResult"));
exports.DescribeRarityParameterModelsResult = DescribeRarityParameterModelsResult_1.default;
var GetRarityParameterModelResult_1 = tslib_1.__importDefault(require("./GetRarityParameterModelResult"));
exports.GetRarityParameterModelResult = GetRarityParameterModelResult_1.default;
var DescribeRarityParameterModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeRarityParameterModelMastersResult"));
exports.DescribeRarityParameterModelMastersResult = DescribeRarityParameterModelMastersResult_1.default;
var CreateRarityParameterModelMasterResult_1 = tslib_1.__importDefault(require("./CreateRarityParameterModelMasterResult"));
exports.CreateRarityParameterModelMasterResult = CreateRarityParameterModelMasterResult_1.default;
var GetRarityParameterModelMasterResult_1 = tslib_1.__importDefault(require("./GetRarityParameterModelMasterResult"));
exports.GetRarityParameterModelMasterResult = GetRarityParameterModelMasterResult_1.default;
var UpdateRarityParameterModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateRarityParameterModelMasterResult"));
exports.UpdateRarityParameterModelMasterResult = UpdateRarityParameterModelMasterResult_1.default;
var DeleteRarityParameterModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteRarityParameterModelMasterResult"));
exports.DeleteRarityParameterModelMasterResult = DeleteRarityParameterModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentParameterMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentParameterMasterResult"));
exports.GetCurrentParameterMasterResult = GetCurrentParameterMasterResult_1.default;
var PreUpdateCurrentParameterMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentParameterMasterResult"));
exports.PreUpdateCurrentParameterMasterResult = PreUpdateCurrentParameterMasterResult_1.default;
var UpdateCurrentParameterMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentParameterMasterResult"));
exports.UpdateCurrentParameterMasterResult = UpdateCurrentParameterMasterResult_1.default;
var UpdateCurrentParameterMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentParameterMasterFromGitHubResult"));
exports.UpdateCurrentParameterMasterFromGitHubResult = UpdateCurrentParameterMasterFromGitHubResult_1.default;
var DescribeBalanceParameterStatusesResult_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterStatusesResult"));
exports.DescribeBalanceParameterStatusesResult = DescribeBalanceParameterStatusesResult_1.default;
var DescribeBalanceParameterStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterStatusesByUserIdResult"));
exports.DescribeBalanceParameterStatusesByUserIdResult = DescribeBalanceParameterStatusesByUserIdResult_1.default;
var GetBalanceParameterStatusResult_1 = tslib_1.__importDefault(require("./GetBalanceParameterStatusResult"));
exports.GetBalanceParameterStatusResult = GetBalanceParameterStatusResult_1.default;
var GetBalanceParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetBalanceParameterStatusByUserIdResult"));
exports.GetBalanceParameterStatusByUserIdResult = GetBalanceParameterStatusByUserIdResult_1.default;
var DeleteBalanceParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteBalanceParameterStatusByUserIdResult"));
exports.DeleteBalanceParameterStatusByUserIdResult = DeleteBalanceParameterStatusByUserIdResult_1.default;
var ReDrawBalanceParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./ReDrawBalanceParameterStatusByUserIdResult"));
exports.ReDrawBalanceParameterStatusByUserIdResult = ReDrawBalanceParameterStatusByUserIdResult_1.default;
var ReDrawBalanceParameterStatusByStampSheetResult_1 = tslib_1.__importDefault(require("./ReDrawBalanceParameterStatusByStampSheetResult"));
exports.ReDrawBalanceParameterStatusByStampSheetResult = ReDrawBalanceParameterStatusByStampSheetResult_1.default;
var SetBalanceParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./SetBalanceParameterStatusByUserIdResult"));
exports.SetBalanceParameterStatusByUserIdResult = SetBalanceParameterStatusByUserIdResult_1.default;
var SetBalanceParameterStatusByStampSheetResult_1 = tslib_1.__importDefault(require("./SetBalanceParameterStatusByStampSheetResult"));
exports.SetBalanceParameterStatusByStampSheetResult = SetBalanceParameterStatusByStampSheetResult_1.default;
var DescribeRarityParameterStatusesResult_1 = tslib_1.__importDefault(require("./DescribeRarityParameterStatusesResult"));
exports.DescribeRarityParameterStatusesResult = DescribeRarityParameterStatusesResult_1.default;
var DescribeRarityParameterStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeRarityParameterStatusesByUserIdResult"));
exports.DescribeRarityParameterStatusesByUserIdResult = DescribeRarityParameterStatusesByUserIdResult_1.default;
var GetRarityParameterStatusResult_1 = tslib_1.__importDefault(require("./GetRarityParameterStatusResult"));
exports.GetRarityParameterStatusResult = GetRarityParameterStatusResult_1.default;
var GetRarityParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetRarityParameterStatusByUserIdResult"));
exports.GetRarityParameterStatusByUserIdResult = GetRarityParameterStatusByUserIdResult_1.default;
var DeleteRarityParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteRarityParameterStatusByUserIdResult"));
exports.DeleteRarityParameterStatusByUserIdResult = DeleteRarityParameterStatusByUserIdResult_1.default;
var ReDrawRarityParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./ReDrawRarityParameterStatusByUserIdResult"));
exports.ReDrawRarityParameterStatusByUserIdResult = ReDrawRarityParameterStatusByUserIdResult_1.default;
var ReDrawRarityParameterStatusByStampSheetResult_1 = tslib_1.__importDefault(require("./ReDrawRarityParameterStatusByStampSheetResult"));
exports.ReDrawRarityParameterStatusByStampSheetResult = ReDrawRarityParameterStatusByStampSheetResult_1.default;
var AddRarityParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./AddRarityParameterStatusByUserIdResult"));
exports.AddRarityParameterStatusByUserIdResult = AddRarityParameterStatusByUserIdResult_1.default;
var AddRarityParameterStatusByStampSheetResult_1 = tslib_1.__importDefault(require("./AddRarityParameterStatusByStampSheetResult"));
exports.AddRarityParameterStatusByStampSheetResult = AddRarityParameterStatusByStampSheetResult_1.default;
var VerifyRarityParameterStatusResult_1 = tslib_1.__importDefault(require("./VerifyRarityParameterStatusResult"));
exports.VerifyRarityParameterStatusResult = VerifyRarityParameterStatusResult_1.default;
var VerifyRarityParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyRarityParameterStatusByUserIdResult"));
exports.VerifyRarityParameterStatusByUserIdResult = VerifyRarityParameterStatusByUserIdResult_1.default;
var VerifyRarityParameterStatusByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyRarityParameterStatusByStampTaskResult"));
exports.VerifyRarityParameterStatusByStampTaskResult = VerifyRarityParameterStatusByStampTaskResult_1.default;
var SetRarityParameterStatusByUserIdResult_1 = tslib_1.__importDefault(require("./SetRarityParameterStatusByUserIdResult"));
exports.SetRarityParameterStatusByUserIdResult = SetRarityParameterStatusByUserIdResult_1.default;
var SetRarityParameterStatusByStampSheetResult_1 = tslib_1.__importDefault(require("./SetRarityParameterStatusByStampSheetResult"));
exports.SetRarityParameterStatusByStampSheetResult = SetRarityParameterStatusByStampSheetResult_1.default;
//# sourceMappingURL=index.js.map