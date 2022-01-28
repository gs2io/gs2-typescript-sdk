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
import { Gs2DatastoreRestClient } from "@/gs2/datastore";
import { NamespaceDomainCache } from "@/gs2/datastore/domain/cache/NamespaceDomainCache";
import { DataObjectDomainCache } from "@/gs2/datastore/domain/cache/DataObjectDomainCache";
import { DataObjectHistoryDomainCache } from "@/gs2/datastore/domain/cache/DataObjectHistoryDomainCache";
import { GetDataObjectHistoryRequest } from "@/gs2/datastore/request";
import { GetDataObjectHistoryResult } from "@/gs2/datastore/result";
import { GetDataObjectHistoryByUserIdRequest } from "@/gs2/datastore/request";
import { GetDataObjectHistoryByUserIdResult } from "@/gs2/datastore/result";
import { AccessToken } from "@/gs2/auth/model";

export class DataObjectHistoryDomain {
    session: Gs2RestSession;
    client: Gs2DatastoreRestClient;
    dataObjectHistoryCache: DataObjectHistoryDomainCache;
    namespaceName: string;
    userId: string;
    dataObjectName: string;
    generation: string;

    public constructor(
        session: Gs2RestSession,
        dataObjectHistoryCache: DataObjectHistoryDomainCache,
        namespaceName: string,
        userId: string,
        dataObjectName: string,
        generation: string
    ) {
        this.session = session;
        this.client = new Gs2DatastoreRestClient(
            session
        );
        this.dataObjectHistoryCache = dataObjectHistoryCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.dataObjectName = dataObjectName;
        this.generation = generation;
    }

    public async load(
        request: GetDataObjectHistoryByUserIdRequest
    ): Promise<GetDataObjectHistoryByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setDataObjectName(this.dataObjectName);
        request.setGeneration(this.generation);
        let r: GetDataObjectHistoryByUserIdResult = await this.client.getDataObjectHistoryByUserId(
            request
        );
        this.dataObjectHistoryCache.update(r.getItem()!);
        return r;
    }

}
