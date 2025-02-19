"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReceivedByUserIdRequest = exports.UpdateReceivedByUserIdRequest = exports.GetReceivedByUserIdRequest = exports.GetGlobalMessageRequest = exports.DescribeGlobalMessagesRequest = exports.DeleteGlobalMessageMasterRequest = exports.UpdateGlobalMessageMasterRequest = exports.GetGlobalMessageMasterRequest = exports.CreateGlobalMessageMasterRequest = exports.DescribeGlobalMessageMastersRequest = exports.UpdateCurrentMessageMasterFromGitHubRequest = exports.UpdateCurrentMessageMasterRequest = exports.GetCurrentMessageMasterRequest = exports.ExportMasterRequest = exports.DeleteMessageByStampTaskRequest = exports.OpenByStampTaskRequest = exports.SendByStampSheetRequest = exports.DeleteMessageByUserIdRequest = exports.DeleteMessageRequest = exports.BatchReadMessagesByUserIdRequest = exports.BatchReadMessagesRequest = exports.ReadMessageByUserIdRequest = exports.ReadMessageRequest = exports.OpenMessageByUserIdRequest = exports.OpenMessageRequest = exports.ReceiveGlobalMessageByUserIdRequest = exports.ReceiveGlobalMessageRequest = exports.GetMessageByUserIdRequest = exports.GetMessageRequest = exports.SendMessageByUserIdRequest = exports.DescribeMessagesByUserIdRequest = exports.DescribeMessagesRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeMessagesRequest_1 = tslib_1.__importDefault(require("./DescribeMessagesRequest"));
exports.DescribeMessagesRequest = DescribeMessagesRequest_1.default;
var DescribeMessagesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeMessagesByUserIdRequest"));
exports.DescribeMessagesByUserIdRequest = DescribeMessagesByUserIdRequest_1.default;
var SendMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./SendMessageByUserIdRequest"));
exports.SendMessageByUserIdRequest = SendMessageByUserIdRequest_1.default;
var GetMessageRequest_1 = tslib_1.__importDefault(require("./GetMessageRequest"));
exports.GetMessageRequest = GetMessageRequest_1.default;
var GetMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./GetMessageByUserIdRequest"));
exports.GetMessageByUserIdRequest = GetMessageByUserIdRequest_1.default;
var ReceiveGlobalMessageRequest_1 = tslib_1.__importDefault(require("./ReceiveGlobalMessageRequest"));
exports.ReceiveGlobalMessageRequest = ReceiveGlobalMessageRequest_1.default;
var ReceiveGlobalMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./ReceiveGlobalMessageByUserIdRequest"));
exports.ReceiveGlobalMessageByUserIdRequest = ReceiveGlobalMessageByUserIdRequest_1.default;
var OpenMessageRequest_1 = tslib_1.__importDefault(require("./OpenMessageRequest"));
exports.OpenMessageRequest = OpenMessageRequest_1.default;
var OpenMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./OpenMessageByUserIdRequest"));
exports.OpenMessageByUserIdRequest = OpenMessageByUserIdRequest_1.default;
var ReadMessageRequest_1 = tslib_1.__importDefault(require("./ReadMessageRequest"));
exports.ReadMessageRequest = ReadMessageRequest_1.default;
var ReadMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./ReadMessageByUserIdRequest"));
exports.ReadMessageByUserIdRequest = ReadMessageByUserIdRequest_1.default;
var BatchReadMessagesRequest_1 = tslib_1.__importDefault(require("./BatchReadMessagesRequest"));
exports.BatchReadMessagesRequest = BatchReadMessagesRequest_1.default;
var BatchReadMessagesByUserIdRequest_1 = tslib_1.__importDefault(require("./BatchReadMessagesByUserIdRequest"));
exports.BatchReadMessagesByUserIdRequest = BatchReadMessagesByUserIdRequest_1.default;
var DeleteMessageRequest_1 = tslib_1.__importDefault(require("./DeleteMessageRequest"));
exports.DeleteMessageRequest = DeleteMessageRequest_1.default;
var DeleteMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteMessageByUserIdRequest"));
exports.DeleteMessageByUserIdRequest = DeleteMessageByUserIdRequest_1.default;
var SendByStampSheetRequest_1 = tslib_1.__importDefault(require("./SendByStampSheetRequest"));
exports.SendByStampSheetRequest = SendByStampSheetRequest_1.default;
var OpenByStampTaskRequest_1 = tslib_1.__importDefault(require("./OpenByStampTaskRequest"));
exports.OpenByStampTaskRequest = OpenByStampTaskRequest_1.default;
var DeleteMessageByStampTaskRequest_1 = tslib_1.__importDefault(require("./DeleteMessageByStampTaskRequest"));
exports.DeleteMessageByStampTaskRequest = DeleteMessageByStampTaskRequest_1.default;
var ExportMasterRequest_1 = tslib_1.__importDefault(require("./ExportMasterRequest"));
exports.ExportMasterRequest = ExportMasterRequest_1.default;
var GetCurrentMessageMasterRequest_1 = tslib_1.__importDefault(require("./GetCurrentMessageMasterRequest"));
exports.GetCurrentMessageMasterRequest = GetCurrentMessageMasterRequest_1.default;
var UpdateCurrentMessageMasterRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentMessageMasterRequest"));
exports.UpdateCurrentMessageMasterRequest = UpdateCurrentMessageMasterRequest_1.default;
var UpdateCurrentMessageMasterFromGitHubRequest_1 = tslib_1.__importDefault(require("./UpdateCurrentMessageMasterFromGitHubRequest"));
exports.UpdateCurrentMessageMasterFromGitHubRequest = UpdateCurrentMessageMasterFromGitHubRequest_1.default;
var DescribeGlobalMessageMastersRequest_1 = tslib_1.__importDefault(require("./DescribeGlobalMessageMastersRequest"));
exports.DescribeGlobalMessageMastersRequest = DescribeGlobalMessageMastersRequest_1.default;
var CreateGlobalMessageMasterRequest_1 = tslib_1.__importDefault(require("./CreateGlobalMessageMasterRequest"));
exports.CreateGlobalMessageMasterRequest = CreateGlobalMessageMasterRequest_1.default;
var GetGlobalMessageMasterRequest_1 = tslib_1.__importDefault(require("./GetGlobalMessageMasterRequest"));
exports.GetGlobalMessageMasterRequest = GetGlobalMessageMasterRequest_1.default;
var UpdateGlobalMessageMasterRequest_1 = tslib_1.__importDefault(require("./UpdateGlobalMessageMasterRequest"));
exports.UpdateGlobalMessageMasterRequest = UpdateGlobalMessageMasterRequest_1.default;
var DeleteGlobalMessageMasterRequest_1 = tslib_1.__importDefault(require("./DeleteGlobalMessageMasterRequest"));
exports.DeleteGlobalMessageMasterRequest = DeleteGlobalMessageMasterRequest_1.default;
var DescribeGlobalMessagesRequest_1 = tslib_1.__importDefault(require("./DescribeGlobalMessagesRequest"));
exports.DescribeGlobalMessagesRequest = DescribeGlobalMessagesRequest_1.default;
var GetGlobalMessageRequest_1 = tslib_1.__importDefault(require("./GetGlobalMessageRequest"));
exports.GetGlobalMessageRequest = GetGlobalMessageRequest_1.default;
var GetReceivedByUserIdRequest_1 = tslib_1.__importDefault(require("./GetReceivedByUserIdRequest"));
exports.GetReceivedByUserIdRequest = GetReceivedByUserIdRequest_1.default;
var UpdateReceivedByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateReceivedByUserIdRequest"));
exports.UpdateReceivedByUserIdRequest = UpdateReceivedByUserIdRequest_1.default;
var DeleteReceivedByUserIdRequest_1 = tslib_1.__importDefault(require("./DeleteReceivedByUserIdRequest"));
exports.DeleteReceivedByUserIdRequest = DeleteReceivedByUserIdRequest_1.default;
//# sourceMappingURL=index.js.map