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
import { GetProfileRequest } from "@/gs2/friend/request";
import { GetProfileResult } from "@/gs2/friend/result";
import { GetProfileByUserIdRequest } from "@/gs2/friend/request";
import { GetProfileByUserIdResult } from "@/gs2/friend/result";
import { UpdateProfileRequest } from "@/gs2/friend/request";
import { UpdateProfileResult } from "@/gs2/friend/result";
import { UpdateProfileByUserIdRequest } from "@/gs2/friend/request";
import { UpdateProfileByUserIdResult } from "@/gs2/friend/result";
import { DeleteProfileByUserIdRequest } from "@/gs2/friend/request";
import { DeleteProfileByUserIdResult } from "@/gs2/friend/result";
import { GetPublicProfileRequest } from "@/gs2/friend/request";
import { GetPublicProfileResult } from "@/gs2/friend/result";
import { AccessToken } from "@/gs2/auth/model";

export class ProfileAccessTokenDomain {
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

    public async load(
        request: GetProfileRequest
    ): Promise<GetProfileResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: GetProfileResult = await this.client.getProfile(
            request
        );
        return r;
    }

    public async update(
        request: UpdateProfileRequest
    ): Promise<UpdateProfileResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: UpdateProfileResult = await this.client.updateProfile(
            request
        );
        return r;
    }

}
