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
import { GetEventMasterRequest } from "@/gs2/schedule/request";
import { GetEventMasterResult } from "@/gs2/schedule/result";
import { UpdateEventMasterRequest } from "@/gs2/schedule/request";
import { UpdateEventMasterResult } from "@/gs2/schedule/result";
import { DeleteEventMasterRequest } from "@/gs2/schedule/request";
import { DeleteEventMasterResult } from "@/gs2/schedule/result";
import { AccessToken } from "@/gs2/auth/model";

export class EventMasterDomain {
    session: Gs2RestSession;
    client: Gs2ScheduleRestClient;
    eventMasterCache: EventMasterDomainCache;
    namespaceName: string;
    eventName: string;

    public constructor(
        session: Gs2RestSession,
        eventMasterCache: EventMasterDomainCache,
        namespaceName: string,
        eventName: string
    ) {
        this.session = session;
        this.client = new Gs2ScheduleRestClient(
            session
        );
        this.eventMasterCache = eventMasterCache;
        this.namespaceName = namespaceName;
        this.eventName = eventName;
    }

    public async load(
        request: GetEventMasterRequest
    ): Promise<GetEventMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setEventName(this.eventName);
        let r: GetEventMasterResult = await this.client.getEventMaster(
            request
        );
        this.eventMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateEventMasterRequest
    ): Promise<UpdateEventMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setEventName(this.eventName);
        let r: UpdateEventMasterResult = await this.client.updateEventMaster(
            request
        );
        this.eventMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteEventMasterRequest
    ): Promise<DeleteEventMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setEventName(this.eventName);
        let r: DeleteEventMasterResult = await this.client.deleteEventMaster(
            request
        );
        this.eventMasterCache.delete(r.getItem()!);
        return r;
    }

}
