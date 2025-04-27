"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataOwnerByUserIdResult = exports.DeletePlatformIdByUserIdResult = exports.DeletePlatformIdByUserIdentifierResult = exports.DeletePlatformIdResult = exports.FindPlatformIdByUserIdResult = exports.FindPlatformIdResult = exports.GetPlatformIdByUserIdResult = exports.GetPlatformIdResult = exports.CreatePlatformIdByUserIdResult = exports.CreatePlatformIdResult = exports.DescribePlatformIdsByUserIdResult = exports.DescribePlatformIdsResult = exports.GetAuthorizationUrlResult = exports.DoTakeOverOpenIdConnectResult = exports.DoTakeOverResult = exports.DeleteTakeOverByUserIdResult = exports.DeleteTakeOverByUserIdentifierResult = exports.DeleteTakeOverResult = exports.UpdateTakeOverByUserIdResult = exports.UpdateTakeOverResult = exports.GetTakeOverByUserIdResult = exports.GetTakeOverResult = exports.CreateTakeOverOpenIdConnectAndByUserIdResult = exports.CreateTakeOverOpenIdConnectResult = exports.CreateTakeOverByUserIdResult = exports.CreateTakeOverResult = exports.DescribeTakeOversByUserIdResult = exports.DescribeTakeOversResult = exports.AuthenticationResult = exports.DeleteAccountResult = exports.GetAccountResult = exports.RemoveBanResult = exports.AddBanResult = exports.UpdateBannedResult = exports.UpdateTimeOffsetResult = exports.CreateAccountResult = exports.DescribeAccountsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
exports.UpdateCurrentModelMasterFromGitHubResult = exports.UpdateCurrentModelMasterResult = exports.PreUpdateCurrentModelMasterResult = exports.GetCurrentModelMasterResult = exports.ExportMasterResult = exports.DeleteTakeOverTypeModelMasterResult = exports.UpdateTakeOverTypeModelMasterResult = exports.GetTakeOverTypeModelMasterResult = exports.CreateTakeOverTypeModelMasterResult = exports.DescribeTakeOverTypeModelMastersResult = exports.GetTakeOverTypeModelResult = exports.DescribeTakeOverTypeModelsResult = exports.DeleteDataOwnerByUserIdResult = void 0;
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
var DescribeAccountsResult_1 = tslib_1.__importDefault(require("./DescribeAccountsResult"));
exports.DescribeAccountsResult = DescribeAccountsResult_1.default;
var CreateAccountResult_1 = tslib_1.__importDefault(require("./CreateAccountResult"));
exports.CreateAccountResult = CreateAccountResult_1.default;
var UpdateTimeOffsetResult_1 = tslib_1.__importDefault(require("./UpdateTimeOffsetResult"));
exports.UpdateTimeOffsetResult = UpdateTimeOffsetResult_1.default;
var UpdateBannedResult_1 = tslib_1.__importDefault(require("./UpdateBannedResult"));
exports.UpdateBannedResult = UpdateBannedResult_1.default;
var AddBanResult_1 = tslib_1.__importDefault(require("./AddBanResult"));
exports.AddBanResult = AddBanResult_1.default;
var RemoveBanResult_1 = tslib_1.__importDefault(require("./RemoveBanResult"));
exports.RemoveBanResult = RemoveBanResult_1.default;
var GetAccountResult_1 = tslib_1.__importDefault(require("./GetAccountResult"));
exports.GetAccountResult = GetAccountResult_1.default;
var DeleteAccountResult_1 = tslib_1.__importDefault(require("./DeleteAccountResult"));
exports.DeleteAccountResult = DeleteAccountResult_1.default;
var AuthenticationResult_1 = tslib_1.__importDefault(require("./AuthenticationResult"));
exports.AuthenticationResult = AuthenticationResult_1.default;
var DescribeTakeOversResult_1 = tslib_1.__importDefault(require("./DescribeTakeOversResult"));
exports.DescribeTakeOversResult = DescribeTakeOversResult_1.default;
var DescribeTakeOversByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeTakeOversByUserIdResult"));
exports.DescribeTakeOversByUserIdResult = DescribeTakeOversByUserIdResult_1.default;
var CreateTakeOverResult_1 = tslib_1.__importDefault(require("./CreateTakeOverResult"));
exports.CreateTakeOverResult = CreateTakeOverResult_1.default;
var CreateTakeOverByUserIdResult_1 = tslib_1.__importDefault(require("./CreateTakeOverByUserIdResult"));
exports.CreateTakeOverByUserIdResult = CreateTakeOverByUserIdResult_1.default;
var CreateTakeOverOpenIdConnectResult_1 = tslib_1.__importDefault(require("./CreateTakeOverOpenIdConnectResult"));
exports.CreateTakeOverOpenIdConnectResult = CreateTakeOverOpenIdConnectResult_1.default;
var CreateTakeOverOpenIdConnectAndByUserIdResult_1 = tslib_1.__importDefault(require("./CreateTakeOverOpenIdConnectAndByUserIdResult"));
exports.CreateTakeOverOpenIdConnectAndByUserIdResult = CreateTakeOverOpenIdConnectAndByUserIdResult_1.default;
var GetTakeOverResult_1 = tslib_1.__importDefault(require("./GetTakeOverResult"));
exports.GetTakeOverResult = GetTakeOverResult_1.default;
var GetTakeOverByUserIdResult_1 = tslib_1.__importDefault(require("./GetTakeOverByUserIdResult"));
exports.GetTakeOverByUserIdResult = GetTakeOverByUserIdResult_1.default;
var UpdateTakeOverResult_1 = tslib_1.__importDefault(require("./UpdateTakeOverResult"));
exports.UpdateTakeOverResult = UpdateTakeOverResult_1.default;
var UpdateTakeOverByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateTakeOverByUserIdResult"));
exports.UpdateTakeOverByUserIdResult = UpdateTakeOverByUserIdResult_1.default;
var DeleteTakeOverResult_1 = tslib_1.__importDefault(require("./DeleteTakeOverResult"));
exports.DeleteTakeOverResult = DeleteTakeOverResult_1.default;
var DeleteTakeOverByUserIdentifierResult_1 = tslib_1.__importDefault(require("./DeleteTakeOverByUserIdentifierResult"));
exports.DeleteTakeOverByUserIdentifierResult = DeleteTakeOverByUserIdentifierResult_1.default;
var DeleteTakeOverByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteTakeOverByUserIdResult"));
exports.DeleteTakeOverByUserIdResult = DeleteTakeOverByUserIdResult_1.default;
var DoTakeOverResult_1 = tslib_1.__importDefault(require("./DoTakeOverResult"));
exports.DoTakeOverResult = DoTakeOverResult_1.default;
var DoTakeOverOpenIdConnectResult_1 = tslib_1.__importDefault(require("./DoTakeOverOpenIdConnectResult"));
exports.DoTakeOverOpenIdConnectResult = DoTakeOverOpenIdConnectResult_1.default;
var GetAuthorizationUrlResult_1 = tslib_1.__importDefault(require("./GetAuthorizationUrlResult"));
exports.GetAuthorizationUrlResult = GetAuthorizationUrlResult_1.default;
var DescribePlatformIdsResult_1 = tslib_1.__importDefault(require("./DescribePlatformIdsResult"));
exports.DescribePlatformIdsResult = DescribePlatformIdsResult_1.default;
var DescribePlatformIdsByUserIdResult_1 = tslib_1.__importDefault(require("./DescribePlatformIdsByUserIdResult"));
exports.DescribePlatformIdsByUserIdResult = DescribePlatformIdsByUserIdResult_1.default;
var CreatePlatformIdResult_1 = tslib_1.__importDefault(require("./CreatePlatformIdResult"));
exports.CreatePlatformIdResult = CreatePlatformIdResult_1.default;
var CreatePlatformIdByUserIdResult_1 = tslib_1.__importDefault(require("./CreatePlatformIdByUserIdResult"));
exports.CreatePlatformIdByUserIdResult = CreatePlatformIdByUserIdResult_1.default;
var GetPlatformIdResult_1 = tslib_1.__importDefault(require("./GetPlatformIdResult"));
exports.GetPlatformIdResult = GetPlatformIdResult_1.default;
var GetPlatformIdByUserIdResult_1 = tslib_1.__importDefault(require("./GetPlatformIdByUserIdResult"));
exports.GetPlatformIdByUserIdResult = GetPlatformIdByUserIdResult_1.default;
var FindPlatformIdResult_1 = tslib_1.__importDefault(require("./FindPlatformIdResult"));
exports.FindPlatformIdResult = FindPlatformIdResult_1.default;
var FindPlatformIdByUserIdResult_1 = tslib_1.__importDefault(require("./FindPlatformIdByUserIdResult"));
exports.FindPlatformIdByUserIdResult = FindPlatformIdByUserIdResult_1.default;
var DeletePlatformIdResult_1 = tslib_1.__importDefault(require("./DeletePlatformIdResult"));
exports.DeletePlatformIdResult = DeletePlatformIdResult_1.default;
var DeletePlatformIdByUserIdentifierResult_1 = tslib_1.__importDefault(require("./DeletePlatformIdByUserIdentifierResult"));
exports.DeletePlatformIdByUserIdentifierResult = DeletePlatformIdByUserIdentifierResult_1.default;
var DeletePlatformIdByUserIdResult_1 = tslib_1.__importDefault(require("./DeletePlatformIdByUserIdResult"));
exports.DeletePlatformIdByUserIdResult = DeletePlatformIdByUserIdResult_1.default;
var GetDataOwnerByUserIdResult_1 = tslib_1.__importDefault(require("./GetDataOwnerByUserIdResult"));
exports.GetDataOwnerByUserIdResult = GetDataOwnerByUserIdResult_1.default;
var DeleteDataOwnerByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteDataOwnerByUserIdResult"));
exports.DeleteDataOwnerByUserIdResult = DeleteDataOwnerByUserIdResult_1.default;
var DescribeTakeOverTypeModelsResult_1 = tslib_1.__importDefault(require("./DescribeTakeOverTypeModelsResult"));
exports.DescribeTakeOverTypeModelsResult = DescribeTakeOverTypeModelsResult_1.default;
var GetTakeOverTypeModelResult_1 = tslib_1.__importDefault(require("./GetTakeOverTypeModelResult"));
exports.GetTakeOverTypeModelResult = GetTakeOverTypeModelResult_1.default;
var DescribeTakeOverTypeModelMastersResult_1 = tslib_1.__importDefault(require("./DescribeTakeOverTypeModelMastersResult"));
exports.DescribeTakeOverTypeModelMastersResult = DescribeTakeOverTypeModelMastersResult_1.default;
var CreateTakeOverTypeModelMasterResult_1 = tslib_1.__importDefault(require("./CreateTakeOverTypeModelMasterResult"));
exports.CreateTakeOverTypeModelMasterResult = CreateTakeOverTypeModelMasterResult_1.default;
var GetTakeOverTypeModelMasterResult_1 = tslib_1.__importDefault(require("./GetTakeOverTypeModelMasterResult"));
exports.GetTakeOverTypeModelMasterResult = GetTakeOverTypeModelMasterResult_1.default;
var UpdateTakeOverTypeModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateTakeOverTypeModelMasterResult"));
exports.UpdateTakeOverTypeModelMasterResult = UpdateTakeOverTypeModelMasterResult_1.default;
var DeleteTakeOverTypeModelMasterResult_1 = tslib_1.__importDefault(require("./DeleteTakeOverTypeModelMasterResult"));
exports.DeleteTakeOverTypeModelMasterResult = DeleteTakeOverTypeModelMasterResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentModelMasterResult"));
exports.GetCurrentModelMasterResult = GetCurrentModelMasterResult_1.default;
var PreUpdateCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentModelMasterResult"));
exports.PreUpdateCurrentModelMasterResult = PreUpdateCurrentModelMasterResult_1.default;
var UpdateCurrentModelMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterResult"));
exports.UpdateCurrentModelMasterResult = UpdateCurrentModelMasterResult_1.default;
var UpdateCurrentModelMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentModelMasterFromGitHubResult"));
exports.UpdateCurrentModelMasterFromGitHubResult = UpdateCurrentModelMasterFromGitHubResult_1.default;
//# sourceMappingURL=index.js.map