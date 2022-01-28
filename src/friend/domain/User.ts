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
import { Gs2FriendRestClient } from "@/gs2/friend";
import { ProfileDomain } from "@/gs2/friend/domain/Profile";
import { ProfileAccessTokenDomain } from "@/gs2/friend/domain/ProfileAccessToken";
import { BlackListDomain } from "@/gs2/friend/domain/BlackList";
import { BlackListAccessTokenDomain } from "@/gs2/friend/domain/BlackListAccessToken";
import { FollowDomain } from "@/gs2/friend/domain/Follow";
import { FollowAccessTokenDomain } from "@/gs2/friend/domain/FollowAccessToken";
import { FriendDomain } from "@/gs2/friend/domain/Friend";
import { FriendAccessTokenDomain } from "@/gs2/friend/domain/FriendAccessToken";
import { SendBoxDomain } from "@/gs2/friend/domain/SendBox";
import { SendBoxAccessTokenDomain } from "@/gs2/friend/domain/SendBoxAccessToken";
import { InboxDomain } from "@/gs2/friend/domain/Inbox";
import { InboxAccessTokenDomain } from "@/gs2/friend/domain/InboxAccessToken";
import { NamespaceDomainCache } from "@/gs2/friend/domain/cache/NamespaceDomainCache";
import { FollowUserDomainCache } from "@/gs2/friend/domain/cache/FollowUserDomainCache";
import { FriendUserDomainCache } from "@/gs2/friend/domain/cache/FriendUserDomainCache";
import { FriendRequestDomainCache } from "@/gs2/friend/domain/cache/FriendRequestDomainCache";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
    namespaceName: string;
    userId: string;
    followUserCache: FollowUserDomainCache;
    friendUserCache: FriendUserDomainCache;
    friendRequestCache: FriendRequestDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2FriendRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.followUserCache = new FollowUserDomainCache();
        this.friendUserCache = new FriendUserDomainCache();
        this.friendRequestCache = new FriendRequestDomainCache();
    }

    public profile(
    ): ProfileDomain {
        return new ProfileDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

    public blackList(
    ): BlackListDomain {
        return new BlackListDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

    public follow(
    ): FollowDomain {
        return new FollowDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

    public friend(
    ): FriendDomain {
        return new FriendDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

    public sendBox(
    ): SendBoxDomain {
        return new SendBoxDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

    public inbox(
    ): InboxDomain {
        return new InboxDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

}
