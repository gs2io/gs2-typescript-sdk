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
import { GetEntryRequest } from "@/gs2/dictionary/request";
import { GetEntryResult } from "@/gs2/dictionary/result";
import { GetEntryByUserIdRequest } from "@/gs2/dictionary/request";
import { GetEntryByUserIdResult } from "@/gs2/dictionary/result";
import { GetEntryWithSignatureRequest } from "@/gs2/dictionary/request";
import { GetEntryWithSignatureResult } from "@/gs2/dictionary/result";
import { GetEntryWithSignatureByUserIdRequest } from "@/gs2/dictionary/request";
import { GetEntryWithSignatureByUserIdResult } from "@/gs2/dictionary/result";
import { AccessToken } from "@/gs2/auth/model";

export class EntryDomain {
    session: Gs2RestSession;
    client: Gs2DictionaryRestClient;
    entryCache: EntryDomainCache;
    namespaceName: string;
    userId: string;
    entryModelName: string;

    public constructor(
        session: Gs2RestSession,
        entryCache: EntryDomainCache,
        namespaceName: string,
        userId: string,
        entryModelName: string
    ) {
        this.session = session;
        this.client = new Gs2DictionaryRestClient(
            session
        );
        this.entryCache = entryCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.entryModelName = entryModelName;
    }

    public async load(
        request: GetEntryByUserIdRequest
    ): Promise<GetEntryByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setEntryModelName(this.entryModelName);
        let r: GetEntryByUserIdResult = await this.client.getEntryByUserId(
            request
        );
        this.entryCache.update(r.getItem()!);
        return r;
    }

    public async getWithSignature(
        request: GetEntryWithSignatureByUserIdRequest
    ): Promise<GetEntryWithSignatureByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setEntryModelName(this.entryModelName);
        let r: GetEntryWithSignatureByUserIdResult = await this.client.getEntryWithSignatureByUserId(
            request
        );
        this.entryCache.update(r.getItem()!);
        return r;
    }

}
