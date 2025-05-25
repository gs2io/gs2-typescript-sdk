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
import DescribeBalanceParameterModelsResult from "./DescribeBalanceParameterModelsResult"
import GetBalanceParameterModelResult from "./GetBalanceParameterModelResult"
import DescribeBalanceParameterModelMastersResult from "./DescribeBalanceParameterModelMastersResult"
import CreateBalanceParameterModelMasterResult from "./CreateBalanceParameterModelMasterResult"
import GetBalanceParameterModelMasterResult from "./GetBalanceParameterModelMasterResult"
import UpdateBalanceParameterModelMasterResult from "./UpdateBalanceParameterModelMasterResult"
import DeleteBalanceParameterModelMasterResult from "./DeleteBalanceParameterModelMasterResult"
import DescribeRarityParameterModelsResult from "./DescribeRarityParameterModelsResult"
import GetRarityParameterModelResult from "./GetRarityParameterModelResult"
import DescribeRarityParameterModelMastersResult from "./DescribeRarityParameterModelMastersResult"
import CreateRarityParameterModelMasterResult from "./CreateRarityParameterModelMasterResult"
import GetRarityParameterModelMasterResult from "./GetRarityParameterModelMasterResult"
import UpdateRarityParameterModelMasterResult from "./UpdateRarityParameterModelMasterResult"
import DeleteRarityParameterModelMasterResult from "./DeleteRarityParameterModelMasterResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentParameterMasterResult from "./GetCurrentParameterMasterResult"
import PreUpdateCurrentParameterMasterResult from "./PreUpdateCurrentParameterMasterResult"
import UpdateCurrentParameterMasterResult from "./UpdateCurrentParameterMasterResult"
import UpdateCurrentParameterMasterFromGitHubResult from "./UpdateCurrentParameterMasterFromGitHubResult"
import DescribeBalanceParameterStatusesResult from "./DescribeBalanceParameterStatusesResult"
import DescribeBalanceParameterStatusesByUserIdResult from "./DescribeBalanceParameterStatusesByUserIdResult"
import GetBalanceParameterStatusResult from "./GetBalanceParameterStatusResult"
import GetBalanceParameterStatusByUserIdResult from "./GetBalanceParameterStatusByUserIdResult"
import DeleteBalanceParameterStatusByUserIdResult from "./DeleteBalanceParameterStatusByUserIdResult"
import ReDrawBalanceParameterStatusByUserIdResult from "./ReDrawBalanceParameterStatusByUserIdResult"
import ReDrawBalanceParameterStatusByStampSheetResult from "./ReDrawBalanceParameterStatusByStampSheetResult"
import SetBalanceParameterStatusByUserIdResult from "./SetBalanceParameterStatusByUserIdResult"
import SetBalanceParameterStatusByStampSheetResult from "./SetBalanceParameterStatusByStampSheetResult"
import DescribeRarityParameterStatusesResult from "./DescribeRarityParameterStatusesResult"
import DescribeRarityParameterStatusesByUserIdResult from "./DescribeRarityParameterStatusesByUserIdResult"
import GetRarityParameterStatusResult from "./GetRarityParameterStatusResult"
import GetRarityParameterStatusByUserIdResult from "./GetRarityParameterStatusByUserIdResult"
import DeleteRarityParameterStatusByUserIdResult from "./DeleteRarityParameterStatusByUserIdResult"
import ReDrawRarityParameterStatusByUserIdResult from "./ReDrawRarityParameterStatusByUserIdResult"
import ReDrawRarityParameterStatusByStampSheetResult from "./ReDrawRarityParameterStatusByStampSheetResult"
import AddRarityParameterStatusByUserIdResult from "./AddRarityParameterStatusByUserIdResult"
import AddRarityParameterStatusByStampSheetResult from "./AddRarityParameterStatusByStampSheetResult"
import VerifyRarityParameterStatusResult from "./VerifyRarityParameterStatusResult"
import VerifyRarityParameterStatusByUserIdResult from "./VerifyRarityParameterStatusByUserIdResult"
import VerifyRarityParameterStatusByStampTaskResult from "./VerifyRarityParameterStatusByStampTaskResult"
import SetRarityParameterStatusByUserIdResult from "./SetRarityParameterStatusByUserIdResult"
import SetRarityParameterStatusByStampSheetResult from "./SetRarityParameterStatusByStampSheetResult"

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
    DescribeBalanceParameterModelsResult,
    GetBalanceParameterModelResult,
    DescribeBalanceParameterModelMastersResult,
    CreateBalanceParameterModelMasterResult,
    GetBalanceParameterModelMasterResult,
    UpdateBalanceParameterModelMasterResult,
    DeleteBalanceParameterModelMasterResult,
    DescribeRarityParameterModelsResult,
    GetRarityParameterModelResult,
    DescribeRarityParameterModelMastersResult,
    CreateRarityParameterModelMasterResult,
    GetRarityParameterModelMasterResult,
    UpdateRarityParameterModelMasterResult,
    DeleteRarityParameterModelMasterResult,
    ExportMasterResult,
    GetCurrentParameterMasterResult,
    PreUpdateCurrentParameterMasterResult,
    UpdateCurrentParameterMasterResult,
    UpdateCurrentParameterMasterFromGitHubResult,
    DescribeBalanceParameterStatusesResult,
    DescribeBalanceParameterStatusesByUserIdResult,
    GetBalanceParameterStatusResult,
    GetBalanceParameterStatusByUserIdResult,
    DeleteBalanceParameterStatusByUserIdResult,
    ReDrawBalanceParameterStatusByUserIdResult,
    ReDrawBalanceParameterStatusByStampSheetResult,
    SetBalanceParameterStatusByUserIdResult,
    SetBalanceParameterStatusByStampSheetResult,
    DescribeRarityParameterStatusesResult,
    DescribeRarityParameterStatusesByUserIdResult,
    GetRarityParameterStatusResult,
    GetRarityParameterStatusByUserIdResult,
    DeleteRarityParameterStatusByUserIdResult,
    ReDrawRarityParameterStatusByUserIdResult,
    ReDrawRarityParameterStatusByStampSheetResult,
    AddRarityParameterStatusByUserIdResult,
    AddRarityParameterStatusByStampSheetResult,
    VerifyRarityParameterStatusResult,
    VerifyRarityParameterStatusByUserIdResult,
    VerifyRarityParameterStatusByStampTaskResult,
    SetRarityParameterStatusByUserIdResult,
    SetRarityParameterStatusByStampSheetResult,
};