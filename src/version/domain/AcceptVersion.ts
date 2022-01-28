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

export class AcceptVersionDomain {
    session: Gs2RestSession;
    client: Gs2VersionRestClient;
    acceptVersionCache: AcceptVersionDomainCache;
    namespaceName: string;
    userId: string;
    versionName: string;

    public constructor(
        session: Gs2RestSession,
        acceptVersionCache: AcceptVersionDomainCache,
        namespaceName: string,
        userId: string,
        versionName: string
    ) {
        this.session = session;
        this.client = new Gs2VersionRestClient(
            session
        );
        this.acceptVersionCache = acceptVersionCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.versionName = versionName;
    }

    public async accept(
        request: AcceptByUserIdRequest
    ): Promise<AcceptByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setVersionName(this.versionName);
        let r: AcceptByUserIdResult = await this.client.acceptByUserId(
            request
        );
        this.acceptVersionCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetAcceptVersionByUserIdRequest
    ): Promise<GetAcceptVersionByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setVersionName(this.versionName);
        let r: GetAcceptVersionByUserIdResult = await this.client.getAcceptVersionByUserId(
            request
        );
        this.acceptVersionCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteAcceptVersionByUserIdRequest
    ): Promise<DeleteAcceptVersionByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setVersionName(this.versionName);
        let r: DeleteAcceptVersionByUserIdResult = await this.client.deleteAcceptVersionByUserId(
            request
        );
        return r;
    }

}
