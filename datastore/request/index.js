"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataObjectHistoryByUserIdRequest = exports.GetDataObjectHistoryRequest = exports.DescribeDataObjectHistoriesByUserIdRequest = exports.DescribeDataObjectHistoriesRequest = exports.RestoreDataObjectRequest = exports.PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest = exports.PrepareDownloadOwnDataByGenerationRequest = exports.PrepareDownloadByUserIdAndDataObjectNameRequest = exports.PrepareDownloadOwnDataRequest = exports.PrepareDownloadByGenerationAndUserIdRequest = exports.PrepareDownloadByGenerationRequest = exports.PrepareDownloadByUserIdRequest = exports.PrepareDownloadRequest = exports.DeleteDataObjectByUserIdRequest = exports.DeleteDataObjectRequest = exports.DoneUploadByUserIdRequest = exports.DoneUploadRequest = exports.PrepareReUploadByUserIdRequest = exports.PrepareReUploadRequest = exports.UpdateDataObjectByUserIdRequest = exports.UpdateDataObjectRequest = exports.PrepareUploadByUserIdRequest = exports.PrepareUploadRequest = exports.DescribeDataObjectsByUserIdRequest = exports.DescribeDataObjectsRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeNamespacesRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeNamespacesRequest"));
exports.DescribeNamespacesRequest = DescribeNamespacesRequest_1.default;
var CreateNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./CreateNamespaceRequest"));
exports.CreateNamespaceRequest = CreateNamespaceRequest_1.default;
var GetNamespaceStatusRequest_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceStatusRequest"));
exports.GetNamespaceStatusRequest = GetNamespaceStatusRequest_1.default;
var GetNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./GetNamespaceRequest"));
exports.GetNamespaceRequest = GetNamespaceRequest_1.default;
var UpdateNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateNamespaceRequest"));
exports.UpdateNamespaceRequest = UpdateNamespaceRequest_1.default;
var DeleteNamespaceRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteNamespaceRequest"));
exports.DeleteNamespaceRequest = DeleteNamespaceRequest_1.default;
var DescribeDataObjectsRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeDataObjectsRequest"));
exports.DescribeDataObjectsRequest = DescribeDataObjectsRequest_1.default;
var DescribeDataObjectsByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeDataObjectsByUserIdRequest"));
exports.DescribeDataObjectsByUserIdRequest = DescribeDataObjectsByUserIdRequest_1.default;
var PrepareUploadRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareUploadRequest"));
exports.PrepareUploadRequest = PrepareUploadRequest_1.default;
var PrepareUploadByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareUploadByUserIdRequest"));
exports.PrepareUploadByUserIdRequest = PrepareUploadByUserIdRequest_1.default;
var UpdateDataObjectRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateDataObjectRequest"));
exports.UpdateDataObjectRequest = UpdateDataObjectRequest_1.default;
var UpdateDataObjectByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./UpdateDataObjectByUserIdRequest"));
exports.UpdateDataObjectByUserIdRequest = UpdateDataObjectByUserIdRequest_1.default;
var PrepareReUploadRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareReUploadRequest"));
exports.PrepareReUploadRequest = PrepareReUploadRequest_1.default;
var PrepareReUploadByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareReUploadByUserIdRequest"));
exports.PrepareReUploadByUserIdRequest = PrepareReUploadByUserIdRequest_1.default;
var DoneUploadRequest_1 = (0, tslib_1.__importDefault)(require("./DoneUploadRequest"));
exports.DoneUploadRequest = DoneUploadRequest_1.default;
var DoneUploadByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DoneUploadByUserIdRequest"));
exports.DoneUploadByUserIdRequest = DoneUploadByUserIdRequest_1.default;
var DeleteDataObjectRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteDataObjectRequest"));
exports.DeleteDataObjectRequest = DeleteDataObjectRequest_1.default;
var DeleteDataObjectByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DeleteDataObjectByUserIdRequest"));
exports.DeleteDataObjectByUserIdRequest = DeleteDataObjectByUserIdRequest_1.default;
var PrepareDownloadRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadRequest"));
exports.PrepareDownloadRequest = PrepareDownloadRequest_1.default;
var PrepareDownloadByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadByUserIdRequest"));
exports.PrepareDownloadByUserIdRequest = PrepareDownloadByUserIdRequest_1.default;
var PrepareDownloadByGenerationRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadByGenerationRequest"));
exports.PrepareDownloadByGenerationRequest = PrepareDownloadByGenerationRequest_1.default;
var PrepareDownloadByGenerationAndUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadByGenerationAndUserIdRequest"));
exports.PrepareDownloadByGenerationAndUserIdRequest = PrepareDownloadByGenerationAndUserIdRequest_1.default;
var PrepareDownloadOwnDataRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadOwnDataRequest"));
exports.PrepareDownloadOwnDataRequest = PrepareDownloadOwnDataRequest_1.default;
var PrepareDownloadByUserIdAndDataObjectNameRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadByUserIdAndDataObjectNameRequest"));
exports.PrepareDownloadByUserIdAndDataObjectNameRequest = PrepareDownloadByUserIdAndDataObjectNameRequest_1.default;
var PrepareDownloadOwnDataByGenerationRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadOwnDataByGenerationRequest"));
exports.PrepareDownloadOwnDataByGenerationRequest = PrepareDownloadOwnDataByGenerationRequest_1.default;
var PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest_1 = (0, tslib_1.__importDefault)(require("./PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest"));
exports.PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest = PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest_1.default;
var RestoreDataObjectRequest_1 = (0, tslib_1.__importDefault)(require("./RestoreDataObjectRequest"));
exports.RestoreDataObjectRequest = RestoreDataObjectRequest_1.default;
var DescribeDataObjectHistoriesRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeDataObjectHistoriesRequest"));
exports.DescribeDataObjectHistoriesRequest = DescribeDataObjectHistoriesRequest_1.default;
var DescribeDataObjectHistoriesByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./DescribeDataObjectHistoriesByUserIdRequest"));
exports.DescribeDataObjectHistoriesByUserIdRequest = DescribeDataObjectHistoriesByUserIdRequest_1.default;
var GetDataObjectHistoryRequest_1 = (0, tslib_1.__importDefault)(require("./GetDataObjectHistoryRequest"));
exports.GetDataObjectHistoryRequest = GetDataObjectHistoryRequest_1.default;
var GetDataObjectHistoryByUserIdRequest_1 = (0, tslib_1.__importDefault)(require("./GetDataObjectHistoryByUserIdRequest"));
exports.GetDataObjectHistoryByUserIdRequest = GetDataObjectHistoryByUserIdRequest_1.default;
//# sourceMappingURL=index.js.map