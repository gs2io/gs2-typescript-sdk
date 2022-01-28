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
import { NamespaceDomainCache } from "@/gs2/version/domain/cache/NamespaceDomainCache";
import { VersionModelMasterDomainCache } from "@/gs2/version/domain/cache/VersionModelMasterDomainCache";
import { VersionModelDomainCache } from "@/gs2/version/domain/cache/VersionModelDomainCache";
import { AcceptVersionDomainCache } from "@/gs2/version/domain/cache/AcceptVersionDomainCache";
import { AcceptRequest } from "@/gs2/version/request";
import { AcceptResult } from "@/gs2/version/result";
import { AcceptByUserIdRequest } from "@/gs2/version/request";
import { AcceptByUserIdResult } from "@/gs2/version/result";
import { GetAcceptVersionRequest } from "@/gs2/version/request";
import { GetAcceptVersionResult } from "@/gs2/version/result";
import { GetAcceptVersionByUserIdRequest } from "@/gs2/version/request";
import { GetAcceptVersionByUserIdResult } from "@/gs2/version/result";
import { DeleteAcceptVersionRequest } from "@/gs2/version/request";
import { DeleteAcceptVersionResult } from "@/gs2/version/result";
import { DeleteAcceptVersionByUserIdRequest } from "@/gs2/version/request";
import { DeleteAcceptVersionByUserIdResult } from "@/gs2/version/result";
import { AccessToken } from "@/gs2/auth/model";

export class AcceptVersionAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2VersionRestClient;
    acceptVersionCache: AcceptVersionDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    versionName: string;

    public constructor(
        session: Gs2RestSession,
        acceptVersionCache: AcceptVersionDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        versionName: string
    ) {
        this.session = session;
        this.client = new Gs2VersionRestClient(
            session
        );
        this.acceptVersionCache = acceptVersionCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.versionName = versionName;
    }

    public async accept(
        request: AcceptRequest
    ): Promise<AcceptResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setVersionName(this.versionName);
        let r: AcceptResult = await this.client.accept(
            request
        );
        this.acceptVersionCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetAcceptVersionRequest
    ): Promise<GetAcceptVersionResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setVersionName(this.versionName);
        let r: GetAcceptVersionResult = await this.client.getAcceptVersion(
            request
        );
        this.acceptVersionCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteAcceptVersionRequest
    ): Promise<DeleteAcceptVersionResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setVersionName(this.versionName);
        let r: DeleteAcceptVersionResult = await this.client.deleteAcceptVersion(
            request
        );
        return r;
    }

}
