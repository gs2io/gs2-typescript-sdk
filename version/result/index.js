"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentVersionMasterFromGitHubResult = exports.UpdateCurrentVersionMasterResult = exports.GetCurrentVersionMasterResult = exports.ExportMasterResult = exports.CalculateSignatureResult = exports.CheckVersionByUserIdResult = exports.CheckVersionResult = exports.DeleteAcceptVersionByUserIdResult = exports.DeleteAcceptVersionResult = exports.GetAcceptVersionByUserIdResult = exports.GetAcceptVersionResult = exports.AcceptByUserIdResult = exports.AcceptResult = exports.DescribeAcceptVersionsByUserIdResult = exports.DescribeAcceptVersionsResult = exports.GetVersionModelResult = exports.DescribeVersionModelsResult = exports.DeleteVersionModelMasterResult = exports.UpdateVersionModelMasterResult = exports.GetVersionModelMasterResult = exports.CreateVersionModelMasterResult = exports.DescribeVersionModelMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeVersionModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeVersionModelMastersResult"));
exports.DescribeVersionModelMastersResult = DescribeVersionModelMastersResult_1.default;
var CreateVersionModelMasterResult_1 = tslib_1.__importDefault(require("./CreateVersionModelMasterResult"));
exports.CreateVersionModelMasterResult = CreateVersionModelMasterResult_1.default;
var GetVersionModelMasterResult_1 = tslib_1.__importDefault(require("./GetVersionModelMasterResult"));
exports.GetVersionModelMasterResult = GetVersionModelMasterResult_1.default;
var UpdateVersionModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateVersionModelMasterResult"));
exports.UpdateVersionModelMasterResult = UpdateVersionModelMasterResult_1.default;
var DeleteVersionModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteVersionModelMasterResult"));
exports.DeleteVersionModelMasterResult = DeleteVersionModelMasterResult_1.default;
var DescribeVersionModelsResult_1 = tslib_1.__importDefault(require("./DescribeVersionModelsResult"));
exports.DescribeVersionModelsResult = DescribeVersionModelsResult_1.default;
var GetVersionModelResult_1 = tslib_1.__importDefault(require("./GetVersionModelResult"));
exports.GetVersionModelResult = GetVersionModelResult_1.default;
var DescribeAcceptVersionsResult_1 = tslib_1.__importDefault(require("./DescribeAcceptVersionsResult"));
exports.DescribeAcceptVersionsResult = DescribeAcceptVersionsResult_1.default;
var DescribeAcceptVersionsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeAcceptVersionsByUserIdResult"));
exports.DescribeAcceptVersionsByUserIdResult = DescribeAcceptVersionsByUserIdResult_1.default;
var AcceptResult_1 = tslib_1.__importDefault(require("./AcceptResult"));
exports.AcceptResult = AcceptResult_1.default;
var AcceptByUserIdResult_1 = tslib_1.__importDefault(require("./AcceptByUserIdResult"));
exports.AcceptByUserIdResult = AcceptByUserIdResult_1.default;
var GetAcceptVersionResult_1 = tslib_1.__importDefault(require("./GetAcceptVersionResult"));
exports.GetAcceptVersionResult = GetAcceptVersionResult_1.default;
var GetAcceptVersionByUserIdResult_1 = tslib_1.__importDefault(require("./GetAcceptVersionByUserIdResult"));
exports.GetAcceptVersionByUserIdResult = GetAcceptVersionByUserIdResult_1.default;
var DeleteAcceptVersionResult_1 = tslib_1.__importDefault(require("./DeleteAcceptVersionResult"));
exports.DeleteAcceptVersionResult = DeleteAcceptVersionResult_1.default;
var DeleteAcceptVersionByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteAcceptVersionByUserIdResult"));
exports.DeleteAcceptVersionByUserIdResult = DeleteAcceptVersionByUserIdResult_1.default;
var CheckVersionResult_1 = tslib_1.__importDefault(require("./CheckVersionResult"));
exports.CheckVersionResult = CheckVersionResult_1.default;
var CheckVersionByUserIdResult_1 = tslib_1.__importDefault(require("./CheckVersionByUserIdResult"));
exports.CheckVersionByUserIdResult = CheckVersionByUserIdResult_1.default;
var CalculateSignatureResult_1 = tslib_1.__importDefault(require("./CalculateSignatureResult"));
exports.CalculateSignatureResult = CalculateSignatureResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentVersionMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentVersionMasterResult"));
exports.GetCurrentVersionMasterResult = GetCurrentVersionMasterResult_1.default;
var UpdateCurrentVersionMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentVersionMasterResult"));
exports.UpdateCurrentVersionMasterResult = UpdateCurrentVersionMasterResult_1.default;
var UpdateCurrentVersionMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentVersionMasterFromGitHubResult"));
exports.UpdateCurrentVersionMasterFromGitHubResult = UpdateCurrentVersionMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map