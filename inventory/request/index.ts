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
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentItemModelMasterRequest from "./GetCurrentItemModelMasterRequest"
import UpdateCurrentItemModelMasterRequest from "./UpdateCurrentItemModelMasterRequest"
import UpdateCurrentItemModelMasterFromGitHubRequest from "./UpdateCurrentItemModelMasterFromGitHubRequest"
import DescribeInventoriesRequest from "./DescribeInventoriesRequest"
import DescribeInventoriesByUserIdRequest from "./DescribeInventoriesByUserIdRequest"
import GetInventoryRequest from "./GetInventoryRequest"
import GetInventoryByUserIdRequest from "./GetInventoryByUserIdRequest"
import AddCapacityByUserIdRequest from "./AddCapacityByUserIdRequest"
import SetCapacityByUserIdRequest from "./SetCapacityByUserIdRequest"
import DeleteInventoryByUserIdRequest from "./DeleteInventoryByUserIdRequest"
import AddCapacityByStampSheetRequest from "./AddCapacityByStampSheetRequest"
import SetCapacityByStampSheetRequest from "./SetCapacityByStampSheetRequest"
import DescribeItemSetsRequest from "./DescribeItemSetsRequest"
import DescribeItemSetsByUserIdRequest from "./DescribeItemSetsByUserIdRequest"
import GetItemSetRequest from "./GetItemSetRequest"
import GetItemSetByUserIdRequest from "./GetItemSetByUserIdRequest"
import GetItemWithSignatureRequest from "./GetItemWithSignatureRequest"
import GetItemWithSignatureByUserIdRequest from "./GetItemWithSignatureByUserIdRequest"
import AcquireItemSetByUserIdRequest from "./AcquireItemSetByUserIdRequest"
import ConsumeItemSetRequest from "./ConsumeItemSetRequest"
import ConsumeItemSetByUserIdRequest from "./ConsumeItemSetByUserIdRequest"
import DeleteItemSetByUserIdRequest from "./DeleteItemSetByUserIdRequest"
import AcquireItemSetByStampSheetRequest from "./AcquireItemSetByStampSheetRequest"
import ConsumeItemSetByStampTaskRequest from "./ConsumeItemSetByStampTaskRequest"
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
import DeleteSimpleItemsByUserIdRequest from "./DeleteSimpleItemsByUserIdRequest"
import AcquireSimpleItemsByStampSheetRequest from "./AcquireSimpleItemsByStampSheetRequest"
import ConsumeSimpleItemsByStampTaskRequest from "./ConsumeSimpleItemsByStampTaskRequest"

export {
    DescribeNamespacesRequest,
    CreateNamespaceRequest,
    GetNamespaceStatusRequest,
    GetNamespaceRequest,
    UpdateNamespaceRequest,
    DeleteNamespaceRequest,
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
    ExportMasterRequest,
    GetCurrentItemModelMasterRequest,
    UpdateCurrentItemModelMasterRequest,
    UpdateCurrentItemModelMasterFromGitHubRequest,
    DescribeInventoriesRequest,
    DescribeInventoriesByUserIdRequest,
    GetInventoryRequest,
    GetInventoryByUserIdRequest,
    AddCapacityByUserIdRequest,
    SetCapacityByUserIdRequest,
    DeleteInventoryByUserIdRequest,
    AddCapacityByStampSheetRequest,
    SetCapacityByStampSheetRequest,
    DescribeItemSetsRequest,
    DescribeItemSetsByUserIdRequest,
    GetItemSetRequest,
    GetItemSetByUserIdRequest,
    GetItemWithSignatureRequest,
    GetItemWithSignatureByUserIdRequest,
    AcquireItemSetByUserIdRequest,
    ConsumeItemSetRequest,
    ConsumeItemSetByUserIdRequest,
    DeleteItemSetByUserIdRequest,
    AcquireItemSetByStampSheetRequest,
    ConsumeItemSetByStampTaskRequest,
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
    DeleteSimpleItemsByUserIdRequest,
    AcquireSimpleItemsByStampSheetRequest,
    ConsumeSimpleItemsByStampTaskRequest,
};