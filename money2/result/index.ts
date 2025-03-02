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
import DescribeWalletsResult from "./DescribeWalletsResult"
import DescribeWalletsByUserIdResult from "./DescribeWalletsByUserIdResult"
import GetWalletResult from "./GetWalletResult"
import GetWalletByUserIdResult from "./GetWalletByUserIdResult"
import DepositByUserIdResult from "./DepositByUserIdResult"
import WithdrawResult from "./WithdrawResult"
import WithdrawByUserIdResult from "./WithdrawByUserIdResult"
import DepositByStampSheetResult from "./DepositByStampSheetResult"
import WithdrawByStampTaskResult from "./WithdrawByStampTaskResult"
import DescribeEventsByUserIdResult from "./DescribeEventsByUserIdResult"
import GetEventByTransactionIdResult from "./GetEventByTransactionIdResult"
import VerifyReceiptResult from "./VerifyReceiptResult"
import VerifyReceiptByUserIdResult from "./VerifyReceiptByUserIdResult"
import VerifyReceiptByStampTaskResult from "./VerifyReceiptByStampTaskResult"
import DescribeSubscriptionStatusesResult from "./DescribeSubscriptionStatusesResult"
import DescribeSubscriptionStatusesByUserIdResult from "./DescribeSubscriptionStatusesByUserIdResult"
import GetSubscriptionStatusResult from "./GetSubscriptionStatusResult"
import GetSubscriptionStatusByUserIdResult from "./GetSubscriptionStatusByUserIdResult"
import DescribeStoreContentModelsResult from "./DescribeStoreContentModelsResult"
import GetStoreContentModelResult from "./GetStoreContentModelResult"
import DescribeStoreContentModelMastersResult from "./DescribeStoreContentModelMastersResult"
import CreateStoreContentModelMasterResult from "./CreateStoreContentModelMasterResult"
import GetStoreContentModelMasterResult from "./GetStoreContentModelMasterResult"
import UpdateStoreContentModelMasterResult from "./UpdateStoreContentModelMasterResult"
import DeleteStoreContentModelMasterResult from "./DeleteStoreContentModelMasterResult"
import DescribeStoreSubscriptionContentModelsResult from "./DescribeStoreSubscriptionContentModelsResult"
import GetStoreSubscriptionContentModelResult from "./GetStoreSubscriptionContentModelResult"
import DescribeStoreSubscriptionContentModelMastersResult from "./DescribeStoreSubscriptionContentModelMastersResult"
import CreateStoreSubscriptionContentModelMasterResult from "./CreateStoreSubscriptionContentModelMasterResult"
import GetStoreSubscriptionContentModelMasterResult from "./GetStoreSubscriptionContentModelMasterResult"
import UpdateStoreSubscriptionContentModelMasterResult from "./UpdateStoreSubscriptionContentModelMasterResult"
import DeleteStoreSubscriptionContentModelMasterResult from "./DeleteStoreSubscriptionContentModelMasterResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentModelMasterResult from "./GetCurrentModelMasterResult"
import UpdateCurrentModelMasterResult from "./UpdateCurrentModelMasterResult"
import UpdateCurrentModelMasterFromGitHubResult from "./UpdateCurrentModelMasterFromGitHubResult"
import DescribeDailyTransactionHistoriesByCurrencyResult from "./DescribeDailyTransactionHistoriesByCurrencyResult"
import DescribeDailyTransactionHistoriesResult from "./DescribeDailyTransactionHistoriesResult"
import GetDailyTransactionHistoryResult from "./GetDailyTransactionHistoryResult"
import DescribeUnusedBalancesResult from "./DescribeUnusedBalancesResult"
import GetUnusedBalanceResult from "./GetUnusedBalanceResult"

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
    DescribeWalletsResult,
    DescribeWalletsByUserIdResult,
    GetWalletResult,
    GetWalletByUserIdResult,
    DepositByUserIdResult,
    WithdrawResult,
    WithdrawByUserIdResult,
    DepositByStampSheetResult,
    WithdrawByStampTaskResult,
    DescribeEventsByUserIdResult,
    GetEventByTransactionIdResult,
    VerifyReceiptResult,
    VerifyReceiptByUserIdResult,
    VerifyReceiptByStampTaskResult,
    DescribeSubscriptionStatusesResult,
    DescribeSubscriptionStatusesByUserIdResult,
    GetSubscriptionStatusResult,
    GetSubscriptionStatusByUserIdResult,
    DescribeStoreContentModelsResult,
    GetStoreContentModelResult,
    DescribeStoreContentModelMastersResult,
    CreateStoreContentModelMasterResult,
    GetStoreContentModelMasterResult,
    UpdateStoreContentModelMasterResult,
    DeleteStoreContentModelMasterResult,
    DescribeStoreSubscriptionContentModelsResult,
    GetStoreSubscriptionContentModelResult,
    DescribeStoreSubscriptionContentModelMastersResult,
    CreateStoreSubscriptionContentModelMasterResult,
    GetStoreSubscriptionContentModelMasterResult,
    UpdateStoreSubscriptionContentModelMasterResult,
    DeleteStoreSubscriptionContentModelMasterResult,
    ExportMasterResult,
    GetCurrentModelMasterResult,
    UpdateCurrentModelMasterResult,
    UpdateCurrentModelMasterFromGitHubResult,
    DescribeDailyTransactionHistoriesByCurrencyResult,
    DescribeDailyTransactionHistoriesResult,
    GetDailyTransactionHistoryResult,
    DescribeUnusedBalancesResult,
    GetUnusedBalanceResult,
};