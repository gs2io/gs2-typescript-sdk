"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyByUserIdRequest = exports.BuyRequest = exports.GetShowcaseByUserIdRequest = exports.GetShowcaseRequest = exports.DescribeShowcasesByUserIdRequest = exports.DescribeShowcasesRequest = exports.UpdateCurrentShowcaseMasterFromGitHubRequest = exports.UpdateCurrentShowcaseMasterRequest = exports.GetCurrentShowcaseMasterRequest = exports.ExportMasterRequest = exports.DeleteShowcaseMasterRequest = exports.UpdateShowcaseMasterRequest = exports.GetShowcaseMasterRequest = exports.CreateShowcaseMasterRequest = exports.DescribeShowcaseMastersRequest = exports.DeleteSalesItemGroupMasterRequest = exports.UpdateSalesItemGroupMasterRequest = exports.GetSalesItemGroupMasterRequest = exports.CreateSalesItemGroupMasterRequest = exports.DescribeSalesItemGroupMastersRequest = exports.DeleteSalesItemMasterRequest = exports.UpdateSalesItemMasterRequest = exports.GetSalesItemMasterRequest = exports.CreateSalesItemMasterRequest = exports.DescribeSalesItemMastersRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeSalesItemMastersRequest_1 = tslib_1.__importDefault(require("./DescribeSalesItemMastersRequest"));
exports.DescribeSalesItemMastersRequest = DescribeSalesItemMastersRequest_1.default;
var CreateSalesItemMasterRequest_1 = tslib_1.__importDefault(require("./CreateSalesItemMasterRequest"));
exports.CreateSalesItemMasterRequest = CreateSalesItemMasterRequest_1.default;
var GetSalesItemMasterRequest_1 = tslib_1.__importDefault(require("./GetSalesItemMasterRequest"));
exports.GetSalesItemMasterRequest = GetSalesItemMasterRequest_1.default;
var UpdateSalesItemMasterRequest_1 = tslib_1.__importDefault(require("./UpdateSalesItemMasterRequest"));
exports.UpdateSalesItemMasterRequest = UpdateSalesItemMasterRequest_1.default;
var DeleteSalesItemMasterRequest_1 = tslib_1.__importDefault(require("./DeleteSalesItemMasterRequest"));
exports.DeleteSalesItemMasterRequest = DeleteSalesItemMasterRequest_1.default;
var DescribeSalesItemGroupMastersRequest_1 = tslib_1.__importDefault(require("./DescribeSalesItemGroupMastersRequest"));
exports.DescribeSalesItemGroupMastersRequest = DescribeSalesItemGroupMastersRequest_1.default;
var CreateSalesItemGroupMasterRequest_1 = tslib_1.__importDefault(require("./CreateSalesItemGroupMasterRequest"));
exports.CreateSalesItemGroupMasterRequest = CreateSalesItemGroupMasterRequest_1.default;
var GetSalesItemGroupMasterRequest_1 = tslib_1.__importDefault(require("./GetSalesItemGroupMasterRequest"));
exports.GetSalesItemGroupMasterRequest = GetSalesItemGroupMasterRequest_1.default;
var UpdateSalesItemGroupMasterRequest_1 = tslib_1.__importDefault(require("./UpdateSalesItemGroupMasterRequest"));
exports.UpdateSalesItemGroupMasterRequest = UpdateSalesItemGroupMasterRequest_1.default;
var DeleteSalesItemGroupMasterRequest_1 = tslib_1.__importDefault(require("./DeleteSalesItemGroupMasterRequest"));
exports.DeleteSalesItemGroupMasterRequest = DeleteSalesItemGroupMasterRequest_1.default;
var DescribeShowcaseMastersRequest_1 = tslib_1.__importDefault(require("./DescribeShowcaseMastersRequest"));
exports.DescribeShowcaseMastersRequest = DescribeShowcaseMastersRequest_1.default;
var CreateShowcaseMasterRequest_1 = tslib_1.__importDefault(require("./CreateShowcaseMasterRequest"));
exports.CreateShowcaseMasterRequest = CreateShowcaseMasterRequest_1.default;
var GetShowcaseMasterRequest_1 = tslib_1.__importDefault(require("./GetShowcaseMasterRequest"));
exports.GetShowcaseMasterRequest = GetShowcaseMasterRequest_1.default;
var UpdateShowcaseMasterRequest_1 = tslib_1.__importDefault(require("./UpdateShowcaseMasterRequest"));
exports.UpdateShowcaseMasterRequest = UpdateShowcaseMasterRequest_1.default;
var DeleteShowcaseMasterRequest_1 = tslib_1.__importDefault(require("./DeleteShowcaseMasterRequest"));
exports.DeleteShowcaseMasterRequest = DeleteShowcaseMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentShowcaseMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentShowcaseMasterRequest"));
exports.GetCurrentShowcaseMasterRequest = GetCurrentShowcaseMasterRequest_1.default;
var UpdateCurrentShowcaseMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentShowcaseMasterRequest"));
exports.UpdateCurrentShowcaseMasterRequest = UpdateCurrentShowcaseMasterRequest_1.default;
var UpdateCurrentShowcaseMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentShowcaseMasterFromGitHubRequest"));
exports.UpdateCurrentShowcaseMasterFromGitHubRequest = UpdateCurrentShowcaseMasterFromGitHubRequest_1.default;
var DescribeShowcasesRequest_1 = tslib_1.__importDefault(require("./DescribeShowcasesRequest"));
exports.DescribeShowcasesRequest = DescribeShowcasesRequest_1.default;
var DescribeShowcasesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeShowcasesByUserIdRequest"));
exports.DescribeShowcasesByUserIdRequest = DescribeShowcasesByUserIdRequest_1.default;
var GetShowcaseRequest_1 = tslib_1.__importDefault(require("./GetShowcaseRequest"));
exports.GetShowcaseRequest = GetShowcaseRequest_1.default;
var GetShowcaseByUserIdRequest_1 = tslib_1.__importDefault(require("./GetShowcaseByUserIdRequest"));
exports.GetShowcaseByUserIdRequest = GetShowcaseByUserIdRequest_1.default;
var BuyRequest_1 = tslib_1.__importDefault(require("./BuyRequest"));
exports.BuyRequest = BuyRequest_1.default;
var BuyByUserIdRequest_1 = tslib_1.__importDefault(require("./BuyByUserIdRequest"));
exports.BuyByUserIdRequest = BuyByUserIdRequest_1.default;
//# sourceMappingURL=index.js.map