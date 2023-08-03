"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRarityParameterStatusByStampSheetRequest = exports.SetRarityParameterStatusByUserIdRequest = exports.VerifyRarityParameterStatusByStampTaskRequest = exports.VerifyRarityParameterStatusByUserIdRequest = exports.VerifyRarityParameterStatusRequest = exports.AddRarityParameterStatusByStampSheetRequest = exports.AddRarityParameterStatusByUserIdRequest = exports.ReDrawRarityParameterStatusByStampSheetRequest = exports.ReDrawRarityParameterStatusByUserIdRequest = exports.DeleteRarityParameterStatusByUserIdRequest = exports.GetRarityParameterStatusByUserIdRequest = exports.GetRarityParameterStatusRequest = exports.DescribeRarityParameterStatusesByUserIdRequest = exports.DescribeRarityParameterStatusesRequest = exports.SetBalanceParameterStatusByStampSheetRequest = exports.SetBalanceParameterStatusByUserIdRequest = exports.ReDrawBalanceParameterStatusByStampSheetRequest = exports.ReDrawBalanceParameterStatusByUserIdRequest = exports.DeleteBalanceParameterStatusByUserIdRequest = exports.GetBalanceParameterStatusByUserIdRequest = exports.GetBalanceParameterStatusRequest = exports.DescribeBalanceParameterStatusesByUserIdRequest = exports.DescribeBalanceParameterStatusesRequest = exports.UpdateCurrentParameterMasterFromGitHubRequest = exports.UpdateCurrentParameterMasterRequest = exports.GetCurrentParameterMasterRequest = exports.ExportMasterRequest = exports.DeleteRarityParameterModelMasterRequest = exports.UpdateRarityParameterModelMasterRequest = exports.GetRarityParameterModelMasterRequest = exports.CreateRarityParameterModelMasterRequest = exports.DescribeRarityParameterModelMastersRequest = exports.GetRarityParameterModelRequest = exports.DescribeRarityParameterModelsRequest = exports.DeleteBalanceParameterModelMasterRequest = exports.UpdateBalanceParameterModelMasterRequest = exports.GetBalanceParameterModelMasterRequest = exports.CreateBalanceParameterModelMasterRequest = exports.DescribeBalanceParameterModelMastersRequest = exports.GetBalanceParameterModelRequest = exports.DescribeBalanceParameterModelsRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeBalanceParameterModelsRequest_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterModelsRequest"));
exports.DescribeBalanceParameterModelsRequest = DescribeBalanceParameterModelsRequest_1.default;
var GetBalanceParameterModelRequest_1 = tslib_1.__importDefault(require("./GetBalanceParameterModelRequest"));
exports.GetBalanceParameterModelRequest = GetBalanceParameterModelRequest_1.default;
var DescribeBalanceParameterModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterModelMastersRequest"));
exports.DescribeBalanceParameterModelMastersRequest = DescribeBalanceParameterModelMastersRequest_1.default;
var CreateBalanceParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateBalanceParameterModelMasterRequest"));
exports.CreateBalanceParameterModelMasterRequest = CreateBalanceParameterModelMasterRequest_1.default;
var GetBalanceParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./GetBalanceParameterModelMasterRequest"));
exports.GetBalanceParameterModelMasterRequest = GetBalanceParameterModelMasterRequest_1.default;
var UpdateBalanceParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateBalanceParameterModelMasterRequest"));
exports.UpdateBalanceParameterModelMasterRequest = UpdateBalanceParameterModelMasterRequest_1.default;
var DeleteBalanceParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteBalanceParameterModelMasterRequest"));
exports.DeleteBalanceParameterModelMasterRequest = DeleteBalanceParameterModelMasterRequest_1.default;
var DescribeRarityParameterModelsRequest_1 = tslib_1.__importDefault(require("./DescribeRarityParameterModelsRequest"));
exports.DescribeRarityParameterModelsRequest = DescribeRarityParameterModelsRequest_1.default;
var GetRarityParameterModelRequest_1 = tslib_1.__importDefault(require("./GetRarityParameterModelRequest"));
exports.GetRarityParameterModelRequest = GetRarityParameterModelRequest_1.default;
var DescribeRarityParameterModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeRarityParameterModelMastersRequest"));
exports.DescribeRarityParameterModelMastersRequest = DescribeRarityParameterModelMastersRequest_1.default;
var CreateRarityParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateRarityParameterModelMasterRequest"));
exports.CreateRarityParameterModelMasterRequest = CreateRarityParameterModelMasterRequest_1.default;
var GetRarityParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./GetRarityParameterModelMasterRequest"));
exports.GetRarityParameterModelMasterRequest = GetRarityParameterModelMasterRequest_1.default;
var UpdateRarityParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateRarityParameterModelMasterRequest"));
exports.UpdateRarityParameterModelMasterRequest = UpdateRarityParameterModelMasterRequest_1.default;
var DeleteRarityParameterModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteRarityParameterModelMasterRequest"));
exports.DeleteRarityParameterModelMasterRequest = DeleteRarityParameterModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentParameterMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentParameterMasterRequest"));
exports.GetCurrentParameterMasterRequest = GetCurrentParameterMasterRequest_1.default;
var UpdateCurrentParameterMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentParameterMasterRequest"));
exports.UpdateCurrentParameterMasterRequest = UpdateCurrentParameterMasterRequest_1.default;
var UpdateCurrentParameterMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentParameterMasterFromGitHubRequest"));
exports.UpdateCurrentParameterMasterFromGitHubRequest = UpdateCurrentParameterMasterFromGitHubRequest_1.default;
var DescribeBalanceParameterStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterStatusesRequest"));
exports.DescribeBalanceParameterStatusesRequest = DescribeBalanceParameterStatusesRequest_1.default;
var DescribeBalanceParameterStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeBalanceParameterStatusesByUserIdRequest"));
exports.DescribeBalanceParameterStatusesByUserIdRequest = DescribeBalanceParameterStatusesByUserIdRequest_1.default;
var GetBalanceParameterStatusRequest_1 = tslib_1.__importDefault(require("./GetBalanceParameterStatusRequest"));
exports.GetBalanceParameterStatusRequest = GetBalanceParameterStatusRequest_1.default;
var GetBalanceParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetBalanceParameterStatusByUserIdRequest"));
exports.GetBalanceParameterStatusByUserIdRequest = GetBalanceParameterStatusByUserIdRequest_1.default;
var DeleteBalanceParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteBalanceParameterStatusByUserIdRequest"));
exports.DeleteBalanceParameterStatusByUserIdRequest = DeleteBalanceParameterStatusByUserIdRequest_1.default;
var ReDrawBalanceParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./ReDrawBalanceParameterStatusByUserIdRequest"));
exports.ReDrawBalanceParameterStatusByUserIdRequest = ReDrawBalanceParameterStatusByUserIdRequest_1.default;
var ReDrawBalanceParameterStatusByStampSheetRequest_1 = tslib_1.__importDefault(require("./ReDrawBalanceParameterStatusByStampSheetRequest"));
exports.ReDrawBalanceParameterStatusByStampSheetRequest = ReDrawBalanceParameterStatusByStampSheetRequest_1.default;
var SetBalanceParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./SetBalanceParameterStatusByUserIdRequest"));
exports.SetBalanceParameterStatusByUserIdRequest = SetBalanceParameterStatusByUserIdRequest_1.default;
var SetBalanceParameterStatusByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetBalanceParameterStatusByStampSheetRequest"));
exports.SetBalanceParameterStatusByStampSheetRequest = SetBalanceParameterStatusByStampSheetRequest_1.default;
var DescribeRarityParameterStatusesRequest_1 = tslib_1.__importDefault(require("./DescribeRarityParameterStatusesRequest"));
exports.DescribeRarityParameterStatusesRequest = DescribeRarityParameterStatusesRequest_1.default;
var DescribeRarityParameterStatusesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeRarityParameterStatusesByUserIdRequest"));
exports.DescribeRarityParameterStatusesByUserIdRequest = DescribeRarityParameterStatusesByUserIdRequest_1.default;
var GetRarityParameterStatusRequest_1 = tslib_1.__importDefault(require("./GetRarityParameterStatusRequest"));
exports.GetRarityParameterStatusRequest = GetRarityParameterStatusRequest_1.default;
var GetRarityParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./GetRarityParameterStatusByUserIdRequest"));
exports.GetRarityParameterStatusByUserIdRequest = GetRarityParameterStatusByUserIdRequest_1.default;
var DeleteRarityParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteRarityParameterStatusByUserIdRequest"));
exports.DeleteRarityParameterStatusByUserIdRequest = DeleteRarityParameterStatusByUserIdRequest_1.default;
var ReDrawRarityParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./ReDrawRarityParameterStatusByUserIdRequest"));
exports.ReDrawRarityParameterStatusByUserIdRequest = ReDrawRarityParameterStatusByUserIdRequest_1.default;
var ReDrawRarityParameterStatusByStampSheetRequest_1 = tslib_1.__importDefault(require("./ReDrawRarityParameterStatusByStampSheetRequest"));
exports.ReDrawRarityParameterStatusByStampSheetRequest = ReDrawRarityParameterStatusByStampSheetRequest_1.default;
var AddRarityParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./AddRarityParameterStatusByUserIdRequest"));
exports.AddRarityParameterStatusByUserIdRequest = AddRarityParameterStatusByUserIdRequest_1.default;
var AddRarityParameterStatusByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddRarityParameterStatusByStampSheetRequest"));
exports.AddRarityParameterStatusByStampSheetRequest = AddRarityParameterStatusByStampSheetRequest_1.default;
var VerifyRarityParameterStatusRequest_1 = tslib_1.__importDefault(require("./VerifyRarityParameterStatusRequest"));
exports.VerifyRarityParameterStatusRequest = VerifyRarityParameterStatusRequest_1.default;
var VerifyRarityParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyRarityParameterStatusByUserIdRequest"));
exports.VerifyRarityParameterStatusByUserIdRequest = VerifyRarityParameterStatusByUserIdRequest_1.default;
var VerifyRarityParameterStatusByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyRarityParameterStatusByStampTaskRequest"));
exports.VerifyRarityParameterStatusByStampTaskRequest = VerifyRarityParameterStatusByStampTaskRequest_1.default;
var SetRarityParameterStatusByUserIdRequest_1 = tslib_1.__importDefault(require("./SetRarityParameterStatusByUserIdRequest"));
exports.SetRarityParameterStatusByUserIdRequest = SetRarityParameterStatusByUserIdRequest_1.default;
var SetRarityParameterStatusByStampSheetRequest_1 = tslib_1.__importDefault(require("./SetRarityParameterStatusByStampSheetRequest"));
exports.SetRarityParameterStatusByStampSheetRequest = SetRarityParameterStatusByStampSheetRequest_1.default;
//# sourceMappingURL=index.js.map