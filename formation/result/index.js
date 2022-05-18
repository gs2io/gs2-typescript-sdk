"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcquireActionToFormPropertiesByStampSheetResult = exports.DeleteFormByUserIdResult = exports.DeleteFormResult = exports.AcquireActionsToFormPropertiesResult = exports.SetFormWithSignatureResult = exports.SetFormByUserIdResult = exports.GetFormWithSignatureByUserIdResult = exports.GetFormWithSignatureResult = exports.GetFormByUserIdResult = exports.GetFormResult = exports.DescribeFormsByUserIdResult = exports.DescribeFormsResult = exports.SetCapacityByStampSheetResult = exports.AddCapacityByStampSheetResult = exports.DeleteMoldByUserIdResult = exports.DeleteMoldResult = exports.AddMoldCapacityByUserIdResult = exports.SetMoldCapacityByUserIdResult = exports.GetMoldByUserIdResult = exports.GetMoldResult = exports.DescribeMoldsByUserIdResult = exports.DescribeMoldsResult = exports.UpdateCurrentFormMasterFromGitHubResult = exports.UpdateCurrentFormMasterResult = exports.GetCurrentFormMasterResult = exports.ExportMasterResult = exports.DeleteMoldModelMasterResult = exports.UpdateMoldModelMasterResult = exports.GetMoldModelMasterResult = exports.CreateMoldModelMasterResult = exports.DescribeMoldModelMastersResult = exports.GetMoldModelResult = exports.DescribeMoldModelsResult = exports.DeleteFormModelMasterResult = exports.UpdateFormModelMasterResult = exports.GetFormModelMasterResult = exports.CreateFormModelMasterResult = exports.DescribeFormModelMastersResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeFormModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeFormModelMastersResult"));
exports.DescribeFormModelMastersResult = DescribeFormModelMastersResult_1.default;
var CreateFormModelMasterResult_1 = tslib_1.__importDefault(require("./CreateFormModelMasterResult"));
exports.CreateFormModelMasterResult = CreateFormModelMasterResult_1.default;
var GetFormModelMasterResult_1 = tslib_1.__importDefault(require("./GetFormModelMasterResult"));
exports.GetFormModelMasterResult = GetFormModelMasterResult_1.default;
var UpdateFormModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateFormModelMasterResult"));
exports.UpdateFormModelMasterResult = UpdateFormModelMasterResult_1.default;
var DeleteFormModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteFormModelMasterResult"));
exports.DeleteFormModelMasterResult = DeleteFormModelMasterResult_1.default;
var DescribeMoldModelsResult_1 = tslib_1.__importDefault(require("./DescribeMoldModelsResult"));
exports.DescribeMoldModelsResult = DescribeMoldModelsResult_1.default;
var GetMoldModelResult_1 = tslib_1.__importDefault(require("./GetMoldModelResult"));
exports.GetMoldModelResult = GetMoldModelResult_1.default;
var DescribeMoldModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeMoldModelMastersResult"));
exports.DescribeMoldModelMastersResult = DescribeMoldModelMastersResult_1.default;
var CreateMoldModelMasterResult_1 = tslib_1.__importDefault(require("./CreateMoldModelMasterResult"));
exports.CreateMoldModelMasterResult = CreateMoldModelMasterResult_1.default;
var GetMoldModelMasterResult_1 = tslib_1.__importDefault(require("./GetMoldModelMasterResult"));
exports.GetMoldModelMasterResult = GetMoldModelMasterResult_1.default;
var UpdateMoldModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateMoldModelMasterResult"));
exports.UpdateMoldModelMasterResult = UpdateMoldModelMasterResult_1.default;
var DeleteMoldModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteMoldModelMasterResult"));
exports.DeleteMoldModelMasterResult = DeleteMoldModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentFormMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentFormMasterResult"));
exports.GetCurrentFormMasterResult = GetCurrentFormMasterResult_1.default;
var UpdateCurrentFormMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentFormMasterResult"));
exports.UpdateCurrentFormMasterResult = UpdateCurrentFormMasterResult_1.default;
var UpdateCurrentFormMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentFormMasterFromGitHubResult"));
exports.UpdateCurrentFormMasterFromGitHubResult = UpdateCurrentFormMasterFromGitHubResult_1.default;
var DescribeMoldsResult_1 = tslib_1.__importDefault(require("./DescribeMoldsResult"));
exports.DescribeMoldsResult = DescribeMoldsResult_1.default;
var DescribeMoldsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeMoldsByUserIdResult"));
exports.DescribeMoldsByUserIdResult = DescribeMoldsByUserIdResult_1.default;
var GetMoldResult_1 = tslib_1.__importDefault(require("./GetMoldResult"));
exports.GetMoldResult = GetMoldResult_1.default;
var GetMoldByUserIdResult_1 = tslib_1.__importDefault(require("./GetMoldByUserIdResult"));
exports.GetMoldByUserIdResult = GetMoldByUserIdResult_1.default;
var SetMoldCapacityByUserIdResult_1 = tslib_1.__importDefault(require("./SetMoldCapacityByUserIdResult"));
exports.SetMoldCapacityByUserIdResult = SetMoldCapacityByUserIdResult_1.default;
var AddMoldCapacityByUserIdResult_1 = tslib_1.__importDefault(require("./AddMoldCapacityByUserIdResult"));
exports.AddMoldCapacityByUserIdResult = AddMoldCapacityByUserIdResult_1.default;
var DeleteMoldResult_1 = tslib_1.__importDefault(require("./DeleteMoldResult"));
exports.DeleteMoldResult = DeleteMoldResult_1.default;
var DeleteMoldByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteMoldByUserIdResult"));
exports.DeleteMoldByUserIdResult = DeleteMoldByUserIdResult_1.default;
var AddCapacityByStampSheetResult_1 = tslib_1.__importDefault(require("./AddCapacityByStampSheetResult"));
exports.AddCapacityByStampSheetResult = AddCapacityByStampSheetResult_1.default;
var SetCapacityByStampSheetResult_1 = tslib_1.__importDefault(require("./SetCapacityByStampSheetResult"));
exports.SetCapacityByStampSheetResult = SetCapacityByStampSheetResult_1.default;
var DescribeFormsResult_1 = tslib_1.__importDefault(require("./DescribeFormsResult"));
exports.DescribeFormsResult = DescribeFormsResult_1.default;
var DescribeFormsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeFormsByUserIdResult"));
exports.DescribeFormsByUserIdResult = DescribeFormsByUserIdResult_1.default;
var GetFormResult_1 = tslib_1.__importDefault(require("./GetFormResult"));
exports.GetFormResult = GetFormResult_1.default;
var GetFormByUserIdResult_1 = tslib_1.__importDefault(require("./GetFormByUserIdResult"));
exports.GetFormByUserIdResult = GetFormByUserIdResult_1.default;
var GetFormWithSignatureResult_1 = tslib_1.__importDefault(require("./GetFormWithSignatureResult"));
exports.GetFormWithSignatureResult = GetFormWithSignatureResult_1.default;
var GetFormWithSignatureByUserIdResult_1 = tslib_1.__importDefault(require("./GetFormWithSignatureByUserIdResult"));
exports.GetFormWithSignatureByUserIdResult = GetFormWithSignatureByUserIdResult_1.default;
var SetFormByUserIdResult_1 = tslib_1.__importDefault(require("./SetFormByUserIdResult"));
exports.SetFormByUserIdResult = SetFormByUserIdResult_1.default;
var SetFormWithSignatureResult_1 = tslib_1.__importDefault(require("./SetFormWithSignatureResult"));
exports.SetFormWithSignatureResult = SetFormWithSignatureResult_1.default;
var AcquireActionsToFormPropertiesResult_1 = tslib_1.__importDefault(require("./AcquireActionsToFormPropertiesResult"));
exports.AcquireActionsToFormPropertiesResult = AcquireActionsToFormPropertiesResult_1.default;
var DeleteFormResult_1 = tslib_1.__importDefault(require("./DeleteFormResult"));
exports.DeleteFormResult = DeleteFormResult_1.default;
var DeleteFormByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteFormByUserIdResult"));
exports.DeleteFormByUserIdResult = DeleteFormByUserIdResult_1.default;
var AcquireActionToFormPropertiesByStampSheetResult_1 = tslib_1.__importDefault(require("./AcquireActionToFormPropertiesByStampSheetResult"));
exports.AcquireActionToFormPropertiesByStampSheetResult = AcquireActionToFormPropertiesByStampSheetResult_1.default;
//# sourceMappingURL=index.js.map