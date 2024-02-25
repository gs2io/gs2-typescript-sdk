"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitVoteRequest = exports.VoteMultipleRequest = exports.VoteRequest = exports.GetBallotByUserIdRequest = exports.GetBallotRequest = exports.UpdateCurrentSeasonModelMasterFromGitHubRequest = exports.UpdateCurrentSeasonModelMasterRequest = exports.GetCurrentSeasonModelMasterRequest = exports.ExportMasterRequest = exports.GetSeasonModelRequest = exports.DescribeSeasonModelsRequest = exports.DeleteSeasonModelMasterRequest = exports.UpdateSeasonModelMasterRequest = exports.GetSeasonModelMasterRequest = exports.CreateSeasonModelMasterRequest = exports.DescribeSeasonModelMastersRequest = exports.DeleteMatchSessionRequest = exports.GetMatchSessionRequest = exports.CreateMatchSessionRequest = exports.DescribeMatchSessionsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeMatchSessionsRequest_1 = tslib_1.__importDefault(require("./DescribeMatchSessionsRequest"));
exports.DescribeMatchSessionsRequest = DescribeMatchSessionsRequest_1.default;
var CreateMatchSessionRequest_1 = tslib_1.__importDefault(require("./CreateMatchSessionRequest"));
exports.CreateMatchSessionRequest = CreateMatchSessionRequest_1.default;
var GetMatchSessionRequest_1 = tslib_1.__importDefault(require("./GetMatchSessionRequest"));
exports.GetMatchSessionRequest = GetMatchSessionRequest_1.default;
var DeleteMatchSessionRequest_1 = tslib_1.__importDefault(require("./DeleteMatchSessionRequest"));
exports.DeleteMatchSessionRequest = DeleteMatchSessionRequest_1.default;
var DescribeSeasonModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeSeasonModelMastersRequest"));
exports.DescribeSeasonModelMastersRequest = DescribeSeasonModelMastersRequest_1.default;
var CreateSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateSeasonModelMasterRequest"));
exports.CreateSeasonModelMasterRequest = CreateSeasonModelMasterRequest_1.default;
var GetSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./GetSeasonModelMasterRequest"));
exports.GetSeasonModelMasterRequest = GetSeasonModelMasterRequest_1.default;
var UpdateSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateSeasonModelMasterRequest"));
exports.UpdateSeasonModelMasterRequest = UpdateSeasonModelMasterRequest_1.default;
var DeleteSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteSeasonModelMasterRequest"));
exports.DeleteSeasonModelMasterRequest = DeleteSeasonModelMasterRequest_1.default;
var DescribeSeasonModelsRequest_1 = tslib_1.__importDefault(require("./DescribeSeasonModelsRequest"));
exports.DescribeSeasonModelsRequest = DescribeSeasonModelsRequest_1.default;
var GetSeasonModelRequest_1 = tslib_1.__importDefault(require("./GetSeasonModelRequest"));
exports.GetSeasonModelRequest = GetSeasonModelRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentSeasonModelMasterRequest"));
exports.GetCurrentSeasonModelMasterRequest = GetCurrentSeasonModelMasterRequest_1.default;
var UpdateCurrentSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentSeasonModelMasterRequest"));
exports.UpdateCurrentSeasonModelMasterRequest = UpdateCurrentSeasonModelMasterRequest_1.default;
var UpdateCurrentSeasonModelMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentSeasonModelMasterFromGitHubRequest"));
exports.UpdateCurrentSeasonModelMasterFromGitHubRequest = UpdateCurrentSeasonModelMasterFromGitHubRequest_1.default;
var GetBallotRequest_1 = tslib_1.__importDefault(require("./GetBallotRequest"));
exports.GetBallotRequest = GetBallotRequest_1.default;
var GetBallotByUserIdRequest_1 = tslib_1.__importDefault(require("./GetBallotByUserIdRequest"));
exports.GetBallotByUserIdRequest = GetBallotByUserIdRequest_1.default;
var VoteRequest_1 = tslib_1.__importDefault(require("./VoteRequest"));
exports.VoteRequest = VoteRequest_1.default;
var VoteMultipleRequest_1 = tslib_1.__importDefault(require("./VoteMultipleRequest"));
exports.VoteMultipleRequest = VoteMultipleRequest_1.default;
var CommitVoteRequest_1 = tslib_1.__importDefault(require("./CommitVoteRequest"));
exports.CommitVoteRequest = CommitVoteRequest_1.default;
//# sourceMappingURL=index.js.map