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

export class InboxAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
    friendRequestCache: FriendRequestDomainCache;
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
        this.friendRequestCache = new FriendRequestDomainCache();
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
    }

    public async getReceiveRequest(
        request: GetReceiveRequestRequest
    ): Promise<GetReceiveRequestResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: GetReceiveRequestResult = await this.client.getReceiveRequest(
            request
        );
        return r;
    }

    public async acceptRequest(
        request: AcceptRequestRequest
    ): Promise<AcceptRequestResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: AcceptRequestResult = await this.client.acceptRequest(
            request
        );
        return r;
    }

    public async rejectRequest(
        request: RejectRequestRequest
    ): Promise<RejectRequestResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: RejectRequestResult = await this.client.rejectRequest(
            request
        );
        return r;
    }

    public list(
    ): DescribeReceiveRequestsIterator {
        return new DescribeReceiveRequestsIterator(
            this.friendRequestCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

}
