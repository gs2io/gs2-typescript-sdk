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
  RateModel,
  RateModelMaster,
  CurrentRateMaster,
  ResponseCache,
  Config,
  GitHubCheckoutSetting,
  LogSetting,
  AcquireAction,
  ConsumeAction,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeRateModelsRequest,
  GetRateModelRequest,
  DescribeRateModelMastersRequest,
  CreateRateModelMasterRequest,
  GetRateModelMasterRequest,
  UpdateRateModelMasterRequest,
  DeleteRateModelMasterRequest,
  ExportMasterRequest,
  GetCurrentRateMasterRequest,
  UpdateCurrentRateMasterRequest,
  UpdateCurrentRateMasterFromGitHubRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeRateModelsResult,
  GetRateModelResult,
  DescribeRateModelMastersResult,
  CreateRateModelMasterResult,
  GetRateModelMasterResult,
  UpdateRateModelMasterResult,
  DeleteRateModelMasterResult,
  ExportMasterResult,
  GetCurrentRateMasterResult,
  UpdateCurrentRateMasterResult,
  UpdateCurrentRateMasterFromGitHubResult,
} from './result';
import { Gs2ExchangeRestClient } from './rest';

export default {
  Namespace,
  RateModel,
  RateModelMaster,
  CurrentRateMaster,
  ResponseCache,
  Config,
  GitHubCheckoutSetting,
  LogSetting,
  AcquireAction,
  ConsumeAction,
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
  DescribeRateModelsRequest,
  DescribeRateModelsResult,
  GetRateModelRequest,
  GetRateModelResult,
  DescribeRateModelMastersRequest,
  DescribeRateModelMastersResult,
  CreateRateModelMasterRequest,
  CreateRateModelMasterResult,
  GetRateModelMasterRequest,
  GetRateModelMasterResult,
  UpdateRateModelMasterRequest,
  UpdateRateModelMasterResult,
  DeleteRateModelMasterRequest,
  DeleteRateModelMasterResult,
  ExportMasterRequest,
  ExportMasterResult,
  GetCurrentRateMasterRequest,
  GetCurrentRateMasterResult,
  UpdateCurrentRateMasterRequest,
  UpdateCurrentRateMasterResult,
  UpdateCurrentRateMasterFromGitHubRequest,
  UpdateCurrentRateMasterFromGitHubResult,
  Gs2ExchangeRestClient,
};
