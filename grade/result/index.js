"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentGradeMasterFromGitHubResult = exports.UpdateCurrentGradeMasterResult = exports.PreUpdateCurrentGradeMasterResult = exports.GetCurrentGradeMasterResult = exports.ExportMasterResult = exports.VerifyGradeUpMaterialByStampTaskResult = exports.VerifyGradeByStampTaskResult = exports.MultiplyAcquireActionsByStampSheetResult = exports.MultiplyAcquireActionsByUserIdResult = exports.SubGradeByStampTaskResult = exports.ApplyRankCapByStampSheetResult = exports.AddGradeByStampSheetResult = exports.VerifyGradeUpMaterialByUserIdResult = exports.VerifyGradeUpMaterialResult = exports.VerifyGradeByUserIdResult = exports.VerifyGradeResult = exports.DeleteStatusByUserIdResult = exports.ApplyRankCapByUserIdResult = exports.ApplyRankCapResult = exports.SetGradeByUserIdResult = exports.SubGradeByUserIdResult = exports.SubGradeResult = exports.AddGradeByUserIdResult = exports.GetStatusByUserIdResult = exports.GetStatusResult = exports.DescribeStatusesByUserIdResult = exports.DescribeStatusesResult = exports.GetGradeModelResult = exports.DescribeGradeModelsResult = exports.DeleteGradeModelMasterResult = exports.UpdateGradeModelMasterResult = exports.GetGradeModelMasterResult = exports.CreateGradeModelMasterResult = exports.DescribeGradeModelMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeGradeModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeGradeModelMastersResult"));
exports.DescribeGradeModelMastersResult = DescribeGradeModelMastersResult_1.default;
var CreateGradeModelMasterResult_1 = tslib_1.__importDefault(require("./CreateGradeModelMasterResult"));
exports.CreateGradeModelMasterResult = CreateGradeModelMasterResult_1.default;
var GetGradeModelMasterResult_1 = tslib_1.__importDefault(require("./GetGradeModelMasterResult"));
exports.GetGradeModelMasterResult = GetGradeModelMasterResult_1.default;
var UpdateGradeModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateGradeModelMasterResult"));
exports.UpdateGradeModelMasterResult = UpdateGradeModelMasterResult_1.default;
var DeleteGradeModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteGradeModelMasterResult"));
exports.DeleteGradeModelMasterResult = DeleteGradeModelMasterResult_1.default;
var DescribeGradeModelsResult_1 = tslib_1.__importDefault(require("./DescribeGradeModelsResult"));
exports.DescribeGradeModelsResult = DescribeGradeModelsResult_1.default;
var GetGradeModelResult_1 = tslib_1.__importDefault(require("./GetGradeModelResult"));
exports.GetGradeModelResult = GetGradeModelResult_1.default;
var DescribeStatusesResult_1 = tslib_1.__importDefault(require("./DescribeStatusesResult"));
exports.DescribeStatusesResult = DescribeStatusesResult_1.default;
var DescribeStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdResult"));
exports.DescribeStatusesByUserIdResult = DescribeStatusesByUserIdResult_1.default;
var GetStatusResult_1 = tslib_1.__importDefault(require("./GetStatusResult"));
exports.GetStatusResult = GetStatusResult_1.default;
var GetStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetStatusByUserIdResult"));
exports.GetStatusByUserIdResult = GetStatusByUserIdResult_1.default;
var AddGradeByUserIdResult_1 = tslib_1.__importDefault(require("./AddGradeByUserIdResult"));
exports.AddGradeByUserIdResult = AddGradeByUserIdResult_1.default;
var SubGradeResult_1 = tslib_1.__importDefault(require("./SubGradeResult"));
exports.SubGradeResult = SubGradeResult_1.default;
var SubGradeByUserIdResult_1 = tslib_1.__importDefault(require("./SubGradeByUserIdResult"));
exports.SubGradeByUserIdResult = SubGradeByUserIdResult_1.default;
var SetGradeByUserIdResult_1 = tslib_1.__importDefault(require("./SetGradeByUserIdResult"));
exports.SetGradeByUserIdResult = SetGradeByUserIdResult_1.default;
var ApplyRankCapResult_1 = tslib_1.__importDefault(require("./ApplyRankCapResult"));
exports.ApplyRankCapResult = ApplyRankCapResult_1.default;
var ApplyRankCapByUserIdResult_1 = tslib_1.__importDefault(require("./ApplyRankCapByUserIdResult"));
exports.ApplyRankCapByUserIdResult = ApplyRankCapByUserIdResult_1.default;
var DeleteStatusByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteStatusByUserIdResult"));
exports.DeleteStatusByUserIdResult = DeleteStatusByUserIdResult_1.default;
var VerifyGradeResult_1 = tslib_1.__importDefault(require("./VerifyGradeResult"));
exports.VerifyGradeResult = VerifyGradeResult_1.default;
var VerifyGradeByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyGradeByUserIdResult"));
exports.VerifyGradeByUserIdResult = VerifyGradeByUserIdResult_1.default;
var VerifyGradeUpMaterialResult_1 = tslib_1.__importDefault(require("./VerifyGradeUpMaterialResult"));
exports.VerifyGradeUpMaterialResult = VerifyGradeUpMaterialResult_1.default;
var VerifyGradeUpMaterialByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyGradeUpMaterialByUserIdResult"));
exports.VerifyGradeUpMaterialByUserIdResult = VerifyGradeUpMaterialByUserIdResult_1.default;
var AddGradeByStampSheetResult_1 = tslib_1.__importDefault(require("./AddGradeByStampSheetResult"));
exports.AddGradeByStampSheetResult = AddGradeByStampSheetResult_1.default;
var ApplyRankCapByStampSheetResult_1 = tslib_1.__importDefault(require("./ApplyRankCapByStampSheetResult"));
exports.ApplyRankCapByStampSheetResult = ApplyRankCapByStampSheetResult_1.default;
var SubGradeByStampTaskResult_1 = tslib_1.__importDefault(require("./SubGradeByStampTaskResult"));
exports.SubGradeByStampTaskResult = SubGradeByStampTaskResult_1.default;
var MultiplyAcquireActionsByUserIdResult_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByUserIdResult"));
exports.MultiplyAcquireActionsByUserIdResult = MultiplyAcquireActionsByUserIdResult_1.default;
var MultiplyAcquireActionsByStampSheetResult_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByStampSheetResult"));
exports.MultiplyAcquireActionsByStampSheetResult = MultiplyAcquireActionsByStampSheetResult_1.default;
var VerifyGradeByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyGradeByStampTaskResult"));
exports.VerifyGradeByStampTaskResult = VerifyGradeByStampTaskResult_1.default;
var VerifyGradeUpMaterialByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyGradeUpMaterialByStampTaskResult"));
exports.VerifyGradeUpMaterialByStampTaskResult = VerifyGradeUpMaterialByStampTaskResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentGradeMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentGradeMasterResult"));
exports.GetCurrentGradeMasterResult = GetCurrentGradeMasterResult_1.default;
var PreUpdateCurrentGradeMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentGradeMasterResult"));
exports.PreUpdateCurrentGradeMasterResult = PreUpdateCurrentGradeMasterResult_1.default;
var UpdateCurrentGradeMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentGradeMasterResult"));
exports.UpdateCurrentGradeMasterResult = UpdateCurrentGradeMasterResult_1.default;
var UpdateCurrentGradeMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentGradeMasterFromGitHubResult"));
exports.UpdateCurrentGradeMasterFromGitHubResult = UpdateCurrentGradeMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map