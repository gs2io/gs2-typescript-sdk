"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransactionResultByUserIdResult = exports.GetTransactionResultResult = exports.RunTransactionResult = exports.GetStampSheetResultByUserIdResult = exports.GetStampSheetResultResult = exports.OrExpressionByStampTaskResult = exports.AndExpressionByStampTaskResult = exports.IfExpressionByStampTaskResult = exports.OrExpressionByUserIdResult = exports.AndExpressionByUserIdResult = exports.IfExpressionByUserIdResult = exports.BatchExecuteApiResult = exports.FreezeMasterDataByTimestampResult = exports.FreezeMasterDataBySignedTimestampResult = exports.SignFreezeMasterDataTimestampResult = exports.FreezeMasterDataByUserIdResult = exports.FreezeMasterDataResult = exports.SetTransactionDefaultConfigByUserIdResult = exports.SetTransactionDefaultConfigResult = exports.RunStampSheetExpressWithoutNamespaceResult = exports.RunStampSheetWithoutNamespaceResult = exports.RunStampTaskWithoutNamespaceResult = exports.RunVerifyTaskWithoutNamespaceResult = exports.RunStampSheetExpressResult = exports.RunStampSheetResult = exports.RunStampTaskResult = exports.RunVerifyTaskResult = exports.DistributeWithoutOverflowProcessResult = exports.DistributeResult = exports.UpdateCurrentDistributorMasterFromGitHubResult = exports.UpdateCurrentDistributorMasterResult = exports.PreUpdateCurrentDistributorMasterResult = exports.GetCurrentDistributorMasterResult = exports.ExportMasterResult = exports.GetDistributorModelResult = exports.DescribeDistributorModelsResult = exports.DeleteDistributorModelMasterResult = exports.UpdateDistributorModelMasterResult = exports.GetDistributorModelMasterResult = exports.CreateDistributorModelMasterResult = exports.DescribeDistributorModelMastersResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var GetServiceVersionResult_1 = tslib_1.__importDefault(require("./GetServiceVersionResult"));
exports.GetServiceVersionResult = GetServiceVersionResult_1.default;
var DescribeDistributorModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeDistributorModelMastersResult"));
exports.DescribeDistributorModelMastersResult = DescribeDistributorModelMastersResult_1.default;
var CreateDistributorModelMasterResult_1 = tslib_1.__importDefault(require("./CreateDistributorModelMasterResult"));
exports.CreateDistributorModelMasterResult = CreateDistributorModelMasterResult_1.default;
var GetDistributorModelMasterResult_1 = tslib_1.__importDefault(require("./GetDistributorModelMasterResult"));
exports.GetDistributorModelMasterResult = GetDistributorModelMasterResult_1.default;
var UpdateDistributorModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateDistributorModelMasterResult"));
exports.UpdateDistributorModelMasterResult = UpdateDistributorModelMasterResult_1.default;
var DeleteDistributorModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteDistributorModelMasterResult"));
exports.DeleteDistributorModelMasterResult = DeleteDistributorModelMasterResult_1.default;
var DescribeDistributorModelsResult_1 = tslib_1.__importDefault(require("./DescribeDistributorModelsResult"));
exports.DescribeDistributorModelsResult = DescribeDistributorModelsResult_1.default;
var GetDistributorModelResult_1 = tslib_1.__importDefault(require("./GetDistributorModelResult"));
exports.GetDistributorModelResult = GetDistributorModelResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentDistributorMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentDistributorMasterResult"));
exports.GetCurrentDistributorMasterResult = GetCurrentDistributorMasterResult_1.default;
var PreUpdateCurrentDistributorMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentDistributorMasterResult"));
exports.PreUpdateCurrentDistributorMasterResult = PreUpdateCurrentDistributorMasterResult_1.default;
var UpdateCurrentDistributorMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentDistributorMasterResult"));
exports.UpdateCurrentDistributorMasterResult = UpdateCurrentDistributorMasterResult_1.default;
var UpdateCurrentDistributorMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentDistributorMasterFromGitHubResult"));
exports.UpdateCurrentDistributorMasterFromGitHubResult = UpdateCurrentDistributorMasterFromGitHubResult_1.default;
var DistributeResult_1 = tslib_1.__importDefault(require("./DistributeResult"));
exports.DistributeResult = DistributeResult_1.default;
var DistributeWithoutOverflowProcessResult_1 = tslib_1.__importDefault(require("./DistributeWithoutOverflowProcessResult"));
exports.DistributeWithoutOverflowProcessResult = DistributeWithoutOverflowProcessResult_1.default;
var RunVerifyTaskResult_1 = tslib_1.__importDefault(require("./RunVerifyTaskResult"));
exports.RunVerifyTaskResult = RunVerifyTaskResult_1.default;
var RunStampTaskResult_1 = tslib_1.__importDefault(require("./RunStampTaskResult"));
exports.RunStampTaskResult = RunStampTaskResult_1.default;
var RunStampSheetResult_1 = tslib_1.__importDefault(require("./RunStampSheetResult"));
exports.RunStampSheetResult = RunStampSheetResult_1.default;
var RunStampSheetExpressResult_1 = tslib_1.__importDefault(require("./RunStampSheetExpressResult"));
exports.RunStampSheetExpressResult = RunStampSheetExpressResult_1.default;
var RunVerifyTaskWithoutNamespaceResult_1 = tslib_1.__importDefault(require("./RunVerifyTaskWithoutNamespaceResult"));
exports.RunVerifyTaskWithoutNamespaceResult = RunVerifyTaskWithoutNamespaceResult_1.default;
var RunStampTaskWithoutNamespaceResult_1 = tslib_1.__importDefault(require("./RunStampTaskWithoutNamespaceResult"));
exports.RunStampTaskWithoutNamespaceResult = RunStampTaskWithoutNamespaceResult_1.default;
var RunStampSheetWithoutNamespaceResult_1 = tslib_1.__importDefault(require("./RunStampSheetWithoutNamespaceResult"));
exports.RunStampSheetWithoutNamespaceResult = RunStampSheetWithoutNamespaceResult_1.default;
var RunStampSheetExpressWithoutNamespaceResult_1 = tslib_1.__importDefault(require("./RunStampSheetExpressWithoutNamespaceResult"));
exports.RunStampSheetExpressWithoutNamespaceResult = RunStampSheetExpressWithoutNamespaceResult_1.default;
var SetTransactionDefaultConfigResult_1 = tslib_1.__importDefault(require("./SetTransactionDefaultConfigResult"));
exports.SetTransactionDefaultConfigResult = SetTransactionDefaultConfigResult_1.default;
var SetTransactionDefaultConfigByUserIdResult_1 = tslib_1.__importDefault(require("./SetTransactionDefaultConfigByUserIdResult"));
exports.SetTransactionDefaultConfigByUserIdResult = SetTransactionDefaultConfigByUserIdResult_1.default;
var FreezeMasterDataResult_1 = tslib_1.__importDefault(require("./FreezeMasterDataResult"));
exports.FreezeMasterDataResult = FreezeMasterDataResult_1.default;
var FreezeMasterDataByUserIdResult_1 = tslib_1.__importDefault(require("./FreezeMasterDataByUserIdResult"));
exports.FreezeMasterDataByUserIdResult = FreezeMasterDataByUserIdResult_1.default;
var SignFreezeMasterDataTimestampResult_1 = tslib_1.__importDefault(require("./SignFreezeMasterDataTimestampResult"));
exports.SignFreezeMasterDataTimestampResult = SignFreezeMasterDataTimestampResult_1.default;
var FreezeMasterDataBySignedTimestampResult_1 = tslib_1.__importDefault(require("./FreezeMasterDataBySignedTimestampResult"));
exports.FreezeMasterDataBySignedTimestampResult = FreezeMasterDataBySignedTimestampResult_1.default;
var FreezeMasterDataByTimestampResult_1 = tslib_1.__importDefault(require("./FreezeMasterDataByTimestampResult"));
exports.FreezeMasterDataByTimestampResult = FreezeMasterDataByTimestampResult_1.default;
var BatchExecuteApiResult_1 = tslib_1.__importDefault(require("./BatchExecuteApiResult"));
exports.BatchExecuteApiResult = BatchExecuteApiResult_1.default;
var IfExpressionByUserIdResult_1 = tslib_1.__importDefault(require("./IfExpressionByUserIdResult"));
exports.IfExpressionByUserIdResult = IfExpressionByUserIdResult_1.default;
var AndExpressionByUserIdResult_1 = tslib_1.__importDefault(require("./AndExpressionByUserIdResult"));
exports.AndExpressionByUserIdResult = AndExpressionByUserIdResult_1.default;
var OrExpressionByUserIdResult_1 = tslib_1.__importDefault(require("./OrExpressionByUserIdResult"));
exports.OrExpressionByUserIdResult = OrExpressionByUserIdResult_1.default;
var IfExpressionByStampTaskResult_1 = tslib_1.__importDefault(require("./IfExpressionByStampTaskResult"));
exports.IfExpressionByStampTaskResult = IfExpressionByStampTaskResult_1.default;
var AndExpressionByStampTaskResult_1 = tslib_1.__importDefault(require("./AndExpressionByStampTaskResult"));
exports.AndExpressionByStampTaskResult = AndExpressionByStampTaskResult_1.default;
var OrExpressionByStampTaskResult_1 = tslib_1.__importDefault(require("./OrExpressionByStampTaskResult"));
exports.OrExpressionByStampTaskResult = OrExpressionByStampTaskResult_1.default;
var GetStampSheetResultResult_1 = tslib_1.__importDefault(require("./GetStampSheetResultResult"));
exports.GetStampSheetResultResult = GetStampSheetResultResult_1.default;
var GetStampSheetResultByUserIdResult_1 = tslib_1.__importDefault(require("./GetStampSheetResultByUserIdResult"));
exports.GetStampSheetResultByUserIdResult = GetStampSheetResultByUserIdResult_1.default;
var RunTransactionResult_1 = tslib_1.__importDefault(require("./RunTransactionResult"));
exports.RunTransactionResult = RunTransactionResult_1.default;
var GetTransactionResultResult_1 = tslib_1.__importDefault(require("./GetTransactionResultResult"));
exports.GetTransactionResultResult = GetTransactionResultResult_1.default;
var GetTransactionResultByUserIdResult_1 = tslib_1.__importDefault(require("./GetTransactionResultByUserIdResult"));
exports.GetTransactionResultByUserIdResult = GetTransactionResultByUserIdResult_1.default;
//# sourceMappingURL=index.js.map