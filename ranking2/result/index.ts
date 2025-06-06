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
import GetServiceVersionResult from "./GetServiceVersionResult"
import DumpUserDataByUserIdResult from "./DumpUserDataByUserIdResult"
import CheckDumpUserDataByUserIdResult from "./CheckDumpUserDataByUserIdResult"
import CleanUserDataByUserIdResult from "./CleanUserDataByUserIdResult"
import CheckCleanUserDataByUserIdResult from "./CheckCleanUserDataByUserIdResult"
import PrepareImportUserDataByUserIdResult from "./PrepareImportUserDataByUserIdResult"
import ImportUserDataByUserIdResult from "./ImportUserDataByUserIdResult"
import CheckImportUserDataByUserIdResult from "./CheckImportUserDataByUserIdResult"
import DescribeGlobalRankingModelsResult from "./DescribeGlobalRankingModelsResult"
import GetGlobalRankingModelResult from "./GetGlobalRankingModelResult"
import DescribeGlobalRankingModelMastersResult from "./DescribeGlobalRankingModelMastersResult"
import CreateGlobalRankingModelMasterResult from "./CreateGlobalRankingModelMasterResult"
import GetGlobalRankingModelMasterResult from "./GetGlobalRankingModelMasterResult"
import UpdateGlobalRankingModelMasterResult from "./UpdateGlobalRankingModelMasterResult"
import DeleteGlobalRankingModelMasterResult from "./DeleteGlobalRankingModelMasterResult"
import DescribeGlobalRankingScoresResult from "./DescribeGlobalRankingScoresResult"
import DescribeGlobalRankingScoresByUserIdResult from "./DescribeGlobalRankingScoresByUserIdResult"
import PutGlobalRankingScoreResult from "./PutGlobalRankingScoreResult"
import PutGlobalRankingScoreByUserIdResult from "./PutGlobalRankingScoreByUserIdResult"
import GetGlobalRankingScoreResult from "./GetGlobalRankingScoreResult"
import GetGlobalRankingScoreByUserIdResult from "./GetGlobalRankingScoreByUserIdResult"
import DeleteGlobalRankingScoreByUserIdResult from "./DeleteGlobalRankingScoreByUserIdResult"
import VerifyGlobalRankingScoreResult from "./VerifyGlobalRankingScoreResult"
import VerifyGlobalRankingScoreByUserIdResult from "./VerifyGlobalRankingScoreByUserIdResult"
import VerifyGlobalRankingScoreByStampTaskResult from "./VerifyGlobalRankingScoreByStampTaskResult"
import DescribeGlobalRankingReceivedRewardsResult from "./DescribeGlobalRankingReceivedRewardsResult"
import DescribeGlobalRankingReceivedRewardsByUserIdResult from "./DescribeGlobalRankingReceivedRewardsByUserIdResult"
import CreateGlobalRankingReceivedRewardResult from "./CreateGlobalRankingReceivedRewardResult"
import CreateGlobalRankingReceivedRewardByUserIdResult from "./CreateGlobalRankingReceivedRewardByUserIdResult"
import ReceiveGlobalRankingReceivedRewardResult from "./ReceiveGlobalRankingReceivedRewardResult"
import ReceiveGlobalRankingReceivedRewardByUserIdResult from "./ReceiveGlobalRankingReceivedRewardByUserIdResult"
import GetGlobalRankingReceivedRewardResult from "./GetGlobalRankingReceivedRewardResult"
import GetGlobalRankingReceivedRewardByUserIdResult from "./GetGlobalRankingReceivedRewardByUserIdResult"
import DeleteGlobalRankingReceivedRewardByUserIdResult from "./DeleteGlobalRankingReceivedRewardByUserIdResult"
import CreateGlobalRankingReceivedRewardByStampTaskResult from "./CreateGlobalRankingReceivedRewardByStampTaskResult"
import DescribeGlobalRankingsResult from "./DescribeGlobalRankingsResult"
import DescribeGlobalRankingsByUserIdResult from "./DescribeGlobalRankingsByUserIdResult"
import GetGlobalRankingResult from "./GetGlobalRankingResult"
import GetGlobalRankingByUserIdResult from "./GetGlobalRankingByUserIdResult"
import DescribeClusterRankingModelsResult from "./DescribeClusterRankingModelsResult"
import GetClusterRankingModelResult from "./GetClusterRankingModelResult"
import DescribeClusterRankingModelMastersResult from "./DescribeClusterRankingModelMastersResult"
import CreateClusterRankingModelMasterResult from "./CreateClusterRankingModelMasterResult"
import GetClusterRankingModelMasterResult from "./GetClusterRankingModelMasterResult"
import UpdateClusterRankingModelMasterResult from "./UpdateClusterRankingModelMasterResult"
import DeleteClusterRankingModelMasterResult from "./DeleteClusterRankingModelMasterResult"
import DescribeClusterRankingScoresResult from "./DescribeClusterRankingScoresResult"
import DescribeClusterRankingScoresByUserIdResult from "./DescribeClusterRankingScoresByUserIdResult"
import PutClusterRankingScoreResult from "./PutClusterRankingScoreResult"
import PutClusterRankingScoreByUserIdResult from "./PutClusterRankingScoreByUserIdResult"
import GetClusterRankingScoreResult from "./GetClusterRankingScoreResult"
import GetClusterRankingScoreByUserIdResult from "./GetClusterRankingScoreByUserIdResult"
import DeleteClusterRankingScoreByUserIdResult from "./DeleteClusterRankingScoreByUserIdResult"
import VerifyClusterRankingScoreResult from "./VerifyClusterRankingScoreResult"
import VerifyClusterRankingScoreByUserIdResult from "./VerifyClusterRankingScoreByUserIdResult"
import VerifyClusterRankingScoreByStampTaskResult from "./VerifyClusterRankingScoreByStampTaskResult"
import DescribeClusterRankingReceivedRewardsResult from "./DescribeClusterRankingReceivedRewardsResult"
import DescribeClusterRankingReceivedRewardsByUserIdResult from "./DescribeClusterRankingReceivedRewardsByUserIdResult"
import CreateClusterRankingReceivedRewardResult from "./CreateClusterRankingReceivedRewardResult"
import CreateClusterRankingReceivedRewardByUserIdResult from "./CreateClusterRankingReceivedRewardByUserIdResult"
import ReceiveClusterRankingReceivedRewardResult from "./ReceiveClusterRankingReceivedRewardResult"
import ReceiveClusterRankingReceivedRewardByUserIdResult from "./ReceiveClusterRankingReceivedRewardByUserIdResult"
import GetClusterRankingReceivedRewardResult from "./GetClusterRankingReceivedRewardResult"
import GetClusterRankingReceivedRewardByUserIdResult from "./GetClusterRankingReceivedRewardByUserIdResult"
import DeleteClusterRankingReceivedRewardByUserIdResult from "./DeleteClusterRankingReceivedRewardByUserIdResult"
import CreateClusterRankingReceivedRewardByStampTaskResult from "./CreateClusterRankingReceivedRewardByStampTaskResult"
import DescribeClusterRankingsResult from "./DescribeClusterRankingsResult"
import DescribeClusterRankingsByUserIdResult from "./DescribeClusterRankingsByUserIdResult"
import GetClusterRankingResult from "./GetClusterRankingResult"
import GetClusterRankingByUserIdResult from "./GetClusterRankingByUserIdResult"
import DescribeSubscribeRankingModelsResult from "./DescribeSubscribeRankingModelsResult"
import GetSubscribeRankingModelResult from "./GetSubscribeRankingModelResult"
import DescribeSubscribeRankingModelMastersResult from "./DescribeSubscribeRankingModelMastersResult"
import CreateSubscribeRankingModelMasterResult from "./CreateSubscribeRankingModelMasterResult"
import GetSubscribeRankingModelMasterResult from "./GetSubscribeRankingModelMasterResult"
import UpdateSubscribeRankingModelMasterResult from "./UpdateSubscribeRankingModelMasterResult"
import DeleteSubscribeRankingModelMasterResult from "./DeleteSubscribeRankingModelMasterResult"
import DescribeSubscribesResult from "./DescribeSubscribesResult"
import DescribeSubscribesByUserIdResult from "./DescribeSubscribesByUserIdResult"
import AddSubscribeResult from "./AddSubscribeResult"
import AddSubscribeByUserIdResult from "./AddSubscribeByUserIdResult"
import DescribeSubscribeRankingScoresResult from "./DescribeSubscribeRankingScoresResult"
import DescribeSubscribeRankingScoresByUserIdResult from "./DescribeSubscribeRankingScoresByUserIdResult"
import PutSubscribeRankingScoreResult from "./PutSubscribeRankingScoreResult"
import PutSubscribeRankingScoreByUserIdResult from "./PutSubscribeRankingScoreByUserIdResult"
import GetSubscribeRankingScoreResult from "./GetSubscribeRankingScoreResult"
import GetSubscribeRankingScoreByUserIdResult from "./GetSubscribeRankingScoreByUserIdResult"
import DeleteSubscribeRankingScoreByUserIdResult from "./DeleteSubscribeRankingScoreByUserIdResult"
import VerifySubscribeRankingScoreResult from "./VerifySubscribeRankingScoreResult"
import VerifySubscribeRankingScoreByUserIdResult from "./VerifySubscribeRankingScoreByUserIdResult"
import VerifySubscribeRankingScoreByStampTaskResult from "./VerifySubscribeRankingScoreByStampTaskResult"
import DescribeSubscribeRankingsResult from "./DescribeSubscribeRankingsResult"
import DescribeSubscribeRankingsByUserIdResult from "./DescribeSubscribeRankingsByUserIdResult"
import GetSubscribeRankingResult from "./GetSubscribeRankingResult"
import GetSubscribeRankingByUserIdResult from "./GetSubscribeRankingByUserIdResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentRankingMasterResult from "./GetCurrentRankingMasterResult"
import PreUpdateCurrentRankingMasterResult from "./PreUpdateCurrentRankingMasterResult"
import UpdateCurrentRankingMasterResult from "./UpdateCurrentRankingMasterResult"
import UpdateCurrentRankingMasterFromGitHubResult from "./UpdateCurrentRankingMasterFromGitHubResult"
import GetSubscribeResult from "./GetSubscribeResult"
import GetSubscribeByUserIdResult from "./GetSubscribeByUserIdResult"
import DeleteSubscribeResult from "./DeleteSubscribeResult"
import DeleteSubscribeByUserIdResult from "./DeleteSubscribeByUserIdResult"

export {
    DescribeNamespacesResult,
    CreateNamespaceResult,
    GetNamespaceStatusResult,
    GetNamespaceResult,
    UpdateNamespaceResult,
    DeleteNamespaceResult,
    GetServiceVersionResult,
    DumpUserDataByUserIdResult,
    CheckDumpUserDataByUserIdResult,
    CleanUserDataByUserIdResult,
    CheckCleanUserDataByUserIdResult,
    PrepareImportUserDataByUserIdResult,
    ImportUserDataByUserIdResult,
    CheckImportUserDataByUserIdResult,
    DescribeGlobalRankingModelsResult,
    GetGlobalRankingModelResult,
    DescribeGlobalRankingModelMastersResult,
    CreateGlobalRankingModelMasterResult,
    GetGlobalRankingModelMasterResult,
    UpdateGlobalRankingModelMasterResult,
    DeleteGlobalRankingModelMasterResult,
    DescribeGlobalRankingScoresResult,
    DescribeGlobalRankingScoresByUserIdResult,
    PutGlobalRankingScoreResult,
    PutGlobalRankingScoreByUserIdResult,
    GetGlobalRankingScoreResult,
    GetGlobalRankingScoreByUserIdResult,
    DeleteGlobalRankingScoreByUserIdResult,
    VerifyGlobalRankingScoreResult,
    VerifyGlobalRankingScoreByUserIdResult,
    VerifyGlobalRankingScoreByStampTaskResult,
    DescribeGlobalRankingReceivedRewardsResult,
    DescribeGlobalRankingReceivedRewardsByUserIdResult,
    CreateGlobalRankingReceivedRewardResult,
    CreateGlobalRankingReceivedRewardByUserIdResult,
    ReceiveGlobalRankingReceivedRewardResult,
    ReceiveGlobalRankingReceivedRewardByUserIdResult,
    GetGlobalRankingReceivedRewardResult,
    GetGlobalRankingReceivedRewardByUserIdResult,
    DeleteGlobalRankingReceivedRewardByUserIdResult,
    CreateGlobalRankingReceivedRewardByStampTaskResult,
    DescribeGlobalRankingsResult,
    DescribeGlobalRankingsByUserIdResult,
    GetGlobalRankingResult,
    GetGlobalRankingByUserIdResult,
    DescribeClusterRankingModelsResult,
    GetClusterRankingModelResult,
    DescribeClusterRankingModelMastersResult,
    CreateClusterRankingModelMasterResult,
    GetClusterRankingModelMasterResult,
    UpdateClusterRankingModelMasterResult,
    DeleteClusterRankingModelMasterResult,
    DescribeClusterRankingScoresResult,
    DescribeClusterRankingScoresByUserIdResult,
    PutClusterRankingScoreResult,
    PutClusterRankingScoreByUserIdResult,
    GetClusterRankingScoreResult,
    GetClusterRankingScoreByUserIdResult,
    DeleteClusterRankingScoreByUserIdResult,
    VerifyClusterRankingScoreResult,
    VerifyClusterRankingScoreByUserIdResult,
    VerifyClusterRankingScoreByStampTaskResult,
    DescribeClusterRankingReceivedRewardsResult,
    DescribeClusterRankingReceivedRewardsByUserIdResult,
    CreateClusterRankingReceivedRewardResult,
    CreateClusterRankingReceivedRewardByUserIdResult,
    ReceiveClusterRankingReceivedRewardResult,
    ReceiveClusterRankingReceivedRewardByUserIdResult,
    GetClusterRankingReceivedRewardResult,
    GetClusterRankingReceivedRewardByUserIdResult,
    DeleteClusterRankingReceivedRewardByUserIdResult,
    CreateClusterRankingReceivedRewardByStampTaskResult,
    DescribeClusterRankingsResult,
    DescribeClusterRankingsByUserIdResult,
    GetClusterRankingResult,
    GetClusterRankingByUserIdResult,
    DescribeSubscribeRankingModelsResult,
    GetSubscribeRankingModelResult,
    DescribeSubscribeRankingModelMastersResult,
    CreateSubscribeRankingModelMasterResult,
    GetSubscribeRankingModelMasterResult,
    UpdateSubscribeRankingModelMasterResult,
    DeleteSubscribeRankingModelMasterResult,
    DescribeSubscribesResult,
    DescribeSubscribesByUserIdResult,
    AddSubscribeResult,
    AddSubscribeByUserIdResult,
    DescribeSubscribeRankingScoresResult,
    DescribeSubscribeRankingScoresByUserIdResult,
    PutSubscribeRankingScoreResult,
    PutSubscribeRankingScoreByUserIdResult,
    GetSubscribeRankingScoreResult,
    GetSubscribeRankingScoreByUserIdResult,
    DeleteSubscribeRankingScoreByUserIdResult,
    VerifySubscribeRankingScoreResult,
    VerifySubscribeRankingScoreByUserIdResult,
    VerifySubscribeRankingScoreByStampTaskResult,
    DescribeSubscribeRankingsResult,
    DescribeSubscribeRankingsByUserIdResult,
    GetSubscribeRankingResult,
    GetSubscribeRankingByUserIdResult,
    ExportMasterResult,
    GetCurrentRankingMasterResult,
    PreUpdateCurrentRankingMasterResult,
    UpdateCurrentRankingMasterResult,
    UpdateCurrentRankingMasterFromGitHubResult,
    GetSubscribeResult,
    GetSubscribeByUserIdResult,
    DeleteSubscribeResult,
    DeleteSubscribeByUserIdResult,
};