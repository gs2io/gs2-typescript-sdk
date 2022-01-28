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
import { Gs2DistributorRestClient } from "@/gs2/distributor";
import { NamespaceDomainCache } from "@/gs2/distributor/domain/cache/NamespaceDomainCache";
import { DistributorModelMasterDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelMasterDomainCache";
import { DistributorModelDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelDomainCache";
import { GetDistributorModelRequest } from "@/gs2/distributor/request";
import { GetDistributorModelResult } from "@/gs2/distributor/result";
import { AccessToken } from "@/gs2/auth/model";

export class DistributorModelDomain {
    session: Gs2RestSession;
    client: Gs2DistributorRestClient;
    distributorModelCache: DistributorModelDomainCache;
    namespaceName: string;
    distributorName: string;

    public constructor(
        session: Gs2RestSession,
        distributorModelCache: DistributorModelDomainCache,
        namespaceName: string,
        distributorName: string
    ) {
        this.session = session;
        this.client = new Gs2DistributorRestClient(
            session
        );
        this.distributorModelCache = distributorModelCache;
        this.namespaceName = namespaceName;
        this.distributorName = distributorName;
    }

    public async load(
        request: GetDistributorModelRequest
    ): Promise<GetDistributorModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setDistributorName(this.distributorName);
        let r: GetDistributorModelResult = await this.client.getDistributorModel(
            request
        );
        this.distributorModelCache.update(r.getItem()!);
        return r;
    }

}
