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
import DescribeAccountsResult from "./DescribeAccountsResult"
import CreateAccountResult from "./CreateAccountResult"
import UpdateTimeOffsetResult from "./UpdateTimeOffsetResult"
import UpdateBannedResult from "./UpdateBannedResult"
import AddBanResult from "./AddBanResult"
import RemoveBanResult from "./RemoveBanResult"
import GetAccountResult from "./GetAccountResult"
import DeleteAccountResult from "./DeleteAccountResult"
import AuthenticationResult from "./AuthenticationResult"
import DescribeTakeOversResult from "./DescribeTakeOversResult"
import DescribeTakeOversByUserIdResult from "./DescribeTakeOversByUserIdResult"
import CreateTakeOverResult from "./CreateTakeOverResult"
import CreateTakeOverByUserIdResult from "./CreateTakeOverByUserIdResult"
import CreateTakeOverOpenIdConnectResult from "./CreateTakeOverOpenIdConnectResult"
import CreateTakeOverOpenIdConnectAndByUserIdResult from "./CreateTakeOverOpenIdConnectAndByUserIdResult"
import GetTakeOverResult from "./GetTakeOverResult"
import GetTakeOverByUserIdResult from "./GetTakeOverByUserIdResult"
import UpdateTakeOverResult from "./UpdateTakeOverResult"
import UpdateTakeOverByUserIdResult from "./UpdateTakeOverByUserIdResult"
import DeleteTakeOverResult from "./DeleteTakeOverResult"
import DeleteTakeOverByUserIdentifierResult from "./DeleteTakeOverByUserIdentifierResult"
import DeleteTakeOverByUserIdResult from "./DeleteTakeOverByUserIdResult"
import DoTakeOverResult from "./DoTakeOverResult"
import DoTakeOverOpenIdConnectResult from "./DoTakeOverOpenIdConnectResult"
import GetAuthorizationUrlResult from "./GetAuthorizationUrlResult"
import DescribePlatformIdsResult from "./DescribePlatformIdsResult"
import DescribePlatformIdsByUserIdResult from "./DescribePlatformIdsByUserIdResult"
import CreatePlatformIdResult from "./CreatePlatformIdResult"
import CreatePlatformIdByUserIdResult from "./CreatePlatformIdByUserIdResult"
import GetPlatformIdResult from "./GetPlatformIdResult"
import GetPlatformIdByUserIdResult from "./GetPlatformIdByUserIdResult"
import FindPlatformIdResult from "./FindPlatformIdResult"
import FindPlatformIdByUserIdResult from "./FindPlatformIdByUserIdResult"
import DeletePlatformIdResult from "./DeletePlatformIdResult"
import DeletePlatformIdByUserIdentifierResult from "./DeletePlatformIdByUserIdentifierResult"
import DeletePlatformIdByUserIdResult from "./DeletePlatformIdByUserIdResult"
import GetDataOwnerByUserIdResult from "./GetDataOwnerByUserIdResult"
import UpdateDataOwnerByUserIdResult from "./UpdateDataOwnerByUserIdResult"
import DeleteDataOwnerByUserIdResult from "./DeleteDataOwnerByUserIdResult"
import DescribeTakeOverTypeModelsResult from "./DescribeTakeOverTypeModelsResult"
import GetTakeOverTypeModelResult from "./GetTakeOverTypeModelResult"
import DescribeTakeOverTypeModelMastersResult from "./DescribeTakeOverTypeModelMastersResult"
import CreateTakeOverTypeModelMasterResult from "./CreateTakeOverTypeModelMasterResult"
import GetTakeOverTypeModelMasterResult from "./GetTakeOverTypeModelMasterResult"
import UpdateTakeOverTypeModelMasterResult from "./UpdateTakeOverTypeModelMasterResult"
import DeleteTakeOverTypeModelMasterResult from "./DeleteTakeOverTypeModelMasterResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentModelMasterResult from "./GetCurrentModelMasterResult"
import PreUpdateCurrentModelMasterResult from "./PreUpdateCurrentModelMasterResult"
import UpdateCurrentModelMasterResult from "./UpdateCurrentModelMasterResult"
import UpdateCurrentModelMasterFromGitHubResult from "./UpdateCurrentModelMasterFromGitHubResult"

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
    DescribeAccountsResult,
    CreateAccountResult,
    UpdateTimeOffsetResult,
    UpdateBannedResult,
    AddBanResult,
    RemoveBanResult,
    GetAccountResult,
    DeleteAccountResult,
    AuthenticationResult,
    DescribeTakeOversResult,
    DescribeTakeOversByUserIdResult,
    CreateTakeOverResult,
    CreateTakeOverByUserIdResult,
    CreateTakeOverOpenIdConnectResult,
    CreateTakeOverOpenIdConnectAndByUserIdResult,
    GetTakeOverResult,
    GetTakeOverByUserIdResult,
    UpdateTakeOverResult,
    UpdateTakeOverByUserIdResult,
    DeleteTakeOverResult,
    DeleteTakeOverByUserIdentifierResult,
    DeleteTakeOverByUserIdResult,
    DoTakeOverResult,
    DoTakeOverOpenIdConnectResult,
    GetAuthorizationUrlResult,
    DescribePlatformIdsResult,
    DescribePlatformIdsByUserIdResult,
    CreatePlatformIdResult,
    CreatePlatformIdByUserIdResult,
    GetPlatformIdResult,
    GetPlatformIdByUserIdResult,
    FindPlatformIdResult,
    FindPlatformIdByUserIdResult,
    DeletePlatformIdResult,
    DeletePlatformIdByUserIdentifierResult,
    DeletePlatformIdByUserIdResult,
    GetDataOwnerByUserIdResult,
    UpdateDataOwnerByUserIdResult,
    DeleteDataOwnerByUserIdResult,
    DescribeTakeOverTypeModelsResult,
    GetTakeOverTypeModelResult,
    DescribeTakeOverTypeModelMastersResult,
    CreateTakeOverTypeModelMasterResult,
    GetTakeOverTypeModelMasterResult,
    UpdateTakeOverTypeModelMasterResult,
    DeleteTakeOverTypeModelMasterResult,
    ExportMasterResult,
    GetCurrentModelMasterResult,
    PreUpdateCurrentModelMasterResult,
    UpdateCurrentModelMasterResult,
    UpdateCurrentModelMasterFromGitHubResult,
};