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
  Account,
  TakeOver,
  ResponseCache,
  ScriptSetting,
  LogSetting,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeAccountsRequest,
  CreateAccountRequest,
  UpdateTimeOffsetRequest,
  GetAccountRequest,
  DeleteAccountRequest,
  AuthenticationRequest,
  DescribeTakeOversRequest,
  DescribeTakeOversByUserIdRequest,
  CreateTakeOverRequest,
  CreateTakeOverByUserIdRequest,
  GetTakeOverRequest,
  GetTakeOverByUserIdRequest,
  UpdateTakeOverRequest,
  UpdateTakeOverByUserIdRequest,
  DeleteTakeOverRequest,
  DeleteTakeOverByUserIdentifierRequest,
  DoTakeOverRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeAccountsResult,
  CreateAccountResult,
  UpdateTimeOffsetResult,
  GetAccountResult,
  DeleteAccountResult,
  AuthenticationResult,
  DescribeTakeOversResult,
  DescribeTakeOversByUserIdResult,
  CreateTakeOverResult,
  CreateTakeOverByUserIdResult,
  GetTakeOverResult,
  GetTakeOverByUserIdResult,
  UpdateTakeOverResult,
  UpdateTakeOverByUserIdResult,
  DeleteTakeOverResult,
  DeleteTakeOverByUserIdentifierResult,
  DoTakeOverResult,
} from './result';
import { Gs2AccountRestClient } from './rest';

export default {
  Namespace,
  Account,
  TakeOver,
  ResponseCache,
  ScriptSetting,
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
  DescribeAccountsRequest,
  DescribeAccountsResult,
  CreateAccountRequest,
  CreateAccountResult,
  UpdateTimeOffsetRequest,
  UpdateTimeOffsetResult,
  GetAccountRequest,
  GetAccountResult,
  DeleteAccountRequest,
  DeleteAccountResult,
  AuthenticationRequest,
  AuthenticationResult,
  DescribeTakeOversRequest,
  DescribeTakeOversResult,
  DescribeTakeOversByUserIdRequest,
  DescribeTakeOversByUserIdResult,
  CreateTakeOverRequest,
  CreateTakeOverResult,
  CreateTakeOverByUserIdRequest,
  CreateTakeOverByUserIdResult,
  GetTakeOverRequest,
  GetTakeOverResult,
  GetTakeOverByUserIdRequest,
  GetTakeOverByUserIdResult,
  UpdateTakeOverRequest,
  UpdateTakeOverResult,
  UpdateTakeOverByUserIdRequest,
  UpdateTakeOverByUserIdResult,
  DeleteTakeOverRequest,
  DeleteTakeOverResult,
  DeleteTakeOverByUserIdentifierRequest,
  DeleteTakeOverByUserIdentifierResult,
  DoTakeOverRequest,
  DoTakeOverResult,
  Gs2AccountRestClient,
};
