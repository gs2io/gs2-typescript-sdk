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
import DescribeNamespacesRequest from "./DescribeNamespacesRequest"
import CreateNamespaceRequest from "./CreateNamespaceRequest"
import GetNamespaceStatusRequest from "./GetNamespaceStatusRequest"
import GetNamespaceRequest from "./GetNamespaceRequest"
import UpdateNamespaceRequest from "./UpdateNamespaceRequest"
import DeleteNamespaceRequest from "./DeleteNamespaceRequest"
import GetServiceVersionRequest from "./GetServiceVersionRequest"
import DumpUserDataByUserIdRequest from "./DumpUserDataByUserIdRequest"
import CheckDumpUserDataByUserIdRequest from "./CheckDumpUserDataByUserIdRequest"
import CleanUserDataByUserIdRequest from "./CleanUserDataByUserIdRequest"
import CheckCleanUserDataByUserIdRequest from "./CheckCleanUserDataByUserIdRequest"
import PrepareImportUserDataByUserIdRequest from "./PrepareImportUserDataByUserIdRequest"
import ImportUserDataByUserIdRequest from "./ImportUserDataByUserIdRequest"
import CheckImportUserDataByUserIdRequest from "./CheckImportUserDataByUserIdRequest"
import DescribeInventoryModelMastersRequest from "./DescribeInventoryModelMastersRequest"
import CreateInventoryModelMasterRequest from "./CreateInventoryModelMasterRequest"
import GetInventoryModelMasterRequest from "./GetInventoryModelMasterRequest"
import UpdateInventoryModelMasterRequest from "./UpdateInventoryModelMasterRequest"
import DeleteInventoryModelMasterRequest from "./DeleteInventoryModelMasterRequest"
import DescribeInventoryModelsRequest from "./DescribeInventoryModelsRequest"
import GetInventoryModelRequest from "./GetInventoryModelRequest"
import DescribeItemModelMastersRequest from "./DescribeItemModelMastersRequest"
import CreateItemModelMasterRequest from "./CreateItemModelMasterRequest"
import GetItemModelMasterRequest from "./GetItemModelMasterRequest"
import UpdateItemModelMasterRequest from "./UpdateItemModelMasterRequest"
import DeleteItemModelMasterRequest from "./DeleteItemModelMasterRequest"
import DescribeItemModelsRequest from "./DescribeItemModelsRequest"
import GetItemModelRequest from "./GetItemModelRequest"
import DescribeSimpleInventoryModelMastersRequest from "./DescribeSimpleInventoryModelMastersRequest"
import CreateSimpleInventoryModelMasterRequest from "./CreateSimpleInventoryModelMasterRequest"
import GetSimpleInventoryModelMasterRequest from "./GetSimpleInventoryModelMasterRequest"
import UpdateSimpleInventoryModelMasterRequest from "./UpdateSimpleInventoryModelMasterRequest"
import DeleteSimpleInventoryModelMasterRequest from "./DeleteSimpleInventoryModelMasterRequest"
import DescribeSimpleInventoryModelsRequest from "./DescribeSimpleInventoryModelsRequest"
import GetSimpleInventoryModelRequest from "./GetSimpleInventoryModelRequest"
import DescribeSimpleItemModelMastersRequest from "./DescribeSimpleItemModelMastersRequest"
import CreateSimpleItemModelMasterRequest from "./CreateSimpleItemModelMasterRequest"
import GetSimpleItemModelMasterRequest from "./GetSimpleItemModelMasterRequest"
import UpdateSimpleItemModelMasterRequest from "./UpdateSimpleItemModelMasterRequest"
import DeleteSimpleItemModelMasterRequest from "./DeleteSimpleItemModelMasterRequest"
import DescribeSimpleItemModelsRequest from "./DescribeSimpleItemModelsRequest"
import GetSimpleItemModelRequest from "./GetSimpleItemModelRequest"
import DescribeBigInventoryModelMastersRequest from "./DescribeBigInventoryModelMastersRequest"
import CreateBigInventoryModelMasterRequest from "./CreateBigInventoryModelMasterRequest"
import GetBigInventoryModelMasterRequest from "./GetBigInventoryModelMasterRequest"
import UpdateBigInventoryModelMasterRequest from "./UpdateBigInventoryModelMasterRequest"
import DeleteBigInventoryModelMasterRequest from "./DeleteBigInventoryModelMasterRequest"
import DescribeBigInventoryModelsRequest from "./DescribeBigInventoryModelsRequest"
import GetBigInventoryModelRequest from "./GetBigInventoryModelRequest"
import DescribeBigItemModelMastersRequest from "./DescribeBigItemModelMastersRequest"
import CreateBigItemModelMasterRequest from "./CreateBigItemModelMasterRequest"
import GetBigItemModelMasterRequest from "./GetBigItemModelMasterRequest"
import UpdateBigItemModelMasterRequest from "./UpdateBigItemModelMasterRequest"
import DeleteBigItemModelMasterRequest from "./DeleteBigItemModelMasterRequest"
import DescribeBigItemModelsRequest from "./DescribeBigItemModelsRequest"
import GetBigItemModelRequest from "./GetBigItemModelRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentItemModelMasterRequest from "./GetCurrentItemModelMasterRequest"
import PreUpdateCurrentItemModelMasterRequest from "./PreUpdateCurrentItemModelMasterRequest"
import UpdateCurrentItemModelMasterRequest from "./UpdateCurrentItemModelMasterRequest"
import UpdateCurrentItemModelMasterFromGitHubRequest from "./UpdateCurrentItemModelMasterFromGitHubRequest"
import DescribeInventoriesRequest from "./DescribeInventoriesRequest"
import DescribeInventoriesByUserIdRequest from "./DescribeInventoriesByUserIdRequest"
import GetInventoryRequest from "./GetInventoryRequest"
import GetInventoryByUserIdRequest from "./GetInventoryByUserIdRequest"
import AddCapacityByUserIdRequest from "./AddCapacityByUserIdRequest"
import SetCapacityByUserIdRequest from "./SetCapacityByUserIdRequest"
import DeleteInventoryByUserIdRequest from "./DeleteInventoryByUserIdRequest"
import VerifyInventoryCurrentMaxCapacityRequest from "./VerifyInventoryCurrentMaxCapacityRequest"
import VerifyInventoryCurrentMaxCapacityByUserIdRequest from "./VerifyInventoryCurrentMaxCapacityByUserIdRequest"
import VerifyInventoryCurrentMaxCapacityByStampTaskRequest from "./VerifyInventoryCurrentMaxCapacityByStampTaskRequest"
import AddCapacityByStampSheetRequest from "./AddCapacityByStampSheetRequest"
import SetCapacityByStampSheetRequest from "./SetCapacityByStampSheetRequest"
import DescribeItemSetsRequest from "./DescribeItemSetsRequest"
import DescribeItemSetsByUserIdRequest from "./DescribeItemSetsByUserIdRequest"
import GetItemSetRequest from "./GetItemSetRequest"
import GetItemSetByUserIdRequest from "./GetItemSetByUserIdRequest"
import GetItemWithSignatureRequest from "./GetItemWithSignatureRequest"
import GetItemWithSignatureByUserIdRequest from "./GetItemWithSignatureByUserIdRequest"
import AcquireItemSetByUserIdRequest from "./AcquireItemSetByUserIdRequest"
import AcquireItemSetWithGradeByUserIdRequest from "./AcquireItemSetWithGradeByUserIdRequest"
import ConsumeItemSetRequest from "./ConsumeItemSetRequest"
import ConsumeItemSetByUserIdRequest from "./ConsumeItemSetByUserIdRequest"
import DeleteItemSetByUserIdRequest from "./DeleteItemSetByUserIdRequest"
import VerifyItemSetRequest from "./VerifyItemSetRequest"
import VerifyItemSetByUserIdRequest from "./VerifyItemSetByUserIdRequest"
import AcquireItemSetByStampSheetRequest from "./AcquireItemSetByStampSheetRequest"
import AcquireItemSetWithGradeByStampSheetRequest from "./AcquireItemSetWithGradeByStampSheetRequest"
import ConsumeItemSetByStampTaskRequest from "./ConsumeItemSetByStampTaskRequest"
import VerifyItemSetByStampTaskRequest from "./VerifyItemSetByStampTaskRequest"
import DescribeReferenceOfRequest from "./DescribeReferenceOfRequest"
import DescribeReferenceOfByUserIdRequest from "./DescribeReferenceOfByUserIdRequest"
import GetReferenceOfRequest from "./GetReferenceOfRequest"
import GetReferenceOfByUserIdRequest from "./GetReferenceOfByUserIdRequest"
import VerifyReferenceOfRequest from "./VerifyReferenceOfRequest"
import VerifyReferenceOfByUserIdRequest from "./VerifyReferenceOfByUserIdRequest"
import AddReferenceOfRequest from "./AddReferenceOfRequest"
import AddReferenceOfByUserIdRequest from "./AddReferenceOfByUserIdRequest"
import DeleteReferenceOfRequest from "./DeleteReferenceOfRequest"
import DeleteReferenceOfByUserIdRequest from "./DeleteReferenceOfByUserIdRequest"
import AddReferenceOfItemSetByStampSheetRequest from "./AddReferenceOfItemSetByStampSheetRequest"
import DeleteReferenceOfItemSetByStampSheetRequest from "./DeleteReferenceOfItemSetByStampSheetRequest"
import VerifyReferenceOfByStampTaskRequest from "./VerifyReferenceOfByStampTaskRequest"
import DescribeSimpleItemsRequest from "./DescribeSimpleItemsRequest"
import DescribeSimpleItemsByUserIdRequest from "./DescribeSimpleItemsByUserIdRequest"
import GetSimpleItemRequest from "./GetSimpleItemRequest"
import GetSimpleItemByUserIdRequest from "./GetSimpleItemByUserIdRequest"
import GetSimpleItemWithSignatureRequest from "./GetSimpleItemWithSignatureRequest"
import GetSimpleItemWithSignatureByUserIdRequest from "./GetSimpleItemWithSignatureByUserIdRequest"
import AcquireSimpleItemsByUserIdRequest from "./AcquireSimpleItemsByUserIdRequest"
import ConsumeSimpleItemsRequest from "./ConsumeSimpleItemsRequest"
import ConsumeSimpleItemsByUserIdRequest from "./ConsumeSimpleItemsByUserIdRequest"
import SetSimpleItemsByUserIdRequest from "./SetSimpleItemsByUserIdRequest"
import DeleteSimpleItemsByUserIdRequest from "./DeleteSimpleItemsByUserIdRequest"
import VerifySimpleItemRequest from "./VerifySimpleItemRequest"
import VerifySimpleItemByUserIdRequest from "./VerifySimpleItemByUserIdRequest"
import AcquireSimpleItemsByStampSheetRequest from "./AcquireSimpleItemsByStampSheetRequest"
import ConsumeSimpleItemsByStampTaskRequest from "./ConsumeSimpleItemsByStampTaskRequest"
import SetSimpleItemsByStampSheetRequest from "./SetSimpleItemsByStampSheetRequest"
import VerifySimpleItemByStampTaskRequest from "./VerifySimpleItemByStampTaskRequest"
import DescribeBigItemsRequest from "./DescribeBigItemsRequest"
import DescribeBigItemsByUserIdRequest from "./DescribeBigItemsByUserIdRequest"
import GetBigItemRequest from "./GetBigItemRequest"
import GetBigItemByUserIdRequest from "./GetBigItemByUserIdRequest"
import AcquireBigItemByUserIdRequest from "./AcquireBigItemByUserIdRequest"
import ConsumeBigItemRequest from "./ConsumeBigItemRequest"
import ConsumeBigItemByUserIdRequest from "./ConsumeBigItemByUserIdRequest"
import SetBigItemByUserIdRequest from "./SetBigItemByUserIdRequest"
import DeleteBigItemByUserIdRequest from "./DeleteBigItemByUserIdRequest"
import VerifyBigItemRequest from "./VerifyBigItemRequest"
import VerifyBigItemByUserIdRequest from "./VerifyBigItemByUserIdRequest"
import AcquireBigItemByStampSheetRequest from "./AcquireBigItemByStampSheetRequest"
import ConsumeBigItemByStampTaskRequest from "./ConsumeBigItemByStampTaskRequest"
import SetBigItemByStampSheetRequest from "./SetBigItemByStampSheetRequest"
import VerifyBigItemByStampTaskRequest from "./VerifyBigItemByStampTaskRequest"

export {
    DescribeNamespacesRequest,
    CreateNamespaceRequest,
    GetNamespaceStatusRequest,
    GetNamespaceRequest,
    UpdateNamespaceRequest,
    DeleteNamespaceRequest,
    GetServiceVersionRequest,
    DumpUserDataByUserIdRequest,
    CheckDumpUserDataByUserIdRequest,
    CleanUserDataByUserIdRequest,
    CheckCleanUserDataByUserIdRequest,
    PrepareImportUserDataByUserIdRequest,
    ImportUserDataByUserIdRequest,
    CheckImportUserDataByUserIdRequest,
    DescribeInventoryModelMastersRequest,
    CreateInventoryModelMasterRequest,
    GetInventoryModelMasterRequest,
    UpdateInventoryModelMasterRequest,
    DeleteInventoryModelMasterRequest,
    DescribeInventoryModelsRequest,
    GetInventoryModelRequest,
    DescribeItemModelMastersRequest,
    CreateItemModelMasterRequest,
    GetItemModelMasterRequest,
    UpdateItemModelMasterRequest,
    DeleteItemModelMasterRequest,
    DescribeItemModelsRequest,
    GetItemModelRequest,
    DescribeSimpleInventoryModelMastersRequest,
    CreateSimpleInventoryModelMasterRequest,
    GetSimpleInventoryModelMasterRequest,
    UpdateSimpleInventoryModelMasterRequest,
    DeleteSimpleInventoryModelMasterRequest,
    DescribeSimpleInventoryModelsRequest,
    GetSimpleInventoryModelRequest,
    DescribeSimpleItemModelMastersRequest,
    CreateSimpleItemModelMasterRequest,
    GetSimpleItemModelMasterRequest,
    UpdateSimpleItemModelMasterRequest,
    DeleteSimpleItemModelMasterRequest,
    DescribeSimpleItemModelsRequest,
    GetSimpleItemModelRequest,
    DescribeBigInventoryModelMastersRequest,
    CreateBigInventoryModelMasterRequest,
    GetBigInventoryModelMasterRequest,
    UpdateBigInventoryModelMasterRequest,
    DeleteBigInventoryModelMasterRequest,
    DescribeBigInventoryModelsRequest,
    GetBigInventoryModelRequest,
    DescribeBigItemModelMastersRequest,
    CreateBigItemModelMasterRequest,
    GetBigItemModelMasterRequest,
    UpdateBigItemModelMasterRequest,
    DeleteBigItemModelMasterRequest,
    DescribeBigItemModelsRequest,
    GetBigItemModelRequest,
    ExportMasterRequest,
    GetCurrentItemModelMasterRequest,
    PreUpdateCurrentItemModelMasterRequest,
    UpdateCurrentItemModelMasterRequest,
    UpdateCurrentItemModelMasterFromGitHubRequest,
    DescribeInventoriesRequest,
    DescribeInventoriesByUserIdRequest,
    GetInventoryRequest,
    GetInventoryByUserIdRequest,
    AddCapacityByUserIdRequest,
    SetCapacityByUserIdRequest,
    DeleteInventoryByUserIdRequest,
    VerifyInventoryCurrentMaxCapacityRequest,
    VerifyInventoryCurrentMaxCapacityByUserIdRequest,
    VerifyInventoryCurrentMaxCapacityByStampTaskRequest,
    AddCapacityByStampSheetRequest,
    SetCapacityByStampSheetRequest,
    DescribeItemSetsRequest,
    DescribeItemSetsByUserIdRequest,
    GetItemSetRequest,
    GetItemSetByUserIdRequest,
    GetItemWithSignatureRequest,
    GetItemWithSignatureByUserIdRequest,
    AcquireItemSetByUserIdRequest,
    AcquireItemSetWithGradeByUserIdRequest,
    ConsumeItemSetRequest,
    ConsumeItemSetByUserIdRequest,
    DeleteItemSetByUserIdRequest,
    VerifyItemSetRequest,
    VerifyItemSetByUserIdRequest,
    AcquireItemSetByStampSheetRequest,
    AcquireItemSetWithGradeByStampSheetRequest,
    ConsumeItemSetByStampTaskRequest,
    VerifyItemSetByStampTaskRequest,
    DescribeReferenceOfRequest,
    DescribeReferenceOfByUserIdRequest,
    GetReferenceOfRequest,
    GetReferenceOfByUserIdRequest,
    VerifyReferenceOfRequest,
    VerifyReferenceOfByUserIdRequest,
    AddReferenceOfRequest,
    AddReferenceOfByUserIdRequest,
    DeleteReferenceOfRequest,
    DeleteReferenceOfByUserIdRequest,
    AddReferenceOfItemSetByStampSheetRequest,
    DeleteReferenceOfItemSetByStampSheetRequest,
    VerifyReferenceOfByStampTaskRequest,
    DescribeSimpleItemsRequest,
    DescribeSimpleItemsByUserIdRequest,
    GetSimpleItemRequest,
    GetSimpleItemByUserIdRequest,
    GetSimpleItemWithSignatureRequest,
    GetSimpleItemWithSignatureByUserIdRequest,
    AcquireSimpleItemsByUserIdRequest,
    ConsumeSimpleItemsRequest,
    ConsumeSimpleItemsByUserIdRequest,
    SetSimpleItemsByUserIdRequest,
    DeleteSimpleItemsByUserIdRequest,
    VerifySimpleItemRequest,
    VerifySimpleItemByUserIdRequest,
    AcquireSimpleItemsByStampSheetRequest,
    ConsumeSimpleItemsByStampTaskRequest,
    SetSimpleItemsByStampSheetRequest,
    VerifySimpleItemByStampTaskRequest,
    DescribeBigItemsRequest,
    DescribeBigItemsByUserIdRequest,
    GetBigItemRequest,
    GetBigItemByUserIdRequest,
    AcquireBigItemByUserIdRequest,
    ConsumeBigItemRequest,
    ConsumeBigItemByUserIdRequest,
    SetBigItemByUserIdRequest,
    DeleteBigItemByUserIdRequest,
    VerifyBigItemRequest,
    VerifyBigItemByUserIdRequest,
    AcquireBigItemByStampSheetRequest,
    ConsumeBigItemByStampTaskRequest,
    SetBigItemByStampSheetRequest,
    VerifyBigItemByStampTaskRequest,
};