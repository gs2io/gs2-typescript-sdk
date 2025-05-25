"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentVersionMasterFromGitHubRequest = exports.UpdateCurrentVersionMasterRequest = exports.PreUpdateCurrentVersionMasterRequest = exports.GetCurrentVersionMasterRequest = exports.ExportMasterRequest = exports.CalculateSignatureRequest = exports.CheckVersionByUserIdRequest = exports.CheckVersionRequest = exports.DeleteAcceptVersionByUserIdRequest = exports.DeleteAcceptVersionRequest = exports.GetAcceptVersionByUserIdRequest = exports.GetAcceptVersionRequest = exports.RejectByUserIdRequest = exports.RejectRequest = exports.AcceptByUserIdRequest = exports.AcceptRequest = exports.DescribeAcceptVersionsByUserIdRequest = exports.DescribeAcceptVersionsRequest = exports.GetVersionModelRequest = exports.DescribeVersionModelsRequest = exports.DeleteVersionModelMasterRequest = exports.UpdateVersionModelMasterRequest = exports.GetVersionModelMasterRequest = exports.CreateVersionModelMasterRequest = exports.DescribeVersionModelMastersRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.GetServiceVersionRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var GetServiceVersionRequest_1 = tslib_1.__importDefault(require("./GetServiceVersionRequest"));
exports.GetServiceVersionRequest = GetServiceVersionRequest_1.default;
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
var DescribeVersionModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeVersionModelMastersRequest"));
exports.DescribeVersionModelMastersRequest = DescribeVersionModelMastersRequest_1.default;
var CreateVersionModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateVersionModelMasterRequest"));
exports.CreateVersionModelMasterRequest = CreateVersionModelMasterRequest_1.default;
var GetVersionModelMasterRequest_1 = tslib_1.__importDefault(require("./GetVersionModelMasterRequest"));
exports.GetVersionModelMasterRequest = GetVersionModelMasterRequest_1.default;
var UpdateVersionModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateVersionModelMasterRequest"));
exports.UpdateVersionModelMasterRequest = UpdateVersionModelMasterRequest_1.default;
var DeleteVersionModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteVersionModelMasterRequest"));
exports.DeleteVersionModelMasterRequest = DeleteVersionModelMasterRequest_1.default;
var DescribeVersionModelsRequest_1 = tslib_1.__importDefault(require("./DescribeVersionModelsRequest"));
exports.DescribeVersionModelsRequest = DescribeVersionModelsRequest_1.default;
var GetVersionModelRequest_1 = tslib_1.__importDefault(require("./GetVersionModelRequest"));
exports.GetVersionModelRequest = GetVersionModelRequest_1.default;
var DescribeAcceptVersionsRequest_1 = tslib_1.__importDefault(require("./DescribeAcceptVersionsRequest"));
exports.DescribeAcceptVersionsRequest = DescribeAcceptVersionsRequest_1.default;
var DescribeAcceptVersionsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeAcceptVersionsByUserIdRequest"));
exports.DescribeAcceptVersionsByUserIdRequest = DescribeAcceptVersionsByUserIdRequest_1.default;
var AcceptRequest_1 = tslib_1.__importDefault(require("./AcceptRequest"));
exports.AcceptRequest = AcceptRequest_1.default;
var AcceptByUserIdRequest_1 = tslib_1.__importDefault(require("./AcceptByUserIdRequest"));
exports.AcceptByUserIdRequest = AcceptByUserIdRequest_1.default;
var RejectRequest_1 = tslib_1.__importDefault(require("./RejectRequest"));
exports.RejectRequest = RejectRequest_1.default;
var RejectByUserIdRequest_1 = tslib_1.__importDefault(require("./RejectByUserIdRequest"));
exports.RejectByUserIdRequest = RejectByUserIdRequest_1.default;
var GetAcceptVersionRequest_1 = tslib_1.__importDefault(require("./GetAcceptVersionRequest"));
exports.GetAcceptVersionRequest = GetAcceptVersionRequest_1.default;
var GetAcceptVersionByUserIdRequest_1 = tslib_1.__importDefault(require("./GetAcceptVersionByUserIdRequest"));
exports.GetAcceptVersionByUserIdRequest = GetAcceptVersionByUserIdRequest_1.default;
var DeleteAcceptVersionRequest_1 = tslib_1.__importDefault(require("./DeleteAcceptVersionRequest"));
exports.DeleteAcceptVersionRequest = DeleteAcceptVersionRequest_1.default;
var DeleteAcceptVersionByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteAcceptVersionByUserIdRequest"));
exports.DeleteAcceptVersionByUserIdRequest = DeleteAcceptVersionByUserIdRequest_1.default;
var CheckVersionRequest_1 = tslib_1.__importDefault(require("./CheckVersionRequest"));
exports.CheckVersionRequest = CheckVersionRequest_1.default;
var CheckVersionByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckVersionByUserIdRequest"));
exports.CheckVersionByUserIdRequest = CheckVersionByUserIdRequest_1.default;
var CalculateSignatureRequest_1 = tslib_1.__importDefault(require("./CalculateSignatureRequest"));
exports.CalculateSignatureRequest = CalculateSignatureRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentVersionMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentVersionMasterRequest"));
exports.GetCurrentVersionMasterRequest = GetCurrentVersionMasterRequest_1.default;
var PreUpdateCurrentVersionMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentVersionMasterRequest"));
exports.PreUpdateCurrentVersionMasterRequest = PreUpdateCurrentVersionMasterRequest_1.default;
var UpdateCurrentVersionMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentVersionMasterRequest"));
exports.UpdateCurrentVersionMasterRequest = UpdateCurrentVersionMasterRequest_1.default;
var UpdateCurrentVersionMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentVersionMasterFromGitHubRequest"));
exports.UpdateCurrentVersionMasterFromGitHubRequest = UpdateCurrentVersionMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map