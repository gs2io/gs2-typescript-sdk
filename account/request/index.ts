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
import DumpUserDataByUserIdRequest from "./DumpUserDataByUserIdRequest"
import CheckDumpUserDataByUserIdRequest from "./CheckDumpUserDataByUserIdRequest"
import CleanUserDataByUserIdRequest from "./CleanUserDataByUserIdRequest"
import CheckCleanUserDataByUserIdRequest from "./CheckCleanUserDataByUserIdRequest"
import PrepareImportUserDataByUserIdRequest from "./PrepareImportUserDataByUserIdRequest"
import ImportUserDataByUserIdRequest from "./ImportUserDataByUserIdRequest"
import CheckImportUserDataByUserIdRequest from "./CheckImportUserDataByUserIdRequest"
import DescribeAccountsRequest from "./DescribeAccountsRequest"
import CreateAccountRequest from "./CreateAccountRequest"
import UpdateTimeOffsetRequest from "./UpdateTimeOffsetRequest"
import UpdateBannedRequest from "./UpdateBannedRequest"
import AddBanRequest from "./AddBanRequest"
import RemoveBanRequest from "./RemoveBanRequest"
import GetAccountRequest from "./GetAccountRequest"
import DeleteAccountRequest from "./DeleteAccountRequest"
import AuthenticationRequest from "./AuthenticationRequest"
import DescribeTakeOversRequest from "./DescribeTakeOversRequest"
import DescribeTakeOversByUserIdRequest from "./DescribeTakeOversByUserIdRequest"
import CreateTakeOverRequest from "./CreateTakeOverRequest"
import CreateTakeOverByUserIdRequest from "./CreateTakeOverByUserIdRequest"
import CreateTakeOverOpenIdConnectRequest from "./CreateTakeOverOpenIdConnectRequest"
import CreateTakeOverOpenIdConnectAndByUserIdRequest from "./CreateTakeOverOpenIdConnectAndByUserIdRequest"
import GetTakeOverRequest from "./GetTakeOverRequest"
import GetTakeOverByUserIdRequest from "./GetTakeOverByUserIdRequest"
import UpdateTakeOverRequest from "./UpdateTakeOverRequest"
import UpdateTakeOverByUserIdRequest from "./UpdateTakeOverByUserIdRequest"
import DeleteTakeOverRequest from "./DeleteTakeOverRequest"
import DeleteTakeOverByUserIdentifierRequest from "./DeleteTakeOverByUserIdentifierRequest"
import DeleteTakeOverByUserIdRequest from "./DeleteTakeOverByUserIdRequest"
import DoTakeOverRequest from "./DoTakeOverRequest"
import DoTakeOverOpenIdConnectRequest from "./DoTakeOverOpenIdConnectRequest"
import GetAuthorizationUrlRequest from "./GetAuthorizationUrlRequest"
import DescribePlatformIdsRequest from "./DescribePlatformIdsRequest"
import DescribePlatformIdsByUserIdRequest from "./DescribePlatformIdsByUserIdRequest"
import CreatePlatformIdRequest from "./CreatePlatformIdRequest"
import CreatePlatformIdByUserIdRequest from "./CreatePlatformIdByUserIdRequest"
import GetPlatformIdRequest from "./GetPlatformIdRequest"
import GetPlatformIdByUserIdRequest from "./GetPlatformIdByUserIdRequest"
import FindPlatformIdRequest from "./FindPlatformIdRequest"
import FindPlatformIdByUserIdRequest from "./FindPlatformIdByUserIdRequest"
import DeletePlatformIdRequest from "./DeletePlatformIdRequest"
import DeletePlatformIdByUserIdentifierRequest from "./DeletePlatformIdByUserIdentifierRequest"
import DeletePlatformIdByUserIdRequest from "./DeletePlatformIdByUserIdRequest"
import GetDataOwnerByUserIdRequest from "./GetDataOwnerByUserIdRequest"
import DeleteDataOwnerByUserIdRequest from "./DeleteDataOwnerByUserIdRequest"
import DescribeTakeOverTypeModelsRequest from "./DescribeTakeOverTypeModelsRequest"
import GetTakeOverTypeModelRequest from "./GetTakeOverTypeModelRequest"
import DescribeTakeOverTypeModelMastersRequest from "./DescribeTakeOverTypeModelMastersRequest"
import CreateTakeOverTypeModelMasterRequest from "./CreateTakeOverTypeModelMasterRequest"
import GetTakeOverTypeModelMasterRequest from "./GetTakeOverTypeModelMasterRequest"
import UpdateTakeOverTypeModelMasterRequest from "./UpdateTakeOverTypeModelMasterRequest"
import DeleteTakeOverTypeModelMasterRequest from "./DeleteTakeOverTypeModelMasterRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentModelMasterRequest from "./GetCurrentModelMasterRequest"
import UpdateCurrentModelMasterRequest from "./UpdateCurrentModelMasterRequest"
import UpdateCurrentModelMasterFromGitHubRequest from "./UpdateCurrentModelMasterFromGitHubRequest"

export {
    DescribeNamespacesRequest,
    CreateNamespaceRequest,
    GetNamespaceStatusRequest,
    GetNamespaceRequest,
    UpdateNamespaceRequest,
    DeleteNamespaceRequest,
    DumpUserDataByUserIdRequest,
    CheckDumpUserDataByUserIdRequest,
    CleanUserDataByUserIdRequest,
    CheckCleanUserDataByUserIdRequest,
    PrepareImportUserDataByUserIdRequest,
    ImportUserDataByUserIdRequest,
    CheckImportUserDataByUserIdRequest,
    DescribeAccountsRequest,
    CreateAccountRequest,
    UpdateTimeOffsetRequest,
    UpdateBannedRequest,
    AddBanRequest,
    RemoveBanRequest,
    GetAccountRequest,
    DeleteAccountRequest,
    AuthenticationRequest,
    DescribeTakeOversRequest,
    DescribeTakeOversByUserIdRequest,
    CreateTakeOverRequest,
    CreateTakeOverByUserIdRequest,
    CreateTakeOverOpenIdConnectRequest,
    CreateTakeOverOpenIdConnectAndByUserIdRequest,
    GetTakeOverRequest,
    GetTakeOverByUserIdRequest,
    UpdateTakeOverRequest,
    UpdateTakeOverByUserIdRequest,
    DeleteTakeOverRequest,
    DeleteTakeOverByUserIdentifierRequest,
    DeleteTakeOverByUserIdRequest,
    DoTakeOverRequest,
    DoTakeOverOpenIdConnectRequest,
    GetAuthorizationUrlRequest,
    DescribePlatformIdsRequest,
    DescribePlatformIdsByUserIdRequest,
    CreatePlatformIdRequest,
    CreatePlatformIdByUserIdRequest,
    GetPlatformIdRequest,
    GetPlatformIdByUserIdRequest,
    FindPlatformIdRequest,
    FindPlatformIdByUserIdRequest,
    DeletePlatformIdRequest,
    DeletePlatformIdByUserIdentifierRequest,
    DeletePlatformIdByUserIdRequest,
    GetDataOwnerByUserIdRequest,
    DeleteDataOwnerByUserIdRequest,
    DescribeTakeOverTypeModelsRequest,
    GetTakeOverTypeModelRequest,
    DescribeTakeOverTypeModelMastersRequest,
    CreateTakeOverTypeModelMasterRequest,
    GetTakeOverTypeModelMasterRequest,
    UpdateTakeOverTypeModelMasterRequest,
    DeleteTakeOverTypeModelMasterRequest,
    ExportMasterRequest,
    GetCurrentModelMasterRequest,
    UpdateCurrentModelMasterRequest,
    UpdateCurrentModelMasterFromGitHubRequest,
};