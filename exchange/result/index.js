"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAwaitByStampTaskResult = exports.CreateAwaitByStampSheetResult = exports.DeleteAwaitByUserIdResult = exports.DeleteAwaitResult = exports.SkipByUserIdResult = exports.SkipResult = exports.AcquireForceByUserIdResult = exports.AcquireByUserIdResult = exports.AcquireResult = exports.GetAwaitByUserIdResult = exports.GetAwaitResult = exports.DescribeAwaitsByUserIdResult = exports.DescribeAwaitsResult = exports.CreateAwaitByUserIdResult = exports.UpdateCurrentRateMasterFromGitHubResult = exports.UpdateCurrentRateMasterResult = exports.GetCurrentRateMasterResult = exports.ExportMasterResult = exports.UnlockIncrementalExchangeByStampSheetResult = exports.UnlockIncrementalExchangeByUserIdResult = exports.IncrementalExchangeByStampSheetResult = exports.IncrementalExchangeByUserIdResult = exports.IncrementalExchangeResult = exports.ExchangeByStampSheetResult = exports.ExchangeByUserIdResult = exports.ExchangeResult = exports.DeleteIncrementalRateModelMasterResult = exports.UpdateIncrementalRateModelMasterResult = exports.GetIncrementalRateModelMasterResult = exports.CreateIncrementalRateModelMasterResult = exports.DescribeIncrementalRateModelMastersResult = exports.GetIncrementalRateModelResult = exports.DescribeIncrementalRateModelsResult = exports.DeleteRateModelMasterResult = exports.UpdateRateModelMasterResult = exports.GetRateModelMasterResult = exports.CreateRateModelMasterResult = exports.DescribeRateModelMastersResult = exports.GetRateModelResult = exports.DescribeRateModelsResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeNamespacesResult_1 = tslib_1.__importDefault(require("./DescribeNamespacesResult"));
exports.DescribeNamespacesResult = DescribeNamespacesResult_1.default;
var CreateNamespaceResult_1 = tslib_1.__importDefault(require("./CreateNamespaceResult"));
exports.CreateNamespaceResult = CreateNamespaceResult_1.default;
var GetNamespaceStatusResult_1 = tslib_1.__importDefault(require("./GetNamespaceStatusResult"));
exports.GetNamespaceStatusResult = GetNamespaceStatusResult_1.default;
var GetNamespaceResult_1 = tslib_1.__importDefault(require("./GetNamespaceResult"));
exports.GetNamespaceResult = GetNamespaceResult_1.default;
var UpdateNamespaceResult_1 = tslib_1.__importDefault(require("./UpdateNamespaceResult"));
exports.UpdateNamespaceResult = UpdateNamespaceResult_1.default;
var DeleteNamespaceResult_1 = tslib_1.__importDefault(require("./DeleteNamespaceResult"));
exports.DeleteNamespaceResult = DeleteNamespaceResult_1.default;
var DumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdResult"));
exports.DumpUserDataByUserIdResult = DumpUserDataByUserIdResult_1.default;
var CheckDumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdResult"));
exports.CheckDumpUserDataByUserIdResult = CheckDumpUserDataByUserIdResult_1.default;
var CleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdResult"));
exports.CleanUserDataByUserIdResult = CleanUserDataByUserIdResult_1.default;
var CheckCleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdResult"));
exports.CheckCleanUserDataByUserIdResult = CheckCleanUserDataByUserIdResult_1.default;
var DescribeRateModelsResult_1 = tslib_1.__importDefault(require("./DescribeRateModelsResult"));
exports.DescribeRateModelsResult = DescribeRateModelsResult_1.default;
var GetRateModelResult_1 = tslib_1.__importDefault(require("./GetRateModelResult"));
exports.GetRateModelResult = GetRateModelResult_1.default;
var DescribeRateModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeRateModelMastersResult"));
exports.DescribeRateModelMastersResult = DescribeRateModelMastersResult_1.default;
var CreateRateModelMasterResult_1 = tslib_1.__importDefault(require("./CreateRateModelMasterResult"));
exports.CreateRateModelMasterResult = CreateRateModelMasterResult_1.default;
var GetRateModelMasterResult_1 = tslib_1.__importDefault(require("./GetRateModelMasterResult"));
exports.GetRateModelMasterResult = GetRateModelMasterResult_1.default;
var UpdateRateModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateRateModelMasterResult"));
exports.UpdateRateModelMasterResult = UpdateRateModelMasterResult_1.default;
var DeleteRateModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteRateModelMasterResult"));
exports.DeleteRateModelMasterResult = DeleteRateModelMasterResult_1.default;
var DescribeIncrementalRateModelsResult_1 = tslib_1.__importDefault(require("./DescribeIncrementalRateModelsResult"));
exports.DescribeIncrementalRateModelsResult = DescribeIncrementalRateModelsResult_1.default;
var GetIncrementalRateModelResult_1 = tslib_1.__importDefault(require("./GetIncrementalRateModelResult"));
exports.GetIncrementalRateModelResult = GetIncrementalRateModelResult_1.default;
var DescribeIncrementalRateModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeIncrementalRateModelMastersResult"));
exports.DescribeIncrementalRateModelMastersResult = DescribeIncrementalRateModelMastersResult_1.default;
var CreateIncrementalRateModelMasterResult_1 = tslib_1.__importDefault(require("./CreateIncrementalRateModelMasterResult"));
exports.CreateIncrementalRateModelMasterResult = CreateIncrementalRateModelMasterResult_1.default;
var GetIncrementalRateModelMasterResult_1 = tslib_1.__importDefault(require("./GetIncrementalRateModelMasterResult"));
exports.GetIncrementalRateModelMasterResult = GetIncrementalRateModelMasterResult_1.default;
var UpdateIncrementalRateModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateIncrementalRateModelMasterResult"));
exports.UpdateIncrementalRateModelMasterResult = UpdateIncrementalRateModelMasterResult_1.default;
var DeleteIncrementalRateModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteIncrementalRateModelMasterResult"));
exports.DeleteIncrementalRateModelMasterResult = DeleteIncrementalRateModelMasterResult_1.default;
var ExchangeResult_1 = tslib_1.__importDefault(require("./ExchangeResult"));
exports.ExchangeResult = ExchangeResult_1.default;
var ExchangeByUserIdResult_1 = tslib_1.__importDefault(require("./ExchangeByUserIdResult"));
exports.ExchangeByUserIdResult = ExchangeByUserIdResult_1.default;
var ExchangeByStampSheetResult_1 = tslib_1.__importDefault(require("./ExchangeByStampSheetResult"));
exports.ExchangeByStampSheetResult = ExchangeByStampSheetResult_1.default;
var IncrementalExchangeResult_1 = tslib_1.__importDefault(require("./IncrementalExchangeResult"));
exports.IncrementalExchangeResult = IncrementalExchangeResult_1.default;
var IncrementalExchangeByUserIdResult_1 = tslib_1.__importDefault(require("./IncrementalExchangeByUserIdResult"));
exports.IncrementalExchangeByUserIdResult = IncrementalExchangeByUserIdResult_1.default;
var IncrementalExchangeByStampSheetResult_1 = tslib_1.__importDefault(require("./IncrementalExchangeByStampSheetResult"));
exports.IncrementalExchangeByStampSheetResult = IncrementalExchangeByStampSheetResult_1.default;
var UnlockIncrementalExchangeByUserIdResult_1 = tslib_1.__importDefault(require("./UnlockIncrementalExchangeByUserIdResult"));
exports.UnlockIncrementalExchangeByUserIdResult = UnlockIncrementalExchangeByUserIdResult_1.default;
var UnlockIncrementalExchangeByStampSheetResult_1 = tslib_1.__importDefault(require("./UnlockIncrementalExchangeByStampSheetResult"));
exports.UnlockIncrementalExchangeByStampSheetResult = UnlockIncrementalExchangeByStampSheetResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentRateMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentRateMasterResult"));
exports.GetCurrentRateMasterResult = GetCurrentRateMasterResult_1.default;
var UpdateCurrentRateMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRateMasterResult"));
exports.UpdateCurrentRateMasterResult = UpdateCurrentRateMasterResult_1.default;
var UpdateCurrentRateMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentRateMasterFromGitHubResult"));
exports.UpdateCurrentRateMasterFromGitHubResult = UpdateCurrentRateMasterFromGitHubResult_1.default;
var CreateAwaitByUserIdResult_1 = tslib_1.__importDefault(require("./CreateAwaitByUserIdResult"));
exports.CreateAwaitByUserIdResult = CreateAwaitByUserIdResult_1.default;
var DescribeAwaitsResult_1 = tslib_1.__importDefault(require("./DescribeAwaitsResult"));
exports.DescribeAwaitsResult = DescribeAwaitsResult_1.default;
var DescribeAwaitsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeAwaitsByUserIdResult"));
exports.DescribeAwaitsByUserIdResult = DescribeAwaitsByUserIdResult_1.default;
var GetAwaitResult_1 = tslib_1.__importDefault(require("./GetAwaitResult"));
exports.GetAwaitResult = GetAwaitResult_1.default;
var GetAwaitByUserIdResult_1 = tslib_1.__importDefault(require("./GetAwaitByUserIdResult"));
exports.GetAwaitByUserIdResult = GetAwaitByUserIdResult_1.default;
var AcquireResult_1 = tslib_1.__importDefault(require("./AcquireResult"));
exports.AcquireResult = AcquireResult_1.default;
var AcquireByUserIdResult_1 = tslib_1.__importDefault(require("./AcquireByUserIdResult"));
exports.AcquireByUserIdResult = AcquireByUserIdResult_1.default;
var AcquireForceByUserIdResult_1 = tslib_1.__importDefault(require("./AcquireForceByUserIdResult"));
exports.AcquireForceByUserIdResult = AcquireForceByUserIdResult_1.default;
var SkipResult_1 = tslib_1.__importDefault(require("./SkipResult"));
exports.SkipResult = SkipResult_1.default;
var SkipByUserIdResult_1 = tslib_1.__importDefault(require("./SkipByUserIdResult"));
exports.SkipByUserIdResult = SkipByUserIdResult_1.default;
var DeleteAwaitResult_1 = tslib_1.__importDefault(require("./DeleteAwaitResult"));
exports.DeleteAwaitResult = DeleteAwaitResult_1.default;
var DeleteAwaitByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteAwaitByUserIdResult"));
exports.DeleteAwaitByUserIdResult = DeleteAwaitByUserIdResult_1.default;
var CreateAwaitByStampSheetResult_1 = tslib_1.__importDefault(require("./CreateAwaitByStampSheetResult"));
exports.CreateAwaitByStampSheetResult = CreateAwaitByStampSheetResult_1.default;
var DeleteAwaitByStampTaskResult_1 = tslib_1.__importDefault(require("./DeleteAwaitByStampTaskResult"));
exports.DeleteAwaitByStampTaskResult = DeleteAwaitByStampTaskResult_1.default;
//# sourceMappingURL=index.js.map