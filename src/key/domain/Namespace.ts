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
import { KeyDomain } from "@/gs2/key/domain/Key";
import { GitHubApiKeyDomain } from "@/gs2/key/domain/GitHubApiKey";
import { NamespaceDomainCache } from "@/gs2/key/domain/cache/NamespaceDomainCache";
import { KeyDomainCache } from "@/gs2/key/domain/cache/KeyDomainCache";
import { GitHubApiKeyDomainCache } from "@/gs2/key/domain/cache/GitHubApiKeyDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/key/request";
import { GetNamespaceStatusResult } from "@/gs2/key/result";
import { GetNamespaceRequest } from "@/gs2/key/request";
import { GetNamespaceResult } from "@/gs2/key/result";
import { UpdateNamespaceRequest } from "@/gs2/key/request";
import { UpdateNamespaceResult } from "@/gs2/key/result";
import { DeleteNamespaceRequest } from "@/gs2/key/request";
import { DeleteNamespaceResult } from "@/gs2/key/result";
import { CreateKeyRequest } from "@/gs2/key/request";
import { CreateKeyResult } from "@/gs2/key/result";
import { CreateGitHubApiKeyRequest } from "@/gs2/key/request";
import { CreateGitHubApiKeyResult } from "@/gs2/key/result";
import { DescribeKeysIterator } from "@/gs2/key/domain/iterator/KeysDomainIterator";
import { DescribeGitHubApiKeysIterator } from "@/gs2/key/domain/iterator/GitHubApiKeysDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2KeyRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    keyCache: KeyDomainCache;
    gitHubApiKeyCache: GitHubApiKeyDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2KeyRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.keyCache = new KeyDomainCache();
        this.gitHubApiKeyCache = new GitHubApiKeyDomainCache();
    }

    public async getStatus(
        request: GetNamespaceStatusRequest
    ): Promise<GetNamespaceStatusResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceStatusResult = await this.client.getNamespaceStatus(
            request
        );
        return r;
    }

    public async load(
        request: GetNamespaceRequest
    ): Promise<GetNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceResult = await this.client.getNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateNamespaceRequest
    ): Promise<UpdateNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateNamespaceResult = await this.client.updateNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteNamespaceRequest
    ): Promise<DeleteNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DeleteNamespaceResult = await this.client.deleteNamespace(
            request
        );
        this.namespaceCache.delete(r.getItem()!);
        return r;
    }

    public async createKey(
        request: CreateKeyRequest
    ): Promise<CreateKeyResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateKeyResult = await this.client.createKey(
            request
        );
        return r;
    }

    public async createGitHubApiKey(
        request: CreateGitHubApiKeyRequest
    ): Promise<CreateGitHubApiKeyResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateGitHubApiKeyResult = await this.client.createGitHubApiKey(
            request
        );
        return r;
    }

    public keys(
    ): DescribeKeysIterator {
        return new DescribeKeysIterator(
            this.keyCache,
            this.client,
            this.namespaceName
        );
    }

    public gitHubApiKeys(
    ): DescribeGitHubApiKeysIterator {
        return new DescribeGitHubApiKeysIterator(
            this.gitHubApiKeyCache,
            this.client,
            this.namespaceName
        );
    }

    public key(
        keyName: string
    ): KeyDomain {
        return new KeyDomain(
            this.session,
            this.keyCache,
            this.namespaceName,
            keyName
        );
    }

    public gitHubApiKey(
        apiKeyName: string
    ): GitHubApiKeyDomain {
        return new GitHubApiKeyDomain(
            this.session,
            this.gitHubApiKeyCache,
            this.namespaceName,
            apiKeyName
        );
    }

}
