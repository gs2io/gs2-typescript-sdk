"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitVoteResult = exports.VoteMultipleResult = exports.VoteResult = exports.GetBallotByUserIdResult = exports.GetBallotResult = exports.UpdateCurrentSeasonModelMasterFromGitHubResult = exports.UpdateCurrentSeasonModelMasterResult = exports.PreUpdateCurrentSeasonModelMasterResult = exports.GetCurrentSeasonModelMasterResult = exports.ExportMasterResult = exports.GetSeasonModelResult = exports.DescribeSeasonModelsResult = exports.DeleteSeasonModelMasterResult = exports.UpdateSeasonModelMasterResult = exports.GetSeasonModelMasterResult = exports.CreateSeasonModelMasterResult = exports.DescribeSeasonModelMastersResult = exports.DeleteMatchSessionResult = exports.GetMatchSessionResult = exports.CreateMatchSessionResult = exports.DescribeMatchSessionsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeMatchSessionsResult_1 = tslib_1.__importDefault(require("./DescribeMatchSessionsResult"));
exports.DescribeMatchSessionsResult = DescribeMatchSessionsResult_1.default;
var CreateMatchSessionResult_1 = tslib_1.__importDefault(require("./CreateMatchSessionResult"));
exports.CreateMatchSessionResult = CreateMatchSessionResult_1.default;
var GetMatchSessionResult_1 = tslib_1.__importDefault(require("./GetMatchSessionResult"));
exports.GetMatchSessionResult = GetMatchSessionResult_1.default;
var DeleteMatchSessionResult_1 = tslib_1.__importDefault(require("./DeleteMatchSessionResult"));
exports.DeleteMatchSessionResult = DeleteMatchSessionResult_1.default;
var DescribeSeasonModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeSeasonModelMastersResult"));
exports.DescribeSeasonModelMastersResult = DescribeSeasonModelMastersResult_1.default;
var CreateSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./CreateSeasonModelMasterResult"));
exports.CreateSeasonModelMasterResult = CreateSeasonModelMasterResult_1.default;
var GetSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./GetSeasonModelMasterResult"));
exports.GetSeasonModelMasterResult = GetSeasonModelMasterResult_1.default;
var UpdateSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateSeasonModelMasterResult"));
exports.UpdateSeasonModelMasterResult = UpdateSeasonModelMasterResult_1.default;
var DeleteSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteSeasonModelMasterResult"));
exports.DeleteSeasonModelMasterResult = DeleteSeasonModelMasterResult_1.default;
var DescribeSeasonModelsResult_1 = tslib_1.__importDefault(require("./DescribeSeasonModelsResult"));
exports.DescribeSeasonModelsResult = DescribeSeasonModelsResult_1.default;
var GetSeasonModelResult_1 = tslib_1.__importDefault(require("./GetSeasonModelResult"));
exports.GetSeasonModelResult = GetSeasonModelResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentSeasonModelMasterResult"));
exports.GetCurrentSeasonModelMasterResult = GetCurrentSeasonModelMasterResult_1.default;
var PreUpdateCurrentSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentSeasonModelMasterResult"));
exports.PreUpdateCurrentSeasonModelMasterResult = PreUpdateCurrentSeasonModelMasterResult_1.default;
var UpdateCurrentSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentSeasonModelMasterResult"));
exports.UpdateCurrentSeasonModelMasterResult = UpdateCurrentSeasonModelMasterResult_1.default;
var UpdateCurrentSeasonModelMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentSeasonModelMasterFromGitHubResult"));
exports.UpdateCurrentSeasonModelMasterFromGitHubResult = UpdateCurrentSeasonModelMasterFromGitHubResult_1.default;
var GetBallotResult_1 = tslib_1.__importDefault(require("./GetBallotResult"));
exports.GetBallotResult = GetBallotResult_1.default;
var GetBallotByUserIdResult_1 = tslib_1.__importDefault(require("./GetBallotByUserIdResult"));
exports.GetBallotByUserIdResult = GetBallotByUserIdResult_1.default;
var VoteResult_1 = tslib_1.__importDefault(require("./VoteResult"));
exports.VoteResult = VoteResult_1.default;
var VoteMultipleResult_1 = tslib_1.__importDefault(require("./VoteMultipleResult"));
exports.VoteMultipleResult = VoteMultipleResult_1.default;
var CommitVoteResult_1 = tslib_1.__importDefault(require("./CommitVoteResult"));
exports.CommitVoteResult = CommitVoteResult_1.default;
//# sourceMappingURL=index.js.map