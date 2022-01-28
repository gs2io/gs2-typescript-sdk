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
import { GetFollowRequest } from "@/gs2/friend/request";
import { GetFollowResult } from "@/gs2/friend/result";
import { GetFollowByUserIdRequest } from "@/gs2/friend/request";
import { GetFollowByUserIdResult } from "@/gs2/friend/result";
import { FollowRequest } from "@/gs2/friend/request";
import { FollowResult } from "@/gs2/friend/result";
import { FollowByUserIdRequest } from "@/gs2/friend/request";
import { FollowByUserIdResult } from "@/gs2/friend/result";
import { UnfollowRequest } from "@/gs2/friend/request";
import { UnfollowResult } from "@/gs2/friend/result";
import { UnfollowByUserIdRequest } from "@/gs2/friend/request";
import { UnfollowByUserIdResult } from "@/gs2/friend/result";
import { DescribeFollowsIterator } from "@/gs2/friend/domain/iterator/FollowsDomainIterator";
import { DescribeFollowsByUserIdIterator } from "@/gs2/friend/domain/iterator/FollowsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class FollowDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
    followUserCache: FollowUserDomainCache;
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
        this.followUserCache = new FollowUserDomainCache();
        this.namespaceName = namespaceName;
        this.userId = userId;
    }

    public async load(
        request: GetFollowByUserIdRequest
    ): Promise<GetFollowByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetFollowByUserIdResult = await this.client.getFollowByUserId(
            request
        );
        return r;
    }

    public async follow(
        request: FollowByUserIdRequest
    ): Promise<FollowByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: FollowByUserIdResult = await this.client.followByUserId(
            request
        );
        return r;
    }

    public async unfollow(
        request: UnfollowByUserIdRequest
    ): Promise<UnfollowByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: UnfollowByUserIdResult = await this.client.unfollowByUserId(
            request
        );
        return r;
    }

    public list(
        withProfile: boolean|null
    ): DescribeFollowsByUserIdIterator {
        return new DescribeFollowsByUserIdIterator(
            this.followUserCache,
            this.client,
            this.namespaceName,
            this.userId,
            withProfile
        );
    }

}
