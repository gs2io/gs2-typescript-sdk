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

export class StatusAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    statusCache: StatusDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    experienceName: string;
    propertyId: string;

    public constructor(
        session: Gs2RestSession,
        statusCache: StatusDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        experienceName: string,
        propertyId: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
            session
        );
        this.statusCache = statusCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.experienceName = experienceName;
        this.propertyId = propertyId;
    }

    public async load(
        request: GetStatusRequest
    ): Promise<GetStatusResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: GetStatusResult = await this.client.getStatus(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

    public async getWithSignature(
        request: GetStatusWithSignatureRequest
    ): Promise<GetStatusWithSignatureResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setExperienceName(this.experienceName);
        request.setPropertyId(this.propertyId);
        let r: GetStatusWithSignatureResult = await this.client.getStatusWithSignature(
            request
        );
        this.statusCache.update(r.getItem()!);
        return r;
    }

}
