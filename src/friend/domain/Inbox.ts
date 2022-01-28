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
import { GetReceiveRequestRequest } from "@/gs2/friend/request";
import { GetReceiveRequestResult } from "@/gs2/friend/result";
import { GetReceiveRequestByUserIdRequest } from "@/gs2/friend/request";
import { GetReceiveRequestByUserIdResult } from "@/gs2/friend/result";
import { AcceptRequestRequest } from "@/gs2/friend/request";
import { AcceptRequestResult } from "@/gs2/friend/result";
import { AcceptRequestByUserIdRequest } from "@/gs2/friend/request";
import { AcceptRequestByUserIdResult } from "@/gs2/friend/result";
import { RejectRequestRequest } from "@/gs2/friend/request";
import { RejectRequestResult } from "@/gs2/friend/result";
import { RejectRequestByUserIdRequest } from "@/gs2/friend/request";
import { RejectRequestByUserIdResult } from "@/gs2/friend/result";
import { DescribeReceiveRequestsIterator } from "@/gs2/friend/domain/iterator/ReceiveRequestsDomainIterator";
import { DescribeReceiveRequestsByUserIdIterator } from "@/gs2/friend/domain/iterator/ReceiveRequestsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class InboxDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
    friendRequestCache: FriendRequestDomainCache;
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
        this.friendRequestCache = new FriendRequestDomainCache();
        this.namespaceName = namespaceName;
        this.userId = userId;
    }

    public async getReceiveRequest(
        request: GetReceiveRequestByUserIdRequest
    ): Promise<GetReceiveRequestByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetReceiveRequestByUserIdResult = await this.client.getReceiveRequestByUserId(
            request
        );
        return r;
    }

    public async acceptRequest(
        request: AcceptRequestByUserIdRequest
    ): Promise<AcceptRequestByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: AcceptRequestByUserIdResult = await this.client.acceptRequestByUserId(
            request
        );
        return r;
    }

    public async rejectRequest(
        request: RejectRequestByUserIdRequest
    ): Promise<RejectRequestByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: RejectRequestByUserIdResult = await this.client.rejectRequestByUserId(
            request
        );
        return r;
    }

    public list(
    ): DescribeReceiveRequestsByUserIdIterator {
        return new DescribeReceiveRequestsByUserIdIterator(
            this.friendRequestCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

}
