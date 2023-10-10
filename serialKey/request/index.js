"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentCampaignMasterFromGitHubRequest = exports.UpdateCurrentCampaignMasterRequest = exports.GetCurrentCampaignMasterRequest = exports.ExportMasterRequest = exports.DeleteCampaignModelMasterRequest = exports.UpdateCampaignModelMasterRequest = exports.GetCampaignModelMasterRequest = exports.CreateCampaignModelMasterRequest = exports.DescribeCampaignModelMastersRequest = exports.GetCampaignModelRequest = exports.DescribeCampaignModelsRequest = exports.RevertUseByStampSheetRequest = exports.UseByStampTaskRequest = exports.RevertUseByUserIdRequest = exports.UseByUserIdRequest = exports.UseRequest = exports.GetSerialKeyRequest = exports.DownloadSerialCodesRequest = exports.DescribeSerialKeysRequest = exports.IssueRequest = exports.GetIssueJobRequest = exports.DescribeIssueJobsRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeIssueJobsRequest_1 = tslib_1.__importDefault(require("./DescribeIssueJobsRequest"));
exports.DescribeIssueJobsRequest = DescribeIssueJobsRequest_1.default;
var GetIssueJobRequest_1 = tslib_1.__importDefault(require("./GetIssueJobRequest"));
exports.GetIssueJobRequest = GetIssueJobRequest_1.default;
var IssueRequest_1 = tslib_1.__importDefault(require("./IssueRequest"));
exports.IssueRequest = IssueRequest_1.default;
var DescribeSerialKeysRequest_1 = tslib_1.__importDefault(require("./DescribeSerialKeysRequest"));
exports.DescribeSerialKeysRequest = DescribeSerialKeysRequest_1.default;
var DownloadSerialCodesRequest_1 = tslib_1.__importDefault(require("./DownloadSerialCodesRequest"));
exports.DownloadSerialCodesRequest = DownloadSerialCodesRequest_1.default;
var GetSerialKeyRequest_1 = tslib_1.__importDefault(require("./GetSerialKeyRequest"));
exports.GetSerialKeyRequest = GetSerialKeyRequest_1.default;
var UseRequest_1 = tslib_1.__importDefault(require("./UseRequest"));
exports.UseRequest = UseRequest_1.default;
var UseByUserIdRequest_1 = tslib_1.__importDefault(require("./UseByUserIdRequest"));
exports.UseByUserIdRequest = UseByUserIdRequest_1.default;
var RevertUseByUserIdRequest_1 = tslib_1.__importDefault(require("./RevertUseByUserIdRequest"));
exports.RevertUseByUserIdRequest = RevertUseByUserIdRequest_1.default;
var UseByStampTaskRequest_1 = tslib_1.__importDefault(require("./UseByStampTaskRequest"));
exports.UseByStampTaskRequest = UseByStampTaskRequest_1.default;
var RevertUseByStampSheetRequest_1 = tslib_1.__importDefault(require("./RevertUseByStampSheetRequest"));
exports.RevertUseByStampSheetRequest = RevertUseByStampSheetRequest_1.default;
var DescribeCampaignModelsRequest_1 = tslib_1.__importDefault(require("./DescribeCampaignModelsRequest"));
exports.DescribeCampaignModelsRequest = DescribeCampaignModelsRequest_1.default;
var GetCampaignModelRequest_1 = tslib_1.__importDefault(require("./GetCampaignModelRequest"));
exports.GetCampaignModelRequest = GetCampaignModelRequest_1.default;
var DescribeCampaignModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeCampaignModelMastersRequest"));
exports.DescribeCampaignModelMastersRequest = DescribeCampaignModelMastersRequest_1.default;
var CreateCampaignModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateCampaignModelMasterRequest"));
exports.CreateCampaignModelMasterRequest = CreateCampaignModelMasterRequest_1.default;
var GetCampaignModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCampaignModelMasterRequest"));
exports.GetCampaignModelMasterRequest = GetCampaignModelMasterRequest_1.default;
var UpdateCampaignModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCampaignModelMasterRequest"));
exports.UpdateCampaignModelMasterRequest = UpdateCampaignModelMasterRequest_1.default;
var DeleteCampaignModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteCampaignModelMasterRequest"));
exports.DeleteCampaignModelMasterRequest = DeleteCampaignModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentCampaignMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentCampaignMasterRequest"));
exports.GetCurrentCampaignMasterRequest = GetCurrentCampaignMasterRequest_1.default;
var UpdateCurrentCampaignMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentCampaignMasterRequest"));
exports.UpdateCurrentCampaignMasterRequest = UpdateCurrentCampaignMasterRequest_1.default;
var UpdateCurrentCampaignMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentCampaignMasterFromGitHubRequest"));
exports.UpdateCurrentCampaignMasterFromGitHubRequest = UpdateCurrentCampaignMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map