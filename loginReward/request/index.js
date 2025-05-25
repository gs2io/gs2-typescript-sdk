"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnmarkReceivedByStampSheetRequest = exports.MarkReceivedByStampTaskRequest = exports.UnmarkReceivedByUserIdRequest = exports.MarkReceivedByUserIdRequest = exports.MarkReceivedRequest = exports.DeleteReceiveStatusByStampSheetRequest = exports.DeleteReceiveStatusByUserIdRequest = exports.GetReceiveStatusByUserIdRequest = exports.GetReceiveStatusRequest = exports.DescribeReceiveStatusesByUserIdRequest = exports.DescribeReceiveStatusesRequest = exports.MissedReceiveByUserIdRequest = exports.MissedReceiveRequest = exports.ReceiveByUserIdRequest = exports.ReceiveRequest = exports.GetBonusModelRequest = exports.DescribeBonusModelsRequest = exports.UpdateCurrentBonusMasterFromGitHubRequest = exports.UpdateCurrentBonusMasterRequest = exports.PreUpdateCurrentBonusMasterRequest = exports.GetCurrentBonusMasterRequest = exports.ExportMasterRequest = exports.DeleteBonusModelMasterRequest = exports.UpdateBonusModelMasterRequest = exports.GetBonusModelMasterRequest = exports.CreateBonusModelMasterRequest = exports.DescribeBonusModelMastersRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.GetServiceVersionRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var GetServiceVersionRequest_1 = tslib_1.__importDefault(require("./GetServiceVersionRequest"));
exports.GetServiceVersionRequest = GetServiceVersionRequest_1.default;
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
var DescribeBonusModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeBonusModelMastersRequest"));
exports.DescribeBonusModelMastersRequest = DescribeBonusModelMastersRequest_1.default;
var CreateBonusModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateBonusModelMasterRequest"));
exports.CreateBonusModelMasterRequest = CreateBonusModelMasterRequest_1.default;
var GetBonusModelMasterRequest_1 = tslib_1.__importDefault(require("./GetBonusModelMasterRequest"));
exports.GetBonusModelMasterRequest = GetBonusModelMasterRequest_1.default;
var UpdateBonusModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateBonusModelMasterRequest"));
exports.UpdateBonusModelMasterRequest = UpdateBonusModelMasterRequest_1.default;
var DeleteBonusModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteBonusModelMasterRequest"));
exports.DeleteBonusModelMasterRequest = DeleteBonusModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentBonusMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentBonusMasterRequest"));
exports.GetCurrentBonusMasterRequest = GetCurrentBonusMasterRequest_1.default;
var PreUpdateCurrentBonusMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentBonusMasterRequest"));
exports.PreUpdateCurrentBonusMasterRequest = PreUpdateCurrentBonusMasterRequest_1.default;
var UpdateCurrentBonusMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentBonusMasterRequest"));
exports.UpdateCurrentBonusMasterRequest = UpdateCurrentBonusMasterRequest_1.default;
var UpdateCurrentBonusMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentBonusMasterFromGitHubRequest"));
exports.UpdateCurrentBonusMasterFromGitHubRequest = UpdateCurrentBonusMasterFromGitHubRequest_1.default;
var DescribeBonusModelsRequest_1 = tslib_1.__importDefault(require("./DescribeBonusModelsRequest"));
exports.DescribeBonusModelsRequest = DescribeBonusModelsRequest_1.default;
var GetBonusModelRequest_1 = tslib_1.__importDefault(require("./GetBonusModelRequest"));
exports.GetBonusModelRequest = GetBonusModelRequest_1.default;
var ReceiveRequest_1 = tslib_1.__importDefault(require("./ReceiveRequest"));
exports.ReceiveRequest = ReceiveRequest_1.default;
var ReceiveByUserIdRequest_1 = tslib_1.__importDefault(require("./ReceiveByUserIdRequest"));
exports.ReceiveByUserIdRequest = ReceiveByUserIdRequest_1.default;
var MissedReceiveRequest_1 = tslib_1.__importDefault(require("./MissedReceiveRequest"));
exports.MissedReceiveRequest = MissedReceiveRequest_1.default;
var MissedReceiveByUserIdRequest_1 = tslib_1.__importDefault(require("./MissedReceiveByUserIdRequest"));
exports.MissedReceiveByUserIdRequest = MissedReceiveByUserIdRequest_1.default;
var DescribeReceiveStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeReceiveStatusesRequest"));
exports.DescribeReceiveStatusesRequest = DescribeReceiveStatusesRequest_1.default;
var DescribeReceiveStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeReceiveStatusesByUserIdRequest"));
exports.DescribeReceiveStatusesByUserIdRequest = DescribeReceiveStatusesByUserIdRequest_1.default;
var GetReceiveStatusRequest_1 = tslib_1.__importDefault(require("./GetReceiveStatusRequest"));
exports.GetReceiveStatusRequest = GetReceiveStatusRequest_1.default;
var GetReceiveStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetReceiveStatusByUserIdRequest"));
exports.GetReceiveStatusByUserIdRequest = GetReceiveStatusByUserIdRequest_1.default;
var DeleteReceiveStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteReceiveStatusByUserIdRequest"));
exports.DeleteReceiveStatusByUserIdRequest = DeleteReceiveStatusByUserIdRequest_1.default;
var DeleteReceiveStatusByStampSheetRequest_1 = tslib_1.__importDefault(require("./DeleteReceiveStatusByStampSheetRequest"));
exports.DeleteReceiveStatusByStampSheetRequest = DeleteReceiveStatusByStampSheetRequest_1.default;
var MarkReceivedRequest_1 = tslib_1.__importDefault(require("./MarkReceivedRequest"));
exports.MarkReceivedRequest = MarkReceivedRequest_1.default;
var MarkReceivedByUserIdRequest_1 = tslib_1.__importDefault(require("./MarkReceivedByUserIdRequest"));
exports.MarkReceivedByUserIdRequest = MarkReceivedByUserIdRequest_1.default;
var UnmarkReceivedByUserIdRequest_1 = tslib_1.__importDefault(require("./UnmarkReceivedByUserIdRequest"));
exports.UnmarkReceivedByUserIdRequest = UnmarkReceivedByUserIdRequest_1.default;
var MarkReceivedByStampTaskRequest_1 = tslib_1.__importDefault(require("./MarkReceivedByStampTaskRequest"));
exports.MarkReceivedByStampTaskRequest = MarkReceivedByStampTaskRequest_1.default;
var UnmarkReceivedByStampSheetRequest_1 = tslib_1.__importDefault(require("./UnmarkReceivedByStampSheetRequest"));
exports.UnmarkReceivedByStampSheetRequest = UnmarkReceivedByStampSheetRequest_1.default;
//# sourceMappingURL=index.js.map