"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyReferenceOfRequest = exports.GetReferenceOfByUserIdRequest = exports.GetReferenceOfRequest = exports.DescribeReferenceOfByUserIdRequest = exports.DescribeReferenceOfRequest = exports.ConsumeItemSetByStampTaskRequest = exports.AcquireItemSetByStampSheetRequest = exports.DeleteItemSetByUserIdRequest = exports.ConsumeItemSetByUserIdRequest = exports.ConsumeItemSetRequest = exports.AcquireItemSetByUserIdRequest = exports.GetItemWithSignatureByUserIdRequest = exports.GetItemWithSignatureRequest = exports.GetItemSetByUserIdRequest = exports.GetItemSetRequest = exports.DescribeItemSetsByUserIdRequest = exports.DescribeItemSetsRequest = exports.SetCapacityByStampSheetRequest = exports.AddCapacityByStampSheetRequest = exports.DeleteInventoryByUserIdRequest = exports.SetCapacityByUserIdRequest = exports.AddCapacityByUserIdRequest = exports.GetInventoryByUserIdRequest = exports.GetInventoryRequest = exports.DescribeInventoriesByUserIdRequest = exports.DescribeInventoriesRequest = exports.UpdateCurrentItemModelMasterFromGitHubRequest = exports.UpdateCurrentItemModelMasterRequest = exports.GetCurrentItemModelMasterRequest = exports.ExportMasterRequest = exports.GetItemModelRequest = exports.DescribeItemModelsRequest = exports.DeleteItemModelMasterRequest = exports.UpdateItemModelMasterRequest = exports.GetItemModelMasterRequest = exports.CreateItemModelMasterRequest = exports.DescribeItemModelMastersRequest = exports.GetInventoryModelRequest = exports.DescribeInventoryModelsRequest = exports.DeleteInventoryModelMasterRequest = exports.UpdateInventoryModelMasterRequest = exports.GetInventoryModelMasterRequest = exports.CreateInventoryModelMasterRequest = exports.DescribeInventoryModelMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.VerifyReferenceOfByStampTaskRequest = exports.DeleteReferenceOfItemSetByStampSheetRequest = exports.AddReferenceOfItemSetByStampSheetRequest = exports.DeleteReferenceOfByUserIdRequest = exports.DeleteReferenceOfRequest = exports.AddReferenceOfByUserIdRequest = exports.AddReferenceOfRequest = exports.VerifyReferenceOfByUserIdRequest = void 0;
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
var DescribeNamespacesRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DescribeInventoryModelMastersRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoryModelMastersRequest"));
exports.DescribeInventoryModelMastersRequest = DescribeInventoryModelMastersRequest_1.default;
var CreateInventoryModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./CreateInventoryModelMasterRequest"));
exports.CreateInventoryModelMasterRequest = CreateInventoryModelMasterRequest_1.default;
var GetInventoryModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./GetInventoryModelMasterRequest"));
exports.GetInventoryModelMasterRequest = GetInventoryModelMasterRequest_1.default;
var UpdateInventoryModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateInventoryModelMasterRequest"));
exports.UpdateInventoryModelMasterRequest = UpdateInventoryModelMasterRequest_1.default;
var DeleteInventoryModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteInventoryModelMasterRequest"));
exports.DeleteInventoryModelMasterRequest = DeleteInventoryModelMasterRequest_1.default;
var DescribeInventoryModelsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoryModelsRequest"));
exports.DescribeInventoryModelsRequest = DescribeInventoryModelsRequest_1.default;
var GetInventoryModelRequest_1 = (0, tslib_1.__importDefault)(require("./GetInventoryModelRequest"));
exports.GetInventoryModelRequest = GetInventoryModelRequest_1.default;
var DescribeItemModelMastersRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeItemModelMastersRequest"));
exports.DescribeItemModelMastersRequest = DescribeItemModelMastersRequest_1.default;
var CreateItemModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./CreateItemModelMasterRequest"));
exports.CreateItemModelMasterRequest = CreateItemModelMasterRequest_1.default;
var GetItemModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./GetItemModelMasterRequest"));
exports.GetItemModelMasterRequest = GetItemModelMasterRequest_1.default;
var UpdateItemModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateItemModelMasterRequest"));
exports.UpdateItemModelMasterRequest = UpdateItemModelMasterRequest_1.default;
var DeleteItemModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteItemModelMasterRequest"));
exports.DeleteItemModelMasterRequest = DeleteItemModelMasterRequest_1.default;
var DescribeItemModelsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeItemModelsRequest"));
exports.DescribeItemModelsRequest = DescribeItemModelsRequest_1.default;
var GetItemModelRequest_1 = (0, tslib_1.__importDefault)(require("./GetItemModelRequest"));
exports.GetItemModelRequest = GetItemModelRequest_1.default;
var ExportMasterRequest_1 = (0, tslib_1.__importDefault)(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentItemModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./GetCurrentItemModelMasterRequest"));
exports.GetCurrentItemModelMasterRequest = GetCurrentItemModelMasterRequest_1.default;
var UpdateCurrentItemModelMasterRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentItemModelMasterRequest"));
exports.UpdateCurrentItemModelMasterRequest = UpdateCurrentItemModelMasterRequest_1.default;
var UpdateCurrentItemModelMasterFromGitHubRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateCurrentItemModelMasterFromGitHubRequest"));
exports.UpdateCurrentItemModelMasterFromGitHubRequest = UpdateCurrentItemModelMasterFromGitHubRequest_1.default;
var DescribeInventoriesRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoriesRequest"));
exports.DescribeInventoriesRequest = DescribeInventoriesRequest_1.default;
var DescribeInventoriesByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeInventoriesByUserIdRequest"));
exports.DescribeInventoriesByUserIdRequest = DescribeInventoriesByUserIdRequest_1.default;
var GetInventoryRequest_1 = (0, tslib_1.__importDefault)(require("./GetInventoryRequest"));
exports.GetInventoryRequest = GetInventoryRequest_1.default;
var GetInventoryByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetInventoryByUserIdRequest"));
exports.GetInventoryByUserIdRequest = GetInventoryByUserIdRequest_1.default;
var AddCapacityByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./AddCapacityByUserIdRequest"));
exports.AddCapacityByUserIdRequest = AddCapacityByUserIdRequest_1.default;
var SetCapacityByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./SetCapacityByUserIdRequest"));
exports.SetCapacityByUserIdRequest = SetCapacityByUserIdRequest_1.default;
var DeleteInventoryByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteInventoryByUserIdRequest"));
exports.DeleteInventoryByUserIdRequest = DeleteInventoryByUserIdRequest_1.default;
var AddCapacityByStampSheetRequest_1 = (0, tslib_1.__importDefault)(require("./AddCapacityByStampSheetRequest"));
exports.AddCapacityByStampSheetRequest = AddCapacityByStampSheetRequest_1.default;
var SetCapacityByStampSheetRequest_1 = (0, tslib_1.__importDefault)(require("./SetCapacityByStampSheetRequest"));
exports.SetCapacityByStampSheetRequest = SetCapacityByStampSheetRequest_1.default;
var DescribeItemSetsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeItemSetsRequest"));
exports.DescribeItemSetsRequest = DescribeItemSetsRequest_1.default;
var DescribeItemSetsByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeItemSetsByUserIdRequest"));
exports.DescribeItemSetsByUserIdRequest = DescribeItemSetsByUserIdRequest_1.default;
var GetItemSetRequest_1 = (0, tslib_1.__importDefault)(require("./GetItemSetRequest"));
exports.GetItemSetRequest = GetItemSetRequest_1.default;
var GetItemSetByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetItemSetByUserIdRequest"));
exports.GetItemSetByUserIdRequest = GetItemSetByUserIdRequest_1.default;
var GetItemWithSignatureRequest_1 = (0, tslib_1.__importDefault)(require("./GetItemWithSignatureRequest"));
exports.GetItemWithSignatureRequest = GetItemWithSignatureRequest_1.default;
var GetItemWithSignatureByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetItemWithSignatureByUserIdRequest"));
exports.GetItemWithSignatureByUserIdRequest = GetItemWithSignatureByUserIdRequest_1.default;
var AcquireItemSetByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./AcquireItemSetByUserIdRequest"));
exports.AcquireItemSetByUserIdRequest = AcquireItemSetByUserIdRequest_1.default;
var ConsumeItemSetRequest_1 = (0, tslib_1.__importDefault)(require("./ConsumeItemSetRequest"));
exports.ConsumeItemSetRequest = ConsumeItemSetRequest_1.default;
var ConsumeItemSetByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./ConsumeItemSetByUserIdRequest"));
exports.ConsumeItemSetByUserIdRequest = ConsumeItemSetByUserIdRequest_1.default;
var DeleteItemSetByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteItemSetByUserIdRequest"));
exports.DeleteItemSetByUserIdRequest = DeleteItemSetByUserIdRequest_1.default;
var AcquireItemSetByStampSheetRequest_1 = (0, tslib_1.__importDefault)(require("./AcquireItemSetByStampSheetRequest"));
exports.AcquireItemSetByStampSheetRequest = AcquireItemSetByStampSheetRequest_1.default;
var ConsumeItemSetByStampTaskRequest_1 = (0, tslib_1.__importDefault)(require("./ConsumeItemSetByStampTaskRequest"));
exports.ConsumeItemSetByStampTaskRequest = ConsumeItemSetByStampTaskRequest_1.default;
var DescribeReferenceOfRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeReferenceOfRequest"));
exports.DescribeReferenceOfRequest = DescribeReferenceOfRequest_1.default;
var DescribeReferenceOfByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeReferenceOfByUserIdRequest"));
exports.DescribeReferenceOfByUserIdRequest = DescribeReferenceOfByUserIdRequest_1.default;
var GetReferenceOfRequest_1 = (0, tslib_1.__importDefault)(require("./GetReferenceOfRequest"));
exports.GetReferenceOfRequest = GetReferenceOfRequest_1.default;
var GetReferenceOfByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetReferenceOfByUserIdRequest"));
exports.GetReferenceOfByUserIdRequest = GetReferenceOfByUserIdRequest_1.default;
var VerifyReferenceOfRequest_1 = (0, tslib_1.__importDefault)(require("./VerifyReferenceOfRequest"));
exports.VerifyReferenceOfRequest = VerifyReferenceOfRequest_1.default;
var VerifyReferenceOfByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./VerifyReferenceOfByUserIdRequest"));
exports.VerifyReferenceOfByUserIdRequest = VerifyReferenceOfByUserIdRequest_1.default;
var AddReferenceOfRequest_1 = (0, tslib_1.__importDefault)(require("./AddReferenceOfRequest"));
exports.AddReferenceOfRequest = AddReferenceOfRequest_1.default;
var AddReferenceOfByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./AddReferenceOfByUserIdRequest"));
exports.AddReferenceOfByUserIdRequest = AddReferenceOfByUserIdRequest_1.default;
var DeleteReferenceOfRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteReferenceOfRequest"));
exports.DeleteReferenceOfRequest = DeleteReferenceOfRequest_1.default;
var DeleteReferenceOfByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteReferenceOfByUserIdRequest"));
exports.DeleteReferenceOfByUserIdRequest = DeleteReferenceOfByUserIdRequest_1.default;
var AddReferenceOfItemSetByStampSheetRequest_1 = (0, tslib_1.__importDefault)(require("./AddReferenceOfItemSetByStampSheetRequest"));
exports.AddReferenceOfItemSetByStampSheetRequest = AddReferenceOfItemSetByStampSheetRequest_1.default;
var DeleteReferenceOfItemSetByStampSheetRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteReferenceOfItemSetByStampSheetRequest"));
exports.DeleteReferenceOfItemSetByStampSheetRequest = DeleteReferenceOfItemSetByStampSheetRequest_1.default;
var VerifyReferenceOfByStampTaskRequest_1 = (0, tslib_1.__importDefault)(require("./VerifyReferenceOfByStampTaskRequest"));
exports.VerifyReferenceOfByStampTaskRequest = VerifyReferenceOfByStampTaskRequest_1.default;
//# sourceMappingURL=index.js.map