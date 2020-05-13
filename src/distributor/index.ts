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
  DistributorModelMaster,
  DistributorModel,
  CurrentDistributorMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  DistributeResource,
  LogSetting,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeDistributorModelMastersRequest,
  CreateDistributorModelMasterRequest,
  GetDistributorModelMasterRequest,
  UpdateDistributorModelMasterRequest,
  DeleteDistributorModelMasterRequest,
  DescribeDistributorModelsRequest,
  GetDistributorModelRequest,
  ExportMasterRequest,
  GetCurrentDistributorMasterRequest,
  UpdateCurrentDistributorMasterRequest,
  UpdateCurrentDistributorMasterFromGitHubRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeDistributorModelMastersResult,
  CreateDistributorModelMasterResult,
  GetDistributorModelMasterResult,
  UpdateDistributorModelMasterResult,
  DeleteDistributorModelMasterResult,
  DescribeDistributorModelsResult,
  GetDistributorModelResult,
  ExportMasterResult,
  GetCurrentDistributorMasterResult,
  UpdateCurrentDistributorMasterResult,
  UpdateCurrentDistributorMasterFromGitHubResult,
} from './result';
import { Gs2DistributorRestClient } from './rest';

export default {
  Namespace,
  DistributorModelMaster,
  DistributorModel,
  CurrentDistributorMaster,
  ResponseCache,
  GitHubCheckoutSetting,
  DistributeResource,
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
  DescribeDistributorModelMastersRequest,
  DescribeDistributorModelMastersResult,
  CreateDistributorModelMasterRequest,
  CreateDistributorModelMasterResult,
  GetDistributorModelMasterRequest,
  GetDistributorModelMasterResult,
  UpdateDistributorModelMasterRequest,
  UpdateDistributorModelMasterResult,
  DeleteDistributorModelMasterRequest,
  DeleteDistributorModelMasterResult,
  DescribeDistributorModelsRequest,
  DescribeDistributorModelsResult,
  GetDistributorModelRequest,
  GetDistributorModelResult,
  ExportMasterRequest,
  ExportMasterResult,
  GetCurrentDistributorMasterRequest,
  GetCurrentDistributorMasterResult,
  UpdateCurrentDistributorMasterRequest,
  UpdateCurrentDistributorMasterResult,
  UpdateCurrentDistributorMasterFromGitHubRequest,
  UpdateCurrentDistributorMasterFromGitHubResult,
  Gs2DistributorRestClient,
};
