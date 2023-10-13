"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetMaxValueByUserIdResult = exports.DecreaseMaxValueByUserIdResult = exports.RaiseMaxValueByUserIdResult = exports.RecoverStaminaByUserIdResult = exports.ConsumeStaminaByUserIdResult = exports.ConsumeStaminaResult = exports.UpdateStaminaByUserIdResult = exports.GetStaminaByUserIdResult = exports.GetStaminaResult = exports.DescribeStaminasByUserIdResult = exports.DescribeStaminasResult = exports.GetStaminaModelResult = exports.DescribeStaminaModelsResult = exports.UpdateCurrentStaminaMasterFromGitHubResult = exports.UpdateCurrentStaminaMasterResult = exports.GetCurrentStaminaMasterResult = exports.ExportMasterResult = exports.DeleteRecoverValueTableMasterResult = exports.UpdateRecoverValueTableMasterResult = exports.GetRecoverValueTableMasterResult = exports.CreateRecoverValueTableMasterResult = exports.DescribeRecoverValueTableMastersResult = exports.DeleteRecoverIntervalTableMasterResult = exports.UpdateRecoverIntervalTableMasterResult = exports.GetRecoverIntervalTableMasterResult = exports.CreateRecoverIntervalTableMasterResult = exports.DescribeRecoverIntervalTableMastersResult = exports.DeleteMaxStaminaTableMasterResult = exports.UpdateMaxStaminaTableMasterResult = exports.GetMaxStaminaTableMasterResult = exports.CreateMaxStaminaTableMasterResult = exports.DescribeMaxStaminaTableMastersResult = exports.DeleteStaminaModelMasterResult = exports.UpdateStaminaModelMasterResult = exports.GetStaminaModelMasterResult = exports.CreateStaminaModelMasterResult = exports.DescribeStaminaModelMastersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.ConsumeStaminaByStampTaskResult = exports.SetRecoverValueByStampSheetResult = exports.SetRecoverIntervalByStampSheetResult = exports.SetMaxValueByStampSheetResult = exports.DecreaseMaxValueByStampTaskResult = exports.RaiseMaxValueByStampSheetResult = exports.RecoverStaminaByStampSheetResult = exports.DeleteStaminaByUserIdResult = exports.SetRecoverValueByStatusResult = exports.SetRecoverIntervalByStatusResult = exports.SetMaxValueByStatusResult = exports.SetRecoverValueByUserIdResult = exports.SetRecoverIntervalByUserIdResult = void 0;
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
var DescribeStaminaModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeStaminaModelMastersResult"));
exports.DescribeStaminaModelMastersResult = DescribeStaminaModelMastersResult_1.default;
var CreateStaminaModelMasterResult_1 = tslib_1.__importDefault(require("./CreateStaminaModelMasterResult"));
exports.CreateStaminaModelMasterResult = CreateStaminaModelMasterResult_1.default;
var GetStaminaModelMasterResult_1 = tslib_1.__importDefault(require("./GetStaminaModelMasterResult"));
exports.GetStaminaModelMasterResult = GetStaminaModelMasterResult_1.default;
var UpdateStaminaModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateStaminaModelMasterResult"));
exports.UpdateStaminaModelMasterResult = UpdateStaminaModelMasterResult_1.default;
var DeleteStaminaModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteStaminaModelMasterResult"));
exports.DeleteStaminaModelMasterResult = DeleteStaminaModelMasterResult_1.default;
var DescribeMaxStaminaTableMastersResult_1 = tslib_1.__importDefault(require("./DescribeMaxStaminaTableMastersResult"));
exports.DescribeMaxStaminaTableMastersResult = DescribeMaxStaminaTableMastersResult_1.default;
var CreateMaxStaminaTableMasterResult_1 = tslib_1.__importDefault(require("./CreateMaxStaminaTableMasterResult"));
exports.CreateMaxStaminaTableMasterResult = CreateMaxStaminaTableMasterResult_1.default;
var GetMaxStaminaTableMasterResult_1 = tslib_1.__importDefault(require("./GetMaxStaminaTableMasterResult"));
exports.GetMaxStaminaTableMasterResult = GetMaxStaminaTableMasterResult_1.default;
var UpdateMaxStaminaTableMasterResult_1 = tslib_1.__importDefault(require("./UpdateMaxStaminaTableMasterResult"));
exports.UpdateMaxStaminaTableMasterResult = UpdateMaxStaminaTableMasterResult_1.default;
var DeleteMaxStaminaTableMasterResult_1 = tslib_1.__importDefault(require("./DeleteMaxStaminaTableMasterResult"));
exports.DeleteMaxStaminaTableMasterResult = DeleteMaxStaminaTableMasterResult_1.default;
var DescribeRecoverIntervalTableMastersResult_1 = tslib_1.__importDefault(require("./DescribeRecoverIntervalTableMastersResult"));
exports.DescribeRecoverIntervalTableMastersResult = DescribeRecoverIntervalTableMastersResult_1.default;
var CreateRecoverIntervalTableMasterResult_1 = tslib_1.__importDefault(require("./CreateRecoverIntervalTableMasterResult"));
exports.CreateRecoverIntervalTableMasterResult = CreateRecoverIntervalTableMasterResult_1.default;
var GetRecoverIntervalTableMasterResult_1 = tslib_1.__importDefault(require("./GetRecoverIntervalTableMasterResult"));
exports.GetRecoverIntervalTableMasterResult = GetRecoverIntervalTableMasterResult_1.default;
var UpdateRecoverIntervalTableMasterResult_1 = tslib_1.__importDefault(require("./UpdateRecoverIntervalTableMasterResult"));
exports.UpdateRecoverIntervalTableMasterResult = UpdateRecoverIntervalTableMasterResult_1.default;
var DeleteRecoverIntervalTableMasterResult_1 = tslib_1.__importDefault(require("./DeleteRecoverIntervalTableMasterResult"));
exports.DeleteRecoverIntervalTableMasterResult = DeleteRecoverIntervalTableMasterResult_1.default;
var DescribeRecoverValueTableMastersResult_1 = tslib_1.__importDefault(require("./DescribeRecoverValueTableMastersResult"));
exports.DescribeRecoverValueTableMastersResult = DescribeRecoverValueTableMastersResult_1.default;
var CreateRecoverValueTableMasterResult_1 = tslib_1.__importDefault(require("./CreateRecoverValueTableMasterResult"));
exports.CreateRecoverValueTableMasterResult = CreateRecoverValueTableMasterResult_1.default;
var GetRecoverValueTableMasterResult_1 = tslib_1.__importDefault(require("./GetRecoverValueTableMasterResult"));
exports.GetRecoverValueTableMasterResult = GetRecoverValueTableMasterResult_1.default;
var UpdateRecoverValueTableMasterResult_1 = tslib_1.__importDefault(require("./UpdateRecoverValueTableMasterResult"));
exports.UpdateRecoverValueTableMasterResult = UpdateRecoverValueTableMasterResult_1.default;
var DeleteRecoverValueTableMasterResult_1 = tslib_1.__importDefault(require("./DeleteRecoverValueTableMasterResult"));
exports.DeleteRecoverValueTableMasterResult = DeleteRecoverValueTableMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentStaminaMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentStaminaMasterResult"));
exports.GetCurrentStaminaMasterResult = GetCurrentStaminaMasterResult_1.default;
var UpdateCurrentStaminaMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentStaminaMasterResult"));
exports.UpdateCurrentStaminaMasterResult = UpdateCurrentStaminaMasterResult_1.default;
var UpdateCurrentStaminaMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentStaminaMasterFromGitHubResult"));
exports.UpdateCurrentStaminaMasterFromGitHubResult = UpdateCurrentStaminaMasterFromGitHubResult_1.default;
var DescribeStaminaModelsResult_1 = tslib_1.__importDefault(require("./DescribeStaminaModelsResult"));
exports.DescribeStaminaModelsResult = DescribeStaminaModelsResult_1.default;
var GetStaminaModelResult_1 = tslib_1.__importDefault(require("./GetStaminaModelResult"));
exports.GetStaminaModelResult = GetStaminaModelResult_1.default;
var DescribeStaminasResult_1 = tslib_1.__importDefault(require("./DescribeStaminasResult"));
exports.DescribeStaminasResult = DescribeStaminasResult_1.default;
var DescribeStaminasByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeStaminasByUserIdResult"));
exports.DescribeStaminasByUserIdResult = DescribeStaminasByUserIdResult_1.default;
var GetStaminaResult_1 = tslib_1.__importDefault(require("./GetStaminaResult"));
exports.GetStaminaResult = GetStaminaResult_1.default;
var GetStaminaByUserIdResult_1 = tslib_1.__importDefault(require("./GetStaminaByUserIdResult"));
exports.GetStaminaByUserIdResult = GetStaminaByUserIdResult_1.default;
var UpdateStaminaByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateStaminaByUserIdResult"));
exports.UpdateStaminaByUserIdResult = UpdateStaminaByUserIdResult_1.default;
var ConsumeStaminaResult_1 = tslib_1.__importDefault(require("./ConsumeStaminaResult"));
exports.ConsumeStaminaResult = ConsumeStaminaResult_1.default;
var ConsumeStaminaByUserIdResult_1 = tslib_1.__importDefault(require("./ConsumeStaminaByUserIdResult"));
exports.ConsumeStaminaByUserIdResult = ConsumeStaminaByUserIdResult_1.default;
var RecoverStaminaByUserIdResult_1 = tslib_1.__importDefault(require("./RecoverStaminaByUserIdResult"));
exports.RecoverStaminaByUserIdResult = RecoverStaminaByUserIdResult_1.default;
var RaiseMaxValueByUserIdResult_1 = tslib_1.__importDefault(require("./RaiseMaxValueByUserIdResult"));
exports.RaiseMaxValueByUserIdResult = RaiseMaxValueByUserIdResult_1.default;
var DecreaseMaxValueByUserIdResult_1 = tslib_1.__importDefault(require("./DecreaseMaxValueByUserIdResult"));
exports.DecreaseMaxValueByUserIdResult = DecreaseMaxValueByUserIdResult_1.default;
var SetMaxValueByUserIdResult_1 = tslib_1.__importDefault(require("./SetMaxValueByUserIdResult"));
exports.SetMaxValueByUserIdResult = SetMaxValueByUserIdResult_1.default;
var SetRecoverIntervalByUserIdResult_1 = tslib_1.__importDefault(require("./SetRecoverIntervalByUserIdResult"));
exports.SetRecoverIntervalByUserIdResult = SetRecoverIntervalByUserIdResult_1.default;
var SetRecoverValueByUserIdResult_1 = tslib_1.__importDefault(require("./SetRecoverValueByUserIdResult"));
exports.SetRecoverValueByUserIdResult = SetRecoverValueByUserIdResult_1.default;
var SetMaxValueByStatusResult_1 = tslib_1.__importDefault(require("./SetMaxValueByStatusResult"));
exports.SetMaxValueByStatusResult = SetMaxValueByStatusResult_1.default;
var SetRecoverIntervalByStatusResult_1 = tslib_1.__importDefault(require("./SetRecoverIntervalByStatusResult"));
exports.SetRecoverIntervalByStatusResult = SetRecoverIntervalByStatusResult_1.default;
var SetRecoverValueByStatusResult_1 = tslib_1.__importDefault(require("./SetRecoverValueByStatusResult"));
exports.SetRecoverValueByStatusResult = SetRecoverValueByStatusResult_1.default;
var DeleteStaminaByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteStaminaByUserIdResult"));
exports.DeleteStaminaByUserIdResult = DeleteStaminaByUserIdResult_1.default;
var RecoverStaminaByStampSheetResult_1 = tslib_1.__importDefault(require("./RecoverStaminaByStampSheetResult"));
exports.RecoverStaminaByStampSheetResult = RecoverStaminaByStampSheetResult_1.default;
var RaiseMaxValueByStampSheetResult_1 = tslib_1.__importDefault(require("./RaiseMaxValueByStampSheetResult"));
exports.RaiseMaxValueByStampSheetResult = RaiseMaxValueByStampSheetResult_1.default;
var DecreaseMaxValueByStampTaskResult_1 = tslib_1.__importDefault(require("./DecreaseMaxValueByStampTaskResult"));
exports.DecreaseMaxValueByStampTaskResult = DecreaseMaxValueByStampTaskResult_1.default;
var SetMaxValueByStampSheetResult_1 = tslib_1.__importDefault(require("./SetMaxValueByStampSheetResult"));
exports.SetMaxValueByStampSheetResult = SetMaxValueByStampSheetResult_1.default;
var SetRecoverIntervalByStampSheetResult_1 = tslib_1.__importDefault(require("./SetRecoverIntervalByStampSheetResult"));
exports.SetRecoverIntervalByStampSheetResult = SetRecoverIntervalByStampSheetResult_1.default;
var SetRecoverValueByStampSheetResult_1 = tslib_1.__importDefault(require("./SetRecoverValueByStampSheetResult"));
exports.SetRecoverValueByStampSheetResult = SetRecoverValueByStampSheetResult_1.default;
var ConsumeStaminaByStampTaskResult_1 = tslib_1.__importDefault(require("./ConsumeStaminaByStampTaskResult"));
exports.ConsumeStaminaByStampTaskResult = ConsumeStaminaByStampTaskResult_1.default;
//# sourceMappingURL=index.js.map