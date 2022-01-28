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
import { Gs2RealtimeRestClient } from "@/gs2/realtime";
import { RoomDomain } from "@/gs2/realtime/domain/Room";
import { NamespaceDomainCache } from "@/gs2/realtime/domain/cache/NamespaceDomainCache";
import { RoomDomainCache } from "@/gs2/realtime/domain/cache/RoomDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/realtime/request";
import { GetNamespaceStatusResult } from "@/gs2/realtime/result";
import { GetNamespaceRequest } from "@/gs2/realtime/request";
import { GetNamespaceResult } from "@/gs2/realtime/result";
import { UpdateNamespaceRequest } from "@/gs2/realtime/request";
import { UpdateNamespaceResult } from "@/gs2/realtime/result";
import { DeleteNamespaceRequest } from "@/gs2/realtime/request";
import { DeleteNamespaceResult } from "@/gs2/realtime/result";
import { DescribeRoomsIterator } from "@/gs2/realtime/domain/iterator/RoomsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2RealtimeRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    roomCache: RoomDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2RealtimeRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.roomCache = new RoomDomainCache();
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

    public rooms(
    ): DescribeRoomsIterator {
        return new DescribeRoomsIterator(
            this.roomCache,
            this.client,
            this.namespaceName
        );
    }

    public room(
        roomName: string
    ): RoomDomain {
        return new RoomDomain(
            this.session,
            this.roomCache,
            this.namespaceName,
            roomName
        );
    }

}
