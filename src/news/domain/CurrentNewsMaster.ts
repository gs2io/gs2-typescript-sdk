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
import { Gs2NewsRestClient } from "@/gs2/news";
import { NamespaceDomainCache } from "@/gs2/news/domain/cache/NamespaceDomainCache";
import { NewsDomainCache } from "@/gs2/news/domain/cache/NewsDomainCache";
import { PrepareUpdateCurrentNewsMasterRequest } from "@/gs2/news/request";
import { PrepareUpdateCurrentNewsMasterResult } from "@/gs2/news/result";
import { UpdateCurrentNewsMasterRequest } from "@/gs2/news/request";
import { UpdateCurrentNewsMasterResult } from "@/gs2/news/result";
import { PrepareUpdateCurrentNewsMasterFromGitHubRequest } from "@/gs2/news/request";
import { PrepareUpdateCurrentNewsMasterFromGitHubResult } from "@/gs2/news/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentNewsMasterDomain {
    session: Gs2RestSession;
    client: Gs2NewsRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2NewsRestClient(
            session
        );
        this.namespaceName = namespaceName;
    }

    public async prepareUpdate(
        request: PrepareUpdateCurrentNewsMasterRequest
    ): Promise<PrepareUpdateCurrentNewsMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: PrepareUpdateCurrentNewsMasterResult = await this.client.prepareUpdateCurrentNewsMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentNewsMasterRequest
    ): Promise<UpdateCurrentNewsMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentNewsMasterResult = await this.client.updateCurrentNewsMaster(
            request
        );
        return r;
    }

    public async prepareUpdateFromGitHub(
        request: PrepareUpdateCurrentNewsMasterFromGitHubRequest
    ): Promise<PrepareUpdateCurrentNewsMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: PrepareUpdateCurrentNewsMasterFromGitHubResult = await this.client.prepareUpdateCurrentNewsMasterFromGitHub(
            request
        );
        return r;
    }

}
