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
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { GetShowcaseMasterRequest } from "@/gs2/showcase/request";
import { GetShowcaseMasterResult } from "@/gs2/showcase/result";
import { UpdateShowcaseMasterRequest } from "@/gs2/showcase/request";
import { UpdateShowcaseMasterResult } from "@/gs2/showcase/result";
import { DeleteShowcaseMasterRequest } from "@/gs2/showcase/request";
import { DeleteShowcaseMasterResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class ShowcaseMasterDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    showcaseMasterCache: ShowcaseMasterDomainCache;
    namespaceName: string;
    showcaseName: string;

    public constructor(
        session: Gs2RestSession,
        showcaseMasterCache: ShowcaseMasterDomainCache,
        namespaceName: string,
        showcaseName: string
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
            session
        );
        this.showcaseMasterCache = showcaseMasterCache;
        this.namespaceName = namespaceName;
        this.showcaseName = showcaseName;
    }

    public async load(
        request: GetShowcaseMasterRequest
    ): Promise<GetShowcaseMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setShowcaseName(this.showcaseName);
        let r: GetShowcaseMasterResult = await this.client.getShowcaseMaster(
            request
        );
        this.showcaseMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateShowcaseMasterRequest
    ): Promise<UpdateShowcaseMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setShowcaseName(this.showcaseName);
        let r: UpdateShowcaseMasterResult = await this.client.updateShowcaseMaster(
            request
        );
        this.showcaseMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteShowcaseMasterRequest
    ): Promise<DeleteShowcaseMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setShowcaseName(this.showcaseName);
        let r: DeleteShowcaseMasterResult = await this.client.deleteShowcaseMaster(
            request
        );
        this.showcaseMasterCache.delete(r.getItem()!);
        return r;
    }

}
