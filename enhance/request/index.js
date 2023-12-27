"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentRateMasterFromGitHubRequest = exports.UpdateCurrentRateMasterRequest = exports.GetCurrentRateMasterRequest = exports.ExportMasterRequest = exports.DeleteProgressByStampTaskRequest = exports.CreateProgressByStampSheetRequest = exports.DeleteProgressByUserIdRequest = exports.DeleteProgressRequest = exports.EndByUserIdRequest = exports.EndRequest = exports.StartByUserIdRequest = exports.StartRequest = exports.GetProgressByUserIdRequest = exports.GetProgressRequest = exports.CreateProgressByUserIdRequest = exports.UnleashByStampSheetRequest = exports.UnleashByUserIdRequest = exports.UnleashRequest = exports.DirectEnhanceByStampSheetRequest = exports.DirectEnhanceByUserIdRequest = exports.DirectEnhanceRequest = exports.DeleteUnleashRateModelMasterRequest = exports.UpdateUnleashRateModelMasterRequest = exports.GetUnleashRateModelMasterRequest = exports.CreateUnleashRateModelMasterRequest = exports.DescribeUnleashRateModelMastersRequest = exports.GetUnleashRateModelRequest = exports.DescribeUnleashRateModelsRequest = exports.DeleteRateModelMasterRequest = exports.UpdateRateModelMasterRequest = exports.GetRateModelMasterRequest = exports.CreateRateModelMasterRequest = exports.DescribeRateModelMastersRequest = exports.GetRateModelRequest = exports.DescribeRateModelsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeUnleashRateModelsRequest_1 = tslib_1.__importDefault(require("./DescribeUnleashRateModelsRequest"));
exports.DescribeUnleashRateModelsRequest = DescribeUnleashRateModelsRequest_1.default;
var GetUnleashRateModelRequest_1 = tslib_1.__importDefault(require("./GetUnleashRateModelRequest"));
exports.GetUnleashRateModelRequest = GetUnleashRateModelRequest_1.default;
var DescribeUnleashRateModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeUnleashRateModelMastersRequest"));
exports.DescribeUnleashRateModelMastersRequest = DescribeUnleashRateModelMastersRequest_1.default;
var CreateUnleashRateModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateUnleashRateModelMasterRequest"));
exports.CreateUnleashRateModelMasterRequest = CreateUnleashRateModelMasterRequest_1.default;
var GetUnleashRateModelMasterRequest_1 = tslib_1.__importDefault(require("./GetUnleashRateModelMasterRequest"));
exports.GetUnleashRateModelMasterRequest = GetUnleashRateModelMasterRequest_1.default;
var UpdateUnleashRateModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateUnleashRateModelMasterRequest"));
exports.UpdateUnleashRateModelMasterRequest = UpdateUnleashRateModelMasterRequest_1.default;
var DeleteUnleashRateModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteUnleashRateModelMasterRequest"));
exports.DeleteUnleashRateModelMasterRequest = DeleteUnleashRateModelMasterRequest_1.default;
var DirectEnhanceRequest_1 = tslib_1.__importDefault(require("./DirectEnhanceRequest"));
exports.DirectEnhanceRequest = DirectEnhanceRequest_1.default;
var DirectEnhanceByUserIdRequest_1 = tslib_1.__importDefault(require("./DirectEnhanceByUserIdRequest"));
exports.DirectEnhanceByUserIdRequest = DirectEnhanceByUserIdRequest_1.default;
var DirectEnhanceByStampSheetRequest_1 = tslib_1.__importDefault(require("./DirectEnhanceByStampSheetRequest"));
exports.DirectEnhanceByStampSheetRequest = DirectEnhanceByStampSheetRequest_1.default;
var UnleashRequest_1 = tslib_1.__importDefault(require("./UnleashRequest"));
exports.UnleashRequest = UnleashRequest_1.default;
var UnleashByUserIdRequest_1 = tslib_1.__importDefault(require("./UnleashByUserIdRequest"));
exports.UnleashByUserIdRequest = UnleashByUserIdRequest_1.default;
var UnleashByStampSheetRequest_1 = tslib_1.__importDefault(require("./UnleashByStampSheetRequest"));
exports.UnleashByStampSheetRequest = UnleashByStampSheetRequest_1.default;
var CreateProgressByUserIdRequest_1 = tslib_1.__importDefault(require("./CreateProgressByUserIdRequest"));
exports.CreateProgressByUserIdRequest = CreateProgressByUserIdRequest_1.default;
var GetProgressRequest_1 = tslib_1.__importDefault(require("./GetProgressRequest"));
exports.GetProgressRequest = GetProgressRequest_1.default;
var GetProgressByUserIdRequest_1 = tslib_1.__importDefault(require("./GetProgressByUserIdRequest"));
exports.GetProgressByUserIdRequest = GetProgressByUserIdRequest_1.default;
var StartRequest_1 = tslib_1.__importDefault(require("./StartRequest"));
exports.StartRequest = StartRequest_1.default;
var StartByUserIdRequest_1 = tslib_1.__importDefault(require("./StartByUserIdRequest"));
exports.StartByUserIdRequest = StartByUserIdRequest_1.default;
var EndRequest_1 = tslib_1.__importDefault(require("./EndRequest"));
exports.EndRequest = EndRequest_1.default;
var EndByUserIdRequest_1 = tslib_1.__importDefault(require("./EndByUserIdRequest"));
exports.EndByUserIdRequest = EndByUserIdRequest_1.default;
var DeleteProgressRequest_1 = tslib_1.__importDefault(require("./DeleteProgressRequest"));
exports.DeleteProgressRequest = DeleteProgressRequest_1.default;
var DeleteProgressByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteProgressByUserIdRequest"));
exports.DeleteProgressByUserIdRequest = DeleteProgressByUserIdRequest_1.default;
var CreateProgressByStampSheetRequest_1 = tslib_1.__importDefault(require("./CreateProgressByStampSheetRequest"));
exports.CreateProgressByStampSheetRequest = CreateProgressByStampSheetRequest_1.default;
var DeleteProgressByStampTaskRequest_1 = tslib_1.__importDefault(require("./DeleteProgressByStampTaskRequest"));
exports.DeleteProgressByStampTaskRequest = DeleteProgressByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentRateMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentRateMasterRequest"));
exports.GetCurrentRateMasterRequest = GetCurrentRateMasterRequest_1.default;
var UpdateCurrentRateMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRateMasterRequest"));
exports.UpdateCurrentRateMasterRequest = UpdateCurrentRateMasterRequest_1.default;
var UpdateCurrentRateMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentRateMasterFromGitHubRequest"));
exports.UpdateCurrentRateMasterFromGitHubRequest = UpdateCurrentRateMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map