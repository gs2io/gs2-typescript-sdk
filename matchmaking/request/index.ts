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
import DumpUserDataByUserIdRequest from "./DumpUserDataByUserIdRequest"
import CheckDumpUserDataByUserIdRequest from "./CheckDumpUserDataByUserIdRequest"
import CleanUserDataByUserIdRequest from "./CleanUserDataByUserIdRequest"
import CheckCleanUserDataByUserIdRequest from "./CheckCleanUserDataByUserIdRequest"
import PrepareImportUserDataByUserIdRequest from "./PrepareImportUserDataByUserIdRequest"
import ImportUserDataByUserIdRequest from "./ImportUserDataByUserIdRequest"
import CheckImportUserDataByUserIdRequest from "./CheckImportUserDataByUserIdRequest"
import DescribeGatheringsRequest from "./DescribeGatheringsRequest"
import CreateGatheringRequest from "./CreateGatheringRequest"
import CreateGatheringByUserIdRequest from "./CreateGatheringByUserIdRequest"
import UpdateGatheringRequest from "./UpdateGatheringRequest"
import UpdateGatheringByUserIdRequest from "./UpdateGatheringByUserIdRequest"
import DoMatchmakingByPlayerRequest from "./DoMatchmakingByPlayerRequest"
import DoMatchmakingRequest from "./DoMatchmakingRequest"
import DoMatchmakingByUserIdRequest from "./DoMatchmakingByUserIdRequest"
import PingRequest from "./PingRequest"
import PingByUserIdRequest from "./PingByUserIdRequest"
import GetGatheringRequest from "./GetGatheringRequest"
import CancelMatchmakingRequest from "./CancelMatchmakingRequest"
import CancelMatchmakingByUserIdRequest from "./CancelMatchmakingByUserIdRequest"
import EarlyCompleteRequest from "./EarlyCompleteRequest"
import EarlyCompleteByUserIdRequest from "./EarlyCompleteByUserIdRequest"
import DeleteGatheringRequest from "./DeleteGatheringRequest"
import DescribeRatingModelMastersRequest from "./DescribeRatingModelMastersRequest"
import CreateRatingModelMasterRequest from "./CreateRatingModelMasterRequest"
import GetRatingModelMasterRequest from "./GetRatingModelMasterRequest"
import UpdateRatingModelMasterRequest from "./UpdateRatingModelMasterRequest"
import DeleteRatingModelMasterRequest from "./DeleteRatingModelMasterRequest"
import DescribeRatingModelsRequest from "./DescribeRatingModelsRequest"
import GetRatingModelRequest from "./GetRatingModelRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentModelMasterRequest from "./GetCurrentModelMasterRequest"
import UpdateCurrentModelMasterRequest from "./UpdateCurrentModelMasterRequest"
import UpdateCurrentModelMasterFromGitHubRequest from "./UpdateCurrentModelMasterFromGitHubRequest"
import DescribeSeasonModelsRequest from "./DescribeSeasonModelsRequest"
import GetSeasonModelRequest from "./GetSeasonModelRequest"
import DescribeSeasonModelMastersRequest from "./DescribeSeasonModelMastersRequest"
import CreateSeasonModelMasterRequest from "./CreateSeasonModelMasterRequest"
import GetSeasonModelMasterRequest from "./GetSeasonModelMasterRequest"
import UpdateSeasonModelMasterRequest from "./UpdateSeasonModelMasterRequest"
import DeleteSeasonModelMasterRequest from "./DeleteSeasonModelMasterRequest"
import DescribeSeasonGatheringsRequest from "./DescribeSeasonGatheringsRequest"
import DescribeMatchmakingSeasonGatheringsRequest from "./DescribeMatchmakingSeasonGatheringsRequest"
import DoSeasonMatchmakingRequest from "./DoSeasonMatchmakingRequest"
import DoSeasonMatchmakingByUserIdRequest from "./DoSeasonMatchmakingByUserIdRequest"
import GetSeasonGatheringRequest from "./GetSeasonGatheringRequest"
import VerifyIncludeParticipantRequest from "./VerifyIncludeParticipantRequest"
import VerifyIncludeParticipantByUserIdRequest from "./VerifyIncludeParticipantByUserIdRequest"
import DeleteSeasonGatheringRequest from "./DeleteSeasonGatheringRequest"
import VerifyIncludeParticipantByStampTaskRequest from "./VerifyIncludeParticipantByStampTaskRequest"
import DescribeJoinedSeasonGatheringsRequest from "./DescribeJoinedSeasonGatheringsRequest"
import DescribeJoinedSeasonGatheringsByUserIdRequest from "./DescribeJoinedSeasonGatheringsByUserIdRequest"
import GetJoinedSeasonGatheringRequest from "./GetJoinedSeasonGatheringRequest"
import GetJoinedSeasonGatheringByUserIdRequest from "./GetJoinedSeasonGatheringByUserIdRequest"
import DescribeRatingsRequest from "./DescribeRatingsRequest"
import DescribeRatingsByUserIdRequest from "./DescribeRatingsByUserIdRequest"
import GetRatingRequest from "./GetRatingRequest"
import GetRatingByUserIdRequest from "./GetRatingByUserIdRequest"
import PutResultRequest from "./PutResultRequest"
import DeleteRatingRequest from "./DeleteRatingRequest"
import GetBallotRequest from "./GetBallotRequest"
import GetBallotByUserIdRequest from "./GetBallotByUserIdRequest"
import VoteRequest from "./VoteRequest"
import VoteMultipleRequest from "./VoteMultipleRequest"
import CommitVoteRequest from "./CommitVoteRequest"

export {
    DescribeNamespacesRequest,
    CreateNamespaceRequest,
    GetNamespaceStatusRequest,
    GetNamespaceRequest,
    UpdateNamespaceRequest,
    DeleteNamespaceRequest,
    DumpUserDataByUserIdRequest,
    CheckDumpUserDataByUserIdRequest,
    CleanUserDataByUserIdRequest,
    CheckCleanUserDataByUserIdRequest,
    PrepareImportUserDataByUserIdRequest,
    ImportUserDataByUserIdRequest,
    CheckImportUserDataByUserIdRequest,
    DescribeGatheringsRequest,
    CreateGatheringRequest,
    CreateGatheringByUserIdRequest,
    UpdateGatheringRequest,
    UpdateGatheringByUserIdRequest,
    DoMatchmakingByPlayerRequest,
    DoMatchmakingRequest,
    DoMatchmakingByUserIdRequest,
    PingRequest,
    PingByUserIdRequest,
    GetGatheringRequest,
    CancelMatchmakingRequest,
    CancelMatchmakingByUserIdRequest,
    EarlyCompleteRequest,
    EarlyCompleteByUserIdRequest,
    DeleteGatheringRequest,
    DescribeRatingModelMastersRequest,
    CreateRatingModelMasterRequest,
    GetRatingModelMasterRequest,
    UpdateRatingModelMasterRequest,
    DeleteRatingModelMasterRequest,
    DescribeRatingModelsRequest,
    GetRatingModelRequest,
    ExportMasterRequest,
    GetCurrentModelMasterRequest,
    UpdateCurrentModelMasterRequest,
    UpdateCurrentModelMasterFromGitHubRequest,
    DescribeSeasonModelsRequest,
    GetSeasonModelRequest,
    DescribeSeasonModelMastersRequest,
    CreateSeasonModelMasterRequest,
    GetSeasonModelMasterRequest,
    UpdateSeasonModelMasterRequest,
    DeleteSeasonModelMasterRequest,
    DescribeSeasonGatheringsRequest,
    DescribeMatchmakingSeasonGatheringsRequest,
    DoSeasonMatchmakingRequest,
    DoSeasonMatchmakingByUserIdRequest,
    GetSeasonGatheringRequest,
    VerifyIncludeParticipantRequest,
    VerifyIncludeParticipantByUserIdRequest,
    DeleteSeasonGatheringRequest,
    VerifyIncludeParticipantByStampTaskRequest,
    DescribeJoinedSeasonGatheringsRequest,
    DescribeJoinedSeasonGatheringsByUserIdRequest,
    GetJoinedSeasonGatheringRequest,
    GetJoinedSeasonGatheringByUserIdRequest,
    DescribeRatingsRequest,
    DescribeRatingsByUserIdRequest,
    GetRatingRequest,
    GetRatingByUserIdRequest,
    PutResultRequest,
    DeleteRatingRequest,
    GetBallotRequest,
    GetBallotByUserIdRequest,
    VoteRequest,
    VoteMultipleRequest,
    CommitVoteRequest,
};