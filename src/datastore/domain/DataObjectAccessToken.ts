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
import { DataObjectHistoryDomain } from "@/gs2/datastore/domain/DataObjectHistory";
import { DataObjectHistoryAccessTokenDomain } from "@/gs2/datastore/domain/DataObjectHistoryAccessToken";
import { NamespaceDomainCache } from "@/gs2/datastore/domain/cache/NamespaceDomainCache";
import { DataObjectDomainCache } from "@/gs2/datastore/domain/cache/DataObjectDomainCache";
import { DataObjectHistoryDomainCache } from "@/gs2/datastore/domain/cache/DataObjectHistoryDomainCache";
import { UpdateDataObjectRequest } from "@/gs2/datastore/request";
import { UpdateDataObjectResult } from "@/gs2/datastore/result";
import { UpdateDataObjectByUserIdRequest } from "@/gs2/datastore/request";
import { UpdateDataObjectByUserIdResult } from "@/gs2/datastore/result";
import { DoneUploadRequest } from "@/gs2/datastore/request";
import { DoneUploadResult } from "@/gs2/datastore/result";
import { DoneUploadByUserIdRequest } from "@/gs2/datastore/request";
import { DoneUploadByUserIdResult } from "@/gs2/datastore/result";
import { DeleteDataObjectRequest } from "@/gs2/datastore/request";
import { DeleteDataObjectResult } from "@/gs2/datastore/result";
import { DeleteDataObjectByUserIdRequest } from "@/gs2/datastore/request";
import { DeleteDataObjectByUserIdResult } from "@/gs2/datastore/result";
import { DescribeDataObjectHistoriesIterator } from "@/gs2/datastore/domain/iterator/DataObjectHistoriesDomainIterator";
import { DescribeDataObjectHistoriesByUserIdIterator } from "@/gs2/datastore/domain/iterator/DataObjectHistoriesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class DataObjectAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2DatastoreRestClient;
    dataObjectCache: DataObjectDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    dataObjectName: string;
    dataObjectHistoryCache: DataObjectHistoryDomainCache;

    public constructor(
        session: Gs2RestSession,
        dataObjectCache: DataObjectDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        dataObjectName: string
    ) {
        this.session = session;
        this.client = new Gs2DatastoreRestClient(
            session
        );
        this.dataObjectCache = dataObjectCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.dataObjectName = dataObjectName;
        this.dataObjectHistoryCache = new DataObjectHistoryDomainCache();
    }

    public async update(
        request: UpdateDataObjectRequest
    ): Promise<UpdateDataObjectResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setDataObjectName(this.dataObjectName);
        let r: UpdateDataObjectResult = await this.client.updateDataObject(
            request
        );
        this.dataObjectCache.update(r.getItem()!);
        return r;
    }

    public async doneUpload(
        request: DoneUploadRequest
    ): Promise<DoneUploadResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setDataObjectName(this.dataObjectName);
        let r: DoneUploadResult = await this.client.doneUpload(
            request
        );
        this.dataObjectCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteDataObjectRequest
    ): Promise<DeleteDataObjectResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setDataObjectName(this.dataObjectName);
        let r: DeleteDataObjectResult = await this.client.deleteDataObject(
            request
        );
        this.dataObjectCache.delete(r.getItem()!);
        return r;
    }

    public dataObjectHistories(
    ): DescribeDataObjectHistoriesIterator {
        return new DescribeDataObjectHistoriesIterator(
            this.dataObjectHistoryCache,
            this.client,
            this.namespaceName,
            this.accessToken,
            this.dataObjectName
        );
    }

    public dataObjectHistory(
        generation: string
    ): DataObjectHistoryAccessTokenDomain {
        return new DataObjectHistoryAccessTokenDomain(
            this.session,
            this.dataObjectHistoryCache,
            this.namespaceName,
            this.accessToken,
            this.dataObjectName,
            generation
        );
    }

}
