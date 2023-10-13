"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitVoteRequest = exports.VoteMultipleRequest = exports.VoteRequest = exports.GetBallotByUserIdRequest = exports.GetBallotRequest = exports.DeleteRatingRequest = exports.PutResultRequest = exports.GetRatingByUserIdRequest = exports.GetRatingRequest = exports.DescribeRatingsByUserIdRequest = exports.DescribeRatingsRequest = exports.UpdateCurrentRatingModelMasterFromGitHubRequest = exports.UpdateCurrentRatingModelMasterRequest = exports.GetCurrentRatingModelMasterRequest = exports.ExportMasterRequest = exports.GetRatingModelRequest = exports.DescribeRatingModelsRequest = exports.DeleteRatingModelMasterRequest = exports.UpdateRatingModelMasterRequest = exports.GetRatingModelMasterRequest = exports.CreateRatingModelMasterRequest = exports.DescribeRatingModelMastersRequest = exports.DeleteGatheringRequest = exports.CancelMatchmakingByUserIdRequest = exports.CancelMatchmakingRequest = exports.GetGatheringRequest = exports.DoMatchmakingByUserIdRequest = exports.DoMatchmakingRequest = exports.DoMatchmakingByPlayerRequest = exports.UpdateGatheringByUserIdRequest = exports.UpdateGatheringRequest = exports.CreateGatheringByUserIdRequest = exports.CreateGatheringRequest = exports.DescribeGatheringsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var GetGatheringRequest_1 = tslib_1.__importDefault(require("./GetGatheringRequest"));
exports.GetGatheringRequest = GetGatheringRequest_1.default;
var CancelMatchmakingRequest_1 = tslib_1.__importDefault(require("./CancelMatchmakingRequest"));
exports.CancelMatchmakingRequest = CancelMatchmakingRequest_1.default;
var CancelMatchmakingByUserIdRequest_1 = tslib_1.__importDefault(require("./CancelMatchmakingByUserIdRequest"));
exports.CancelMatchmakingByUserIdRequest = CancelMatchmakingByUserIdRequest_1.default;
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
var GetCurrentRatingModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentRatingModelMasterRequest"));
exports.GetCurrentRatingModelMasterRequest = GetCurrentRatingModelMasterRequest_1.default;
var UpdateCurrentRatingModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRatingModelMasterRequest"));
exports.UpdateCurrentRatingModelMasterRequest = UpdateCurrentRatingModelMasterRequest_1.default;
var UpdateCurrentRatingModelMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRatingModelMasterFromGitHubRequest"));
exports.UpdateCurrentRatingModelMasterFromGitHubRequest = UpdateCurrentRatingModelMasterFromGitHubRequest_1.default;
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