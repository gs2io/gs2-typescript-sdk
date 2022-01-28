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
import { FollowUser } from "@/gs2/friend/model";
import { FollowUserDomainCache } from "@/gs2/friend/domain/cache/FollowUserDomainCache";
import { Gs2FriendRestClient } from "@/gs2/friend";
import { DescribeFollowsRequest } from "@/gs2/friend/request";
import { DescribeFollowsResult } from "@/gs2/friend/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeFollowsIterator {
    private followUserCache: FollowUserDomainCache;
    private client: Gs2FriendRestClient;
    private namespaceName: string;
    private accessToken: AccessToken|null;
    private withProfile: boolean|null;
    private pageToken: string|null;
    private last: boolean;
    private result: FollowUser[]|null;

    private fetchSize: number|null;

    public constructor(
        followUserCache: FollowUserDomainCache,
        client: Gs2FriendRestClient,
        namespaceName: string,
        accessToken: AccessToken|null,
        withProfile: boolean|null
    ) {
        this.followUserCache = followUserCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.withProfile = withProfile;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeFollowsResult = await this.client.describeFollows(
            new DescribeFollowsRequest()
                .withNamespaceName(this.namespaceName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withWithProfile(this.withProfile)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.followUserCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<FollowUser> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<FollowUser>(() => {});
        }
        let ret: FollowUser = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
