"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeMatchmakingSeasonGatheringsRequest = exports.DescribeSeasonGatheringsRequest = exports.DeleteSeasonModelMasterRequest = exports.UpdateSeasonModelMasterRequest = exports.GetSeasonModelMasterRequest = exports.CreateSeasonModelMasterRequest = exports.DescribeSeasonModelMastersRequest = exports.GetSeasonModelRequest = exports.DescribeSeasonModelsRequest = exports.UpdateCurrentModelMasterFromGitHubRequest = exports.UpdateCurrentModelMasterRequest = exports.PreUpdateCurrentModelMasterRequest = exports.GetCurrentModelMasterRequest = exports.ExportMasterRequest = exports.GetRatingModelRequest = exports.DescribeRatingModelsRequest = exports.DeleteRatingModelMasterRequest = exports.UpdateRatingModelMasterRequest = exports.GetRatingModelMasterRequest = exports.CreateRatingModelMasterRequest = exports.DescribeRatingModelMastersRequest = exports.DeleteGatheringRequest = exports.EarlyCompleteByUserIdRequest = exports.EarlyCompleteRequest = exports.CancelMatchmakingByUserIdRequest = exports.CancelMatchmakingRequest = exports.GetGatheringRequest = exports.PingByUserIdRequest = exports.PingRequest = exports.DoMatchmakingByUserIdRequest = exports.DoMatchmakingRequest = exports.DoMatchmakingByPlayerRequest = exports.UpdateGatheringByUserIdRequest = exports.UpdateGatheringRequest = exports.CreateGatheringByUserIdRequest = exports.CreateGatheringRequest = exports.DescribeGatheringsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.CommitVoteRequest = exports.VoteMultipleRequest = exports.VoteRequest = exports.GetBallotByUserIdRequest = exports.GetBallotRequest = exports.DeleteRatingRequest = exports.PutResultRequest = exports.GetRatingByUserIdRequest = exports.GetRatingRequest = exports.DescribeRatingsByUserIdRequest = exports.DescribeRatingsRequest = exports.GetJoinedSeasonGatheringByUserIdRequest = exports.GetJoinedSeasonGatheringRequest = exports.DescribeJoinedSeasonGatheringsByUserIdRequest = exports.DescribeJoinedSeasonGatheringsRequest = exports.VerifyIncludeParticipantByStampTaskRequest = exports.DeleteSeasonGatheringRequest = exports.VerifyIncludeParticipantByUserIdRequest = exports.VerifyIncludeParticipantRequest = exports.GetSeasonGatheringRequest = exports.DoSeasonMatchmakingByUserIdRequest = exports.DoSeasonMatchmakingRequest = void 0;
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
var DescribeNamespacesRequest_1 = tslib_1.__importDefault(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = tslib_1.__importDefault(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = tslib_1.__importDefault(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = tslib_1.__importDefault(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = tslib_1.__importDefault(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = tslib_1.__importDefault(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdRequest"));
exports.DumpUserDataByUserIdRequest = DumpUserDataByUserIdRequest_1.default;
var CheckDumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdRequest"));
exports.CheckDumpUserDataByUserIdRequest = CheckDumpUserDataByUserIdRequest_1.default;
var CleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdRequest"));
exports.CleanUserDataByUserIdRequest = CleanUserDataByUserIdRequest_1.default;
var CheckCleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdRequest"));
exports.CheckCleanUserDataByUserIdRequest = CheckCleanUserDataByUserIdRequest_1.default;
var PrepareImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdRequest"));
exports.PrepareImportUserDataByUserIdRequest = PrepareImportUserDataByUserIdRequest_1.default;
var ImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdRequest"));
exports.ImportUserDataByUserIdRequest = ImportUserDataByUserIdRequest_1.default;
var CheckImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdRequest"));
exports.CheckImportUserDataByUserIdRequest = CheckImportUserDataByUserIdRequest_1.default;
var DescribeGatheringsRequest_1 = tslib_1.__importDefault(require("./DescribeGatheringsRequest"));
exports.DescribeGatheringsRequest = DescribeGatheringsRequest_1.default;
var CreateGatheringRequest_1 = tslib_1.__importDefault(require("./CreateGatheringRequest"));
exports.CreateGatheringRequest = CreateGatheringRequest_1.default;
var CreateGatheringByUserIdRequest_1 = tslib_1.__importDefault(require("./CreateGatheringByUserIdRequest"));
exports.CreateGatheringByUserIdRequest = CreateGatheringByUserIdRequest_1.default;
var UpdateGatheringRequest_1 = tslib_1.__importDefault(require("./UpdateGatheringRequest"));
exports.UpdateGatheringRequest = UpdateGatheringRequest_1.default;
var UpdateGatheringByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateGatheringByUserIdRequest"));
exports.UpdateGatheringByUserIdRequest = UpdateGatheringByUserIdRequest_1.default;
var DoMatchmakingByPlayerRequest_1 = tslib_1.__importDefault(require("./DoMatchmakingByPlayerRequest"));
exports.DoMatchmakingByPlayerRequest = DoMatchmakingByPlayerRequest_1.default;
var DoMatchmakingRequest_1 = tslib_1.__importDefault(require("./DoMatchmakingRequest"));
exports.DoMatchmakingRequest = DoMatchmakingRequest_1.default;
var DoMatchmakingByUserIdRequest_1 = tslib_1.__importDefault(require("./DoMatchmakingByUserIdRequest"));
exports.DoMatchmakingByUserIdRequest = DoMatchmakingByUserIdRequest_1.default;
var PingRequest_1 = tslib_1.__importDefault(require("./PingRequest"));
exports.PingRequest = PingRequest_1.default;
var PingByUserIdRequest_1 = tslib_1.__importDefault(require("./PingByUserIdRequest"));
exports.PingByUserIdRequest = PingByUserIdRequest_1.default;
var GetGatheringRequest_1 = tslib_1.__importDefault(require("./GetGatheringRequest"));
exports.GetGatheringRequest = GetGatheringRequest_1.default;
var CancelMatchmakingRequest_1 = tslib_1.__importDefault(require("./CancelMatchmakingRequest"));
exports.CancelMatchmakingRequest = CancelMatchmakingRequest_1.default;
var CancelMatchmakingByUserIdRequest_1 = tslib_1.__importDefault(require("./CancelMatchmakingByUserIdRequest"));
exports.CancelMatchmakingByUserIdRequest = CancelMatchmakingByUserIdRequest_1.default;
var EarlyCompleteRequest_1 = tslib_1.__importDefault(require("./EarlyCompleteRequest"));
exports.EarlyCompleteRequest = EarlyCompleteRequest_1.default;
var EarlyCompleteByUserIdRequest_1 = tslib_1.__importDefault(require("./EarlyCompleteByUserIdRequest"));
exports.EarlyCompleteByUserIdRequest = EarlyCompleteByUserIdRequest_1.default;
var DeleteGatheringRequest_1 = tslib_1.__importDefault(require("./DeleteGatheringRequest"));
exports.DeleteGatheringRequest = DeleteGatheringRequest_1.default;
var DescribeRatingModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeRatingModelMastersRequest"));
exports.DescribeRatingModelMastersRequest = DescribeRatingModelMastersRequest_1.default;
var CreateRatingModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateRatingModelMasterRequest"));
exports.CreateRatingModelMasterRequest = CreateRatingModelMasterRequest_1.default;
var GetRatingModelMasterRequest_1 = tslib_1.__importDefault(require("./GetRatingModelMasterRequest"));
exports.GetRatingModelMasterRequest = GetRatingModelMasterRequest_1.default;
var UpdateRatingModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateRatingModelMasterRequest"));
exports.UpdateRatingModelMasterRequest = UpdateRatingModelMasterRequest_1.default;
var DeleteRatingModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteRatingModelMasterRequest"));
exports.DeleteRatingModelMasterRequest = DeleteRatingModelMasterRequest_1.default;
var DescribeRatingModelsRequest_1 = tslib_1.__importDefault(require("./DescribeRatingModelsRequest"));
exports.DescribeRatingModelsRequest = DescribeRatingModelsRequest_1.default;
var GetRatingModelRequest_1 = tslib_1.__importDefault(require("./GetRatingModelRequest"));
exports.GetRatingModelRequest = GetRatingModelRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentModelMasterRequest"));
exports.GetCurrentModelMasterRequest = GetCurrentModelMasterRequest_1.default;
var PreUpdateCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentModelMasterRequest"));
exports.PreUpdateCurrentModelMasterRequest = PreUpdateCurrentModelMasterRequest_1.default;
var UpdateCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterRequest"));
exports.UpdateCurrentModelMasterRequest = UpdateCurrentModelMasterRequest_1.default;
var UpdateCurrentModelMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterFromGitHubRequest"));
exports.UpdateCurrentModelMasterFromGitHubRequest = UpdateCurrentModelMasterFromGitHubRequest_1.default;
var DescribeSeasonModelsRequest_1 = tslib_1.__importDefault(require("./DescribeSeasonModelsRequest"));
exports.DescribeSeasonModelsRequest = DescribeSeasonModelsRequest_1.default;
var GetSeasonModelRequest_1 = tslib_1.__importDefault(require("./GetSeasonModelRequest"));
exports.GetSeasonModelRequest = GetSeasonModelRequest_1.default;
var DescribeSeasonModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeSeasonModelMastersRequest"));
exports.DescribeSeasonModelMastersRequest = DescribeSeasonModelMastersRequest_1.default;
var CreateSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateSeasonModelMasterRequest"));
exports.CreateSeasonModelMasterRequest = CreateSeasonModelMasterRequest_1.default;
var GetSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./GetSeasonModelMasterRequest"));
exports.GetSeasonModelMasterRequest = GetSeasonModelMasterRequest_1.default;
var UpdateSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateSeasonModelMasterRequest"));
exports.UpdateSeasonModelMasterRequest = UpdateSeasonModelMasterRequest_1.default;
var DeleteSeasonModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteSeasonModelMasterRequest"));
exports.DeleteSeasonModelMasterRequest = DeleteSeasonModelMasterRequest_1.default;
var DescribeSeasonGatheringsRequest_1 = tslib_1.__importDefault(require("./DescribeSeasonGatheringsRequest"));
exports.DescribeSeasonGatheringsRequest = DescribeSeasonGatheringsRequest_1.default;
var DescribeMatchmakingSeasonGatheringsRequest_1 = tslib_1.__importDefault(require("./DescribeMatchmakingSeasonGatheringsRequest"));
exports.DescribeMatchmakingSeasonGatheringsRequest = DescribeMatchmakingSeasonGatheringsRequest_1.default;
var DoSeasonMatchmakingRequest_1 = tslib_1.__importDefault(require("./DoSeasonMatchmakingRequest"));
exports.DoSeasonMatchmakingRequest = DoSeasonMatchmakingRequest_1.default;
var DoSeasonMatchmakingByUserIdRequest_1 = tslib_1.__importDefault(require("./DoSeasonMatchmakingByUserIdRequest"));
exports.DoSeasonMatchmakingByUserIdRequest = DoSeasonMatchmakingByUserIdRequest_1.default;
var GetSeasonGatheringRequest_1 = tslib_1.__importDefault(require("./GetSeasonGatheringRequest"));
exports.GetSeasonGatheringRequest = GetSeasonGatheringRequest_1.default;
var VerifyIncludeParticipantRequest_1 = tslib_1.__importDefault(require("./VerifyIncludeParticipantRequest"));
exports.VerifyIncludeParticipantRequest = VerifyIncludeParticipantRequest_1.default;
var VerifyIncludeParticipantByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyIncludeParticipantByUserIdRequest"));
exports.VerifyIncludeParticipantByUserIdRequest = VerifyIncludeParticipantByUserIdRequest_1.default;
var DeleteSeasonGatheringRequest_1 = tslib_1.__importDefault(require("./DeleteSeasonGatheringRequest"));
exports.DeleteSeasonGatheringRequest = DeleteSeasonGatheringRequest_1.default;
var VerifyIncludeParticipantByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyIncludeParticipantByStampTaskRequest"));
exports.VerifyIncludeParticipantByStampTaskRequest = VerifyIncludeParticipantByStampTaskRequest_1.default;
var DescribeJoinedSeasonGatheringsRequest_1 = tslib_1.__importDefault(require("./DescribeJoinedSeasonGatheringsRequest"));
exports.DescribeJoinedSeasonGatheringsRequest = DescribeJoinedSeasonGatheringsRequest_1.default;
var DescribeJoinedSeasonGatheringsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeJoinedSeasonGatheringsByUserIdRequest"));
exports.DescribeJoinedSeasonGatheringsByUserIdRequest = DescribeJoinedSeasonGatheringsByUserIdRequest_1.default;
var GetJoinedSeasonGatheringRequest_1 = tslib_1.__importDefault(require("./GetJoinedSeasonGatheringRequest"));
exports.GetJoinedSeasonGatheringRequest = GetJoinedSeasonGatheringRequest_1.default;
var GetJoinedSeasonGatheringByUserIdRequest_1 = tslib_1.__importDefault(require("./GetJoinedSeasonGatheringByUserIdRequest"));
exports.GetJoinedSeasonGatheringByUserIdRequest = GetJoinedSeasonGatheringByUserIdRequest_1.default;
var DescribeRatingsRequest_1 = tslib_1.__importDefault(require("./DescribeRatingsRequest"));
exports.DescribeRatingsRequest = DescribeRatingsRequest_1.default;
var DescribeRatingsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeRatingsByUserIdRequest"));
exports.DescribeRatingsByUserIdRequest = DescribeRatingsByUserIdRequest_1.default;
var GetRatingRequest_1 = tslib_1.__importDefault(require("./GetRatingRequest"));
exports.GetRatingRequest = GetRatingRequest_1.default;
var GetRatingByUserIdRequest_1 = tslib_1.__importDefault(require("./GetRatingByUserIdRequest"));
exports.GetRatingByUserIdRequest = GetRatingByUserIdRequest_1.default;
var PutResultRequest_1 = tslib_1.__importDefault(require("./PutResultRequest"));
exports.PutResultRequest = PutResultRequest_1.default;
var DeleteRatingRequest_1 = tslib_1.__importDefault(require("./DeleteRatingRequest"));
exports.DeleteRatingRequest = DeleteRatingRequest_1.default;
var GetBallotRequest_1 = tslib_1.__importDefault(require("./GetBallotRequest"));
exports.GetBallotRequest = GetBallotRequest_1.default;
var GetBallotByUserIdRequest_1 = tslib_1.__importDefault(require("./GetBallotByUserIdRequest"));
exports.GetBallotByUserIdRequest = GetBallotByUserIdRequest_1.default;
var VoteRequest_1 = tslib_1.__importDefault(require("./VoteRequest"));
exports.VoteRequest = VoteRequest_1.default;
var VoteMultipleRequest_1 = tslib_1.__importDefault(require("./VoteMultipleRequest"));
exports.VoteMultipleRequest = VoteMultipleRequest_1.default;
var CommitVoteRequest_1 = tslib_1.__importDefault(require("./CommitVoteRequest"));
exports.CommitVoteRequest = CommitVoteRequest_1.default;
//# sourceMappingURL=index.js.map