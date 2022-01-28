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
import { Gs2DictionaryRestClient } from "@/gs2/dictionary";
import { EntryDomain } from "@/gs2/dictionary/domain/Entry";
import { EntryAccessTokenDomain } from "@/gs2/dictionary/domain/EntryAccessToken";
import { NamespaceDomainCache } from "@/gs2/dictionary/domain/cache/NamespaceDomainCache";
import { EntryModelDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelDomainCache";
import { EntryModelMasterDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelMasterDomainCache";
import { EntryDomainCache } from "@/gs2/dictionary/domain/cache/EntryDomainCache";
import { AddEntriesByUserIdRequest } from "@/gs2/dictionary/request";
import { AddEntriesByUserIdResult } from "@/gs2/dictionary/result";
import { ResetByUserIdRequest } from "@/gs2/dictionary/request";
import { ResetByUserIdResult } from "@/gs2/dictionary/result";
import { DescribeEntriesIterator } from "@/gs2/dictionary/domain/iterator/EntriesDomainIterator";
import { DescribeEntriesByUserIdIterator } from "@/gs2/dictionary/domain/iterator/EntriesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2DictionaryRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    entryCache: EntryDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2DictionaryRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.entryCache = new EntryDomainCache();
    }

    public entries(
    ): DescribeEntriesIterator {
        return new DescribeEntriesIterator(
            this.entryCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public entry(
        entryModelName: string
    ): EntryAccessTokenDomain {
        return new EntryAccessTokenDomain(
            this.session,
            this.entryCache,
            this.namespaceName,
            this.accessToken,
            entryModelName
        );
    }

}
