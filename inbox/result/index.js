"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReceivedByUserIdResult = exports.UpdateReceivedByUserIdResult = exports.GetReceivedByUserIdResult = exports.GetGlobalMessageResult = exports.DescribeGlobalMessagesResult = exports.DeleteGlobalMessageMasterResult = exports.UpdateGlobalMessageMasterResult = exports.GetGlobalMessageMasterResult = exports.CreateGlobalMessageMasterResult = exports.DescribeGlobalMessageMastersResult = exports.UpdateCurrentMessageMasterFromGitHubResult = exports.UpdateCurrentMessageMasterResult = exports.PreUpdateCurrentMessageMasterResult = exports.GetCurrentMessageMasterResult = exports.ExportMasterResult = exports.DeleteMessageByStampTaskResult = exports.OpenByStampTaskResult = exports.SendByStampSheetResult = exports.DeleteMessageByUserIdResult = exports.DeleteMessageResult = exports.BatchReadMessagesByUserIdResult = exports.BatchReadMessagesResult = exports.ReadMessageByUserIdResult = exports.ReadMessageResult = exports.CloseMessageByUserIdResult = exports.OpenMessageByUserIdResult = exports.OpenMessageResult = exports.ReceiveGlobalMessageByUserIdResult = exports.ReceiveGlobalMessageResult = exports.GetMessageByUserIdResult = exports.GetMessageResult = exports.SendMessageByUserIdResult = exports.DescribeMessagesByUserIdResult = exports.DescribeMessagesResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var GetServiceVersionResult_1 = tslib_1.__importDefault(require("./GetServiceVersionResult"));
exports.GetServiceVersionResult = GetServiceVersionResult_1.default;
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
var DescribeMessagesResult_1 = tslib_1.__importDefault(require("./DescribeMessagesResult"));
exports.DescribeMessagesResult = DescribeMessagesResult_1.default;
var DescribeMessagesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeMessagesByUserIdResult"));
exports.DescribeMessagesByUserIdResult = DescribeMessagesByUserIdResult_1.default;
var SendMessageByUserIdResult_1 = tslib_1.__importDefault(require("./SendMessageByUserIdResult"));
exports.SendMessageByUserIdResult = SendMessageByUserIdResult_1.default;
var GetMessageResult_1 = tslib_1.__importDefault(require("./GetMessageResult"));
exports.GetMessageResult = GetMessageResult_1.default;
var GetMessageByUserIdResult_1 = tslib_1.__importDefault(require("./GetMessageByUserIdResult"));
exports.GetMessageByUserIdResult = GetMessageByUserIdResult_1.default;
var ReceiveGlobalMessageResult_1 = tslib_1.__importDefault(require("./ReceiveGlobalMessageResult"));
exports.ReceiveGlobalMessageResult = ReceiveGlobalMessageResult_1.default;
var ReceiveGlobalMessageByUserIdResult_1 = tslib_1.__importDefault(require("./ReceiveGlobalMessageByUserIdResult"));
exports.ReceiveGlobalMessageByUserIdResult = ReceiveGlobalMessageByUserIdResult_1.default;
var OpenMessageResult_1 = tslib_1.__importDefault(require("./OpenMessageResult"));
exports.OpenMessageResult = OpenMessageResult_1.default;
var OpenMessageByUserIdResult_1 = tslib_1.__importDefault(require("./OpenMessageByUserIdResult"));
exports.OpenMessageByUserIdResult = OpenMessageByUserIdResult_1.default;
var CloseMessageByUserIdResult_1 = tslib_1.__importDefault(require("./CloseMessageByUserIdResult"));
exports.CloseMessageByUserIdResult = CloseMessageByUserIdResult_1.default;
var ReadMessageResult_1 = tslib_1.__importDefault(require("./ReadMessageResult"));
exports.ReadMessageResult = ReadMessageResult_1.default;
var ReadMessageByUserIdResult_1 = tslib_1.__importDefault(require("./ReadMessageByUserIdResult"));
exports.ReadMessageByUserIdResult = ReadMessageByUserIdResult_1.default;
var BatchReadMessagesResult_1 = tslib_1.__importDefault(require("./BatchReadMessagesResult"));
exports.BatchReadMessagesResult = BatchReadMessagesResult_1.default;
var BatchReadMessagesByUserIdResult_1 = tslib_1.__importDefault(require("./BatchReadMessagesByUserIdResult"));
exports.BatchReadMessagesByUserIdResult = BatchReadMessagesByUserIdResult_1.default;
var DeleteMessageResult_1 = tslib_1.__importDefault(require("./DeleteMessageResult"));
exports.DeleteMessageResult = DeleteMessageResult_1.default;
var DeleteMessageByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteMessageByUserIdResult"));
exports.DeleteMessageByUserIdResult = DeleteMessageByUserIdResult_1.default;
var SendByStampSheetResult_1 = tslib_1.__importDefault(require("./SendByStampSheetResult"));
exports.SendByStampSheetResult = SendByStampSheetResult_1.default;
var OpenByStampTaskResult_1 = tslib_1.__importDefault(require("./OpenByStampTaskResult"));
exports.OpenByStampTaskResult = OpenByStampTaskResult_1.default;
var DeleteMessageByStampTaskResult_1 = tslib_1.__importDefault(require("./DeleteMessageByStampTaskResult"));
exports.DeleteMessageByStampTaskResult = DeleteMessageByStampTaskResult_1.default;
var ExportMasterResult_1 = tslib_1.__importDefault(require("./ExportMasterResult"));
exports.ExportMasterResult = ExportMasterResult_1.default;
var GetCurrentMessageMasterResult_1 = tslib_1.__importDefault(require("./GetCurrentMessageMasterResult"));
exports.GetCurrentMessageMasterResult = GetCurrentMessageMasterResult_1.default;
var PreUpdateCurrentMessageMasterResult_1 = tslib_1.__importDefault(require("./PreUpdateCurrentMessageMasterResult"));
exports.PreUpdateCurrentMessageMasterResult = PreUpdateCurrentMessageMasterResult_1.default;
var UpdateCurrentMessageMasterResult_1 = tslib_1.__importDefault(require("./UpdateCurrentMessageMasterResult"));
exports.UpdateCurrentMessageMasterResult = UpdateCurrentMessageMasterResult_1.default;
var UpdateCurrentMessageMasterFromGitHubResult_1 = tslib_1.__importDefault(require("./UpdateCurrentMessageMasterFromGitHubResult"));
exports.UpdateCurrentMessageMasterFromGitHubResult = UpdateCurrentMessageMasterFromGitHubResult_1.default;
var DescribeGlobalMessageMastersResult_1 = tslib_1.__importDefault(require("./DescribeGlobalMessageMastersResult"));
exports.DescribeGlobalMessageMastersResult = DescribeGlobalMessageMastersResult_1.default;
var CreateGlobalMessageMasterResult_1 = tslib_1.__importDefault(require("./CreateGlobalMessageMasterResult"));
exports.CreateGlobalMessageMasterResult = CreateGlobalMessageMasterResult_1.default;
var GetGlobalMessageMasterResult_1 = tslib_1.__importDefault(require("./GetGlobalMessageMasterResult"));
exports.GetGlobalMessageMasterResult = GetGlobalMessageMasterResult_1.default;
var UpdateGlobalMessageMasterResult_1 = tslib_1.__importDefault(require("./UpdateGlobalMessageMasterResult"));
exports.UpdateGlobalMessageMasterResult = UpdateGlobalMessageMasterResult_1.default;
var DeleteGlobalMessageMasterResult_1 = tslib_1.__importDefault(require("./DeleteGlobalMessageMasterResult"));
exports.DeleteGlobalMessageMasterResult = DeleteGlobalMessageMasterResult_1.default;
var DescribeGlobalMessagesResult_1 = tslib_1.__importDefault(require("./DescribeGlobalMessagesResult"));
exports.DescribeGlobalMessagesResult = DescribeGlobalMessagesResult_1.default;
var GetGlobalMessageResult_1 = tslib_1.__importDefault(require("./GetGlobalMessageResult"));
exports.GetGlobalMessageResult = GetGlobalMessageResult_1.default;
var GetReceivedByUserIdResult_1 = tslib_1.__importDefault(require("./GetReceivedByUserIdResult"));
exports.GetReceivedByUserIdResult = GetReceivedByUserIdResult_1.default;
var UpdateReceivedByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateReceivedByUserIdResult"));
exports.UpdateReceivedByUserIdResult = UpdateReceivedByUserIdResult_1.default;
var DeleteReceivedByUserIdResult_1 = tslib_1.__importDefault(require("./DeleteReceivedByUserIdResult"));
exports.DeleteReceivedByUserIdResult = DeleteReceivedByUserIdResult_1.default;
//# sourceMappingURL=index.js.map