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
import DescribeExperienceModelMastersRequest from "./DescribeExperienceModelMastersRequest"
import CreateExperienceModelMasterRequest from "./CreateExperienceModelMasterRequest"
import GetExperienceModelMasterRequest from "./GetExperienceModelMasterRequest"
import UpdateExperienceModelMasterRequest from "./UpdateExperienceModelMasterRequest"
import DeleteExperienceModelMasterRequest from "./DeleteExperienceModelMasterRequest"
import DescribeExperienceModelsRequest from "./DescribeExperienceModelsRequest"
import GetExperienceModelRequest from "./GetExperienceModelRequest"
import DescribeThresholdMastersRequest from "./DescribeThresholdMastersRequest"
import CreateThresholdMasterRequest from "./CreateThresholdMasterRequest"
import GetThresholdMasterRequest from "./GetThresholdMasterRequest"
import UpdateThresholdMasterRequest from "./UpdateThresholdMasterRequest"
import DeleteThresholdMasterRequest from "./DeleteThresholdMasterRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentExperienceMasterRequest from "./GetCurrentExperienceMasterRequest"
import UpdateCurrentExperienceMasterRequest from "./UpdateCurrentExperienceMasterRequest"
import UpdateCurrentExperienceMasterFromGitHubRequest from "./UpdateCurrentExperienceMasterFromGitHubRequest"
import DescribeStatusesRequest from "./DescribeStatusesRequest"
import DescribeStatusesByUserIdRequest from "./DescribeStatusesByUserIdRequest"
import GetStatusRequest from "./GetStatusRequest"
import GetStatusByUserIdRequest from "./GetStatusByUserIdRequest"
import GetStatusWithSignatureRequest from "./GetStatusWithSignatureRequest"
import GetStatusWithSignatureByUserIdRequest from "./GetStatusWithSignatureByUserIdRequest"
import AddExperienceByUserIdRequest from "./AddExperienceByUserIdRequest"
import SubExperienceByUserIdRequest from "./SubExperienceByUserIdRequest"
import SetExperienceByUserIdRequest from "./SetExperienceByUserIdRequest"
import AddRankCapByUserIdRequest from "./AddRankCapByUserIdRequest"
import SubRankCapByUserIdRequest from "./SubRankCapByUserIdRequest"
import SetRankCapByUserIdRequest from "./SetRankCapByUserIdRequest"
import DeleteStatusByUserIdRequest from "./DeleteStatusByUserIdRequest"
import VerifyRankRequest from "./VerifyRankRequest"
import VerifyRankByUserIdRequest from "./VerifyRankByUserIdRequest"
import VerifyRankCapRequest from "./VerifyRankCapRequest"
import VerifyRankCapByUserIdRequest from "./VerifyRankCapByUserIdRequest"
import AddExperienceByStampSheetRequest from "./AddExperienceByStampSheetRequest"
import SubExperienceByStampTaskRequest from "./SubExperienceByStampTaskRequest"
import AddRankCapByStampSheetRequest from "./AddRankCapByStampSheetRequest"
import SubRankCapByStampTaskRequest from "./SubRankCapByStampTaskRequest"
import SetRankCapByStampSheetRequest from "./SetRankCapByStampSheetRequest"
import MultiplyAcquireActionsByUserIdRequest from "./MultiplyAcquireActionsByUserIdRequest"
import MultiplyAcquireActionsByStampSheetRequest from "./MultiplyAcquireActionsByStampSheetRequest"
import VerifyRankByStampTaskRequest from "./VerifyRankByStampTaskRequest"
import VerifyRankCapByStampTaskRequest from "./VerifyRankCapByStampTaskRequest"

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
    DescribeExperienceModelMastersRequest,
    CreateExperienceModelMasterRequest,
    GetExperienceModelMasterRequest,
    UpdateExperienceModelMasterRequest,
    DeleteExperienceModelMasterRequest,
    DescribeExperienceModelsRequest,
    GetExperienceModelRequest,
    DescribeThresholdMastersRequest,
    CreateThresholdMasterRequest,
    GetThresholdMasterRequest,
    UpdateThresholdMasterRequest,
    DeleteThresholdMasterRequest,
    ExportMasterRequest,
    GetCurrentExperienceMasterRequest,
    UpdateCurrentExperienceMasterRequest,
    UpdateCurrentExperienceMasterFromGitHubRequest,
    DescribeStatusesRequest,
    DescribeStatusesByUserIdRequest,
    GetStatusRequest,
    GetStatusByUserIdRequest,
    GetStatusWithSignatureRequest,
    GetStatusWithSignatureByUserIdRequest,
    AddExperienceByUserIdRequest,
    SubExperienceByUserIdRequest,
    SetExperienceByUserIdRequest,
    AddRankCapByUserIdRequest,
    SubRankCapByUserIdRequest,
    SetRankCapByUserIdRequest,
    DeleteStatusByUserIdRequest,
    VerifyRankRequest,
    VerifyRankByUserIdRequest,
    VerifyRankCapRequest,
    VerifyRankCapByUserIdRequest,
    AddExperienceByStampSheetRequest,
    SubExperienceByStampTaskRequest,
    AddRankCapByStampSheetRequest,
    SubRankCapByStampTaskRequest,
    SetRankCapByStampSheetRequest,
    MultiplyAcquireActionsByUserIdRequest,
    MultiplyAcquireActionsByStampSheetRequest,
    VerifyRankByStampTaskRequest,
    VerifyRankCapByStampTaskRequest,
};