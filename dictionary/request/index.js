"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentEntryMasterRequest = exports.PreUpdateCurrentEntryMasterRequest = exports.GetCurrentEntryMasterRequest = exports.ExportMasterRequest = exports.DeleteLikesByUserIdRequest = exports.DeleteLikesRequest = exports.ResetLikesByUserIdRequest = exports.ResetLikesRequest = exports.GetLikeByUserIdRequest = exports.GetLikeRequest = exports.AddLikesByUserIdRequest = exports.AddLikesRequest = exports.DescribeLikesByUserIdRequest = exports.DescribeLikesRequest = exports.VerifyEntryByStampTaskRequest = exports.DeleteEntriesByStampTaskRequest = exports.AddEntriesByStampSheetRequest = exports.DeleteEntriesByUserIdRequest = exports.DeleteEntriesRequest = exports.VerifyEntryByUserIdRequest = exports.VerifyEntryRequest = exports.ResetByUserIdRequest = exports.GetEntryWithSignatureByUserIdRequest = exports.GetEntryWithSignatureRequest = exports.GetEntryByUserIdRequest = exports.GetEntryRequest = exports.AddEntriesByUserIdRequest = exports.DescribeEntriesByUserIdRequest = exports.DescribeEntriesRequest = exports.DeleteEntryModelMasterRequest = exports.UpdateEntryModelMasterRequest = exports.GetEntryModelMasterRequest = exports.CreateEntryModelMasterRequest = exports.DescribeEntryModelMastersRequest = exports.GetEntryModelRequest = exports.DescribeEntryModelsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.GetServiceVersionRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.UpdateCurrentEntryMasterFromGitHubRequest = void 0;
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
var GetServiceVersionRequest_1 = tslib_1.__importDefault(require("./GetServiceVersionRequest"));
exports.GetServiceVersionRequest = GetServiceVersionRequest_1.default;
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
var DescribeEntryModelsRequest_1 = tslib_1.__importDefault(require("./DescribeEntryModelsRequest"));
exports.DescribeEntryModelsRequest = DescribeEntryModelsRequest_1.default;
var GetEntryModelRequest_1 = tslib_1.__importDefault(require("./GetEntryModelRequest"));
exports.GetEntryModelRequest = GetEntryModelRequest_1.default;
var DescribeEntryModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeEntryModelMastersRequest"));
exports.DescribeEntryModelMastersRequest = DescribeEntryModelMastersRequest_1.default;
var CreateEntryModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateEntryModelMasterRequest"));
exports.CreateEntryModelMasterRequest = CreateEntryModelMasterRequest_1.default;
var GetEntryModelMasterRequest_1 = tslib_1.__importDefault(require("./GetEntryModelMasterRequest"));
exports.GetEntryModelMasterRequest = GetEntryModelMasterRequest_1.default;
var UpdateEntryModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateEntryModelMasterRequest"));
exports.UpdateEntryModelMasterRequest = UpdateEntryModelMasterRequest_1.default;
var DeleteEntryModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteEntryModelMasterRequest"));
exports.DeleteEntryModelMasterRequest = DeleteEntryModelMasterRequest_1.default;
var DescribeEntriesRequest_1 = tslib_1.__importDefault(require("./DescribeEntriesRequest"));
exports.DescribeEntriesRequest = DescribeEntriesRequest_1.default;
var DescribeEntriesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeEntriesByUserIdRequest"));
exports.DescribeEntriesByUserIdRequest = DescribeEntriesByUserIdRequest_1.default;
var AddEntriesByUserIdRequest_1 = tslib_1.__importDefault(require("./AddEntriesByUserIdRequest"));
exports.AddEntriesByUserIdRequest = AddEntriesByUserIdRequest_1.default;
var GetEntryRequest_1 = tslib_1.__importDefault(require("./GetEntryRequest"));
exports.GetEntryRequest = GetEntryRequest_1.default;
var GetEntryByUserIdRequest_1 = tslib_1.__importDefault(require("./GetEntryByUserIdRequest"));
exports.GetEntryByUserIdRequest = GetEntryByUserIdRequest_1.default;
var GetEntryWithSignatureRequest_1 = tslib_1.__importDefault(require("./GetEntryWithSignatureRequest"));
exports.GetEntryWithSignatureRequest = GetEntryWithSignatureRequest_1.default;
var GetEntryWithSignatureByUserIdRequest_1 = tslib_1.__importDefault(require("./GetEntryWithSignatureByUserIdRequest"));
exports.GetEntryWithSignatureByUserIdRequest = GetEntryWithSignatureByUserIdRequest_1.default;
var ResetByUserIdRequest_1 = tslib_1.__importDefault(require("./ResetByUserIdRequest"));
exports.ResetByUserIdRequest = ResetByUserIdRequest_1.default;
var VerifyEntryRequest_1 = tslib_1.__importDefault(require("./VerifyEntryRequest"));
exports.VerifyEntryRequest = VerifyEntryRequest_1.default;
var VerifyEntryByUserIdRequest_1 = tslib_1.__importDefault(require("./VerifyEntryByUserIdRequest"));
exports.VerifyEntryByUserIdRequest = VerifyEntryByUserIdRequest_1.default;
var DeleteEntriesRequest_1 = tslib_1.__importDefault(require("./DeleteEntriesRequest"));
exports.DeleteEntriesRequest = DeleteEntriesRequest_1.default;
var DeleteEntriesByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteEntriesByUserIdRequest"));
exports.DeleteEntriesByUserIdRequest = DeleteEntriesByUserIdRequest_1.default;
var AddEntriesByStampSheetRequest_1 = tslib_1.__importDefault(require("./AddEntriesByStampSheetRequest"));
exports.AddEntriesByStampSheetRequest = AddEntriesByStampSheetRequest_1.default;
var DeleteEntriesByStampTaskRequest_1 = tslib_1.__importDefault(require("./DeleteEntriesByStampTaskRequest"));
exports.DeleteEntriesByStampTaskRequest = DeleteEntriesByStampTaskRequest_1.default;
var VerifyEntryByStampTaskRequest_1 = tslib_1.__importDefault(require("./VerifyEntryByStampTaskRequest"));
exports.VerifyEntryByStampTaskRequest = VerifyEntryByStampTaskRequest_1.default;
var DescribeLikesRequest_1 = tslib_1.__importDefault(require("./DescribeLikesRequest"));
exports.DescribeLikesRequest = DescribeLikesRequest_1.default;
var DescribeLikesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeLikesByUserIdRequest"));
exports.DescribeLikesByUserIdRequest = DescribeLikesByUserIdRequest_1.default;
var AddLikesRequest_1 = tslib_1.__importDefault(require("./AddLikesRequest"));
exports.AddLikesRequest = AddLikesRequest_1.default;
var AddLikesByUserIdRequest_1 = tslib_1.__importDefault(require("./AddLikesByUserIdRequest"));
exports.AddLikesByUserIdRequest = AddLikesByUserIdRequest_1.default;
var GetLikeRequest_1 = tslib_1.__importDefault(require("./GetLikeRequest"));
exports.GetLikeRequest = GetLikeRequest_1.default;
var GetLikeByUserIdRequest_1 = tslib_1.__importDefault(require("./GetLikeByUserIdRequest"));
exports.GetLikeByUserIdRequest = GetLikeByUserIdRequest_1.default;
var ResetLikesRequest_1 = tslib_1.__importDefault(require("./ResetLikesRequest"));
exports.ResetLikesRequest = ResetLikesRequest_1.default;
var ResetLikesByUserIdRequest_1 = tslib_1.__importDefault(require("./ResetLikesByUserIdRequest"));
exports.ResetLikesByUserIdRequest = ResetLikesByUserIdRequest_1.default;
var DeleteLikesRequest_1 = tslib_1.__importDefault(require("./DeleteLikesRequest"));
exports.DeleteLikesRequest = DeleteLikesRequest_1.default;
var DeleteLikesByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteLikesByUserIdRequest"));
exports.DeleteLikesByUserIdRequest = DeleteLikesByUserIdRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentEntryMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentEntryMasterRequest"));
exports.GetCurrentEntryMasterRequest = GetCurrentEntryMasterRequest_1.default;
var PreUpdateCurrentEntryMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentEntryMasterRequest"));
exports.PreUpdateCurrentEntryMasterRequest = PreUpdateCurrentEntryMasterRequest_1.default;
var UpdateCurrentEntryMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentEntryMasterRequest"));
exports.UpdateCurrentEntryMasterRequest = UpdateCurrentEntryMasterRequest_1.default;
var UpdateCurrentEntryMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentEntryMasterFromGitHubRequest"));
exports.UpdateCurrentEntryMasterFromGitHubRequest = UpdateCurrentEntryMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map