"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMaxValueByStatusRequest = exports.SetRecoverValueByUserIdRequest = exports.SetRecoverIntervalByUserIdRequest = exports.SetMaxValueByUserIdRequest = exports.DecreaseMaxValueByUserIdRequest = exports.RaiseMaxValueByUserIdRequest = exports.RecoverStaminaByUserIdRequest = exports.ConsumeStaminaByUserIdRequest = exports.ConsumeStaminaRequest = exports.UpdateStaminaByUserIdRequest = exports.GetStaminaByUserIdRequest = exports.GetStaminaRequest = exports.DescribeStaminasByUserIdRequest = exports.DescribeStaminasRequest = exports.GetStaminaModelRequest = exports.DescribeStaminaModelsRequest = exports.UpdateCurrentStaminaMasterFromGitHubRequest = exports.UpdateCurrentStaminaMasterRequest = exports.GetCurrentStaminaMasterRequest = exports.ExportMasterRequest = exports.DeleteRecoverValueTableMasterRequest = exports.UpdateRecoverValueTableMasterRequest = exports.GetRecoverValueTableMasterRequest = exports.CreateRecoverValueTableMasterRequest = exports.DescribeRecoverValueTableMastersRequest = exports.DeleteRecoverIntervalTableMasterRequest = exports.UpdateRecoverIntervalTableMasterRequest = exports.GetRecoverIntervalTableMasterRequest = exports.CreateRecoverIntervalTableMasterRequest = exports.DescribeRecoverIntervalTableMastersRequest = exports.DeleteMaxStaminaTableMasterRequest = exports.UpdateMaxStaminaTableMasterRequest = exports.GetMaxStaminaTableMasterRequest = exports.CreateMaxStaminaTableMasterRequest = exports.DescribeMaxStaminaTableMastersRequest = exports.DeleteStaminaModelMasterRequest = exports.UpdateStaminaModelMasterRequest = exports.GetStaminaModelMasterRequest = exports.CreateStaminaModelMasterRequest = exports.DescribeStaminaModelMastersRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.ConsumeStaminaByStampTaskRequest = exports.SetRecoverValueByStampSheetRequest = exports.SetRecoverIntervalByStampSheetRequest = exports.SetMaxValueByStampSheetRequest = exports.DecreaseMaxValueByStampTaskRequest = exports.RaiseMaxValueByStampSheetRequest = exports.RecoverStaminaByStampSheetRequest = exports.DeleteStaminaByUserIdRequest = exports.SetRecoverValueByStatusRequest = exports.SetRecoverIntervalByStatusRequest = void 0;
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
var DescribeStaminaModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeStaminaModelMastersRequest"));
exports.DescribeStaminaModelMastersRequest = DescribeStaminaModelMastersRequest_1.default;
var CreateStaminaModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateStaminaModelMasterRequest"));
exports.CreateStaminaModelMasterRequest = CreateStaminaModelMasterRequest_1.default;
var GetStaminaModelMasterRequest_1 = tslib_1.__importDefault(require("./GetStaminaModelMasterRequest"));
exports.GetStaminaModelMasterRequest = GetStaminaModelMasterRequest_1.default;
var UpdateStaminaModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateStaminaModelMasterRequest"));
exports.UpdateStaminaModelMasterRequest = UpdateStaminaModelMasterRequest_1.default;
var DeleteStaminaModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteStaminaModelMasterRequest"));
exports.DeleteStaminaModelMasterRequest = DeleteStaminaModelMasterRequest_1.default;
var DescribeMaxStaminaTableMastersRequest_1 = tslib_1.__importDefault(require("./DescribeMaxStaminaTableMastersRequest"));
exports.DescribeMaxStaminaTableMastersRequest = DescribeMaxStaminaTableMastersRequest_1.default;
var CreateMaxStaminaTableMasterRequest_1 = tslib_1.__importDefault(require("./CreateMaxStaminaTableMasterRequest"));
exports.CreateMaxStaminaTableMasterRequest = CreateMaxStaminaTableMasterRequest_1.default;
var GetMaxStaminaTableMasterRequest_1 = tslib_1.__importDefault(require("./GetMaxStaminaTableMasterRequest"));
exports.GetMaxStaminaTableMasterRequest = GetMaxStaminaTableMasterRequest_1.default;
var UpdateMaxStaminaTableMasterRequest_1 = tslib_1.__importDefault(require("./UpdateMaxStaminaTableMasterRequest"));
exports.UpdateMaxStaminaTableMasterRequest = UpdateMaxStaminaTableMasterRequest_1.default;
var DeleteMaxStaminaTableMasterRequest_1 = tslib_1.__importDefault(require("./DeleteMaxStaminaTableMasterRequest"));
exports.DeleteMaxStaminaTableMasterRequest = DeleteMaxStaminaTableMasterRequest_1.default;
var DescribeRecoverIntervalTableMastersRequest_1 = tslib_1.__importDefault(require("./DescribeRecoverIntervalTableMastersRequest"));
exports.DescribeRecoverIntervalTableMastersRequest = DescribeRecoverIntervalTableMastersRequest_1.default;
var CreateRecoverIntervalTableMasterRequest_1 = tslib_1.__importDefault(require("./CreateRecoverIntervalTableMasterRequest"));
exports.CreateRecoverIntervalTableMasterRequest = CreateRecoverIntervalTableMasterRequest_1.default;
var GetRecoverIntervalTableMasterRequest_1 = tslib_1.__importDefault(require("./GetRecoverIntervalTableMasterRequest"));
exports.GetRecoverIntervalTableMasterRequest = GetRecoverIntervalTableMasterRequest_1.default;
var UpdateRecoverIntervalTableMasterRequest_1 = tslib_1.__importDefault(require("./UpdateRecoverIntervalTableMasterRequest"));
exports.UpdateRecoverIntervalTableMasterRequest = UpdateRecoverIntervalTableMasterRequest_1.default;
var DeleteRecoverIntervalTableMasterRequest_1 = tslib_1.__importDefault(require("./DeleteRecoverIntervalTableMasterRequest"));
exports.DeleteRecoverIntervalTableMasterRequest = DeleteRecoverIntervalTableMasterRequest_1.default;
var DescribeRecoverValueTableMastersRequest_1 = tslib_1.__importDefault(require("./DescribeRecoverValueTableMastersRequest"));
exports.DescribeRecoverValueTableMastersRequest = DescribeRecoverValueTableMastersRequest_1.default;
var CreateRecoverValueTableMasterRequest_1 = tslib_1.__importDefault(require("./CreateRecoverValueTableMasterRequest"));
exports.CreateRecoverValueTableMasterRequest = CreateRecoverValueTableMasterRequest_1.default;
var GetRecoverValueTableMasterRequest_1 = tslib_1.__importDefault(require("./GetRecoverValueTableMasterRequest"));
exports.GetRecoverValueTableMasterRequest = GetRecoverValueTableMasterRequest_1.default;
var UpdateRecoverValueTableMasterRequest_1 = tslib_1.__importDefault(require("./UpdateRecoverValueTableMasterRequest"));
exports.UpdateRecoverValueTableMasterRequest = UpdateRecoverValueTableMasterRequest_1.default;
var DeleteRecoverValueTableMasterRequest_1 = tslib_1.__importDefault(require("./DeleteRecoverValueTableMasterRequest"));
exports.DeleteRecoverValueTableMasterRequest = DeleteRecoverValueTableMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentStaminaMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentStaminaMasterRequest"));
exports.GetCurrentStaminaMasterRequest = GetCurrentStaminaMasterRequest_1.default;
var UpdateCurrentStaminaMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentStaminaMasterRequest"));
exports.UpdateCurrentStaminaMasterRequest = UpdateCurrentStaminaMasterRequest_1.default;
var UpdateCurrentStaminaMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentStaminaMasterFromGitHubRequest"));
exports.UpdateCurrentStaminaMasterFromGitHubRequest = UpdateCurrentStaminaMasterFromGitHubRequest_1.default;
var DescribeStaminaModelsRequest_1 = tslib_1.__importDefault(require("./DescribeStaminaModelsRequest"));
exports.DescribeStaminaModelsRequest = DescribeStaminaModelsRequest_1.default;
var GetStaminaModelRequest_1 = tslib_1.__importDefault(require("./GetStaminaModelRequest"));
exports.GetStaminaModelRequest = GetStaminaModelRequest_1.default;
var DescribeStaminasRequest_1 = tslib_1.__importDefault(require("./DescribeStaminasRequest"));
exports.DescribeStaminasRequest = DescribeStaminasRequest_1.default;
var DescribeStaminasByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeStaminasByUserIdRequest"));
exports.DescribeStaminasByUserIdRequest = DescribeStaminasByUserIdRequest_1.default;
var GetStaminaRequest_1 = tslib_1.__importDefault(require("./GetStaminaRequest"));
exports.GetStaminaRequest = GetStaminaRequest_1.default;
var GetStaminaByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStaminaByUserIdRequest"));
exports.GetStaminaByUserIdRequest = GetStaminaByUserIdRequest_1.default;
var UpdateStaminaByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateStaminaByUserIdRequest"));
exports.UpdateStaminaByUserIdRequest = UpdateStaminaByUserIdRequest_1.default;
var ConsumeStaminaRequest_1 = tslib_1.__importDefault(require("./ConsumeStaminaRequest"));
exports.ConsumeStaminaRequest = ConsumeStaminaRequest_1.default;
var ConsumeStaminaByUserIdRequest_1 = tslib_1.__importDefault(require("./ConsumeStaminaByUserIdRequest"));
exports.ConsumeStaminaByUserIdRequest = ConsumeStaminaByUserIdRequest_1.default;
var RecoverStaminaByUserIdRequest_1 = tslib_1.__importDefault(require("./RecoverStaminaByUserIdRequest"));
exports.RecoverStaminaByUserIdRequest = RecoverStaminaByUserIdRequest_1.default;
var RaiseMaxValueByUserIdRequest_1 = tslib_1.__importDefault(require("./RaiseMaxValueByUserIdRequest"));
exports.RaiseMaxValueByUserIdRequest = RaiseMaxValueByUserIdRequest_1.default;
var DecreaseMaxValueByUserIdRequest_1 = tslib_1.__importDefault(require("./DecreaseMaxValueByUserIdRequest"));
exports.DecreaseMaxValueByUserIdRequest = DecreaseMaxValueByUserIdRequest_1.default;
var SetMaxValueByUserIdRequest_1 = tslib_1.__importDefault(require("./SetMaxValueByUserIdRequest"));
exports.SetMaxValueByUserIdRequest = SetMaxValueByUserIdRequest_1.default;
var SetRecoverIntervalByUserIdRequest_1 = tslib_1.__importDefault(require("./SetRecoverIntervalByUserIdRequest"));
exports.SetRecoverIntervalByUserIdRequest = SetRecoverIntervalByUserIdRequest_1.default;
var SetRecoverValueByUserIdRequest_1 = tslib_1.__importDefault(require("./SetRecoverValueByUserIdRequest"));
exports.SetRecoverValueByUserIdRequest = SetRecoverValueByUserIdRequest_1.default;
var SetMaxValueByStatusRequest_1 = tslib_1.__importDefault(require("./SetMaxValueByStatusRequest"));
exports.SetMaxValueByStatusRequest = SetMaxValueByStatusRequest_1.default;
var SetRecoverIntervalByStatusRequest_1 = tslib_1.__importDefault(require("./SetRecoverIntervalByStatusRequest"));
exports.SetRecoverIntervalByStatusRequest = SetRecoverIntervalByStatusRequest_1.default;
var SetRecoverValueByStatusRequest_1 = tslib_1.__importDefault(require("./SetRecoverValueByStatusRequest"));
exports.SetRecoverValueByStatusRequest = SetRecoverValueByStatusRequest_1.default;
var DeleteStaminaByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteStaminaByUserIdRequest"));
exports.DeleteStaminaByUserIdRequest = DeleteStaminaByUserIdRequest_1.default;
var RecoverStaminaByStampSheetRequest_1 = tslib_1.__importDefault(require("./RecoverStaminaByStampSheetRequest"));
exports.RecoverStaminaByStampSheetRequest = RecoverStaminaByStampSheetRequest_1.default;
var RaiseMaxValueByStampSheetRequest_1 = tslib_1.__importDefault(require("./RaiseMaxValueByStampSheetRequest"));
exports.RaiseMaxValueByStampSheetRequest = RaiseMaxValueByStampSheetRequest_1.default;
var DecreaseMaxValueByStampTaskRequest_1 = tslib_1.__importDefault(require("./DecreaseMaxValueByStampTaskRequest"));
exports.DecreaseMaxValueByStampTaskRequest = DecreaseMaxValueByStampTaskRequest_1.default;
var SetMaxValueByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetMaxValueByStampSheetRequest"));
exports.SetMaxValueByStampSheetRequest = SetMaxValueByStampSheetRequest_1.default;
var SetRecoverIntervalByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetRecoverIntervalByStampSheetRequest"));
exports.SetRecoverIntervalByStampSheetRequest = SetRecoverIntervalByStampSheetRequest_1.default;
var SetRecoverValueByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetRecoverValueByStampSheetRequest"));
exports.SetRecoverValueByStampSheetRequest = SetRecoverValueByStampSheetRequest_1.default;
var ConsumeStaminaByStampTaskRequest_1 = tslib_1.__importDefault(require("./ConsumeStaminaByStampTaskRequest"));
exports.ConsumeStaminaByStampTaskRequest = ConsumeStaminaByStampTaskRequest_1.default;
//# sourceMappingURL=index.js.map