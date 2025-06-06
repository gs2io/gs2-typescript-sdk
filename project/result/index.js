"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetImportErrorLogResult = exports.DescribeImportErrorLogsResult = exports.ImportUserDataResult = exports.PrepareImportUserDataResult = exports.WaitImportUserDataResult = exports.GetImportProgressResult = exports.DescribeImportProgressesResult = exports.CleanUserDataResult = exports.WaitCleanUserDataResult = exports.GetCleanProgressResult = exports.DescribeCleanProgressesResult = exports.GetDumpUserDataResult = exports.DumpUserDataResult = exports.ArchiveDumpUserDataResult = exports.WaitDumpUserDataResult = exports.GetDumpProgressResult = exports.DescribeDumpProgressesResult = exports.DescribeBillingsResult = exports.DescribeReceiptsResult = exports.DeleteBillingMethodResult = exports.UpdateBillingMethodResult = exports.GetBillingMethodResult = exports.CreateBillingMethodResult = exports.DescribeBillingMethodsResult = exports.DeleteProjectResult = exports.WaitActivateRegionResult = exports.ActivateRegionResult = exports.UpdateProjectResult = exports.GetProjectTokenByIdentifierResult = exports.GetProjectTokenResult = exports.GetProjectResult = exports.CreateProjectResult = exports.DescribeProjectsResult = exports.GetServiceVersionResult = exports.DeleteAccountResult = exports.DisableMfaResult = exports.ChallengeMfaResult = exports.EnableMfaResult = exports.UpdateAccountResult = exports.IssuePasswordResult = exports.ForgetResult = exports.SignInResult = exports.VerifyResult = exports.CreateAccountResult = void 0;
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
var CreateAccountResult_1 = tslib_1.__importDefault(require("./CreateAccountResult"));
exports.CreateAccountResult = CreateAccountResult_1.default;
var VerifyResult_1 = tslib_1.__importDefault(require("./VerifyResult"));
exports.VerifyResult = VerifyResult_1.default;
var SignInResult_1 = tslib_1.__importDefault(require("./SignInResult"));
exports.SignInResult = SignInResult_1.default;
var ForgetResult_1 = tslib_1.__importDefault(require("./ForgetResult"));
exports.ForgetResult = ForgetResult_1.default;
var IssuePasswordResult_1 = tslib_1.__importDefault(require("./IssuePasswordResult"));
exports.IssuePasswordResult = IssuePasswordResult_1.default;
var UpdateAccountResult_1 = tslib_1.__importDefault(require("./UpdateAccountResult"));
exports.UpdateAccountResult = UpdateAccountResult_1.default;
var EnableMfaResult_1 = tslib_1.__importDefault(require("./EnableMfaResult"));
exports.EnableMfaResult = EnableMfaResult_1.default;
var ChallengeMfaResult_1 = tslib_1.__importDefault(require("./ChallengeMfaResult"));
exports.ChallengeMfaResult = ChallengeMfaResult_1.default;
var DisableMfaResult_1 = tslib_1.__importDefault(require("./DisableMfaResult"));
exports.DisableMfaResult = DisableMfaResult_1.default;
var DeleteAccountResult_1 = tslib_1.__importDefault(require("./DeleteAccountResult"));
exports.DeleteAccountResult = DeleteAccountResult_1.default;
var GetServiceVersionResult_1 = tslib_1.__importDefault(require("./GetServiceVersionResult"));
exports.GetServiceVersionResult = GetServiceVersionResult_1.default;
var DescribeProjectsResult_1 = tslib_1.__importDefault(require("./DescribeProjectsResult"));
exports.DescribeProjectsResult = DescribeProjectsResult_1.default;
var CreateProjectResult_1 = tslib_1.__importDefault(require("./CreateProjectResult"));
exports.CreateProjectResult = CreateProjectResult_1.default;
var GetProjectResult_1 = tslib_1.__importDefault(require("./GetProjectResult"));
exports.GetProjectResult = GetProjectResult_1.default;
var GetProjectTokenResult_1 = tslib_1.__importDefault(require("./GetProjectTokenResult"));
exports.GetProjectTokenResult = GetProjectTokenResult_1.default;
var GetProjectTokenByIdentifierResult_1 = tslib_1.__importDefault(require("./GetProjectTokenByIdentifierResult"));
exports.GetProjectTokenByIdentifierResult = GetProjectTokenByIdentifierResult_1.default;
var UpdateProjectResult_1 = tslib_1.__importDefault(require("./UpdateProjectResult"));
exports.UpdateProjectResult = UpdateProjectResult_1.default;
var ActivateRegionResult_1 = tslib_1.__importDefault(require("./ActivateRegionResult"));
exports.ActivateRegionResult = ActivateRegionResult_1.default;
var WaitActivateRegionResult_1 = tslib_1.__importDefault(require("./WaitActivateRegionResult"));
exports.WaitActivateRegionResult = WaitActivateRegionResult_1.default;
var DeleteProjectResult_1 = tslib_1.__importDefault(require("./DeleteProjectResult"));
exports.DeleteProjectResult = DeleteProjectResult_1.default;
var DescribeBillingMethodsResult_1 = tslib_1.__importDefault(require("./DescribeBillingMethodsResult"));
exports.DescribeBillingMethodsResult = DescribeBillingMethodsResult_1.default;
var CreateBillingMethodResult_1 = tslib_1.__importDefault(require("./CreateBillingMethodResult"));
exports.CreateBillingMethodResult = CreateBillingMethodResult_1.default;
var GetBillingMethodResult_1 = tslib_1.__importDefault(require("./GetBillingMethodResult"));
exports.GetBillingMethodResult = GetBillingMethodResult_1.default;
var UpdateBillingMethodResult_1 = tslib_1.__importDefault(require("./UpdateBillingMethodResult"));
exports.UpdateBillingMethodResult = UpdateBillingMethodResult_1.default;
var DeleteBillingMethodResult_1 = tslib_1.__importDefault(require("./DeleteBillingMethodResult"));
exports.DeleteBillingMethodResult = DeleteBillingMethodResult_1.default;
var DescribeReceiptsResult_1 = tslib_1.__importDefault(require("./DescribeReceiptsResult"));
exports.DescribeReceiptsResult = DescribeReceiptsResult_1.default;
var DescribeBillingsResult_1 = tslib_1.__importDefault(require("./DescribeBillingsResult"));
exports.DescribeBillingsResult = DescribeBillingsResult_1.default;
var DescribeDumpProgressesResult_1 = tslib_1.__importDefault(require("./DescribeDumpProgressesResult"));
exports.DescribeDumpProgressesResult = DescribeDumpProgressesResult_1.default;
var GetDumpProgressResult_1 = tslib_1.__importDefault(require("./GetDumpProgressResult"));
exports.GetDumpProgressResult = GetDumpProgressResult_1.default;
var WaitDumpUserDataResult_1 = tslib_1.__importDefault(require("./WaitDumpUserDataResult"));
exports.WaitDumpUserDataResult = WaitDumpUserDataResult_1.default;
var ArchiveDumpUserDataResult_1 = tslib_1.__importDefault(require("./ArchiveDumpUserDataResult"));
exports.ArchiveDumpUserDataResult = ArchiveDumpUserDataResult_1.default;
var DumpUserDataResult_1 = tslib_1.__importDefault(require("./DumpUserDataResult"));
exports.DumpUserDataResult = DumpUserDataResult_1.default;
var GetDumpUserDataResult_1 = tslib_1.__importDefault(require("./GetDumpUserDataResult"));
exports.GetDumpUserDataResult = GetDumpUserDataResult_1.default;
var DescribeCleanProgressesResult_1 = tslib_1.__importDefault(require("./DescribeCleanProgressesResult"));
exports.DescribeCleanProgressesResult = DescribeCleanProgressesResult_1.default;
var GetCleanProgressResult_1 = tslib_1.__importDefault(require("./GetCleanProgressResult"));
exports.GetCleanProgressResult = GetCleanProgressResult_1.default;
var WaitCleanUserDataResult_1 = tslib_1.__importDefault(require("./WaitCleanUserDataResult"));
exports.WaitCleanUserDataResult = WaitCleanUserDataResult_1.default;
var CleanUserDataResult_1 = tslib_1.__importDefault(require("./CleanUserDataResult"));
exports.CleanUserDataResult = CleanUserDataResult_1.default;
var DescribeImportProgressesResult_1 = tslib_1.__importDefault(require("./DescribeImportProgressesResult"));
exports.DescribeImportProgressesResult = DescribeImportProgressesResult_1.default;
var GetImportProgressResult_1 = tslib_1.__importDefault(require("./GetImportProgressResult"));
exports.GetImportProgressResult = GetImportProgressResult_1.default;
var WaitImportUserDataResult_1 = tslib_1.__importDefault(require("./WaitImportUserDataResult"));
exports.WaitImportUserDataResult = WaitImportUserDataResult_1.default;
var PrepareImportUserDataResult_1 = tslib_1.__importDefault(require("./PrepareImportUserDataResult"));
exports.PrepareImportUserDataResult = PrepareImportUserDataResult_1.default;
var ImportUserDataResult_1 = tslib_1.__importDefault(require("./ImportUserDataResult"));
exports.ImportUserDataResult = ImportUserDataResult_1.default;
var DescribeImportErrorLogsResult_1 = tslib_1.__importDefault(require("./DescribeImportErrorLogsResult"));
exports.DescribeImportErrorLogsResult = DescribeImportErrorLogsResult_1.default;
var GetImportErrorLogResult_1 = tslib_1.__importDefault(require("./GetImportErrorLogResult"));
exports.GetImportErrorLogResult = GetImportErrorLogResult_1.default;
//# sourceMappingURL=index.js.map