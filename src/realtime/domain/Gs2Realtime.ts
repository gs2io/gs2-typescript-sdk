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
import { DescribeNamespacesIterator } from "@/gs2/realtime/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/realtime/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/realtime/domain/cache/NamespaceDomainCache";
import { RoomDomainCache } from "@/gs2/realtime/domain/cache/RoomDomainCache";
import { CreateNamespaceRequest } from "@/gs2/realtime/request";
import { CreateNamespaceResult } from "@/gs2/realtime/result";
import { WantRoomRequest } from "@/gs2/realtime/request";
import { WantRoomResult } from "@/gs2/realtime/result";

export class Gs2Realtime {
    session: Gs2RestSession;
    client: Gs2RealtimeRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2RealtimeRestClient (
            session
        );
        this.namespaceCache = new NamespaceDomainCache();
    }

    public async createNamespace(
        request: CreateNamespaceRequest
    ): Promise<CreateNamespaceResult> {
        let r: CreateNamespaceResult = await this.client.createNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async wantRoom(
        request: WantRoomRequest
    ): Promise<WantRoomResult> {
        let r: WantRoomResult = await this.client.wantRoom(
            request
        );
        return r;
    }

    public namespaces(
    ): DescribeNamespacesIterator {
        return new DescribeNamespacesIterator(
            this.namespaceCache,
            this.client
        );
    }

    public namespace(
        namespaceName: string
    ): NamespaceDomain {
        return new NamespaceDomain(
            this.session,
            this.namespaceCache,
            namespaceName
        );
    }
}
