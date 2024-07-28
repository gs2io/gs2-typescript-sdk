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
import DescribeStaminaModelMastersResult from "./DescribeStaminaModelMastersResult"
import CreateStaminaModelMasterResult from "./CreateStaminaModelMasterResult"
import GetStaminaModelMasterResult from "./GetStaminaModelMasterResult"
import UpdateStaminaModelMasterResult from "./UpdateStaminaModelMasterResult"
import DeleteStaminaModelMasterResult from "./DeleteStaminaModelMasterResult"
import DescribeMaxStaminaTableMastersResult from "./DescribeMaxStaminaTableMastersResult"
import CreateMaxStaminaTableMasterResult from "./CreateMaxStaminaTableMasterResult"
import GetMaxStaminaTableMasterResult from "./GetMaxStaminaTableMasterResult"
import UpdateMaxStaminaTableMasterResult from "./UpdateMaxStaminaTableMasterResult"
import DeleteMaxStaminaTableMasterResult from "./DeleteMaxStaminaTableMasterResult"
import DescribeRecoverIntervalTableMastersResult from "./DescribeRecoverIntervalTableMastersResult"
import CreateRecoverIntervalTableMasterResult from "./CreateRecoverIntervalTableMasterResult"
import GetRecoverIntervalTableMasterResult from "./GetRecoverIntervalTableMasterResult"
import UpdateRecoverIntervalTableMasterResult from "./UpdateRecoverIntervalTableMasterResult"
import DeleteRecoverIntervalTableMasterResult from "./DeleteRecoverIntervalTableMasterResult"
import DescribeRecoverValueTableMastersResult from "./DescribeRecoverValueTableMastersResult"
import CreateRecoverValueTableMasterResult from "./CreateRecoverValueTableMasterResult"
import GetRecoverValueTableMasterResult from "./GetRecoverValueTableMasterResult"
import UpdateRecoverValueTableMasterResult from "./UpdateRecoverValueTableMasterResult"
import DeleteRecoverValueTableMasterResult from "./DeleteRecoverValueTableMasterResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentStaminaMasterResult from "./GetCurrentStaminaMasterResult"
import UpdateCurrentStaminaMasterResult from "./UpdateCurrentStaminaMasterResult"
import UpdateCurrentStaminaMasterFromGitHubResult from "./UpdateCurrentStaminaMasterFromGitHubResult"
import DescribeStaminaModelsResult from "./DescribeStaminaModelsResult"
import GetStaminaModelResult from "./GetStaminaModelResult"
import DescribeStaminasResult from "./DescribeStaminasResult"
import DescribeStaminasByUserIdResult from "./DescribeStaminasByUserIdResult"
import GetStaminaResult from "./GetStaminaResult"
import GetStaminaByUserIdResult from "./GetStaminaByUserIdResult"
import UpdateStaminaByUserIdResult from "./UpdateStaminaByUserIdResult"
import ConsumeStaminaResult from "./ConsumeStaminaResult"
import ConsumeStaminaByUserIdResult from "./ConsumeStaminaByUserIdResult"
import RecoverStaminaByUserIdResult from "./RecoverStaminaByUserIdResult"
import RaiseMaxValueByUserIdResult from "./RaiseMaxValueByUserIdResult"
import DecreaseMaxValueResult from "./DecreaseMaxValueResult"
import DecreaseMaxValueByUserIdResult from "./DecreaseMaxValueByUserIdResult"
import SetMaxValueByUserIdResult from "./SetMaxValueByUserIdResult"
import SetRecoverIntervalByUserIdResult from "./SetRecoverIntervalByUserIdResult"
import SetRecoverValueByUserIdResult from "./SetRecoverValueByUserIdResult"
import SetMaxValueByStatusResult from "./SetMaxValueByStatusResult"
import SetRecoverIntervalByStatusResult from "./SetRecoverIntervalByStatusResult"
import SetRecoverValueByStatusResult from "./SetRecoverValueByStatusResult"
import DeleteStaminaByUserIdResult from "./DeleteStaminaByUserIdResult"
import RecoverStaminaByStampSheetResult from "./RecoverStaminaByStampSheetResult"
import RaiseMaxValueByStampSheetResult from "./RaiseMaxValueByStampSheetResult"
import DecreaseMaxValueByStampTaskResult from "./DecreaseMaxValueByStampTaskResult"
import SetMaxValueByStampSheetResult from "./SetMaxValueByStampSheetResult"
import SetRecoverIntervalByStampSheetResult from "./SetRecoverIntervalByStampSheetResult"
import SetRecoverValueByStampSheetResult from "./SetRecoverValueByStampSheetResult"
import ConsumeStaminaByStampTaskResult from "./ConsumeStaminaByStampTaskResult"

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
    DescribeStaminaModelMastersResult,
    CreateStaminaModelMasterResult,
    GetStaminaModelMasterResult,
    UpdateStaminaModelMasterResult,
    DeleteStaminaModelMasterResult,
    DescribeMaxStaminaTableMastersResult,
    CreateMaxStaminaTableMasterResult,
    GetMaxStaminaTableMasterResult,
    UpdateMaxStaminaTableMasterResult,
    DeleteMaxStaminaTableMasterResult,
    DescribeRecoverIntervalTableMastersResult,
    CreateRecoverIntervalTableMasterResult,
    GetRecoverIntervalTableMasterResult,
    UpdateRecoverIntervalTableMasterResult,
    DeleteRecoverIntervalTableMasterResult,
    DescribeRecoverValueTableMastersResult,
    CreateRecoverValueTableMasterResult,
    GetRecoverValueTableMasterResult,
    UpdateRecoverValueTableMasterResult,
    DeleteRecoverValueTableMasterResult,
    ExportMasterResult,
    GetCurrentStaminaMasterResult,
    UpdateCurrentStaminaMasterResult,
    UpdateCurrentStaminaMasterFromGitHubResult,
    DescribeStaminaModelsResult,
    GetStaminaModelResult,
    DescribeStaminasResult,
    DescribeStaminasByUserIdResult,
    GetStaminaResult,
    GetStaminaByUserIdResult,
    UpdateStaminaByUserIdResult,
    ConsumeStaminaResult,
    ConsumeStaminaByUserIdResult,
    RecoverStaminaByUserIdResult,
    RaiseMaxValueByUserIdResult,
    DecreaseMaxValueResult,
    DecreaseMaxValueByUserIdResult,
    SetMaxValueByUserIdResult,
    SetRecoverIntervalByUserIdResult,
    SetRecoverValueByUserIdResult,
    SetMaxValueByStatusResult,
    SetRecoverIntervalByStatusResult,
    SetRecoverValueByStatusResult,
    DeleteStaminaByUserIdResult,
    RecoverStaminaByStampSheetResult,
    RaiseMaxValueByStampSheetResult,
    DecreaseMaxValueByStampTaskResult,
    SetMaxValueByStampSheetResult,
    SetRecoverIntervalByStampSheetResult,
    SetRecoverValueByStampSheetResult,
    ConsumeStaminaByStampTaskResult,
};