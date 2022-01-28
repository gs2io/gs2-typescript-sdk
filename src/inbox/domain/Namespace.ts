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
import { Gs2InboxRestClient } from "@/gs2/inbox";
import { UserDomain } from "@/gs2/inbox/domain/User";
import { UserAccessTokenDomain } from "@/gs2/inbox/domain/UserAccessToken";
import { CurrentMessageMasterDomain } from "@/gs2/inbox/domain/CurrentMessageMaster";
import { GlobalMessageDomain } from "@/gs2/inbox/domain/GlobalMessage";
import { GlobalMessageMasterDomain } from "@/gs2/inbox/domain/GlobalMessageMaster";
import { NamespaceDomainCache } from "@/gs2/inbox/domain/cache/NamespaceDomainCache";
import { MessageDomainCache } from "@/gs2/inbox/domain/cache/MessageDomainCache";
import { GlobalMessageMasterDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageMasterDomainCache";
import { GlobalMessageDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/inbox/request";
import { GetNamespaceStatusResult } from "@/gs2/inbox/result";
import { GetNamespaceRequest } from "@/gs2/inbox/request";
import { GetNamespaceResult } from "@/gs2/inbox/result";
import { UpdateNamespaceRequest } from "@/gs2/inbox/request";
import { UpdateNamespaceResult } from "@/gs2/inbox/result";
import { DeleteNamespaceRequest } from "@/gs2/inbox/request";
import { DeleteNamespaceResult } from "@/gs2/inbox/result";
import { CreateGlobalMessageMasterRequest } from "@/gs2/inbox/request";
import { CreateGlobalMessageMasterResult } from "@/gs2/inbox/result";
import { DescribeGlobalMessageMastersIterator } from "@/gs2/inbox/domain/iterator/GlobalMessageMastersDomainIterator";
import { DescribeGlobalMessagesIterator } from "@/gs2/inbox/domain/iterator/GlobalMessagesDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    globalMessageMasterCache: GlobalMessageMasterDomainCache;
    globalMessageCache: GlobalMessageDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.globalMessageMasterCache = new GlobalMessageMasterDomainCache();
        this.globalMessageCache = new GlobalMessageDomainCache();
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

    public async createGlobalMessageMaster(
        request: CreateGlobalMessageMasterRequest
    ): Promise<CreateGlobalMessageMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateGlobalMessageMasterResult = await this.client.createGlobalMessageMaster(
            request
        );
        return r;
    }

    public globalMessageMasters(
    ): DescribeGlobalMessageMastersIterator {
        return new DescribeGlobalMessageMastersIterator(
            this.globalMessageMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public globalMessages(
    ): DescribeGlobalMessagesIterator {
        return new DescribeGlobalMessagesIterator(
            this.globalMessageCache,
            this.client,
            this.namespaceName
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

    public currentMessageMaster(
    ): CurrentMessageMasterDomain {
        return new CurrentMessageMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public globalMessage(
        globalMessageName: string
    ): GlobalMessageDomain {
        return new GlobalMessageDomain(
            this.session,
            this.globalMessageCache,
            this.namespaceName,
            globalMessageName
        );
    }

    public globalMessageMaster(
        globalMessageName: string
    ): GlobalMessageMasterDomain {
        return new GlobalMessageMasterDomain(
            this.session,
            this.globalMessageMasterCache,
            this.namespaceName,
            globalMessageName
        );
    }

}
