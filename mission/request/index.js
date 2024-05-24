"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentMissionMasterRequest = exports.ExportMasterRequest = exports.VerifyCounterValueByStampTaskRequest = exports.DecreaseByStampTaskRequest = exports.SetByStampSheetRequest = exports.IncreaseByStampSheetRequest = exports.DeleteCounterByUserIdRequest = exports.VerifyCounterValueByUserIdRequest = exports.VerifyCounterValueRequest = exports.GetCounterByUserIdRequest = exports.GetCounterRequest = exports.DecreaseCounterByUserIdRequest = exports.SetCounterByUserIdRequest = exports.IncreaseCounterByUserIdRequest = exports.DescribeCountersByUserIdRequest = exports.DescribeCountersRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = exports.DeleteMissionGroupModelMasterRequest = exports.UpdateMissionGroupModelMasterRequest = exports.GetMissionGroupModelMasterRequest = exports.CreateMissionGroupModelMasterRequest = exports.DescribeMissionGroupModelMastersRequest = exports.DeleteCounterModelMasterRequest = exports.UpdateCounterModelMasterRequest = exports.GetCounterModelMasterRequest = exports.CreateCounterModelMasterRequest = exports.DescribeCounterModelMastersRequest = exports.RevertReceiveByStampSheetRequest = exports.ReceiveByStampTaskRequest = exports.DeleteCompleteByUserIdRequest = exports.GetCompleteByUserIdRequest = exports.GetCompleteRequest = exports.RevertReceiveByUserIdRequest = exports.ReceiveByUserIdRequest = exports.CompleteByUserIdRequest = exports.CompleteRequest = exports.DescribeCompletesByUserIdRequest = exports.DescribeCompletesRequest = void 0;
exports.DeleteMissionTaskModelMasterRequest = exports.UpdateMissionTaskModelMasterRequest = exports.GetMissionTaskModelMasterRequest = exports.CreateMissionTaskModelMasterRequest = exports.DescribeMissionTaskModelMastersRequest = exports.GetMissionTaskModelRequest = exports.DescribeMissionTaskModelsRequest = exports.GetMissionGroupModelRequest = exports.DescribeMissionGroupModelsRequest = exports.GetCounterModelRequest = exports.DescribeCounterModelsRequest = exports.UpdateCurrentMissionMasterFromGitHubRequest = exports.UpdateCurrentMissionMasterRequest = void 0;
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
var DescribeCompletesRequest_1 = tslib_1.__importDefault(require("./DescribeCompletesRequest"));
exports.DescribeCompletesRequest = DescribeCompletesRequest_1.default;
var DescribeCompletesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeCompletesByUserIdRequest"));
exports.DescribeCompletesByUserIdRequest = DescribeCompletesByUserIdRequest_1.default;
var CompleteRequest_1 = tslib_1.__importDefault(require("./CompleteRequest"));
exports.CompleteRequest = CompleteRequest_1.default;
var CompleteByUserIdRequest_1 = tslib_1.__importDefault(require("./CompleteByUserIdRequest"));
exports.CompleteByUserIdRequest = CompleteByUserIdRequest_1.default;
var ReceiveByUserIdRequest_1 = tslib_1.__importDefault(require("./ReceiveByUserIdRequest"));
exports.ReceiveByUserIdRequest = ReceiveByUserIdRequest_1.default;
var RevertReceiveByUserIdRequest_1 = tslib_1.__importDefault(require("./RevertReceiveByUserIdRequest"));
exports.RevertReceiveByUserIdRequest = RevertReceiveByUserIdRequest_1.default;
var GetCompleteRequest_1 = tslib_1.__importDefault(require("./GetCompleteRequest"));
exports.GetCompleteRequest = GetCompleteRequest_1.default;
var GetCompleteByUserIdRequest_1 = tslib_1.__importDefault(require("./GetCompleteByUserIdRequest"));
exports.GetCompleteByUserIdRequest = GetCompleteByUserIdRequest_1.default;
var DeleteCompleteByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteCompleteByUserIdRequest"));
exports.DeleteCompleteByUserIdRequest = DeleteCompleteByUserIdRequest_1.default;
var ReceiveByStampTaskRequest_1 = tslib_1.__importDefault(require("./ReceiveByStampTaskRequest"));
exports.ReceiveByStampTaskRequest = ReceiveByStampTaskRequest_1.default;
var RevertReceiveByStampSheetRequest_1 = tslib_1.__importDefault(require("./RevertReceiveByStampSheetRequest"));
exports.RevertReceiveByStampSheetRequest = RevertReceiveByStampSheetRequest_1.default;
var DescribeCounterModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeCounterModelMastersRequest"));
exports.DescribeCounterModelMastersRequest = DescribeCounterModelMastersRequest_1.default;
var CreateCounterModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateCounterModelMasterRequest"));
exports.CreateCounterModelMasterRequest = CreateCounterModelMasterRequest_1.default;
var GetCounterModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCounterModelMasterRequest"));
exports.GetCounterModelMasterRequest = GetCounterModelMasterRequest_1.default;
var UpdateCounterModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCounterModelMasterRequest"));
exports.UpdateCounterModelMasterRequest = UpdateCounterModelMasterRequest_1.default;
var DeleteCounterModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteCounterModelMasterRequest"));
exports.DeleteCounterModelMasterRequest = DeleteCounterModelMasterRequest_1.default;
var DescribeMissionGroupModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeMissionGroupModelMastersRequest"));
exports.DescribeMissionGroupModelMastersRequest = DescribeMissionGroupModelMastersRequest_1.default;
var CreateMissionGroupModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateMissionGroupModelMasterRequest"));
exports.CreateMissionGroupModelMasterRequest = CreateMissionGroupModelMasterRequest_1.default;
var GetMissionGroupModelMasterRequest_1 = tslib_1.__importDefault(require("./GetMissionGroupModelMasterRequest"));
exports.GetMissionGroupModelMasterRequest = GetMissionGroupModelMasterRequest_1.default;
var UpdateMissionGroupModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateMissionGroupModelMasterRequest"));
exports.UpdateMissionGroupModelMasterRequest = UpdateMissionGroupModelMasterRequest_1.default;
var DeleteMissionGroupModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteMissionGroupModelMasterRequest"));
exports.DeleteMissionGroupModelMasterRequest = DeleteMissionGroupModelMasterRequest_1.default;
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
var DescribeCountersRequest_1 = tslib_1.__importDefault(require("./DescribeCountersRequest"));
exports.DescribeCountersRequest = DescribeCountersRequest_1.default;
var DescribeCountersByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeCountersByUserIdRequest"));
exports.DescribeCountersByUserIdRequest = DescribeCountersByUserIdRequest_1.default;
var IncreaseCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./IncreaseCounterByUserIdRequest"));
exports.IncreaseCounterByUserIdRequest = IncreaseCounterByUserIdRequest_1.default;
var SetCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./SetCounterByUserIdRequest"));
exports.SetCounterByUserIdRequest = SetCounterByUserIdRequest_1.default;
var DecreaseCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./DecreaseCounterByUserIdRequest"));
exports.DecreaseCounterByUserIdRequest = DecreaseCounterByUserIdRequest_1.default;
var GetCounterRequest_1 = tslib_1.__importDefault(require("./GetCounterRequest"));
exports.GetCounterRequest = GetCounterRequest_1.default;
var GetCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./GetCounterByUserIdRequest"));
exports.GetCounterByUserIdRequest = GetCounterByUserIdRequest_1.default;
var VerifyCounterValueRequest_1 = tslib_1.__importDefault(require("./VerifyCounterValueRequest"));
exports.VerifyCounterValueRequest = VerifyCounterValueRequest_1.default;
var VerifyCounterValueByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyCounterValueByUserIdRequest"));
exports.VerifyCounterValueByUserIdRequest = VerifyCounterValueByUserIdRequest_1.default;
var DeleteCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteCounterByUserIdRequest"));
exports.DeleteCounterByUserIdRequest = DeleteCounterByUserIdRequest_1.default;
var IncreaseByStampSheetRequest_1 = tslib_1.__importDefault(require("./IncreaseByStampSheetRequest"));
exports.IncreaseByStampSheetRequest = IncreaseByStampSheetRequest_1.default;
var SetByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetByStampSheetRequest"));
exports.SetByStampSheetRequest = SetByStampSheetRequest_1.default;
var DecreaseByStampTaskRequest_1 = tslib_1.__importDefault(require("./DecreaseByStampTaskRequest"));
exports.DecreaseByStampTaskRequest = DecreaseByStampTaskRequest_1.default;
var VerifyCounterValueByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyCounterValueByStampTaskRequest"));
exports.VerifyCounterValueByStampTaskRequest = VerifyCounterValueByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentMissionMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentMissionMasterRequest"));
exports.GetCurrentMissionMasterRequest = GetCurrentMissionMasterRequest_1.default;
var UpdateCurrentMissionMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentMissionMasterRequest"));
exports.UpdateCurrentMissionMasterRequest = UpdateCurrentMissionMasterRequest_1.default;
var UpdateCurrentMissionMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentMissionMasterFromGitHubRequest"));
exports.UpdateCurrentMissionMasterFromGitHubRequest = UpdateCurrentMissionMasterFromGitHubRequest_1.default;
var DescribeCounterModelsRequest_1 = tslib_1.__importDefault(require("./DescribeCounterModelsRequest"));
exports.DescribeCounterModelsRequest = DescribeCounterModelsRequest_1.default;
var GetCounterModelRequest_1 = tslib_1.__importDefault(require("./GetCounterModelRequest"));
exports.GetCounterModelRequest = GetCounterModelRequest_1.default;
var DescribeMissionGroupModelsRequest_1 = tslib_1.__importDefault(require("./DescribeMissionGroupModelsRequest"));
exports.DescribeMissionGroupModelsRequest = DescribeMissionGroupModelsRequest_1.default;
var GetMissionGroupModelRequest_1 = tslib_1.__importDefault(require("./GetMissionGroupModelRequest"));
exports.GetMissionGroupModelRequest = GetMissionGroupModelRequest_1.default;
var DescribeMissionTaskModelsRequest_1 = tslib_1.__importDefault(require("./DescribeMissionTaskModelsRequest"));
exports.DescribeMissionTaskModelsRequest = DescribeMissionTaskModelsRequest_1.default;
var GetMissionTaskModelRequest_1 = tslib_1.__importDefault(require("./GetMissionTaskModelRequest"));
exports.GetMissionTaskModelRequest = GetMissionTaskModelRequest_1.default;
var DescribeMissionTaskModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeMissionTaskModelMastersRequest"));
exports.DescribeMissionTaskModelMastersRequest = DescribeMissionTaskModelMastersRequest_1.default;
var CreateMissionTaskModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateMissionTaskModelMasterRequest"));
exports.CreateMissionTaskModelMasterRequest = CreateMissionTaskModelMasterRequest_1.default;
var GetMissionTaskModelMasterRequest_1 = tslib_1.__importDefault(require("./GetMissionTaskModelMasterRequest"));
exports.GetMissionTaskModelMasterRequest = GetMissionTaskModelMasterRequest_1.default;
var UpdateMissionTaskModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateMissionTaskModelMasterRequest"));
exports.UpdateMissionTaskModelMasterRequest = UpdateMissionTaskModelMasterRequest_1.default;
var DeleteMissionTaskModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteMissionTaskModelMasterRequest"));
exports.DeleteMissionTaskModelMasterRequest = DeleteMissionTaskModelMasterRequest_1.default;
//# sourceMappingURL=index.js.map