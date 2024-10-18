"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStampSheetResultByUserIdRequest = exports.GetStampSheetResultRequest = exports.OrExpressionByStampTaskRequest = exports.AndExpressionByStampTaskRequest = exports.IfExpressionByStampTaskRequest = exports.OrExpressionByUserIdRequest = exports.AndExpressionByUserIdRequest = exports.IfExpressionByUserIdRequest = exports.FreezeMasterDataByUserIdRequest = exports.FreezeMasterDataRequest = exports.SetTransactionDefaultConfigByUserIdRequest = exports.SetTransactionDefaultConfigRequest = exports.RunStampSheetExpressWithoutNamespaceRequest = exports.RunStampSheetWithoutNamespaceRequest = exports.RunStampTaskWithoutNamespaceRequest = exports.RunVerifyTaskWithoutNamespaceRequest = exports.RunStampSheetExpressRequest = exports.RunStampSheetRequest = exports.RunStampTaskRequest = exports.RunVerifyTaskRequest = exports.DistributeWithoutOverflowProcessRequest = exports.DistributeRequest = exports.UpdateCurrentDistributorMasterFromGitHubRequest = exports.UpdateCurrentDistributorMasterRequest = exports.GetCurrentDistributorMasterRequest = exports.ExportMasterRequest = exports.GetDistributorModelRequest = exports.DescribeDistributorModelsRequest = exports.DeleteDistributorModelMasterRequest = exports.UpdateDistributorModelMasterRequest = exports.GetDistributorModelMasterRequest = exports.CreateDistributorModelMasterRequest = exports.DescribeDistributorModelMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeDistributorModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeDistributorModelMastersRequest"));
exports.DescribeDistributorModelMastersRequest = DescribeDistributorModelMastersRequest_1.default;
var CreateDistributorModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateDistributorModelMasterRequest"));
exports.CreateDistributorModelMasterRequest = CreateDistributorModelMasterRequest_1.default;
var GetDistributorModelMasterRequest_1 = tslib_1.__importDefault(require("./GetDistributorModelMasterRequest"));
exports.GetDistributorModelMasterRequest = GetDistributorModelMasterRequest_1.default;
var UpdateDistributorModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateDistributorModelMasterRequest"));
exports.UpdateDistributorModelMasterRequest = UpdateDistributorModelMasterRequest_1.default;
var DeleteDistributorModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteDistributorModelMasterRequest"));
exports.DeleteDistributorModelMasterRequest = DeleteDistributorModelMasterRequest_1.default;
var DescribeDistributorModelsRequest_1 = tslib_1.__importDefault(require("./DescribeDistributorModelsRequest"));
exports.DescribeDistributorModelsRequest = DescribeDistributorModelsRequest_1.default;
var GetDistributorModelRequest_1 = tslib_1.__importDefault(require("./GetDistributorModelRequest"));
exports.GetDistributorModelRequest = GetDistributorModelRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentDistributorMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentDistributorMasterRequest"));
exports.GetCurrentDistributorMasterRequest = GetCurrentDistributorMasterRequest_1.default;
var UpdateCurrentDistributorMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentDistributorMasterRequest"));
exports.UpdateCurrentDistributorMasterRequest = UpdateCurrentDistributorMasterRequest_1.default;
var UpdateCurrentDistributorMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentDistributorMasterFromGitHubRequest"));
exports.UpdateCurrentDistributorMasterFromGitHubRequest = UpdateCurrentDistributorMasterFromGitHubRequest_1.default;
var DistributeRequest_1 = tslib_1.__importDefault(require("./DistributeRequest"));
exports.DistributeRequest = DistributeRequest_1.default;
var DistributeWithoutOverflowProcessRequest_1 = tslib_1.__importDefault(require("./DistributeWithoutOverflowProcessRequest"));
exports.DistributeWithoutOverflowProcessRequest = DistributeWithoutOverflowProcessRequest_1.default;
var RunVerifyTaskRequest_1 = tslib_1.__importDefault(require("./RunVerifyTaskRequest"));
exports.RunVerifyTaskRequest = RunVerifyTaskRequest_1.default;
var RunStampTaskRequest_1 = tslib_1.__importDefault(require("./RunStampTaskRequest"));
exports.RunStampTaskRequest = RunStampTaskRequest_1.default;
var RunStampSheetRequest_1 = tslib_1.__importDefault(require("./RunStampSheetRequest"));
exports.RunStampSheetRequest = RunStampSheetRequest_1.default;
var RunStampSheetExpressRequest_1 = tslib_1.__importDefault(require("./RunStampSheetExpressRequest"));
exports.RunStampSheetExpressRequest = RunStampSheetExpressRequest_1.default;
var RunVerifyTaskWithoutNamespaceRequest_1 = tslib_1.__importDefault(require("./RunVerifyTaskWithoutNamespaceRequest"));
exports.RunVerifyTaskWithoutNamespaceRequest = RunVerifyTaskWithoutNamespaceRequest_1.default;
var RunStampTaskWithoutNamespaceRequest_1 = tslib_1.__importDefault(require("./RunStampTaskWithoutNamespaceRequest"));
exports.RunStampTaskWithoutNamespaceRequest = RunStampTaskWithoutNamespaceRequest_1.default;
var RunStampSheetWithoutNamespaceRequest_1 = tslib_1.__importDefault(require("./RunStampSheetWithoutNamespaceRequest"));
exports.RunStampSheetWithoutNamespaceRequest = RunStampSheetWithoutNamespaceRequest_1.default;
var RunStampSheetExpressWithoutNamespaceRequest_1 = tslib_1.__importDefault(require("./RunStampSheetExpressWithoutNamespaceRequest"));
exports.RunStampSheetExpressWithoutNamespaceRequest = RunStampSheetExpressWithoutNamespaceRequest_1.default;
var SetTransactionDefaultConfigRequest_1 = tslib_1.__importDefault(require("./SetTransactionDefaultConfigRequest"));
exports.SetTransactionDefaultConfigRequest = SetTransactionDefaultConfigRequest_1.default;
var SetTransactionDefaultConfigByUserIdRequest_1 = tslib_1.__importDefault(require("./SetTransactionDefaultConfigByUserIdRequest"));
exports.SetTransactionDefaultConfigByUserIdRequest = SetTransactionDefaultConfigByUserIdRequest_1.default;
var FreezeMasterDataRequest_1 = tslib_1.__importDefault(require("./FreezeMasterDataRequest"));
exports.FreezeMasterDataRequest = FreezeMasterDataRequest_1.default;
var FreezeMasterDataByUserIdRequest_1 = tslib_1.__importDefault(require("./FreezeMasterDataByUserIdRequest"));
exports.FreezeMasterDataByUserIdRequest = FreezeMasterDataByUserIdRequest_1.default;
var IfExpressionByUserIdRequest_1 = tslib_1.__importDefault(require("./IfExpressionByUserIdRequest"));
exports.IfExpressionByUserIdRequest = IfExpressionByUserIdRequest_1.default;
var AndExpressionByUserIdRequest_1 = tslib_1.__importDefault(require("./AndExpressionByUserIdRequest"));
exports.AndExpressionByUserIdRequest = AndExpressionByUserIdRequest_1.default;
var OrExpressionByUserIdRequest_1 = tslib_1.__importDefault(require("./OrExpressionByUserIdRequest"));
exports.OrExpressionByUserIdRequest = OrExpressionByUserIdRequest_1.default;
var IfExpressionByStampTaskRequest_1 = tslib_1.__importDefault(require("./IfExpressionByStampTaskRequest"));
exports.IfExpressionByStampTaskRequest = IfExpressionByStampTaskRequest_1.default;
var AndExpressionByStampTaskRequest_1 = tslib_1.__importDefault(require("./AndExpressionByStampTaskRequest"));
exports.AndExpressionByStampTaskRequest = AndExpressionByStampTaskRequest_1.default;
var OrExpressionByStampTaskRequest_1 = tslib_1.__importDefault(require("./OrExpressionByStampTaskRequest"));
exports.OrExpressionByStampTaskRequest = OrExpressionByStampTaskRequest_1.default;
var GetStampSheetResultRequest_1 = tslib_1.__importDefault(require("./GetStampSheetResultRequest"));
exports.GetStampSheetResultRequest = GetStampSheetResultRequest_1.default;
var GetStampSheetResultByUserIdRequest_1 = tslib_1.__importDefault(require("./GetStampSheetResultByUserIdRequest"));
exports.GetStampSheetResultByUserIdRequest = GetStampSheetResultByUserIdRequest_1.default;
//# sourceMappingURL=index.js.map