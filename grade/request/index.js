"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentGradeMasterFromGitHubRequest = exports.UpdateCurrentGradeMasterRequest = exports.PreUpdateCurrentGradeMasterRequest = exports.GetCurrentGradeMasterRequest = exports.ExportMasterRequest = exports.VerifyGradeUpMaterialByStampTaskRequest = exports.VerifyGradeByStampTaskRequest = exports.MultiplyAcquireActionsByStampSheetRequest = exports.MultiplyAcquireActionsByUserIdRequest = exports.SubGradeByStampTaskRequest = exports.ApplyRankCapByStampSheetRequest = exports.AddGradeByStampSheetRequest = exports.VerifyGradeUpMaterialByUserIdRequest = exports.VerifyGradeUpMaterialRequest = exports.VerifyGradeByUserIdRequest = exports.VerifyGradeRequest = exports.DeleteStatusByUserIdRequest = exports.ApplyRankCapByUserIdRequest = exports.ApplyRankCapRequest = exports.SetGradeByUserIdRequest = exports.SubGradeByUserIdRequest = exports.SubGradeRequest = exports.AddGradeByUserIdRequest = exports.GetStatusByUserIdRequest = exports.GetStatusRequest = exports.DescribeStatusesByUserIdRequest = exports.DescribeStatusesRequest = exports.GetGradeModelRequest = exports.DescribeGradeModelsRequest = exports.DeleteGradeModelMasterRequest = exports.UpdateGradeModelMasterRequest = exports.GetGradeModelMasterRequest = exports.CreateGradeModelMasterRequest = exports.DescribeGradeModelMastersRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeGradeModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeGradeModelMastersRequest"));
exports.DescribeGradeModelMastersRequest = DescribeGradeModelMastersRequest_1.default;
var CreateGradeModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateGradeModelMasterRequest"));
exports.CreateGradeModelMasterRequest = CreateGradeModelMasterRequest_1.default;
var GetGradeModelMasterRequest_1 = tslib_1.__importDefault(require("./GetGradeModelMasterRequest"));
exports.GetGradeModelMasterRequest = GetGradeModelMasterRequest_1.default;
var UpdateGradeModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateGradeModelMasterRequest"));
exports.UpdateGradeModelMasterRequest = UpdateGradeModelMasterRequest_1.default;
var DeleteGradeModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteGradeModelMasterRequest"));
exports.DeleteGradeModelMasterRequest = DeleteGradeModelMasterRequest_1.default;
var DescribeGradeModelsRequest_1 = tslib_1.__importDefault(require("./DescribeGradeModelsRequest"));
exports.DescribeGradeModelsRequest = DescribeGradeModelsRequest_1.default;
var GetGradeModelRequest_1 = tslib_1.__importDefault(require("./GetGradeModelRequest"));
exports.GetGradeModelRequest = GetGradeModelRequest_1.default;
var DescribeStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesRequest"));
exports.DescribeStatusesRequest = DescribeStatusesRequest_1.default;
var DescribeStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdRequest"));
exports.DescribeStatusesByUserIdRequest = DescribeStatusesByUserIdRequest_1.default;
var GetStatusRequest_1 = tslib_1.__importDefault(require("./GetStatusRequest"));
exports.GetStatusRequest = GetStatusRequest_1.default;
var GetStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStatusByUserIdRequest"));
exports.GetStatusByUserIdRequest = GetStatusByUserIdRequest_1.default;
var AddGradeByUserIdRequest_1 = tslib_1.__importDefault(require("./AddGradeByUserIdRequest"));
exports.AddGradeByUserIdRequest = AddGradeByUserIdRequest_1.default;
var SubGradeRequest_1 = tslib_1.__importDefault(require("./SubGradeRequest"));
exports.SubGradeRequest = SubGradeRequest_1.default;
var SubGradeByUserIdRequest_1 = tslib_1.__importDefault(require("./SubGradeByUserIdRequest"));
exports.SubGradeByUserIdRequest = SubGradeByUserIdRequest_1.default;
var SetGradeByUserIdRequest_1 = tslib_1.__importDefault(require("./SetGradeByUserIdRequest"));
exports.SetGradeByUserIdRequest = SetGradeByUserIdRequest_1.default;
var ApplyRankCapRequest_1 = tslib_1.__importDefault(require("./ApplyRankCapRequest"));
exports.ApplyRankCapRequest = ApplyRankCapRequest_1.default;
var ApplyRankCapByUserIdRequest_1 = tslib_1.__importDefault(require("./ApplyRankCapByUserIdRequest"));
exports.ApplyRankCapByUserIdRequest = ApplyRankCapByUserIdRequest_1.default;
var DeleteStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteStatusByUserIdRequest"));
exports.DeleteStatusByUserIdRequest = DeleteStatusByUserIdRequest_1.default;
var VerifyGradeRequest_1 = tslib_1.__importDefault(require("./VerifyGradeRequest"));
exports.VerifyGradeRequest = VerifyGradeRequest_1.default;
var VerifyGradeByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyGradeByUserIdRequest"));
exports.VerifyGradeByUserIdRequest = VerifyGradeByUserIdRequest_1.default;
var VerifyGradeUpMaterialRequest_1 = tslib_1.__importDefault(require("./VerifyGradeUpMaterialRequest"));
exports.VerifyGradeUpMaterialRequest = VerifyGradeUpMaterialRequest_1.default;
var VerifyGradeUpMaterialByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyGradeUpMaterialByUserIdRequest"));
exports.VerifyGradeUpMaterialByUserIdRequest = VerifyGradeUpMaterialByUserIdRequest_1.default;
var AddGradeByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddGradeByStampSheetRequest"));
exports.AddGradeByStampSheetRequest = AddGradeByStampSheetRequest_1.default;
var ApplyRankCapByStampSheetRequest_1 = tslib_1.__importDefault(require("./ApplyRankCapByStampSheetRequest"));
exports.ApplyRankCapByStampSheetRequest = ApplyRankCapByStampSheetRequest_1.default;
var SubGradeByStampTaskRequest_1 = tslib_1.__importDefault(require("./SubGradeByStampTaskRequest"));
exports.SubGradeByStampTaskRequest = SubGradeByStampTaskRequest_1.default;
var MultiplyAcquireActionsByUserIdRequest_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByUserIdRequest"));
exports.MultiplyAcquireActionsByUserIdRequest = MultiplyAcquireActionsByUserIdRequest_1.default;
var MultiplyAcquireActionsByStampSheetRequest_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByStampSheetRequest"));
exports.MultiplyAcquireActionsByStampSheetRequest = MultiplyAcquireActionsByStampSheetRequest_1.default;
var VerifyGradeByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyGradeByStampTaskRequest"));
exports.VerifyGradeByStampTaskRequest = VerifyGradeByStampTaskRequest_1.default;
var VerifyGradeUpMaterialByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyGradeUpMaterialByStampTaskRequest"));
exports.VerifyGradeUpMaterialByStampTaskRequest = VerifyGradeUpMaterialByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentGradeMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentGradeMasterRequest"));
exports.GetCurrentGradeMasterRequest = GetCurrentGradeMasterRequest_1.default;
var PreUpdateCurrentGradeMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentGradeMasterRequest"));
exports.PreUpdateCurrentGradeMasterRequest = PreUpdateCurrentGradeMasterRequest_1.default;
var UpdateCurrentGradeMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentGradeMasterRequest"));
exports.UpdateCurrentGradeMasterRequest = UpdateCurrentGradeMasterRequest_1.default;
var UpdateCurrentGradeMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentGradeMasterFromGitHubRequest"));
exports.UpdateCurrentGradeMasterFromGitHubRequest = UpdateCurrentGradeMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map