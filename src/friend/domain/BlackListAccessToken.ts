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
import { RegisterBlackListRequest } from "@/gs2/friend/request";
import { RegisterBlackListResult } from "@/gs2/friend/result";
import { RegisterBlackListByUserIdRequest } from "@/gs2/friend/request";
import { RegisterBlackListByUserIdResult } from "@/gs2/friend/result";
import { UnregisterBlackListRequest } from "@/gs2/friend/request";
import { UnregisterBlackListResult } from "@/gs2/friend/result";
import { UnregisterBlackListByUserIdRequest } from "@/gs2/friend/request";
import { UnregisterBlackListByUserIdResult } from "@/gs2/friend/result";
import { DescribeBlackListIterator } from "@/gs2/friend/domain/iterator/BlackListDomainIterator";
import { DescribeBlackListByUserIdIterator } from "@/gs2/friend/domain/iterator/BlackListByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class BlackListAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
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
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
    }

    public async register(
        request: RegisterBlackListRequest
    ): Promise<RegisterBlackListResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: RegisterBlackListResult = await this.client.registerBlackList(
            request
        );
        return r;
    }

    public async unregister(
        request: UnregisterBlackListRequest
    ): Promise<UnregisterBlackListResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: UnregisterBlackListResult = await this.client.unregisterBlackList(
            request
        );
        return r;
    }

    public list(
    ): DescribeBlackListIterator {
        return new DescribeBlackListIterator(
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

}
