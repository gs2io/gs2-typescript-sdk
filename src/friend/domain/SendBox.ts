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
import { GetSendRequestRequest } from "@/gs2/friend/request";
import { GetSendRequestResult } from "@/gs2/friend/result";
import { GetSendRequestByUserIdRequest } from "@/gs2/friend/request";
import { GetSendRequestByUserIdResult } from "@/gs2/friend/result";
import { SendRequestRequest } from "@/gs2/friend/request";
import { SendRequestResult } from "@/gs2/friend/result";
import { SendRequestByUserIdRequest } from "@/gs2/friend/request";
import { SendRequestByUserIdResult } from "@/gs2/friend/result";
import { DeleteRequestRequest } from "@/gs2/friend/request";
import { DeleteRequestResult } from "@/gs2/friend/result";
import { DeleteRequestByUserIdRequest } from "@/gs2/friend/request";
import { DeleteRequestByUserIdResult } from "@/gs2/friend/result";
import { DescribeSendRequestsIterator } from "@/gs2/friend/domain/iterator/SendRequestsDomainIterator";
import { DescribeSendRequestsByUserIdIterator } from "@/gs2/friend/domain/iterator/SendRequestsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class SendBoxDomain {
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

    public async getSendRequest(
        request: GetSendRequestByUserIdRequest
    ): Promise<GetSendRequestByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetSendRequestByUserIdResult = await this.client.getSendRequestByUserId(
            request
        );
        return r;
    }

    public async sendRequest(
        request: SendRequestByUserIdRequest
    ): Promise<SendRequestByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: SendRequestByUserIdResult = await this.client.sendRequestByUserId(
            request
        );
        return r;
    }

    public async deleteRequest(
        request: DeleteRequestByUserIdRequest
    ): Promise<DeleteRequestByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DeleteRequestByUserIdResult = await this.client.deleteRequestByUserId(
            request
        );
        return r;
    }

    public list(
    ): DescribeSendRequestsByUserIdIterator {
        return new DescribeSendRequestsByUserIdIterator(
            this.friendRequestCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

}
