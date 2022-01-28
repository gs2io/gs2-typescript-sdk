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
import { ShowcaseDomain } from "@/gs2/showcase/domain/Showcase";
import { ShowcaseAccessTokenDomain } from "@/gs2/showcase/domain/ShowcaseAccessToken";
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { DescribeShowcasesIterator } from "@/gs2/showcase/domain/iterator/ShowcasesDomainIterator";
import { DescribeShowcasesByUserIdIterator } from "@/gs2/showcase/domain/iterator/ShowcasesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    showcaseCache: ShowcaseDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.showcaseCache = new ShowcaseDomainCache();
    }

    public showcases(
    ): DescribeShowcasesIterator {
        return new DescribeShowcasesIterator(
            this.showcaseCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public showcase(
        showcaseName: string
    ): ShowcaseAccessTokenDomain {
        return new ShowcaseAccessTokenDomain(
            this.session,
            this.showcaseCache,
            this.namespaceName,
            this.accessToken,
            showcaseName
        );
    }

}
