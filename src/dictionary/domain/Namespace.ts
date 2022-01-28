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
import { CurrentEntryMasterDomain } from "@/gs2/dictionary/domain/CurrentEntryMaster";
import { EntryModelDomain } from "@/gs2/dictionary/domain/EntryModel";
import { UserDomain } from "@/gs2/dictionary/domain/User";
import { UserAccessTokenDomain } from "@/gs2/dictionary/domain/UserAccessToken";
import { EntryModelMasterDomain } from "@/gs2/dictionary/domain/EntryModelMaster";
import { NamespaceDomainCache } from "@/gs2/dictionary/domain/cache/NamespaceDomainCache";
import { EntryModelDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelDomainCache";
import { EntryModelMasterDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelMasterDomainCache";
import { EntryDomainCache } from "@/gs2/dictionary/domain/cache/EntryDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/dictionary/request";
import { GetNamespaceStatusResult } from "@/gs2/dictionary/result";
import { GetNamespaceRequest } from "@/gs2/dictionary/request";
import { GetNamespaceResult } from "@/gs2/dictionary/result";
import { UpdateNamespaceRequest } from "@/gs2/dictionary/request";
import { UpdateNamespaceResult } from "@/gs2/dictionary/result";
import { DeleteNamespaceRequest } from "@/gs2/dictionary/request";
import { DeleteNamespaceResult } from "@/gs2/dictionary/result";
import { CreateEntryModelMasterRequest } from "@/gs2/dictionary/request";
import { CreateEntryModelMasterResult } from "@/gs2/dictionary/result";
import { DescribeEntryModelsIterator } from "@/gs2/dictionary/domain/iterator/EntryModelsDomainIterator";
import { DescribeEntryModelMastersIterator } from "@/gs2/dictionary/domain/iterator/EntryModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2DictionaryRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    entryModelCache: EntryModelDomainCache;
    entryModelMasterCache: EntryModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2DictionaryRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.entryModelCache = new EntryModelDomainCache();
        this.entryModelMasterCache = new EntryModelMasterDomainCache();
    }

    public async getStatus(
        request: GetNamespaceStatusRequest
    ): Promise<GetNamespaceStatusResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceStatusResult = await this.client.getNamespaceStatus(
            request
        );
        return r;
    }

    public async load(
        request: GetNamespaceRequest
    ): Promise<GetNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceResult = await this.client.getNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateNamespaceRequest
    ): Promise<UpdateNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateNamespaceResult = await this.client.updateNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteNamespaceRequest
    ): Promise<DeleteNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DeleteNamespaceResult = await this.client.deleteNamespace(
            request
        );
        this.namespaceCache.delete(r.getItem()!);
        return r;
    }

    public async createEntryModelMaster(
        request: CreateEntryModelMasterRequest
    ): Promise<CreateEntryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateEntryModelMasterResult = await this.client.createEntryModelMaster(
            request
        );
        return r;
    }

    public entryModels(
    ): DescribeEntryModelsIterator {
        return new DescribeEntryModelsIterator(
            this.entryModelCache,
            this.client,
            this.namespaceName
        );
    }

    public entryModelMasters(
    ): DescribeEntryModelMastersIterator {
        return new DescribeEntryModelMastersIterator(
            this.entryModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public currentEntryMaster(
    ): CurrentEntryMasterDomain {
        return new CurrentEntryMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public entryModel(
        entryName: string
    ): EntryModelDomain {
        return new EntryModelDomain(
            this.session,
            this.entryModelCache,
            this.namespaceName,
            entryName
        );
    }

    public user(
        userId: string
    ): UserDomain {
        return new UserDomain(
            this.session,
            this.namespaceName,
            userId
        );
    }

    public accessToken(
        accessToken: AccessToken
    ): UserAccessTokenDomain  {
        return new UserAccessTokenDomain(
            this.session,
            this.namespaceName,
            accessToken
        );
    }

    public entryModelMaster(
        entryName: string
    ): EntryModelMasterDomain {
        return new EntryModelMasterDomain(
            this.session,
            this.entryModelMasterCache,
            this.namespaceName,
            entryName
        );
    }

}
