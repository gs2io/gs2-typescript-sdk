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
import { TriggerDomain } from "@/gs2/schedule/domain/Trigger";
import { TriggerAccessTokenDomain } from "@/gs2/schedule/domain/TriggerAccessToken";
import { EventDomain } from "@/gs2/schedule/domain/Event";
import { EventAccessTokenDomain } from "@/gs2/schedule/domain/EventAccessToken";
import { NamespaceDomainCache } from "@/gs2/schedule/domain/cache/NamespaceDomainCache";
import { EventMasterDomainCache } from "@/gs2/schedule/domain/cache/EventMasterDomainCache";
import { TriggerDomainCache } from "@/gs2/schedule/domain/cache/TriggerDomainCache";
import { EventDomainCache } from "@/gs2/schedule/domain/cache/EventDomainCache";
import { DescribeTriggersIterator } from "@/gs2/schedule/domain/iterator/TriggersDomainIterator";
import { DescribeTriggersByUserIdIterator } from "@/gs2/schedule/domain/iterator/TriggersByUserIdDomainIterator";
import { DescribeEventsIterator } from "@/gs2/schedule/domain/iterator/EventsDomainIterator";
import { DescribeEventsByUserIdIterator } from "@/gs2/schedule/domain/iterator/EventsByUserIdDomainIterator";
import { DescribeRawEventsIterator } from "@/gs2/schedule/domain/iterator/RawEventsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ScheduleRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    triggerCache: TriggerDomainCache;
    eventCache: EventDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2ScheduleRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.triggerCache = new TriggerDomainCache();
        this.eventCache = new EventDomainCache();
    }

    public triggers(
    ): DescribeTriggersIterator {
        return new DescribeTriggersIterator(
            this.triggerCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public events(
    ): DescribeEventsIterator {
        return new DescribeEventsIterator(
            this.eventCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public trigger(
        triggerName: string
    ): TriggerAccessTokenDomain {
        return new TriggerAccessTokenDomain(
            this.session,
            this.triggerCache,
            this.namespaceName,
            this.accessToken,
            triggerName
        );
    }

    public event(
        eventName: string
    ): EventAccessTokenDomain {
        return new EventAccessTokenDomain(
            this.session,
            this.eventCache,
            this.namespaceName,
            this.accessToken,
            eventName
        );
    }

}
