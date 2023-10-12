"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanUserDataRequest = exports.WaitCleanUserDataRequest = exports.GetCleanProgressRequest = exports.DescribeCleanProgressesRequest = exports.GetDumpUserDataRequest = exports.DumpUserDataRequest = exports.ArchiveDumpUserDataRequest = exports.WaitDumpUserDataRequest = exports.GetDumpProgressRequest = exports.DescribeDumpProgressesRequest = exports.DescribeBillingsRequest = exports.DescribeReceiptsRequest = exports.DeleteBillingMethodRequest = exports.UpdateBillingMethodRequest = exports.GetBillingMethodRequest = exports.CreateBillingMethodRequest = exports.DescribeBillingMethodsRequest = exports.DeleteProjectRequest = exports.WaitActivateRegionRequest = exports.ActivateRegionRequest = exports.UpdateProjectRequest = exports.GetProjectTokenByIdentifierRequest = exports.GetProjectTokenRequest = exports.GetProjectRequest = exports.CreateProjectRequest = exports.DescribeProjectsRequest = exports.DeleteAccountRequest = exports.UpdateAccountRequest = exports.IssuePasswordRequest = exports.ForgetRequest = exports.SignInRequest = exports.VerifyRequest = exports.CreateAccountRequest = void 0;
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
var CreateAccountRequest_1 = tslib_1.__importDefault(require("./CreateAccountRequest"));
exports.CreateAccountRequest = CreateAccountRequest_1.default;
var VerifyRequest_1 = tslib_1.__importDefault(require("./VerifyRequest"));
exports.VerifyRequest = VerifyRequest_1.default;
var SignInRequest_1 = tslib_1.__importDefault(require("./SignInRequest"));
exports.SignInRequest = SignInRequest_1.default;
var ForgetRequest_1 = tslib_1.__importDefault(require("./ForgetRequest"));
exports.ForgetRequest = ForgetRequest_1.default;
var IssuePasswordRequest_1 = tslib_1.__importDefault(require("./IssuePasswordRequest"));
exports.IssuePasswordRequest = IssuePasswordRequest_1.default;
var UpdateAccountRequest_1 = tslib_1.__importDefault(require("./UpdateAccountRequest"));
exports.UpdateAccountRequest = UpdateAccountRequest_1.default;
var DeleteAccountRequest_1 = tslib_1.__importDefault(require("./DeleteAccountRequest"));
exports.DeleteAccountRequest = DeleteAccountRequest_1.default;
var DescribeProjectsRequest_1 = tslib_1.__importDefault(require("./DescribeProjectsRequest"));
exports.DescribeProjectsRequest = DescribeProjectsRequest_1.default;
var CreateProjectRequest_1 = tslib_1.__importDefault(require("./CreateProjectRequest"));
exports.CreateProjectRequest = CreateProjectRequest_1.default;
var GetProjectRequest_1 = tslib_1.__importDefault(require("./GetProjectRequest"));
exports.GetProjectRequest = GetProjectRequest_1.default;
var GetProjectTokenRequest_1 = tslib_1.__importDefault(require("./GetProjectTokenRequest"));
exports.GetProjectTokenRequest = GetProjectTokenRequest_1.default;
var GetProjectTokenByIdentifierRequest_1 = tslib_1.__importDefault(require("./GetProjectTokenByIdentifierRequest"));
exports.GetProjectTokenByIdentifierRequest = GetProjectTokenByIdentifierRequest_1.default;
var UpdateProjectRequest_1 = tslib_1.__importDefault(require("./UpdateProjectRequest"));
exports.UpdateProjectRequest = UpdateProjectRequest_1.default;
var ActivateRegionRequest_1 = tslib_1.__importDefault(require("./ActivateRegionRequest"));
exports.ActivateRegionRequest = ActivateRegionRequest_1.default;
var WaitActivateRegionRequest_1 = tslib_1.__importDefault(require("./WaitActivateRegionRequest"));
exports.WaitActivateRegionRequest = WaitActivateRegionRequest_1.default;
var DeleteProjectRequest_1 = tslib_1.__importDefault(require("./DeleteProjectRequest"));
exports.DeleteProjectRequest = DeleteProjectRequest_1.default;
var DescribeBillingMethodsRequest_1 = tslib_1.__importDefault(require("./DescribeBillingMethodsRequest"));
exports.DescribeBillingMethodsRequest = DescribeBillingMethodsRequest_1.default;
var CreateBillingMethodRequest_1 = tslib_1.__importDefault(require("./CreateBillingMethodRequest"));
exports.CreateBillingMethodRequest = CreateBillingMethodRequest_1.default;
var GetBillingMethodRequest_1 = tslib_1.__importDefault(require("./GetBillingMethodRequest"));
exports.GetBillingMethodRequest = GetBillingMethodRequest_1.default;
var UpdateBillingMethodRequest_1 = tslib_1.__importDefault(require("./UpdateBillingMethodRequest"));
exports.UpdateBillingMethodRequest = UpdateBillingMethodRequest_1.default;
var DeleteBillingMethodRequest_1 = tslib_1.__importDefault(require("./DeleteBillingMethodRequest"));
exports.DeleteBillingMethodRequest = DeleteBillingMethodRequest_1.default;
var DescribeReceiptsRequest_1 = tslib_1.__importDefault(require("./DescribeReceiptsRequest"));
exports.DescribeReceiptsRequest = DescribeReceiptsRequest_1.default;
var DescribeBillingsRequest_1 = tslib_1.__importDefault(require("./DescribeBillingsRequest"));
exports.DescribeBillingsRequest = DescribeBillingsRequest_1.default;
var DescribeDumpProgressesRequest_1 = tslib_1.__importDefault(require("./DescribeDumpProgressesRequest"));
exports.DescribeDumpProgressesRequest = DescribeDumpProgressesRequest_1.default;
var GetDumpProgressRequest_1 = tslib_1.__importDefault(require("./GetDumpProgressRequest"));
exports.GetDumpProgressRequest = GetDumpProgressRequest_1.default;
var WaitDumpUserDataRequest_1 = tslib_1.__importDefault(require("./WaitDumpUserDataRequest"));
exports.WaitDumpUserDataRequest = WaitDumpUserDataRequest_1.default;
var ArchiveDumpUserDataRequest_1 = tslib_1.__importDefault(require("./ArchiveDumpUserDataRequest"));
exports.ArchiveDumpUserDataRequest = ArchiveDumpUserDataRequest_1.default;
var DumpUserDataRequest_1 = tslib_1.__importDefault(require("./DumpUserDataRequest"));
exports.DumpUserDataRequest = DumpUserDataRequest_1.default;
var GetDumpUserDataRequest_1 = tslib_1.__importDefault(require("./GetDumpUserDataRequest"));
exports.GetDumpUserDataRequest = GetDumpUserDataRequest_1.default;
var DescribeCleanProgressesRequest_1 = tslib_1.__importDefault(require("./DescribeCleanProgressesRequest"));
exports.DescribeCleanProgressesRequest = DescribeCleanProgressesRequest_1.default;
var GetCleanProgressRequest_1 = tslib_1.__importDefault(require("./GetCleanProgressRequest"));
exports.GetCleanProgressRequest = GetCleanProgressRequest_1.default;
var WaitCleanUserDataRequest_1 = tslib_1.__importDefault(require("./WaitCleanUserDataRequest"));
exports.WaitCleanUserDataRequest = WaitCleanUserDataRequest_1.default;
var CleanUserDataRequest_1 = tslib_1.__importDefault(require("./CleanUserDataRequest"));
exports.CleanUserDataRequest = CleanUserDataRequest_1.default;
//# sourceMappingURL=index.js.map