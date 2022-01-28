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
import { WalletDomain } from "@/gs2/money/domain/Wallet";
import { WalletAccessTokenDomain } from "@/gs2/money/domain/WalletAccessToken";
import { ReceiptDomain } from "@/gs2/money/domain/Receipt";
import { ReceiptAccessTokenDomain } from "@/gs2/money/domain/ReceiptAccessToken";
import { NamespaceDomainCache } from "@/gs2/money/domain/cache/NamespaceDomainCache";
import { WalletDomainCache } from "@/gs2/money/domain/cache/WalletDomainCache";
import { ReceiptDomainCache } from "@/gs2/money/domain/cache/ReceiptDomainCache";
import { DescribeWalletsIterator } from "@/gs2/money/domain/iterator/WalletsDomainIterator";
import { DescribeWalletsByUserIdIterator } from "@/gs2/money/domain/iterator/WalletsByUserIdDomainIterator";
import { DescribeReceiptsIterator } from "@/gs2/money/domain/iterator/ReceiptsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2MoneyRestClient;
    namespaceName: string;
    userId: string;
    walletCache: WalletDomainCache;
    receiptCache: ReceiptDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2MoneyRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.walletCache = new WalletDomainCache();
        this.receiptCache = new ReceiptDomainCache();
    }

    public wallets(
    ): DescribeWalletsByUserIdIterator {
        return new DescribeWalletsByUserIdIterator(
            this.walletCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public receipts(
        slot: number|null,
        begin: number|null,
        end: number|null
    ): DescribeReceiptsIterator {
        return new DescribeReceiptsIterator(
            this.receiptCache,
            this.client,
            this.namespaceName,
            this.userId,
            slot,
            begin,
            end
        );
    }

    public wallet(
        slot: number
    ): WalletDomain {
        return new WalletDomain(
            this.session,
            this.walletCache,
            this.namespaceName,
            this.userId,
            slot
        );
    }

    public receipt(
        transactionId: string
    ): ReceiptDomain {
        return new ReceiptDomain(
            this.session,
            this.receiptCache,
            this.namespaceName,
            this.userId,
            transactionId
        );
    }

}
