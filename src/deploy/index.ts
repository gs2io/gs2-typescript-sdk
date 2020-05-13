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
  Stack,
  Resource,
  WorkingStack,
  WorkingResource,
  Event,
  Output,
  GitHubCheckoutSetting,
  OutputField,
} from './model';
import {
  DescribeStacksRequest,
  CreateStackRequest,
  CreateStackFromGitHubRequest,
  ValidateRequest,
  GetStackStatusRequest,
  GetStackRequest,
  UpdateStackRequest,
  UpdateStackFromGitHubRequest,
  DeleteStackRequest,
  ForceDeleteStackRequest,
  DeleteStackResourcesRequest,
  DeleteStackEntityRequest,
  DescribeResourcesRequest,
  GetResourceRequest,
  DescribeEventsRequest,
  GetEventRequest,
  DescribeOutputsRequest,
  GetOutputRequest,
} from './request';
import {
  DescribeStacksResult,
  CreateStackResult,
  CreateStackFromGitHubResult,
  ValidateResult,
  GetStackStatusResult,
  GetStackResult,
  UpdateStackResult,
  UpdateStackFromGitHubResult,
  DeleteStackResult,
  ForceDeleteStackResult,
  DeleteStackResourcesResult,
  DeleteStackEntityResult,
  DescribeResourcesResult,
  GetResourceResult,
  DescribeEventsResult,
  GetEventResult,
  DescribeOutputsResult,
  GetOutputResult,
} from './result';
import { Gs2DeployRestClient } from './rest';

export default {
  Stack,
  Resource,
  WorkingStack,
  WorkingResource,
  Event,
  Output,
  GitHubCheckoutSetting,
  OutputField,
  DescribeStacksRequest,
  DescribeStacksResult,
  CreateStackRequest,
  CreateStackResult,
  CreateStackFromGitHubRequest,
  CreateStackFromGitHubResult,
  ValidateRequest,
  ValidateResult,
  GetStackStatusRequest,
  GetStackStatusResult,
  GetStackRequest,
  GetStackResult,
  UpdateStackRequest,
  UpdateStackResult,
  UpdateStackFromGitHubRequest,
  UpdateStackFromGitHubResult,
  DeleteStackRequest,
  DeleteStackResult,
  ForceDeleteStackRequest,
  ForceDeleteStackResult,
  DeleteStackResourcesRequest,
  DeleteStackResourcesResult,
  DeleteStackEntityRequest,
  DeleteStackEntityResult,
  DescribeResourcesRequest,
  DescribeResourcesResult,
  GetResourceRequest,
  GetResourceResult,
  DescribeEventsRequest,
  DescribeEventsResult,
  GetEventRequest,
  GetEventResult,
  DescribeOutputsRequest,
  DescribeOutputsResult,
  GetOutputRequest,
  GetOutputResult,
  Gs2DeployRestClient,
};
