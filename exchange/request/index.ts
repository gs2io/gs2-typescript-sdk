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
import DescribeRateModelsRequest from "./DescribeRateModelsRequest"
import GetRateModelRequest from "./GetRateModelRequest"
import DescribeRateModelMastersRequest from "./DescribeRateModelMastersRequest"
import CreateRateModelMasterRequest from "./CreateRateModelMasterRequest"
import GetRateModelMasterRequest from "./GetRateModelMasterRequest"
import UpdateRateModelMasterRequest from "./UpdateRateModelMasterRequest"
import DeleteRateModelMasterRequest from "./DeleteRateModelMasterRequest"
import DescribeIncrementalRateModelsRequest from "./DescribeIncrementalRateModelsRequest"
import GetIncrementalRateModelRequest from "./GetIncrementalRateModelRequest"
import DescribeIncrementalRateModelMastersRequest from "./DescribeIncrementalRateModelMastersRequest"
import CreateIncrementalRateModelMasterRequest from "./CreateIncrementalRateModelMasterRequest"
import GetIncrementalRateModelMasterRequest from "./GetIncrementalRateModelMasterRequest"
import UpdateIncrementalRateModelMasterRequest from "./UpdateIncrementalRateModelMasterRequest"
import DeleteIncrementalRateModelMasterRequest from "./DeleteIncrementalRateModelMasterRequest"
import ExchangeRequest from "./ExchangeRequest"
import ExchangeByUserIdRequest from "./ExchangeByUserIdRequest"
import ExchangeByStampSheetRequest from "./ExchangeByStampSheetRequest"
import IncrementalExchangeRequest from "./IncrementalExchangeRequest"
import IncrementalExchangeByUserIdRequest from "./IncrementalExchangeByUserIdRequest"
import IncrementalExchangeByStampSheetRequest from "./IncrementalExchangeByStampSheetRequest"
import ExportMasterRequest from "./ExportMasterRequest"
import GetCurrentRateMasterRequest from "./GetCurrentRateMasterRequest"
import PreUpdateCurrentRateMasterRequest from "./PreUpdateCurrentRateMasterRequest"
import UpdateCurrentRateMasterRequest from "./UpdateCurrentRateMasterRequest"
import UpdateCurrentRateMasterFromGitHubRequest from "./UpdateCurrentRateMasterFromGitHubRequest"
import CreateAwaitByUserIdRequest from "./CreateAwaitByUserIdRequest"
import DescribeAwaitsRequest from "./DescribeAwaitsRequest"
import DescribeAwaitsByUserIdRequest from "./DescribeAwaitsByUserIdRequest"
import GetAwaitRequest from "./GetAwaitRequest"
import GetAwaitByUserIdRequest from "./GetAwaitByUserIdRequest"
import AcquireRequest from "./AcquireRequest"
import AcquireByUserIdRequest from "./AcquireByUserIdRequest"
import AcquireForceByUserIdRequest from "./AcquireForceByUserIdRequest"
import SkipByUserIdRequest from "./SkipByUserIdRequest"
import DeleteAwaitRequest from "./DeleteAwaitRequest"
import DeleteAwaitByUserIdRequest from "./DeleteAwaitByUserIdRequest"
import CreateAwaitByStampSheetRequest from "./CreateAwaitByStampSheetRequest"
import AcquireForceByStampSheetRequest from "./AcquireForceByStampSheetRequest"
import SkipByStampSheetRequest from "./SkipByStampSheetRequest"
import DeleteAwaitByStampTaskRequest from "./DeleteAwaitByStampTaskRequest"

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
    DescribeRateModelsRequest,
    GetRateModelRequest,
    DescribeRateModelMastersRequest,
    CreateRateModelMasterRequest,
    GetRateModelMasterRequest,
    UpdateRateModelMasterRequest,
    DeleteRateModelMasterRequest,
    DescribeIncrementalRateModelsRequest,
    GetIncrementalRateModelRequest,
    DescribeIncrementalRateModelMastersRequest,
    CreateIncrementalRateModelMasterRequest,
    GetIncrementalRateModelMasterRequest,
    UpdateIncrementalRateModelMasterRequest,
    DeleteIncrementalRateModelMasterRequest,
    ExchangeRequest,
    ExchangeByUserIdRequest,
    ExchangeByStampSheetRequest,
    IncrementalExchangeRequest,
    IncrementalExchangeByUserIdRequest,
    IncrementalExchangeByStampSheetRequest,
    ExportMasterRequest,
    GetCurrentRateMasterRequest,
    PreUpdateCurrentRateMasterRequest,
    UpdateCurrentRateMasterRequest,
    UpdateCurrentRateMasterFromGitHubRequest,
    CreateAwaitByUserIdRequest,
    DescribeAwaitsRequest,
    DescribeAwaitsByUserIdRequest,
    GetAwaitRequest,
    GetAwaitByUserIdRequest,
    AcquireRequest,
    AcquireByUserIdRequest,
    AcquireForceByUserIdRequest,
    SkipByUserIdRequest,
    DeleteAwaitRequest,
    DeleteAwaitByUserIdRequest,
    CreateAwaitByStampSheetRequest,
    AcquireForceByStampSheetRequest,
    SkipByStampSheetRequest,
    DeleteAwaitByStampTaskRequest,
};