"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsubscribeByUserIdResult = exports.UnsubscribeResult = exports.UpdateNotificationTypeByUserIdResult = exports.UpdateNotificationTypeResult = exports.GetSubscribeByUserIdResult = exports.GetSubscribeResult = exports.SubscribeByUserIdResult = exports.SubscribeResult = exports.DescribeSubscribesByRoomNameResult = exports.DescribeSubscribesByUserIdResult = exports.DescribeSubscribesResult = exports.DeleteMessageResult = exports.GetMessageByUserIdResult = exports.GetMessageResult = exports.PostByUserIdResult = exports.PostResult = exports.DescribeLatestMessagesByUserIdResult = exports.DescribeLatestMessagesResult = exports.DescribeMessagesByUserIdResult = exports.DescribeMessagesResult = exports.DeleteRoomFromBackendResult = exports.DeleteRoomResult = exports.UpdateRoomFromBackendResult = exports.UpdateRoomResult = exports.GetRoomResult = exports.CreateRoomFromBackendResult = exports.CreateRoomResult = exports.DescribeRoomsResult = exports.CheckImportUserDataByUserIdResult = exports.ImportUserDataByUserIdResult = exports.PrepareImportUserDataByUserIdResult = exports.CheckCleanUserDataByUserIdResult = exports.CleanUserDataByUserIdResult = exports.CheckDumpUserDataByUserIdResult = exports.DumpUserDataByUserIdResult = exports.GetServiceVersionResult = exports.DeleteNamespaceResult = exports.UpdateNamespaceResult = exports.GetNamespaceResult = exports.GetNamespaceStatusResult = exports.CreateNamespaceResult = exports.DescribeNamespacesResult = void 0;
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
var DescribeRoomsResult_1 = tslib_1.__importDefault(require("./DescribeRoomsResult"));
exports.DescribeRoomsResult = DescribeRoomsResult_1.default;
var CreateRoomResult_1 = tslib_1.__importDefault(require("./CreateRoomResult"));
exports.CreateRoomResult = CreateRoomResult_1.default;
var CreateRoomFromBackendResult_1 = tslib_1.__importDefault(require("./CreateRoomFromBackendResult"));
exports.CreateRoomFromBackendResult = CreateRoomFromBackendResult_1.default;
var GetRoomResult_1 = tslib_1.__importDefault(require("./GetRoomResult"));
exports.GetRoomResult = GetRoomResult_1.default;
var UpdateRoomResult_1 = tslib_1.__importDefault(require("./UpdateRoomResult"));
exports.UpdateRoomResult = UpdateRoomResult_1.default;
var UpdateRoomFromBackendResult_1 = tslib_1.__importDefault(require("./UpdateRoomFromBackendResult"));
exports.UpdateRoomFromBackendResult = UpdateRoomFromBackendResult_1.default;
var DeleteRoomResult_1 = tslib_1.__importDefault(require("./DeleteRoomResult"));
exports.DeleteRoomResult = DeleteRoomResult_1.default;
var DeleteRoomFromBackendResult_1 = tslib_1.__importDefault(require("./DeleteRoomFromBackendResult"));
exports.DeleteRoomFromBackendResult = DeleteRoomFromBackendResult_1.default;
var DescribeMessagesResult_1 = tslib_1.__importDefault(require("./DescribeMessagesResult"));
exports.DescribeMessagesResult = DescribeMessagesResult_1.default;
var DescribeMessagesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeMessagesByUserIdResult"));
exports.DescribeMessagesByUserIdResult = DescribeMessagesByUserIdResult_1.default;
var DescribeLatestMessagesResult_1 = tslib_1.__importDefault(require("./DescribeLatestMessagesResult"));
exports.DescribeLatestMessagesResult = DescribeLatestMessagesResult_1.default;
var DescribeLatestMessagesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeLatestMessagesByUserIdResult"));
exports.DescribeLatestMessagesByUserIdResult = DescribeLatestMessagesByUserIdResult_1.default;
var PostResult_1 = tslib_1.__importDefault(require("./PostResult"));
exports.PostResult = PostResult_1.default;
var PostByUserIdResult_1 = tslib_1.__importDefault(require("./PostByUserIdResult"));
exports.PostByUserIdResult = PostByUserIdResult_1.default;
var GetMessageResult_1 = tslib_1.__importDefault(require("./GetMessageResult"));
exports.GetMessageResult = GetMessageResult_1.default;
var GetMessageByUserIdResult_1 = tslib_1.__importDefault(require("./GetMessageByUserIdResult"));
exports.GetMessageByUserIdResult = GetMessageByUserIdResult_1.default;
var DeleteMessageResult_1 = tslib_1.__importDefault(require("./DeleteMessageResult"));
exports.DeleteMessageResult = DeleteMessageResult_1.default;
var DescribeSubscribesResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesResult"));
exports.DescribeSubscribesResult = DescribeSubscribesResult_1.default;
var DescribeSubscribesByUserIdResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesByUserIdResult"));
exports.DescribeSubscribesByUserIdResult = DescribeSubscribesByUserIdResult_1.default;
var DescribeSubscribesByRoomNameResult_1 = tslib_1.__importDefault(require("./DescribeSubscribesByRoomNameResult"));
exports.DescribeSubscribesByRoomNameResult = DescribeSubscribesByRoomNameResult_1.default;
var SubscribeResult_1 = tslib_1.__importDefault(require("./SubscribeResult"));
exports.SubscribeResult = SubscribeResult_1.default;
var SubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./SubscribeByUserIdResult"));
exports.SubscribeByUserIdResult = SubscribeByUserIdResult_1.default;
var GetSubscribeResult_1 = tslib_1.__importDefault(require("./GetSubscribeResult"));
exports.GetSubscribeResult = GetSubscribeResult_1.default;
var GetSubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./GetSubscribeByUserIdResult"));
exports.GetSubscribeByUserIdResult = GetSubscribeByUserIdResult_1.default;
var UpdateNotificationTypeResult_1 = tslib_1.__importDefault(require("./UpdateNotificationTypeResult"));
exports.UpdateNotificationTypeResult = UpdateNotificationTypeResult_1.default;
var UpdateNotificationTypeByUserIdResult_1 = tslib_1.__importDefault(require("./UpdateNotificationTypeByUserIdResult"));
exports.UpdateNotificationTypeByUserIdResult = UpdateNotificationTypeByUserIdResult_1.default;
var UnsubscribeResult_1 = tslib_1.__importDefault(require("./UnsubscribeResult"));
exports.UnsubscribeResult = UnsubscribeResult_1.default;
var UnsubscribeByUserIdResult_1 = tslib_1.__importDefault(require("./UnsubscribeByUserIdResult"));
exports.UnsubscribeByUserIdResult = UnsubscribeByUserIdResult_1.default;
//# sourceMappingURL=index.js.map