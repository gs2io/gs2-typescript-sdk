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
import DescribeRateModelsResult from "./DescribeRateModelsResult"
import GetRateModelResult from "./GetRateModelResult"
import DescribeRateModelMastersResult from "./DescribeRateModelMastersResult"
import CreateRateModelMasterResult from "./CreateRateModelMasterResult"
import GetRateModelMasterResult from "./GetRateModelMasterResult"
import UpdateRateModelMasterResult from "./UpdateRateModelMasterResult"
import DeleteRateModelMasterResult from "./DeleteRateModelMasterResult"
import DescribeIncrementalRateModelsResult from "./DescribeIncrementalRateModelsResult"
import GetIncrementalRateModelResult from "./GetIncrementalRateModelResult"
import DescribeIncrementalRateModelMastersResult from "./DescribeIncrementalRateModelMastersResult"
import CreateIncrementalRateModelMasterResult from "./CreateIncrementalRateModelMasterResult"
import GetIncrementalRateModelMasterResult from "./GetIncrementalRateModelMasterResult"
import UpdateIncrementalRateModelMasterResult from "./UpdateIncrementalRateModelMasterResult"
import DeleteIncrementalRateModelMasterResult from "./DeleteIncrementalRateModelMasterResult"
import ExchangeResult from "./ExchangeResult"
import ExchangeByUserIdResult from "./ExchangeByUserIdResult"
import ExchangeByStampSheetResult from "./ExchangeByStampSheetResult"
import IncrementalExchangeResult from "./IncrementalExchangeResult"
import IncrementalExchangeByUserIdResult from "./IncrementalExchangeByUserIdResult"
import IncrementalExchangeByStampSheetResult from "./IncrementalExchangeByStampSheetResult"
import ExportMasterResult from "./ExportMasterResult"
import GetCurrentRateMasterResult from "./GetCurrentRateMasterResult"
import PreUpdateCurrentRateMasterResult from "./PreUpdateCurrentRateMasterResult"
import UpdateCurrentRateMasterResult from "./UpdateCurrentRateMasterResult"
import UpdateCurrentRateMasterFromGitHubResult from "./UpdateCurrentRateMasterFromGitHubResult"
import CreateAwaitByUserIdResult from "./CreateAwaitByUserIdResult"
import DescribeAwaitsResult from "./DescribeAwaitsResult"
import DescribeAwaitsByUserIdResult from "./DescribeAwaitsByUserIdResult"
import GetAwaitResult from "./GetAwaitResult"
import GetAwaitByUserIdResult from "./GetAwaitByUserIdResult"
import AcquireResult from "./AcquireResult"
import AcquireByUserIdResult from "./AcquireByUserIdResult"
import AcquireForceByUserIdResult from "./AcquireForceByUserIdResult"
import SkipByUserIdResult from "./SkipByUserIdResult"
import DeleteAwaitResult from "./DeleteAwaitResult"
import DeleteAwaitByUserIdResult from "./DeleteAwaitByUserIdResult"
import CreateAwaitByStampSheetResult from "./CreateAwaitByStampSheetResult"
import AcquireForceByStampSheetResult from "./AcquireForceByStampSheetResult"
import SkipByStampSheetResult from "./SkipByStampSheetResult"
import DeleteAwaitByStampTaskResult from "./DeleteAwaitByStampTaskResult"

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
    DescribeRateModelsResult,
    GetRateModelResult,
    DescribeRateModelMastersResult,
    CreateRateModelMasterResult,
    GetRateModelMasterResult,
    UpdateRateModelMasterResult,
    DeleteRateModelMasterResult,
    DescribeIncrementalRateModelsResult,
    GetIncrementalRateModelResult,
    DescribeIncrementalRateModelMastersResult,
    CreateIncrementalRateModelMasterResult,
    GetIncrementalRateModelMasterResult,
    UpdateIncrementalRateModelMasterResult,
    DeleteIncrementalRateModelMasterResult,
    ExchangeResult,
    ExchangeByUserIdResult,
    ExchangeByStampSheetResult,
    IncrementalExchangeResult,
    IncrementalExchangeByUserIdResult,
    IncrementalExchangeByStampSheetResult,
    ExportMasterResult,
    GetCurrentRateMasterResult,
    PreUpdateCurrentRateMasterResult,
    UpdateCurrentRateMasterResult,
    UpdateCurrentRateMasterFromGitHubResult,
    CreateAwaitByUserIdResult,
    DescribeAwaitsResult,
    DescribeAwaitsByUserIdResult,
    GetAwaitResult,
    GetAwaitByUserIdResult,
    AcquireResult,
    AcquireByUserIdResult,
    AcquireForceByUserIdResult,
    SkipByUserIdResult,
    DeleteAwaitResult,
    DeleteAwaitByUserIdResult,
    CreateAwaitByStampSheetResult,
    AcquireForceByStampSheetResult,
    SkipByStampSheetResult,
    DeleteAwaitByStampTaskResult,
};