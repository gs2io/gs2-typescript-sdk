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
import { Gs2VersionRestClient } from "@/gs2/version";
import { AcceptVersionDomain } from "@/gs2/version/domain/AcceptVersion";
import { AcceptVersionAccessTokenDomain } from "@/gs2/version/domain/AcceptVersionAccessToken";
import { NamespaceDomainCache } from "@/gs2/version/domain/cache/NamespaceDomainCache";
import { VersionModelMasterDomainCache } from "@/gs2/version/domain/cache/VersionModelMasterDomainCache";
import { VersionModelDomainCache } from "@/gs2/version/domain/cache/VersionModelDomainCache";
import { AcceptVersionDomainCache } from "@/gs2/version/domain/cache/AcceptVersionDomainCache";
import { CheckVersionRequest } from "@/gs2/version/request";
import { CheckVersionResult } from "@/gs2/version/result";
import { CheckVersionByUserIdRequest } from "@/gs2/version/request";
import { CheckVersionByUserIdResult } from "@/gs2/version/result";
import { DescribeAcceptVersionsIterator } from "@/gs2/version/domain/iterator/AcceptVersionsDomainIterator";
import { DescribeAcceptVersionsByUserIdIterator } from "@/gs2/version/domain/iterator/AcceptVersionsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2VersionRestClient;
    namespaceName: string;
    userId: string;
    acceptVersionCache: AcceptVersionDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2VersionRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.acceptVersionCache = new AcceptVersionDomainCache();
    }

    public async checkVersion(
        request: CheckVersionByUserIdRequest
    ): Promise<CheckVersionByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: CheckVersionByUserIdResult = await this.client.checkVersionByUserId(
            request
        );
        return r;
    }

    public acceptVersions(
    ): DescribeAcceptVersionsByUserIdIterator {
        return new DescribeAcceptVersionsByUserIdIterator(
            this.acceptVersionCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public acceptVersion(
        versionName: string
    ): AcceptVersionDomain {
        return new AcceptVersionDomain(
            this.session,
            this.acceptVersionCache,
            this.namespaceName,
            this.userId,
            versionName
        );
    }

}
