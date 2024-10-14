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
import DescribeGlobalRankingModelsRequest from "./DescribeGlobalRankingModelsRequest"
import GetGlobalRankingModelRequest from "./GetGlobalRankingModelRequest"
import DescribeGlobalRankingModelMastersRequest from "./DescribeGlobalRankingModelMastersRequest"
import CreateGlobalRankingModelMasterRequest from "./CreateGlobalRankingModelMasterRequest"
import GetGlobalRankingModelMasterRequest from "./GetGlobalRankingModelMasterRequest"
import UpdateGlobalRankingModelMasterRequest from "./UpdateGlobalRankingModelMasterRequest"
import DeleteGlobalRankingModelMasterRequest from "./DeleteGlobalRankingModelMasterRequest"
import DescribeGlobalRankingScoresRequest from "./DescribeGlobalRankingScoresRequest"
import DescribeGlobalRankingScoresByUserIdRequest from "./DescribeGlobalRankingScoresByUserIdRequest"
import PutGlobalRankingScoreRequest from "./PutGlobalRankingScoreRequest"
import PutGlobalRankingScoreByUserIdRequest from "./PutGlobalRankingScoreByUserIdRequest"
import GetGlobalRankingScoreRequest from "./GetGlobalRankingScoreRequest"
import GetGlobalRankingScoreByUserIdRequest from "./GetGlobalRankingScoreByUserIdRequest"
import DeleteGlobalRankingScoreByUserIdRequest from "./DeleteGlobalRankingScoreByUserIdRequest"
import VerifyGlobalRankingScoreRequest from "./VerifyGlobalRankingScoreRequest"
import VerifyGlobalRankingScoreByUserIdRequest from "./VerifyGlobalRankingScoreByUserIdRequest"
import VerifyGlobalRankingScoreByStampTaskRequest from "./VerifyGlobalRankingScoreByStampTaskRequest"
import DescribeGlobalRankingReceivedRewardsRequest from "./DescribeGlobalRankingReceivedRewardsRequest"
import DescribeGlobalRankingReceivedRewardsByUserIdRequest from "./DescribeGlobalRankingReceivedRewardsByUserIdRequest"
import CreateGlobalRankingReceivedRewardRequest from "./CreateGlobalRankingReceivedRewardRequest"
import CreateGlobalRankingReceivedRewardByUserIdRequest from "./CreateGlobalRankingReceivedRewardByUserIdRequest"
import ReceiveGlobalRankingReceivedRewardRequest from "./ReceiveGlobalRankingReceivedRewardRequest"
import ReceiveGlobalRankingReceivedRewardByUserIdRequest from "./ReceiveGlobalRankingReceivedRewardByUserIdRequest"
import GetGlobalRankingReceivedRewardRequest from "./GetGlobalRankingReceivedRewardRequest"
import GetGlobalRankingReceivedRewardByUserIdRequest from "./GetGlobalRankingReceivedRewardByUserIdRequest"
import DeleteGlobalRankingReceivedRewardByUserIdRequest from "./DeleteGlobalRankingReceivedRewardByUserIdRequest"
import CreateGlobalRankingReceivedRewardByStampTaskRequest from "./CreateGlobalRankingReceivedRewardByStampTaskRequest"
import DescribeGlobalRankingsRequest from "./DescribeGlobalRankingsRequest"
import DescribeGlobalRankingsByUserIdRequest from "./DescribeGlobalRankingsByUserIdRequest"
import GetGlobalRankingRequest from "./GetGlobalRankingRequest"
import GetGlobalRankingByUserIdRequest from "./GetGlobalRankingByUserIdRequest"
import DescribeClusterRankingModelsRequest from "./DescribeClusterRankingModelsRequest"
import GetClusterRankingModelRequest from "./GetClusterRankingModelRequest"
import DescribeClusterRankingModelMastersRequest from "./DescribeClusterRankingModelMastersRequest"
import CreateClusterRankingModelMasterRequest from "./CreateClusterRankingModelMasterRequest"
import GetClusterRankingModelMasterRequest from "./GetClusterRankingModelMasterRequest"
import UpdateClusterRankingModelMasterRequest from "./UpdateClusterRankingModelMasterRequest"
import DeleteClusterRankingModelMasterRequest from "./DeleteClusterRankingModelMasterRequest"
import DescribeClusterRankingScoresRequest from "./DescribeClusterRankingScoresRequest"
import DescribeClusterRankingScoresByUserIdRequest from "./DescribeClusterRankingScoresByUserIdRequest"
import PutClusterRankingScoreRequest from "./PutClusterRankingScoreRequest"
import PutClusterRankingScoreByUserIdRequest from "./PutClusterRankingScoreByUserIdRequest"
import GetClusterRankingScoreRequest from "./GetClusterRankingScoreRequest"
import GetClusterRankingScoreByUserIdRequest from "./GetClusterRankingScoreByUserIdRequest"
import DeleteClusterRankingScoreByUserIdRequest from "./DeleteClusterRankingScoreByUserIdRequest"
import VerifyClusterRankingScoreRequest from "./VerifyClusterRankingScoreRequest"
import VerifyClusterRankingScoreByUserIdRequest from "./VerifyClusterRankingScoreByUserIdRequest"
import VerifyClusterRankingScoreByStampTaskRequest from "./VerifyClusterRankingScoreByStampTaskRequest"
import DescribeClusterRankingReceivedRewardsRequest from "./DescribeClusterRankingReceivedRewardsRequest"
import DescribeClusterRankingReceivedRewardsByUserIdRequest from "./DescribeClusterRankingReceivedRewardsByUserIdRequest"
import CreateClusterRankingReceivedRewardRequest from "./CreateClusterRankingReceivedRewardRequest"
import CreateClusterRankingReceivedRewardByUserIdRequest from "./CreateClusterRankingReceivedRewardByUserIdRequest"
import ReceiveClusterRankingReceivedRewardRequest from "./ReceiveClusterRankingReceivedRewardRequest"
import ReceiveClusterRankingReceivedRewardByUserIdRequest from "./ReceiveClusterRankingReceivedRewardByUserIdRequest"
import GetClusterRankingReceivedRewardRequest from "./GetClusterRankingReceivedRewardRequest"
import GetClusterRankingReceivedRewardByUserIdRequest from "./GetClusterRankingReceivedRewardByUserIdRequest"
import DeleteClusterRankingReceivedRewardByUserIdRequest from "./DeleteClusterRankingReceivedRewardByUserIdRequest"
import CreateClusterRankingReceivedRewardByStampTaskRequest from "./CreateClusterRankingReceivedRewardByStampTaskRequest"
import DescribeClusterRankingsRequest from "./DescribeClusterRankingsRequest"
import DescribeClusterRankingsByUserIdRequest from "./DescribeClusterRankingsByUserIdRequest"
import GetClusterRankingRequest from "./GetClusterRankingRequest"
import GetClusterRankingByUserIdRequest from "./GetClusterRankingByUserIdRequest"
import DescribeSubscribeRankingModelsRequest from "./DescribeSubscribeRankingModelsRequest"
import GetSubscribeRankingModelRequest from "./GetSubscribeRankingModelRequest"
import DescribeSubscribeRankingModelMastersRequest from "./DescribeSubscribeRankingModelMastersRequest"
import CreateSubscribeRankingModelMasterRequest from "./CreateSubscribeRankingModelMasterRequest"
import GetSubscribeRankingModelMasterRequest from "./GetSubscribeRankingModelMasterRequest"
import UpdateSubscribeRankingModelMasterRequest from "./UpdateSubscribeRankingModelMasterRequest"
import DeleteSubscribeRankingModelMasterRequest from "./DeleteSubscribeRankingModelMasterRequest"
import DescribeSubscribesRequest from "./DescribeSubscribesRequest"
import DescribeSubscribesByUserIdRequest from "./DescribeSubscribesByUserIdRequest"
import AddSubscribeRequest from "./AddSubscribeRequest"
import AddSubscribeByUserIdRequest from "./AddSubscribeByUserIdRequest"
import DescribeSubscribeRankingScoresRequest from "./DescribeSubscribeRankingScoresRequest"
import DescribeSubscribeRankingScoresByUserIdRequest from "./DescribeSubscribeRankingScoresByUserIdRequest"
import PutSubscribeRankingScoreRequest from "./PutSubscribeRankingScoreRequest"
import PutSubscribeRankingScoreByUserIdRequest from "./PutSubscribeRankingScoreByUserIdRequest"
import GetSubscribeRankingScoreRequest from "./GetSubscribeRankingScoreRequest"
import GetSubscribeRankingScoreByUserIdRequest from "./GetSubscribeRankingScoreByUserIdRequest"
import DeleteSubscribeRankingScoreByUserIdRequest from "./DeleteSubscribeRankingScoreByUserIdRequest"
import VerifySubscribeRankingScoreRequest from "./VerifySubscribeRankingScoreRequest"
import VerifySubscribeRankingScoreByUserIdRequest from "./VerifySubscribeRankingScoreByUserIdRequest"
import VerifySubscribeRankingScoreByStampTaskRequest from "./VerifySubscribeRankingScoreByStampTaskRequest"
import DescribeSubscribeRankingsRequest from "./DescribeSubscribeRankingsRequest"
import DescribeSubscribeRankingsByUserIdRequest from "./DescribeSubscribeRankingsByUserIdRequest"
import GetSubscribeRankingRequest from "./GetSubscribeRankingRequest"
import GetSubscribeRankingByUserIdRequest from "./GetSubscribeRankingByUserIdRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentRankingMasterRequest from "./GetCurrentRankingMasterRequest"
import UpdateCurrentRankingMasterRequest from "./UpdateCurrentRankingMasterRequest"
import UpdateCurrentRankingMasterFromGitHubRequest from "./UpdateCurrentRankingMasterFromGitHubRequest"
import GetSubscribeRequest from "./GetSubscribeRequest"
import GetSubscribeByUserIdRequest from "./GetSubscribeByUserIdRequest"
import DeleteSubscribeRequest from "./DeleteSubscribeRequest"
import DeleteSubscribeByUserIdRequest from "./DeleteSubscribeByUserIdRequest"

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
    DescribeGlobalRankingModelsRequest,
    GetGlobalRankingModelRequest,
    DescribeGlobalRankingModelMastersRequest,
    CreateGlobalRankingModelMasterRequest,
    GetGlobalRankingModelMasterRequest,
    UpdateGlobalRankingModelMasterRequest,
    DeleteGlobalRankingModelMasterRequest,
    DescribeGlobalRankingScoresRequest,
    DescribeGlobalRankingScoresByUserIdRequest,
    PutGlobalRankingScoreRequest,
    PutGlobalRankingScoreByUserIdRequest,
    GetGlobalRankingScoreRequest,
    GetGlobalRankingScoreByUserIdRequest,
    DeleteGlobalRankingScoreByUserIdRequest,
    VerifyGlobalRankingScoreRequest,
    VerifyGlobalRankingScoreByUserIdRequest,
    VerifyGlobalRankingScoreByStampTaskRequest,
    DescribeGlobalRankingReceivedRewardsRequest,
    DescribeGlobalRankingReceivedRewardsByUserIdRequest,
    CreateGlobalRankingReceivedRewardRequest,
    CreateGlobalRankingReceivedRewardByUserIdRequest,
    ReceiveGlobalRankingReceivedRewardRequest,
    ReceiveGlobalRankingReceivedRewardByUserIdRequest,
    GetGlobalRankingReceivedRewardRequest,
    GetGlobalRankingReceivedRewardByUserIdRequest,
    DeleteGlobalRankingReceivedRewardByUserIdRequest,
    CreateGlobalRankingReceivedRewardByStampTaskRequest,
    DescribeGlobalRankingsRequest,
    DescribeGlobalRankingsByUserIdRequest,
    GetGlobalRankingRequest,
    GetGlobalRankingByUserIdRequest,
    DescribeClusterRankingModelsRequest,
    GetClusterRankingModelRequest,
    DescribeClusterRankingModelMastersRequest,
    CreateClusterRankingModelMasterRequest,
    GetClusterRankingModelMasterRequest,
    UpdateClusterRankingModelMasterRequest,
    DeleteClusterRankingModelMasterRequest,
    DescribeClusterRankingScoresRequest,
    DescribeClusterRankingScoresByUserIdRequest,
    PutClusterRankingScoreRequest,
    PutClusterRankingScoreByUserIdRequest,
    GetClusterRankingScoreRequest,
    GetClusterRankingScoreByUserIdRequest,
    DeleteClusterRankingScoreByUserIdRequest,
    VerifyClusterRankingScoreRequest,
    VerifyClusterRankingScoreByUserIdRequest,
    VerifyClusterRankingScoreByStampTaskRequest,
    DescribeClusterRankingReceivedRewardsRequest,
    DescribeClusterRankingReceivedRewardsByUserIdRequest,
    CreateClusterRankingReceivedRewardRequest,
    CreateClusterRankingReceivedRewardByUserIdRequest,
    ReceiveClusterRankingReceivedRewardRequest,
    ReceiveClusterRankingReceivedRewardByUserIdRequest,
    GetClusterRankingReceivedRewardRequest,
    GetClusterRankingReceivedRewardByUserIdRequest,
    DeleteClusterRankingReceivedRewardByUserIdRequest,
    CreateClusterRankingReceivedRewardByStampTaskRequest,
    DescribeClusterRankingsRequest,
    DescribeClusterRankingsByUserIdRequest,
    GetClusterRankingRequest,
    GetClusterRankingByUserIdRequest,
    DescribeSubscribeRankingModelsRequest,
    GetSubscribeRankingModelRequest,
    DescribeSubscribeRankingModelMastersRequest,
    CreateSubscribeRankingModelMasterRequest,
    GetSubscribeRankingModelMasterRequest,
    UpdateSubscribeRankingModelMasterRequest,
    DeleteSubscribeRankingModelMasterRequest,
    DescribeSubscribesRequest,
    DescribeSubscribesByUserIdRequest,
    AddSubscribeRequest,
    AddSubscribeByUserIdRequest,
    DescribeSubscribeRankingScoresRequest,
    DescribeSubscribeRankingScoresByUserIdRequest,
    PutSubscribeRankingScoreRequest,
    PutSubscribeRankingScoreByUserIdRequest,
    GetSubscribeRankingScoreRequest,
    GetSubscribeRankingScoreByUserIdRequest,
    DeleteSubscribeRankingScoreByUserIdRequest,
    VerifySubscribeRankingScoreRequest,
    VerifySubscribeRankingScoreByUserIdRequest,
    VerifySubscribeRankingScoreByStampTaskRequest,
    DescribeSubscribeRankingsRequest,
    DescribeSubscribeRankingsByUserIdRequest,
    GetSubscribeRankingRequest,
    GetSubscribeRankingByUserIdRequest,
    ExportMasterRequest,
    GetCurrentRankingMasterRequest,
    UpdateCurrentRankingMasterRequest,
    UpdateCurrentRankingMasterFromGitHubRequest,
    GetSubscribeRequest,
    GetSubscribeByUserIdRequest,
    DeleteSubscribeRequest,
    DeleteSubscribeByUserIdRequest,
};