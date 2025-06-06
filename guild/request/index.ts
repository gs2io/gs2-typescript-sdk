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
import DescribeNamespacesRequest from "./DescribeNamespacesRequest"
import CreateNamespaceRequest from "./CreateNamespaceRequest"
import GetNamespaceStatusRequest from "./GetNamespaceStatusRequest"
import GetNamespaceRequest from "./GetNamespaceRequest"
import UpdateNamespaceRequest from "./UpdateNamespaceRequest"
import DeleteNamespaceRequest from "./DeleteNamespaceRequest"
import GetServiceVersionRequest from "./GetServiceVersionRequest"
import DumpUserDataByUserIdRequest from "./DumpUserDataByUserIdRequest"
import CheckDumpUserDataByUserIdRequest from "./CheckDumpUserDataByUserIdRequest"
import CleanUserDataByUserIdRequest from "./CleanUserDataByUserIdRequest"
import CheckCleanUserDataByUserIdRequest from "./CheckCleanUserDataByUserIdRequest"
import PrepareImportUserDataByUserIdRequest from "./PrepareImportUserDataByUserIdRequest"
import ImportUserDataByUserIdRequest from "./ImportUserDataByUserIdRequest"
import CheckImportUserDataByUserIdRequest from "./CheckImportUserDataByUserIdRequest"
import DescribeGuildModelMastersRequest from "./DescribeGuildModelMastersRequest"
import CreateGuildModelMasterRequest from "./CreateGuildModelMasterRequest"
import GetGuildModelMasterRequest from "./GetGuildModelMasterRequest"
import UpdateGuildModelMasterRequest from "./UpdateGuildModelMasterRequest"
import DeleteGuildModelMasterRequest from "./DeleteGuildModelMasterRequest"
import DescribeGuildModelsRequest from "./DescribeGuildModelsRequest"
import GetGuildModelRequest from "./GetGuildModelRequest"
import SearchGuildsRequest from "./SearchGuildsRequest"
import SearchGuildsByUserIdRequest from "./SearchGuildsByUserIdRequest"
import CreateGuildRequest from "./CreateGuildRequest"
import CreateGuildByUserIdRequest from "./CreateGuildByUserIdRequest"
import GetGuildRequest from "./GetGuildRequest"
import GetGuildByUserIdRequest from "./GetGuildByUserIdRequest"
import UpdateGuildRequest from "./UpdateGuildRequest"
import UpdateGuildByGuildNameRequest from "./UpdateGuildByGuildNameRequest"
import DeleteMemberRequest from "./DeleteMemberRequest"
import DeleteMemberByGuildNameRequest from "./DeleteMemberByGuildNameRequest"
import UpdateMemberRoleRequest from "./UpdateMemberRoleRequest"
import UpdateMemberRoleByGuildNameRequest from "./UpdateMemberRoleByGuildNameRequest"
import BatchUpdateMemberRoleRequest from "./BatchUpdateMemberRoleRequest"
import BatchUpdateMemberRoleByGuildNameRequest from "./BatchUpdateMemberRoleByGuildNameRequest"
import DeleteGuildRequest from "./DeleteGuildRequest"
import DeleteGuildByGuildNameRequest from "./DeleteGuildByGuildNameRequest"
import IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest from "./IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest"
import DecreaseMaximumCurrentMaximumMemberCountRequest from "./DecreaseMaximumCurrentMaximumMemberCountRequest"
import DecreaseMaximumCurrentMaximumMemberCountByGuildNameRequest from "./DecreaseMaximumCurrentMaximumMemberCountByGuildNameRequest"
import VerifyCurrentMaximumMemberCountRequest from "./VerifyCurrentMaximumMemberCountRequest"
import VerifyCurrentMaximumMemberCountByGuildNameRequest from "./VerifyCurrentMaximumMemberCountByGuildNameRequest"
import VerifyIncludeMemberRequest from "./VerifyIncludeMemberRequest"
import VerifyIncludeMemberByUserIdRequest from "./VerifyIncludeMemberByUserIdRequest"
import SetMaximumCurrentMaximumMemberCountByGuildNameRequest from "./SetMaximumCurrentMaximumMemberCountByGuildNameRequest"
import AssumeRequest from "./AssumeRequest"
import AssumeByUserIdRequest from "./AssumeByUserIdRequest"
import IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest from "./IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest"
import DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest from "./DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest"
import SetMaximumCurrentMaximumMemberCountByStampSheetRequest from "./SetMaximumCurrentMaximumMemberCountByStampSheetRequest"
import VerifyCurrentMaximumMemberCountByStampTaskRequest from "./VerifyCurrentMaximumMemberCountByStampTaskRequest"
import VerifyIncludeMemberByStampTaskRequest from "./VerifyIncludeMemberByStampTaskRequest"
import DescribeJoinedGuildsRequest from "./DescribeJoinedGuildsRequest"
import DescribeJoinedGuildsByUserIdRequest from "./DescribeJoinedGuildsByUserIdRequest"
import GetJoinedGuildRequest from "./GetJoinedGuildRequest"
import GetJoinedGuildByUserIdRequest from "./GetJoinedGuildByUserIdRequest"
import UpdateMemberMetadataRequest from "./UpdateMemberMetadataRequest"
import UpdateMemberMetadataByUserIdRequest from "./UpdateMemberMetadataByUserIdRequest"
import WithdrawalRequest from "./WithdrawalRequest"
import WithdrawalByUserIdRequest from "./WithdrawalByUserIdRequest"
import GetLastGuildMasterActivityRequest from "./GetLastGuildMasterActivityRequest"
import GetLastGuildMasterActivityByGuildNameRequest from "./GetLastGuildMasterActivityByGuildNameRequest"
import PromoteSeniorMemberRequest from "./PromoteSeniorMemberRequest"
import PromoteSeniorMemberByGuildNameRequest from "./PromoteSeniorMemberByGuildNameRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentGuildMasterRequest from "./GetCurrentGuildMasterRequest"
import PreUpdateCurrentGuildMasterRequest from "./PreUpdateCurrentGuildMasterRequest"
import UpdateCurrentGuildMasterRequest from "./UpdateCurrentGuildMasterRequest"
import UpdateCurrentGuildMasterFromGitHubRequest from "./UpdateCurrentGuildMasterFromGitHubRequest"
import DescribeReceiveRequestsRequest from "./DescribeReceiveRequestsRequest"
import DescribeReceiveRequestsByGuildNameRequest from "./DescribeReceiveRequestsByGuildNameRequest"
import GetReceiveRequestRequest from "./GetReceiveRequestRequest"
import GetReceiveRequestByGuildNameRequest from "./GetReceiveRequestByGuildNameRequest"
import AcceptRequestRequest from "./AcceptRequestRequest"
import AcceptRequestByGuildNameRequest from "./AcceptRequestByGuildNameRequest"
import RejectRequestRequest from "./RejectRequestRequest"
import RejectRequestByGuildNameRequest from "./RejectRequestByGuildNameRequest"
import DescribeSendRequestsRequest from "./DescribeSendRequestsRequest"
import DescribeSendRequestsByUserIdRequest from "./DescribeSendRequestsByUserIdRequest"
import GetSendRequestRequest from "./GetSendRequestRequest"
import GetSendRequestByUserIdRequest from "./GetSendRequestByUserIdRequest"
import SendRequestRequest from "./SendRequestRequest"
import SendRequestByUserIdRequest from "./SendRequestByUserIdRequest"
import DeleteRequestRequest from "./DeleteRequestRequest"
import DeleteRequestByUserIdRequest from "./DeleteRequestByUserIdRequest"
import DescribeIgnoreUsersRequest from "./DescribeIgnoreUsersRequest"
import DescribeIgnoreUsersByGuildNameRequest from "./DescribeIgnoreUsersByGuildNameRequest"
import GetIgnoreUserRequest from "./GetIgnoreUserRequest"
import GetIgnoreUserByGuildNameRequest from "./GetIgnoreUserByGuildNameRequest"
import AddIgnoreUserRequest from "./AddIgnoreUserRequest"
import AddIgnoreUserByGuildNameRequest from "./AddIgnoreUserByGuildNameRequest"
import DeleteIgnoreUserRequest from "./DeleteIgnoreUserRequest"
import DeleteIgnoreUserByGuildNameRequest from "./DeleteIgnoreUserByGuildNameRequest"

export {
    DescribeNamespacesRequest,
    CreateNamespaceRequest,
    GetNamespaceStatusRequest,
    GetNamespaceRequest,
    UpdateNamespaceRequest,
    DeleteNamespaceRequest,
    GetServiceVersionRequest,
    DumpUserDataByUserIdRequest,
    CheckDumpUserDataByUserIdRequest,
    CleanUserDataByUserIdRequest,
    CheckCleanUserDataByUserIdRequest,
    PrepareImportUserDataByUserIdRequest,
    ImportUserDataByUserIdRequest,
    CheckImportUserDataByUserIdRequest,
    DescribeGuildModelMastersRequest,
    CreateGuildModelMasterRequest,
    GetGuildModelMasterRequest,
    UpdateGuildModelMasterRequest,
    DeleteGuildModelMasterRequest,
    DescribeGuildModelsRequest,
    GetGuildModelRequest,
    SearchGuildsRequest,
    SearchGuildsByUserIdRequest,
    CreateGuildRequest,
    CreateGuildByUserIdRequest,
    GetGuildRequest,
    GetGuildByUserIdRequest,
    UpdateGuildRequest,
    UpdateGuildByGuildNameRequest,
    DeleteMemberRequest,
    DeleteMemberByGuildNameRequest,
    UpdateMemberRoleRequest,
    UpdateMemberRoleByGuildNameRequest,
    BatchUpdateMemberRoleRequest,
    BatchUpdateMemberRoleByGuildNameRequest,
    DeleteGuildRequest,
    DeleteGuildByGuildNameRequest,
    IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest,
    DecreaseMaximumCurrentMaximumMemberCountRequest,
    DecreaseMaximumCurrentMaximumMemberCountByGuildNameRequest,
    VerifyCurrentMaximumMemberCountRequest,
    VerifyCurrentMaximumMemberCountByGuildNameRequest,
    VerifyIncludeMemberRequest,
    VerifyIncludeMemberByUserIdRequest,
    SetMaximumCurrentMaximumMemberCountByGuildNameRequest,
    AssumeRequest,
    AssumeByUserIdRequest,
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest,
    DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest,
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest,
    VerifyCurrentMaximumMemberCountByStampTaskRequest,
    VerifyIncludeMemberByStampTaskRequest,
    DescribeJoinedGuildsRequest,
    DescribeJoinedGuildsByUserIdRequest,
    GetJoinedGuildRequest,
    GetJoinedGuildByUserIdRequest,
    UpdateMemberMetadataRequest,
    UpdateMemberMetadataByUserIdRequest,
    WithdrawalRequest,
    WithdrawalByUserIdRequest,
    GetLastGuildMasterActivityRequest,
    GetLastGuildMasterActivityByGuildNameRequest,
    PromoteSeniorMemberRequest,
    PromoteSeniorMemberByGuildNameRequest,
    ExportMasterRequest,
    GetCurrentGuildMasterRequest,
    PreUpdateCurrentGuildMasterRequest,
    UpdateCurrentGuildMasterRequest,
    UpdateCurrentGuildMasterFromGitHubRequest,
    DescribeReceiveRequestsRequest,
    DescribeReceiveRequestsByGuildNameRequest,
    GetReceiveRequestRequest,
    GetReceiveRequestByGuildNameRequest,
    AcceptRequestRequest,
    AcceptRequestByGuildNameRequest,
    RejectRequestRequest,
    RejectRequestByGuildNameRequest,
    DescribeSendRequestsRequest,
    DescribeSendRequestsByUserIdRequest,
    GetSendRequestRequest,
    GetSendRequestByUserIdRequest,
    SendRequestRequest,
    SendRequestByUserIdRequest,
    DeleteRequestRequest,
    DeleteRequestByUserIdRequest,
    DescribeIgnoreUsersRequest,
    DescribeIgnoreUsersByGuildNameRequest,
    GetIgnoreUserRequest,
    GetIgnoreUserByGuildNameRequest,
    AddIgnoreUserRequest,
    AddIgnoreUserByGuildNameRequest,
    DeleteIgnoreUserRequest,
    DeleteIgnoreUserByGuildNameRequest,
};