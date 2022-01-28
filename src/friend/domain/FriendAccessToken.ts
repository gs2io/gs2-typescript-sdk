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

export class FriendAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
    friendUserCache: FriendUserDomainCache;
    namespaceName: string;
    accessToken: AccessToken;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2FriendRestClient(
            session
        );
        this.friendUserCache = new FriendUserDomainCache();
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
    }

    public async load(
        request: GetFriendRequest
    ): Promise<GetFriendResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: GetFriendResult = await this.client.getFriend(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteFriendRequest
    ): Promise<DeleteFriendResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: DeleteFriendResult = await this.client.deleteFriend(
            request
        );
        return r;
    }

    public list(
        withProfile: boolean|null
    ): DescribeFriendsIterator {
        return new DescribeFriendsIterator(
            this.friendUserCache,
            this.client,
            this.namespaceName,
            this.accessToken,
            withProfile
        );
    }

}
