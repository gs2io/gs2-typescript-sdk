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
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { StaminaDomain } from "@/gs2/stamina/domain/Stamina";
import { StaminaAccessTokenDomain } from "@/gs2/stamina/domain/StaminaAccessToken";
import { NamespaceDomainCache } from "@/gs2/stamina/domain/cache/NamespaceDomainCache";
import { StaminaModelMasterDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelMasterDomainCache";
import { MaxStaminaTableMasterDomainCache } from "@/gs2/stamina/domain/cache/MaxStaminaTableMasterDomainCache";
import { RecoverIntervalTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverIntervalTableMasterDomainCache";
import { RecoverValueTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverValueTableMasterDomainCache";
import { StaminaModelDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelDomainCache";
import { StaminaDomainCache } from "@/gs2/stamina/domain/cache/StaminaDomainCache";
import { DescribeStaminasIterator } from "@/gs2/stamina/domain/iterator/StaminasDomainIterator";
import { DescribeStaminasByUserIdIterator } from "@/gs2/stamina/domain/iterator/StaminasByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    staminaCache: StaminaDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.staminaCache = new StaminaDomainCache();
    }

    public staminas(
    ): DescribeStaminasIterator {
        return new DescribeStaminasIterator(
            this.staminaCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public stamina(
        staminaName: string
    ): StaminaAccessTokenDomain {
        return new StaminaAccessTokenDomain(
            this.session,
            this.staminaCache,
            this.namespaceName,
            this.accessToken,
            staminaName
        );
    }

}
