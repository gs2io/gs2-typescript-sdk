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
import { Gs2ExchangeRestClient } from "@/gs2/exchange";
import { DescribeNamespacesIterator } from "@/gs2/exchange/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/exchange/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/exchange/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/exchange/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/exchange/domain/cache/RateModelMasterDomainCache";
import { AwaitDomainCache } from "@/gs2/exchange/domain/cache/AwaitDomainCache";
import { CreateNamespaceRequest } from "@/gs2/exchange/request";
import { CreateNamespaceResult } from "@/gs2/exchange/result";
import { ExchangeByStampSheetRequest } from "@/gs2/exchange/request";
import { ExchangeByStampSheetResult } from "@/gs2/exchange/result";
import { CreateAwaitByStampSheetRequest } from "@/gs2/exchange/request";
import { CreateAwaitByStampSheetResult } from "@/gs2/exchange/result";
import { DeleteAwaitByStampTaskRequest } from "@/gs2/exchange/request";
import { DeleteAwaitByStampTaskResult } from "@/gs2/exchange/result";

export class Gs2Exchange {
    session: Gs2RestSession;
    client: Gs2ExchangeRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2ExchangeRestClient (
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

    public async exchangeByStampSheet(
        request: ExchangeByStampSheetRequest
    ): Promise<ExchangeByStampSheetResult> {
        let r: ExchangeByStampSheetResult = await this.client.exchangeByStampSheet(
            request
        );
        return r;
    }

    public async createAwaitByStampSheet(
        request: CreateAwaitByStampSheetRequest
    ): Promise<CreateAwaitByStampSheetResult> {
        let r: CreateAwaitByStampSheetResult = await this.client.createAwaitByStampSheet(
            request
        );
        return r;
    }

    public async deleteAwaitByStampTask(
        request: DeleteAwaitByStampTaskRequest
    ): Promise<DeleteAwaitByStampTaskResult> {
        let r: DeleteAwaitByStampTaskResult = await this.client.deleteAwaitByStampTask(
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
