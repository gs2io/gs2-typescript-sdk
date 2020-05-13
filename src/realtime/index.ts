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

import {
  Namespace,
  Room,
  NotificationSetting,
  LogSetting,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeRoomsRequest,
  WantRoomRequest,
  GetRoomRequest,
  DeleteRoomRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeRoomsResult,
  WantRoomResult,
  GetRoomResult,
  DeleteRoomResult,
} from './result';
import { Gs2RealtimeRestClient } from './rest';

export default {
  Namespace,
  Room,
  NotificationSetting,
  LogSetting,
  DescribeNamespacesRequest,
  DescribeNamespacesResult,
  CreateNamespaceRequest,
  CreateNamespaceResult,
  GetNamespaceStatusRequest,
  GetNamespaceStatusResult,
  GetNamespaceRequest,
  GetNamespaceResult,
  UpdateNamespaceRequest,
  UpdateNamespaceResult,
  DeleteNamespaceRequest,
  DeleteNamespaceResult,
  DescribeRoomsRequest,
  DescribeRoomsResult,
  WantRoomRequest,
  WantRoomResult,
  GetRoomRequest,
  GetRoomResult,
  DeleteRoomRequest,
  DeleteRoomResult,
  Gs2RealtimeRestClient,
};
