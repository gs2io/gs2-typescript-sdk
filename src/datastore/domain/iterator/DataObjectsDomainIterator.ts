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
import { DataObject } from "@/gs2/datastore/model";
import { DataObjectDomainCache } from "@/gs2/datastore/domain/cache/DataObjectDomainCache";
import { Gs2DatastoreRestClient } from "@/gs2/datastore";
import { DescribeDataObjectsRequest } from "@/gs2/datastore/request";
import { DescribeDataObjectsResult } from "@/gs2/datastore/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeDataObjectsIterator {
    private dataObjectCache: DataObjectDomainCache;
    private client: Gs2DatastoreRestClient;
    private namespaceName: string;
    private accessToken: AccessToken|null;
    private status: string|null;
    private pageToken: string|null;
    private last: boolean;
    private result: DataObject[]|null;

    private fetchSize: number|null;

    public constructor(
        dataObjectCache: DataObjectDomainCache,
        client: Gs2DatastoreRestClient,
        namespaceName: string,
        accessToken: AccessToken|null,
        status: string|null
    ) {
        this.dataObjectCache = dataObjectCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.status = status;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeDataObjectsResult = await this.client.describeDataObjects(
            new DescribeDataObjectsRequest()
                .withNamespaceName(this.namespaceName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withStatus(this.status)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.dataObjectCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<DataObject> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<DataObject>(() => {});
        }
        let ret: DataObject = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
