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
  Gathering,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  AttributeRange,
  CapacityOfRole,
  Attribute,
  Player,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeGatheringsRequest,
  CreateGatheringRequest,
  CreateGatheringByUserIdRequest,
  UpdateGatheringRequest,
  UpdateGatheringByUserIdRequest,
  DoMatchmakingByPlayerRequest,
  DoMatchmakingRequest,
  GetGatheringRequest,
  CancelMatchmakingRequest,
  CancelMatchmakingByUserIdRequest,
  DeleteGatheringRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeGatheringsResult,
  CreateGatheringResult,
  CreateGatheringByUserIdResult,
  UpdateGatheringResult,
  UpdateGatheringByUserIdResult,
  DoMatchmakingByPlayerResult,
  DoMatchmakingResult,
  GetGatheringResult,
  CancelMatchmakingResult,
  CancelMatchmakingByUserIdResult,
  DeleteGatheringResult,
} from './result';
import { Gs2MatchmakingRestClient } from './rest';

export default {
  Namespace,
  Gathering,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  AttributeRange,
  CapacityOfRole,
  Attribute,
  Player,
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
  DescribeGatheringsRequest,
  DescribeGatheringsResult,
  CreateGatheringRequest,
  CreateGatheringResult,
  CreateGatheringByUserIdRequest,
  CreateGatheringByUserIdResult,
  UpdateGatheringRequest,
  UpdateGatheringResult,
  UpdateGatheringByUserIdRequest,
  UpdateGatheringByUserIdResult,
  DoMatchmakingByPlayerRequest,
  DoMatchmakingByPlayerResult,
  DoMatchmakingRequest,
  DoMatchmakingResult,
  GetGatheringRequest,
  GetGatheringResult,
  CancelMatchmakingRequest,
  CancelMatchmakingResult,
  CancelMatchmakingByUserIdRequest,
  CancelMatchmakingByUserIdResult,
  DeleteGatheringRequest,
  DeleteGatheringResult,
  Gs2MatchmakingRestClient,
};
