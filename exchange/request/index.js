"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAwaitRequest = exports.SkipByUserIdRequest = exports.SkipRequest = exports.AcquireForceByUserIdRequest = exports.AcquireByUserIdRequest = exports.AcquireRequest = exports.GetAwaitByUserIdRequest = exports.GetAwaitRequest = exports.DescribeAwaitsByUserIdRequest = exports.DescribeAwaitsRequest = exports.CreateAwaitByUserIdRequest = exports.UpdateCurrentRateMasterFromGitHubRequest = exports.UpdateCurrentRateMasterRequest = exports.GetCurrentRateMasterRequest = exports.ExportMasterRequest = exports.UnlockIncrementalExchangeByStampSheetRequest = exports.UnlockIncrementalExchangeByUserIdRequest = exports.IncrementalExchangeByStampSheetRequest = exports.IncrementalExchangeByUserIdRequest = exports.IncrementalExchangeRequest = exports.ExchangeByStampSheetRequest = exports.ExchangeByUserIdRequest = exports.ExchangeRequest = exports.DeleteIncrementalRateModelMasterRequest = exports.UpdateIncrementalRateModelMasterRequest = exports.GetIncrementalRateModelMasterRequest = exports.CreateIncrementalRateModelMasterRequest = exports.DescribeIncrementalRateModelMastersRequest = exports.GetIncrementalRateModelRequest = exports.DescribeIncrementalRateModelsRequest = exports.DeleteRateModelMasterRequest = exports.UpdateRateModelMasterRequest = exports.GetRateModelMasterRequest = exports.CreateRateModelMasterRequest = exports.DescribeRateModelMastersRequest = exports.GetRateModelRequest = exports.DescribeRateModelsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.DeleteAwaitByStampTaskRequest = exports.CreateAwaitByStampSheetRequest = exports.DeleteAwaitByUserIdRequest = void 0;
var tslib_1 = require("tslib");
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
var DescribeNamespacesRequest_1 = tslib_1.__importDefault(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = tslib_1.__importDefault(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = tslib_1.__importDefault(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = tslib_1.__importDefault(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = tslib_1.__importDefault(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = tslib_1.__importDefault(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdRequest"));
exports.DumpUserDataByUserIdRequest = DumpUserDataByUserIdRequest_1.default;
var CheckDumpUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdRequest"));
exports.CheckDumpUserDataByUserIdRequest = CheckDumpUserDataByUserIdRequest_1.default;
var CleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdRequest"));
exports.CleanUserDataByUserIdRequest = CleanUserDataByUserIdRequest_1.default;
var CheckCleanUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdRequest"));
exports.CheckCleanUserDataByUserIdRequest = CheckCleanUserDataByUserIdRequest_1.default;
var PrepareImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdRequest"));
exports.PrepareImportUserDataByUserIdRequest = PrepareImportUserDataByUserIdRequest_1.default;
var ImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdRequest"));
exports.ImportUserDataByUserIdRequest = ImportUserDataByUserIdRequest_1.default;
var CheckImportUserDataByUserIdRequest_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdRequest"));
exports.CheckImportUserDataByUserIdRequest = CheckImportUserDataByUserIdRequest_1.default;
var DescribeRateModelsRequest_1 = tslib_1.__importDefault(require("./DescribeRateModelsRequest"));
exports.DescribeRateModelsRequest = DescribeRateModelsRequest_1.default;
var GetRateModelRequest_1 = tslib_1.__importDefault(require("./GetRateModelRequest"));
exports.GetRateModelRequest = GetRateModelRequest_1.default;
var DescribeRateModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeRateModelMastersRequest"));
exports.DescribeRateModelMastersRequest = DescribeRateModelMastersRequest_1.default;
var CreateRateModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateRateModelMasterRequest"));
exports.CreateRateModelMasterRequest = CreateRateModelMasterRequest_1.default;
var GetRateModelMasterRequest_1 = tslib_1.__importDefault(require("./GetRateModelMasterRequest"));
exports.GetRateModelMasterRequest = GetRateModelMasterRequest_1.default;
var UpdateRateModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateRateModelMasterRequest"));
exports.UpdateRateModelMasterRequest = UpdateRateModelMasterRequest_1.default;
var DeleteRateModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteRateModelMasterRequest"));
exports.DeleteRateModelMasterRequest = DeleteRateModelMasterRequest_1.default;
var DescribeIncrementalRateModelsRequest_1 = tslib_1.__importDefault(require("./DescribeIncrementalRateModelsRequest"));
exports.DescribeIncrementalRateModelsRequest = DescribeIncrementalRateModelsRequest_1.default;
var GetIncrementalRateModelRequest_1 = tslib_1.__importDefault(require("./GetIncrementalRateModelRequest"));
exports.GetIncrementalRateModelRequest = GetIncrementalRateModelRequest_1.default;
var DescribeIncrementalRateModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeIncrementalRateModelMastersRequest"));
exports.DescribeIncrementalRateModelMastersRequest = DescribeIncrementalRateModelMastersRequest_1.default;
var CreateIncrementalRateModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateIncrementalRateModelMasterRequest"));
exports.CreateIncrementalRateModelMasterRequest = CreateIncrementalRateModelMasterRequest_1.default;
var GetIncrementalRateModelMasterRequest_1 = tslib_1.__importDefault(require("./GetIncrementalRateModelMasterRequest"));
exports.GetIncrementalRateModelMasterRequest = GetIncrementalRateModelMasterRequest_1.default;
var UpdateIncrementalRateModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateIncrementalRateModelMasterRequest"));
exports.UpdateIncrementalRateModelMasterRequest = UpdateIncrementalRateModelMasterRequest_1.default;
var DeleteIncrementalRateModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteIncrementalRateModelMasterRequest"));
exports.DeleteIncrementalRateModelMasterRequest = DeleteIncrementalRateModelMasterRequest_1.default;
var ExchangeRequest_1 = tslib_1.__importDefault(require("./ExchangeRequest"));
exports.ExchangeRequest = ExchangeRequest_1.default;
var ExchangeByUserIdRequest_1 = tslib_1.__importDefault(require("./ExchangeByUserIdRequest"));
exports.ExchangeByUserIdRequest = ExchangeByUserIdRequest_1.default;
var ExchangeByStampSheetRequest_1 = tslib_1.__importDefault(require("./ExchangeByStampSheetRequest"));
exports.ExchangeByStampSheetRequest = ExchangeByStampSheetRequest_1.default;
var IncrementalExchangeRequest_1 = tslib_1.__importDefault(require("./IncrementalExchangeRequest"));
exports.IncrementalExchangeRequest = IncrementalExchangeRequest_1.default;
var IncrementalExchangeByUserIdRequest_1 = tslib_1.__importDefault(require("./IncrementalExchangeByUserIdRequest"));
exports.IncrementalExchangeByUserIdRequest = IncrementalExchangeByUserIdRequest_1.default;
var IncrementalExchangeByStampSheetRequest_1 = tslib_1.__importDefault(require("./IncrementalExchangeByStampSheetRequest"));
exports.IncrementalExchangeByStampSheetRequest = IncrementalExchangeByStampSheetRequest_1.default;
var UnlockIncrementalExchangeByUserIdRequest_1 = tslib_1.__importDefault(require("./UnlockIncrementalExchangeByUserIdRequest"));
exports.UnlockIncrementalExchangeByUserIdRequest = UnlockIncrementalExchangeByUserIdRequest_1.default;
var UnlockIncrementalExchangeByStampSheetRequest_1 = tslib_1.__importDefault(require("./UnlockIncrementalExchangeByStampSheetRequest"));
exports.UnlockIncrementalExchangeByStampSheetRequest = UnlockIncrementalExchangeByStampSheetRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentRateMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentRateMasterRequest"));
exports.GetCurrentRateMasterRequest = GetCurrentRateMasterRequest_1.default;
var UpdateCurrentRateMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRateMasterRequest"));
exports.UpdateCurrentRateMasterRequest = UpdateCurrentRateMasterRequest_1.default;
var UpdateCurrentRateMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRateMasterFromGitHubRequest"));
exports.UpdateCurrentRateMasterFromGitHubRequest = UpdateCurrentRateMasterFromGitHubRequest_1.default;
var CreateAwaitByUserIdRequest_1 = tslib_1.__importDefault(require("./CreateAwaitByUserIdRequest"));
exports.CreateAwaitByUserIdRequest = CreateAwaitByUserIdRequest_1.default;
var DescribeAwaitsRequest_1 = tslib_1.__importDefault(require("./DescribeAwaitsRequest"));
exports.DescribeAwaitsRequest = DescribeAwaitsRequest_1.default;
var DescribeAwaitsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeAwaitsByUserIdRequest"));
exports.DescribeAwaitsByUserIdRequest = DescribeAwaitsByUserIdRequest_1.default;
var GetAwaitRequest_1 = tslib_1.__importDefault(require("./GetAwaitRequest"));
exports.GetAwaitRequest = GetAwaitRequest_1.default;
var GetAwaitByUserIdRequest_1 = tslib_1.__importDefault(require("./GetAwaitByUserIdRequest"));
exports.GetAwaitByUserIdRequest = GetAwaitByUserIdRequest_1.default;
var AcquireRequest_1 = tslib_1.__importDefault(require("./AcquireRequest"));
exports.AcquireRequest = AcquireRequest_1.default;
var AcquireByUserIdRequest_1 = tslib_1.__importDefault(require("./AcquireByUserIdRequest"));
exports.AcquireByUserIdRequest = AcquireByUserIdRequest_1.default;
var AcquireForceByUserIdRequest_1 = tslib_1.__importDefault(require("./AcquireForceByUserIdRequest"));
exports.AcquireForceByUserIdRequest = AcquireForceByUserIdRequest_1.default;
var SkipRequest_1 = tslib_1.__importDefault(require("./SkipRequest"));
exports.SkipRequest = SkipRequest_1.default;
var SkipByUserIdRequest_1 = tslib_1.__importDefault(require("./SkipByUserIdRequest"));
exports.SkipByUserIdRequest = SkipByUserIdRequest_1.default;
var DeleteAwaitRequest_1 = tslib_1.__importDefault(require("./DeleteAwaitRequest"));
exports.DeleteAwaitRequest = DeleteAwaitRequest_1.default;
var DeleteAwaitByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteAwaitByUserIdRequest"));
exports.DeleteAwaitByUserIdRequest = DeleteAwaitByUserIdRequest_1.default;
var CreateAwaitByStampSheetRequest_1 = tslib_1.__importDefault(require("./CreateAwaitByStampSheetRequest"));
exports.CreateAwaitByStampSheetRequest = CreateAwaitByStampSheetRequest_1.default;
var DeleteAwaitByStampTaskRequest_1 = tslib_1.__importDefault(require("./DeleteAwaitByStampTaskRequest"));
exports.DeleteAwaitByStampTaskRequest = DeleteAwaitByStampTaskRequest_1.default;
//# sourceMappingURL=index.js.map