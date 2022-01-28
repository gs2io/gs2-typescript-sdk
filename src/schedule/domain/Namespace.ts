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
import { Gs2ScheduleRestClient } from "@/gs2/schedule";
import { UserDomain } from "@/gs2/schedule/domain/User";
import { UserAccessTokenDomain } from "@/gs2/schedule/domain/UserAccessToken";
import { CurrentEventMasterDomain } from "@/gs2/schedule/domain/CurrentEventMaster";
import { EventMasterDomain } from "@/gs2/schedule/domain/EventMaster";
import { NamespaceDomainCache } from "@/gs2/schedule/domain/cache/NamespaceDomainCache";
import { EventMasterDomainCache } from "@/gs2/schedule/domain/cache/EventMasterDomainCache";
import { TriggerDomainCache } from "@/gs2/schedule/domain/cache/TriggerDomainCache";
import { EventDomainCache } from "@/gs2/schedule/domain/cache/EventDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/schedule/request";
import { GetNamespaceStatusResult } from "@/gs2/schedule/result";
import { GetNamespaceRequest } from "@/gs2/schedule/request";
import { GetNamespaceResult } from "@/gs2/schedule/result";
import { UpdateNamespaceRequest } from "@/gs2/schedule/request";
import { UpdateNamespaceResult } from "@/gs2/schedule/result";
import { DeleteNamespaceRequest } from "@/gs2/schedule/request";
import { DeleteNamespaceResult } from "@/gs2/schedule/result";
import { CreateEventMasterRequest } from "@/gs2/schedule/request";
import { CreateEventMasterResult } from "@/gs2/schedule/result";
import { DescribeEventMastersIterator } from "@/gs2/schedule/domain/iterator/EventMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2ScheduleRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    eventMasterCache: EventMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ScheduleRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.eventMasterCache = new EventMasterDomainCache();
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

    public async createEventMaster(
        request: CreateEventMasterRequest
    ): Promise<CreateEventMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateEventMasterResult = await this.client.createEventMaster(
            request
        );
        return r;
    }

    public eventMasters(
    ): DescribeEventMastersIterator {
        return new DescribeEventMastersIterator(
            this.eventMasterCache,
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

    public currentEventMaster(
    ): CurrentEventMasterDomain {
        return new CurrentEventMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public eventMaster(
        eventName: string
    ): EventMasterDomain {
        return new EventMasterDomain(
            this.session,
            this.eventMasterCache,
            this.namespaceName,
            eventName
        );
    }

}
