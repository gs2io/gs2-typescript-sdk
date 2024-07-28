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
import DescribeCompletesResult from "./DescribeCompletesResult"
import DescribeCompletesByUserIdResult from "./DescribeCompletesByUserIdResult"
import CompleteResult from "./CompleteResult"
import CompleteByUserIdResult from "./CompleteByUserIdResult"
import ReceiveByUserIdResult from "./ReceiveByUserIdResult"
import RevertReceiveByUserIdResult from "./RevertReceiveByUserIdResult"
import GetCompleteResult from "./GetCompleteResult"
import GetCompleteByUserIdResult from "./GetCompleteByUserIdResult"
import DeleteCompleteByUserIdResult from "./DeleteCompleteByUserIdResult"
import VerifyCompleteResult from "./VerifyCompleteResult"
import VerifyCompleteByUserIdResult from "./VerifyCompleteByUserIdResult"
import ReceiveByStampTaskResult from "./ReceiveByStampTaskResult"
import RevertReceiveByStampSheetResult from "./RevertReceiveByStampSheetResult"
import VerifyCompleteByStampTaskResult from "./VerifyCompleteByStampTaskResult"
import DescribeCounterModelMastersResult from "./DescribeCounterModelMastersResult"
import CreateCounterModelMasterResult from "./CreateCounterModelMasterResult"
import GetCounterModelMasterResult from "./GetCounterModelMasterResult"
import UpdateCounterModelMasterResult from "./UpdateCounterModelMasterResult"
import DeleteCounterModelMasterResult from "./DeleteCounterModelMasterResult"
import DescribeMissionGroupModelMastersResult from "./DescribeMissionGroupModelMastersResult"
import CreateMissionGroupModelMasterResult from "./CreateMissionGroupModelMasterResult"
import GetMissionGroupModelMasterResult from "./GetMissionGroupModelMasterResult"
import UpdateMissionGroupModelMasterResult from "./UpdateMissionGroupModelMasterResult"
import DeleteMissionGroupModelMasterResult from "./DeleteMissionGroupModelMasterResult"
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
import DescribeCountersResult from "./DescribeCountersResult"
import DescribeCountersByUserIdResult from "./DescribeCountersByUserIdResult"
import IncreaseCounterByUserIdResult from "./IncreaseCounterByUserIdResult"
import SetCounterByUserIdResult from "./SetCounterByUserIdResult"
import DecreaseCounterResult from "./DecreaseCounterResult"
import DecreaseCounterByUserIdResult from "./DecreaseCounterByUserIdResult"
import GetCounterResult from "./GetCounterResult"
import GetCounterByUserIdResult from "./GetCounterByUserIdResult"
import VerifyCounterValueResult from "./VerifyCounterValueResult"
import VerifyCounterValueByUserIdResult from "./VerifyCounterValueByUserIdResult"
import DeleteCounterByUserIdResult from "./DeleteCounterByUserIdResult"
import IncreaseByStampSheetResult from "./IncreaseByStampSheetResult"
import SetByStampSheetResult from "./SetByStampSheetResult"
import DecreaseByStampTaskResult from "./DecreaseByStampTaskResult"
import VerifyCounterValueByStampTaskResult from "./VerifyCounterValueByStampTaskResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentMissionMasterResult from "./GetCurrentMissionMasterResult"
import UpdateCurrentMissionMasterResult from "./UpdateCurrentMissionMasterResult"
import UpdateCurrentMissionMasterFromGitHubResult from "./UpdateCurrentMissionMasterFromGitHubResult"
import DescribeCounterModelsResult from "./DescribeCounterModelsResult"
import GetCounterModelResult from "./GetCounterModelResult"
import DescribeMissionGroupModelsResult from "./DescribeMissionGroupModelsResult"
import GetMissionGroupModelResult from "./GetMissionGroupModelResult"
import DescribeMissionTaskModelsResult from "./DescribeMissionTaskModelsResult"
import GetMissionTaskModelResult from "./GetMissionTaskModelResult"
import DescribeMissionTaskModelMastersResult from "./DescribeMissionTaskModelMastersResult"
import CreateMissionTaskModelMasterResult from "./CreateMissionTaskModelMasterResult"
import GetMissionTaskModelMasterResult from "./GetMissionTaskModelMasterResult"
import UpdateMissionTaskModelMasterResult from "./UpdateMissionTaskModelMasterResult"
import DeleteMissionTaskModelMasterResult from "./DeleteMissionTaskModelMasterResult"

export {
    DescribeCompletesResult,
    DescribeCompletesByUserIdResult,
    CompleteResult,
    CompleteByUserIdResult,
    ReceiveByUserIdResult,
    RevertReceiveByUserIdResult,
    GetCompleteResult,
    GetCompleteByUserIdResult,
    DeleteCompleteByUserIdResult,
    VerifyCompleteResult,
    VerifyCompleteByUserIdResult,
    ReceiveByStampTaskResult,
    RevertReceiveByStampSheetResult,
    VerifyCompleteByStampTaskResult,
    DescribeCounterModelMastersResult,
    CreateCounterModelMasterResult,
    GetCounterModelMasterResult,
    UpdateCounterModelMasterResult,
    DeleteCounterModelMasterResult,
    DescribeMissionGroupModelMastersResult,
    CreateMissionGroupModelMasterResult,
    GetMissionGroupModelMasterResult,
    UpdateMissionGroupModelMasterResult,
    DeleteMissionGroupModelMasterResult,
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
    DescribeCountersResult,
    DescribeCountersByUserIdResult,
    IncreaseCounterByUserIdResult,
    SetCounterByUserIdResult,
    DecreaseCounterResult,
    DecreaseCounterByUserIdResult,
    GetCounterResult,
    GetCounterByUserIdResult,
    VerifyCounterValueResult,
    VerifyCounterValueByUserIdResult,
    DeleteCounterByUserIdResult,
    IncreaseByStampSheetResult,
    SetByStampSheetResult,
    DecreaseByStampTaskResult,
    VerifyCounterValueByStampTaskResult,
    ExportMasterResult,
    GetCurrentMissionMasterResult,
    UpdateCurrentMissionMasterResult,
    UpdateCurrentMissionMasterFromGitHubResult,
    DescribeCounterModelsResult,
    GetCounterModelResult,
    DescribeMissionGroupModelsResult,
    GetMissionGroupModelResult,
    DescribeMissionTaskModelsResult,
    GetMissionTaskModelResult,
    DescribeMissionTaskModelMastersResult,
    CreateMissionTaskModelMasterResult,
    GetMissionTaskModelMasterResult,
    UpdateMissionTaskModelMasterResult,
    DeleteMissionTaskModelMasterResult,
};