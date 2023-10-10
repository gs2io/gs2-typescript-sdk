"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLimitModelRequest = exports.DescribeLimitModelsRequest = exports.UpdateCurrentLimitMasterFromGitHubRequest = exports.UpdateCurrentLimitMasterRequest = exports.GetCurrentLimitMasterRequest = exports.ExportMasterRequest = exports.DeleteLimitModelMasterRequest = exports.UpdateLimitModelMasterRequest = exports.GetLimitModelMasterRequest = exports.CreateLimitModelMasterRequest = exports.DescribeLimitModelMastersRequest = exports.VerifyCounterByStampTaskRequest = exports.DeleteByStampSheetRequest = exports.CountDownByStampSheetRequest = exports.CountUpByStampTaskRequest = exports.VerifyCounterByUserIdRequest = exports.VerifyCounterRequest = exports.DeleteCounterByUserIdRequest = exports.CountDownByUserIdRequest = exports.CountUpByUserIdRequest = exports.CountUpRequest = exports.GetCounterByUserIdRequest = exports.GetCounterRequest = exports.DescribeCountersByUserIdRequest = exports.DescribeCountersRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeCountersRequest_1 = tslib_1.__importDefault(require("./DescribeCountersRequest"));
exports.DescribeCountersRequest = DescribeCountersRequest_1.default;
var DescribeCountersByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeCountersByUserIdRequest"));
exports.DescribeCountersByUserIdRequest = DescribeCountersByUserIdRequest_1.default;
var GetCounterRequest_1 = tslib_1.__importDefault(require("./GetCounterRequest"));
exports.GetCounterRequest = GetCounterRequest_1.default;
var GetCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./GetCounterByUserIdRequest"));
exports.GetCounterByUserIdRequest = GetCounterByUserIdRequest_1.default;
var CountUpRequest_1 = tslib_1.__importDefault(require("./CountUpRequest"));
exports.CountUpRequest = CountUpRequest_1.default;
var CountUpByUserIdRequest_1 = tslib_1.__importDefault(require("./CountUpByUserIdRequest"));
exports.CountUpByUserIdRequest = CountUpByUserIdRequest_1.default;
var CountDownByUserIdRequest_1 = tslib_1.__importDefault(require("./CountDownByUserIdRequest"));
exports.CountDownByUserIdRequest = CountDownByUserIdRequest_1.default;
var DeleteCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteCounterByUserIdRequest"));
exports.DeleteCounterByUserIdRequest = DeleteCounterByUserIdRequest_1.default;
var VerifyCounterRequest_1 = tslib_1.__importDefault(require("./VerifyCounterRequest"));
exports.VerifyCounterRequest = VerifyCounterRequest_1.default;
var VerifyCounterByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyCounterByUserIdRequest"));
exports.VerifyCounterByUserIdRequest = VerifyCounterByUserIdRequest_1.default;
var CountUpByStampTaskRequest_1 = tslib_1.__importDefault(require("./CountUpByStampTaskRequest"));
exports.CountUpByStampTaskRequest = CountUpByStampTaskRequest_1.default;
var CountDownByStampSheetRequest_1 = tslib_1.__importDefault(require("./CountDownByStampSheetRequest"));
exports.CountDownByStampSheetRequest = CountDownByStampSheetRequest_1.default;
var DeleteByStampSheetRequest_1 = tslib_1.__importDefault(require("./DeleteByStampSheetRequest"));
exports.DeleteByStampSheetRequest = DeleteByStampSheetRequest_1.default;
var VerifyCounterByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyCounterByStampTaskRequest"));
exports.VerifyCounterByStampTaskRequest = VerifyCounterByStampTaskRequest_1.default;
var DescribeLimitModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeLimitModelMastersRequest"));
exports.DescribeLimitModelMastersRequest = DescribeLimitModelMastersRequest_1.default;
var CreateLimitModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateLimitModelMasterRequest"));
exports.CreateLimitModelMasterRequest = CreateLimitModelMasterRequest_1.default;
var GetLimitModelMasterRequest_1 = tslib_1.__importDefault(require("./GetLimitModelMasterRequest"));
exports.GetLimitModelMasterRequest = GetLimitModelMasterRequest_1.default;
var UpdateLimitModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateLimitModelMasterRequest"));
exports.UpdateLimitModelMasterRequest = UpdateLimitModelMasterRequest_1.default;
var DeleteLimitModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteLimitModelMasterRequest"));
exports.DeleteLimitModelMasterRequest = DeleteLimitModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentLimitMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentLimitMasterRequest"));
exports.GetCurrentLimitMasterRequest = GetCurrentLimitMasterRequest_1.default;
var UpdateCurrentLimitMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentLimitMasterRequest"));
exports.UpdateCurrentLimitMasterRequest = UpdateCurrentLimitMasterRequest_1.default;
var UpdateCurrentLimitMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentLimitMasterFromGitHubRequest"));
exports.UpdateCurrentLimitMasterFromGitHubRequest = UpdateCurrentLimitMasterFromGitHubRequest_1.default;
var DescribeLimitModelsRequest_1 = tslib_1.__importDefault(require("./DescribeLimitModelsRequest"));
exports.DescribeLimitModelsRequest = DescribeLimitModelsRequest_1.default;
var GetLimitModelRequest_1 = tslib_1.__importDefault(require("./GetLimitModelRequest"));
exports.GetLimitModelRequest = GetLimitModelRequest_1.default;
//# sourceMappingURL=index.js.map