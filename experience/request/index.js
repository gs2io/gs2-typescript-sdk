"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplyAcquireActionsByStampSheetRequest = exports.MultiplyAcquireActionsByUserIdRequest = exports.SetRankCapByStampSheetRequest = exports.SubRankCapByStampTaskRequest = exports.AddRankCapByStampSheetRequest = exports.SubExperienceByStampTaskRequest = exports.AddExperienceByStampSheetRequest = exports.DeleteStatusByUserIdRequest = exports.SetRankCapByUserIdRequest = exports.SubRankCapByUserIdRequest = exports.AddRankCapByUserIdRequest = exports.SetExperienceByUserIdRequest = exports.SubExperienceByUserIdRequest = exports.AddExperienceByUserIdRequest = exports.GetStatusWithSignatureByUserIdRequest = exports.GetStatusWithSignatureRequest = exports.GetStatusByUserIdRequest = exports.GetStatusRequest = exports.DescribeStatusesByUserIdRequest = exports.DescribeStatusesRequest = exports.UpdateCurrentExperienceMasterFromGitHubRequest = exports.UpdateCurrentExperienceMasterRequest = exports.GetCurrentExperienceMasterRequest = exports.ExportMasterRequest = exports.DeleteThresholdMasterRequest = exports.UpdateThresholdMasterRequest = exports.GetThresholdMasterRequest = exports.CreateThresholdMasterRequest = exports.DescribeThresholdMastersRequest = exports.GetExperienceModelRequest = exports.DescribeExperienceModelsRequest = exports.DeleteExperienceModelMasterRequest = exports.UpdateExperienceModelMasterRequest = exports.GetExperienceModelMasterRequest = exports.CreateExperienceModelMasterRequest = exports.DescribeExperienceModelMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeExperienceModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeExperienceModelMastersRequest"));
exports.DescribeExperienceModelMastersRequest = DescribeExperienceModelMastersRequest_1.default;
var CreateExperienceModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateExperienceModelMasterRequest"));
exports.CreateExperienceModelMasterRequest = CreateExperienceModelMasterRequest_1.default;
var GetExperienceModelMasterRequest_1 = tslib_1.__importDefault(require("./GetExperienceModelMasterRequest"));
exports.GetExperienceModelMasterRequest = GetExperienceModelMasterRequest_1.default;
var UpdateExperienceModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateExperienceModelMasterRequest"));
exports.UpdateExperienceModelMasterRequest = UpdateExperienceModelMasterRequest_1.default;
var DeleteExperienceModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteExperienceModelMasterRequest"));
exports.DeleteExperienceModelMasterRequest = DeleteExperienceModelMasterRequest_1.default;
var DescribeExperienceModelsRequest_1 = tslib_1.__importDefault(require("./DescribeExperienceModelsRequest"));
exports.DescribeExperienceModelsRequest = DescribeExperienceModelsRequest_1.default;
var GetExperienceModelRequest_1 = tslib_1.__importDefault(require("./GetExperienceModelRequest"));
exports.GetExperienceModelRequest = GetExperienceModelRequest_1.default;
var DescribeThresholdMastersRequest_1 = tslib_1.__importDefault(require("./DescribeThresholdMastersRequest"));
exports.DescribeThresholdMastersRequest = DescribeThresholdMastersRequest_1.default;
var CreateThresholdMasterRequest_1 = tslib_1.__importDefault(require("./CreateThresholdMasterRequest"));
exports.CreateThresholdMasterRequest = CreateThresholdMasterRequest_1.default;
var GetThresholdMasterRequest_1 = tslib_1.__importDefault(require("./GetThresholdMasterRequest"));
exports.GetThresholdMasterRequest = GetThresholdMasterRequest_1.default;
var UpdateThresholdMasterRequest_1 = tslib_1.__importDefault(require("./UpdateThresholdMasterRequest"));
exports.UpdateThresholdMasterRequest = UpdateThresholdMasterRequest_1.default;
var DeleteThresholdMasterRequest_1 = tslib_1.__importDefault(require("./DeleteThresholdMasterRequest"));
exports.DeleteThresholdMasterRequest = DeleteThresholdMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentExperienceMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentExperienceMasterRequest"));
exports.GetCurrentExperienceMasterRequest = GetCurrentExperienceMasterRequest_1.default;
var UpdateCurrentExperienceMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentExperienceMasterRequest"));
exports.UpdateCurrentExperienceMasterRequest = UpdateCurrentExperienceMasterRequest_1.default;
var UpdateCurrentExperienceMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentExperienceMasterFromGitHubRequest"));
exports.UpdateCurrentExperienceMasterFromGitHubRequest = UpdateCurrentExperienceMasterFromGitHubRequest_1.default;
var DescribeStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesRequest"));
exports.DescribeStatusesRequest = DescribeStatusesRequest_1.default;
var DescribeStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdRequest"));
exports.DescribeStatusesByUserIdRequest = DescribeStatusesByUserIdRequest_1.default;
var GetStatusRequest_1 = tslib_1.__importDefault(require("./GetStatusRequest"));
exports.GetStatusRequest = GetStatusRequest_1.default;
var GetStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStatusByUserIdRequest"));
exports.GetStatusByUserIdRequest = GetStatusByUserIdRequest_1.default;
var GetStatusWithSignatureRequest_1 = tslib_1.__importDefault(require("./GetStatusWithSignatureRequest"));
exports.GetStatusWithSignatureRequest = GetStatusWithSignatureRequest_1.default;
var GetStatusWithSignatureByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStatusWithSignatureByUserIdRequest"));
exports.GetStatusWithSignatureByUserIdRequest = GetStatusWithSignatureByUserIdRequest_1.default;
var AddExperienceByUserIdRequest_1 = tslib_1.__importDefault(require("./AddExperienceByUserIdRequest"));
exports.AddExperienceByUserIdRequest = AddExperienceByUserIdRequest_1.default;
var SubExperienceByUserIdRequest_1 = tslib_1.__importDefault(require("./SubExperienceByUserIdRequest"));
exports.SubExperienceByUserIdRequest = SubExperienceByUserIdRequest_1.default;
var SetExperienceByUserIdRequest_1 = tslib_1.__importDefault(require("./SetExperienceByUserIdRequest"));
exports.SetExperienceByUserIdRequest = SetExperienceByUserIdRequest_1.default;
var AddRankCapByUserIdRequest_1 = tslib_1.__importDefault(require("./AddRankCapByUserIdRequest"));
exports.AddRankCapByUserIdRequest = AddRankCapByUserIdRequest_1.default;
var SubRankCapByUserIdRequest_1 = tslib_1.__importDefault(require("./SubRankCapByUserIdRequest"));
exports.SubRankCapByUserIdRequest = SubRankCapByUserIdRequest_1.default;
var SetRankCapByUserIdRequest_1 = tslib_1.__importDefault(require("./SetRankCapByUserIdRequest"));
exports.SetRankCapByUserIdRequest = SetRankCapByUserIdRequest_1.default;
var DeleteStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteStatusByUserIdRequest"));
exports.DeleteStatusByUserIdRequest = DeleteStatusByUserIdRequest_1.default;
var AddExperienceByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddExperienceByStampSheetRequest"));
exports.AddExperienceByStampSheetRequest = AddExperienceByStampSheetRequest_1.default;
var SubExperienceByStampTaskRequest_1 = tslib_1.__importDefault(require("./SubExperienceByStampTaskRequest"));
exports.SubExperienceByStampTaskRequest = SubExperienceByStampTaskRequest_1.default;
var AddRankCapByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddRankCapByStampSheetRequest"));
exports.AddRankCapByStampSheetRequest = AddRankCapByStampSheetRequest_1.default;
var SubRankCapByStampTaskRequest_1 = tslib_1.__importDefault(require("./SubRankCapByStampTaskRequest"));
exports.SubRankCapByStampTaskRequest = SubRankCapByStampTaskRequest_1.default;
var SetRankCapByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetRankCapByStampSheetRequest"));
exports.SetRankCapByStampSheetRequest = SetRankCapByStampSheetRequest_1.default;
var MultiplyAcquireActionsByUserIdRequest_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByUserIdRequest"));
exports.MultiplyAcquireActionsByUserIdRequest = MultiplyAcquireActionsByUserIdRequest_1.default;
var MultiplyAcquireActionsByStampSheetRequest_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByStampSheetRequest"));
exports.MultiplyAcquireActionsByStampSheetRequest = MultiplyAcquireActionsByStampSheetRequest_1.default;
//# sourceMappingURL=index.js.map