"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeBigItemModelMastersRequest = exports.GetBigInventoryModelRequest = exports.DescribeBigInventoryModelsRequest = exports.DeleteBigInventoryModelMasterRequest = exports.UpdateBigInventoryModelMasterRequest = exports.GetBigInventoryModelMasterRequest = exports.CreateBigInventoryModelMasterRequest = exports.DescribeBigInventoryModelMastersRequest = exports.GetSimpleItemModelRequest = exports.DescribeSimpleItemModelsRequest = exports.DeleteSimpleItemModelMasterRequest = exports.UpdateSimpleItemModelMasterRequest = exports.GetSimpleItemModelMasterRequest = exports.CreateSimpleItemModelMasterRequest = exports.DescribeSimpleItemModelMastersRequest = exports.GetSimpleInventoryModelRequest = exports.DescribeSimpleInventoryModelsRequest = exports.DeleteSimpleInventoryModelMasterRequest = exports.UpdateSimpleInventoryModelMasterRequest = exports.GetSimpleInventoryModelMasterRequest = exports.CreateSimpleInventoryModelMasterRequest = exports.DescribeSimpleInventoryModelMastersRequest = exports.GetItemModelRequest = exports.DescribeItemModelsRequest = exports.DeleteItemModelMasterRequest = exports.UpdateItemModelMasterRequest = exports.GetItemModelMasterRequest = exports.CreateItemModelMasterRequest = exports.DescribeItemModelMastersRequest = exports.GetInventoryModelRequest = exports.DescribeInventoryModelsRequest = exports.DeleteInventoryModelMasterRequest = exports.UpdateInventoryModelMasterRequest = exports.GetInventoryModelMasterRequest = exports.CreateInventoryModelMasterRequest = exports.DescribeInventoryModelMastersRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.GetServiceVersionRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.DeleteReferenceOfByUserIdRequest = exports.DeleteReferenceOfRequest = exports.AddReferenceOfByUserIdRequest = exports.AddReferenceOfRequest = exports.VerifyReferenceOfByUserIdRequest = exports.VerifyReferenceOfRequest = exports.GetReferenceOfByUserIdRequest = exports.GetReferenceOfRequest = exports.DescribeReferenceOfByUserIdRequest = exports.DescribeReferenceOfRequest = exports.VerifyItemSetByStampTaskRequest = exports.ConsumeItemSetByStampTaskRequest = exports.AcquireItemSetWithGradeByStampSheetRequest = exports.AcquireItemSetByStampSheetRequest = exports.VerifyItemSetByUserIdRequest = exports.VerifyItemSetRequest = exports.DeleteItemSetByUserIdRequest = exports.ConsumeItemSetByUserIdRequest = exports.ConsumeItemSetRequest = exports.AcquireItemSetWithGradeByUserIdRequest = exports.AcquireItemSetByUserIdRequest = exports.GetItemWithSignatureByUserIdRequest = exports.GetItemWithSignatureRequest = exports.GetItemSetByUserIdRequest = exports.GetItemSetRequest = exports.DescribeItemSetsByUserIdRequest = exports.DescribeItemSetsRequest = exports.SetCapacityByStampSheetRequest = exports.AddCapacityByStampSheetRequest = exports.VerifyInventoryCurrentMaxCapacityByStampTaskRequest = exports.VerifyInventoryCurrentMaxCapacityByUserIdRequest = exports.VerifyInventoryCurrentMaxCapacityRequest = exports.DeleteInventoryByUserIdRequest = exports.SetCapacityByUserIdRequest = exports.AddCapacityByUserIdRequest = exports.GetInventoryByUserIdRequest = exports.GetInventoryRequest = exports.DescribeInventoriesByUserIdRequest = exports.DescribeInventoriesRequest = exports.UpdateCurrentItemModelMasterFromGitHubRequest = exports.UpdateCurrentItemModelMasterRequest = exports.PreUpdateCurrentItemModelMasterRequest = exports.GetCurrentItemModelMasterRequest = exports.ExportMasterRequest = exports.GetBigItemModelRequest = exports.DescribeBigItemModelsRequest = exports.DeleteBigItemModelMasterRequest = exports.UpdateBigItemModelMasterRequest = exports.GetBigItemModelMasterRequest = exports.CreateBigItemModelMasterRequest = void 0;
exports.VerifyBigItemByStampTaskRequest = exports.SetBigItemByStampSheetRequest = exports.ConsumeBigItemByStampTaskRequest = exports.AcquireBigItemByStampSheetRequest = exports.VerifyBigItemByUserIdRequest = exports.VerifyBigItemRequest = exports.DeleteBigItemByUserIdRequest = exports.SetBigItemByUserIdRequest = exports.ConsumeBigItemByUserIdRequest = exports.ConsumeBigItemRequest = exports.AcquireBigItemByUserIdRequest = exports.GetBigItemByUserIdRequest = exports.GetBigItemRequest = exports.DescribeBigItemsByUserIdRequest = exports.DescribeBigItemsRequest = exports.VerifySimpleItemByStampTaskRequest = exports.SetSimpleItemsByStampSheetRequest = exports.ConsumeSimpleItemsByStampTaskRequest = exports.AcquireSimpleItemsByStampSheetRequest = exports.VerifySimpleItemByUserIdRequest = exports.VerifySimpleItemRequest = exports.DeleteSimpleItemsByUserIdRequest = exports.SetSimpleItemsByUserIdRequest = exports.ConsumeSimpleItemsByUserIdRequest = exports.ConsumeSimpleItemsRequest = exports.AcquireSimpleItemsByUserIdRequest = exports.GetSimpleItemWithSignatureByUserIdRequest = exports.GetSimpleItemWithSignatureRequest = exports.GetSimpleItemByUserIdRequest = exports.GetSimpleItemRequest = exports.DescribeSimpleItemsByUserIdRequest = exports.DescribeSimpleItemsRequest = exports.VerifyReferenceOfByStampTaskRequest = exports.DeleteReferenceOfItemSetByStampSheetRequest = exports.AddReferenceOfItemSetByStampSheetRequest = void 0;
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
var DescribeInventoryModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeInventoryModelMastersRequest"));
exports.DescribeInventoryModelMastersRequest = DescribeInventoryModelMastersRequest_1.default;
var CreateInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateInventoryModelMasterRequest"));
exports.CreateInventoryModelMasterRequest = CreateInventoryModelMasterRequest_1.default;
var GetInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./GetInventoryModelMasterRequest"));
exports.GetInventoryModelMasterRequest = GetInventoryModelMasterRequest_1.default;
var UpdateInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateInventoryModelMasterRequest"));
exports.UpdateInventoryModelMasterRequest = UpdateInventoryModelMasterRequest_1.default;
var DeleteInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteInventoryModelMasterRequest"));
exports.DeleteInventoryModelMasterRequest = DeleteInventoryModelMasterRequest_1.default;
var DescribeInventoryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeInventoryModelsRequest"));
exports.DescribeInventoryModelsRequest = DescribeInventoryModelsRequest_1.default;
var GetInventoryModelRequest_1 = tslib_1.__importDefault(require("./GetInventoryModelRequest"));
exports.GetInventoryModelRequest = GetInventoryModelRequest_1.default;
var DescribeItemModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeItemModelMastersRequest"));
exports.DescribeItemModelMastersRequest = DescribeItemModelMastersRequest_1.default;
var CreateItemModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateItemModelMasterRequest"));
exports.CreateItemModelMasterRequest = CreateItemModelMasterRequest_1.default;
var GetItemModelMasterRequest_1 = tslib_1.__importDefault(require("./GetItemModelMasterRequest"));
exports.GetItemModelMasterRequest = GetItemModelMasterRequest_1.default;
var UpdateItemModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateItemModelMasterRequest"));
exports.UpdateItemModelMasterRequest = UpdateItemModelMasterRequest_1.default;
var DeleteItemModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteItemModelMasterRequest"));
exports.DeleteItemModelMasterRequest = DeleteItemModelMasterRequest_1.default;
var DescribeItemModelsRequest_1 = tslib_1.__importDefault(require("./DescribeItemModelsRequest"));
exports.DescribeItemModelsRequest = DescribeItemModelsRequest_1.default;
var GetItemModelRequest_1 = tslib_1.__importDefault(require("./GetItemModelRequest"));
exports.GetItemModelRequest = GetItemModelRequest_1.default;
var DescribeSimpleInventoryModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeSimpleInventoryModelMastersRequest"));
exports.DescribeSimpleInventoryModelMastersRequest = DescribeSimpleInventoryModelMastersRequest_1.default;
var CreateSimpleInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateSimpleInventoryModelMasterRequest"));
exports.CreateSimpleInventoryModelMasterRequest = CreateSimpleInventoryModelMasterRequest_1.default;
var GetSimpleInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./GetSimpleInventoryModelMasterRequest"));
exports.GetSimpleInventoryModelMasterRequest = GetSimpleInventoryModelMasterRequest_1.default;
var UpdateSimpleInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateSimpleInventoryModelMasterRequest"));
exports.UpdateSimpleInventoryModelMasterRequest = UpdateSimpleInventoryModelMasterRequest_1.default;
var DeleteSimpleInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteSimpleInventoryModelMasterRequest"));
exports.DeleteSimpleInventoryModelMasterRequest = DeleteSimpleInventoryModelMasterRequest_1.default;
var DescribeSimpleInventoryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeSimpleInventoryModelsRequest"));
exports.DescribeSimpleInventoryModelsRequest = DescribeSimpleInventoryModelsRequest_1.default;
var GetSimpleInventoryModelRequest_1 = tslib_1.__importDefault(require("./GetSimpleInventoryModelRequest"));
exports.GetSimpleInventoryModelRequest = GetSimpleInventoryModelRequest_1.default;
var DescribeSimpleItemModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeSimpleItemModelMastersRequest"));
exports.DescribeSimpleItemModelMastersRequest = DescribeSimpleItemModelMastersRequest_1.default;
var CreateSimpleItemModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateSimpleItemModelMasterRequest"));
exports.CreateSimpleItemModelMasterRequest = CreateSimpleItemModelMasterRequest_1.default;
var GetSimpleItemModelMasterRequest_1 = tslib_1.__importDefault(require("./GetSimpleItemModelMasterRequest"));
exports.GetSimpleItemModelMasterRequest = GetSimpleItemModelMasterRequest_1.default;
var UpdateSimpleItemModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateSimpleItemModelMasterRequest"));
exports.UpdateSimpleItemModelMasterRequest = UpdateSimpleItemModelMasterRequest_1.default;
var DeleteSimpleItemModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteSimpleItemModelMasterRequest"));
exports.DeleteSimpleItemModelMasterRequest = DeleteSimpleItemModelMasterRequest_1.default;
var DescribeSimpleItemModelsRequest_1 = tslib_1.__importDefault(require("./DescribeSimpleItemModelsRequest"));
exports.DescribeSimpleItemModelsRequest = DescribeSimpleItemModelsRequest_1.default;
var GetSimpleItemModelRequest_1 = tslib_1.__importDefault(require("./GetSimpleItemModelRequest"));
exports.GetSimpleItemModelRequest = GetSimpleItemModelRequest_1.default;
var DescribeBigInventoryModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeBigInventoryModelMastersRequest"));
exports.DescribeBigInventoryModelMastersRequest = DescribeBigInventoryModelMastersRequest_1.default;
var CreateBigInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateBigInventoryModelMasterRequest"));
exports.CreateBigInventoryModelMasterRequest = CreateBigInventoryModelMasterRequest_1.default;
var GetBigInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./GetBigInventoryModelMasterRequest"));
exports.GetBigInventoryModelMasterRequest = GetBigInventoryModelMasterRequest_1.default;
var UpdateBigInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateBigInventoryModelMasterRequest"));
exports.UpdateBigInventoryModelMasterRequest = UpdateBigInventoryModelMasterRequest_1.default;
var DeleteBigInventoryModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteBigInventoryModelMasterRequest"));
exports.DeleteBigInventoryModelMasterRequest = DeleteBigInventoryModelMasterRequest_1.default;
var DescribeBigInventoryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeBigInventoryModelsRequest"));
exports.DescribeBigInventoryModelsRequest = DescribeBigInventoryModelsRequest_1.default;
var GetBigInventoryModelRequest_1 = tslib_1.__importDefault(require("./GetBigInventoryModelRequest"));
exports.GetBigInventoryModelRequest = GetBigInventoryModelRequest_1.default;
var DescribeBigItemModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeBigItemModelMastersRequest"));
exports.DescribeBigItemModelMastersRequest = DescribeBigItemModelMastersRequest_1.default;
var CreateBigItemModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateBigItemModelMasterRequest"));
exports.CreateBigItemModelMasterRequest = CreateBigItemModelMasterRequest_1.default;
var GetBigItemModelMasterRequest_1 = tslib_1.__importDefault(require("./GetBigItemModelMasterRequest"));
exports.GetBigItemModelMasterRequest = GetBigItemModelMasterRequest_1.default;
var UpdateBigItemModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateBigItemModelMasterRequest"));
exports.UpdateBigItemModelMasterRequest = UpdateBigItemModelMasterRequest_1.default;
var DeleteBigItemModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteBigItemModelMasterRequest"));
exports.DeleteBigItemModelMasterRequest = DeleteBigItemModelMasterRequest_1.default;
var DescribeBigItemModelsRequest_1 = tslib_1.__importDefault(require("./DescribeBigItemModelsRequest"));
exports.DescribeBigItemModelsRequest = DescribeBigItemModelsRequest_1.default;
var GetBigItemModelRequest_1 = tslib_1.__importDefault(require("./GetBigItemModelRequest"));
exports.GetBigItemModelRequest = GetBigItemModelRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentItemModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentItemModelMasterRequest"));
exports.GetCurrentItemModelMasterRequest = GetCurrentItemModelMasterRequest_1.default;
var PreUpdateCurrentItemModelMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentItemModelMasterRequest"));
exports.PreUpdateCurrentItemModelMasterRequest = PreUpdateCurrentItemModelMasterRequest_1.default;
var UpdateCurrentItemModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentItemModelMasterRequest"));
exports.UpdateCurrentItemModelMasterRequest = UpdateCurrentItemModelMasterRequest_1.default;
var UpdateCurrentItemModelMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentItemModelMasterFromGitHubRequest"));
exports.UpdateCurrentItemModelMasterFromGitHubRequest = UpdateCurrentItemModelMasterFromGitHubRequest_1.default;
var DescribeInventoriesRequest_1 = tslib_1.__importDefault(require("./DescribeInventoriesRequest"));
exports.DescribeInventoriesRequest = DescribeInventoriesRequest_1.default;
var DescribeInventoriesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeInventoriesByUserIdRequest"));
exports.DescribeInventoriesByUserIdRequest = DescribeInventoriesByUserIdRequest_1.default;
var GetInventoryRequest_1 = tslib_1.__importDefault(require("./GetInventoryRequest"));
exports.GetInventoryRequest = GetInventoryRequest_1.default;
var GetInventoryByUserIdRequest_1 = tslib_1.__importDefault(require("./GetInventoryByUserIdRequest"));
exports.GetInventoryByUserIdRequest = GetInventoryByUserIdRequest_1.default;
var AddCapacityByUserIdRequest_1 = tslib_1.__importDefault(require("./AddCapacityByUserIdRequest"));
exports.AddCapacityByUserIdRequest = AddCapacityByUserIdRequest_1.default;
var SetCapacityByUserIdRequest_1 = tslib_1.__importDefault(require("./SetCapacityByUserIdRequest"));
exports.SetCapacityByUserIdRequest = SetCapacityByUserIdRequest_1.default;
var DeleteInventoryByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteInventoryByUserIdRequest"));
exports.DeleteInventoryByUserIdRequest = DeleteInventoryByUserIdRequest_1.default;
var VerifyInventoryCurrentMaxCapacityRequest_1 = tslib_1.__importDefault(require("./VerifyInventoryCurrentMaxCapacityRequest"));
exports.VerifyInventoryCurrentMaxCapacityRequest = VerifyInventoryCurrentMaxCapacityRequest_1.default;
var VerifyInventoryCurrentMaxCapacityByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyInventoryCurrentMaxCapacityByUserIdRequest"));
exports.VerifyInventoryCurrentMaxCapacityByUserIdRequest = VerifyInventoryCurrentMaxCapacityByUserIdRequest_1.default;
var VerifyInventoryCurrentMaxCapacityByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyInventoryCurrentMaxCapacityByStampTaskRequest"));
exports.VerifyInventoryCurrentMaxCapacityByStampTaskRequest = VerifyInventoryCurrentMaxCapacityByStampTaskRequest_1.default;
var AddCapacityByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddCapacityByStampSheetRequest"));
exports.AddCapacityByStampSheetRequest = AddCapacityByStampSheetRequest_1.default;
var SetCapacityByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetCapacityByStampSheetRequest"));
exports.SetCapacityByStampSheetRequest = SetCapacityByStampSheetRequest_1.default;
var DescribeItemSetsRequest_1 = tslib_1.__importDefault(require("./DescribeItemSetsRequest"));
exports.DescribeItemSetsRequest = DescribeItemSetsRequest_1.default;
var DescribeItemSetsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeItemSetsByUserIdRequest"));
exports.DescribeItemSetsByUserIdRequest = DescribeItemSetsByUserIdRequest_1.default;
var GetItemSetRequest_1 = tslib_1.__importDefault(require("./GetItemSetRequest"));
exports.GetItemSetRequest = GetItemSetRequest_1.default;
var GetItemSetByUserIdRequest_1 = tslib_1.__importDefault(require("./GetItemSetByUserIdRequest"));
exports.GetItemSetByUserIdRequest = GetItemSetByUserIdRequest_1.default;
var GetItemWithSignatureRequest_1 = tslib_1.__importDefault(require("./GetItemWithSignatureRequest"));
exports.GetItemWithSignatureRequest = GetItemWithSignatureRequest_1.default;
var GetItemWithSignatureByUserIdRequest_1 = tslib_1.__importDefault(require("./GetItemWithSignatureByUserIdRequest"));
exports.GetItemWithSignatureByUserIdRequest = GetItemWithSignatureByUserIdRequest_1.default;
var AcquireItemSetByUserIdRequest_1 = tslib_1.__importDefault(require("./AcquireItemSetByUserIdRequest"));
exports.AcquireItemSetByUserIdRequest = AcquireItemSetByUserIdRequest_1.default;
var AcquireItemSetWithGradeByUserIdRequest_1 = tslib_1.__importDefault(require("./AcquireItemSetWithGradeByUserIdRequest"));
exports.AcquireItemSetWithGradeByUserIdRequest = AcquireItemSetWithGradeByUserIdRequest_1.default;
var ConsumeItemSetRequest_1 = tslib_1.__importDefault(require("./ConsumeItemSetRequest"));
exports.ConsumeItemSetRequest = ConsumeItemSetRequest_1.default;
var ConsumeItemSetByUserIdRequest_1 = tslib_1.__importDefault(require("./ConsumeItemSetByUserIdRequest"));
exports.ConsumeItemSetByUserIdRequest = ConsumeItemSetByUserIdRequest_1.default;
var DeleteItemSetByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteItemSetByUserIdRequest"));
exports.DeleteItemSetByUserIdRequest = DeleteItemSetByUserIdRequest_1.default;
var VerifyItemSetRequest_1 = tslib_1.__importDefault(require("./VerifyItemSetRequest"));
exports.VerifyItemSetRequest = VerifyItemSetRequest_1.default;
var VerifyItemSetByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyItemSetByUserIdRequest"));
exports.VerifyItemSetByUserIdRequest = VerifyItemSetByUserIdRequest_1.default;
var AcquireItemSetByStampSheetRequest_1 = tslib_1.__importDefault(require("./AcquireItemSetByStampSheetRequest"));
exports.AcquireItemSetByStampSheetRequest = AcquireItemSetByStampSheetRequest_1.default;
var AcquireItemSetWithGradeByStampSheetRequest_1 = tslib_1.__importDefault(require("./AcquireItemSetWithGradeByStampSheetRequest"));
exports.AcquireItemSetWithGradeByStampSheetRequest = AcquireItemSetWithGradeByStampSheetRequest_1.default;
var ConsumeItemSetByStampTaskRequest_1 = tslib_1.__importDefault(require("./ConsumeItemSetByStampTaskRequest"));
exports.ConsumeItemSetByStampTaskRequest = ConsumeItemSetByStampTaskRequest_1.default;
var VerifyItemSetByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyItemSetByStampTaskRequest"));
exports.VerifyItemSetByStampTaskRequest = VerifyItemSetByStampTaskRequest_1.default;
var DescribeReferenceOfRequest_1 = tslib_1.__importDefault(require("./DescribeReferenceOfRequest"));
exports.DescribeReferenceOfRequest = DescribeReferenceOfRequest_1.default;
var DescribeReferenceOfByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeReferenceOfByUserIdRequest"));
exports.DescribeReferenceOfByUserIdRequest = DescribeReferenceOfByUserIdRequest_1.default;
var GetReferenceOfRequest_1 = tslib_1.__importDefault(require("./GetReferenceOfRequest"));
exports.GetReferenceOfRequest = GetReferenceOfRequest_1.default;
var GetReferenceOfByUserIdRequest_1 = tslib_1.__importDefault(require("./GetReferenceOfByUserIdRequest"));
exports.GetReferenceOfByUserIdRequest = GetReferenceOfByUserIdRequest_1.default;
var VerifyReferenceOfRequest_1 = tslib_1.__importDefault(require("./VerifyReferenceOfRequest"));
exports.VerifyReferenceOfRequest = VerifyReferenceOfRequest_1.default;
var VerifyReferenceOfByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyReferenceOfByUserIdRequest"));
exports.VerifyReferenceOfByUserIdRequest = VerifyReferenceOfByUserIdRequest_1.default;
var AddReferenceOfRequest_1 = tslib_1.__importDefault(require("./AddReferenceOfRequest"));
exports.AddReferenceOfRequest = AddReferenceOfRequest_1.default;
var AddReferenceOfByUserIdRequest_1 = tslib_1.__importDefault(require("./AddReferenceOfByUserIdRequest"));
exports.AddReferenceOfByUserIdRequest = AddReferenceOfByUserIdRequest_1.default;
var DeleteReferenceOfRequest_1 = tslib_1.__importDefault(require("./DeleteReferenceOfRequest"));
exports.DeleteReferenceOfRequest = DeleteReferenceOfRequest_1.default;
var DeleteReferenceOfByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteReferenceOfByUserIdRequest"));
exports.DeleteReferenceOfByUserIdRequest = DeleteReferenceOfByUserIdRequest_1.default;
var AddReferenceOfItemSetByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddReferenceOfItemSetByStampSheetRequest"));
exports.AddReferenceOfItemSetByStampSheetRequest = AddReferenceOfItemSetByStampSheetRequest_1.default;
var DeleteReferenceOfItemSetByStampSheetRequest_1 = tslib_1.__importDefault(require("./DeleteReferenceOfItemSetByStampSheetRequest"));
exports.DeleteReferenceOfItemSetByStampSheetRequest = DeleteReferenceOfItemSetByStampSheetRequest_1.default;
var VerifyReferenceOfByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyReferenceOfByStampTaskRequest"));
exports.VerifyReferenceOfByStampTaskRequest = VerifyReferenceOfByStampTaskRequest_1.default;
var DescribeSimpleItemsRequest_1 = tslib_1.__importDefault(require("./DescribeSimpleItemsRequest"));
exports.DescribeSimpleItemsRequest = DescribeSimpleItemsRequest_1.default;
var DescribeSimpleItemsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeSimpleItemsByUserIdRequest"));
exports.DescribeSimpleItemsByUserIdRequest = DescribeSimpleItemsByUserIdRequest_1.default;
var GetSimpleItemRequest_1 = tslib_1.__importDefault(require("./GetSimpleItemRequest"));
exports.GetSimpleItemRequest = GetSimpleItemRequest_1.default;
var GetSimpleItemByUserIdRequest_1 = tslib_1.__importDefault(require("./GetSimpleItemByUserIdRequest"));
exports.GetSimpleItemByUserIdRequest = GetSimpleItemByUserIdRequest_1.default;
var GetSimpleItemWithSignatureRequest_1 = tslib_1.__importDefault(require("./GetSimpleItemWithSignatureRequest"));
exports.GetSimpleItemWithSignatureRequest = GetSimpleItemWithSignatureRequest_1.default;
var GetSimpleItemWithSignatureByUserIdRequest_1 = tslib_1.__importDefault(require("./GetSimpleItemWithSignatureByUserIdRequest"));
exports.GetSimpleItemWithSignatureByUserIdRequest = GetSimpleItemWithSignatureByUserIdRequest_1.default;
var AcquireSimpleItemsByUserIdRequest_1 = tslib_1.__importDefault(require("./AcquireSimpleItemsByUserIdRequest"));
exports.AcquireSimpleItemsByUserIdRequest = AcquireSimpleItemsByUserIdRequest_1.default;
var ConsumeSimpleItemsRequest_1 = tslib_1.__importDefault(require("./ConsumeSimpleItemsRequest"));
exports.ConsumeSimpleItemsRequest = ConsumeSimpleItemsRequest_1.default;
var ConsumeSimpleItemsByUserIdRequest_1 = tslib_1.__importDefault(require("./ConsumeSimpleItemsByUserIdRequest"));
exports.ConsumeSimpleItemsByUserIdRequest = ConsumeSimpleItemsByUserIdRequest_1.default;
var SetSimpleItemsByUserIdRequest_1 = tslib_1.__importDefault(require("./SetSimpleItemsByUserIdRequest"));
exports.SetSimpleItemsByUserIdRequest = SetSimpleItemsByUserIdRequest_1.default;
var DeleteSimpleItemsByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteSimpleItemsByUserIdRequest"));
exports.DeleteSimpleItemsByUserIdRequest = DeleteSimpleItemsByUserIdRequest_1.default;
var VerifySimpleItemRequest_1 = tslib_1.__importDefault(require("./VerifySimpleItemRequest"));
exports.VerifySimpleItemRequest = VerifySimpleItemRequest_1.default;
var VerifySimpleItemByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifySimpleItemByUserIdRequest"));
exports.VerifySimpleItemByUserIdRequest = VerifySimpleItemByUserIdRequest_1.default;
var AcquireSimpleItemsByStampSheetRequest_1 = tslib_1.__importDefault(require("./AcquireSimpleItemsByStampSheetRequest"));
exports.AcquireSimpleItemsByStampSheetRequest = AcquireSimpleItemsByStampSheetRequest_1.default;
var ConsumeSimpleItemsByStampTaskRequest_1 = tslib_1.__importDefault(require("./ConsumeSimpleItemsByStampTaskRequest"));
exports.ConsumeSimpleItemsByStampTaskRequest = ConsumeSimpleItemsByStampTaskRequest_1.default;
var SetSimpleItemsByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetSimpleItemsByStampSheetRequest"));
exports.SetSimpleItemsByStampSheetRequest = SetSimpleItemsByStampSheetRequest_1.default;
var VerifySimpleItemByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifySimpleItemByStampTaskRequest"));
exports.VerifySimpleItemByStampTaskRequest = VerifySimpleItemByStampTaskRequest_1.default;
var DescribeBigItemsRequest_1 = tslib_1.__importDefault(require("./DescribeBigItemsRequest"));
exports.DescribeBigItemsRequest = DescribeBigItemsRequest_1.default;
var DescribeBigItemsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeBigItemsByUserIdRequest"));
exports.DescribeBigItemsByUserIdRequest = DescribeBigItemsByUserIdRequest_1.default;
var GetBigItemRequest_1 = tslib_1.__importDefault(require("./GetBigItemRequest"));
exports.GetBigItemRequest = GetBigItemRequest_1.default;
var GetBigItemByUserIdRequest_1 = tslib_1.__importDefault(require("./GetBigItemByUserIdRequest"));
exports.GetBigItemByUserIdRequest = GetBigItemByUserIdRequest_1.default;
var AcquireBigItemByUserIdRequest_1 = tslib_1.__importDefault(require("./AcquireBigItemByUserIdRequest"));
exports.AcquireBigItemByUserIdRequest = AcquireBigItemByUserIdRequest_1.default;
var ConsumeBigItemRequest_1 = tslib_1.__importDefault(require("./ConsumeBigItemRequest"));
exports.ConsumeBigItemRequest = ConsumeBigItemRequest_1.default;
var ConsumeBigItemByUserIdRequest_1 = tslib_1.__importDefault(require("./ConsumeBigItemByUserIdRequest"));
exports.ConsumeBigItemByUserIdRequest = ConsumeBigItemByUserIdRequest_1.default;
var SetBigItemByUserIdRequest_1 = tslib_1.__importDefault(require("./SetBigItemByUserIdRequest"));
exports.SetBigItemByUserIdRequest = SetBigItemByUserIdRequest_1.default;
var DeleteBigItemByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteBigItemByUserIdRequest"));
exports.DeleteBigItemByUserIdRequest = DeleteBigItemByUserIdRequest_1.default;
var VerifyBigItemRequest_1 = tslib_1.__importDefault(require("./VerifyBigItemRequest"));
exports.VerifyBigItemRequest = VerifyBigItemRequest_1.default;
var VerifyBigItemByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyBigItemByUserIdRequest"));
exports.VerifyBigItemByUserIdRequest = VerifyBigItemByUserIdRequest_1.default;
var AcquireBigItemByStampSheetRequest_1 = tslib_1.__importDefault(require("./AcquireBigItemByStampSheetRequest"));
exports.AcquireBigItemByStampSheetRequest = AcquireBigItemByStampSheetRequest_1.default;
var ConsumeBigItemByStampTaskRequest_1 = tslib_1.__importDefault(require("./ConsumeBigItemByStampTaskRequest"));
exports.ConsumeBigItemByStampTaskRequest = ConsumeBigItemByStampTaskRequest_1.default;
var SetBigItemByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetBigItemByStampSheetRequest"));
exports.SetBigItemByStampSheetRequest = SetBigItemByStampSheetRequest_1.default;
var VerifyBigItemByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyBigItemByStampTaskRequest"));
exports.VerifyBigItemByStampTaskRequest = VerifyBigItemByStampTaskRequest_1.default;
//# sourceMappingURL=index.js.map