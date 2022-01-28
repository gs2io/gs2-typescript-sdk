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
import { Gs2ScriptRestClient } from "@/gs2/script";
import { ScriptDomain } from "@/gs2/script/domain/Script";
import { NamespaceDomainCache } from "@/gs2/script/domain/cache/NamespaceDomainCache";
import { ScriptDomainCache } from "@/gs2/script/domain/cache/ScriptDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/script/request";
import { GetNamespaceStatusResult } from "@/gs2/script/result";
import { GetNamespaceRequest } from "@/gs2/script/request";
import { GetNamespaceResult } from "@/gs2/script/result";
import { UpdateNamespaceRequest } from "@/gs2/script/request";
import { UpdateNamespaceResult } from "@/gs2/script/result";
import { DeleteNamespaceRequest } from "@/gs2/script/request";
import { DeleteNamespaceResult } from "@/gs2/script/result";
import { CreateScriptRequest } from "@/gs2/script/request";
import { CreateScriptResult } from "@/gs2/script/result";
import { CreateScriptFromGitHubRequest } from "@/gs2/script/request";
import { CreateScriptFromGitHubResult } from "@/gs2/script/result";
import { DescribeScriptsIterator } from "@/gs2/script/domain/iterator/ScriptsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2ScriptRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    scriptCache: ScriptDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ScriptRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.scriptCache = new ScriptDomainCache();
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
        return r;
    }

    public async createScript(
        request: CreateScriptRequest
    ): Promise<CreateScriptResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateScriptResult = await this.client.createScript(
            request
        );
        return r;
    }

    public async createScriptFromGitHub(
        request: CreateScriptFromGitHubRequest
    ): Promise<CreateScriptFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateScriptFromGitHubResult = await this.client.createScriptFromGitHub(
            request
        );
        return r;
    }

    public scripts(
    ): DescribeScriptsIterator {
        return new DescribeScriptsIterator(
            this.scriptCache,
            this.client,
            this.namespaceName
        );
    }

    public script(
        scriptName: string
    ): ScriptDomain {
        return new ScriptDomain(
            this.session,
            this.scriptCache,
            this.namespaceName,
            scriptName
        );
    }

}
