/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { Gs2RestSession } from "@/gs2/core/model";
import { Gs2MoneyRestClient } from "@/gs2/money";
import { NamespaceDomainCache } from "@/gs2/money/domain/cache/NamespaceDomainCache";
import { WalletDomainCache } from "@/gs2/money/domain/cache/WalletDomainCache";
import { ReceiptDomainCache } from "@/gs2/money/domain/cache/ReceiptDomainCache";
import { GetByUserIdAndTransactionIdRequest } from "@/gs2/money/request";
import { GetByUserIdAndTransactionIdResult } from "@/gs2/money/result";
import { AccessToken } from "@/gs2/auth/model";

export class ReceiptAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MoneyRestClient;
    receiptCache: ReceiptDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    transactionId: string;

    public constructor(
        session: Gs2RestSession,
        receiptCache: ReceiptDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        transactionId: string
    ) {
        this.session = session;
        this.client = new Gs2MoneyRestClient(
            session
        );
        this.receiptCache = receiptCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.transactionId = transactionId;
    }

}
