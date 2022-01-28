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
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { GetShowcaseRequest } from "@/gs2/showcase/request";
import { GetShowcaseResult } from "@/gs2/showcase/result";
import { GetShowcaseByUserIdRequest } from "@/gs2/showcase/request";
import { GetShowcaseByUserIdResult } from "@/gs2/showcase/result";
import { BuyRequest } from "@/gs2/showcase/request";
import { BuyResult } from "@/gs2/showcase/result";
import { BuyByUserIdRequest } from "@/gs2/showcase/request";
import { BuyByUserIdResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class ShowcaseAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    showcaseCache: ShowcaseDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    showcaseName: string;

    public constructor(
        session: Gs2RestSession,
        showcaseCache: ShowcaseDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        showcaseName: string
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
            session
        );
        this.showcaseCache = showcaseCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.showcaseName = showcaseName;
    }

    public async load(
        request: GetShowcaseRequest
    ): Promise<GetShowcaseResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setShowcaseName(this.showcaseName);
        let r: GetShowcaseResult = await this.client.getShowcase(
            request
        );
        this.showcaseCache.update(r.getItem()!);
        return r;
    }

    public async buy(
        request: BuyRequest
    ): Promise<BuyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setShowcaseName(this.showcaseName);
        let r: BuyResult = await this.client.buy(
            request
        );
        return r;
    }

}
