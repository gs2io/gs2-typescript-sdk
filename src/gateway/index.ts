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
  WebSocketSession,
  FirebaseToken,
  ResponseCache,
  LogSetting,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeWebSocketSessionsRequest,
  DescribeWebSocketSessionsByUserIdRequest,
  SetUserIdRequest,
  SetUserIdByUserIdRequest,
  GetWebSocketSessionRequest,
  GetWebSocketSessionByConnectionIdRequest,
  SendNotificationRequest,
  SetFirebaseTokenRequest,
  SetFirebaseTokenByUserIdRequest,
  GetFirebaseTokenRequest,
  GetFirebaseTokenByUserIdRequest,
  DeleteFirebaseTokenRequest,
  DeleteFirebaseTokenByUserIdRequest,
  SendMobileNotificationByUserIdRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeWebSocketSessionsResult,
  DescribeWebSocketSessionsByUserIdResult,
  SetUserIdResult,
  SetUserIdByUserIdResult,
  GetWebSocketSessionResult,
  GetWebSocketSessionByConnectionIdResult,
  SendNotificationResult,
  SetFirebaseTokenResult,
  SetFirebaseTokenByUserIdResult,
  GetFirebaseTokenResult,
  GetFirebaseTokenByUserIdResult,
  DeleteFirebaseTokenResult,
  DeleteFirebaseTokenByUserIdResult,
  SendMobileNotificationByUserIdResult,
} from './result';
import { Gs2GatewayRestClient } from './rest';

export default {
  Namespace,
  WebSocketSession,
  FirebaseToken,
  ResponseCache,
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
  DescribeWebSocketSessionsRequest,
  DescribeWebSocketSessionsResult,
  DescribeWebSocketSessionsByUserIdRequest,
  DescribeWebSocketSessionsByUserIdResult,
  SetUserIdRequest,
  SetUserIdResult,
  SetUserIdByUserIdRequest,
  SetUserIdByUserIdResult,
  GetWebSocketSessionRequest,
  GetWebSocketSessionResult,
  GetWebSocketSessionByConnectionIdRequest,
  GetWebSocketSessionByConnectionIdResult,
  SendNotificationRequest,
  SendNotificationResult,
  SetFirebaseTokenRequest,
  SetFirebaseTokenResult,
  SetFirebaseTokenByUserIdRequest,
  SetFirebaseTokenByUserIdResult,
  GetFirebaseTokenRequest,
  GetFirebaseTokenResult,
  GetFirebaseTokenByUserIdRequest,
  GetFirebaseTokenByUserIdResult,
  DeleteFirebaseTokenRequest,
  DeleteFirebaseTokenResult,
  DeleteFirebaseTokenByUserIdRequest,
  DeleteFirebaseTokenByUserIdResult,
  SendMobileNotificationByUserIdRequest,
  SendMobileNotificationByUserIdResult,
  Gs2GatewayRestClient,
};
