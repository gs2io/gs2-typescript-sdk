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
import DescribeGatheringsResult from "./DescribeGatheringsResult"
import CreateGatheringResult from "./CreateGatheringResult"
import CreateGatheringByUserIdResult from "./CreateGatheringByUserIdResult"
import UpdateGatheringResult from "./UpdateGatheringResult"
import UpdateGatheringByUserIdResult from "./UpdateGatheringByUserIdResult"
import DoMatchmakingByPlayerResult from "./DoMatchmakingByPlayerResult"
import DoMatchmakingResult from "./DoMatchmakingResult"
import DoMatchmakingByUserIdResult from "./DoMatchmakingByUserIdResult"
import PingResult from "./PingResult"
import PingByUserIdResult from "./PingByUserIdResult"
import GetGatheringResult from "./GetGatheringResult"
import CancelMatchmakingResult from "./CancelMatchmakingResult"
import CancelMatchmakingByUserIdResult from "./CancelMatchmakingByUserIdResult"
import EarlyCompleteResult from "./EarlyCompleteResult"
import EarlyCompleteByUserIdResult from "./EarlyCompleteByUserIdResult"
import DeleteGatheringResult from "./DeleteGatheringResult"
import DescribeRatingModelMastersResult from "./DescribeRatingModelMastersResult"
import CreateRatingModelMasterResult from "./CreateRatingModelMasterResult"
import GetRatingModelMasterResult from "./GetRatingModelMasterResult"
import UpdateRatingModelMasterResult from "./UpdateRatingModelMasterResult"
import DeleteRatingModelMasterResult from "./DeleteRatingModelMasterResult"
import DescribeRatingModelsResult from "./DescribeRatingModelsResult"
import GetRatingModelResult from "./GetRatingModelResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentModelMasterResult from "./GetCurrentModelMasterResult"
import UpdateCurrentModelMasterResult from "./UpdateCurrentModelMasterResult"
import UpdateCurrentModelMasterFromGitHubResult from "./UpdateCurrentModelMasterFromGitHubResult"
import DescribeSeasonModelsResult from "./DescribeSeasonModelsResult"
import GetSeasonModelResult from "./GetSeasonModelResult"
import DescribeSeasonModelMastersResult from "./DescribeSeasonModelMastersResult"
import CreateSeasonModelMasterResult from "./CreateSeasonModelMasterResult"
import GetSeasonModelMasterResult from "./GetSeasonModelMasterResult"
import UpdateSeasonModelMasterResult from "./UpdateSeasonModelMasterResult"
import DeleteSeasonModelMasterResult from "./DeleteSeasonModelMasterResult"
import DescribeSeasonGatheringsResult from "./DescribeSeasonGatheringsResult"
import DescribeMatchmakingSeasonGatheringsResult from "./DescribeMatchmakingSeasonGatheringsResult"
import DoSeasonMatchmakingResult from "./DoSeasonMatchmakingResult"
import DoSeasonMatchmakingByUserIdResult from "./DoSeasonMatchmakingByUserIdResult"
import GetSeasonGatheringResult from "./GetSeasonGatheringResult"
import DeleteSeasonGatheringResult from "./DeleteSeasonGatheringResult"
import DescribeJoinedSeasonGatheringsResult from "./DescribeJoinedSeasonGatheringsResult"
import DescribeJoinedSeasonGatheringsByUserIdResult from "./DescribeJoinedSeasonGatheringsByUserIdResult"
import GetJoinedSeasonGatheringResult from "./GetJoinedSeasonGatheringResult"
import GetJoinedSeasonGatheringByUserIdResult from "./GetJoinedSeasonGatheringByUserIdResult"
import DescribeRatingsResult from "./DescribeRatingsResult"
import DescribeRatingsByUserIdResult from "./DescribeRatingsByUserIdResult"
import GetRatingResult from "./GetRatingResult"
import GetRatingByUserIdResult from "./GetRatingByUserIdResult"
import PutResultResult from "./PutResultResult"
import DeleteRatingResult from "./DeleteRatingResult"
import GetBallotResult from "./GetBallotResult"
import GetBallotByUserIdResult from "./GetBallotByUserIdResult"
import VoteResult from "./VoteResult"
import VoteMultipleResult from "./VoteMultipleResult"
import CommitVoteResult from "./CommitVoteResult"

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
    DescribeGatheringsResult,
    CreateGatheringResult,
    CreateGatheringByUserIdResult,
    UpdateGatheringResult,
    UpdateGatheringByUserIdResult,
    DoMatchmakingByPlayerResult,
    DoMatchmakingResult,
    DoMatchmakingByUserIdResult,
    PingResult,
    PingByUserIdResult,
    GetGatheringResult,
    CancelMatchmakingResult,
    CancelMatchmakingByUserIdResult,
    EarlyCompleteResult,
    EarlyCompleteByUserIdResult,
    DeleteGatheringResult,
    DescribeRatingModelMastersResult,
    CreateRatingModelMasterResult,
    GetRatingModelMasterResult,
    UpdateRatingModelMasterResult,
    DeleteRatingModelMasterResult,
    DescribeRatingModelsResult,
    GetRatingModelResult,
    ExportMasterResult,
    GetCurrentModelMasterResult,
    UpdateCurrentModelMasterResult,
    UpdateCurrentModelMasterFromGitHubResult,
    DescribeSeasonModelsResult,
    GetSeasonModelResult,
    DescribeSeasonModelMastersResult,
    CreateSeasonModelMasterResult,
    GetSeasonModelMasterResult,
    UpdateSeasonModelMasterResult,
    DeleteSeasonModelMasterResult,
    DescribeSeasonGatheringsResult,
    DescribeMatchmakingSeasonGatheringsResult,
    DoSeasonMatchmakingResult,
    DoSeasonMatchmakingByUserIdResult,
    GetSeasonGatheringResult,
    DeleteSeasonGatheringResult,
    DescribeJoinedSeasonGatheringsResult,
    DescribeJoinedSeasonGatheringsByUserIdResult,
    GetJoinedSeasonGatheringResult,
    GetJoinedSeasonGatheringByUserIdResult,
    DescribeRatingsResult,
    DescribeRatingsByUserIdResult,
    GetRatingResult,
    GetRatingByUserIdResult,
    PutResultResult,
    DeleteRatingResult,
    GetBallotResult,
    GetBallotByUserIdResult,
    VoteResult,
    VoteMultipleResult,
    CommitVoteResult,
};