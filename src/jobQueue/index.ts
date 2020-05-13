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
  Job,
  JobResult,
  DeadLetterJob,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  JobEntry,
  JobResultBody,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeJobsByUserIdRequest,
  GetJobByUserIdRequest,
  PushByUserIdRequest,
  RunRequest,
  RunByUserIdRequest,
  DeleteJobByUserIdRequest,
  PushByStampSheetRequest,
  DescribeDeadLetterJobsByUserIdRequest,
  GetDeadLetterJobByUserIdRequest,
  DeleteDeadLetterJobByUserIdRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeJobsByUserIdResult,
  GetJobByUserIdResult,
  PushByUserIdResult,
  RunResult,
  RunByUserIdResult,
  DeleteJobByUserIdResult,
  PushByStampSheetResult,
  DescribeDeadLetterJobsByUserIdResult,
  GetDeadLetterJobByUserIdResult,
  DeleteDeadLetterJobByUserIdResult,
} from './result';
import { Gs2JobQueueRestClient } from './rest';

export default {
  Namespace,
  Job,
  JobResult,
  DeadLetterJob,
  ResponseCache,
  NotificationSetting,
  LogSetting,
  JobEntry,
  JobResultBody,
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
  DescribeJobsByUserIdRequest,
  DescribeJobsByUserIdResult,
  GetJobByUserIdRequest,
  GetJobByUserIdResult,
  PushByUserIdRequest,
  PushByUserIdResult,
  RunRequest,
  RunResult,
  RunByUserIdRequest,
  RunByUserIdResult,
  DeleteJobByUserIdRequest,
  DeleteJobByUserIdResult,
  PushByStampSheetRequest,
  PushByStampSheetResult,
  DescribeDeadLetterJobsByUserIdRequest,
  DescribeDeadLetterJobsByUserIdResult,
  GetDeadLetterJobByUserIdRequest,
  GetDeadLetterJobByUserIdResult,
  DeleteDeadLetterJobByUserIdRequest,
  DeleteDeadLetterJobByUserIdResult,
  Gs2JobQueueRestClient,
};
