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
import DumpUserDataByUserIdResult from "./DumpUserDataByUserIdResult"
import CheckDumpUserDataByUserIdResult from "./CheckDumpUserDataByUserIdResult"
import CleanUserDataByUserIdResult from "./CleanUserDataByUserIdResult"
import CheckCleanUserDataByUserIdResult from "./CheckCleanUserDataByUserIdResult"
import PrepareImportUserDataByUserIdResult from "./PrepareImportUserDataByUserIdResult"
import ImportUserDataByUserIdResult from "./ImportUserDataByUserIdResult"
import CheckImportUserDataByUserIdResult from "./CheckImportUserDataByUserIdResult"
import DescribeSalesItemMastersResult from "./DescribeSalesItemMastersResult"
import CreateSalesItemMasterResult from "./CreateSalesItemMasterResult"
import GetSalesItemMasterResult from "./GetSalesItemMasterResult"
import UpdateSalesItemMasterResult from "./UpdateSalesItemMasterResult"
import DeleteSalesItemMasterResult from "./DeleteSalesItemMasterResult"
import DescribeSalesItemGroupMastersResult from "./DescribeSalesItemGroupMastersResult"
import CreateSalesItemGroupMasterResult from "./CreateSalesItemGroupMasterResult"
import GetSalesItemGroupMasterResult from "./GetSalesItemGroupMasterResult"
import UpdateSalesItemGroupMasterResult from "./UpdateSalesItemGroupMasterResult"
import DeleteSalesItemGroupMasterResult from "./DeleteSalesItemGroupMasterResult"
import DescribeShowcaseMastersResult from "./DescribeShowcaseMastersResult"
import CreateShowcaseMasterResult from "./CreateShowcaseMasterResult"
import GetShowcaseMasterResult from "./GetShowcaseMasterResult"
import UpdateShowcaseMasterResult from "./UpdateShowcaseMasterResult"
import DeleteShowcaseMasterResult from "./DeleteShowcaseMasterResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentShowcaseMasterResult from "./GetCurrentShowcaseMasterResult"
import PreUpdateCurrentShowcaseMasterResult from "./PreUpdateCurrentShowcaseMasterResult"
import UpdateCurrentShowcaseMasterResult from "./UpdateCurrentShowcaseMasterResult"
import UpdateCurrentShowcaseMasterFromGitHubResult from "./UpdateCurrentShowcaseMasterFromGitHubResult"
import DescribeShowcasesResult from "./DescribeShowcasesResult"
import DescribeShowcasesByUserIdResult from "./DescribeShowcasesByUserIdResult"
import GetShowcaseResult from "./GetShowcaseResult"
import GetShowcaseByUserIdResult from "./GetShowcaseByUserIdResult"
import BuyResult from "./BuyResult"
import BuyByUserIdResult from "./BuyByUserIdResult"
import DescribeRandomShowcaseMastersResult from "./DescribeRandomShowcaseMastersResult"
import CreateRandomShowcaseMasterResult from "./CreateRandomShowcaseMasterResult"
import GetRandomShowcaseMasterResult from "./GetRandomShowcaseMasterResult"
import UpdateRandomShowcaseMasterResult from "./UpdateRandomShowcaseMasterResult"
import DeleteRandomShowcaseMasterResult from "./DeleteRandomShowcaseMasterResult"
import IncrementPurchaseCountResult from "./IncrementPurchaseCountResult"
import IncrementPurchaseCountByUserIdResult from "./IncrementPurchaseCountByUserIdResult"
import DecrementPurchaseCountByUserIdResult from "./DecrementPurchaseCountByUserIdResult"
import IncrementPurchaseCountByStampTaskResult from "./IncrementPurchaseCountByStampTaskResult"
import DecrementPurchaseCountByStampSheetResult from "./DecrementPurchaseCountByStampSheetResult"
import ForceReDrawByUserIdResult from "./ForceReDrawByUserIdResult"
import ForceReDrawByUserIdByStampSheetResult from "./ForceReDrawByUserIdByStampSheetResult"
import DescribeRandomDisplayItemsResult from "./DescribeRandomDisplayItemsResult"
import DescribeRandomDisplayItemsByUserIdResult from "./DescribeRandomDisplayItemsByUserIdResult"
import GetRandomDisplayItemResult from "./GetRandomDisplayItemResult"
import GetRandomDisplayItemByUserIdResult from "./GetRandomDisplayItemByUserIdResult"
import RandomShowcaseBuyResult from "./RandomShowcaseBuyResult"
import RandomShowcaseBuyByUserIdResult from "./RandomShowcaseBuyByUserIdResult"

export {
    DescribeNamespacesResult,
    CreateNamespaceResult,
    GetNamespaceStatusResult,
    GetNamespaceResult,
    UpdateNamespaceResult,
    DeleteNamespaceResult,
    DumpUserDataByUserIdResult,
    CheckDumpUserDataByUserIdResult,
    CleanUserDataByUserIdResult,
    CheckCleanUserDataByUserIdResult,
    PrepareImportUserDataByUserIdResult,
    ImportUserDataByUserIdResult,
    CheckImportUserDataByUserIdResult,
    DescribeSalesItemMastersResult,
    CreateSalesItemMasterResult,
    GetSalesItemMasterResult,
    UpdateSalesItemMasterResult,
    DeleteSalesItemMasterResult,
    DescribeSalesItemGroupMastersResult,
    CreateSalesItemGroupMasterResult,
    GetSalesItemGroupMasterResult,
    UpdateSalesItemGroupMasterResult,
    DeleteSalesItemGroupMasterResult,
    DescribeShowcaseMastersResult,
    CreateShowcaseMasterResult,
    GetShowcaseMasterResult,
    UpdateShowcaseMasterResult,
    DeleteShowcaseMasterResult,
    ExportMasterResult,
    GetCurrentShowcaseMasterResult,
    PreUpdateCurrentShowcaseMasterResult,
    UpdateCurrentShowcaseMasterResult,
    UpdateCurrentShowcaseMasterFromGitHubResult,
    DescribeShowcasesResult,
    DescribeShowcasesByUserIdResult,
    GetShowcaseResult,
    GetShowcaseByUserIdResult,
    BuyResult,
    BuyByUserIdResult,
    DescribeRandomShowcaseMastersResult,
    CreateRandomShowcaseMasterResult,
    GetRandomShowcaseMasterResult,
    UpdateRandomShowcaseMasterResult,
    DeleteRandomShowcaseMasterResult,
    IncrementPurchaseCountResult,
    IncrementPurchaseCountByUserIdResult,
    DecrementPurchaseCountByUserIdResult,
    IncrementPurchaseCountByStampTaskResult,
    DecrementPurchaseCountByStampSheetResult,
    ForceReDrawByUserIdResult,
    ForceReDrawByUserIdByStampSheetResult,
    DescribeRandomDisplayItemsResult,
    DescribeRandomDisplayItemsByUserIdResult,
    GetRandomDisplayItemResult,
    GetRandomDisplayItemByUserIdResult,
    RandomShowcaseBuyResult,
    RandomShowcaseBuyByUserIdResult,
};