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
import { DescribeNamespacesIterator } from "@/gs2/money/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/money/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/money/domain/cache/NamespaceDomainCache";
import { WalletDomainCache } from "@/gs2/money/domain/cache/WalletDomainCache";
import { ReceiptDomainCache } from "@/gs2/money/domain/cache/ReceiptDomainCache";
import { CreateNamespaceRequest } from "@/gs2/money/request";
import { CreateNamespaceResult } from "@/gs2/money/result";
import { DepositByStampSheetRequest } from "@/gs2/money/request";
import { DepositByStampSheetResult } from "@/gs2/money/result";
import { WithdrawByStampTaskRequest } from "@/gs2/money/request";
import { WithdrawByStampTaskResult } from "@/gs2/money/result";
import { RecordReceiptRequest } from "@/gs2/money/request";
import { RecordReceiptResult } from "@/gs2/money/result";
import { RecordReceiptByStampTaskRequest } from "@/gs2/money/request";
import { RecordReceiptByStampTaskResult } from "@/gs2/money/result";

export class Gs2Money {
    session: Gs2RestSession;
    client: Gs2MoneyRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2MoneyRestClient (
            session
        );
        this.namespaceCache = new NamespaceDomainCache();
    }

    public async createNamespace(
        request: CreateNamespaceRequest
    ): Promise<CreateNamespaceResult> {
        let r: CreateNamespaceResult = await this.client.createNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async depositByStampSheet(
        request: DepositByStampSheetRequest
    ): Promise<DepositByStampSheetResult> {
        let r: DepositByStampSheetResult = await this.client.depositByStampSheet(
            request
        );
        return r;
    }

    public async withdrawByStampTask(
        request: WithdrawByStampTaskRequest
    ): Promise<WithdrawByStampTaskResult> {
        let r: WithdrawByStampTaskResult = await this.client.withdrawByStampTask(
            request
        );
        return r;
    }

    public async recordReceipt(
        request: RecordReceiptRequest
    ): Promise<RecordReceiptResult> {
        let r: RecordReceiptResult = await this.client.recordReceipt(
            request
        );
        return r;
    }

    public async recordReceiptByStampTask(
        request: RecordReceiptByStampTaskRequest
    ): Promise<RecordReceiptByStampTaskResult> {
        let r: RecordReceiptByStampTaskResult = await this.client.recordReceiptByStampTask(
            request
        );
        return r;
    }

    public namespaces(
    ): DescribeNamespacesIterator {
        return new DescribeNamespacesIterator(
            this.namespaceCache,
            this.client
        );
    }

    public namespace(
        namespaceName: string
    ): NamespaceDomain {
        return new NamespaceDomain(
            this.session,
            this.namespaceCache,
            namespaceName
        );
    }
}
