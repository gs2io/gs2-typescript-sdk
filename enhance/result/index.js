"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentRateMasterFromGitHubResult = exports.UpdateCurrentRateMasterResult = exports.GetCurrentRateMasterResult = exports.ExportMasterResult = exports.DeleteProgressByStampTaskResult = exports.CreateProgressByStampSheetResult = exports.DeleteProgressByUserIdResult = exports.DeleteProgressResult = exports.EndByUserIdResult = exports.EndResult = exports.StartByUserIdResult = exports.StartResult = exports.GetProgressByUserIdResult = exports.GetProgressResult = exports.CreateProgressByUserIdResult = exports.DescribeProgressesByUserIdResult = exports.DirectEnhanceByStampSheetResult = exports.DirectEnhanceByUserIdResult = exports.DirectEnhanceResult = exports.DeleteRateModelMasterResult = exports.UpdateRateModelMasterResult = exports.GetRateModelMasterResult = exports.CreateRateModelMasterResult = exports.DescribeRateModelMastersResult = exports.GetRateModelResult = exports.DescribeRateModelsResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeNamespacesResult_1 = (0, tslib_1.__importDefault)(require("./DescribeNamespacesResult"));
exports.DescribeNamespacesResult = DescribeNamespacesResult_1.default;
var CreateNamespaceResult_1 = (0, tslib_1.__importDefault)(require("./CreateNamespaceResult"));
exports.CreateNamespaceResult = CreateNamespaceResult_1.default;
var GetNamespaceStatusResult_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceStatusResult"));
exports.GetNamespaceStatusResult = GetNamespaceStatusResult_1.default;
var GetNamespaceResult_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceResult"));
exports.GetNamespaceResult = GetNamespaceResult_1.default;
var UpdateNamespaceResult_1 = (0, tslib_1.__importDefault)(require("./UpdateNamespaceResult"));
exports.UpdateNamespaceResult = UpdateNamespaceResult_1.default;
var DeleteNamespaceResult_1 = (0, tslib_1.__importDefault)(require("./DeleteNamespaceResult"));
exports.DeleteNamespaceResult = DeleteNamespaceResult_1.default;
var DescribeRateModelsResult_1 = (0, tslib_1.__importDefault)(require("./DescribeRateModelsResult"));
exports.DescribeRateModelsResult = DescribeRateModelsResult_1.default;
var GetRateModelResult_1 = (0, tslib_1.__importDefault)(require("./GetRateModelResult"));
exports.GetRateModelResult = GetRateModelResult_1.default;
var DescribeRateModelMastersResult_1 = (0, tslib_1.__importDefault)(require("./DescribeRateModelMastersResult"));
exports.DescribeRateModelMastersResult = DescribeRateModelMastersResult_1.default;
var CreateRateModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./CreateRateModelMasterResult"));
exports.CreateRateModelMasterResult = CreateRateModelMasterResult_1.default;
var GetRateModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./GetRateModelMasterResult"));
exports.GetRateModelMasterResult = GetRateModelMasterResult_1.default;
var UpdateRateModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./UpdateRateModelMasterResult"));
exports.UpdateRateModelMasterResult = UpdateRateModelMasterResult_1.default;
var DeleteRateModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./DeleteRateModelMasterResult"));
exports.DeleteRateModelMasterResult = DeleteRateModelMasterResult_1.default;
var DirectEnhanceResult_1 = (0, tslib_1.__importDefault)(require("./DirectEnhanceResult"));
exports.DirectEnhanceResult = DirectEnhanceResult_1.default;
var DirectEnhanceByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DirectEnhanceByUserIdResult"));
exports.DirectEnhanceByUserIdResult = DirectEnhanceByUserIdResult_1.default;
var DirectEnhanceByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./DirectEnhanceByStampSheetResult"));
exports.DirectEnhanceByStampSheetResult = DirectEnhanceByStampSheetResult_1.default;
var DescribeProgressesByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DescribeProgressesByUserIdResult"));
exports.DescribeProgressesByUserIdResult = DescribeProgressesByUserIdResult_1.default;
var CreateProgressByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./CreateProgressByUserIdResult"));
exports.CreateProgressByUserIdResult = CreateProgressByUserIdResult_1.default;
var GetProgressResult_1 = (0, tslib_1.__importDefault)(require("./GetProgressResult"));
exports.GetProgressResult = GetProgressResult_1.default;
var GetProgressByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./GetProgressByUserIdResult"));
exports.GetProgressByUserIdResult = GetProgressByUserIdResult_1.default;
var StartResult_1 = (0, tslib_1.__importDefault)(require("./StartResult"));
exports.StartResult = StartResult_1.default;
var StartByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./StartByUserIdResult"));
exports.StartByUserIdResult = StartByUserIdResult_1.default;
var EndResult_1 = (0, tslib_1.__importDefault)(require("./EndResult"));
exports.EndResult = EndResult_1.default;
var EndByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./EndByUserIdResult"));
exports.EndByUserIdResult = EndByUserIdResult_1.default;
var DeleteProgressResult_1 = (0, tslib_1.__importDefault)(require("./DeleteProgressResult"));
exports.DeleteProgressResult = DeleteProgressResult_1.default;
var DeleteProgressByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DeleteProgressByUserIdResult"));
exports.DeleteProgressByUserIdResult = DeleteProgressByUserIdResult_1.default;
var CreateProgressByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./CreateProgressByStampSheetResult"));
exports.CreateProgressByStampSheetResult = CreateProgressByStampSheetResult_1.default;
var DeleteProgressByStampTaskResult_1 = (0, tslib_1.__importDefault)(require("./DeleteProgressByStampTaskResult"));
exports.DeleteProgressByStampTaskResult = DeleteProgressByStampTaskResult_1.default;
var ExportMasterResult_1 = (0, tslib_1.__importDefault)(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentRateMasterResult_1 = (0, tslib_1.__importDefault)(require("./GetCurrentRateMasterResult"));
exports.GetCurrentRateMasterResult = GetCurrentRateMasterResult_1.default;
var UpdateCurrentRateMasterResult_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentRateMasterResult"));
exports.UpdateCurrentRateMasterResult = UpdateCurrentRateMasterResult_1.default;
var UpdateCurrentRateMasterFromGitHubResult_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentRateMasterFromGitHubResult"));
exports.UpdateCurrentRateMasterFromGitHubResult = UpdateCurrentRateMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map