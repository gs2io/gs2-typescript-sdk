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
import { Gs2EnhanceRestClient } from "@/gs2/enhance";
import { ProgressDomain } from "@/gs2/enhance/domain/Progress";
import { ProgressAccessTokenDomain } from "@/gs2/enhance/domain/ProgressAccessToken";
import { NamespaceDomainCache } from "@/gs2/enhance/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/enhance/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/enhance/domain/cache/RateModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/enhance/domain/cache/ProgressDomainCache";
import { DirectEnhanceRequest } from "@/gs2/enhance/request";
import { DirectEnhanceResult } from "@/gs2/enhance/result";
import { DirectEnhanceByUserIdRequest } from "@/gs2/enhance/request";
import { DirectEnhanceByUserIdResult } from "@/gs2/enhance/result";
import { CreateProgressByUserIdRequest } from "@/gs2/enhance/request";
import { CreateProgressByUserIdResult } from "@/gs2/enhance/result";
import { StartRequest } from "@/gs2/enhance/request";
import { StartResult } from "@/gs2/enhance/result";
import { StartByUserIdRequest } from "@/gs2/enhance/request";
import { StartByUserIdResult } from "@/gs2/enhance/result";
import { EndRequest } from "@/gs2/enhance/request";
import { EndResult } from "@/gs2/enhance/result";
import { EndByUserIdRequest } from "@/gs2/enhance/request";
import { EndByUserIdResult } from "@/gs2/enhance/result";
import { DeleteProgressRequest } from "@/gs2/enhance/request";
import { DeleteProgressResult } from "@/gs2/enhance/result";
import { DeleteProgressByUserIdRequest } from "@/gs2/enhance/request";
import { DeleteProgressByUserIdResult } from "@/gs2/enhance/result";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2EnhanceRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    progressCache: ProgressDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2EnhanceRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.progressCache = new ProgressDomainCache();
    }

    public async directEnhance(
        request: DirectEnhanceRequest
    ): Promise<DirectEnhanceResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: DirectEnhanceResult = await this.client.directEnhance(
            request
        );
        return r;
    }

    public async start(
        request: StartRequest
    ): Promise<StartResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: StartResult = await this.client.start(
            request
        );
        return r;
    }

    public async end(
        request: EndRequest
    ): Promise<EndResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: EndResult = await this.client.end(
            request
        );
        return r;
    }

    public async deleteProgress(
        request: DeleteProgressRequest
    ): Promise<DeleteProgressResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: DeleteProgressResult = await this.client.deleteProgress(
            request
        );
        return r;
    }

    public progress(
    ): ProgressAccessTokenDomain {
        return new ProgressAccessTokenDomain(
            this.session,
            this.progressCache,
            this.namespaceName,
            this.accessToken
        );
    }

}
