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
import DescribeNamespacesResult from "./DescribeNamespacesResult"
import CreateNamespaceResult from "./CreateNamespaceResult"
import GetNamespaceStatusResult from "./GetNamespaceStatusResult"
import GetNamespaceResult from "./GetNamespaceResult"
import UpdateNamespaceResult from "./UpdateNamespaceResult"
import DeleteNamespaceResult from "./DeleteNamespaceResult"
import DumpUserDataByUserIdResult from "./DumpUserDataByUserIdResult"
import CheckDumpUserDataByUserIdResult from "./CheckDumpUserDataByUserIdResult"
import CleanUserDataByUserIdResult from "./CleanUserDataByUserIdResult"
import CheckCleanUserDataByUserIdResult from "./CheckCleanUserDataByUserIdResult"
import PrepareImportUserDataByUserIdResult from "./PrepareImportUserDataByUserIdResult"
import ImportUserDataByUserIdResult from "./ImportUserDataByUserIdResult"
import CheckImportUserDataByUserIdResult from "./CheckImportUserDataByUserIdResult"
import DescribeGuildModelMastersResult from "./DescribeGuildModelMastersResult"
import CreateGuildModelMasterResult from "./CreateGuildModelMasterResult"
import GetGuildModelMasterResult from "./GetGuildModelMasterResult"
import UpdateGuildModelMasterResult from "./UpdateGuildModelMasterResult"
import DeleteGuildModelMasterResult from "./DeleteGuildModelMasterResult"
import DescribeGuildModelsResult from "./DescribeGuildModelsResult"
import GetGuildModelResult from "./GetGuildModelResult"
import SearchGuildsResult from "./SearchGuildsResult"
import SearchGuildsByUserIdResult from "./SearchGuildsByUserIdResult"
import CreateGuildResult from "./CreateGuildResult"
import CreateGuildByUserIdResult from "./CreateGuildByUserIdResult"
import GetGuildResult from "./GetGuildResult"
import GetGuildByUserIdResult from "./GetGuildByUserIdResult"
import UpdateGuildResult from "./UpdateGuildResult"
import UpdateGuildByGuildNameResult from "./UpdateGuildByGuildNameResult"
import DeleteMemberResult from "./DeleteMemberResult"
import DeleteMemberByGuildNameResult from "./DeleteMemberByGuildNameResult"
import UpdateMemberRoleResult from "./UpdateMemberRoleResult"
import UpdateMemberRoleByGuildNameResult from "./UpdateMemberRoleByGuildNameResult"
import BatchUpdateMemberRoleResult from "./BatchUpdateMemberRoleResult"
import BatchUpdateMemberRoleByGuildNameResult from "./BatchUpdateMemberRoleByGuildNameResult"
import DeleteGuildResult from "./DeleteGuildResult"
import DeleteGuildByGuildNameResult from "./DeleteGuildByGuildNameResult"
import IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult from "./IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult"
import DecreaseMaximumCurrentMaximumMemberCountResult from "./DecreaseMaximumCurrentMaximumMemberCountResult"
import DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult from "./DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult"
import VerifyCurrentMaximumMemberCountResult from "./VerifyCurrentMaximumMemberCountResult"
import VerifyCurrentMaximumMemberCountByGuildNameResult from "./VerifyCurrentMaximumMemberCountByGuildNameResult"
import VerifyIncludeMemberResult from "./VerifyIncludeMemberResult"
import VerifyIncludeMemberByUserIdResult from "./VerifyIncludeMemberByUserIdResult"
import SetMaximumCurrentMaximumMemberCountByGuildNameResult from "./SetMaximumCurrentMaximumMemberCountByGuildNameResult"
import AssumeResult from "./AssumeResult"
import AssumeByUserIdResult from "./AssumeByUserIdResult"
import IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult from "./IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult"
import DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult from "./DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult"
import SetMaximumCurrentMaximumMemberCountByStampSheetResult from "./SetMaximumCurrentMaximumMemberCountByStampSheetResult"
import VerifyCurrentMaximumMemberCountByStampTaskResult from "./VerifyCurrentMaximumMemberCountByStampTaskResult"
import VerifyIncludeMemberByStampTaskResult from "./VerifyIncludeMemberByStampTaskResult"
import DescribeJoinedGuildsResult from "./DescribeJoinedGuildsResult"
import DescribeJoinedGuildsByUserIdResult from "./DescribeJoinedGuildsByUserIdResult"
import GetJoinedGuildResult from "./GetJoinedGuildResult"
import GetJoinedGuildByUserIdResult from "./GetJoinedGuildByUserIdResult"
import WithdrawalResult from "./WithdrawalResult"
import WithdrawalByUserIdResult from "./WithdrawalByUserIdResult"
import GetLastGuildMasterActivityResult from "./GetLastGuildMasterActivityResult"
import GetLastGuildMasterActivityByGuildNameResult from "./GetLastGuildMasterActivityByGuildNameResult"
import PromoteSeniorMemberResult from "./PromoteSeniorMemberResult"
import PromoteSeniorMemberByGuildNameResult from "./PromoteSeniorMemberByGuildNameResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentGuildMasterResult from "./GetCurrentGuildMasterResult"
import UpdateCurrentGuildMasterResult from "./UpdateCurrentGuildMasterResult"
import UpdateCurrentGuildMasterFromGitHubResult from "./UpdateCurrentGuildMasterFromGitHubResult"
import DescribeReceiveRequestsResult from "./DescribeReceiveRequestsResult"
import DescribeReceiveRequestsByGuildNameResult from "./DescribeReceiveRequestsByGuildNameResult"
import GetReceiveRequestResult from "./GetReceiveRequestResult"
import GetReceiveRequestByGuildNameResult from "./GetReceiveRequestByGuildNameResult"
import AcceptRequestResult from "./AcceptRequestResult"
import AcceptRequestByGuildNameResult from "./AcceptRequestByGuildNameResult"
import RejectRequestResult from "./RejectRequestResult"
import RejectRequestByGuildNameResult from "./RejectRequestByGuildNameResult"
import DescribeSendRequestsResult from "./DescribeSendRequestsResult"
import DescribeSendRequestsByUserIdResult from "./DescribeSendRequestsByUserIdResult"
import GetSendRequestResult from "./GetSendRequestResult"
import GetSendRequestByUserIdResult from "./GetSendRequestByUserIdResult"
import SendRequestResult from "./SendRequestResult"
import SendRequestByUserIdResult from "./SendRequestByUserIdResult"
import DeleteRequestResult from "./DeleteRequestResult"
import DeleteRequestByUserIdResult from "./DeleteRequestByUserIdResult"
import DescribeIgnoreUsersResult from "./DescribeIgnoreUsersResult"
import DescribeIgnoreUsersByGuildNameResult from "./DescribeIgnoreUsersByGuildNameResult"
import GetIgnoreUserResult from "./GetIgnoreUserResult"
import GetIgnoreUserByGuildNameResult from "./GetIgnoreUserByGuildNameResult"
import AddIgnoreUserResult from "./AddIgnoreUserResult"
import AddIgnoreUserByGuildNameResult from "./AddIgnoreUserByGuildNameResult"
import DeleteIgnoreUserResult from "./DeleteIgnoreUserResult"
import DeleteIgnoreUserByGuildNameResult from "./DeleteIgnoreUserByGuildNameResult"

export {
    DescribeNamespacesResult,
    CreateNamespaceResult,
    GetNamespaceStatusResult,
    GetNamespaceResult,
    UpdateNamespaceResult,
    DeleteNamespaceResult,
    DumpUserDataByUserIdResult,
    CheckDumpUserDataByUserIdResult,
    CleanUserDataByUserIdResult,
    CheckCleanUserDataByUserIdResult,
    PrepareImportUserDataByUserIdResult,
    ImportUserDataByUserIdResult,
    CheckImportUserDataByUserIdResult,
    DescribeGuildModelMastersResult,
    CreateGuildModelMasterResult,
    GetGuildModelMasterResult,
    UpdateGuildModelMasterResult,
    DeleteGuildModelMasterResult,
    DescribeGuildModelsResult,
    GetGuildModelResult,
    SearchGuildsResult,
    SearchGuildsByUserIdResult,
    CreateGuildResult,
    CreateGuildByUserIdResult,
    GetGuildResult,
    GetGuildByUserIdResult,
    UpdateGuildResult,
    UpdateGuildByGuildNameResult,
    DeleteMemberResult,
    DeleteMemberByGuildNameResult,
    UpdateMemberRoleResult,
    UpdateMemberRoleByGuildNameResult,
    BatchUpdateMemberRoleResult,
    BatchUpdateMemberRoleByGuildNameResult,
    DeleteGuildResult,
    DeleteGuildByGuildNameResult,
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult,
    DecreaseMaximumCurrentMaximumMemberCountResult,
    DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult,
    VerifyCurrentMaximumMemberCountResult,
    VerifyCurrentMaximumMemberCountByGuildNameResult,
    VerifyIncludeMemberResult,
    VerifyIncludeMemberByUserIdResult,
    SetMaximumCurrentMaximumMemberCountByGuildNameResult,
    AssumeResult,
    AssumeByUserIdResult,
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult,
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult,
    SetMaximumCurrentMaximumMemberCountByStampSheetResult,
    VerifyCurrentMaximumMemberCountByStampTaskResult,
    VerifyIncludeMemberByStampTaskResult,
    DescribeJoinedGuildsResult,
    DescribeJoinedGuildsByUserIdResult,
    GetJoinedGuildResult,
    GetJoinedGuildByUserIdResult,
    WithdrawalResult,
    WithdrawalByUserIdResult,
    GetLastGuildMasterActivityResult,
    GetLastGuildMasterActivityByGuildNameResult,
    PromoteSeniorMemberResult,
    PromoteSeniorMemberByGuildNameResult,
    ExportMasterResult,
    GetCurrentGuildMasterResult,
    UpdateCurrentGuildMasterResult,
    UpdateCurrentGuildMasterFromGitHubResult,
    DescribeReceiveRequestsResult,
    DescribeReceiveRequestsByGuildNameResult,
    GetReceiveRequestResult,
    GetReceiveRequestByGuildNameResult,
    AcceptRequestResult,
    AcceptRequestByGuildNameResult,
    RejectRequestResult,
    RejectRequestByGuildNameResult,
    DescribeSendRequestsResult,
    DescribeSendRequestsByUserIdResult,
    GetSendRequestResult,
    GetSendRequestByUserIdResult,
    SendRequestResult,
    SendRequestByUserIdResult,
    DeleteRequestResult,
    DeleteRequestByUserIdResult,
    DescribeIgnoreUsersResult,
    DescribeIgnoreUsersByGuildNameResult,
    GetIgnoreUserResult,
    GetIgnoreUserByGuildNameResult,
    AddIgnoreUserResult,
    AddIgnoreUserByGuildNameResult,
    DeleteIgnoreUserResult,
    DeleteIgnoreUserByGuildNameResult,
};