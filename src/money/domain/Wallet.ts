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
import { GetWalletRequest } from "@/gs2/money/request";
import { GetWalletResult } from "@/gs2/money/result";
import { GetWalletByUserIdRequest } from "@/gs2/money/request";
import { GetWalletByUserIdResult } from "@/gs2/money/result";
import { DepositByUserIdRequest } from "@/gs2/money/request";
import { DepositByUserIdResult } from "@/gs2/money/result";
import { WithdrawRequest } from "@/gs2/money/request";
import { WithdrawResult } from "@/gs2/money/result";
import { WithdrawByUserIdRequest } from "@/gs2/money/request";
import { WithdrawByUserIdResult } from "@/gs2/money/result";
import { AccessToken } from "@/gs2/auth/model";

export class WalletDomain {
    session: Gs2RestSession;
    client: Gs2MoneyRestClient;
    walletCache: WalletDomainCache;
    namespaceName: string;
    userId: string;
    slot: number;

    public constructor(
        session: Gs2RestSession,
        walletCache: WalletDomainCache,
        namespaceName: string,
        userId: string,
        slot: number
    ) {
        this.session = session;
        this.client = new Gs2MoneyRestClient(
            session
        );
        this.walletCache = walletCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.slot = slot;
    }

    public async load(
        request: GetWalletByUserIdRequest
    ): Promise<GetWalletByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setSlot(this.slot);
        let r: GetWalletByUserIdResult = await this.client.getWalletByUserId(
            request
        );
        this.walletCache.update(r.getItem()!);
        return r;
    }

    public async deposit(
        request: DepositByUserIdRequest
    ): Promise<DepositByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setSlot(this.slot);
        let r: DepositByUserIdResult = await this.client.depositByUserId(
            request
        );
        this.walletCache.update(r.getItem()!);
        return r;
    }

    public async withdraw(
        request: WithdrawByUserIdRequest
    ): Promise<WithdrawByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setSlot(this.slot);
        let r: WithdrawByUserIdResult = await this.client.withdrawByUserId(
            request
        );
        this.walletCache.update(r.getItem()!);
        return r;
    }

}
