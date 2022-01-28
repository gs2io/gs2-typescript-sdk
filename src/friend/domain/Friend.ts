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
import { NamespaceDomainCache } from "@/gs2/friend/domain/cache/NamespaceDomainCache";
import { FollowUserDomainCache } from "@/gs2/friend/domain/cache/FollowUserDomainCache";
import { FriendUserDomainCache } from "@/gs2/friend/domain/cache/FriendUserDomainCache";
import { FriendRequestDomainCache } from "@/gs2/friend/domain/cache/FriendRequestDomainCache";
import { GetFriendRequest } from "@/gs2/friend/request";
import { GetFriendResult } from "@/gs2/friend/result";
import { GetFriendByUserIdRequest } from "@/gs2/friend/request";
import { GetFriendByUserIdResult } from "@/gs2/friend/result";
import { DeleteFriendRequest } from "@/gs2/friend/request";
import { DeleteFriendResult } from "@/gs2/friend/result";
import { DeleteFriendByUserIdRequest } from "@/gs2/friend/request";
import { DeleteFriendByUserIdResult } from "@/gs2/friend/result";
import { DescribeFriendsIterator } from "@/gs2/friend/domain/iterator/FriendsDomainIterator";
import { DescribeFriendsByUserIdIterator } from "@/gs2/friend/domain/iterator/FriendsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class FriendDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
    friendUserCache: FriendUserDomainCache;
    namespaceName: string;
    userId: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2FriendRestClient(
            session
        );
        this.friendUserCache = new FriendUserDomainCache();
        this.namespaceName = namespaceName;
        this.userId = userId;
    }

    public async load(
        request: GetFriendByUserIdRequest
    ): Promise<GetFriendByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetFriendByUserIdResult = await this.client.getFriendByUserId(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteFriendByUserIdRequest
    ): Promise<DeleteFriendByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DeleteFriendByUserIdResult = await this.client.deleteFriendByUserId(
            request
        );
        return r;
    }

    public list(
        withProfile: boolean|null
    ): DescribeFriendsByUserIdIterator {
        return new DescribeFriendsByUserIdIterator(
            this.friendUserCache,
            this.client,
            this.namespaceName,
            this.userId,
            withProfile
        );
    }

}
