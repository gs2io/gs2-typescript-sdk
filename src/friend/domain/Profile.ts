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

export class ProfileDomain {
    session: Gs2RestSession;
    client: Gs2FriendRestClient;
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
        this.namespaceName = namespaceName;
        this.userId = userId;
    }

    public async load(
        request: GetProfileByUserIdRequest
    ): Promise<GetProfileByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetProfileByUserIdResult = await this.client.getProfileByUserId(
            request
        );
        return r;
    }

    public async update(
        request: UpdateProfileByUserIdRequest
    ): Promise<UpdateProfileByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: UpdateProfileByUserIdResult = await this.client.updateProfileByUserId(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteProfileByUserIdRequest
    ): Promise<DeleteProfileByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DeleteProfileByUserIdResult = await this.client.deleteProfileByUserId(
            request
        );
        return r;
    }

    public async getPublic(
        request: GetPublicProfileRequest
    ): Promise<GetPublicProfileResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetPublicProfileResult = await this.client.getPublicProfile(
            request
        );
        return r;
    }

}
