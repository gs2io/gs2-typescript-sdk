"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlatformIdByUserIdRequest = exports.DeletePlatformIdByUserIdentifierRequest = exports.DeletePlatformIdRequest = exports.FindPlatformIdByUserIdRequest = exports.FindPlatformIdRequest = exports.GetPlatformIdByUserIdRequest = exports.GetPlatformIdRequest = exports.CreatePlatformIdByUserIdRequest = exports.CreatePlatformIdRequest = exports.DescribePlatformIdsByUserIdRequest = exports.DescribePlatformIdsRequest = exports.GetAuthorizationUrlRequest = exports.DoTakeOverOpenIdConnectRequest = exports.DoTakeOverRequest = exports.DeleteTakeOverByUserIdRequest = exports.DeleteTakeOverByUserIdentifierRequest = exports.DeleteTakeOverRequest = exports.UpdateTakeOverByUserIdRequest = exports.UpdateTakeOverRequest = exports.GetTakeOverByUserIdRequest = exports.GetTakeOverRequest = exports.CreateTakeOverOpenIdConnectAndByUserIdRequest = exports.CreateTakeOverOpenIdConnectRequest = exports.CreateTakeOverByUserIdRequest = exports.CreateTakeOverRequest = exports.DescribeTakeOversByUserIdRequest = exports.DescribeTakeOversRequest = exports.AuthenticationRequest = exports.DeleteAccountRequest = exports.GetAccountRequest = exports.RemoveBanRequest = exports.AddBanRequest = exports.UpdateBannedRequest = exports.UpdateTimeOffsetRequest = exports.CreateAccountRequest = exports.DescribeAccountsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.GetServiceVersionRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
exports.UpdateCurrentModelMasterFromGitHubRequest = exports.UpdateCurrentModelMasterRequest = exports.PreUpdateCurrentModelMasterRequest = exports.GetCurrentModelMasterRequest = exports.ExportMasterRequest = exports.DeleteTakeOverTypeModelMasterRequest = exports.UpdateTakeOverTypeModelMasterRequest = exports.GetTakeOverTypeModelMasterRequest = exports.CreateTakeOverTypeModelMasterRequest = exports.DescribeTakeOverTypeModelMastersRequest = exports.GetTakeOverTypeModelRequest = exports.DescribeTakeOverTypeModelsRequest = exports.DeleteDataOwnerByUserIdRequest = exports.UpdateDataOwnerByUserIdRequest = exports.GetDataOwnerByUserIdRequest = void 0;
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
var DescribeAccountsRequest_1 = tslib_1.__importDefault(require("./DescribeAccountsRequest"));
exports.DescribeAccountsRequest = DescribeAccountsRequest_1.default;
var CreateAccountRequest_1 = tslib_1.__importDefault(require("./CreateAccountRequest"));
exports.CreateAccountRequest = CreateAccountRequest_1.default;
var UpdateTimeOffsetRequest_1 = tslib_1.__importDefault(require("./UpdateTimeOffsetRequest"));
exports.UpdateTimeOffsetRequest = UpdateTimeOffsetRequest_1.default;
var UpdateBannedRequest_1 = tslib_1.__importDefault(require("./UpdateBannedRequest"));
exports.UpdateBannedRequest = UpdateBannedRequest_1.default;
var AddBanRequest_1 = tslib_1.__importDefault(require("./AddBanRequest"));
exports.AddBanRequest = AddBanRequest_1.default;
var RemoveBanRequest_1 = tslib_1.__importDefault(require("./RemoveBanRequest"));
exports.RemoveBanRequest = RemoveBanRequest_1.default;
var GetAccountRequest_1 = tslib_1.__importDefault(require("./GetAccountRequest"));
exports.GetAccountRequest = GetAccountRequest_1.default;
var DeleteAccountRequest_1 = tslib_1.__importDefault(require("./DeleteAccountRequest"));
exports.DeleteAccountRequest = DeleteAccountRequest_1.default;
var AuthenticationRequest_1 = tslib_1.__importDefault(require("./AuthenticationRequest"));
exports.AuthenticationRequest = AuthenticationRequest_1.default;
var DescribeTakeOversRequest_1 = tslib_1.__importDefault(require("./DescribeTakeOversRequest"));
exports.DescribeTakeOversRequest = DescribeTakeOversRequest_1.default;
var DescribeTakeOversByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeTakeOversByUserIdRequest"));
exports.DescribeTakeOversByUserIdRequest = DescribeTakeOversByUserIdRequest_1.default;
var CreateTakeOverRequest_1 = tslib_1.__importDefault(require("./CreateTakeOverRequest"));
exports.CreateTakeOverRequest = CreateTakeOverRequest_1.default;
var CreateTakeOverByUserIdRequest_1 = tslib_1.__importDefault(require("./CreateTakeOverByUserIdRequest"));
exports.CreateTakeOverByUserIdRequest = CreateTakeOverByUserIdRequest_1.default;
var CreateTakeOverOpenIdConnectRequest_1 = tslib_1.__importDefault(require("./CreateTakeOverOpenIdConnectRequest"));
exports.CreateTakeOverOpenIdConnectRequest = CreateTakeOverOpenIdConnectRequest_1.default;
var CreateTakeOverOpenIdConnectAndByUserIdRequest_1 = tslib_1.__importDefault(require("./CreateTakeOverOpenIdConnectAndByUserIdRequest"));
exports.CreateTakeOverOpenIdConnectAndByUserIdRequest = CreateTakeOverOpenIdConnectAndByUserIdRequest_1.default;
var GetTakeOverRequest_1 = tslib_1.__importDefault(require("./GetTakeOverRequest"));
exports.GetTakeOverRequest = GetTakeOverRequest_1.default;
var GetTakeOverByUserIdRequest_1 = tslib_1.__importDefault(require("./GetTakeOverByUserIdRequest"));
exports.GetTakeOverByUserIdRequest = GetTakeOverByUserIdRequest_1.default;
var UpdateTakeOverRequest_1 = tslib_1.__importDefault(require("./UpdateTakeOverRequest"));
exports.UpdateTakeOverRequest = UpdateTakeOverRequest_1.default;
var UpdateTakeOverByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateTakeOverByUserIdRequest"));
exports.UpdateTakeOverByUserIdRequest = UpdateTakeOverByUserIdRequest_1.default;
var DeleteTakeOverRequest_1 = tslib_1.__importDefault(require("./DeleteTakeOverRequest"));
exports.DeleteTakeOverRequest = DeleteTakeOverRequest_1.default;
var DeleteTakeOverByUserIdentifierRequest_1 = tslib_1.__importDefault(require("./DeleteTakeOverByUserIdentifierRequest"));
exports.DeleteTakeOverByUserIdentifierRequest = DeleteTakeOverByUserIdentifierRequest_1.default;
var DeleteTakeOverByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteTakeOverByUserIdRequest"));
exports.DeleteTakeOverByUserIdRequest = DeleteTakeOverByUserIdRequest_1.default;
var DoTakeOverRequest_1 = tslib_1.__importDefault(require("./DoTakeOverRequest"));
exports.DoTakeOverRequest = DoTakeOverRequest_1.default;
var DoTakeOverOpenIdConnectRequest_1 = tslib_1.__importDefault(require("./DoTakeOverOpenIdConnectRequest"));
exports.DoTakeOverOpenIdConnectRequest = DoTakeOverOpenIdConnectRequest_1.default;
var GetAuthorizationUrlRequest_1 = tslib_1.__importDefault(require("./GetAuthorizationUrlRequest"));
exports.GetAuthorizationUrlRequest = GetAuthorizationUrlRequest_1.default;
var DescribePlatformIdsRequest_1 = tslib_1.__importDefault(require("./DescribePlatformIdsRequest"));
exports.DescribePlatformIdsRequest = DescribePlatformIdsRequest_1.default;
var DescribePlatformIdsByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribePlatformIdsByUserIdRequest"));
exports.DescribePlatformIdsByUserIdRequest = DescribePlatformIdsByUserIdRequest_1.default;
var CreatePlatformIdRequest_1 = tslib_1.__importDefault(require("./CreatePlatformIdRequest"));
exports.CreatePlatformIdRequest = CreatePlatformIdRequest_1.default;
var CreatePlatformIdByUserIdRequest_1 = tslib_1.__importDefault(require("./CreatePlatformIdByUserIdRequest"));
exports.CreatePlatformIdByUserIdRequest = CreatePlatformIdByUserIdRequest_1.default;
var GetPlatformIdRequest_1 = tslib_1.__importDefault(require("./GetPlatformIdRequest"));
exports.GetPlatformIdRequest = GetPlatformIdRequest_1.default;
var GetPlatformIdByUserIdRequest_1 = tslib_1.__importDefault(require("./GetPlatformIdByUserIdRequest"));
exports.GetPlatformIdByUserIdRequest = GetPlatformIdByUserIdRequest_1.default;
var FindPlatformIdRequest_1 = tslib_1.__importDefault(require("./FindPlatformIdRequest"));
exports.FindPlatformIdRequest = FindPlatformIdRequest_1.default;
var FindPlatformIdByUserIdRequest_1 = tslib_1.__importDefault(require("./FindPlatformIdByUserIdRequest"));
exports.FindPlatformIdByUserIdRequest = FindPlatformIdByUserIdRequest_1.default;
var DeletePlatformIdRequest_1 = tslib_1.__importDefault(require("./DeletePlatformIdRequest"));
exports.DeletePlatformIdRequest = DeletePlatformIdRequest_1.default;
var DeletePlatformIdByUserIdentifierRequest_1 = tslib_1.__importDefault(require("./DeletePlatformIdByUserIdentifierRequest"));
exports.DeletePlatformIdByUserIdentifierRequest = DeletePlatformIdByUserIdentifierRequest_1.default;
var DeletePlatformIdByUserIdRequest_1 = tslib_1.__importDefault(require("./DeletePlatformIdByUserIdRequest"));
exports.DeletePlatformIdByUserIdRequest = DeletePlatformIdByUserIdRequest_1.default;
var GetDataOwnerByUserIdRequest_1 = tslib_1.__importDefault(require("./GetDataOwnerByUserIdRequest"));
exports.GetDataOwnerByUserIdRequest = GetDataOwnerByUserIdRequest_1.default;
var UpdateDataOwnerByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateDataOwnerByUserIdRequest"));
exports.UpdateDataOwnerByUserIdRequest = UpdateDataOwnerByUserIdRequest_1.default;
var DeleteDataOwnerByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteDataOwnerByUserIdRequest"));
exports.DeleteDataOwnerByUserIdRequest = DeleteDataOwnerByUserIdRequest_1.default;
var DescribeTakeOverTypeModelsRequest_1 = tslib_1.__importDefault(require("./DescribeTakeOverTypeModelsRequest"));
exports.DescribeTakeOverTypeModelsRequest = DescribeTakeOverTypeModelsRequest_1.default;
var GetTakeOverTypeModelRequest_1 = tslib_1.__importDefault(require("./GetTakeOverTypeModelRequest"));
exports.GetTakeOverTypeModelRequest = GetTakeOverTypeModelRequest_1.default;
var DescribeTakeOverTypeModelMastersRequest_1 = tslib_1.__importDefault(require("./DescribeTakeOverTypeModelMastersRequest"));
exports.DescribeTakeOverTypeModelMastersRequest = DescribeTakeOverTypeModelMastersRequest_1.default;
var CreateTakeOverTypeModelMasterRequest_1 = tslib_1.__importDefault(require("./CreateTakeOverTypeModelMasterRequest"));
exports.CreateTakeOverTypeModelMasterRequest = CreateTakeOverTypeModelMasterRequest_1.default;
var GetTakeOverTypeModelMasterRequest_1 = tslib_1.__importDefault(require("./GetTakeOverTypeModelMasterRequest"));
exports.GetTakeOverTypeModelMasterRequest = GetTakeOverTypeModelMasterRequest_1.default;
var UpdateTakeOverTypeModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateTakeOverTypeModelMasterRequest"));
exports.UpdateTakeOverTypeModelMasterRequest = UpdateTakeOverTypeModelMasterRequest_1.default;
var DeleteTakeOverTypeModelMasterRequest_1 = tslib_1.__importDefault(require("./DeleteTakeOverTypeModelMasterRequest"));
exports.DeleteTakeOverTypeModelMasterRequest = DeleteTakeOverTypeModelMasterRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentModelMasterRequest"));
exports.GetCurrentModelMasterRequest = GetCurrentModelMasterRequest_1.default;
var PreUpdateCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./PreUpdateCurrentModelMasterRequest"));
exports.PreUpdateCurrentModelMasterRequest = PreUpdateCurrentModelMasterRequest_1.default;
var UpdateCurrentModelMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterRequest"));
exports.UpdateCurrentModelMasterRequest = UpdateCurrentModelMasterRequest_1.default;
var UpdateCurrentModelMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterFromGitHubRequest"));
exports.UpdateCurrentModelMasterFromGitHubRequest = UpdateCurrentModelMasterFromGitHubRequest_1.default;
//# sourceMappingURL=index.js.map