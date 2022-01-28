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
import { DataObjectDomain } from "@/gs2/datastore/domain/DataObject";
import { DataObjectAccessTokenDomain } from "@/gs2/datastore/domain/DataObjectAccessToken";
import { NamespaceDomainCache } from "@/gs2/datastore/domain/cache/NamespaceDomainCache";
import { DataObjectDomainCache } from "@/gs2/datastore/domain/cache/DataObjectDomainCache";
import { DataObjectHistoryDomainCache } from "@/gs2/datastore/domain/cache/DataObjectHistoryDomainCache";
import { PrepareUploadRequest } from "@/gs2/datastore/request";
import { PrepareUploadResult } from "@/gs2/datastore/result";
import { PrepareUploadByUserIdRequest } from "@/gs2/datastore/request";
import { PrepareUploadByUserIdResult } from "@/gs2/datastore/result";
import { PrepareReUploadRequest } from "@/gs2/datastore/request";
import { PrepareReUploadResult } from "@/gs2/datastore/result";
import { PrepareReUploadByUserIdRequest } from "@/gs2/datastore/request";
import { PrepareReUploadByUserIdResult } from "@/gs2/datastore/result";
import { PrepareDownloadRequest } from "@/gs2/datastore/request";
import { PrepareDownloadResult } from "@/gs2/datastore/result";
import { PrepareDownloadByUserIdRequest } from "@/gs2/datastore/request";
import { PrepareDownloadByUserIdResult } from "@/gs2/datastore/result";
import { PrepareDownloadByGenerationRequest } from "@/gs2/datastore/request";
import { PrepareDownloadByGenerationResult } from "@/gs2/datastore/result";
import { PrepareDownloadByGenerationAndUserIdRequest } from "@/gs2/datastore/request";
import { PrepareDownloadByGenerationAndUserIdResult } from "@/gs2/datastore/result";
import { PrepareDownloadOwnDataRequest } from "@/gs2/datastore/request";
import { PrepareDownloadOwnDataResult } from "@/gs2/datastore/result";
import { PrepareDownloadByUserIdAndDataObjectNameRequest } from "@/gs2/datastore/request";
import { PrepareDownloadByUserIdAndDataObjectNameResult } from "@/gs2/datastore/result";
import { PrepareDownloadOwnDataByGenerationRequest } from "@/gs2/datastore/request";
import { PrepareDownloadOwnDataByGenerationResult } from "@/gs2/datastore/result";
import { PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest } from "@/gs2/datastore/request";
import { PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult } from "@/gs2/datastore/result";
import { DescribeDataObjectsIterator } from "@/gs2/datastore/domain/iterator/DataObjectsDomainIterator";
import { DescribeDataObjectsByUserIdIterator } from "@/gs2/datastore/domain/iterator/DataObjectsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2DatastoreRestClient;
    namespaceName: string;
    userId: string;
    dataObjectCache: DataObjectDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2DatastoreRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.dataObjectCache = new DataObjectDomainCache();
    }

    public async prepareUpload(
        request: PrepareUploadByUserIdRequest
    ): Promise<PrepareUploadByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PrepareUploadByUserIdResult = await this.client.prepareUploadByUserId(
            request
        );
        return r;
    }

    public async prepareReUpload(
        request: PrepareReUploadByUserIdRequest
    ): Promise<PrepareReUploadByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PrepareReUploadByUserIdResult = await this.client.prepareReUploadByUserId(
            request
        );
        return r;
    }

    public async prepareDownload(
        request: PrepareDownloadByUserIdRequest
    ): Promise<PrepareDownloadByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PrepareDownloadByUserIdResult = await this.client.prepareDownloadByUserId(
            request
        );
        return r;
    }

    public async prepareDownloadByGenerationAndId(
        request: PrepareDownloadByGenerationAndUserIdRequest
    ): Promise<PrepareDownloadByGenerationAndUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PrepareDownloadByGenerationAndUserIdResult = await this.client.prepareDownloadByGenerationAndUserId(
            request
        );
        return r;
    }

    public async prepareDownloadByIdAndDataObjectName(
        request: PrepareDownloadByUserIdAndDataObjectNameRequest
    ): Promise<PrepareDownloadByUserIdAndDataObjectNameResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PrepareDownloadByUserIdAndDataObjectNameResult = await this.client.prepareDownloadByUserIdAndDataObjectName(
            request
        );
        return r;
    }

    public async prepareDownloadByIdAndDataObjectNameAndGeneration(
        request: PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest
    ): Promise<PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PrepareDownloadByUserIdAndDataObjectNameAndGenerationResult = await this.client.prepareDownloadByUserIdAndDataObjectNameAndGeneration(
            request
        );
        return r;
    }

    public dataObjects(
        status: string|null
    ): DescribeDataObjectsByUserIdIterator {
        return new DescribeDataObjectsByUserIdIterator(
            this.dataObjectCache,
            this.client,
            this.namespaceName,
            this.userId,
            status
        );
    }

    public dataObject(
        dataObjectName: string
    ): DataObjectDomain {
        return new DataObjectDomain(
            this.session,
            this.dataObjectCache,
            this.namespaceName,
            this.userId,
            dataObjectName
        );
    }

}
