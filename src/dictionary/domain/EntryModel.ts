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
import { NamespaceDomainCache } from "@/gs2/dictionary/domain/cache/NamespaceDomainCache";
import { EntryModelDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelDomainCache";
import { EntryModelMasterDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelMasterDomainCache";
import { EntryDomainCache } from "@/gs2/dictionary/domain/cache/EntryDomainCache";
import { GetEntryModelRequest } from "@/gs2/dictionary/request";
import { GetEntryModelResult } from "@/gs2/dictionary/result";
import { AccessToken } from "@/gs2/auth/model";

export class EntryModelDomain {
    session: Gs2RestSession;
    client: Gs2DictionaryRestClient;
    entryModelCache: EntryModelDomainCache;
    namespaceName: string;
    entryName: string;

    public constructor(
        session: Gs2RestSession,
        entryModelCache: EntryModelDomainCache,
        namespaceName: string,
        entryName: string
    ) {
        this.session = session;
        this.client = new Gs2DictionaryRestClient(
            session
        );
        this.entryModelCache = entryModelCache;
        this.namespaceName = namespaceName;
        this.entryName = entryName;
    }

    public async load(
        request: GetEntryModelRequest
    ): Promise<GetEntryModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setEntryName(this.entryName);
        let r: GetEntryModelResult = await this.client.getEntryModel(
            request
        );
        this.entryModelCache.update(r.getItem()!);
        return r;
    }

}
