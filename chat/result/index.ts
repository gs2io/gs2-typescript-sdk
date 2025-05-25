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
import DescribeNamespacesResult from "./DescribeNamespacesResult"
import CreateNamespaceResult from "./CreateNamespaceResult"
import GetNamespaceStatusResult from "./GetNamespaceStatusResult"
import GetNamespaceResult from "./GetNamespaceResult"
import UpdateNamespaceResult from "./UpdateNamespaceResult"
import DeleteNamespaceResult from "./DeleteNamespaceResult"
import GetServiceVersionResult from "./GetServiceVersionResult"
import DumpUserDataByUserIdResult from "./DumpUserDataByUserIdResult"
import CheckDumpUserDataByUserIdResult from "./CheckDumpUserDataByUserIdResult"
import CleanUserDataByUserIdResult from "./CleanUserDataByUserIdResult"
import CheckCleanUserDataByUserIdResult from "./CheckCleanUserDataByUserIdResult"
import PrepareImportUserDataByUserIdResult from "./PrepareImportUserDataByUserIdResult"
import ImportUserDataByUserIdResult from "./ImportUserDataByUserIdResult"
import CheckImportUserDataByUserIdResult from "./CheckImportUserDataByUserIdResult"
import DescribeRoomsResult from "./DescribeRoomsResult"
import CreateRoomResult from "./CreateRoomResult"
import CreateRoomFromBackendResult from "./CreateRoomFromBackendResult"
import GetRoomResult from "./GetRoomResult"
import UpdateRoomResult from "./UpdateRoomResult"
import UpdateRoomFromBackendResult from "./UpdateRoomFromBackendResult"
import DeleteRoomResult from "./DeleteRoomResult"
import DeleteRoomFromBackendResult from "./DeleteRoomFromBackendResult"
import DescribeMessagesResult from "./DescribeMessagesResult"
import DescribeMessagesByUserIdResult from "./DescribeMessagesByUserIdResult"
import DescribeLatestMessagesResult from "./DescribeLatestMessagesResult"
import DescribeLatestMessagesByUserIdResult from "./DescribeLatestMessagesByUserIdResult"
import PostResult from "./PostResult"
import PostByUserIdResult from "./PostByUserIdResult"
import GetMessageResult from "./GetMessageResult"
import GetMessageByUserIdResult from "./GetMessageByUserIdResult"
import DeleteMessageResult from "./DeleteMessageResult"
import DescribeSubscribesResult from "./DescribeSubscribesResult"
import DescribeSubscribesByUserIdResult from "./DescribeSubscribesByUserIdResult"
import DescribeSubscribesByRoomNameResult from "./DescribeSubscribesByRoomNameResult"
import SubscribeResult from "./SubscribeResult"
import SubscribeByUserIdResult from "./SubscribeByUserIdResult"
import GetSubscribeResult from "./GetSubscribeResult"
import GetSubscribeByUserIdResult from "./GetSubscribeByUserIdResult"
import UpdateNotificationTypeResult from "./UpdateNotificationTypeResult"
import UpdateNotificationTypeByUserIdResult from "./UpdateNotificationTypeByUserIdResult"
import UnsubscribeResult from "./UnsubscribeResult"
import UnsubscribeByUserIdResult from "./UnsubscribeByUserIdResult"

export {
    DescribeNamespacesResult,
    CreateNamespaceResult,
    GetNamespaceStatusResult,
    GetNamespaceResult,
    UpdateNamespaceResult,
    DeleteNamespaceResult,
    GetServiceVersionResult,
    DumpUserDataByUserIdResult,
    CheckDumpUserDataByUserIdResult,
    CleanUserDataByUserIdResult,
    CheckCleanUserDataByUserIdResult,
    PrepareImportUserDataByUserIdResult,
    ImportUserDataByUserIdResult,
    CheckImportUserDataByUserIdResult,
    DescribeRoomsResult,
    CreateRoomResult,
    CreateRoomFromBackendResult,
    GetRoomResult,
    UpdateRoomResult,
    UpdateRoomFromBackendResult,
    DeleteRoomResult,
    DeleteRoomFromBackendResult,
    DescribeMessagesResult,
    DescribeMessagesByUserIdResult,
    DescribeLatestMessagesResult,
    DescribeLatestMessagesByUserIdResult,
    PostResult,
    PostByUserIdResult,
    GetMessageResult,
    GetMessageByUserIdResult,
    DeleteMessageResult,
    DescribeSubscribesResult,
    DescribeSubscribesByUserIdResult,
    DescribeSubscribesByRoomNameResult,
    SubscribeResult,
    SubscribeByUserIdResult,
    GetSubscribeResult,
    GetSubscribeByUserIdResult,
    UpdateNotificationTypeResult,
    UpdateNotificationTypeByUserIdResult,
    UnsubscribeResult,
    UnsubscribeByUserIdResult,
};