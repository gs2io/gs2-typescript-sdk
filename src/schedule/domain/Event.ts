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
import { GetEventRequest } from "@/gs2/schedule/request";
import { GetEventResult } from "@/gs2/schedule/result";
import { GetEventByUserIdRequest } from "@/gs2/schedule/request";
import { GetEventByUserIdResult } from "@/gs2/schedule/result";
import { GetRawEventRequest } from "@/gs2/schedule/request";
import { GetRawEventResult } from "@/gs2/schedule/result";
import { AccessToken } from "@/gs2/auth/model";

export class EventDomain {
    session: Gs2RestSession;
    client: Gs2ScheduleRestClient;
    eventCache: EventDomainCache;
    namespaceName: string;
    userId: string;
    eventName: string;

    public constructor(
        session: Gs2RestSession,
        eventCache: EventDomainCache,
        namespaceName: string,
        userId: string,
        eventName: string
    ) {
        this.session = session;
        this.client = new Gs2ScheduleRestClient(
            session
        );
        this.eventCache = eventCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.eventName = eventName;
    }

    public async load(
        request: GetEventByUserIdRequest
    ): Promise<GetEventByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setEventName(this.eventName);
        let r: GetEventByUserIdResult = await this.client.getEventByUserId(
            request
        );
        this.eventCache.update(r.getItem()!);
        return r;
    }

    public async getRaw(
        request: GetRawEventRequest
    ): Promise<GetRawEventResult> {
        request.setNamespaceName(this.namespaceName);
        request.setEventName(this.eventName);
        let r: GetRawEventResult = await this.client.getRawEvent(
            request
        );
        this.eventCache.update(r.getItem()!);
        return r;
    }

}
