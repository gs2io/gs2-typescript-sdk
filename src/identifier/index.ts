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
  User,
  SecurityPolicy,
  Identifier,
  AttachSecurityPolicy,
  ProjectToken,
} from './model';
import {
  DescribeUsersRequest,
  CreateUserRequest,
  UpdateUserRequest,
  GetUserRequest,
  DeleteUserRequest,
  DescribeSecurityPoliciesRequest,
  DescribeCommonSecurityPoliciesRequest,
  CreateSecurityPolicyRequest,
  UpdateSecurityPolicyRequest,
  GetSecurityPolicyRequest,
  DeleteSecurityPolicyRequest,
  DescribeIdentifiersRequest,
  CreateIdentifierRequest,
  GetIdentifierRequest,
  DeleteIdentifierRequest,
  GetHasSecurityPolicyRequest,
  AttachSecurityPolicyRequest,
  DetachSecurityPolicyRequest,
  LoginRequest,
} from './request';
import {
  DescribeUsersResult,
  CreateUserResult,
  UpdateUserResult,
  GetUserResult,
  DeleteUserResult,
  DescribeSecurityPoliciesResult,
  DescribeCommonSecurityPoliciesResult,
  CreateSecurityPolicyResult,
  UpdateSecurityPolicyResult,
  GetSecurityPolicyResult,
  DeleteSecurityPolicyResult,
  DescribeIdentifiersResult,
  CreateIdentifierResult,
  GetIdentifierResult,
  DeleteIdentifierResult,
  GetHasSecurityPolicyResult,
  AttachSecurityPolicyResult,
  DetachSecurityPolicyResult,
  LoginResult,
} from './result';
import { Gs2IdentifierRestClient } from './rest';

export default {
  User,
  SecurityPolicy,
  Identifier,
  AttachSecurityPolicy,
  ProjectToken,
  DescribeUsersRequest,
  DescribeUsersResult,
  CreateUserRequest,
  CreateUserResult,
  UpdateUserRequest,
  UpdateUserResult,
  GetUserRequest,
  GetUserResult,
  DeleteUserRequest,
  DeleteUserResult,
  DescribeSecurityPoliciesRequest,
  DescribeSecurityPoliciesResult,
  DescribeCommonSecurityPoliciesRequest,
  DescribeCommonSecurityPoliciesResult,
  CreateSecurityPolicyRequest,
  CreateSecurityPolicyResult,
  UpdateSecurityPolicyRequest,
  UpdateSecurityPolicyResult,
  GetSecurityPolicyRequest,
  GetSecurityPolicyResult,
  DeleteSecurityPolicyRequest,
  DeleteSecurityPolicyResult,
  DescribeIdentifiersRequest,
  DescribeIdentifiersResult,
  CreateIdentifierRequest,
  CreateIdentifierResult,
  GetIdentifierRequest,
  GetIdentifierResult,
  DeleteIdentifierRequest,
  DeleteIdentifierResult,
  GetHasSecurityPolicyRequest,
  GetHasSecurityPolicyResult,
  AttachSecurityPolicyRequest,
  AttachSecurityPolicyResult,
  DetachSecurityPolicyRequest,
  DetachSecurityPolicyResult,
  LoginRequest,
  LoginResult,
  Gs2IdentifierRestClient,
};
