"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentCampaignMasterFromGitHubResult = exports.UpdateCurrentCampaignMasterResult = exports.GetCurrentCampaignMasterResult = exports.ExportMasterResult = exports.DeleteCampaignModelMasterResult = exports.UpdateCampaignModelMasterResult = exports.GetCampaignModelMasterResult = exports.CreateCampaignModelMasterResult = exports.DescribeCampaignModelMastersResult = exports.GetCampaignModelResult = exports.DescribeCampaignModelsResult = exports.RevertUseByStampSheetResult = exports.UseByStampTaskResult = exports.RevertUseByUserIdResult = exports.UseByUserIdResult = exports.UseResult = exports.GetSerialKeyResult = exports.DownloadSerialCodesResult = exports.DescribeSerialKeysResult = exports.IssueResult = exports.GetIssueJobResult = exports.DescribeIssueJobsResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeIssueJobsResult_1 = tslib_1.__importDefault(require("./DescribeIssueJobsResult"));
exports.DescribeIssueJobsResult = DescribeIssueJobsResult_1.default;
var GetIssueJobResult_1 = tslib_1.__importDefault(require("./GetIssueJobResult"));
exports.GetIssueJobResult = GetIssueJobResult_1.default;
var IssueResult_1 = tslib_1.__importDefault(require("./IssueResult"));
exports.IssueResult = IssueResult_1.default;
var DescribeSerialKeysResult_1 = tslib_1.__importDefault(require("./DescribeSerialKeysResult"));
exports.DescribeSerialKeysResult = DescribeSerialKeysResult_1.default;
var DownloadSerialCodesResult_1 = tslib_1.__importDefault(require("./DownloadSerialCodesResult"));
exports.DownloadSerialCodesResult = DownloadSerialCodesResult_1.default;
var GetSerialKeyResult_1 = tslib_1.__importDefault(require("./GetSerialKeyResult"));
exports.GetSerialKeyResult = GetSerialKeyResult_1.default;
var UseResult_1 = tslib_1.__importDefault(require("./UseResult"));
exports.UseResult = UseResult_1.default;
var UseByUserIdResult_1 = tslib_1.__importDefault(require("./UseByUserIdResult"));
exports.UseByUserIdResult = UseByUserIdResult_1.default;
var RevertUseByUserIdResult_1 = tslib_1.__importDefault(require("./RevertUseByUserIdResult"));
exports.RevertUseByUserIdResult = RevertUseByUserIdResult_1.default;
var UseByStampTaskResult_1 = tslib_1.__importDefault(require("./UseByStampTaskResult"));
exports.UseByStampTaskResult = UseByStampTaskResult_1.default;
var RevertUseByStampSheetResult_1 = tslib_1.__importDefault(require("./RevertUseByStampSheetResult"));
exports.RevertUseByStampSheetResult = RevertUseByStampSheetResult_1.default;
var DescribeCampaignModelsResult_1 = tslib_1.__importDefault(require("./DescribeCampaignModelsResult"));
exports.DescribeCampaignModelsResult = DescribeCampaignModelsResult_1.default;
var GetCampaignModelResult_1 = tslib_1.__importDefault(require("./GetCampaignModelResult"));
exports.GetCampaignModelResult = GetCampaignModelResult_1.default;
var DescribeCampaignModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeCampaignModelMastersResult"));
exports.DescribeCampaignModelMastersResult = DescribeCampaignModelMastersResult_1.default;
var CreateCampaignModelMasterResult_1 = tslib_1.__importDefault(require("./CreateCampaignModelMasterResult"));
exports.CreateCampaignModelMasterResult = CreateCampaignModelMasterResult_1.default;
var GetCampaignModelMasterResult_1 = tslib_1.__importDefault(require("./GetCampaignModelMasterResult"));
exports.GetCampaignModelMasterResult = GetCampaignModelMasterResult_1.default;
var UpdateCampaignModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCampaignModelMasterResult"));
exports.UpdateCampaignModelMasterResult = UpdateCampaignModelMasterResult_1.default;
var DeleteCampaignModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteCampaignModelMasterResult"));
exports.DeleteCampaignModelMasterResult = DeleteCampaignModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentCampaignMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentCampaignMasterResult"));
exports.GetCurrentCampaignMasterResult = GetCurrentCampaignMasterResult_1.default;
var UpdateCurrentCampaignMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentCampaignMasterResult"));
exports.UpdateCurrentCampaignMasterResult = UpdateCurrentCampaignMasterResult_1.default;
var UpdateCurrentCampaignMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentCampaignMasterFromGitHubResult"));
exports.UpdateCurrentCampaignMasterFromGitHubResult = UpdateCurrentCampaignMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map