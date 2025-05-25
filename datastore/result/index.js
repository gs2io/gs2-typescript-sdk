"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataObjectHistoryByUserIdResult = exports.GetDataObjectHistoryResult = exports.DescribeDataObjectHistoriesByUserIdResult = exports.DescribeDataObjectHistoriesResult = exports.RestoreDataObjectResult = exports.PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult = exports.PrepareDownloadOwnDataByGenerationResult = exports.PrepareDownloadByUserIdAndDataObjectNameResult = exports.PrepareDownloadOwnDataResult = exports.PrepareDownloadByGenerationAndUserIdResult = exports.PrepareDownloadByGenerationResult = exports.PrepareDownloadByUserIdResult = exports.PrepareDownloadResult = exports.DeleteDataObjectByUserIdResult = exports.DeleteDataObjectResult = exports.DoneUploadByUserIdResult = exports.DoneUploadResult = exports.PrepareReUploadByUserIdResult = exports.PrepareReUploadResult = exports.UpdateDataObjectByUserIdResult = exports.UpdateDataObjectResult = exports.PrepareUploadByUserIdResult = exports.PrepareUploadResult = exports.DescribeDataObjectsByUserIdResult = exports.DescribeDataObjectsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeDataObjectsResult_1 = tslib_1.__importDefault(require("./DescribeDataObjectsResult"));
exports.DescribeDataObjectsResult = DescribeDataObjectsResult_1.default;
var DescribeDataObjectsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeDataObjectsByUserIdResult"));
exports.DescribeDataObjectsByUserIdResult = DescribeDataObjectsByUserIdResult_1.default;
var PrepareUploadResult_1 = tslib_1.__importDefault(require("./PrepareUploadResult"));
exports.PrepareUploadResult = PrepareUploadResult_1.default;
var PrepareUploadByUserIdResult_1 = tslib_1.__importDefault(require("./PrepareUploadByUserIdResult"));
exports.PrepareUploadByUserIdResult = PrepareUploadByUserIdResult_1.default;
var UpdateDataObjectResult_1 = tslib_1.__importDefault(require("./UpdateDataObjectResult"));
exports.UpdateDataObjectResult = UpdateDataObjectResult_1.default;
var UpdateDataObjectByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateDataObjectByUserIdResult"));
exports.UpdateDataObjectByUserIdResult = UpdateDataObjectByUserIdResult_1.default;
var PrepareReUploadResult_1 = tslib_1.__importDefault(require("./PrepareReUploadResult"));
exports.PrepareReUploadResult = PrepareReUploadResult_1.default;
var PrepareReUploadByUserIdResult_1 = tslib_1.__importDefault(require("./PrepareReUploadByUserIdResult"));
exports.PrepareReUploadByUserIdResult = PrepareReUploadByUserIdResult_1.default;
var DoneUploadResult_1 = tslib_1.__importDefault(require("./DoneUploadResult"));
exports.DoneUploadResult = DoneUploadResult_1.default;
var DoneUploadByUserIdResult_1 = tslib_1.__importDefault(require("./DoneUploadByUserIdResult"));
exports.DoneUploadByUserIdResult = DoneUploadByUserIdResult_1.default;
var DeleteDataObjectResult_1 = tslib_1.__importDefault(require("./DeleteDataObjectResult"));
exports.DeleteDataObjectResult = DeleteDataObjectResult_1.default;
var DeleteDataObjectByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteDataObjectByUserIdResult"));
exports.DeleteDataObjectByUserIdResult = DeleteDataObjectByUserIdResult_1.default;
var PrepareDownloadResult_1 = tslib_1.__importDefault(require("./PrepareDownloadResult"));
exports.PrepareDownloadResult = PrepareDownloadResult_1.default;
var PrepareDownloadByUserIdResult_1 = tslib_1.__importDefault(require("./PrepareDownloadByUserIdResult"));
exports.PrepareDownloadByUserIdResult = PrepareDownloadByUserIdResult_1.default;
var PrepareDownloadByGenerationResult_1 = tslib_1.__importDefault(require("./PrepareDownloadByGenerationResult"));
exports.PrepareDownloadByGenerationResult = PrepareDownloadByGenerationResult_1.default;
var PrepareDownloadByGenerationAndUserIdResult_1 = tslib_1.__importDefault(require("./PrepareDownloadByGenerationAndUserIdResult"));
exports.PrepareDownloadByGenerationAndUserIdResult = PrepareDownloadByGenerationAndUserIdResult_1.default;
var PrepareDownloadOwnDataResult_1 = tslib_1.__importDefault(require("./PrepareDownloadOwnDataResult"));
exports.PrepareDownloadOwnDataResult = PrepareDownloadOwnDataResult_1.default;
var PrepareDownloadByUserIdAndDataObjectNameResult_1 = tslib_1.__importDefault(require("./PrepareDownloadByUserIdAndDataObjectNameResult"));
exports.PrepareDownloadByUserIdAndDataObjectNameResult = PrepareDownloadByUserIdAndDataObjectNameResult_1.default;
var PrepareDownloadOwnDataByGenerationResult_1 = tslib_1.__importDefault(require("./PrepareDownloadOwnDataByGenerationResult"));
exports.PrepareDownloadOwnDataByGenerationResult = PrepareDownloadOwnDataByGenerationResult_1.default;
var PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult_1 = tslib_1.__importDefault(require("./PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult"));
exports.PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult = PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult_1.default;
var RestoreDataObjectResult_1 = tslib_1.__importDefault(require("./RestoreDataObjectResult"));
exports.RestoreDataObjectResult = RestoreDataObjectResult_1.default;
var DescribeDataObjectHistoriesResult_1 = tslib_1.__importDefault(require("./DescribeDataObjectHistoriesResult"));
exports.DescribeDataObjectHistoriesResult = DescribeDataObjectHistoriesResult_1.default;
var DescribeDataObjectHistoriesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeDataObjectHistoriesByUserIdResult"));
exports.DescribeDataObjectHistoriesByUserIdResult = DescribeDataObjectHistoriesByUserIdResult_1.default;
var GetDataObjectHistoryResult_1 = tslib_1.__importDefault(require("./GetDataObjectHistoryResult"));
exports.GetDataObjectHistoryResult = GetDataObjectHistoryResult_1.default;
var GetDataObjectHistoryByUserIdResult_1 = tslib_1.__importDefault(require("./GetDataObjectHistoryByUserIdResult"));
exports.GetDataObjectHistoryByUserIdResult = GetDataObjectHistoryByUserIdResult_1.default;
//# sourceMappingURL=index.js.map