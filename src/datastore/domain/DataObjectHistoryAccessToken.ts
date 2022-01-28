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

export class DataObjectHistoryAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2DatastoreRestClient;
    dataObjectHistoryCache: DataObjectHistoryDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    dataObjectName: string;
    generation: string;

    public constructor(
        session: Gs2RestSession,
        dataObjectHistoryCache: DataObjectHistoryDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        dataObjectName: string,
        generation: string
    ) {
        this.session = session;
        this.client = new Gs2DatastoreRestClient(
            session
        );
        this.dataObjectHistoryCache = dataObjectHistoryCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.dataObjectName = dataObjectName;
        this.generation = generation;
    }

    public async load(
        request: GetDataObjectHistoryRequest
    ): Promise<GetDataObjectHistoryResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setDataObjectName(this.dataObjectName);
        request.setGeneration(this.generation);
        let r: GetDataObjectHistoryResult = await this.client.getDataObjectHistory(
            request
        );
        this.dataObjectHistoryCache.update(r.getItem()!);
        return r;
    }

}
