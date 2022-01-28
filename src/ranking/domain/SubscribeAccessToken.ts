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
import { Gs2RankingRestClient } from "@/gs2/ranking";
import { NamespaceDomainCache } from "@/gs2/ranking/domain/cache/NamespaceDomainCache";
import { CategoryModelDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelDomainCache";
import { CategoryModelMasterDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelMasterDomainCache";
import { SubscribeUserDomainCache } from "@/gs2/ranking/domain/cache/SubscribeUserDomainCache";
import { ScoreDomainCache } from "@/gs2/ranking/domain/cache/ScoreDomainCache";
import { RankingDomainCache } from "@/gs2/ranking/domain/cache/RankingDomainCache";
import { SubscribeRequest } from "@/gs2/ranking/request";
import { SubscribeResult } from "@/gs2/ranking/result";
import { SubscribeByUserIdRequest } from "@/gs2/ranking/request";
import { SubscribeByUserIdResult } from "@/gs2/ranking/result";
import { GetSubscribeRequest } from "@/gs2/ranking/request";
import { GetSubscribeResult } from "@/gs2/ranking/result";
import { GetSubscribeByUserIdRequest } from "@/gs2/ranking/request";
import { GetSubscribeByUserIdResult } from "@/gs2/ranking/result";
import { UnsubscribeRequest } from "@/gs2/ranking/request";
import { UnsubscribeResult } from "@/gs2/ranking/result";
import { UnsubscribeByUserIdRequest } from "@/gs2/ranking/request";
import { UnsubscribeByUserIdResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class SubscribeAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    subscribeUserCache: SubscribeUserDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    categoryName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken,
        categoryName: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.subscribeUserCache = new SubscribeUserDomainCache();
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.categoryName = categoryName;
    }

    public async subscribe(
        request: SubscribeRequest
    ): Promise<SubscribeResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setCategoryName(this.categoryName);
        let r: SubscribeResult = await this.client.subscribe(
            request
        );
        return r;
    }

    public async load(
        request: GetSubscribeRequest
    ): Promise<GetSubscribeResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setCategoryName(this.categoryName);
        let r: GetSubscribeResult = await this.client.getSubscribe(
            request
        );
        return r;
    }

    public async unsubscribe(
        request: UnsubscribeRequest
    ): Promise<UnsubscribeResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setCategoryName(this.categoryName);
        let r: UnsubscribeResult = await this.client.unsubscribe(
            request
        );
        return r;
    }

}
