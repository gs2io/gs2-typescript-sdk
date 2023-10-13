"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnmarkReceivedByStampSheetResult = exports.MarkReceivedByStampTaskResult = exports.UnmarkReceivedByUserIdResult = exports.MarkReceivedByUserIdResult = exports.MarkReceivedResult = exports.DeleteReceiveStatusByStampSheetResult = exports.DeleteReceiveStatusByUserIdResult = exports.GetReceiveStatusByUserIdResult = exports.GetReceiveStatusResult = exports.DescribeReceiveStatusesByUserIdResult = exports.DescribeReceiveStatusesResult = exports.MissedReceiveByUserIdResult = exports.MissedReceiveResult = exports.ReceiveByUserIdResult = exports.ReceiveResult = exports.GetBonusModelResult = exports.DescribeBonusModelsResult = exports.UpdateCurrentBonusMasterFromGitHubResult = exports.UpdateCurrentBonusMasterResult = exports.GetCurrentBonusMasterResult = exports.ExportMasterResult = exports.DeleteBonusModelMasterResult = exports.UpdateBonusModelMasterResult = exports.GetBonusModelMasterResult = exports.CreateBonusModelMasterResult = exports.DescribeBonusModelMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeBonusModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeBonusModelMastersResult"));
exports.DescribeBonusModelMastersResult = DescribeBonusModelMastersResult_1.default;
var CreateBonusModelMasterResult_1 = tslib_1.__importDefault(require("./CreateBonusModelMasterResult"));
exports.CreateBonusModelMasterResult = CreateBonusModelMasterResult_1.default;
var GetBonusModelMasterResult_1 = tslib_1.__importDefault(require("./GetBonusModelMasterResult"));
exports.GetBonusModelMasterResult = GetBonusModelMasterResult_1.default;
var UpdateBonusModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateBonusModelMasterResult"));
exports.UpdateBonusModelMasterResult = UpdateBonusModelMasterResult_1.default;
var DeleteBonusModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteBonusModelMasterResult"));
exports.DeleteBonusModelMasterResult = DeleteBonusModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentBonusMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentBonusMasterResult"));
exports.GetCurrentBonusMasterResult = GetCurrentBonusMasterResult_1.default;
var UpdateCurrentBonusMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentBonusMasterResult"));
exports.UpdateCurrentBonusMasterResult = UpdateCurrentBonusMasterResult_1.default;
var UpdateCurrentBonusMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentBonusMasterFromGitHubResult"));
exports.UpdateCurrentBonusMasterFromGitHubResult = UpdateCurrentBonusMasterFromGitHubResult_1.default;
var DescribeBonusModelsResult_1 = tslib_1.__importDefault(require("./DescribeBonusModelsResult"));
exports.DescribeBonusModelsResult = DescribeBonusModelsResult_1.default;
var GetBonusModelResult_1 = tslib_1.__importDefault(require("./GetBonusModelResult"));
exports.GetBonusModelResult = GetBonusModelResult_1.default;
var ReceiveResult_1 = tslib_1.__importDefault(require("./ReceiveResult"));
exports.ReceiveResult = ReceiveResult_1.default;
var ReceiveByUserIdResult_1 = tslib_1.__importDefault(require("./ReceiveByUserIdResult"));
exports.ReceiveByUserIdResult = ReceiveByUserIdResult_1.default;
var MissedReceiveResult_1 = tslib_1.__importDefault(require("./MissedReceiveResult"));
exports.MissedReceiveResult = MissedReceiveResult_1.default;
var MissedReceiveByUserIdResult_1 = tslib_1.__importDefault(require("./MissedReceiveByUserIdResult"));
exports.MissedReceiveByUserIdResult = MissedReceiveByUserIdResult_1.default;
var DescribeReceiveStatusesResult_1 = tslib_1.__importDefault(require("./DescribeReceiveStatusesResult"));
exports.DescribeReceiveStatusesResult = DescribeReceiveStatusesResult_1.default;
var DescribeReceiveStatusesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeReceiveStatusesByUserIdResult"));
exports.DescribeReceiveStatusesByUserIdResult = DescribeReceiveStatusesByUserIdResult_1.default;
var GetReceiveStatusResult_1 = tslib_1.__importDefault(require("./GetReceiveStatusResult"));
exports.GetReceiveStatusResult = GetReceiveStatusResult_1.default;
var GetReceiveStatusByUserIdResult_1 = tslib_1.__importDefault(require("./GetReceiveStatusByUserIdResult"));
exports.GetReceiveStatusByUserIdResult = GetReceiveStatusByUserIdResult_1.default;
var DeleteReceiveStatusByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteReceiveStatusByUserIdResult"));
exports.DeleteReceiveStatusByUserIdResult = DeleteReceiveStatusByUserIdResult_1.default;
var DeleteReceiveStatusByStampSheetResult_1 = tslib_1.__importDefault(require("./DeleteReceiveStatusByStampSheetResult"));
exports.DeleteReceiveStatusByStampSheetResult = DeleteReceiveStatusByStampSheetResult_1.default;
var MarkReceivedResult_1 = tslib_1.__importDefault(require("./MarkReceivedResult"));
exports.MarkReceivedResult = MarkReceivedResult_1.default;
var MarkReceivedByUserIdResult_1 = tslib_1.__importDefault(require("./MarkReceivedByUserIdResult"));
exports.MarkReceivedByUserIdResult = MarkReceivedByUserIdResult_1.default;
var UnmarkReceivedByUserIdResult_1 = tslib_1.__importDefault(require("./UnmarkReceivedByUserIdResult"));
exports.UnmarkReceivedByUserIdResult = UnmarkReceivedByUserIdResult_1.default;
var MarkReceivedByStampTaskResult_1 = tslib_1.__importDefault(require("./MarkReceivedByStampTaskResult"));
exports.MarkReceivedByStampTaskResult = MarkReceivedByStampTaskResult_1.default;
var UnmarkReceivedByStampSheetResult_1 = tslib_1.__importDefault(require("./UnmarkReceivedByStampSheetResult"));
exports.UnmarkReceivedByStampSheetResult = UnmarkReceivedByStampSheetResult_1.default;
//# sourceMappingURL=index.js.map