"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestModelResult = exports.DescribeQuestModelsResult = exports.GetQuestGroupModelResult = exports.DescribeQuestGroupModelsResult = exports.DeleteCompletedQuestListByUserIdResult = exports.GetCompletedQuestListByUserIdResult = exports.GetCompletedQuestListResult = exports.DescribeCompletedQuestListsByUserIdResult = exports.DescribeCompletedQuestListsResult = exports.DeleteProgressByStampTaskResult = exports.CreateProgressByStampSheetResult = exports.DeleteProgressByUserIdResult = exports.DeleteProgressResult = exports.EndByUserIdResult = exports.EndResult = exports.StartByUserIdResult = exports.StartResult = exports.GetProgressByUserIdResult = exports.GetProgressResult = exports.CreateProgressByUserIdResult = exports.DescribeProgressesByUserIdResult = exports.UpdateCurrentQuestMasterFromGitHubResult = exports.UpdateCurrentQuestMasterResult = exports.PreUpdateCurrentQuestMasterResult = exports.GetCurrentQuestMasterResult = exports.ExportMasterResult = exports.DeleteQuestModelMasterResult = exports.UpdateQuestModelMasterResult = exports.GetQuestModelMasterResult = exports.CreateQuestModelMasterResult = exports.DescribeQuestModelMastersResult = exports.DeleteQuestGroupModelMasterResult = exports.UpdateQuestGroupModelMasterResult = exports.GetQuestGroupModelMasterResult = exports.CreateQuestGroupModelMasterResult = exports.DescribeQuestGroupModelMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeQuestGroupModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeQuestGroupModelMastersResult"));
exports.DescribeQuestGroupModelMastersResult = DescribeQuestGroupModelMastersResult_1.default;
var CreateQuestGroupModelMasterResult_1 = tslib_1.__importDefault(require("./CreateQuestGroupModelMasterResult"));
exports.CreateQuestGroupModelMasterResult = CreateQuestGroupModelMasterResult_1.default;
var GetQuestGroupModelMasterResult_1 = tslib_1.__importDefault(require("./GetQuestGroupModelMasterResult"));
exports.GetQuestGroupModelMasterResult = GetQuestGroupModelMasterResult_1.default;
var UpdateQuestGroupModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateQuestGroupModelMasterResult"));
exports.UpdateQuestGroupModelMasterResult = UpdateQuestGroupModelMasterResult_1.default;
var DeleteQuestGroupModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteQuestGroupModelMasterResult"));
exports.DeleteQuestGroupModelMasterResult = DeleteQuestGroupModelMasterResult_1.default;
var DescribeQuestModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeQuestModelMastersResult"));
exports.DescribeQuestModelMastersResult = DescribeQuestModelMastersResult_1.default;
var CreateQuestModelMasterResult_1 = tslib_1.__importDefault(require("./CreateQuestModelMasterResult"));
exports.CreateQuestModelMasterResult = CreateQuestModelMasterResult_1.default;
var GetQuestModelMasterResult_1 = tslib_1.__importDefault(require("./GetQuestModelMasterResult"));
exports.GetQuestModelMasterResult = GetQuestModelMasterResult_1.default;
var UpdateQuestModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateQuestModelMasterResult"));
exports.UpdateQuestModelMasterResult = UpdateQuestModelMasterResult_1.default;
var DeleteQuestModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteQuestModelMasterResult"));
exports.DeleteQuestModelMasterResult = DeleteQuestModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentQuestMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentQuestMasterResult"));
exports.GetCurrentQuestMasterResult = GetCurrentQuestMasterResult_1.default;
var PreUpdateCurrentQuestMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentQuestMasterResult"));
exports.PreUpdateCurrentQuestMasterResult = PreUpdateCurrentQuestMasterResult_1.default;
var UpdateCurrentQuestMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentQuestMasterResult"));
exports.UpdateCurrentQuestMasterResult = UpdateCurrentQuestMasterResult_1.default;
var UpdateCurrentQuestMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentQuestMasterFromGitHubResult"));
exports.UpdateCurrentQuestMasterFromGitHubResult = UpdateCurrentQuestMasterFromGitHubResult_1.default;
var DescribeProgressesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeProgressesByUserIdResult"));
exports.DescribeProgressesByUserIdResult = DescribeProgressesByUserIdResult_1.default;
var CreateProgressByUserIdResult_1 = tslib_1.__importDefault(require("./CreateProgressByUserIdResult"));
exports.CreateProgressByUserIdResult = CreateProgressByUserIdResult_1.default;
var GetProgressResult_1 = tslib_1.__importDefault(require("./GetProgressResult"));
exports.GetProgressResult = GetProgressResult_1.default;
var GetProgressByUserIdResult_1 = tslib_1.__importDefault(require("./GetProgressByUserIdResult"));
exports.GetProgressByUserIdResult = GetProgressByUserIdResult_1.default;
var StartResult_1 = tslib_1.__importDefault(require("./StartResult"));
exports.StartResult = StartResult_1.default;
var StartByUserIdResult_1 = tslib_1.__importDefault(require("./StartByUserIdResult"));
exports.StartByUserIdResult = StartByUserIdResult_1.default;
var EndResult_1 = tslib_1.__importDefault(require("./EndResult"));
exports.EndResult = EndResult_1.default;
var EndByUserIdResult_1 = tslib_1.__importDefault(require("./EndByUserIdResult"));
exports.EndByUserIdResult = EndByUserIdResult_1.default;
var DeleteProgressResult_1 = tslib_1.__importDefault(require("./DeleteProgressResult"));
exports.DeleteProgressResult = DeleteProgressResult_1.default;
var DeleteProgressByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteProgressByUserIdResult"));
exports.DeleteProgressByUserIdResult = DeleteProgressByUserIdResult_1.default;
var CreateProgressByStampSheetResult_1 = tslib_1.__importDefault(require("./CreateProgressByStampSheetResult"));
exports.CreateProgressByStampSheetResult = CreateProgressByStampSheetResult_1.default;
var DeleteProgressByStampTaskResult_1 = tslib_1.__importDefault(require("./DeleteProgressByStampTaskResult"));
exports.DeleteProgressByStampTaskResult = DeleteProgressByStampTaskResult_1.default;
var DescribeCompletedQuestListsResult_1 = tslib_1.__importDefault(require("./DescribeCompletedQuestListsResult"));
exports.DescribeCompletedQuestListsResult = DescribeCompletedQuestListsResult_1.default;
var DescribeCompletedQuestListsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeCompletedQuestListsByUserIdResult"));
exports.DescribeCompletedQuestListsByUserIdResult = DescribeCompletedQuestListsByUserIdResult_1.default;
var GetCompletedQuestListResult_1 = tslib_1.__importDefault(require("./GetCompletedQuestListResult"));
exports.GetCompletedQuestListResult = GetCompletedQuestListResult_1.default;
var GetCompletedQuestListByUserIdResult_1 = tslib_1.__importDefault(require("./GetCompletedQuestListByUserIdResult"));
exports.GetCompletedQuestListByUserIdResult = GetCompletedQuestListByUserIdResult_1.default;
var DeleteCompletedQuestListByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteCompletedQuestListByUserIdResult"));
exports.DeleteCompletedQuestListByUserIdResult = DeleteCompletedQuestListByUserIdResult_1.default;
var DescribeQuestGroupModelsResult_1 = tslib_1.__importDefault(require("./DescribeQuestGroupModelsResult"));
exports.DescribeQuestGroupModelsResult = DescribeQuestGroupModelsResult_1.default;
var GetQuestGroupModelResult_1 = tslib_1.__importDefault(require("./GetQuestGroupModelResult"));
exports.GetQuestGroupModelResult = GetQuestGroupModelResult_1.default;
var DescribeQuestModelsResult_1 = tslib_1.__importDefault(require("./DescribeQuestModelsResult"));
exports.DescribeQuestModelsResult = DescribeQuestModelsResult_1.default;
var GetQuestModelResult_1 = tslib_1.__importDefault(require("./GetQuestModelResult"));
exports.GetQuestModelResult = GetQuestModelResult_1.default;
//# sourceMappingURL=index.js.map