"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoSeasonMatchmakingResult = exports.DescribeMatchmakingSeasonGatheringsResult = exports.DescribeSeasonGatheringsResult = exports.DeleteSeasonModelMasterResult = exports.UpdateSeasonModelMasterResult = exports.GetSeasonModelMasterResult = exports.CreateSeasonModelMasterResult = exports.DescribeSeasonModelMastersResult = exports.GetSeasonModelResult = exports.DescribeSeasonModelsResult = exports.UpdateCurrentModelMasterFromGitHubResult = exports.UpdateCurrentModelMasterResult = exports.GetCurrentModelMasterResult = exports.ExportMasterResult = exports.GetRatingModelResult = exports.DescribeRatingModelsResult = exports.DeleteRatingModelMasterResult = exports.UpdateRatingModelMasterResult = exports.GetRatingModelMasterResult = exports.CreateRatingModelMasterResult = exports.DescribeRatingModelMastersResult = exports.DeleteGatheringResult = exports.EarlyCompleteByUserIdResult = exports.EarlyCompleteResult = exports.CancelMatchmakingByUserIdResult = exports.CancelMatchmakingResult = exports.GetGatheringResult = exports.PingByUserIdResult = exports.PingResult = exports.DoMatchmakingByUserIdResult = exports.DoMatchmakingResult = exports.DoMatchmakingByPlayerResult = exports.UpdateGatheringByUserIdResult = exports.UpdateGatheringResult = exports.CreateGatheringByUserIdResult = exports.CreateGatheringResult = exports.DescribeGatheringsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.CommitVoteResult = exports.VoteMultipleResult = exports.VoteResult = exports.GetBallotByUserIdResult = exports.GetBallotResult = exports.DeleteRatingResult = exports.PutResultResult = exports.GetRatingByUserIdResult = exports.GetRatingResult = exports.DescribeRatingsByUserIdResult = exports.DescribeRatingsResult = exports.GetJoinedSeasonGatheringByUserIdResult = exports.GetJoinedSeasonGatheringResult = exports.DescribeJoinedSeasonGatheringsByUserIdResult = exports.DescribeJoinedSeasonGatheringsResult = exports.DeleteSeasonGatheringResult = exports.GetSeasonGatheringResult = exports.DoSeasonMatchmakingByUserIdResult = void 0;
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
var PingResult_1 = tslib_1.__importDefault(require("./PingResult"));
exports.PingResult = PingResult_1.default;
var PingByUserIdResult_1 = tslib_1.__importDefault(require("./PingByUserIdResult"));
exports.PingByUserIdResult = PingByUserIdResult_1.default;
var GetGatheringResult_1 = tslib_1.__importDefault(require("./GetGatheringResult"));
exports.GetGatheringResult = GetGatheringResult_1.default;
var CancelMatchmakingResult_1 = tslib_1.__importDefault(require("./CancelMatchmakingResult"));
exports.CancelMatchmakingResult = CancelMatchmakingResult_1.default;
var CancelMatchmakingByUserIdResult_1 = tslib_1.__importDefault(require("./CancelMatchmakingByUserIdResult"));
exports.CancelMatchmakingByUserIdResult = CancelMatchmakingByUserIdResult_1.default;
var EarlyCompleteResult_1 = tslib_1.__importDefault(require("./EarlyCompleteResult"));
exports.EarlyCompleteResult = EarlyCompleteResult_1.default;
var EarlyCompleteByUserIdResult_1 = tslib_1.__importDefault(require("./EarlyCompleteByUserIdResult"));
exports.EarlyCompleteByUserIdResult = EarlyCompleteByUserIdResult_1.default;
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
var GetCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentModelMasterResult"));
exports.GetCurrentModelMasterResult = GetCurrentModelMasterResult_1.default;
var UpdateCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterResult"));
exports.UpdateCurrentModelMasterResult = UpdateCurrentModelMasterResult_1.default;
var UpdateCurrentModelMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterFromGitHubResult"));
exports.UpdateCurrentModelMasterFromGitHubResult = UpdateCurrentModelMasterFromGitHubResult_1.default;
var DescribeSeasonModelsResult_1 = tslib_1.__importDefault(require("./DescribeSeasonModelsResult"));
exports.DescribeSeasonModelsResult = DescribeSeasonModelsResult_1.default;
var GetSeasonModelResult_1 = tslib_1.__importDefault(require("./GetSeasonModelResult"));
exports.GetSeasonModelResult = GetSeasonModelResult_1.default;
var DescribeSeasonModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeSeasonModelMastersResult"));
exports.DescribeSeasonModelMastersResult = DescribeSeasonModelMastersResult_1.default;
var CreateSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./CreateSeasonModelMasterResult"));
exports.CreateSeasonModelMasterResult = CreateSeasonModelMasterResult_1.default;
var GetSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./GetSeasonModelMasterResult"));
exports.GetSeasonModelMasterResult = GetSeasonModelMasterResult_1.default;
var UpdateSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateSeasonModelMasterResult"));
exports.UpdateSeasonModelMasterResult = UpdateSeasonModelMasterResult_1.default;
var DeleteSeasonModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteSeasonModelMasterResult"));
exports.DeleteSeasonModelMasterResult = DeleteSeasonModelMasterResult_1.default;
var DescribeSeasonGatheringsResult_1 = tslib_1.__importDefault(require("./DescribeSeasonGatheringsResult"));
exports.DescribeSeasonGatheringsResult = DescribeSeasonGatheringsResult_1.default;
var DescribeMatchmakingSeasonGatheringsResult_1 = tslib_1.__importDefault(require("./DescribeMatchmakingSeasonGatheringsResult"));
exports.DescribeMatchmakingSeasonGatheringsResult = DescribeMatchmakingSeasonGatheringsResult_1.default;
var DoSeasonMatchmakingResult_1 = tslib_1.__importDefault(require("./DoSeasonMatchmakingResult"));
exports.DoSeasonMatchmakingResult = DoSeasonMatchmakingResult_1.default;
var DoSeasonMatchmakingByUserIdResult_1 = tslib_1.__importDefault(require("./DoSeasonMatchmakingByUserIdResult"));
exports.DoSeasonMatchmakingByUserIdResult = DoSeasonMatchmakingByUserIdResult_1.default;
var GetSeasonGatheringResult_1 = tslib_1.__importDefault(require("./GetSeasonGatheringResult"));
exports.GetSeasonGatheringResult = GetSeasonGatheringResult_1.default;
var DeleteSeasonGatheringResult_1 = tslib_1.__importDefault(require("./DeleteSeasonGatheringResult"));
exports.DeleteSeasonGatheringResult = DeleteSeasonGatheringResult_1.default;
var DescribeJoinedSeasonGatheringsResult_1 = tslib_1.__importDefault(require("./DescribeJoinedSeasonGatheringsResult"));
exports.DescribeJoinedSeasonGatheringsResult = DescribeJoinedSeasonGatheringsResult_1.default;
var DescribeJoinedSeasonGatheringsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeJoinedSeasonGatheringsByUserIdResult"));
exports.DescribeJoinedSeasonGatheringsByUserIdResult = DescribeJoinedSeasonGatheringsByUserIdResult_1.default;
var GetJoinedSeasonGatheringResult_1 = tslib_1.__importDefault(require("./GetJoinedSeasonGatheringResult"));
exports.GetJoinedSeasonGatheringResult = GetJoinedSeasonGatheringResult_1.default;
var GetJoinedSeasonGatheringByUserIdResult_1 = tslib_1.__importDefault(require("./GetJoinedSeasonGatheringByUserIdResult"));
exports.GetJoinedSeasonGatheringByUserIdResult = GetJoinedSeasonGatheringByUserIdResult_1.default;
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