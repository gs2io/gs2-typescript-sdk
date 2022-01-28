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
import { Gs2FormationRestClient } from "@/gs2/formation";
import { MoldDomain } from "@/gs2/formation/domain/Mold";
import { MoldAccessTokenDomain } from "@/gs2/formation/domain/MoldAccessToken";
import { NamespaceDomainCache } from "@/gs2/formation/domain/cache/NamespaceDomainCache";
import { FormModelMasterDomainCache } from "@/gs2/formation/domain/cache/FormModelMasterDomainCache";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { DescribeMoldsIterator } from "@/gs2/formation/domain/iterator/MoldsDomainIterator";
import { DescribeMoldsByUserIdIterator } from "@/gs2/formation/domain/iterator/MoldsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    namespaceName: string;
    userId: string;
    moldCache: MoldDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.moldCache = new MoldDomainCache();
    }

    public molds(
    ): DescribeMoldsByUserIdIterator {
        return new DescribeMoldsByUserIdIterator(
            this.moldCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public mold(
        moldName: string
    ): MoldDomain {
        return new MoldDomain(
            this.session,
            this.moldCache,
            this.namespaceName,
            this.userId,
            moldName
        );
    }

}
