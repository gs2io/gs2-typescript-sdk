import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2GuildRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult>;
    dumpUserDataByUserId(request: Request.DumpUserDataByUserIdRequest): Promise<Result.DumpUserDataByUserIdResult>;
    checkDumpUserDataByUserId(request: Request.CheckDumpUserDataByUserIdRequest): Promise<Result.CheckDumpUserDataByUserIdResult>;
    cleanUserDataByUserId(request: Request.CleanUserDataByUserIdRequest): Promise<Result.CleanUserDataByUserIdResult>;
    checkCleanUserDataByUserId(request: Request.CheckCleanUserDataByUserIdRequest): Promise<Result.CheckCleanUserDataByUserIdResult>;
    prepareImportUserDataByUserId(request: Request.PrepareImportUserDataByUserIdRequest): Promise<Result.PrepareImportUserDataByUserIdResult>;
    importUserDataByUserId(request: Request.ImportUserDataByUserIdRequest): Promise<Result.ImportUserDataByUserIdResult>;
    checkImportUserDataByUserId(request: Request.CheckImportUserDataByUserIdRequest): Promise<Result.CheckImportUserDataByUserIdResult>;
    describeGuildModelMasters(request: Request.DescribeGuildModelMastersRequest): Promise<Result.DescribeGuildModelMastersResult>;
    createGuildModelMaster(request: Request.CreateGuildModelMasterRequest): Promise<Result.CreateGuildModelMasterResult>;
    getGuildModelMaster(request: Request.GetGuildModelMasterRequest): Promise<Result.GetGuildModelMasterResult>;
    updateGuildModelMaster(request: Request.UpdateGuildModelMasterRequest): Promise<Result.UpdateGuildModelMasterResult>;
    deleteGuildModelMaster(request: Request.DeleteGuildModelMasterRequest): Promise<Result.DeleteGuildModelMasterResult>;
    describeGuildModels(request: Request.DescribeGuildModelsRequest): Promise<Result.DescribeGuildModelsResult>;
    getGuildModel(request: Request.GetGuildModelRequest): Promise<Result.GetGuildModelResult>;
    searchGuilds(request: Request.SearchGuildsRequest): Promise<Result.SearchGuildsResult>;
    searchGuildsByUserId(request: Request.SearchGuildsByUserIdRequest): Promise<Result.SearchGuildsByUserIdResult>;
    createGuild(request: Request.CreateGuildRequest): Promise<Result.CreateGuildResult>;
    createGuildByUserId(request: Request.CreateGuildByUserIdRequest): Promise<Result.CreateGuildByUserIdResult>;
    getGuild(request: Request.GetGuildRequest): Promise<Result.GetGuildResult>;
    getGuildByUserId(request: Request.GetGuildByUserIdRequest): Promise<Result.GetGuildByUserIdResult>;
    updateGuild(request: Request.UpdateGuildRequest): Promise<Result.UpdateGuildResult>;
    updateGuildByGuildName(request: Request.UpdateGuildByGuildNameRequest): Promise<Result.UpdateGuildByGuildNameResult>;
    deleteMember(request: Request.DeleteMemberRequest): Promise<Result.DeleteMemberResult>;
    deleteMemberByGuildName(request: Request.DeleteMemberByGuildNameRequest): Promise<Result.DeleteMemberByGuildNameResult>;
    updateMemberRole(request: Request.UpdateMemberRoleRequest): Promise<Result.UpdateMemberRoleResult>;
    updateMemberRoleByGuildName(request: Request.UpdateMemberRoleByGuildNameRequest): Promise<Result.UpdateMemberRoleByGuildNameResult>;
    batchUpdateMemberRole(request: Request.BatchUpdateMemberRoleRequest): Promise<Result.BatchUpdateMemberRoleResult>;
    batchUpdateMemberRoleByGuildName(request: Request.BatchUpdateMemberRoleByGuildNameRequest): Promise<Result.BatchUpdateMemberRoleByGuildNameResult>;
    deleteGuild(request: Request.DeleteGuildRequest): Promise<Result.DeleteGuildResult>;
    deleteGuildByGuildName(request: Request.DeleteGuildByGuildNameRequest): Promise<Result.DeleteGuildByGuildNameResult>;
    increaseMaximumCurrentMaximumMemberCountByGuildName(request: Request.IncreaseMaximumCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.IncreaseMaximumCurrentMaximumMemberCountByGuildNameResult>;
    decreaseMaximumCurrentMaximumMemberCount(request: Request.DecreaseMaximumCurrentMaximumMemberCountRequest): Promise<Result.DecreaseMaximumCurrentMaximumMemberCountResult>;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(request: Request.DecreaseMaximumCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.DecreaseMaximumCurrentMaximumMemberCountByGuildNameResult>;
    verifyCurrentMaximumMemberCount(request: Request.VerifyCurrentMaximumMemberCountRequest): Promise<Result.VerifyCurrentMaximumMemberCountResult>;
    verifyCurrentMaximumMemberCountByGuildName(request: Request.VerifyCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.VerifyCurrentMaximumMemberCountByGuildNameResult>;
    verifyIncludeMember(request: Request.VerifyIncludeMemberRequest): Promise<Result.VerifyIncludeMemberResult>;
    verifyIncludeMemberByUserId(request: Request.VerifyIncludeMemberByUserIdRequest): Promise<Result.VerifyIncludeMemberByUserIdResult>;
    setMaximumCurrentMaximumMemberCountByGuildName(request: Request.SetMaximumCurrentMaximumMemberCountByGuildNameRequest): Promise<Result.SetMaximumCurrentMaximumMemberCountByGuildNameResult>;
    assume(request: Request.AssumeRequest): Promise<Result.AssumeResult>;
    assumeByUserId(request: Request.AssumeByUserIdRequest): Promise<Result.AssumeByUserIdResult>;
    increaseMaximumCurrentMaximumMemberCountByStampSheet(request: Request.IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest): Promise<Result.IncreaseMaximumCurrentMaximumMemberCountByStampSheetResult>;
    decreaseMaximumCurrentMaximumMemberCountByStampTask(request: Request.DecreaseMaximumCurrentMaximumMemberCountByStampTaskRequest): Promise<Result.DecreaseMaximumCurrentMaximumMemberCountByStampTaskResult>;
    setMaximumCurrentMaximumMemberCountByStampSheet(request: Request.SetMaximumCurrentMaximumMemberCountByStampSheetRequest): Promise<Result.SetMaximumCurrentMaximumMemberCountByStampSheetResult>;
    verifyCurrentMaximumMemberCountByStampTask(request: Request.VerifyCurrentMaximumMemberCountByStampTaskRequest): Promise<Result.VerifyCurrentMaximumMemberCountByStampTaskResult>;
    verifyIncludeMemberByStampTask(request: Request.VerifyIncludeMemberByStampTaskRequest): Promise<Result.VerifyIncludeMemberByStampTaskResult>;
    describeJoinedGuilds(request: Request.DescribeJoinedGuildsRequest): Promise<Result.DescribeJoinedGuildsResult>;
    describeJoinedGuildsByUserId(request: Request.DescribeJoinedGuildsByUserIdRequest): Promise<Result.DescribeJoinedGuildsByUserIdResult>;
    getJoinedGuild(request: Request.GetJoinedGuildRequest): Promise<Result.GetJoinedGuildResult>;
    getJoinedGuildByUserId(request: Request.GetJoinedGuildByUserIdRequest): Promise<Result.GetJoinedGuildByUserIdResult>;
    updateMemberMetadata(request: Request.UpdateMemberMetadataRequest): Promise<Result.UpdateMemberMetadataResult>;
    updateMemberMetadataByUserId(request: Request.UpdateMemberMetadataByUserIdRequest): Promise<Result.UpdateMemberMetadataByUserIdResult>;
    withdrawal(request: Request.WithdrawalRequest): Promise<Result.WithdrawalResult>;
    withdrawalByUserId(request: Request.WithdrawalByUserIdRequest): Promise<Result.WithdrawalByUserIdResult>;
    getLastGuildMasterActivity(request: Request.GetLastGuildMasterActivityRequest): Promise<Result.GetLastGuildMasterActivityResult>;
    getLastGuildMasterActivityByGuildName(request: Request.GetLastGuildMasterActivityByGuildNameRequest): Promise<Result.GetLastGuildMasterActivityByGuildNameResult>;
    promoteSeniorMember(request: Request.PromoteSeniorMemberRequest): Promise<Result.PromoteSeniorMemberResult>;
    promoteSeniorMemberByGuildName(request: Request.PromoteSeniorMemberByGuildNameRequest): Promise<Result.PromoteSeniorMemberByGuildNameResult>;
    exportMaster(request: Request.ExportMasterRequest): Promise<Result.ExportMasterResult>;
    getCurrentGuildMaster(request: Request.GetCurrentGuildMasterRequest): Promise<Result.GetCurrentGuildMasterResult>;
    preUpdateCurrentGuildMaster(request: Request.PreUpdateCurrentGuildMasterRequest): Promise<Result.PreUpdateCurrentGuildMasterResult>;
    updateCurrentGuildMaster(request: Request.UpdateCurrentGuildMasterRequest): Promise<Result.UpdateCurrentGuildMasterResult>;
    updateCurrentGuildMasterFromGitHub(request: Request.UpdateCurrentGuildMasterFromGitHubRequest): Promise<Result.UpdateCurrentGuildMasterFromGitHubResult>;
    describeReceiveRequests(request: Request.DescribeReceiveRequestsRequest): Promise<Result.DescribeReceiveRequestsResult>;
    describeReceiveRequestsByGuildName(request: Request.DescribeReceiveRequestsByGuildNameRequest): Promise<Result.DescribeReceiveRequestsByGuildNameResult>;
    getReceiveRequest(request: Request.GetReceiveRequestRequest): Promise<Result.GetReceiveRequestResult>;
    getReceiveRequestByGuildName(request: Request.GetReceiveRequestByGuildNameRequest): Promise<Result.GetReceiveRequestByGuildNameResult>;
    acceptRequest(request: Request.AcceptRequestRequest): Promise<Result.AcceptRequestResult>;
    acceptRequestByGuildName(request: Request.AcceptRequestByGuildNameRequest): Promise<Result.AcceptRequestByGuildNameResult>;
    rejectRequest(request: Request.RejectRequestRequest): Promise<Result.RejectRequestResult>;
    rejectRequestByGuildName(request: Request.RejectRequestByGuildNameRequest): Promise<Result.RejectRequestByGuildNameResult>;
    describeSendRequests(request: Request.DescribeSendRequestsRequest): Promise<Result.DescribeSendRequestsResult>;
    describeSendRequestsByUserId(request: Request.DescribeSendRequestsByUserIdRequest): Promise<Result.DescribeSendRequestsByUserIdResult>;
    getSendRequest(request: Request.GetSendRequestRequest): Promise<Result.GetSendRequestResult>;
    getSendRequestByUserId(request: Request.GetSendRequestByUserIdRequest): Promise<Result.GetSendRequestByUserIdResult>;
    sendRequest(request: Request.SendRequestRequest): Promise<Result.SendRequestResult>;
    sendRequestByUserId(request: Request.SendRequestByUserIdRequest): Promise<Result.SendRequestByUserIdResult>;
    deleteRequest(request: Request.DeleteRequestRequest): Promise<Result.DeleteRequestResult>;
    deleteRequestByUserId(request: Request.DeleteRequestByUserIdRequest): Promise<Result.DeleteRequestByUserIdResult>;
    describeIgnoreUsers(request: Request.DescribeIgnoreUsersRequest): Promise<Result.DescribeIgnoreUsersResult>;
    describeIgnoreUsersByGuildName(request: Request.DescribeIgnoreUsersByGuildNameRequest): Promise<Result.DescribeIgnoreUsersByGuildNameResult>;
    getIgnoreUser(request: Request.GetIgnoreUserRequest): Promise<Result.GetIgnoreUserResult>;
    getIgnoreUserByGuildName(request: Request.GetIgnoreUserByGuildNameRequest): Promise<Result.GetIgnoreUserByGuildNameResult>;
    addIgnoreUser(request: Request.AddIgnoreUserRequest): Promise<Result.AddIgnoreUserResult>;
    addIgnoreUserByGuildName(request: Request.AddIgnoreUserByGuildNameRequest): Promise<Result.AddIgnoreUserByGuildNameResult>;
    deleteIgnoreUser(request: Request.DeleteIgnoreUserRequest): Promise<Result.DeleteIgnoreUserResult>;
    deleteIgnoreUserByGuildName(request: Request.DeleteIgnoreUserByGuildNameRequest): Promise<Result.DeleteIgnoreUserByGuildNameResult>;
}
