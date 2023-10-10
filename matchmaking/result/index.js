"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitVoteResult = exports.VoteMultipleResult = exports.VoteResult = exports.GetBallotByUserIdResult = exports.GetBallotResult = exports.DeleteRatingResult = exports.PutResultResult = exports.GetRatingByUserIdResult = exports.GetRatingResult = exports.DescribeRatingsByUserIdResult = exports.DescribeRatingsResult = exports.UpdateCurrentRatingModelMasterFromGitHubResult = exports.UpdateCurrentRatingModelMasterResult = exports.GetCurrentRatingModelMasterResult = exports.ExportMasterResult = exports.GetRatingModelResult = exports.DescribeRatingModelsResult = exports.DeleteRatingModelMasterResult = exports.UpdateRatingModelMasterResult = exports.GetRatingModelMasterResult = exports.CreateRatingModelMasterResult = exports.DescribeRatingModelMastersResult = exports.DeleteGatheringResult = exports.CancelMatchmakingByUserIdResult = exports.CancelMatchmakingResult = exports.GetGatheringResult = exports.DoMatchmakingByUserIdResult = exports.DoMatchmakingResult = exports.DoMatchmakingByPlayerResult = exports.UpdateGatheringByUserIdResult = exports.UpdateGatheringResult = exports.CreateGatheringByUserIdResult = exports.CreateGatheringResult = exports.DescribeGatheringsResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeGatheringsResult_1 = tslib_1.__importDefault(require("./DescribeGatheringsResult"));
exports.DescribeGatheringsResult = DescribeGatheringsResult_1.default;
var CreateGatheringResult_1 = tslib_1.__importDefault(require("./CreateGatheringResult"));
exports.CreateGatheringResult = CreateGatheringResult_1.default;
var CreateGatheringByUserIdResult_1 = tslib_1.__importDefault(require("./CreateGatheringByUserIdResult"));
exports.CreateGatheringByUserIdResult = CreateGatheringByUserIdResult_1.default;
var UpdateGatheringResult_1 = tslib_1.__importDefault(require("./UpdateGatheringResult"));
exports.UpdateGatheringResult = UpdateGatheringResult_1.default;
var UpdateGatheringByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateGatheringByUserIdResult"));
exports.UpdateGatheringByUserIdResult = UpdateGatheringByUserIdResult_1.default;
var DoMatchmakingByPlayerResult_1 = tslib_1.__importDefault(require("./DoMatchmakingByPlayerResult"));
exports.DoMatchmakingByPlayerResult = DoMatchmakingByPlayerResult_1.default;
var DoMatchmakingResult_1 = tslib_1.__importDefault(require("./DoMatchmakingResult"));
exports.DoMatchmakingResult = DoMatchmakingResult_1.default;
var DoMatchmakingByUserIdResult_1 = tslib_1.__importDefault(require("./DoMatchmakingByUserIdResult"));
exports.DoMatchmakingByUserIdResult = DoMatchmakingByUserIdResult_1.default;
var GetGatheringResult_1 = tslib_1.__importDefault(require("./GetGatheringResult"));
exports.GetGatheringResult = GetGatheringResult_1.default;
var CancelMatchmakingResult_1 = tslib_1.__importDefault(require("./CancelMatchmakingResult"));
exports.CancelMatchmakingResult = CancelMatchmakingResult_1.default;
var CancelMatchmakingByUserIdResult_1 = tslib_1.__importDefault(require("./CancelMatchmakingByUserIdResult"));
exports.CancelMatchmakingByUserIdResult = CancelMatchmakingByUserIdResult_1.default;
var DeleteGatheringResult_1 = tslib_1.__importDefault(require("./DeleteGatheringResult"));
exports.DeleteGatheringResult = DeleteGatheringResult_1.default;
var DescribeRatingModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeRatingModelMastersResult"));
exports.DescribeRatingModelMastersResult = DescribeRatingModelMastersResult_1.default;
var CreateRatingModelMasterResult_1 = tslib_1.__importDefault(require("./CreateRatingModelMasterResult"));
exports.CreateRatingModelMasterResult = CreateRatingModelMasterResult_1.default;
var GetRatingModelMasterResult_1 = tslib_1.__importDefault(require("./GetRatingModelMasterResult"));
exports.GetRatingModelMasterResult = GetRatingModelMasterResult_1.default;
var UpdateRatingModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateRatingModelMasterResult"));
exports.UpdateRatingModelMasterResult = UpdateRatingModelMasterResult_1.default;
var DeleteRatingModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteRatingModelMasterResult"));
exports.DeleteRatingModelMasterResult = DeleteRatingModelMasterResult_1.default;
var DescribeRatingModelsResult_1 = tslib_1.__importDefault(require("./DescribeRatingModelsResult"));
exports.DescribeRatingModelsResult = DescribeRatingModelsResult_1.default;
var GetRatingModelResult_1 = tslib_1.__importDefault(require("./GetRatingModelResult"));
exports.GetRatingModelResult = GetRatingModelResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentRatingModelMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentRatingModelMasterResult"));
exports.GetCurrentRatingModelMasterResult = GetCurrentRatingModelMasterResult_1.default;
var UpdateCurrentRatingModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRatingModelMasterResult"));
exports.UpdateCurrentRatingModelMasterResult = UpdateCurrentRatingModelMasterResult_1.default;
var UpdateCurrentRatingModelMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRatingModelMasterFromGitHubResult"));
exports.UpdateCurrentRatingModelMasterFromGitHubResult = UpdateCurrentRatingModelMasterFromGitHubResult_1.default;
var DescribeRatingsResult_1 = tslib_1.__importDefault(require("./DescribeRatingsResult"));
exports.DescribeRatingsResult = DescribeRatingsResult_1.default;
var DescribeRatingsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeRatingsByUserIdResult"));
exports.DescribeRatingsByUserIdResult = DescribeRatingsByUserIdResult_1.default;
var GetRatingResult_1 = tslib_1.__importDefault(require("./GetRatingResult"));
exports.GetRatingResult = GetRatingResult_1.default;
var GetRatingByUserIdResult_1 = tslib_1.__importDefault(require("./GetRatingByUserIdResult"));
exports.GetRatingByUserIdResult = GetRatingByUserIdResult_1.default;
var PutResultResult_1 = tslib_1.__importDefault(require("./PutResultResult"));
exports.PutResultResult = PutResultResult_1.default;
var DeleteRatingResult_1 = tslib_1.__importDefault(require("./DeleteRatingResult"));
exports.DeleteRatingResult = DeleteRatingResult_1.default;
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