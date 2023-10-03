"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrentEntryMasterFromGitHubResult = exports.UpdateCurrentEntryMasterResult = exports.GetCurrentEntryMasterResult = exports.ExportMasterResult = exports.VerifyEntryByStampTaskResult = exports.DeleteEntriesByStampTaskResult = exports.AddEntriesByStampSheetResult = exports.DeleteEntriesByUserIdResult = exports.VerifyEntryByUserIdResult = exports.VerifyEntryResult = exports.ResetByUserIdResult = exports.GetEntryWithSignatureByUserIdResult = exports.GetEntryWithSignatureResult = exports.GetEntryByUserIdResult = exports.GetEntryResult = exports.AddEntriesByUserIdResult = exports.DescribeEntriesByUserIdResult = exports.DescribeEntriesResult = exports.DeleteEntryModelMasterResult = exports.UpdateEntryModelMasterResult = exports.GetEntryModelMasterResult = exports.CreateEntryModelMasterResult = exports.DescribeEntryModelMastersResult = exports.GetEntryModelResult = exports.DescribeEntryModelsResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeEntryModelsResult_1 = tslib_1.__importDefault(require("./DescribeEntryModelsResult"));
exports.DescribeEntryModelsResult = DescribeEntryModelsResult_1.default;
var GetEntryModelResult_1 = tslib_1.__importDefault(require("./GetEntryModelResult"));
exports.GetEntryModelResult = GetEntryModelResult_1.default;
var DescribeEntryModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeEntryModelMastersResult"));
exports.DescribeEntryModelMastersResult = DescribeEntryModelMastersResult_1.default;
var CreateEntryModelMasterResult_1 = tslib_1.__importDefault(require("./CreateEntryModelMasterResult"));
exports.CreateEntryModelMasterResult = CreateEntryModelMasterResult_1.default;
var GetEntryModelMasterResult_1 = tslib_1.__importDefault(require("./GetEntryModelMasterResult"));
exports.GetEntryModelMasterResult = GetEntryModelMasterResult_1.default;
var UpdateEntryModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateEntryModelMasterResult"));
exports.UpdateEntryModelMasterResult = UpdateEntryModelMasterResult_1.default;
var DeleteEntryModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteEntryModelMasterResult"));
exports.DeleteEntryModelMasterResult = DeleteEntryModelMasterResult_1.default;
var DescribeEntriesResult_1 = tslib_1.__importDefault(require("./DescribeEntriesResult"));
exports.DescribeEntriesResult = DescribeEntriesResult_1.default;
var DescribeEntriesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeEntriesByUserIdResult"));
exports.DescribeEntriesByUserIdResult = DescribeEntriesByUserIdResult_1.default;
var AddEntriesByUserIdResult_1 = tslib_1.__importDefault(require("./AddEntriesByUserIdResult"));
exports.AddEntriesByUserIdResult = AddEntriesByUserIdResult_1.default;
var GetEntryResult_1 = tslib_1.__importDefault(require("./GetEntryResult"));
exports.GetEntryResult = GetEntryResult_1.default;
var GetEntryByUserIdResult_1 = tslib_1.__importDefault(require("./GetEntryByUserIdResult"));
exports.GetEntryByUserIdResult = GetEntryByUserIdResult_1.default;
var GetEntryWithSignatureResult_1 = tslib_1.__importDefault(require("./GetEntryWithSignatureResult"));
exports.GetEntryWithSignatureResult = GetEntryWithSignatureResult_1.default;
var GetEntryWithSignatureByUserIdResult_1 = tslib_1.__importDefault(require("./GetEntryWithSignatureByUserIdResult"));
exports.GetEntryWithSignatureByUserIdResult = GetEntryWithSignatureByUserIdResult_1.default;
var ResetByUserIdResult_1 = tslib_1.__importDefault(require("./ResetByUserIdResult"));
exports.ResetByUserIdResult = ResetByUserIdResult_1.default;
var VerifyEntryResult_1 = tslib_1.__importDefault(require("./VerifyEntryResult"));
exports.VerifyEntryResult = VerifyEntryResult_1.default;
var VerifyEntryByUserIdResult_1 = tslib_1.__importDefault(require("./VerifyEntryByUserIdResult"));
exports.VerifyEntryByUserIdResult = VerifyEntryByUserIdResult_1.default;
var DeleteEntriesByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteEntriesByUserIdResult"));
exports.DeleteEntriesByUserIdResult = DeleteEntriesByUserIdResult_1.default;
var AddEntriesByStampSheetResult_1 = tslib_1.__importDefault(require("./AddEntriesByStampSheetResult"));
exports.AddEntriesByStampSheetResult = AddEntriesByStampSheetResult_1.default;
var DeleteEntriesByStampTaskResult_1 = tslib_1.__importDefault(require("./DeleteEntriesByStampTaskResult"));
exports.DeleteEntriesByStampTaskResult = DeleteEntriesByStampTaskResult_1.default;
var VerifyEntryByStampTaskResult_1 = tslib_1.__importDefault(require("./VerifyEntryByStampTaskResult"));
exports.VerifyEntryByStampTaskResult = VerifyEntryByStampTaskResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentEntryMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentEntryMasterResult"));
exports.GetCurrentEntryMasterResult = GetCurrentEntryMasterResult_1.default;
var UpdateCurrentEntryMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentEntryMasterResult"));
exports.UpdateCurrentEntryMasterResult = UpdateCurrentEntryMasterResult_1.default;
var UpdateCurrentEntryMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentEntryMasterFromGitHubResult"));
exports.UpdateCurrentEntryMasterFromGitHubResult = UpdateCurrentEntryMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map