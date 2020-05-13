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
  News,
  SetCookieRequestEntry,
  ResponseCache,
  LogSetting,
  GitHubCheckoutSetting,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeNewsRequest,
  DescribeNewsByUserIdRequest,
  WantGrantRequest,
  WantGrantByUserIdRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeNewsResult,
  DescribeNewsByUserIdResult,
  WantGrantResult,
  WantGrantByUserIdResult,
} from './result';
import { Gs2NewsRestClient } from './rest';

export default {
  Namespace,
  News,
  SetCookieRequestEntry,
  ResponseCache,
  LogSetting,
  GitHubCheckoutSetting,
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
  DescribeNewsRequest,
  DescribeNewsResult,
  DescribeNewsByUserIdRequest,
  DescribeNewsByUserIdResult,
  WantGrantRequest,
  WantGrantResult,
  WantGrantByUserIdRequest,
  WantGrantByUserIdResult,
  Gs2NewsRestClient,
};
