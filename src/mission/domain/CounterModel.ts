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
import { Gs2MissionRestClient } from "@/gs2/mission";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { GetCounterModelRequest } from "@/gs2/mission/request";
import { GetCounterModelResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class CounterModelDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    counterModelCache: CounterModelDomainCache;
    namespaceName: string;
    counterName: string;

    public constructor(
        session: Gs2RestSession,
        counterModelCache: CounterModelDomainCache,
        namespaceName: string,
        counterName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.counterModelCache = counterModelCache;
        this.namespaceName = namespaceName;
        this.counterName = counterName;
    }

    public async load(
        request: GetCounterModelRequest
    ): Promise<GetCounterModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setCounterName(this.counterName);
        let r: GetCounterModelResult = await this.client.getCounterModel(
            request
        );
        this.counterModelCache.update(r.getItem()!);
        return r;
    }

}
