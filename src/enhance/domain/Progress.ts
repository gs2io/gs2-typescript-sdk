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
import { NamespaceDomainCache } from "@/gs2/enhance/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/enhance/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/enhance/domain/cache/RateModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/enhance/domain/cache/ProgressDomainCache";
import { GetProgressRequest } from "@/gs2/enhance/request";
import { GetProgressResult } from "@/gs2/enhance/result";
import { GetProgressByUserIdRequest } from "@/gs2/enhance/request";
import { GetProgressByUserIdResult } from "@/gs2/enhance/result";
import { DescribeProgressesByUserIdIterator } from "@/gs2/enhance/domain/iterator/ProgressesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class ProgressDomain {
    session: Gs2RestSession;
    client: Gs2EnhanceRestClient;
    progressCache: ProgressDomainCache;
    namespaceName: string;
    userId: string;

    public constructor(
        session: Gs2RestSession,
        progressCache: ProgressDomainCache,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2EnhanceRestClient(
            session
        );
        this.progressCache = progressCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
    }

    public async load(
        request: GetProgressByUserIdRequest
    ): Promise<GetProgressByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetProgressByUserIdResult = await this.client.getProgressByUserId(
            request
        );
        this.progressCache.update(r.getItem()!);
        return r;
    }

    public list(
    ): DescribeProgressesByUserIdIterator {
        return new DescribeProgressesByUserIdIterator(
            this.progressCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

}
