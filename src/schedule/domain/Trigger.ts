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
import { Gs2ScheduleRestClient } from "@/gs2/schedule";
import { NamespaceDomainCache } from "@/gs2/schedule/domain/cache/NamespaceDomainCache";
import { EventMasterDomainCache } from "@/gs2/schedule/domain/cache/EventMasterDomainCache";
import { TriggerDomainCache } from "@/gs2/schedule/domain/cache/TriggerDomainCache";
import { EventDomainCache } from "@/gs2/schedule/domain/cache/EventDomainCache";
import { GetTriggerRequest } from "@/gs2/schedule/request";
import { GetTriggerResult } from "@/gs2/schedule/result";
import { GetTriggerByUserIdRequest } from "@/gs2/schedule/request";
import { GetTriggerByUserIdResult } from "@/gs2/schedule/result";
import { TriggerByUserIdRequest } from "@/gs2/schedule/request";
import { TriggerByUserIdResult } from "@/gs2/schedule/result";
import { DeleteTriggerRequest } from "@/gs2/schedule/request";
import { DeleteTriggerResult } from "@/gs2/schedule/result";
import { DeleteTriggerByUserIdRequest } from "@/gs2/schedule/request";
import { DeleteTriggerByUserIdResult } from "@/gs2/schedule/result";
import { AccessToken } from "@/gs2/auth/model";

export class TriggerDomain {
    session: Gs2RestSession;
    client: Gs2ScheduleRestClient;
    triggerCache: TriggerDomainCache;
    namespaceName: string;
    userId: string;
    triggerName: string;

    public constructor(
        session: Gs2RestSession,
        triggerCache: TriggerDomainCache,
        namespaceName: string,
        userId: string,
        triggerName: string
    ) {
        this.session = session;
        this.client = new Gs2ScheduleRestClient(
            session
        );
        this.triggerCache = triggerCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.triggerName = triggerName;
    }

    public async load(
        request: GetTriggerByUserIdRequest
    ): Promise<GetTriggerByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setTriggerName(this.triggerName);
        let r: GetTriggerByUserIdResult = await this.client.getTriggerByUserId(
            request
        );
        this.triggerCache.update(r.getItem()!);
        return r;
    }

    public async trigger(
        request: TriggerByUserIdRequest
    ): Promise<TriggerByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setTriggerName(this.triggerName);
        let r: TriggerByUserIdResult = await this.client.triggerByUserId(
            request
        );
        this.triggerCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteTriggerByUserIdRequest
    ): Promise<DeleteTriggerByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setTriggerName(this.triggerName);
        let r: DeleteTriggerByUserIdResult = await this.client.deleteTriggerByUserId(
            request
        );
        this.triggerCache.delete(r.getItem()!);
        return r;
    }

}
