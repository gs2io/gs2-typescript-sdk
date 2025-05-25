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
import DescribeBalanceParameterModelsRequest from "./DescribeBalanceParameterModelsRequest"
import GetBalanceParameterModelRequest from "./GetBalanceParameterModelRequest"
import DescribeBalanceParameterModelMastersRequest from "./DescribeBalanceParameterModelMastersRequest"
import CreateBalanceParameterModelMasterRequest from "./CreateBalanceParameterModelMasterRequest"
import GetBalanceParameterModelMasterRequest from "./GetBalanceParameterModelMasterRequest"
import UpdateBalanceParameterModelMasterRequest from "./UpdateBalanceParameterModelMasterRequest"
import DeleteBalanceParameterModelMasterRequest from "./DeleteBalanceParameterModelMasterRequest"
import DescribeRarityParameterModelsRequest from "./DescribeRarityParameterModelsRequest"
import GetRarityParameterModelRequest from "./GetRarityParameterModelRequest"
import DescribeRarityParameterModelMastersRequest from "./DescribeRarityParameterModelMastersRequest"
import CreateRarityParameterModelMasterRequest from "./CreateRarityParameterModelMasterRequest"
import GetRarityParameterModelMasterRequest from "./GetRarityParameterModelMasterRequest"
import UpdateRarityParameterModelMasterRequest from "./UpdateRarityParameterModelMasterRequest"
import DeleteRarityParameterModelMasterRequest from "./DeleteRarityParameterModelMasterRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentParameterMasterRequest from "./GetCurrentParameterMasterRequest"
import PreUpdateCurrentParameterMasterRequest from "./PreUpdateCurrentParameterMasterRequest"
import UpdateCurrentParameterMasterRequest from "./UpdateCurrentParameterMasterRequest"
import UpdateCurrentParameterMasterFromGitHubRequest from "./UpdateCurrentParameterMasterFromGitHubRequest"
import DescribeBalanceParameterStatusesRequest from "./DescribeBalanceParameterStatusesRequest"
import DescribeBalanceParameterStatusesByUserIdRequest from "./DescribeBalanceParameterStatusesByUserIdRequest"
import GetBalanceParameterStatusRequest from "./GetBalanceParameterStatusRequest"
import GetBalanceParameterStatusByUserIdRequest from "./GetBalanceParameterStatusByUserIdRequest"
import DeleteBalanceParameterStatusByUserIdRequest from "./DeleteBalanceParameterStatusByUserIdRequest"
import ReDrawBalanceParameterStatusByUserIdRequest from "./ReDrawBalanceParameterStatusByUserIdRequest"
import ReDrawBalanceParameterStatusByStampSheetRequest from "./ReDrawBalanceParameterStatusByStampSheetRequest"
import SetBalanceParameterStatusByUserIdRequest from "./SetBalanceParameterStatusByUserIdRequest"
import SetBalanceParameterStatusByStampSheetRequest from "./SetBalanceParameterStatusByStampSheetRequest"
import DescribeRarityParameterStatusesRequest from "./DescribeRarityParameterStatusesRequest"
import DescribeRarityParameterStatusesByUserIdRequest from "./DescribeRarityParameterStatusesByUserIdRequest"
import GetRarityParameterStatusRequest from "./GetRarityParameterStatusRequest"
import GetRarityParameterStatusByUserIdRequest from "./GetRarityParameterStatusByUserIdRequest"
import DeleteRarityParameterStatusByUserIdRequest from "./DeleteRarityParameterStatusByUserIdRequest"
import ReDrawRarityParameterStatusByUserIdRequest from "./ReDrawRarityParameterStatusByUserIdRequest"
import ReDrawRarityParameterStatusByStampSheetRequest from "./ReDrawRarityParameterStatusByStampSheetRequest"
import AddRarityParameterStatusByUserIdRequest from "./AddRarityParameterStatusByUserIdRequest"
import AddRarityParameterStatusByStampSheetRequest from "./AddRarityParameterStatusByStampSheetRequest"
import VerifyRarityParameterStatusRequest from "./VerifyRarityParameterStatusRequest"
import VerifyRarityParameterStatusByUserIdRequest from "./VerifyRarityParameterStatusByUserIdRequest"
import VerifyRarityParameterStatusByStampTaskRequest from "./VerifyRarityParameterStatusByStampTaskRequest"
import SetRarityParameterStatusByUserIdRequest from "./SetRarityParameterStatusByUserIdRequest"
import SetRarityParameterStatusByStampSheetRequest from "./SetRarityParameterStatusByStampSheetRequest"

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
    DescribeBalanceParameterModelsRequest,
    GetBalanceParameterModelRequest,
    DescribeBalanceParameterModelMastersRequest,
    CreateBalanceParameterModelMasterRequest,
    GetBalanceParameterModelMasterRequest,
    UpdateBalanceParameterModelMasterRequest,
    DeleteBalanceParameterModelMasterRequest,
    DescribeRarityParameterModelsRequest,
    GetRarityParameterModelRequest,
    DescribeRarityParameterModelMastersRequest,
    CreateRarityParameterModelMasterRequest,
    GetRarityParameterModelMasterRequest,
    UpdateRarityParameterModelMasterRequest,
    DeleteRarityParameterModelMasterRequest,
    ExportMasterRequest,
    GetCurrentParameterMasterRequest,
    PreUpdateCurrentParameterMasterRequest,
    UpdateCurrentParameterMasterRequest,
    UpdateCurrentParameterMasterFromGitHubRequest,
    DescribeBalanceParameterStatusesRequest,
    DescribeBalanceParameterStatusesByUserIdRequest,
    GetBalanceParameterStatusRequest,
    GetBalanceParameterStatusByUserIdRequest,
    DeleteBalanceParameterStatusByUserIdRequest,
    ReDrawBalanceParameterStatusByUserIdRequest,
    ReDrawBalanceParameterStatusByStampSheetRequest,
    SetBalanceParameterStatusByUserIdRequest,
    SetBalanceParameterStatusByStampSheetRequest,
    DescribeRarityParameterStatusesRequest,
    DescribeRarityParameterStatusesByUserIdRequest,
    GetRarityParameterStatusRequest,
    GetRarityParameterStatusByUserIdRequest,
    DeleteRarityParameterStatusByUserIdRequest,
    ReDrawRarityParameterStatusByUserIdRequest,
    ReDrawRarityParameterStatusByStampSheetRequest,
    AddRarityParameterStatusByUserIdRequest,
    AddRarityParameterStatusByStampSheetRequest,
    VerifyRarityParameterStatusRequest,
    VerifyRarityParameterStatusByUserIdRequest,
    VerifyRarityParameterStatusByStampTaskRequest,
    SetRarityParameterStatusByUserIdRequest,
    SetRarityParameterStatusByStampSheetRequest,
};