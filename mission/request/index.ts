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
import DescribeCompletesRequest from "./DescribeCompletesRequest"
import DescribeCompletesByUserIdRequest from "./DescribeCompletesByUserIdRequest"
import CompleteRequest from "./CompleteRequest"
import CompleteByUserIdRequest from "./CompleteByUserIdRequest"
import ReceiveByUserIdRequest from "./ReceiveByUserIdRequest"
import RevertReceiveByUserIdRequest from "./RevertReceiveByUserIdRequest"
import GetCompleteRequest from "./GetCompleteRequest"
import GetCompleteByUserIdRequest from "./GetCompleteByUserIdRequest"
import DeleteCompleteByUserIdRequest from "./DeleteCompleteByUserIdRequest"
import VerifyCompleteRequest from "./VerifyCompleteRequest"
import VerifyCompleteByUserIdRequest from "./VerifyCompleteByUserIdRequest"
import ReceiveByStampTaskRequest from "./ReceiveByStampTaskRequest"
import RevertReceiveByStampSheetRequest from "./RevertReceiveByStampSheetRequest"
import VerifyCompleteByStampTaskRequest from "./VerifyCompleteByStampTaskRequest"
import DescribeCounterModelMastersRequest from "./DescribeCounterModelMastersRequest"
import CreateCounterModelMasterRequest from "./CreateCounterModelMasterRequest"
import GetCounterModelMasterRequest from "./GetCounterModelMasterRequest"
import UpdateCounterModelMasterRequest from "./UpdateCounterModelMasterRequest"
import DeleteCounterModelMasterRequest from "./DeleteCounterModelMasterRequest"
import DescribeMissionGroupModelMastersRequest from "./DescribeMissionGroupModelMastersRequest"
import CreateMissionGroupModelMasterRequest from "./CreateMissionGroupModelMasterRequest"
import GetMissionGroupModelMasterRequest from "./GetMissionGroupModelMasterRequest"
import UpdateMissionGroupModelMasterRequest from "./UpdateMissionGroupModelMasterRequest"
import DeleteMissionGroupModelMasterRequest from "./DeleteMissionGroupModelMasterRequest"
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
import DescribeCountersRequest from "./DescribeCountersRequest"
import DescribeCountersByUserIdRequest from "./DescribeCountersByUserIdRequest"
import IncreaseCounterByUserIdRequest from "./IncreaseCounterByUserIdRequest"
import SetCounterByUserIdRequest from "./SetCounterByUserIdRequest"
import DecreaseCounterRequest from "./DecreaseCounterRequest"
import DecreaseCounterByUserIdRequest from "./DecreaseCounterByUserIdRequest"
import GetCounterRequest from "./GetCounterRequest"
import GetCounterByUserIdRequest from "./GetCounterByUserIdRequest"
import VerifyCounterValueRequest from "./VerifyCounterValueRequest"
import VerifyCounterValueByUserIdRequest from "./VerifyCounterValueByUserIdRequest"
import DeleteCounterByUserIdRequest from "./DeleteCounterByUserIdRequest"
import IncreaseByStampSheetRequest from "./IncreaseByStampSheetRequest"
import SetByStampSheetRequest from "./SetByStampSheetRequest"
import DecreaseByStampTaskRequest from "./DecreaseByStampTaskRequest"
import VerifyCounterValueByStampTaskRequest from "./VerifyCounterValueByStampTaskRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentMissionMasterRequest from "./GetCurrentMissionMasterRequest"
import UpdateCurrentMissionMasterRequest from "./UpdateCurrentMissionMasterRequest"
import UpdateCurrentMissionMasterFromGitHubRequest from "./UpdateCurrentMissionMasterFromGitHubRequest"
import DescribeCounterModelsRequest from "./DescribeCounterModelsRequest"
import GetCounterModelRequest from "./GetCounterModelRequest"
import DescribeMissionGroupModelsRequest from "./DescribeMissionGroupModelsRequest"
import GetMissionGroupModelRequest from "./GetMissionGroupModelRequest"
import DescribeMissionTaskModelsRequest from "./DescribeMissionTaskModelsRequest"
import GetMissionTaskModelRequest from "./GetMissionTaskModelRequest"
import DescribeMissionTaskModelMastersRequest from "./DescribeMissionTaskModelMastersRequest"
import CreateMissionTaskModelMasterRequest from "./CreateMissionTaskModelMasterRequest"
import GetMissionTaskModelMasterRequest from "./GetMissionTaskModelMasterRequest"
import UpdateMissionTaskModelMasterRequest from "./UpdateMissionTaskModelMasterRequest"
import DeleteMissionTaskModelMasterRequest from "./DeleteMissionTaskModelMasterRequest"

export {
    DescribeCompletesRequest,
    DescribeCompletesByUserIdRequest,
    CompleteRequest,
    CompleteByUserIdRequest,
    ReceiveByUserIdRequest,
    RevertReceiveByUserIdRequest,
    GetCompleteRequest,
    GetCompleteByUserIdRequest,
    DeleteCompleteByUserIdRequest,
    VerifyCompleteRequest,
    VerifyCompleteByUserIdRequest,
    ReceiveByStampTaskRequest,
    RevertReceiveByStampSheetRequest,
    VerifyCompleteByStampTaskRequest,
    DescribeCounterModelMastersRequest,
    CreateCounterModelMasterRequest,
    GetCounterModelMasterRequest,
    UpdateCounterModelMasterRequest,
    DeleteCounterModelMasterRequest,
    DescribeMissionGroupModelMastersRequest,
    CreateMissionGroupModelMasterRequest,
    GetMissionGroupModelMasterRequest,
    UpdateMissionGroupModelMasterRequest,
    DeleteMissionGroupModelMasterRequest,
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
    DescribeCountersRequest,
    DescribeCountersByUserIdRequest,
    IncreaseCounterByUserIdRequest,
    SetCounterByUserIdRequest,
    DecreaseCounterRequest,
    DecreaseCounterByUserIdRequest,
    GetCounterRequest,
    GetCounterByUserIdRequest,
    VerifyCounterValueRequest,
    VerifyCounterValueByUserIdRequest,
    DeleteCounterByUserIdRequest,
    IncreaseByStampSheetRequest,
    SetByStampSheetRequest,
    DecreaseByStampTaskRequest,
    VerifyCounterValueByStampTaskRequest,
    ExportMasterRequest,
    GetCurrentMissionMasterRequest,
    UpdateCurrentMissionMasterRequest,
    UpdateCurrentMissionMasterFromGitHubRequest,
    DescribeCounterModelsRequest,
    GetCounterModelRequest,
    DescribeMissionGroupModelsRequest,
    GetMissionGroupModelRequest,
    DescribeMissionTaskModelsRequest,
    GetMissionTaskModelRequest,
    DescribeMissionTaskModelMastersRequest,
    CreateMissionTaskModelMasterRequest,
    GetMissionTaskModelMasterRequest,
    UpdateMissionTaskModelMasterRequest,
    DeleteMissionTaskModelMasterRequest,
};