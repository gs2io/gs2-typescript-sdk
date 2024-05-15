"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentGuildMasterResult = exports.ExportMasterResult = exports.WithdrawalByUserIdResult = exports.WithdrawalResult = exports.GetJoinedGuildByUserIdResult = exports.GetJoinedGuildResult = exports.DescribeJoinedGuildsByUserIdResult = exports.DescribeJoinedGuildsResult = exports.SetMaximumCurrentMaximumMemberCountByStampSheetResult = exports.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult = exports.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult = exports.AssumeByUserIdResult = exports.AssumeResult = exports.SetMaximumCurrentMaximumMemberCountByGuildNameResult = exports.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult = exports.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult = exports.DeleteGuildByGuildNameResult = exports.DeleteGuildResult = exports.UpdateMemberRoleByGuildNameResult = exports.UpdateMemberRoleResult = exports.DeleteMemberByGuildNameResult = exports.DeleteMemberResult = exports.UpdateGuildByGuildNameResult = exports.UpdateGuildResult = exports.GetGuildByUserIdResult = exports.GetGuildResult = exports.CreateGuildByUserIdResult = exports.CreateGuildResult = exports.SearchGuildsByUserIdResult = exports.SearchGuildsResult = exports.GetGuildModelResult = exports.DescribeGuildModelsResult = exports.DeleteGuildModelMasterResult = exports.UpdateGuildModelMasterResult = exports.GetGuildModelMasterResult = exports.CreateGuildModelMasterResult = exports.DescribeGuildModelMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.DeleteRequestByUserIdResult = exports.DeleteRequestResult = exports.SendRequestByUserIdResult = exports.SendRequestResult = exports.GetSendRequestByUserIdResult = exports.GetSendRequestResult = exports.DescribeSendRequestsByUserIdResult = exports.DescribeSendRequestsResult = exports.RejectRequestByGuildNameResult = exports.RejectRequestResult = exports.AcceptRequestByGuildNameResult = exports.AcceptRequestResult = exports.GetReceiveRequestByGuildNameResult = exports.GetReceiveRequestResult = exports.DescribeReceiveRequestsByGuildNameResult = exports.DescribeReceiveRequestsResult = exports.UpdateCurrentGuildMasterFromGitHubResult = exports.UpdateCurrentGuildMasterResult = void 0;
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
var DescribeGuildModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeGuildModelMastersResult"));
exports.DescribeGuildModelMastersResult = DescribeGuildModelMastersResult_1.default;
var CreateGuildModelMasterResult_1 = tslib_1.__importDefault(require("./CreateGuildModelMasterResult"));
exports.CreateGuildModelMasterResult = CreateGuildModelMasterResult_1.default;
var GetGuildModelMasterResult_1 = tslib_1.__importDefault(require("./GetGuildModelMasterResult"));
exports.GetGuildModelMasterResult = GetGuildModelMasterResult_1.default;
var UpdateGuildModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateGuildModelMasterResult"));
exports.UpdateGuildModelMasterResult = UpdateGuildModelMasterResult_1.default;
var DeleteGuildModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteGuildModelMasterResult"));
exports.DeleteGuildModelMasterResult = DeleteGuildModelMasterResult_1.default;
var DescribeGuildModelsResult_1 = tslib_1.__importDefault(require("./DescribeGuildModelsResult"));
exports.DescribeGuildModelsResult = DescribeGuildModelsResult_1.default;
var GetGuildModelResult_1 = tslib_1.__importDefault(require("./GetGuildModelResult"));
exports.GetGuildModelResult = GetGuildModelResult_1.default;
var SearchGuildsResult_1 = tslib_1.__importDefault(require("./SearchGuildsResult"));
exports.SearchGuildsResult = SearchGuildsResult_1.default;
var SearchGuildsByUserIdResult_1 = tslib_1.__importDefault(require("./SearchGuildsByUserIdResult"));
exports.SearchGuildsByUserIdResult = SearchGuildsByUserIdResult_1.default;
var CreateGuildResult_1 = tslib_1.__importDefault(require("./CreateGuildResult"));
exports.CreateGuildResult = CreateGuildResult_1.default;
var CreateGuildByUserIdResult_1 = tslib_1.__importDefault(require("./CreateGuildByUserIdResult"));
exports.CreateGuildByUserIdResult = CreateGuildByUserIdResult_1.default;
var GetGuildResult_1 = tslib_1.__importDefault(require("./GetGuildResult"));
exports.GetGuildResult = GetGuildResult_1.default;
var GetGuildByUserIdResult_1 = tslib_1.__importDefault(require("./GetGuildByUserIdResult"));
exports.GetGuildByUserIdResult = GetGuildByUserIdResult_1.default;
var UpdateGuildResult_1 = tslib_1.__importDefault(require("./UpdateGuildResult"));
exports.UpdateGuildResult = UpdateGuildResult_1.default;
var UpdateGuildByGuildNameResult_1 = tslib_1.__importDefault(require("./UpdateGuildByGuildNameResult"));
exports.UpdateGuildByGuildNameResult = UpdateGuildByGuildNameResult_1.default;
var DeleteMemberResult_1 = tslib_1.__importDefault(require("./DeleteMemberResult"));
exports.DeleteMemberResult = DeleteMemberResult_1.default;
var DeleteMemberByGuildNameResult_1 = tslib_1.__importDefault(require("./DeleteMemberByGuildNameResult"));
exports.DeleteMemberByGuildNameResult = DeleteMemberByGuildNameResult_1.default;
var UpdateMemberRoleResult_1 = tslib_1.__importDefault(require("./UpdateMemberRoleResult"));
exports.UpdateMemberRoleResult = UpdateMemberRoleResult_1.default;
var UpdateMemberRoleByGuildNameResult_1 = tslib_1.__importDefault(require("./UpdateMemberRoleByGuildNameResult"));
exports.UpdateMemberRoleByGuildNameResult = UpdateMemberRoleByGuildNameResult_1.default;
var DeleteGuildResult_1 = tslib_1.__importDefault(require("./DeleteGuildResult"));
exports.DeleteGuildResult = DeleteGuildResult_1.default;
var DeleteGuildByGuildNameResult_1 = tslib_1.__importDefault(require("./DeleteGuildByGuildNameResult"));
exports.DeleteGuildByGuildNameResult = DeleteGuildByGuildNameResult_1.default;
var IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult_1 = tslib_1.__importDefault(require("./IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult"));
exports.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult = IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult_1.default;
var DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult_1 = tslib_1.__importDefault(require("./DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult"));
exports.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult = DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult_1.default;
var SetMaximumCurrentMaximumMemberCountByGuildNameResult_1 = tslib_1.__importDefault(require("./SetMaximumCurrentMaximumMemberCountByGuildNameResult"));
exports.SetMaximumCurrentMaximumMemberCountByGuildNameResult = SetMaximumCurrentMaximumMemberCountByGuildNameResult_1.default;
var AssumeResult_1 = tslib_1.__importDefault(require("./AssumeResult"));
exports.AssumeResult = AssumeResult_1.default;
var AssumeByUserIdResult_1 = tslib_1.__importDefault(require("./AssumeByUserIdResult"));
exports.AssumeByUserIdResult = AssumeByUserIdResult_1.default;
var IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult_1 = tslib_1.__importDefault(require("./IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult"));
exports.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult = IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult_1.default;
var DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult_1 = tslib_1.__importDefault(require("./DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult"));
exports.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult = DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult_1.default;
var SetMaximumCurrentMaximumMemberCountByStampSheetResult_1 = tslib_1.__importDefault(require("./SetMaximumCurrentMaximumMemberCountByStampSheetResult"));
exports.SetMaximumCurrentMaximumMemberCountByStampSheetResult = SetMaximumCurrentMaximumMemberCountByStampSheetResult_1.default;
var DescribeJoinedGuildsResult_1 = tslib_1.__importDefault(require("./DescribeJoinedGuildsResult"));
exports.DescribeJoinedGuildsResult = DescribeJoinedGuildsResult_1.default;
var DescribeJoinedGuildsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeJoinedGuildsByUserIdResult"));
exports.DescribeJoinedGuildsByUserIdResult = DescribeJoinedGuildsByUserIdResult_1.default;
var GetJoinedGuildResult_1 = tslib_1.__importDefault(require("./GetJoinedGuildResult"));
exports.GetJoinedGuildResult = GetJoinedGuildResult_1.default;
var GetJoinedGuildByUserIdResult_1 = tslib_1.__importDefault(require("./GetJoinedGuildByUserIdResult"));
exports.GetJoinedGuildByUserIdResult = GetJoinedGuildByUserIdResult_1.default;
var WithdrawalResult_1 = tslib_1.__importDefault(require("./WithdrawalResult"));
exports.WithdrawalResult = WithdrawalResult_1.default;
var WithdrawalByUserIdResult_1 = tslib_1.__importDefault(require("./WithdrawalByUserIdResult"));
exports.WithdrawalByUserIdResult = WithdrawalByUserIdResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentGuildMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentGuildMasterResult"));
exports.GetCurrentGuildMasterResult = GetCurrentGuildMasterResult_1.default;
var UpdateCurrentGuildMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentGuildMasterResult"));
exports.UpdateCurrentGuildMasterResult = UpdateCurrentGuildMasterResult_1.default;
var UpdateCurrentGuildMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentGuildMasterFromGitHubResult"));
exports.UpdateCurrentGuildMasterFromGitHubResult = UpdateCurrentGuildMasterFromGitHubResult_1.default;
var DescribeReceiveRequestsResult_1 = tslib_1.__importDefault(require("./DescribeReceiveRequestsResult"));
exports.DescribeReceiveRequestsResult = DescribeReceiveRequestsResult_1.default;
var DescribeReceiveRequestsByGuildNameResult_1 = tslib_1.__importDefault(require("./DescribeReceiveRequestsByGuildNameResult"));
exports.DescribeReceiveRequestsByGuildNameResult = DescribeReceiveRequestsByGuildNameResult_1.default;
var GetReceiveRequestResult_1 = tslib_1.__importDefault(require("./GetReceiveRequestResult"));
exports.GetReceiveRequestResult = GetReceiveRequestResult_1.default;
var GetReceiveRequestByGuildNameResult_1 = tslib_1.__importDefault(require("./GetReceiveRequestByGuildNameResult"));
exports.GetReceiveRequestByGuildNameResult = GetReceiveRequestByGuildNameResult_1.default;
var AcceptRequestResult_1 = tslib_1.__importDefault(require("./AcceptRequestResult"));
exports.AcceptRequestResult = AcceptRequestResult_1.default;
var AcceptRequestByGuildNameResult_1 = tslib_1.__importDefault(require("./AcceptRequestByGuildNameResult"));
exports.AcceptRequestByGuildNameResult = AcceptRequestByGuildNameResult_1.default;
var RejectRequestResult_1 = tslib_1.__importDefault(require("./RejectRequestResult"));
exports.RejectRequestResult = RejectRequestResult_1.default;
var RejectRequestByGuildNameResult_1 = tslib_1.__importDefault(require("./RejectRequestByGuildNameResult"));
exports.RejectRequestByGuildNameResult = RejectRequestByGuildNameResult_1.default;
var DescribeSendRequestsResult_1 = tslib_1.__importDefault(require("./DescribeSendRequestsResult"));
exports.DescribeSendRequestsResult = DescribeSendRequestsResult_1.default;
var DescribeSendRequestsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSendRequestsByUserIdResult"));
exports.DescribeSendRequestsByUserIdResult = DescribeSendRequestsByUserIdResult_1.default;
var GetSendRequestResult_1 = tslib_1.__importDefault(require("./GetSendRequestResult"));
exports.GetSendRequestResult = GetSendRequestResult_1.default;
var GetSendRequestByUserIdResult_1 = tslib_1.__importDefault(require("./GetSendRequestByUserIdResult"));
exports.GetSendRequestByUserIdResult = GetSendRequestByUserIdResult_1.default;
var SendRequestResult_1 = tslib_1.__importDefault(require("./SendRequestResult"));
exports.SendRequestResult = SendRequestResult_1.default;
var SendRequestByUserIdResult_1 = tslib_1.__importDefault(require("./SendRequestByUserIdResult"));
exports.SendRequestByUserIdResult = SendRequestByUserIdResult_1.default;
var DeleteRequestResult_1 = tslib_1.__importDefault(require("./DeleteRequestResult"));
exports.DeleteRequestResult = DeleteRequestResult_1.default;
var DeleteRequestByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteRequestByUserIdResult"));
exports.DeleteRequestByUserIdResult = DeleteRequestByUserIdResult_1.default;
//# sourceMappingURL=index.js.map