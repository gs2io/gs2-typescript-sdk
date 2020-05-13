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
  Key,
  GitHubApiKey,
  LogSetting,
} from './model';
import {
  DescribeNamespacesRequest,
  CreateNamespaceRequest,
  GetNamespaceStatusRequest,
  GetNamespaceRequest,
  UpdateNamespaceRequest,
  DeleteNamespaceRequest,
  DescribeKeysRequest,
  CreateKeyRequest,
  UpdateKeyRequest,
  GetKeyRequest,
  DeleteKeyRequest,
  EncryptRequest,
  DecryptRequest,
  DescribeGitHubApiKeysRequest,
  CreateGitHubApiKeyRequest,
  UpdateGitHubApiKeyRequest,
  GetGitHubApiKeyRequest,
  DeleteGitHubApiKeyRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeKeysResult,
  CreateKeyResult,
  UpdateKeyResult,
  GetKeyResult,
  DeleteKeyResult,
  EncryptResult,
  DecryptResult,
  DescribeGitHubApiKeysResult,
  CreateGitHubApiKeyResult,
  UpdateGitHubApiKeyResult,
  GetGitHubApiKeyResult,
  DeleteGitHubApiKeyResult,
} from './result';
import { Gs2KeyRestClient } from './rest';

export default {
  Namespace,
  Key,
  GitHubApiKey,
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
  DescribeKeysRequest,
  DescribeKeysResult,
  CreateKeyRequest,
  CreateKeyResult,
  UpdateKeyRequest,
  UpdateKeyResult,
  GetKeyRequest,
  GetKeyResult,
  DeleteKeyRequest,
  DeleteKeyResult,
  EncryptRequest,
  EncryptResult,
  DecryptRequest,
  DecryptResult,
  DescribeGitHubApiKeysRequest,
  DescribeGitHubApiKeysResult,
  CreateGitHubApiKeyRequest,
  CreateGitHubApiKeyResult,
  UpdateGitHubApiKeyRequest,
  UpdateGitHubApiKeyResult,
  GetGitHubApiKeyRequest,
  GetGitHubApiKeyResult,
  DeleteGitHubApiKeyRequest,
  DeleteGitHubApiKeyResult,
  Gs2KeyRestClient,
};
