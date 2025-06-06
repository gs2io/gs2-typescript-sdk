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
import DescribeNamespacesResult from "./DescribeNamespacesResult"
import CreateNamespaceResult from "./CreateNamespaceResult"
import GetNamespaceStatusResult from "./GetNamespaceStatusResult"
import GetNamespaceResult from "./GetNamespaceResult"
import UpdateNamespaceResult from "./UpdateNamespaceResult"
import DeleteNamespaceResult from "./DeleteNamespaceResult"
import GetServiceVersionResult from "./GetServiceVersionResult"
import DumpUserDataByUserIdResult from "./DumpUserDataByUserIdResult"
import CheckDumpUserDataByUserIdResult from "./CheckDumpUserDataByUserIdResult"
import CleanUserDataByUserIdResult from "./CleanUserDataByUserIdResult"
import CheckCleanUserDataByUserIdResult from "./CheckCleanUserDataByUserIdResult"
import PrepareImportUserDataByUserIdResult from "./PrepareImportUserDataByUserIdResult"
import ImportUserDataByUserIdResult from "./ImportUserDataByUserIdResult"
import CheckImportUserDataByUserIdResult from "./CheckImportUserDataByUserIdResult"
import DescribeInventoryModelMastersResult from "./DescribeInventoryModelMastersResult"
import CreateInventoryModelMasterResult from "./CreateInventoryModelMasterResult"
import GetInventoryModelMasterResult from "./GetInventoryModelMasterResult"
import UpdateInventoryModelMasterResult from "./UpdateInventoryModelMasterResult"
import DeleteInventoryModelMasterResult from "./DeleteInventoryModelMasterResult"
import DescribeInventoryModelsResult from "./DescribeInventoryModelsResult"
import GetInventoryModelResult from "./GetInventoryModelResult"
import DescribeItemModelMastersResult from "./DescribeItemModelMastersResult"
import CreateItemModelMasterResult from "./CreateItemModelMasterResult"
import GetItemModelMasterResult from "./GetItemModelMasterResult"
import UpdateItemModelMasterResult from "./UpdateItemModelMasterResult"
import DeleteItemModelMasterResult from "./DeleteItemModelMasterResult"
import DescribeItemModelsResult from "./DescribeItemModelsResult"
import GetItemModelResult from "./GetItemModelResult"
import DescribeSimpleInventoryModelMastersResult from "./DescribeSimpleInventoryModelMastersResult"
import CreateSimpleInventoryModelMasterResult from "./CreateSimpleInventoryModelMasterResult"
import GetSimpleInventoryModelMasterResult from "./GetSimpleInventoryModelMasterResult"
import UpdateSimpleInventoryModelMasterResult from "./UpdateSimpleInventoryModelMasterResult"
import DeleteSimpleInventoryModelMasterResult from "./DeleteSimpleInventoryModelMasterResult"
import DescribeSimpleInventoryModelsResult from "./DescribeSimpleInventoryModelsResult"
import GetSimpleInventoryModelResult from "./GetSimpleInventoryModelResult"
import DescribeSimpleItemModelMastersResult from "./DescribeSimpleItemModelMastersResult"
import CreateSimpleItemModelMasterResult from "./CreateSimpleItemModelMasterResult"
import GetSimpleItemModelMasterResult from "./GetSimpleItemModelMasterResult"
import UpdateSimpleItemModelMasterResult from "./UpdateSimpleItemModelMasterResult"
import DeleteSimpleItemModelMasterResult from "./DeleteSimpleItemModelMasterResult"
import DescribeSimpleItemModelsResult from "./DescribeSimpleItemModelsResult"
import GetSimpleItemModelResult from "./GetSimpleItemModelResult"
import DescribeBigInventoryModelMastersResult from "./DescribeBigInventoryModelMastersResult"
import CreateBigInventoryModelMasterResult from "./CreateBigInventoryModelMasterResult"
import GetBigInventoryModelMasterResult from "./GetBigInventoryModelMasterResult"
import UpdateBigInventoryModelMasterResult from "./UpdateBigInventoryModelMasterResult"
import DeleteBigInventoryModelMasterResult from "./DeleteBigInventoryModelMasterResult"
import DescribeBigInventoryModelsResult from "./DescribeBigInventoryModelsResult"
import GetBigInventoryModelResult from "./GetBigInventoryModelResult"
import DescribeBigItemModelMastersResult from "./DescribeBigItemModelMastersResult"
import CreateBigItemModelMasterResult from "./CreateBigItemModelMasterResult"
import GetBigItemModelMasterResult from "./GetBigItemModelMasterResult"
import UpdateBigItemModelMasterResult from "./UpdateBigItemModelMasterResult"
import DeleteBigItemModelMasterResult from "./DeleteBigItemModelMasterResult"
import DescribeBigItemModelsResult from "./DescribeBigItemModelsResult"
import GetBigItemModelResult from "./GetBigItemModelResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentItemModelMasterResult from "./GetCurrentItemModelMasterResult"
import PreUpdateCurrentItemModelMasterResult from "./PreUpdateCurrentItemModelMasterResult"
import UpdateCurrentItemModelMasterResult from "./UpdateCurrentItemModelMasterResult"
import UpdateCurrentItemModelMasterFromGitHubResult from "./UpdateCurrentItemModelMasterFromGitHubResult"
import DescribeInventoriesResult from "./DescribeInventoriesResult"
import DescribeInventoriesByUserIdResult from "./DescribeInventoriesByUserIdResult"
import GetInventoryResult from "./GetInventoryResult"
import GetInventoryByUserIdResult from "./GetInventoryByUserIdResult"
import AddCapacityByUserIdResult from "./AddCapacityByUserIdResult"
import SetCapacityByUserIdResult from "./SetCapacityByUserIdResult"
import DeleteInventoryByUserIdResult from "./DeleteInventoryByUserIdResult"
import VerifyInventoryCurrentMaxCapacityResult from "./VerifyInventoryCurrentMaxCapacityResult"
import VerifyInventoryCurrentMaxCapacityByUserIdResult from "./VerifyInventoryCurrentMaxCapacityByUserIdResult"
import VerifyInventoryCurrentMaxCapacityByStampTaskResult from "./VerifyInventoryCurrentMaxCapacityByStampTaskResult"
import AddCapacityByStampSheetResult from "./AddCapacityByStampSheetResult"
import SetCapacityByStampSheetResult from "./SetCapacityByStampSheetResult"
import DescribeItemSetsResult from "./DescribeItemSetsResult"
import DescribeItemSetsByUserIdResult from "./DescribeItemSetsByUserIdResult"
import GetItemSetResult from "./GetItemSetResult"
import GetItemSetByUserIdResult from "./GetItemSetByUserIdResult"
import GetItemWithSignatureResult from "./GetItemWithSignatureResult"
import GetItemWithSignatureByUserIdResult from "./GetItemWithSignatureByUserIdResult"
import AcquireItemSetByUserIdResult from "./AcquireItemSetByUserIdResult"
import AcquireItemSetWithGradeByUserIdResult from "./AcquireItemSetWithGradeByUserIdResult"
import ConsumeItemSetResult from "./ConsumeItemSetResult"
import ConsumeItemSetByUserIdResult from "./ConsumeItemSetByUserIdResult"
import DeleteItemSetByUserIdResult from "./DeleteItemSetByUserIdResult"
import VerifyItemSetResult from "./VerifyItemSetResult"
import VerifyItemSetByUserIdResult from "./VerifyItemSetByUserIdResult"
import AcquireItemSetByStampSheetResult from "./AcquireItemSetByStampSheetResult"
import AcquireItemSetWithGradeByStampSheetResult from "./AcquireItemSetWithGradeByStampSheetResult"
import ConsumeItemSetByStampTaskResult from "./ConsumeItemSetByStampTaskResult"
import VerifyItemSetByStampTaskResult from "./VerifyItemSetByStampTaskResult"
import DescribeReferenceOfResult from "./DescribeReferenceOfResult"
import DescribeReferenceOfByUserIdResult from "./DescribeReferenceOfByUserIdResult"
import GetReferenceOfResult from "./GetReferenceOfResult"
import GetReferenceOfByUserIdResult from "./GetReferenceOfByUserIdResult"
import VerifyReferenceOfResult from "./VerifyReferenceOfResult"
import VerifyReferenceOfByUserIdResult from "./VerifyReferenceOfByUserIdResult"
import AddReferenceOfResult from "./AddReferenceOfResult"
import AddReferenceOfByUserIdResult from "./AddReferenceOfByUserIdResult"
import DeleteReferenceOfResult from "./DeleteReferenceOfResult"
import DeleteReferenceOfByUserIdResult from "./DeleteReferenceOfByUserIdResult"
import AddReferenceOfItemSetByStampSheetResult from "./AddReferenceOfItemSetByStampSheetResult"
import DeleteReferenceOfItemSetByStampSheetResult from "./DeleteReferenceOfItemSetByStampSheetResult"
import VerifyReferenceOfByStampTaskResult from "./VerifyReferenceOfByStampTaskResult"
import DescribeSimpleItemsResult from "./DescribeSimpleItemsResult"
import DescribeSimpleItemsByUserIdResult from "./DescribeSimpleItemsByUserIdResult"
import GetSimpleItemResult from "./GetSimpleItemResult"
import GetSimpleItemByUserIdResult from "./GetSimpleItemByUserIdResult"
import GetSimpleItemWithSignatureResult from "./GetSimpleItemWithSignatureResult"
import GetSimpleItemWithSignatureByUserIdResult from "./GetSimpleItemWithSignatureByUserIdResult"
import AcquireSimpleItemsByUserIdResult from "./AcquireSimpleItemsByUserIdResult"
import ConsumeSimpleItemsResult from "./ConsumeSimpleItemsResult"
import ConsumeSimpleItemsByUserIdResult from "./ConsumeSimpleItemsByUserIdResult"
import SetSimpleItemsByUserIdResult from "./SetSimpleItemsByUserIdResult"
import DeleteSimpleItemsByUserIdResult from "./DeleteSimpleItemsByUserIdResult"
import VerifySimpleItemResult from "./VerifySimpleItemResult"
import VerifySimpleItemByUserIdResult from "./VerifySimpleItemByUserIdResult"
import AcquireSimpleItemsByStampSheetResult from "./AcquireSimpleItemsByStampSheetResult"
import ConsumeSimpleItemsByStampTaskResult from "./ConsumeSimpleItemsByStampTaskResult"
import SetSimpleItemsByStampSheetResult from "./SetSimpleItemsByStampSheetResult"
import VerifySimpleItemByStampTaskResult from "./VerifySimpleItemByStampTaskResult"
import DescribeBigItemsResult from "./DescribeBigItemsResult"
import DescribeBigItemsByUserIdResult from "./DescribeBigItemsByUserIdResult"
import GetBigItemResult from "./GetBigItemResult"
import GetBigItemByUserIdResult from "./GetBigItemByUserIdResult"
import AcquireBigItemByUserIdResult from "./AcquireBigItemByUserIdResult"
import ConsumeBigItemResult from "./ConsumeBigItemResult"
import ConsumeBigItemByUserIdResult from "./ConsumeBigItemByUserIdResult"
import SetBigItemByUserIdResult from "./SetBigItemByUserIdResult"
import DeleteBigItemByUserIdResult from "./DeleteBigItemByUserIdResult"
import VerifyBigItemResult from "./VerifyBigItemResult"
import VerifyBigItemByUserIdResult from "./VerifyBigItemByUserIdResult"
import AcquireBigItemByStampSheetResult from "./AcquireBigItemByStampSheetResult"
import ConsumeBigItemByStampTaskResult from "./ConsumeBigItemByStampTaskResult"
import SetBigItemByStampSheetResult from "./SetBigItemByStampSheetResult"
import VerifyBigItemByStampTaskResult from "./VerifyBigItemByStampTaskResult"

export {
    DescribeNamespacesResult,
    CreateNamespaceResult,
    GetNamespaceStatusResult,
    GetNamespaceResult,
    UpdateNamespaceResult,
    DeleteNamespaceResult,
    GetServiceVersionResult,
    DumpUserDataByUserIdResult,
    CheckDumpUserDataByUserIdResult,
    CleanUserDataByUserIdResult,
    CheckCleanUserDataByUserIdResult,
    PrepareImportUserDataByUserIdResult,
    ImportUserDataByUserIdResult,
    CheckImportUserDataByUserIdResult,
    DescribeInventoryModelMastersResult,
    CreateInventoryModelMasterResult,
    GetInventoryModelMasterResult,
    UpdateInventoryModelMasterResult,
    DeleteInventoryModelMasterResult,
    DescribeInventoryModelsResult,
    GetInventoryModelResult,
    DescribeItemModelMastersResult,
    CreateItemModelMasterResult,
    GetItemModelMasterResult,
    UpdateItemModelMasterResult,
    DeleteItemModelMasterResult,
    DescribeItemModelsResult,
    GetItemModelResult,
    DescribeSimpleInventoryModelMastersResult,
    CreateSimpleInventoryModelMasterResult,
    GetSimpleInventoryModelMasterResult,
    UpdateSimpleInventoryModelMasterResult,
    DeleteSimpleInventoryModelMasterResult,
    DescribeSimpleInventoryModelsResult,
    GetSimpleInventoryModelResult,
    DescribeSimpleItemModelMastersResult,
    CreateSimpleItemModelMasterResult,
    GetSimpleItemModelMasterResult,
    UpdateSimpleItemModelMasterResult,
    DeleteSimpleItemModelMasterResult,
    DescribeSimpleItemModelsResult,
    GetSimpleItemModelResult,
    DescribeBigInventoryModelMastersResult,
    CreateBigInventoryModelMasterResult,
    GetBigInventoryModelMasterResult,
    UpdateBigInventoryModelMasterResult,
    DeleteBigInventoryModelMasterResult,
    DescribeBigInventoryModelsResult,
    GetBigInventoryModelResult,
    DescribeBigItemModelMastersResult,
    CreateBigItemModelMasterResult,
    GetBigItemModelMasterResult,
    UpdateBigItemModelMasterResult,
    DeleteBigItemModelMasterResult,
    DescribeBigItemModelsResult,
    GetBigItemModelResult,
    ExportMasterResult,
    GetCurrentItemModelMasterResult,
    PreUpdateCurrentItemModelMasterResult,
    UpdateCurrentItemModelMasterResult,
    UpdateCurrentItemModelMasterFromGitHubResult,
    DescribeInventoriesResult,
    DescribeInventoriesByUserIdResult,
    GetInventoryResult,
    GetInventoryByUserIdResult,
    AddCapacityByUserIdResult,
    SetCapacityByUserIdResult,
    DeleteInventoryByUserIdResult,
    VerifyInventoryCurrentMaxCapacityResult,
    VerifyInventoryCurrentMaxCapacityByUserIdResult,
    VerifyInventoryCurrentMaxCapacityByStampTaskResult,
    AddCapacityByStampSheetResult,
    SetCapacityByStampSheetResult,
    DescribeItemSetsResult,
    DescribeItemSetsByUserIdResult,
    GetItemSetResult,
    GetItemSetByUserIdResult,
    GetItemWithSignatureResult,
    GetItemWithSignatureByUserIdResult,
    AcquireItemSetByUserIdResult,
    AcquireItemSetWithGradeByUserIdResult,
    ConsumeItemSetResult,
    ConsumeItemSetByUserIdResult,
    DeleteItemSetByUserIdResult,
    VerifyItemSetResult,
    VerifyItemSetByUserIdResult,
    AcquireItemSetByStampSheetResult,
    AcquireItemSetWithGradeByStampSheetResult,
    ConsumeItemSetByStampTaskResult,
    VerifyItemSetByStampTaskResult,
    DescribeReferenceOfResult,
    DescribeReferenceOfByUserIdResult,
    GetReferenceOfResult,
    GetReferenceOfByUserIdResult,
    VerifyReferenceOfResult,
    VerifyReferenceOfByUserIdResult,
    AddReferenceOfResult,
    AddReferenceOfByUserIdResult,
    DeleteReferenceOfResult,
    DeleteReferenceOfByUserIdResult,
    AddReferenceOfItemSetByStampSheetResult,
    DeleteReferenceOfItemSetByStampSheetResult,
    VerifyReferenceOfByStampTaskResult,
    DescribeSimpleItemsResult,
    DescribeSimpleItemsByUserIdResult,
    GetSimpleItemResult,
    GetSimpleItemByUserIdResult,
    GetSimpleItemWithSignatureResult,
    GetSimpleItemWithSignatureByUserIdResult,
    AcquireSimpleItemsByUserIdResult,
    ConsumeSimpleItemsResult,
    ConsumeSimpleItemsByUserIdResult,
    SetSimpleItemsByUserIdResult,
    DeleteSimpleItemsByUserIdResult,
    VerifySimpleItemResult,
    VerifySimpleItemByUserIdResult,
    AcquireSimpleItemsByStampSheetResult,
    ConsumeSimpleItemsByStampTaskResult,
    SetSimpleItemsByStampSheetResult,
    VerifySimpleItemByStampTaskResult,
    DescribeBigItemsResult,
    DescribeBigItemsByUserIdResult,
    GetBigItemResult,
    GetBigItemByUserIdResult,
    AcquireBigItemByUserIdResult,
    ConsumeBigItemResult,
    ConsumeBigItemByUserIdResult,
    SetBigItemByUserIdResult,
    DeleteBigItemByUserIdResult,
    VerifyBigItemResult,
    VerifyBigItemByUserIdResult,
    AcquireBigItemByStampSheetResult,
    ConsumeBigItemByStampTaskResult,
    SetBigItemByStampSheetResult,
    VerifyBigItemByStampTaskResult,
};