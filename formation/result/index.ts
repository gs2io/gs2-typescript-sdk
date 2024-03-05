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
import GetFormModelResult from "./GetFormModelResult"
import DescribeFormModelMastersResult from "./DescribeFormModelMastersResult"
import CreateFormModelMasterResult from "./CreateFormModelMasterResult"
import GetFormModelMasterResult from "./GetFormModelMasterResult"
import UpdateFormModelMasterResult from "./UpdateFormModelMasterResult"
import DeleteFormModelMasterResult from "./DeleteFormModelMasterResult"
import DescribeMoldModelsResult from "./DescribeMoldModelsResult"
import GetMoldModelResult from "./GetMoldModelResult"
import DescribeMoldModelMastersResult from "./DescribeMoldModelMastersResult"
import CreateMoldModelMasterResult from "./CreateMoldModelMasterResult"
import GetMoldModelMasterResult from "./GetMoldModelMasterResult"
import UpdateMoldModelMasterResult from "./UpdateMoldModelMasterResult"
import DeleteMoldModelMasterResult from "./DeleteMoldModelMasterResult"
import DescribePropertyFormModelsResult from "./DescribePropertyFormModelsResult"
import GetPropertyFormModelResult from "./GetPropertyFormModelResult"
import DescribePropertyFormModelMastersResult from "./DescribePropertyFormModelMastersResult"
import CreatePropertyFormModelMasterResult from "./CreatePropertyFormModelMasterResult"
import GetPropertyFormModelMasterResult from "./GetPropertyFormModelMasterResult"
import UpdatePropertyFormModelMasterResult from "./UpdatePropertyFormModelMasterResult"
import DeletePropertyFormModelMasterResult from "./DeletePropertyFormModelMasterResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentFormMasterResult from "./GetCurrentFormMasterResult"
import UpdateCurrentFormMasterResult from "./UpdateCurrentFormMasterResult"
import UpdateCurrentFormMasterFromGitHubResult from "./UpdateCurrentFormMasterFromGitHubResult"
import DescribeMoldsResult from "./DescribeMoldsResult"
import DescribeMoldsByUserIdResult from "./DescribeMoldsByUserIdResult"
import GetMoldResult from "./GetMoldResult"
import GetMoldByUserIdResult from "./GetMoldByUserIdResult"
import SetMoldCapacityByUserIdResult from "./SetMoldCapacityByUserIdResult"
import AddMoldCapacityByUserIdResult from "./AddMoldCapacityByUserIdResult"
import SubMoldCapacityByUserIdResult from "./SubMoldCapacityByUserIdResult"
import DeleteMoldResult from "./DeleteMoldResult"
import DeleteMoldByUserIdResult from "./DeleteMoldByUserIdResult"
import AddCapacityByStampSheetResult from "./AddCapacityByStampSheetResult"
import SubCapacityByStampTaskResult from "./SubCapacityByStampTaskResult"
import SetCapacityByStampSheetResult from "./SetCapacityByStampSheetResult"
import DescribeFormsResult from "./DescribeFormsResult"
import DescribeFormsByUserIdResult from "./DescribeFormsByUserIdResult"
import GetFormResult from "./GetFormResult"
import GetFormByUserIdResult from "./GetFormByUserIdResult"
import GetFormWithSignatureResult from "./GetFormWithSignatureResult"
import GetFormWithSignatureByUserIdResult from "./GetFormWithSignatureByUserIdResult"
import SetFormByUserIdResult from "./SetFormByUserIdResult"
import SetFormWithSignatureResult from "./SetFormWithSignatureResult"
import AcquireActionsToFormPropertiesResult from "./AcquireActionsToFormPropertiesResult"
import DeleteFormResult from "./DeleteFormResult"
import DeleteFormByUserIdResult from "./DeleteFormByUserIdResult"
import AcquireActionToFormPropertiesByStampSheetResult from "./AcquireActionToFormPropertiesByStampSheetResult"
import SetFormByStampSheetResult from "./SetFormByStampSheetResult"
import DescribePropertyFormsResult from "./DescribePropertyFormsResult"
import DescribePropertyFormsByUserIdResult from "./DescribePropertyFormsByUserIdResult"
import GetPropertyFormResult from "./GetPropertyFormResult"
import GetPropertyFormByUserIdResult from "./GetPropertyFormByUserIdResult"
import GetPropertyFormWithSignatureResult from "./GetPropertyFormWithSignatureResult"
import GetPropertyFormWithSignatureByUserIdResult from "./GetPropertyFormWithSignatureByUserIdResult"
import SetPropertyFormByUserIdResult from "./SetPropertyFormByUserIdResult"
import SetPropertyFormWithSignatureResult from "./SetPropertyFormWithSignatureResult"
import AcquireActionsToPropertyFormPropertiesResult from "./AcquireActionsToPropertyFormPropertiesResult"
import DeletePropertyFormResult from "./DeletePropertyFormResult"
import DeletePropertyFormByUserIdResult from "./DeletePropertyFormByUserIdResult"
import AcquireActionToPropertyFormPropertiesByStampSheetResult from "./AcquireActionToPropertyFormPropertiesByStampSheetResult"

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
    GetFormModelResult,
    DescribeFormModelMastersResult,
    CreateFormModelMasterResult,
    GetFormModelMasterResult,
    UpdateFormModelMasterResult,
    DeleteFormModelMasterResult,
    DescribeMoldModelsResult,
    GetMoldModelResult,
    DescribeMoldModelMastersResult,
    CreateMoldModelMasterResult,
    GetMoldModelMasterResult,
    UpdateMoldModelMasterResult,
    DeleteMoldModelMasterResult,
    DescribePropertyFormModelsResult,
    GetPropertyFormModelResult,
    DescribePropertyFormModelMastersResult,
    CreatePropertyFormModelMasterResult,
    GetPropertyFormModelMasterResult,
    UpdatePropertyFormModelMasterResult,
    DeletePropertyFormModelMasterResult,
    ExportMasterResult,
    GetCurrentFormMasterResult,
    UpdateCurrentFormMasterResult,
    UpdateCurrentFormMasterFromGitHubResult,
    DescribeMoldsResult,
    DescribeMoldsByUserIdResult,
    GetMoldResult,
    GetMoldByUserIdResult,
    SetMoldCapacityByUserIdResult,
    AddMoldCapacityByUserIdResult,
    SubMoldCapacityByUserIdResult,
    DeleteMoldResult,
    DeleteMoldByUserIdResult,
    AddCapacityByStampSheetResult,
    SubCapacityByStampTaskResult,
    SetCapacityByStampSheetResult,
    DescribeFormsResult,
    DescribeFormsByUserIdResult,
    GetFormResult,
    GetFormByUserIdResult,
    GetFormWithSignatureResult,
    GetFormWithSignatureByUserIdResult,
    SetFormByUserIdResult,
    SetFormWithSignatureResult,
    AcquireActionsToFormPropertiesResult,
    DeleteFormResult,
    DeleteFormByUserIdResult,
    AcquireActionToFormPropertiesByStampSheetResult,
    SetFormByStampSheetResult,
    DescribePropertyFormsResult,
    DescribePropertyFormsByUserIdResult,
    GetPropertyFormResult,
    GetPropertyFormByUserIdResult,
    GetPropertyFormWithSignatureResult,
    GetPropertyFormWithSignatureByUserIdResult,
    SetPropertyFormByUserIdResult,
    SetPropertyFormWithSignatureResult,
    AcquireActionsToPropertyFormPropertiesResult,
    DeletePropertyFormResult,
    DeletePropertyFormByUserIdResult,
    AcquireActionToPropertyFormPropertiesByStampSheetResult,
};