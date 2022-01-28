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
import { Gs2KeyRestClient } from "@/gs2/key";
import { NamespaceDomainCache } from "@/gs2/key/domain/cache/NamespaceDomainCache";
import { KeyDomainCache } from "@/gs2/key/domain/cache/KeyDomainCache";
import { GitHubApiKeyDomainCache } from "@/gs2/key/domain/cache/GitHubApiKeyDomainCache";
import { UpdateGitHubApiKeyRequest } from "@/gs2/key/request";
import { UpdateGitHubApiKeyResult } from "@/gs2/key/result";
import { GetGitHubApiKeyRequest } from "@/gs2/key/request";
import { GetGitHubApiKeyResult } from "@/gs2/key/result";
import { DeleteGitHubApiKeyRequest } from "@/gs2/key/request";
import { DeleteGitHubApiKeyResult } from "@/gs2/key/result";
import { AccessToken } from "@/gs2/auth/model";

export class GitHubApiKeyDomain {
    session: Gs2RestSession;
    client: Gs2KeyRestClient;
    gitHubApiKeyCache: GitHubApiKeyDomainCache;
    namespaceName: string;
    apiKeyName: string;

    public constructor(
        session: Gs2RestSession,
        gitHubApiKeyCache: GitHubApiKeyDomainCache,
        namespaceName: string,
        apiKeyName: string
    ) {
        this.session = session;
        this.client = new Gs2KeyRestClient(
            session
        );
        this.gitHubApiKeyCache = gitHubApiKeyCache;
        this.namespaceName = namespaceName;
        this.apiKeyName = apiKeyName;
    }

    public async update(
        request: UpdateGitHubApiKeyRequest
    ): Promise<UpdateGitHubApiKeyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setApiKeyName(this.apiKeyName);
        let r: UpdateGitHubApiKeyResult = await this.client.updateGitHubApiKey(
            request
        );
        this.gitHubApiKeyCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetGitHubApiKeyRequest
    ): Promise<GetGitHubApiKeyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setApiKeyName(this.apiKeyName);
        let r: GetGitHubApiKeyResult = await this.client.getGitHubApiKey(
            request
        );
        this.gitHubApiKeyCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteGitHubApiKeyRequest
    ): Promise<DeleteGitHubApiKeyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setApiKeyName(this.apiKeyName);
        let r: DeleteGitHubApiKeyResult = await this.client.deleteGitHubApiKey(
            request
        );
        this.gitHubApiKeyCache.delete(r.getItem()!);
        return r;
    }

}
