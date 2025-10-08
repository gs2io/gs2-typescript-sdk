"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLimitModelResult = exports.DescribeLimitModelsResult = exports.UpdateCurrentLimitMasterFromGitHubResult = exports.UpdateCurrentLimitMasterResult = exports.PreUpdateCurrentLimitMasterResult = exports.GetCurrentLimitMasterResult = exports.ExportMasterResult = exports.DeleteLimitModelMasterResult = exports.UpdateLimitModelMasterResult = exports.GetLimitModelMasterResult = exports.CreateLimitModelMasterResult = exports.DescribeLimitModelMastersResult = exports.VerifyCounterByStampTaskResult = exports.DeleteByStampSheetResult = exports.CountDownByStampSheetResult = exports.CountUpByStampTaskResult = exports.VerifyCounterByUserIdResult = exports.VerifyCounterResult = exports.DeleteCounterByUserIdResult = exports.CountDownByUserIdResult = exports.CountUpByUserIdResult = exports.CountUpResult = exports.GetCounterByUserIdResult = exports.GetCounterResult = exports.DescribeCountersByUserIdResult = exports.DescribeCountersResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./DumpUserDataByUserIdResult"));
exports.DumpUserDataByUserIdResult = DumpUserDataByUserIdResult_1.default;
var CheckDumpUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckDumpUserDataByUserIdResult"));
exports.CheckDumpUserDataByUserIdResult = CheckDumpUserDataByUserIdResult_1.default;
var CleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CleanUserDataByUserIdResult"));
exports.CleanUserDataByUserIdResult = CleanUserDataByUserIdResult_1.default;
var CheckCleanUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckCleanUserDataByUserIdResult"));
exports.CheckCleanUserDataByUserIdResult = CheckCleanUserDataByUserIdResult_1.default;
var PrepareImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./PrepareImportUserDataByUserIdResult"));
exports.PrepareImportUserDataByUserIdResult = PrepareImportUserDataByUserIdResult_1.default;
var ImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./ImportUserDataByUserIdResult"));
exports.ImportUserDataByUserIdResult = ImportUserDataByUserIdResult_1.default;
var CheckImportUserDataByUserIdResult_1 = tslib_1.__importDefault(require("./CheckImportUserDataByUserIdResult"));
exports.CheckImportUserDataByUserIdResult = CheckImportUserDataByUserIdResult_1.default;
var DescribeCountersResult_1 = tslib_1.__importDefault(require("./DescribeCountersResult"));
exports.DescribeCountersResult = DescribeCountersResult_1.default;
var DescribeCountersByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeCountersByUserIdResult"));
exports.DescribeCountersByUserIdResult = DescribeCountersByUserIdResult_1.default;
var GetCounterResult_1 = tslib_1.__importDefault(require("./GetCounterResult"));
exports.GetCounterResult = GetCounterResult_1.default;
var GetCounterByUserIdResult_1 = tslib_1.__importDefault(require("./GetCounterByUserIdResult"));
exports.GetCounterByUserIdResult = GetCounterByUserIdResult_1.default;
var CountUpResult_1 = tslib_1.__importDefault(require("./CountUpResult"));
exports.CountUpResult = CountUpResult_1.default;
var CountUpByUserIdResult_1 = tslib_1.__importDefault(require("./CountUpByUserIdResult"));
exports.CountUpByUserIdResult = CountUpByUserIdResult_1.default;
var CountDownByUserIdResult_1 = tslib_1.__importDefault(require("./CountDownByUserIdResult"));
exports.CountDownByUserIdResult = CountDownByUserIdResult_1.default;
var DeleteCounterByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteCounterByUserIdResult"));
exports.DeleteCounterByUserIdResult = DeleteCounterByUserIdResult_1.default;
var VerifyCounterResult_1 = tslib_1.__importDefault(require("./VerifyCounterResult"));
exports.VerifyCounterResult = VerifyCounterResult_1.default;
var VerifyCounterByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyCounterByUserIdResult"));
exports.VerifyCounterByUserIdResult = VerifyCounterByUserIdResult_1.default;
var CountUpByStampTaskResult_1 = tslib_1.__importDefault(require("./CountUpByStampTaskResult"));
exports.CountUpByStampTaskResult = CountUpByStampTaskResult_1.default;
var CountDownByStampSheetResult_1 = tslib_1.__importDefault(require("./CountDownByStampSheetResult"));
exports.CountDownByStampSheetResult = CountDownByStampSheetResult_1.default;
var DeleteByStampSheetResult_1 = tslib_1.__importDefault(require("./DeleteByStampSheetResult"));
exports.DeleteByStampSheetResult = DeleteByStampSheetResult_1.default;
var VerifyCounterByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyCounterByStampTaskResult"));
exports.VerifyCounterByStampTaskResult = VerifyCounterByStampTaskResult_1.default;
var DescribeLimitModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeLimitModelMastersResult"));
exports.DescribeLimitModelMastersResult = DescribeLimitModelMastersResult_1.default;
var CreateLimitModelMasterResult_1 = tslib_1.__importDefault(require("./CreateLimitModelMasterResult"));
exports.CreateLimitModelMasterResult = CreateLimitModelMasterResult_1.default;
var GetLimitModelMasterResult_1 = tslib_1.__importDefault(require("./GetLimitModelMasterResult"));
exports.GetLimitModelMasterResult = GetLimitModelMasterResult_1.default;
var UpdateLimitModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateLimitModelMasterResult"));
exports.UpdateLimitModelMasterResult = UpdateLimitModelMasterResult_1.default;
var DeleteLimitModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteLimitModelMasterResult"));
exports.DeleteLimitModelMasterResult = DeleteLimitModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentLimitMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentLimitMasterResult"));
exports.GetCurrentLimitMasterResult = GetCurrentLimitMasterResult_1.default;
var PreUpdateCurrentLimitMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentLimitMasterResult"));
exports.PreUpdateCurrentLimitMasterResult = PreUpdateCurrentLimitMasterResult_1.default;
var UpdateCurrentLimitMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentLimitMasterResult"));
exports.UpdateCurrentLimitMasterResult = UpdateCurrentLimitMasterResult_1.default;
var UpdateCurrentLimitMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentLimitMasterFromGitHubResult"));
exports.UpdateCurrentLimitMasterFromGitHubResult = UpdateCurrentLimitMasterFromGitHubResult_1.default;
var DescribeLimitModelsResult_1 = tslib_1.__importDefault(require("./DescribeLimitModelsResult"));
exports.DescribeLimitModelsResult = DescribeLimitModelsResult_1.default;
var GetLimitModelResult_1 = tslib_1.__importDefault(require("./GetLimitModelResult"));
exports.GetLimitModelResult = GetLimitModelResult_1.default;
//# sourceMappingURL=index.js.map