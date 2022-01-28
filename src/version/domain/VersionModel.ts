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
import { GetVersionModelRequest } from "@/gs2/version/request";
import { GetVersionModelResult } from "@/gs2/version/result";
import { AccessToken } from "@/gs2/auth/model";

export class VersionModelDomain {
    session: Gs2RestSession;
    client: Gs2VersionRestClient;
    versionModelCache: VersionModelDomainCache;
    namespaceName: string;
    versionName: string;

    public constructor(
        session: Gs2RestSession,
        versionModelCache: VersionModelDomainCache,
        namespaceName: string,
        versionName: string
    ) {
        this.session = session;
        this.client = new Gs2VersionRestClient(
            session
        );
        this.versionModelCache = versionModelCache;
        this.namespaceName = namespaceName;
        this.versionName = versionName;
    }

    public async load(
        request: GetVersionModelRequest
    ): Promise<GetVersionModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setVersionName(this.versionName);
        let r: GetVersionModelResult = await this.client.getVersionModel(
            request
        );
        this.versionModelCache.update(r.getItem()!);
        return r;
    }

}
