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
import { GetStatusRequest } from "@/gs2/experience/request";
import { GetStatusResult } from "@/gs2/experience/result";
import { GetStatusByUserIdRequest } from "@/gs2/experience/request";
import { GetStatusByUserIdResult } from "@/gs2/experience/result";
import { GetStatusWithSignatureRequest } from "@/gs2/experience/request";
import { GetStatusWithSignatureResult } from "@/gs2/experience/result";
import { GetStatusWithSignatureByUserIdRequest } from "@/gs2/experience/request";
import { GetStatusWithSignatureByUserIdResult } from "@/gs2/experience/result";
import { AddExperienceByUserIdRequest } from "@/gs2/experience/request";
import { AddExperienceByUserIdResult } from "@/gs2/experience/result";
import { SetExperienceByUserIdRequest } from "@/gs2/experience/request";
import { SetExperienceByUserIdResult } from "@/gs2/experience/result";
import { AddRankCapByUserIdRequest } from "@/gs2/experience/request";
import { AddRankCapByUserIdResult } from "@/gs2/experience/result";
import { SetRankCapByUserIdRequest } from "@/gs2/experience/request";
import { SetRankCapByUserIdResult } from "@/gs2/experience/result";
import { DeleteStatusByUserIdRequest } from "@/gs2/experience/request";
import { DeleteStatusByUserIdResult } from "@/gs2/experience/result";
import { AccessToken } from "@/gs2/auth/model";

export class StatusDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    statusCache: StatusDomainCache;
    namespaceName: string;
    userId: string;
    experienceName: string;
    propertyId: string;

    public constructor(
        session: Gs2RestSession,
        statusCache: StatusDomainCache,
        namespaceName: string,
        userId: string,
        experienceName: string,
        propertyId: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
            session
        );
        this.statusCache = statusCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.experienceName = experienceName;
        this.propertyId = propertyId;
    }

    public async load(
        request: GetStatusByUserIdRequest
    ): Promise<GetStatusByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: GetStatusByUserIdResult = await this.client.getStatusByUserId(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async getWithSignature(
        request: GetStatusWithSignatureByUserIdRequest
    ): Promise<GetStatusWithSignatureByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: GetStatusWithSignatureByUserIdResult = await this.client.getStatusWithSignatureByUserId(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async addExperience(
        request: AddExperienceByUserIdRequest
    ): Promise<AddExperienceByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: AddExperienceByUserIdResult = await this.client.addExperienceByUserId(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async setExperience(
        request: SetExperienceByUserIdRequest
    ): Promise<SetExperienceByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: SetExperienceByUserIdResult = await this.client.setExperienceByUserId(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async addRankCap(
        request: AddRankCapByUserIdRequest
    ): Promise<AddRankCapByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: AddRankCapByUserIdResult = await this.client.addRankCapByUserId(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async setRankCap(
        request: SetRankCapByUserIdRequest
    ): Promise<SetRankCapByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: SetRankCapByUserIdResult = await this.client.setRankCapByUserId(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteStatusByUserIdRequest
    ): Promise<DeleteStatusByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: DeleteStatusByUserIdResult = await this.client.deleteStatusByUserId(
            request
        );
        this.statusCache.delete(r.getItem()!);
        return r;
    }

}
