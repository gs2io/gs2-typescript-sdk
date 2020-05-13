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
  AccessLog,
  AccessLogCount,
  IssueStampSheetLog,
  IssueStampSheetLogCount,
  ExecuteStampSheetLog,
  ExecuteStampSheetLogCount,
  ExecuteStampTaskLog,
  ExecuteStampTaskLogCount,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  QueryAccessLogRequest,
  CountAccessLogRequest,
  QueryIssueStampSheetLogRequest,
  CountIssueStampSheetLogRequest,
  QueryExecuteStampSheetLogRequest,
  CountExecuteStampSheetLogRequest,
  QueryExecuteStampTaskLogRequest,
  CountExecuteStampTaskLogRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  QueryAccessLogResult,
  CountAccessLogResult,
  QueryIssueStampSheetLogResult,
  CountIssueStampSheetLogResult,
  QueryExecuteStampSheetLogResult,
  CountExecuteStampSheetLogResult,
  QueryExecuteStampTaskLogResult,
  CountExecuteStampTaskLogResult,
} from './result';
import { Gs2LogRestClient } from './rest';

export default {
  Namespace,
  AccessLog,
  AccessLogCount,
  IssueStampSheetLog,
  IssueStampSheetLogCount,
  ExecuteStampSheetLog,
  ExecuteStampSheetLogCount,
  ExecuteStampTaskLog,
  ExecuteStampTaskLogCount,
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
  QueryAccessLogRequest,
  QueryAccessLogResult,
  CountAccessLogRequest,
  CountAccessLogResult,
  QueryIssueStampSheetLogRequest,
  QueryIssueStampSheetLogResult,
  CountIssueStampSheetLogRequest,
  CountIssueStampSheetLogResult,
  QueryExecuteStampSheetLogRequest,
  QueryExecuteStampSheetLogResult,
  CountExecuteStampSheetLogRequest,
  CountExecuteStampSheetLogResult,
  QueryExecuteStampTaskLogRequest,
  QueryExecuteStampTaskLogResult,
  CountExecuteStampTaskLogRequest,
  CountExecuteStampTaskLogResult,
  Gs2LogRestClient,
};
