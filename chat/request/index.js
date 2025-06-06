"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsubscribeByUserIdRequest = exports.UnsubscribeRequest = exports.UpdateNotificationTypeByUserIdRequest = exports.UpdateNotificationTypeRequest = exports.GetSubscribeByUserIdRequest = exports.GetSubscribeRequest = exports.SubscribeByUserIdRequest = exports.SubscribeRequest = exports.DescribeSubscribesByRoomNameRequest = exports.DescribeSubscribesByUserIdRequest = exports.DescribeSubscribesRequest = exports.DeleteMessageRequest = exports.GetMessageByUserIdRequest = exports.GetMessageRequest = exports.PostByUserIdRequest = exports.PostRequest = exports.DescribeLatestMessagesByUserIdRequest = exports.DescribeLatestMessagesRequest = exports.DescribeMessagesByUserIdRequest = exports.DescribeMessagesRequest = exports.DeleteRoomFromBackendRequest = exports.DeleteRoomRequest = exports.UpdateRoomFromBackendRequest = exports.UpdateRoomRequest = exports.GetRoomRequest = exports.CreateRoomFromBackendRequest = exports.CreateRoomRequest = exports.DescribeRoomsRequest = exports.CheckImportUserDataByUserIdRequest = exports.ImportUserDataByUserIdRequest = exports.PrepareImportUserDataByUserIdRequest = exports.CheckCleanUserDataByUserIdRequest = exports.CleanUserDataByUserIdRequest = exports.CheckDumpUserDataByUserIdRequest = exports.DumpUserDataByUserIdRequest = exports.GetServiceVersionRequest = exports.DeleteNamespaceRequest = exports.UpdateNamespaceRequest = exports.GetNamespaceRequest = exports.GetNamespaceStatusRequest = exports.CreateNamespaceRequest = exports.DescribeNamespacesRequest = void 0;
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
var DescribeRoomsRequest_1 = tslib_1.__importDefault(require("./DescribeRoomsRequest"));
exports.DescribeRoomsRequest = DescribeRoomsRequest_1.default;
var CreateRoomRequest_1 = tslib_1.__importDefault(require("./CreateRoomRequest"));
exports.CreateRoomRequest = CreateRoomRequest_1.default;
var CreateRoomFromBackendRequest_1 = tslib_1.__importDefault(require("./CreateRoomFromBackendRequest"));
exports.CreateRoomFromBackendRequest = CreateRoomFromBackendRequest_1.default;
var GetRoomRequest_1 = tslib_1.__importDefault(require("./GetRoomRequest"));
exports.GetRoomRequest = GetRoomRequest_1.default;
var UpdateRoomRequest_1 = tslib_1.__importDefault(require("./UpdateRoomRequest"));
exports.UpdateRoomRequest = UpdateRoomRequest_1.default;
var UpdateRoomFromBackendRequest_1 = tslib_1.__importDefault(require("./UpdateRoomFromBackendRequest"));
exports.UpdateRoomFromBackendRequest = UpdateRoomFromBackendRequest_1.default;
var DeleteRoomRequest_1 = tslib_1.__importDefault(require("./DeleteRoomRequest"));
exports.DeleteRoomRequest = DeleteRoomRequest_1.default;
var DeleteRoomFromBackendRequest_1 = tslib_1.__importDefault(require("./DeleteRoomFromBackendRequest"));
exports.DeleteRoomFromBackendRequest = DeleteRoomFromBackendRequest_1.default;
var DescribeMessagesRequest_1 = tslib_1.__importDefault(require("./DescribeMessagesRequest"));
exports.DescribeMessagesRequest = DescribeMessagesRequest_1.default;
var DescribeMessagesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeMessagesByUserIdRequest"));
exports.DescribeMessagesByUserIdRequest = DescribeMessagesByUserIdRequest_1.default;
var DescribeLatestMessagesRequest_1 = tslib_1.__importDefault(require("./DescribeLatestMessagesRequest"));
exports.DescribeLatestMessagesRequest = DescribeLatestMessagesRequest_1.default;
var DescribeLatestMessagesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeLatestMessagesByUserIdRequest"));
exports.DescribeLatestMessagesByUserIdRequest = DescribeLatestMessagesByUserIdRequest_1.default;
var PostRequest_1 = tslib_1.__importDefault(require("./PostRequest"));
exports.PostRequest = PostRequest_1.default;
var PostByUserIdRequest_1 = tslib_1.__importDefault(require("./PostByUserIdRequest"));
exports.PostByUserIdRequest = PostByUserIdRequest_1.default;
var GetMessageRequest_1 = tslib_1.__importDefault(require("./GetMessageRequest"));
exports.GetMessageRequest = GetMessageRequest_1.default;
var GetMessageByUserIdRequest_1 = tslib_1.__importDefault(require("./GetMessageByUserIdRequest"));
exports.GetMessageByUserIdRequest = GetMessageByUserIdRequest_1.default;
var DeleteMessageRequest_1 = tslib_1.__importDefault(require("./DeleteMessageRequest"));
exports.DeleteMessageRequest = DeleteMessageRequest_1.default;
var DescribeSubscribesRequest_1 = tslib_1.__importDefault(require("./DescribeSubscribesRequest"));
exports.DescribeSubscribesRequest = DescribeSubscribesRequest_1.default;
var DescribeSubscribesByUserIdRequest_1 = tslib_1.__importDefault(require("./DescribeSubscribesByUserIdRequest"));
exports.DescribeSubscribesByUserIdRequest = DescribeSubscribesByUserIdRequest_1.default;
var DescribeSubscribesByRoomNameRequest_1 = tslib_1.__importDefault(require("./DescribeSubscribesByRoomNameRequest"));
exports.DescribeSubscribesByRoomNameRequest = DescribeSubscribesByRoomNameRequest_1.default;
var SubscribeRequest_1 = tslib_1.__importDefault(require("./SubscribeRequest"));
exports.SubscribeRequest = SubscribeRequest_1.default;
var SubscribeByUserIdRequest_1 = tslib_1.__importDefault(require("./SubscribeByUserIdRequest"));
exports.SubscribeByUserIdRequest = SubscribeByUserIdRequest_1.default;
var GetSubscribeRequest_1 = tslib_1.__importDefault(require("./GetSubscribeRequest"));
exports.GetSubscribeRequest = GetSubscribeRequest_1.default;
var GetSubscribeByUserIdRequest_1 = tslib_1.__importDefault(require("./GetSubscribeByUserIdRequest"));
exports.GetSubscribeByUserIdRequest = GetSubscribeByUserIdRequest_1.default;
var UpdateNotificationTypeRequest_1 = tslib_1.__importDefault(require("./UpdateNotificationTypeRequest"));
exports.UpdateNotificationTypeRequest = UpdateNotificationTypeRequest_1.default;
var UpdateNotificationTypeByUserIdRequest_1 = tslib_1.__importDefault(require("./UpdateNotificationTypeByUserIdRequest"));
exports.UpdateNotificationTypeByUserIdRequest = UpdateNotificationTypeByUserIdRequest_1.default;
var UnsubscribeRequest_1 = tslib_1.__importDefault(require("./UnsubscribeRequest"));
exports.UnsubscribeRequest = UnsubscribeRequest_1.default;
var UnsubscribeByUserIdRequest_1 = tslib_1.__importDefault(require("./UnsubscribeByUserIdRequest"));
exports.UnsubscribeByUserIdRequest = UnsubscribeByUserIdRequest_1.default;
//# sourceMappingURL=index.js.map