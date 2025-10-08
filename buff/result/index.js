"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentBuffMasterFromGitHubResult = exports.UpdateCurrentBuffMasterResult = exports.PreUpdateCurrentBuffMasterResult = exports.GetCurrentBuffMasterResult = exports.ExportMasterResult = exports.ApplyBuffByUserIdResult = exports.ApplyBuffResult = exports.DeleteBuffEntryModelMasterResult = exports.UpdateBuffEntryModelMasterResult = exports.GetBuffEntryModelMasterResult = exports.CreateBuffEntryModelMasterResult = exports.DescribeBuffEntryModelMastersResult = exports.GetBuffEntryModelResult = exports.DescribeBuffEntryModelsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var GetServiceVersionResult_1 = tslib_1.__importDefault(require("./GetServiceVersionResult"));
exports.GetServiceVersionResult = GetServiceVersionResult_1.default;
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
var DescribeBuffEntryModelsResult_1 = tslib_1.__importDefault(require("./DescribeBuffEntryModelsResult"));
exports.DescribeBuffEntryModelsResult = DescribeBuffEntryModelsResult_1.default;
var GetBuffEntryModelResult_1 = tslib_1.__importDefault(require("./GetBuffEntryModelResult"));
exports.GetBuffEntryModelResult = GetBuffEntryModelResult_1.default;
var DescribeBuffEntryModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeBuffEntryModelMastersResult"));
exports.DescribeBuffEntryModelMastersResult = DescribeBuffEntryModelMastersResult_1.default;
var CreateBuffEntryModelMasterResult_1 = tslib_1.__importDefault(require("./CreateBuffEntryModelMasterResult"));
exports.CreateBuffEntryModelMasterResult = CreateBuffEntryModelMasterResult_1.default;
var GetBuffEntryModelMasterResult_1 = tslib_1.__importDefault(require("./GetBuffEntryModelMasterResult"));
exports.GetBuffEntryModelMasterResult = GetBuffEntryModelMasterResult_1.default;
var UpdateBuffEntryModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateBuffEntryModelMasterResult"));
exports.UpdateBuffEntryModelMasterResult = UpdateBuffEntryModelMasterResult_1.default;
var DeleteBuffEntryModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteBuffEntryModelMasterResult"));
exports.DeleteBuffEntryModelMasterResult = DeleteBuffEntryModelMasterResult_1.default;
var ApplyBuffResult_1 = tslib_1.__importDefault(require("./ApplyBuffResult"));
exports.ApplyBuffResult = ApplyBuffResult_1.default;
var ApplyBuffByUserIdResult_1 = tslib_1.__importDefault(require("./ApplyBuffByUserIdResult"));
exports.ApplyBuffByUserIdResult = ApplyBuffByUserIdResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentBuffMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentBuffMasterResult"));
exports.GetCurrentBuffMasterResult = GetCurrentBuffMasterResult_1.default;
var PreUpdateCurrentBuffMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentBuffMasterResult"));
exports.PreUpdateCurrentBuffMasterResult = PreUpdateCurrentBuffMasterResult_1.default;
var UpdateCurrentBuffMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentBuffMasterResult"));
exports.UpdateCurrentBuffMasterResult = UpdateCurrentBuffMasterResult_1.default;
var UpdateCurrentBuffMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentBuffMasterFromGitHubResult"));
exports.UpdateCurrentBuffMasterFromGitHubResult = UpdateCurrentBuffMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map