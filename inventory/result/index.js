"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyReferenceOfResult = exports.GetReferenceOfByUserIdResult = exports.GetReferenceOfResult = exports.DescribeReferenceOfByUserIdResult = exports.DescribeReferenceOfResult = exports.ConsumeItemSetByStampTaskResult = exports.AcquireItemSetByStampSheetResult = exports.DeleteItemSetByUserIdResult = exports.ConsumeItemSetByUserIdResult = exports.ConsumeItemSetResult = exports.AcquireItemSetByUserIdResult = exports.GetItemWithSignatureByUserIdResult = exports.GetItemWithSignatureResult = exports.GetItemSetByUserIdResult = exports.GetItemSetResult = exports.DescribeItemSetsByUserIdResult = exports.DescribeItemSetsResult = exports.SetCapacityByStampSheetResult = exports.AddCapacityByStampSheetResult = exports.DeleteInventoryByUserIdResult = exports.SetCapacityByUserIdResult = exports.AddCapacityByUserIdResult = exports.GetInventoryByUserIdResult = exports.GetInventoryResult = exports.DescribeInventoriesByUserIdResult = exports.DescribeInventoriesResult = exports.UpdateCurrentItemModelMasterFromGitHubResult = exports.UpdateCurrentItemModelMasterResult = exports.GetCurrentItemModelMasterResult = exports.ExportMasterResult = exports.GetItemModelResult = exports.DescribeItemModelsResult = exports.DeleteItemModelMasterResult = exports.UpdateItemModelMasterResult = exports.GetItemModelMasterResult = exports.CreateItemModelMasterResult = exports.DescribeItemModelMastersResult = exports.GetInventoryModelResult = exports.DescribeInventoryModelsResult = exports.DeleteInventoryModelMasterResult = exports.UpdateInventoryModelMasterResult = exports.GetInventoryModelMasterResult = exports.CreateInventoryModelMasterResult = exports.DescribeInventoryModelMastersResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.VerifyReferenceOfByStampTaskResult = exports.DeleteReferenceOfItemSetByStampSheetResult = exports.AddReferenceOfItemSetByStampSheetResult = exports.DeleteReferenceOfByUserIdResult = exports.DeleteReferenceOfResult = exports.AddReferenceOfByUserIdResult = exports.AddReferenceOfResult = exports.VerifyReferenceOfByUserIdResult = void 0;
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
var DescribeInventoryModelMastersResult_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoryModelMastersResult"));
exports.DescribeInventoryModelMastersResult = DescribeInventoryModelMastersResult_1.default;
var CreateInventoryModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./CreateInventoryModelMasterResult"));
exports.CreateInventoryModelMasterResult = CreateInventoryModelMasterResult_1.default;
var GetInventoryModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./GetInventoryModelMasterResult"));
exports.GetInventoryModelMasterResult = GetInventoryModelMasterResult_1.default;
var UpdateInventoryModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./UpdateInventoryModelMasterResult"));
exports.UpdateInventoryModelMasterResult = UpdateInventoryModelMasterResult_1.default;
var DeleteInventoryModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./DeleteInventoryModelMasterResult"));
exports.DeleteInventoryModelMasterResult = DeleteInventoryModelMasterResult_1.default;
var DescribeInventoryModelsResult_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoryModelsResult"));
exports.DescribeInventoryModelsResult = DescribeInventoryModelsResult_1.default;
var GetInventoryModelResult_1 = (0, tslib_1.__importDefault)(require("./GetInventoryModelResult"));
exports.GetInventoryModelResult = GetInventoryModelResult_1.default;
var DescribeItemModelMastersResult_1 = (0, tslib_1.__importDefault)(require("./DescribeItemModelMastersResult"));
exports.DescribeItemModelMastersResult = DescribeItemModelMastersResult_1.default;
var CreateItemModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./CreateItemModelMasterResult"));
exports.CreateItemModelMasterResult = CreateItemModelMasterResult_1.default;
var GetItemModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./GetItemModelMasterResult"));
exports.GetItemModelMasterResult = GetItemModelMasterResult_1.default;
var UpdateItemModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./UpdateItemModelMasterResult"));
exports.UpdateItemModelMasterResult = UpdateItemModelMasterResult_1.default;
var DeleteItemModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./DeleteItemModelMasterResult"));
exports.DeleteItemModelMasterResult = DeleteItemModelMasterResult_1.default;
var DescribeItemModelsResult_1 = (0, tslib_1.__importDefault)(require("./DescribeItemModelsResult"));
exports.DescribeItemModelsResult = DescribeItemModelsResult_1.default;
var GetItemModelResult_1 = (0, tslib_1.__importDefault)(require("./GetItemModelResult"));
exports.GetItemModelResult = GetItemModelResult_1.default;
var ExportMasterResult_1 = (0, tslib_1.__importDefault)(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentItemModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./GetCurrentItemModelMasterResult"));
exports.GetCurrentItemModelMasterResult = GetCurrentItemModelMasterResult_1.default;
var UpdateCurrentItemModelMasterResult_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentItemModelMasterResult"));
exports.UpdateCurrentItemModelMasterResult = UpdateCurrentItemModelMasterResult_1.default;
var UpdateCurrentItemModelMasterFromGitHubResult_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentItemModelMasterFromGitHubResult"));
exports.UpdateCurrentItemModelMasterFromGitHubResult = UpdateCurrentItemModelMasterFromGitHubResult_1.default;
var DescribeInventoriesResult_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoriesResult"));
exports.DescribeInventoriesResult = DescribeInventoriesResult_1.default;
var DescribeInventoriesByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoriesByUserIdResult"));
exports.DescribeInventoriesByUserIdResult = DescribeInventoriesByUserIdResult_1.default;
var GetInventoryResult_1 = (0, tslib_1.__importDefault)(require("./GetInventoryResult"));
exports.GetInventoryResult = GetInventoryResult_1.default;
var GetInventoryByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./GetInventoryByUserIdResult"));
exports.GetInventoryByUserIdResult = GetInventoryByUserIdResult_1.default;
var AddCapacityByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./AddCapacityByUserIdResult"));
exports.AddCapacityByUserIdResult = AddCapacityByUserIdResult_1.default;
var SetCapacityByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./SetCapacityByUserIdResult"));
exports.SetCapacityByUserIdResult = SetCapacityByUserIdResult_1.default;
var DeleteInventoryByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DeleteInventoryByUserIdResult"));
exports.DeleteInventoryByUserIdResult = DeleteInventoryByUserIdResult_1.default;
var AddCapacityByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./AddCapacityByStampSheetResult"));
exports.AddCapacityByStampSheetResult = AddCapacityByStampSheetResult_1.default;
var SetCapacityByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./SetCapacityByStampSheetResult"));
exports.SetCapacityByStampSheetResult = SetCapacityByStampSheetResult_1.default;
var DescribeItemSetsResult_1 = (0, tslib_1.__importDefault)(require("./DescribeItemSetsResult"));
exports.DescribeItemSetsResult = DescribeItemSetsResult_1.default;
var DescribeItemSetsByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DescribeItemSetsByUserIdResult"));
exports.DescribeItemSetsByUserIdResult = DescribeItemSetsByUserIdResult_1.default;
var GetItemSetResult_1 = (0, tslib_1.__importDefault)(require("./GetItemSetResult"));
exports.GetItemSetResult = GetItemSetResult_1.default;
var GetItemSetByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./GetItemSetByUserIdResult"));
exports.GetItemSetByUserIdResult = GetItemSetByUserIdResult_1.default;
var GetItemWithSignatureResult_1 = (0, tslib_1.__importDefault)(require("./GetItemWithSignatureResult"));
exports.GetItemWithSignatureResult = GetItemWithSignatureResult_1.default;
var GetItemWithSignatureByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./GetItemWithSignatureByUserIdResult"));
exports.GetItemWithSignatureByUserIdResult = GetItemWithSignatureByUserIdResult_1.default;
var AcquireItemSetByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./AcquireItemSetByUserIdResult"));
exports.AcquireItemSetByUserIdResult = AcquireItemSetByUserIdResult_1.default;
var ConsumeItemSetResult_1 = (0, tslib_1.__importDefault)(require("./ConsumeItemSetResult"));
exports.ConsumeItemSetResult = ConsumeItemSetResult_1.default;
var ConsumeItemSetByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./ConsumeItemSetByUserIdResult"));
exports.ConsumeItemSetByUserIdResult = ConsumeItemSetByUserIdResult_1.default;
var DeleteItemSetByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DeleteItemSetByUserIdResult"));
exports.DeleteItemSetByUserIdResult = DeleteItemSetByUserIdResult_1.default;
var AcquireItemSetByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./AcquireItemSetByStampSheetResult"));
exports.AcquireItemSetByStampSheetResult = AcquireItemSetByStampSheetResult_1.default;
var ConsumeItemSetByStampTaskResult_1 = (0, tslib_1.__importDefault)(require("./ConsumeItemSetByStampTaskResult"));
exports.ConsumeItemSetByStampTaskResult = ConsumeItemSetByStampTaskResult_1.default;
var DescribeReferenceOfResult_1 = (0, tslib_1.__importDefault)(require("./DescribeReferenceOfResult"));
exports.DescribeReferenceOfResult = DescribeReferenceOfResult_1.default;
var DescribeReferenceOfByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DescribeReferenceOfByUserIdResult"));
exports.DescribeReferenceOfByUserIdResult = DescribeReferenceOfByUserIdResult_1.default;
var GetReferenceOfResult_1 = (0, tslib_1.__importDefault)(require("./GetReferenceOfResult"));
exports.GetReferenceOfResult = GetReferenceOfResult_1.default;
var GetReferenceOfByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./GetReferenceOfByUserIdResult"));
exports.GetReferenceOfByUserIdResult = GetReferenceOfByUserIdResult_1.default;
var VerifyReferenceOfResult_1 = (0, tslib_1.__importDefault)(require("./VerifyReferenceOfResult"));
exports.VerifyReferenceOfResult = VerifyReferenceOfResult_1.default;
var VerifyReferenceOfByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./VerifyReferenceOfByUserIdResult"));
exports.VerifyReferenceOfByUserIdResult = VerifyReferenceOfByUserIdResult_1.default;
var AddReferenceOfResult_1 = (0, tslib_1.__importDefault)(require("./AddReferenceOfResult"));
exports.AddReferenceOfResult = AddReferenceOfResult_1.default;
var AddReferenceOfByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./AddReferenceOfByUserIdResult"));
exports.AddReferenceOfByUserIdResult = AddReferenceOfByUserIdResult_1.default;
var DeleteReferenceOfResult_1 = (0, tslib_1.__importDefault)(require("./DeleteReferenceOfResult"));
exports.DeleteReferenceOfResult = DeleteReferenceOfResult_1.default;
var DeleteReferenceOfByUserIdResult_1 = (0, tslib_1.__importDefault)(require("./DeleteReferenceOfByUserIdResult"));
exports.DeleteReferenceOfByUserIdResult = DeleteReferenceOfByUserIdResult_1.default;
var AddReferenceOfItemSetByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./AddReferenceOfItemSetByStampSheetResult"));
exports.AddReferenceOfItemSetByStampSheetResult = AddReferenceOfItemSetByStampSheetResult_1.default;
var DeleteReferenceOfItemSetByStampSheetResult_1 = (0, tslib_1.__importDefault)(require("./DeleteReferenceOfItemSetByStampSheetResult"));
exports.DeleteReferenceOfItemSetByStampSheetResult = DeleteReferenceOfItemSetByStampSheetResult_1.default;
var VerifyReferenceOfByStampTaskResult_1 = (0, tslib_1.__importDefault)(require("./VerifyReferenceOfByStampTaskResult"));
exports.VerifyReferenceOfByStampTaskResult = VerifyReferenceOfByStampTaskResult_1.default;
//# sourceMappingURL=index.js.map