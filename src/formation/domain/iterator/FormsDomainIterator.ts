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
import { Form } from "@/gs2/formation/model";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { Gs2FormationRestClient } from "@/gs2/formation";
import { DescribeFormsRequest } from "@/gs2/formation/request";
import { DescribeFormsResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeFormsIterator {
    private formCache: FormDomainCache;
    private client: Gs2FormationRestClient;
    private namespaceName: string;
    private moldName: string;
    private accessToken: AccessToken|null;
    private pageToken: string|null;
    private last: boolean;
    private result: Form[]|null;

    private fetchSize: number|null;

    public constructor(
        formCache: FormDomainCache,
        client: Gs2FormationRestClient,
        namespaceName: string,
        moldName: string,
        accessToken: AccessToken|null
    ) {
        this.formCache = formCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.moldName = moldName;
        this.accessToken = accessToken;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeFormsResult = await this.client.describeForms(
            new DescribeFormsRequest()
                .withNamespaceName(this.namespaceName)
                .withMoldName(this.moldName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.formCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Form> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Form>(() => {});
        }
        let ret: Form = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
