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
import { GetExperienceModelMasterRequest } from "@/gs2/experience/request";
import { GetExperienceModelMasterResult } from "@/gs2/experience/result";
import { UpdateExperienceModelMasterRequest } from "@/gs2/experience/request";
import { UpdateExperienceModelMasterResult } from "@/gs2/experience/result";
import { DeleteExperienceModelMasterRequest } from "@/gs2/experience/request";
import { DeleteExperienceModelMasterResult } from "@/gs2/experience/result";
import { AccessToken } from "@/gs2/auth/model";

export class ExperienceModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    experienceModelMasterCache: ExperienceModelMasterDomainCache;
    namespaceName: string;
    experienceName: string;

    public constructor(
        session: Gs2RestSession,
        experienceModelMasterCache: ExperienceModelMasterDomainCache,
        namespaceName: string,
        experienceName: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
            session
        );
        this.experienceModelMasterCache = experienceModelMasterCache;
        this.namespaceName = namespaceName;
        this.experienceName = experienceName;
    }

    public async load(
        request: GetExperienceModelMasterRequest
    ): Promise<GetExperienceModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setExperienceName(this.experienceName);
        let r: GetExperienceModelMasterResult = await this.client.getExperienceModelMaster(
            request
        );
        this.experienceModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateExperienceModelMasterRequest
    ): Promise<UpdateExperienceModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setExperienceName(this.experienceName);
        let r: UpdateExperienceModelMasterResult = await this.client.updateExperienceModelMaster(
            request
        );
        this.experienceModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteExperienceModelMasterRequest
    ): Promise<DeleteExperienceModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setExperienceName(this.experienceName);
        let r: DeleteExperienceModelMasterResult = await this.client.deleteExperienceModelMaster(
            request
        );
        this.experienceModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
