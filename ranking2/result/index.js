"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClusterRankingModelMasterResult = exports.CreateClusterRankingModelMasterResult = exports.DescribeClusterRankingModelMastersResult = exports.GetClusterRankingModelResult = exports.DescribeClusterRankingModelsResult = exports.GetGlobalRankingByUserIdResult = exports.GetGlobalRankingResult = exports.DescribeGlobalRankingsByUserIdResult = exports.DescribeGlobalRankingsResult = exports.CreateGlobalRankingReceivedRewardByStampTaskResult = exports.DeleteGlobalRankingReceivedRewardByUserIdResult = exports.GetGlobalRankingReceivedRewardByUserIdResult = exports.GetGlobalRankingReceivedRewardResult = exports.ReceiveGlobalRankingReceivedRewardByUserIdResult = exports.ReceiveGlobalRankingReceivedRewardResult = exports.CreateGlobalRankingReceivedRewardByUserIdResult = exports.CreateGlobalRankingReceivedRewardResult = exports.DescribeGlobalRankingReceivedRewardsByUserIdResult = exports.DescribeGlobalRankingReceivedRewardsResult = exports.VerifyGlobalRankingScoreByStampTaskResult = exports.VerifyGlobalRankingScoreByUserIdResult = exports.VerifyGlobalRankingScoreResult = exports.DeleteGlobalRankingScoreByUserIdResult = exports.GetGlobalRankingScoreByUserIdResult = exports.GetGlobalRankingScoreResult = exports.PutGlobalRankingScoreByUserIdResult = exports.PutGlobalRankingScoreResult = exports.DescribeGlobalRankingScoresByUserIdResult = exports.DescribeGlobalRankingScoresResult = exports.DeleteGlobalRankingModelMasterResult = exports.UpdateGlobalRankingModelMasterResult = exports.GetGlobalRankingModelMasterResult = exports.CreateGlobalRankingModelMasterResult = exports.DescribeGlobalRankingModelMastersResult = exports.GetGlobalRankingModelResult = exports.DescribeGlobalRankingModelsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.GetSubscribeRankingResult = exports.DescribeSubscribeRankingsByUserIdResult = exports.DescribeSubscribeRankingsResult = exports.VerifySubscribeRankingScoreByStampTaskResult = exports.VerifySubscribeRankingScoreByUserIdResult = exports.VerifySubscribeRankingScoreResult = exports.DeleteSubscribeRankingScoreByUserIdResult = exports.GetSubscribeRankingScoreByUserIdResult = exports.GetSubscribeRankingScoreResult = exports.PutSubscribeRankingScoreByUserIdResult = exports.PutSubscribeRankingScoreResult = exports.DescribeSubscribeRankingScoresByUserIdResult = exports.DescribeSubscribeRankingScoresResult = exports.AddSubscribeByUserIdResult = exports.AddSubscribeResult = exports.DescribeSubscribesByUserIdResult = exports.DescribeSubscribesResult = exports.DeleteSubscribeRankingModelMasterResult = exports.UpdateSubscribeRankingModelMasterResult = exports.GetSubscribeRankingModelMasterResult = exports.CreateSubscribeRankingModelMasterResult = exports.DescribeSubscribeRankingModelMastersResult = exports.GetSubscribeRankingModelResult = exports.DescribeSubscribeRankingModelsResult = exports.GetClusterRankingByUserIdResult = exports.GetClusterRankingResult = exports.DescribeClusterRankingsByUserIdResult = exports.DescribeClusterRankingsResult = exports.CreateClusterRankingReceivedRewardByStampTaskResult = exports.DeleteClusterRankingReceivedRewardByUserIdResult = exports.GetClusterRankingReceivedRewardByUserIdResult = exports.GetClusterRankingReceivedRewardResult = exports.ReceiveClusterRankingReceivedRewardByUserIdResult = exports.ReceiveClusterRankingReceivedRewardResult = exports.CreateClusterRankingReceivedRewardByUserIdResult = exports.CreateClusterRankingReceivedRewardResult = exports.DescribeClusterRankingReceivedRewardsByUserIdResult = exports.DescribeClusterRankingReceivedRewardsResult = exports.VerifyClusterRankingScoreByStampTaskResult = exports.VerifyClusterRankingScoreByUserIdResult = exports.VerifyClusterRankingScoreResult = exports.DeleteClusterRankingScoreByUserIdResult = exports.GetClusterRankingScoreByUserIdResult = exports.GetClusterRankingScoreResult = exports.PutClusterRankingScoreByUserIdResult = exports.PutClusterRankingScoreResult = exports.DescribeClusterRankingScoresByUserIdResult = exports.DescribeClusterRankingScoresResult = exports.DeleteClusterRankingModelMasterResult = exports.UpdateClusterRankingModelMasterResult = void 0;
exports.DeleteSubscribeByUserIdResult = exports.DeleteSubscribeResult = exports.GetSubscribeByUserIdResult = exports.GetSubscribeResult = exports.UpdateCurrentRankingMasterFromGitHubResult = exports.UpdateCurrentRankingMasterResult = exports.PreUpdateCurrentRankingMasterResult = exports.GetCurrentRankingMasterResult = exports.ExportMasterResult = exports.GetSubscribeRankingByUserIdResult = void 0;
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
var DescribeGlobalRankingModelsResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingModelsResult"));
exports.DescribeGlobalRankingModelsResult = DescribeGlobalRankingModelsResult_1.default;
var GetGlobalRankingModelResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingModelResult"));
exports.GetGlobalRankingModelResult = GetGlobalRankingModelResult_1.default;
var DescribeGlobalRankingModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingModelMastersResult"));
exports.DescribeGlobalRankingModelMastersResult = DescribeGlobalRankingModelMastersResult_1.default;
var CreateGlobalRankingModelMasterResult_1 = tslib_1.__importDefault(require("./CreateGlobalRankingModelMasterResult"));
exports.CreateGlobalRankingModelMasterResult = CreateGlobalRankingModelMasterResult_1.default;
var GetGlobalRankingModelMasterResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingModelMasterResult"));
exports.GetGlobalRankingModelMasterResult = GetGlobalRankingModelMasterResult_1.default;
var UpdateGlobalRankingModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateGlobalRankingModelMasterResult"));
exports.UpdateGlobalRankingModelMasterResult = UpdateGlobalRankingModelMasterResult_1.default;
var DeleteGlobalRankingModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteGlobalRankingModelMasterResult"));
exports.DeleteGlobalRankingModelMasterResult = DeleteGlobalRankingModelMasterResult_1.default;
var DescribeGlobalRankingScoresResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingScoresResult"));
exports.DescribeGlobalRankingScoresResult = DescribeGlobalRankingScoresResult_1.default;
var DescribeGlobalRankingScoresByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingScoresByUserIdResult"));
exports.DescribeGlobalRankingScoresByUserIdResult = DescribeGlobalRankingScoresByUserIdResult_1.default;
var PutGlobalRankingScoreResult_1 = tslib_1.__importDefault(require("./PutGlobalRankingScoreResult"));
exports.PutGlobalRankingScoreResult = PutGlobalRankingScoreResult_1.default;
var PutGlobalRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./PutGlobalRankingScoreByUserIdResult"));
exports.PutGlobalRankingScoreByUserIdResult = PutGlobalRankingScoreByUserIdResult_1.default;
var GetGlobalRankingScoreResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingScoreResult"));
exports.GetGlobalRankingScoreResult = GetGlobalRankingScoreResult_1.default;
var GetGlobalRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingScoreByUserIdResult"));
exports.GetGlobalRankingScoreByUserIdResult = GetGlobalRankingScoreByUserIdResult_1.default;
var DeleteGlobalRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteGlobalRankingScoreByUserIdResult"));
exports.DeleteGlobalRankingScoreByUserIdResult = DeleteGlobalRankingScoreByUserIdResult_1.default;
var VerifyGlobalRankingScoreResult_1 = tslib_1.__importDefault(require("./VerifyGlobalRankingScoreResult"));
exports.VerifyGlobalRankingScoreResult = VerifyGlobalRankingScoreResult_1.default;
var VerifyGlobalRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyGlobalRankingScoreByUserIdResult"));
exports.VerifyGlobalRankingScoreByUserIdResult = VerifyGlobalRankingScoreByUserIdResult_1.default;
var VerifyGlobalRankingScoreByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyGlobalRankingScoreByStampTaskResult"));
exports.VerifyGlobalRankingScoreByStampTaskResult = VerifyGlobalRankingScoreByStampTaskResult_1.default;
var DescribeGlobalRankingReceivedRewardsResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingReceivedRewardsResult"));
exports.DescribeGlobalRankingReceivedRewardsResult = DescribeGlobalRankingReceivedRewardsResult_1.default;
var DescribeGlobalRankingReceivedRewardsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingReceivedRewardsByUserIdResult"));
exports.DescribeGlobalRankingReceivedRewardsByUserIdResult = DescribeGlobalRankingReceivedRewardsByUserIdResult_1.default;
var CreateGlobalRankingReceivedRewardResult_1 = tslib_1.__importDefault(require("./CreateGlobalRankingReceivedRewardResult"));
exports.CreateGlobalRankingReceivedRewardResult = CreateGlobalRankingReceivedRewardResult_1.default;
var CreateGlobalRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./CreateGlobalRankingReceivedRewardByUserIdResult"));
exports.CreateGlobalRankingReceivedRewardByUserIdResult = CreateGlobalRankingReceivedRewardByUserIdResult_1.default;
var ReceiveGlobalRankingReceivedRewardResult_1 = tslib_1.__importDefault(require("./ReceiveGlobalRankingReceivedRewardResult"));
exports.ReceiveGlobalRankingReceivedRewardResult = ReceiveGlobalRankingReceivedRewardResult_1.default;
var ReceiveGlobalRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./ReceiveGlobalRankingReceivedRewardByUserIdResult"));
exports.ReceiveGlobalRankingReceivedRewardByUserIdResult = ReceiveGlobalRankingReceivedRewardByUserIdResult_1.default;
var GetGlobalRankingReceivedRewardResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingReceivedRewardResult"));
exports.GetGlobalRankingReceivedRewardResult = GetGlobalRankingReceivedRewardResult_1.default;
var GetGlobalRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingReceivedRewardByUserIdResult"));
exports.GetGlobalRankingReceivedRewardByUserIdResult = GetGlobalRankingReceivedRewardByUserIdResult_1.default;
var DeleteGlobalRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteGlobalRankingReceivedRewardByUserIdResult"));
exports.DeleteGlobalRankingReceivedRewardByUserIdResult = DeleteGlobalRankingReceivedRewardByUserIdResult_1.default;
var CreateGlobalRankingReceivedRewardByStampTaskResult_1 = tslib_1.__importDefault(require("./CreateGlobalRankingReceivedRewardByStampTaskResult"));
exports.CreateGlobalRankingReceivedRewardByStampTaskResult = CreateGlobalRankingReceivedRewardByStampTaskResult_1.default;
var DescribeGlobalRankingsResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingsResult"));
exports.DescribeGlobalRankingsResult = DescribeGlobalRankingsResult_1.default;
var DescribeGlobalRankingsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeGlobalRankingsByUserIdResult"));
exports.DescribeGlobalRankingsByUserIdResult = DescribeGlobalRankingsByUserIdResult_1.default;
var GetGlobalRankingResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingResult"));
exports.GetGlobalRankingResult = GetGlobalRankingResult_1.default;
var GetGlobalRankingByUserIdResult_1 = tslib_1.__importDefault(require("./GetGlobalRankingByUserIdResult"));
exports.GetGlobalRankingByUserIdResult = GetGlobalRankingByUserIdResult_1.default;
var DescribeClusterRankingModelsResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingModelsResult"));
exports.DescribeClusterRankingModelsResult = DescribeClusterRankingModelsResult_1.default;
var GetClusterRankingModelResult_1 = tslib_1.__importDefault(require("./GetClusterRankingModelResult"));
exports.GetClusterRankingModelResult = GetClusterRankingModelResult_1.default;
var DescribeClusterRankingModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingModelMastersResult"));
exports.DescribeClusterRankingModelMastersResult = DescribeClusterRankingModelMastersResult_1.default;
var CreateClusterRankingModelMasterResult_1 = tslib_1.__importDefault(require("./CreateClusterRankingModelMasterResult"));
exports.CreateClusterRankingModelMasterResult = CreateClusterRankingModelMasterResult_1.default;
var GetClusterRankingModelMasterResult_1 = tslib_1.__importDefault(require("./GetClusterRankingModelMasterResult"));
exports.GetClusterRankingModelMasterResult = GetClusterRankingModelMasterResult_1.default;
var UpdateClusterRankingModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateClusterRankingModelMasterResult"));
exports.UpdateClusterRankingModelMasterResult = UpdateClusterRankingModelMasterResult_1.default;
var DeleteClusterRankingModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteClusterRankingModelMasterResult"));
exports.DeleteClusterRankingModelMasterResult = DeleteClusterRankingModelMasterResult_1.default;
var DescribeClusterRankingScoresResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingScoresResult"));
exports.DescribeClusterRankingScoresResult = DescribeClusterRankingScoresResult_1.default;
var DescribeClusterRankingScoresByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingScoresByUserIdResult"));
exports.DescribeClusterRankingScoresByUserIdResult = DescribeClusterRankingScoresByUserIdResult_1.default;
var PutClusterRankingScoreResult_1 = tslib_1.__importDefault(require("./PutClusterRankingScoreResult"));
exports.PutClusterRankingScoreResult = PutClusterRankingScoreResult_1.default;
var PutClusterRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./PutClusterRankingScoreByUserIdResult"));
exports.PutClusterRankingScoreByUserIdResult = PutClusterRankingScoreByUserIdResult_1.default;
var GetClusterRankingScoreResult_1 = tslib_1.__importDefault(require("./GetClusterRankingScoreResult"));
exports.GetClusterRankingScoreResult = GetClusterRankingScoreResult_1.default;
var GetClusterRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./GetClusterRankingScoreByUserIdResult"));
exports.GetClusterRankingScoreByUserIdResult = GetClusterRankingScoreByUserIdResult_1.default;
var DeleteClusterRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteClusterRankingScoreByUserIdResult"));
exports.DeleteClusterRankingScoreByUserIdResult = DeleteClusterRankingScoreByUserIdResult_1.default;
var VerifyClusterRankingScoreResult_1 = tslib_1.__importDefault(require("./VerifyClusterRankingScoreResult"));
exports.VerifyClusterRankingScoreResult = VerifyClusterRankingScoreResult_1.default;
var VerifyClusterRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyClusterRankingScoreByUserIdResult"));
exports.VerifyClusterRankingScoreByUserIdResult = VerifyClusterRankingScoreByUserIdResult_1.default;
var VerifyClusterRankingScoreByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyClusterRankingScoreByStampTaskResult"));
exports.VerifyClusterRankingScoreByStampTaskResult = VerifyClusterRankingScoreByStampTaskResult_1.default;
var DescribeClusterRankingReceivedRewardsResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingReceivedRewardsResult"));
exports.DescribeClusterRankingReceivedRewardsResult = DescribeClusterRankingReceivedRewardsResult_1.default;
var DescribeClusterRankingReceivedRewardsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingReceivedRewardsByUserIdResult"));
exports.DescribeClusterRankingReceivedRewardsByUserIdResult = DescribeClusterRankingReceivedRewardsByUserIdResult_1.default;
var CreateClusterRankingReceivedRewardResult_1 = tslib_1.__importDefault(require("./CreateClusterRankingReceivedRewardResult"));
exports.CreateClusterRankingReceivedRewardResult = CreateClusterRankingReceivedRewardResult_1.default;
var CreateClusterRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./CreateClusterRankingReceivedRewardByUserIdResult"));
exports.CreateClusterRankingReceivedRewardByUserIdResult = CreateClusterRankingReceivedRewardByUserIdResult_1.default;
var ReceiveClusterRankingReceivedRewardResult_1 = tslib_1.__importDefault(require("./ReceiveClusterRankingReceivedRewardResult"));
exports.ReceiveClusterRankingReceivedRewardResult = ReceiveClusterRankingReceivedRewardResult_1.default;
var ReceiveClusterRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./ReceiveClusterRankingReceivedRewardByUserIdResult"));
exports.ReceiveClusterRankingReceivedRewardByUserIdResult = ReceiveClusterRankingReceivedRewardByUserIdResult_1.default;
var GetClusterRankingReceivedRewardResult_1 = tslib_1.__importDefault(require("./GetClusterRankingReceivedRewardResult"));
exports.GetClusterRankingReceivedRewardResult = GetClusterRankingReceivedRewardResult_1.default;
var GetClusterRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./GetClusterRankingReceivedRewardByUserIdResult"));
exports.GetClusterRankingReceivedRewardByUserIdResult = GetClusterRankingReceivedRewardByUserIdResult_1.default;
var DeleteClusterRankingReceivedRewardByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteClusterRankingReceivedRewardByUserIdResult"));
exports.DeleteClusterRankingReceivedRewardByUserIdResult = DeleteClusterRankingReceivedRewardByUserIdResult_1.default;
var CreateClusterRankingReceivedRewardByStampTaskResult_1 = tslib_1.__importDefault(require("./CreateClusterRankingReceivedRewardByStampTaskResult"));
exports.CreateClusterRankingReceivedRewardByStampTaskResult = CreateClusterRankingReceivedRewardByStampTaskResult_1.default;
var DescribeClusterRankingsResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingsResult"));
exports.DescribeClusterRankingsResult = DescribeClusterRankingsResult_1.default;
var DescribeClusterRankingsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeClusterRankingsByUserIdResult"));
exports.DescribeClusterRankingsByUserIdResult = DescribeClusterRankingsByUserIdResult_1.default;
var GetClusterRankingResult_1 = tslib_1.__importDefault(require("./GetClusterRankingResult"));
exports.GetClusterRankingResult = GetClusterRankingResult_1.default;
var GetClusterRankingByUserIdResult_1 = tslib_1.__importDefault(require("./GetClusterRankingByUserIdResult"));
exports.GetClusterRankingByUserIdResult = GetClusterRankingByUserIdResult_1.default;
var DescribeSubscribeRankingModelsResult_1 = tslib_1.__importDefault(require("./DescribeSubscribeRankingModelsResult"));
exports.DescribeSubscribeRankingModelsResult = DescribeSubscribeRankingModelsResult_1.default;
var GetSubscribeRankingModelResult_1 = tslib_1.__importDefault(require("./GetSubscribeRankingModelResult"));
exports.GetSubscribeRankingModelResult = GetSubscribeRankingModelResult_1.default;
var DescribeSubscribeRankingModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeSubscribeRankingModelMastersResult"));
exports.DescribeSubscribeRankingModelMastersResult = DescribeSubscribeRankingModelMastersResult_1.default;
var CreateSubscribeRankingModelMasterResult_1 = tslib_1.__importDefault(require("./CreateSubscribeRankingModelMasterResult"));
exports.CreateSubscribeRankingModelMasterResult = CreateSubscribeRankingModelMasterResult_1.default;
var GetSubscribeRankingModelMasterResult_1 = tslib_1.__importDefault(require("./GetSubscribeRankingModelMasterResult"));
exports.GetSubscribeRankingModelMasterResult = GetSubscribeRankingModelMasterResult_1.default;
var UpdateSubscribeRankingModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateSubscribeRankingModelMasterResult"));
exports.UpdateSubscribeRankingModelMasterResult = UpdateSubscribeRankingModelMasterResult_1.default;
var DeleteSubscribeRankingModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteSubscribeRankingModelMasterResult"));
exports.DeleteSubscribeRankingModelMasterResult = DeleteSubscribeRankingModelMasterResult_1.default;
var DescribeSubscribesResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesResult"));
exports.DescribeSubscribesResult = DescribeSubscribesResult_1.default;
var DescribeSubscribesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesByUserIdResult"));
exports.DescribeSubscribesByUserIdResult = DescribeSubscribesByUserIdResult_1.default;
var AddSubscribeResult_1 = tslib_1.__importDefault(require("./AddSubscribeResult"));
exports.AddSubscribeResult = AddSubscribeResult_1.default;
var AddSubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./AddSubscribeByUserIdResult"));
exports.AddSubscribeByUserIdResult = AddSubscribeByUserIdResult_1.default;
var DescribeSubscribeRankingScoresResult_1 = tslib_1.__importDefault(require("./DescribeSubscribeRankingScoresResult"));
exports.DescribeSubscribeRankingScoresResult = DescribeSubscribeRankingScoresResult_1.default;
var DescribeSubscribeRankingScoresByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSubscribeRankingScoresByUserIdResult"));
exports.DescribeSubscribeRankingScoresByUserIdResult = DescribeSubscribeRankingScoresByUserIdResult_1.default;
var PutSubscribeRankingScoreResult_1 = tslib_1.__importDefault(require("./PutSubscribeRankingScoreResult"));
exports.PutSubscribeRankingScoreResult = PutSubscribeRankingScoreResult_1.default;
var PutSubscribeRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./PutSubscribeRankingScoreByUserIdResult"));
exports.PutSubscribeRankingScoreByUserIdResult = PutSubscribeRankingScoreByUserIdResult_1.default;
var GetSubscribeRankingScoreResult_1 = tslib_1.__importDefault(require("./GetSubscribeRankingScoreResult"));
exports.GetSubscribeRankingScoreResult = GetSubscribeRankingScoreResult_1.default;
var GetSubscribeRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./GetSubscribeRankingScoreByUserIdResult"));
exports.GetSubscribeRankingScoreByUserIdResult = GetSubscribeRankingScoreByUserIdResult_1.default;
var DeleteSubscribeRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteSubscribeRankingScoreByUserIdResult"));
exports.DeleteSubscribeRankingScoreByUserIdResult = DeleteSubscribeRankingScoreByUserIdResult_1.default;
var VerifySubscribeRankingScoreResult_1 = tslib_1.__importDefault(require("./VerifySubscribeRankingScoreResult"));
exports.VerifySubscribeRankingScoreResult = VerifySubscribeRankingScoreResult_1.default;
var VerifySubscribeRankingScoreByUserIdResult_1 = tslib_1.__importDefault(require("./VerifySubscribeRankingScoreByUserIdResult"));
exports.VerifySubscribeRankingScoreByUserIdResult = VerifySubscribeRankingScoreByUserIdResult_1.default;
var VerifySubscribeRankingScoreByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifySubscribeRankingScoreByStampTaskResult"));
exports.VerifySubscribeRankingScoreByStampTaskResult = VerifySubscribeRankingScoreByStampTaskResult_1.default;
var DescribeSubscribeRankingsResult_1 = tslib_1.__importDefault(require("./DescribeSubscribeRankingsResult"));
exports.DescribeSubscribeRankingsResult = DescribeSubscribeRankingsResult_1.default;
var DescribeSubscribeRankingsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSubscribeRankingsByUserIdResult"));
exports.DescribeSubscribeRankingsByUserIdResult = DescribeSubscribeRankingsByUserIdResult_1.default;
var GetSubscribeRankingResult_1 = tslib_1.__importDefault(require("./GetSubscribeRankingResult"));
exports.GetSubscribeRankingResult = GetSubscribeRankingResult_1.default;
var GetSubscribeRankingByUserIdResult_1 = tslib_1.__importDefault(require("./GetSubscribeRankingByUserIdResult"));
exports.GetSubscribeRankingByUserIdResult = GetSubscribeRankingByUserIdResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentRankingMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentRankingMasterResult"));
exports.GetCurrentRankingMasterResult = GetCurrentRankingMasterResult_1.default;
var PreUpdateCurrentRankingMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentRankingMasterResult"));
exports.PreUpdateCurrentRankingMasterResult = PreUpdateCurrentRankingMasterResult_1.default;
var UpdateCurrentRankingMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRankingMasterResult"));
exports.UpdateCurrentRankingMasterResult = UpdateCurrentRankingMasterResult_1.default;
var UpdateCurrentRankingMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRankingMasterFromGitHubResult"));
exports.UpdateCurrentRankingMasterFromGitHubResult = UpdateCurrentRankingMasterFromGitHubResult_1.default;
var GetSubscribeResult_1 = tslib_1.__importDefault(require("./GetSubscribeResult"));
exports.GetSubscribeResult = GetSubscribeResult_1.default;
var GetSubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./GetSubscribeByUserIdResult"));
exports.GetSubscribeByUserIdResult = GetSubscribeByUserIdResult_1.default;
var DeleteSubscribeResult_1 = tslib_1.__importDefault(require("./DeleteSubscribeResult"));
exports.DeleteSubscribeResult = DeleteSubscribeResult_1.default;
var DeleteSubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteSubscribeByUserIdResult"));
exports.DeleteSubscribeByUserIdResult = DeleteSubscribeByUserIdResult_1.default;
//# sourceMappingURL=index.js.map