"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionByUserIdRequest = exports.ActionRequest = exports.NearUserIdsFromSystemRequest = exports.NearUserIdsRequest = exports.FetchPositionFromSystemRequest = exports.FetchPositionRequest = exports.PutPositionByUserIdRequest = exports.PutPositionRequest = exports.UpdateCurrentFieldMasterFromGitHubRequest = exports.UpdateCurrentFieldMasterRequest = exports.PreUpdateCurrentFieldMasterRequest = exports.GetCurrentFieldMasterRequest = exports.ExportMasterRequest = exports.DeleteLayerModelMasterRequest = exports.UpdateLayerModelMasterRequest = exports.GetLayerModelMasterRequest = exports.CreateLayerModelMasterRequest = exports.DescribeLayerModelMastersRequest = exports.GetLayerModelRequest = exports.DescribeLayerModelsRequest = exports.DeleteAreaModelMasterRequest = exports.UpdateAreaModelMasterRequest = exports.GetAreaModelMasterRequest = exports.CreateAreaModelMasterRequest = exports.DescribeAreaModelMastersRequest = exports.GetAreaModelRequest = exports.DescribeAreaModelsRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeAreaModelsRequest_1 = tslib_1.__importDefault(require("./DescribeAreaModelsRequest"));
exports.DescribeAreaModelsRequest = DescribeAreaModelsRequest_1.default;
var GetAreaModelRequest_1 = tslib_1.__importDefault(require("./GetAreaModelRequest"));
exports.GetAreaModelRequest = GetAreaModelRequest_1.default;
var DescribeAreaModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeAreaModelMastersRequest"));
exports.DescribeAreaModelMastersRequest = DescribeAreaModelMastersRequest_1.default;
var CreateAreaModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateAreaModelMasterRequest"));
exports.CreateAreaModelMasterRequest = CreateAreaModelMasterRequest_1.default;
var GetAreaModelMasterRequest_1 = tslib_1.__importDefault(require("./GetAreaModelMasterRequest"));
exports.GetAreaModelMasterRequest = GetAreaModelMasterRequest_1.default;
var UpdateAreaModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateAreaModelMasterRequest"));
exports.UpdateAreaModelMasterRequest = UpdateAreaModelMasterRequest_1.default;
var DeleteAreaModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteAreaModelMasterRequest"));
exports.DeleteAreaModelMasterRequest = DeleteAreaModelMasterRequest_1.default;
var DescribeLayerModelsRequest_1 = tslib_1.__importDefault(require("./DescribeLayerModelsRequest"));
exports.DescribeLayerModelsRequest = DescribeLayerModelsRequest_1.default;
var GetLayerModelRequest_1 = tslib_1.__importDefault(require("./GetLayerModelRequest"));
exports.GetLayerModelRequest = GetLayerModelRequest_1.default;
var DescribeLayerModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeLayerModelMastersRequest"));
exports.DescribeLayerModelMastersRequest = DescribeLayerModelMastersRequest_1.default;
var CreateLayerModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateLayerModelMasterRequest"));
exports.CreateLayerModelMasterRequest = CreateLayerModelMasterRequest_1.default;
var GetLayerModelMasterRequest_1 = tslib_1.__importDefault(require("./GetLayerModelMasterRequest"));
exports.GetLayerModelMasterRequest = GetLayerModelMasterRequest_1.default;
var UpdateLayerModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateLayerModelMasterRequest"));
exports.UpdateLayerModelMasterRequest = UpdateLayerModelMasterRequest_1.default;
var DeleteLayerModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteLayerModelMasterRequest"));
exports.DeleteLayerModelMasterRequest = DeleteLayerModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentFieldMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentFieldMasterRequest"));
exports.GetCurrentFieldMasterRequest = GetCurrentFieldMasterRequest_1.default;
var PreUpdateCurrentFieldMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentFieldMasterRequest"));
exports.PreUpdateCurrentFieldMasterRequest = PreUpdateCurrentFieldMasterRequest_1.default;
var UpdateCurrentFieldMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentFieldMasterRequest"));
exports.UpdateCurrentFieldMasterRequest = UpdateCurrentFieldMasterRequest_1.default;
var UpdateCurrentFieldMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentFieldMasterFromGitHubRequest"));
exports.UpdateCurrentFieldMasterFromGitHubRequest = UpdateCurrentFieldMasterFromGitHubRequest_1.default;
var PutPositionRequest_1 = tslib_1.__importDefault(require("./PutPositionRequest"));
exports.PutPositionRequest = PutPositionRequest_1.default;
var PutPositionByUserIdRequest_1 = tslib_1.__importDefault(require("./PutPositionByUserIdRequest"));
exports.PutPositionByUserIdRequest = PutPositionByUserIdRequest_1.default;
var FetchPositionRequest_1 = tslib_1.__importDefault(require("./FetchPositionRequest"));
exports.FetchPositionRequest = FetchPositionRequest_1.default;
var FetchPositionFromSystemRequest_1 = tslib_1.__importDefault(require("./FetchPositionFromSystemRequest"));
exports.FetchPositionFromSystemRequest = FetchPositionFromSystemRequest_1.default;
var NearUserIdsRequest_1 = tslib_1.__importDefault(require("./NearUserIdsRequest"));
exports.NearUserIdsRequest = NearUserIdsRequest_1.default;
var NearUserIdsFromSystemRequest_1 = tslib_1.__importDefault(require("./NearUserIdsFromSystemRequest"));
exports.NearUserIdsFromSystemRequest = NearUserIdsFromSystemRequest_1.default;
var ActionRequest_1 = tslib_1.__importDefault(require("./ActionRequest"));
exports.ActionRequest = ActionRequest_1.default;
var ActionByUserIdRequest_1 = tslib_1.__importDefault(require("./ActionByUserIdRequest"));
exports.ActionByUserIdRequest = ActionByUserIdRequest_1.default;
//# sourceMappingURL=index.js.map