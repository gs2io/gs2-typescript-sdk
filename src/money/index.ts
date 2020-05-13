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
  Wallet,
  Receipt,
  ResponseCache,
  WalletDetail,
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
  DescribeWalletsRequest,
  DescribeWalletsByUserIdRequest,
  QueryWalletsRequest,
  GetWalletRequest,
  GetWalletByUserIdRequest,
  DepositByUserIdRequest,
  WithdrawRequest,
  WithdrawByUserIdRequest,
  DepositByStampSheetRequest,
  WithdrawByStampTaskRequest,
  DescribeReceiptsRequest,
  GetByUserIdAndTransactionIdRequest,
  RecordReceiptRequest,
  RecordReceiptByStampTaskRequest,
} from './request';
import {
  DescribeNamespacesResult,
  CreateNamespaceResult,
  GetNamespaceStatusResult,
  GetNamespaceResult,
  UpdateNamespaceResult,
  DeleteNamespaceResult,
  DescribeWalletsResult,
  DescribeWalletsByUserIdResult,
  QueryWalletsResult,
  GetWalletResult,
  GetWalletByUserIdResult,
  DepositByUserIdResult,
  WithdrawResult,
  WithdrawByUserIdResult,
  DepositByStampSheetResult,
  WithdrawByStampTaskResult,
  DescribeReceiptsResult,
  GetByUserIdAndTransactionIdResult,
  RecordReceiptResult,
  RecordReceiptByStampTaskResult,
} from './result';
import { Gs2MoneyRestClient } from './rest';

export default {
  Namespace,
  Wallet,
  Receipt,
  ResponseCache,
  WalletDetail,
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
  DescribeWalletsRequest,
  DescribeWalletsResult,
  DescribeWalletsByUserIdRequest,
  DescribeWalletsByUserIdResult,
  QueryWalletsRequest,
  QueryWalletsResult,
  GetWalletRequest,
  GetWalletResult,
  GetWalletByUserIdRequest,
  GetWalletByUserIdResult,
  DepositByUserIdRequest,
  DepositByUserIdResult,
  WithdrawRequest,
  WithdrawResult,
  WithdrawByUserIdRequest,
  WithdrawByUserIdResult,
  DepositByStampSheetRequest,
  DepositByStampSheetResult,
  WithdrawByStampTaskRequest,
  WithdrawByStampTaskResult,
  DescribeReceiptsRequest,
  DescribeReceiptsResult,
  GetByUserIdAndTransactionIdRequest,
  GetByUserIdAndTransactionIdResult,
  RecordReceiptRequest,
  RecordReceiptResult,
  RecordReceiptByStampTaskRequest,
  RecordReceiptByStampTaskResult,
  Gs2MoneyRestClient,
};
