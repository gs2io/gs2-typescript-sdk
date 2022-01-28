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
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { NamespaceDomainCache } from "@/gs2/experience/domain/cache/NamespaceDomainCache";
import { ExperienceModelMasterDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelMasterDomainCache";
import { ExperienceModelDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelDomainCache";
import { ThresholdMasterDomainCache } from "@/gs2/experience/domain/cache/ThresholdMasterDomainCache";
import { StatusDomainCache } from "@/gs2/experience/domain/cache/StatusDomainCache";
import { GetThresholdMasterRequest } from "@/gs2/experience/request";
import { GetThresholdMasterResult } from "@/gs2/experience/result";
import { UpdateThresholdMasterRequest } from "@/gs2/experience/request";
import { UpdateThresholdMasterResult } from "@/gs2/experience/result";
import { DeleteThresholdMasterRequest } from "@/gs2/experience/request";
import { DeleteThresholdMasterResult } from "@/gs2/experience/result";
import { AccessToken } from "@/gs2/auth/model";

export class ThresholdMasterDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    thresholdMasterCache: ThresholdMasterDomainCache;
    namespaceName: string;
    thresholdName: string;

    public constructor(
        session: Gs2RestSession,
        thresholdMasterCache: ThresholdMasterDomainCache,
        namespaceName: string,
        thresholdName: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
            session
        );
        this.thresholdMasterCache = thresholdMasterCache;
        this.namespaceName = namespaceName;
        this.thresholdName = thresholdName;
    }

    public async load(
        request: GetThresholdMasterRequest
    ): Promise<GetThresholdMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setThresholdName(this.thresholdName);
        let r: GetThresholdMasterResult = await this.client.getThresholdMaster(
            request
        );
        this.thresholdMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateThresholdMasterRequest
    ): Promise<UpdateThresholdMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setThresholdName(this.thresholdName);
        let r: UpdateThresholdMasterResult = await this.client.updateThresholdMaster(
            request
        );
        this.thresholdMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteThresholdMasterRequest
    ): Promise<DeleteThresholdMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setThresholdName(this.thresholdName);
        let r: DeleteThresholdMasterResult = await this.client.deleteThresholdMaster(
            request
        );
        this.thresholdMasterCache.delete(r.getItem()!);
        return r;
    }

}
