"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentTreeMasterFromGitHubRequest = exports.UpdateCurrentTreeMasterRequest = exports.PreUpdateCurrentTreeMasterRequest = exports.GetCurrentTreeMasterRequest = exports.ExportMasterRequest = exports.MarkRestrainByStampTaskRequest = exports.MarkReleaseByStampSheetRequest = exports.ResetByUserIdRequest = exports.ResetRequest = exports.GetStatusByUserIdRequest = exports.GetStatusRequest = exports.DescribeStatusesByUserIdRequest = exports.DescribeStatusesRequest = exports.RestrainByUserIdRequest = exports.RestrainRequest = exports.MarkRestrainByUserIdRequest = exports.MarkRestrainRequest = exports.ReleaseByUserIdRequest = exports.ReleaseRequest = exports.MarkReleaseByUserIdRequest = exports.DeleteNodeModelMasterRequest = exports.UpdateNodeModelMasterRequest = exports.GetNodeModelMasterRequest = exports.CreateNodeModelMasterRequest = exports.DescribeNodeModelMastersRequest = exports.GetNodeModelRequest = exports.DescribeNodeModelsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeNodeModelsRequest_1 = tslib_1.__importDefault(require("./DescribeNodeModelsRequest"));
exports.DescribeNodeModelsRequest = DescribeNodeModelsRequest_1.default;
var GetNodeModelRequest_1 = tslib_1.__importDefault(require("./GetNodeModelRequest"));
exports.GetNodeModelRequest = GetNodeModelRequest_1.default;
var DescribeNodeModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeNodeModelMastersRequest"));
exports.DescribeNodeModelMastersRequest = DescribeNodeModelMastersRequest_1.default;
var CreateNodeModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateNodeModelMasterRequest"));
exports.CreateNodeModelMasterRequest = CreateNodeModelMasterRequest_1.default;
var GetNodeModelMasterRequest_1 = tslib_1.__importDefault(require("./GetNodeModelMasterRequest"));
exports.GetNodeModelMasterRequest = GetNodeModelMasterRequest_1.default;
var UpdateNodeModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateNodeModelMasterRequest"));
exports.UpdateNodeModelMasterRequest = UpdateNodeModelMasterRequest_1.default;
var DeleteNodeModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteNodeModelMasterRequest"));
exports.DeleteNodeModelMasterRequest = DeleteNodeModelMasterRequest_1.default;
var MarkReleaseByUserIdRequest_1 = tslib_1.__importDefault(require("./MarkReleaseByUserIdRequest"));
exports.MarkReleaseByUserIdRequest = MarkReleaseByUserIdRequest_1.default;
var ReleaseRequest_1 = tslib_1.__importDefault(require("./ReleaseRequest"));
exports.ReleaseRequest = ReleaseRequest_1.default;
var ReleaseByUserIdRequest_1 = tslib_1.__importDefault(require("./ReleaseByUserIdRequest"));
exports.ReleaseByUserIdRequest = ReleaseByUserIdRequest_1.default;
var MarkRestrainRequest_1 = tslib_1.__importDefault(require("./MarkRestrainRequest"));
exports.MarkRestrainRequest = MarkRestrainRequest_1.default;
var MarkRestrainByUserIdRequest_1 = tslib_1.__importDefault(require("./MarkRestrainByUserIdRequest"));
exports.MarkRestrainByUserIdRequest = MarkRestrainByUserIdRequest_1.default;
var RestrainRequest_1 = tslib_1.__importDefault(require("./RestrainRequest"));
exports.RestrainRequest = RestrainRequest_1.default;
var RestrainByUserIdRequest_1 = tslib_1.__importDefault(require("./RestrainByUserIdRequest"));
exports.RestrainByUserIdRequest = RestrainByUserIdRequest_1.default;
var DescribeStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesRequest"));
exports.DescribeStatusesRequest = DescribeStatusesRequest_1.default;
var DescribeStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdRequest"));
exports.DescribeStatusesByUserIdRequest = DescribeStatusesByUserIdRequest_1.default;
var GetStatusRequest_1 = tslib_1.__importDefault(require("./GetStatusRequest"));
exports.GetStatusRequest = GetStatusRequest_1.default;
var GetStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStatusByUserIdRequest"));
exports.GetStatusByUserIdRequest = GetStatusByUserIdRequest_1.default;
var ResetRequest_1 = tslib_1.__importDefault(require("./ResetRequest"));
exports.ResetRequest = ResetRequest_1.default;
var ResetByUserIdRequest_1 = tslib_1.__importDefault(require("./ResetByUserIdRequest"));
exports.ResetByUserIdRequest = ResetByUserIdRequest_1.default;
var MarkReleaseByStampSheetRequest_1 = tslib_1.__importDefault(require("./MarkReleaseByStampSheetRequest"));
exports.MarkReleaseByStampSheetRequest = MarkReleaseByStampSheetRequest_1.default;
var MarkRestrainByStampTaskRequest_1 = tslib_1.__importDefault(require("./MarkRestrainByStampTaskRequest"));
exports.MarkRestrainByStampTaskRequest = MarkRestrainByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentTreeMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentTreeMasterRequest"));
exports.GetCurrentTreeMasterRequest = GetCurrentTreeMasterRequest_1.default;
var PreUpdateCurrentTreeMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentTreeMasterRequest"));
exports.PreUpdateCurrentTreeMasterRequest = PreUpdateCurrentTreeMasterRequest_1.default;
var UpdateCurrentTreeMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentTreeMasterRequest"));
exports.UpdateCurrentTreeMasterRequest = UpdateCurrentTreeMasterRequest_1.default;
var UpdateCurrentTreeMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentTreeMasterFromGitHubRequest"));
exports.UpdateCurrentTreeMasterFromGitHubRequest = UpdateCurrentTreeMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map