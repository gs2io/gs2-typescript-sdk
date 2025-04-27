"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionByUserIdResult = exports.ActionResult = exports.NearUserIdsFromSystemResult = exports.NearUserIdsResult = exports.FetchPositionFromSystemResult = exports.FetchPositionResult = exports.PutPositionByUserIdResult = exports.PutPositionResult = exports.UpdateCurrentFieldMasterFromGitHubResult = exports.UpdateCurrentFieldMasterResult = exports.PreUpdateCurrentFieldMasterResult = exports.GetCurrentFieldMasterResult = exports.ExportMasterResult = exports.DeleteLayerModelMasterResult = exports.UpdateLayerModelMasterResult = exports.GetLayerModelMasterResult = exports.CreateLayerModelMasterResult = exports.DescribeLayerModelMastersResult = exports.GetLayerModelResult = exports.DescribeLayerModelsResult = exports.DeleteAreaModelMasterResult = exports.UpdateAreaModelMasterResult = exports.GetAreaModelMasterResult = exports.CreateAreaModelMasterResult = exports.DescribeAreaModelMastersResult = exports.GetAreaModelResult = exports.DescribeAreaModelsResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeAreaModelsResult_1 = tslib_1.__importDefault(require("./DescribeAreaModelsResult"));
exports.DescribeAreaModelsResult = DescribeAreaModelsResult_1.default;
var GetAreaModelResult_1 = tslib_1.__importDefault(require("./GetAreaModelResult"));
exports.GetAreaModelResult = GetAreaModelResult_1.default;
var DescribeAreaModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeAreaModelMastersResult"));
exports.DescribeAreaModelMastersResult = DescribeAreaModelMastersResult_1.default;
var CreateAreaModelMasterResult_1 = tslib_1.__importDefault(require("./CreateAreaModelMasterResult"));
exports.CreateAreaModelMasterResult = CreateAreaModelMasterResult_1.default;
var GetAreaModelMasterResult_1 = tslib_1.__importDefault(require("./GetAreaModelMasterResult"));
exports.GetAreaModelMasterResult = GetAreaModelMasterResult_1.default;
var UpdateAreaModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateAreaModelMasterResult"));
exports.UpdateAreaModelMasterResult = UpdateAreaModelMasterResult_1.default;
var DeleteAreaModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteAreaModelMasterResult"));
exports.DeleteAreaModelMasterResult = DeleteAreaModelMasterResult_1.default;
var DescribeLayerModelsResult_1 = tslib_1.__importDefault(require("./DescribeLayerModelsResult"));
exports.DescribeLayerModelsResult = DescribeLayerModelsResult_1.default;
var GetLayerModelResult_1 = tslib_1.__importDefault(require("./GetLayerModelResult"));
exports.GetLayerModelResult = GetLayerModelResult_1.default;
var DescribeLayerModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeLayerModelMastersResult"));
exports.DescribeLayerModelMastersResult = DescribeLayerModelMastersResult_1.default;
var CreateLayerModelMasterResult_1 = tslib_1.__importDefault(require("./CreateLayerModelMasterResult"));
exports.CreateLayerModelMasterResult = CreateLayerModelMasterResult_1.default;
var GetLayerModelMasterResult_1 = tslib_1.__importDefault(require("./GetLayerModelMasterResult"));
exports.GetLayerModelMasterResult = GetLayerModelMasterResult_1.default;
var UpdateLayerModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateLayerModelMasterResult"));
exports.UpdateLayerModelMasterResult = UpdateLayerModelMasterResult_1.default;
var DeleteLayerModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteLayerModelMasterResult"));
exports.DeleteLayerModelMasterResult = DeleteLayerModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentFieldMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentFieldMasterResult"));
exports.GetCurrentFieldMasterResult = GetCurrentFieldMasterResult_1.default;
var PreUpdateCurrentFieldMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentFieldMasterResult"));
exports.PreUpdateCurrentFieldMasterResult = PreUpdateCurrentFieldMasterResult_1.default;
var UpdateCurrentFieldMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentFieldMasterResult"));
exports.UpdateCurrentFieldMasterResult = UpdateCurrentFieldMasterResult_1.default;
var UpdateCurrentFieldMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentFieldMasterFromGitHubResult"));
exports.UpdateCurrentFieldMasterFromGitHubResult = UpdateCurrentFieldMasterFromGitHubResult_1.default;
var PutPositionResult_1 = tslib_1.__importDefault(require("./PutPositionResult"));
exports.PutPositionResult = PutPositionResult_1.default;
var PutPositionByUserIdResult_1 = tslib_1.__importDefault(require("./PutPositionByUserIdResult"));
exports.PutPositionByUserIdResult = PutPositionByUserIdResult_1.default;
var FetchPositionResult_1 = tslib_1.__importDefault(require("./FetchPositionResult"));
exports.FetchPositionResult = FetchPositionResult_1.default;
var FetchPositionFromSystemResult_1 = tslib_1.__importDefault(require("./FetchPositionFromSystemResult"));
exports.FetchPositionFromSystemResult = FetchPositionFromSystemResult_1.default;
var NearUserIdsResult_1 = tslib_1.__importDefault(require("./NearUserIdsResult"));
exports.NearUserIdsResult = NearUserIdsResult_1.default;
var NearUserIdsFromSystemResult_1 = tslib_1.__importDefault(require("./NearUserIdsFromSystemResult"));
exports.NearUserIdsFromSystemResult = NearUserIdsFromSystemResult_1.default;
var ActionResult_1 = tslib_1.__importDefault(require("./ActionResult"));
exports.ActionResult = ActionResult_1.default;
var ActionByUserIdResult_1 = tslib_1.__importDefault(require("./ActionByUserIdResult"));
exports.ActionByUserIdResult = ActionByUserIdResult_1.default;
//# sourceMappingURL=index.js.map