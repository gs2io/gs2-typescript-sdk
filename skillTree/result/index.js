"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentTreeMasterFromGitHubResult = exports.UpdateCurrentTreeMasterResult = exports.GetCurrentTreeMasterResult = exports.ExportMasterResult = exports.MarkRestrainByStampTaskResult = exports.MarkReleaseByStampSheetResult = exports.ResetByUserIdResult = exports.ResetResult = exports.GetStatusByUserIdResult = exports.GetStatusResult = exports.DescribeStatusesByUserIdResult = exports.DescribeStatusesResult = exports.RestrainByUserIdResult = exports.RestrainResult = exports.MarkRestrainByUserIdResult = exports.MarkRestrainResult = exports.ReleaseByUserIdResult = exports.ReleaseResult = exports.MarkReleaseByUserIdResult = exports.DeleteNodeModelMasterResult = exports.UpdateNodeModelMasterResult = exports.GetNodeModelMasterResult = exports.CreateNodeModelMasterResult = exports.DescribeNodeModelMastersResult = exports.GetNodeModelResult = exports.DescribeNodeModelsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeNodeModelsResult_1 = tslib_1.__importDefault(require("./DescribeNodeModelsResult"));
exports.DescribeNodeModelsResult = DescribeNodeModelsResult_1.default;
var GetNodeModelResult_1 = tslib_1.__importDefault(require("./GetNodeModelResult"));
exports.GetNodeModelResult = GetNodeModelResult_1.default;
var DescribeNodeModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeNodeModelMastersResult"));
exports.DescribeNodeModelMastersResult = DescribeNodeModelMastersResult_1.default;
var CreateNodeModelMasterResult_1 = tslib_1.__importDefault(require("./CreateNodeModelMasterResult"));
exports.CreateNodeModelMasterResult = CreateNodeModelMasterResult_1.default;
var GetNodeModelMasterResult_1 = tslib_1.__importDefault(require("./GetNodeModelMasterResult"));
exports.GetNodeModelMasterResult = GetNodeModelMasterResult_1.default;
var UpdateNodeModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateNodeModelMasterResult"));
exports.UpdateNodeModelMasterResult = UpdateNodeModelMasterResult_1.default;
var DeleteNodeModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteNodeModelMasterResult"));
exports.DeleteNodeModelMasterResult = DeleteNodeModelMasterResult_1.default;
var MarkReleaseByUserIdResult_1 = tslib_1.__importDefault(require("./MarkReleaseByUserIdResult"));
exports.MarkReleaseByUserIdResult = MarkReleaseByUserIdResult_1.default;
var ReleaseResult_1 = tslib_1.__importDefault(require("./ReleaseResult"));
exports.ReleaseResult = ReleaseResult_1.default;
var ReleaseByUserIdResult_1 = tslib_1.__importDefault(require("./ReleaseByUserIdResult"));
exports.ReleaseByUserIdResult = ReleaseByUserIdResult_1.default;
var MarkRestrainResult_1 = tslib_1.__importDefault(require("./MarkRestrainResult"));
exports.MarkRestrainResult = MarkRestrainResult_1.default;
var MarkRestrainByUserIdResult_1 = tslib_1.__importDefault(require("./MarkRestrainByUserIdResult"));
exports.MarkRestrainByUserIdResult = MarkRestrainByUserIdResult_1.default;
var RestrainResult_1 = tslib_1.__importDefault(require("./RestrainResult"));
exports.RestrainResult = RestrainResult_1.default;
var RestrainByUserIdResult_1 = tslib_1.__importDefault(require("./RestrainByUserIdResult"));
exports.RestrainByUserIdResult = RestrainByUserIdResult_1.default;
var DescribeStatusesResult_1 = tslib_1.__importDefault(require("./DescribeStatusesResult"));
exports.DescribeStatusesResult = DescribeStatusesResult_1.default;
var DescribeStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdResult"));
exports.DescribeStatusesByUserIdResult = DescribeStatusesByUserIdResult_1.default;
var GetStatusResult_1 = tslib_1.__importDefault(require("./GetStatusResult"));
exports.GetStatusResult = GetStatusResult_1.default;
var GetStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetStatusByUserIdResult"));
exports.GetStatusByUserIdResult = GetStatusByUserIdResult_1.default;
var ResetResult_1 = tslib_1.__importDefault(require("./ResetResult"));
exports.ResetResult = ResetResult_1.default;
var ResetByUserIdResult_1 = tslib_1.__importDefault(require("./ResetByUserIdResult"));
exports.ResetByUserIdResult = ResetByUserIdResult_1.default;
var MarkReleaseByStampSheetResult_1 = tslib_1.__importDefault(require("./MarkReleaseByStampSheetResult"));
exports.MarkReleaseByStampSheetResult = MarkReleaseByStampSheetResult_1.default;
var MarkRestrainByStampTaskResult_1 = tslib_1.__importDefault(require("./MarkRestrainByStampTaskResult"));
exports.MarkRestrainByStampTaskResult = MarkRestrainByStampTaskResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentTreeMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentTreeMasterResult"));
exports.GetCurrentTreeMasterResult = GetCurrentTreeMasterResult_1.default;
var UpdateCurrentTreeMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentTreeMasterResult"));
exports.UpdateCurrentTreeMasterResult = UpdateCurrentTreeMasterResult_1.default;
var UpdateCurrentTreeMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentTreeMasterFromGitHubResult"));
exports.UpdateCurrentTreeMasterFromGitHubResult = UpdateCurrentTreeMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map