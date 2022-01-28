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
import { Gs2NewsRestClient } from "@/gs2/news";
import { NamespaceDomainCache } from "@/gs2/news/domain/cache/NamespaceDomainCache";
import { NewsDomainCache } from "@/gs2/news/domain/cache/NewsDomainCache";
import { WantGrantRequest } from "@/gs2/news/request";
import { WantGrantResult } from "@/gs2/news/result";
import { WantGrantByUserIdRequest } from "@/gs2/news/request";
import { WantGrantByUserIdResult } from "@/gs2/news/result";
import { DescribeNewsIterator } from "@/gs2/news/domain/iterator/NewsDomainIterator";
import { DescribeNewsByUserIdIterator } from "@/gs2/news/domain/iterator/NewsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2NewsRestClient;
    namespaceName: string;
    userId: string;
    newsCache: NewsDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2NewsRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.newsCache = new NewsDomainCache();
    }

    public async wantGrant(
        request: WantGrantByUserIdRequest
    ): Promise<WantGrantByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: WantGrantByUserIdResult = await this.client.wantGrantByUserId(
            request
        );
        return r;
    }

    public newses(
    ): DescribeNewsByUserIdIterator {
        return new DescribeNewsByUserIdIterator(
            this.newsCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

}
