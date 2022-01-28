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
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { StatusDomain } from "@/gs2/experience/domain/Status";
import { StatusAccessTokenDomain } from "@/gs2/experience/domain/StatusAccessToken";
import { NamespaceDomainCache } from "@/gs2/experience/domain/cache/NamespaceDomainCache";
import { ExperienceModelMasterDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelMasterDomainCache";
import { ExperienceModelDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelDomainCache";
import { ThresholdMasterDomainCache } from "@/gs2/experience/domain/cache/ThresholdMasterDomainCache";
import { StatusDomainCache } from "@/gs2/experience/domain/cache/StatusDomainCache";
import { DescribeStatusesIterator } from "@/gs2/experience/domain/iterator/StatusesDomainIterator";
import { DescribeStatusesByUserIdIterator } from "@/gs2/experience/domain/iterator/StatusesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    namespaceName: string;
    userId: string;
    statusCache: StatusDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.statusCache = new StatusDomainCache();
    }

    public statuses(
        experienceName: string|null
    ): DescribeStatusesByUserIdIterator {
        return new DescribeStatusesByUserIdIterator(
            this.statusCache,
            this.client,
            this.namespaceName,
            experienceName,
            this.userId
        );
    }

    public status(
        experienceName: string,
        propertyId: string
    ): StatusDomain {
        return new StatusDomain(
            this.session,
            this.statusCache,
            this.namespaceName,
            this.userId,
            experienceName,
            propertyId
        );
    }

}
