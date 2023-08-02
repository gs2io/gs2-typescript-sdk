"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplyAcquireActionsByStampSheetResult = exports.MultiplyAcquireActionsByUserIdResult = exports.SetRankCapByStampSheetResult = exports.AddRankCapByStampSheetResult = exports.AddExperienceByStampSheetResult = exports.DeleteStatusByUserIdResult = exports.SetRankCapByUserIdResult = exports.AddRankCapByUserIdResult = exports.SetExperienceByUserIdResult = exports.AddExperienceByUserIdResult = exports.GetStatusWithSignatureByUserIdResult = exports.GetStatusWithSignatureResult = exports.GetStatusByUserIdResult = exports.GetStatusResult = exports.DescribeStatusesByUserIdResult = exports.DescribeStatusesResult = exports.UpdateCurrentExperienceMasterFromGitHubResult = exports.UpdateCurrentExperienceMasterResult = exports.GetCurrentExperienceMasterResult = exports.ExportMasterResult = exports.DeleteThresholdMasterResult = exports.UpdateThresholdMasterResult = exports.GetThresholdMasterResult = exports.CreateThresholdMasterResult = exports.DescribeThresholdMastersResult = exports.GetExperienceModelResult = exports.DescribeExperienceModelsResult = exports.DeleteExperienceModelMasterResult = exports.UpdateExperienceModelMasterResult = exports.GetExperienceModelMasterResult = exports.CreateExperienceModelMasterResult = exports.DescribeExperienceModelMastersResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeExperienceModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeExperienceModelMastersResult"));
exports.DescribeExperienceModelMastersResult = DescribeExperienceModelMastersResult_1.default;
var CreateExperienceModelMasterResult_1 = tslib_1.__importDefault(require("./CreateExperienceModelMasterResult"));
exports.CreateExperienceModelMasterResult = CreateExperienceModelMasterResult_1.default;
var GetExperienceModelMasterResult_1 = tslib_1.__importDefault(require("./GetExperienceModelMasterResult"));
exports.GetExperienceModelMasterResult = GetExperienceModelMasterResult_1.default;
var UpdateExperienceModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateExperienceModelMasterResult"));
exports.UpdateExperienceModelMasterResult = UpdateExperienceModelMasterResult_1.default;
var DeleteExperienceModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteExperienceModelMasterResult"));
exports.DeleteExperienceModelMasterResult = DeleteExperienceModelMasterResult_1.default;
var DescribeExperienceModelsResult_1 = tslib_1.__importDefault(require("./DescribeExperienceModelsResult"));
exports.DescribeExperienceModelsResult = DescribeExperienceModelsResult_1.default;
var GetExperienceModelResult_1 = tslib_1.__importDefault(require("./GetExperienceModelResult"));
exports.GetExperienceModelResult = GetExperienceModelResult_1.default;
var DescribeThresholdMastersResult_1 = tslib_1.__importDefault(require("./DescribeThresholdMastersResult"));
exports.DescribeThresholdMastersResult = DescribeThresholdMastersResult_1.default;
var CreateThresholdMasterResult_1 = tslib_1.__importDefault(require("./CreateThresholdMasterResult"));
exports.CreateThresholdMasterResult = CreateThresholdMasterResult_1.default;
var GetThresholdMasterResult_1 = tslib_1.__importDefault(require("./GetThresholdMasterResult"));
exports.GetThresholdMasterResult = GetThresholdMasterResult_1.default;
var UpdateThresholdMasterResult_1 = tslib_1.__importDefault(require("./UpdateThresholdMasterResult"));
exports.UpdateThresholdMasterResult = UpdateThresholdMasterResult_1.default;
var DeleteThresholdMasterResult_1 = tslib_1.__importDefault(require("./DeleteThresholdMasterResult"));
exports.DeleteThresholdMasterResult = DeleteThresholdMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentExperienceMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentExperienceMasterResult"));
exports.GetCurrentExperienceMasterResult = GetCurrentExperienceMasterResult_1.default;
var UpdateCurrentExperienceMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentExperienceMasterResult"));
exports.UpdateCurrentExperienceMasterResult = UpdateCurrentExperienceMasterResult_1.default;
var UpdateCurrentExperienceMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentExperienceMasterFromGitHubResult"));
exports.UpdateCurrentExperienceMasterFromGitHubResult = UpdateCurrentExperienceMasterFromGitHubResult_1.default;
var DescribeStatusesResult_1 = tslib_1.__importDefault(require("./DescribeStatusesResult"));
exports.DescribeStatusesResult = DescribeStatusesResult_1.default;
var DescribeStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeStatusesByUserIdResult"));
exports.DescribeStatusesByUserIdResult = DescribeStatusesByUserIdResult_1.default;
var GetStatusResult_1 = tslib_1.__importDefault(require("./GetStatusResult"));
exports.GetStatusResult = GetStatusResult_1.default;
var GetStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetStatusByUserIdResult"));
exports.GetStatusByUserIdResult = GetStatusByUserIdResult_1.default;
var GetStatusWithSignatureResult_1 = tslib_1.__importDefault(require("./GetStatusWithSignatureResult"));
exports.GetStatusWithSignatureResult = GetStatusWithSignatureResult_1.default;
var GetStatusWithSignatureByUserIdResult_1 = tslib_1.__importDefault(require("./GetStatusWithSignatureByUserIdResult"));
exports.GetStatusWithSignatureByUserIdResult = GetStatusWithSignatureByUserIdResult_1.default;
var AddExperienceByUserIdResult_1 = tslib_1.__importDefault(require("./AddExperienceByUserIdResult"));
exports.AddExperienceByUserIdResult = AddExperienceByUserIdResult_1.default;
var SetExperienceByUserIdResult_1 = tslib_1.__importDefault(require("./SetExperienceByUserIdResult"));
exports.SetExperienceByUserIdResult = SetExperienceByUserIdResult_1.default;
var AddRankCapByUserIdResult_1 = tslib_1.__importDefault(require("./AddRankCapByUserIdResult"));
exports.AddRankCapByUserIdResult = AddRankCapByUserIdResult_1.default;
var SetRankCapByUserIdResult_1 = tslib_1.__importDefault(require("./SetRankCapByUserIdResult"));
exports.SetRankCapByUserIdResult = SetRankCapByUserIdResult_1.default;
var DeleteStatusByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteStatusByUserIdResult"));
exports.DeleteStatusByUserIdResult = DeleteStatusByUserIdResult_1.default;
var AddExperienceByStampSheetResult_1 = tslib_1.__importDefault(require("./AddExperienceByStampSheetResult"));
exports.AddExperienceByStampSheetResult = AddExperienceByStampSheetResult_1.default;
var AddRankCapByStampSheetResult_1 = tslib_1.__importDefault(require("./AddRankCapByStampSheetResult"));
exports.AddRankCapByStampSheetResult = AddRankCapByStampSheetResult_1.default;
var SetRankCapByStampSheetResult_1 = tslib_1.__importDefault(require("./SetRankCapByStampSheetResult"));
exports.SetRankCapByStampSheetResult = SetRankCapByStampSheetResult_1.default;
var MultiplyAcquireActionsByUserIdResult_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByUserIdResult"));
exports.MultiplyAcquireActionsByUserIdResult = MultiplyAcquireActionsByUserIdResult_1.default;
var MultiplyAcquireActionsByStampSheetResult_1 = tslib_1.__importDefault(require("./MultiplyAcquireActionsByStampSheetResult"));
exports.MultiplyAcquireActionsByStampSheetResult = MultiplyAcquireActionsByStampSheetResult_1.default;
//# sourceMappingURL=index.js.map