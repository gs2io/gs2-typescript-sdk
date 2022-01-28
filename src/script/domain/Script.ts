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
import { NamespaceDomainCache } from "@/gs2/script/domain/cache/NamespaceDomainCache";
import { ScriptDomainCache } from "@/gs2/script/domain/cache/ScriptDomainCache";
import { GetScriptRequest } from "@/gs2/script/request";
import { GetScriptResult } from "@/gs2/script/result";
import { UpdateScriptRequest } from "@/gs2/script/request";
import { UpdateScriptResult } from "@/gs2/script/result";
import { UpdateScriptFromGitHubRequest } from "@/gs2/script/request";
import { UpdateScriptFromGitHubResult } from "@/gs2/script/result";
import { DeleteScriptRequest } from "@/gs2/script/request";
import { DeleteScriptResult } from "@/gs2/script/result";
import { AccessToken } from "@/gs2/auth/model";

export class ScriptDomain {
    session: Gs2RestSession;
    client: Gs2ScriptRestClient;
    scriptCache: ScriptDomainCache;
    namespaceName: string;
    scriptName: string;

    public constructor(
        session: Gs2RestSession,
        scriptCache: ScriptDomainCache,
        namespaceName: string,
        scriptName: string
    ) {
        this.session = session;
        this.client = new Gs2ScriptRestClient(
            session
        );
        this.scriptCache = scriptCache;
        this.namespaceName = namespaceName;
        this.scriptName = scriptName;
    }

    public async load(
        request: GetScriptRequest
    ): Promise<GetScriptResult> {
        request.setNamespaceName(this.namespaceName);
        request.setScriptName(this.scriptName);
        let r: GetScriptResult = await this.client.getScript(
            request
        );
        this.scriptCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateScriptRequest
    ): Promise<UpdateScriptResult> {
        request.setNamespaceName(this.namespaceName);
        request.setScriptName(this.scriptName);
        let r: UpdateScriptResult = await this.client.updateScript(
            request
        );
        this.scriptCache.update(r.getItem()!);
        return r;
    }

    public async updateFromGitHub(
        request: UpdateScriptFromGitHubRequest
    ): Promise<UpdateScriptFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        request.setScriptName(this.scriptName);
        let r: UpdateScriptFromGitHubResult = await this.client.updateScriptFromGitHub(
            request
        );
        this.scriptCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteScriptRequest
    ): Promise<DeleteScriptResult> {
        request.setNamespaceName(this.namespaceName);
        request.setScriptName(this.scriptName);
        let r: DeleteScriptResult = await this.client.deleteScript(
            request
        );
        return r;
    }

}
