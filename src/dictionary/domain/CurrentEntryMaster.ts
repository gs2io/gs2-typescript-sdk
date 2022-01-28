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
import { Gs2DictionaryRestClient } from "@/gs2/dictionary";
import { NamespaceDomainCache } from "@/gs2/dictionary/domain/cache/NamespaceDomainCache";
import { EntryModelDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelDomainCache";
import { EntryModelMasterDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelMasterDomainCache";
import { EntryDomainCache } from "@/gs2/dictionary/domain/cache/EntryDomainCache";
import { ExportMasterRequest } from "@/gs2/dictionary/request";
import { ExportMasterResult } from "@/gs2/dictionary/result";
import { GetCurrentEntryMasterRequest } from "@/gs2/dictionary/request";
import { GetCurrentEntryMasterResult } from "@/gs2/dictionary/result";
import { UpdateCurrentEntryMasterRequest } from "@/gs2/dictionary/request";
import { UpdateCurrentEntryMasterResult } from "@/gs2/dictionary/result";
import { UpdateCurrentEntryMasterFromGitHubRequest } from "@/gs2/dictionary/request";
import { UpdateCurrentEntryMasterFromGitHubResult } from "@/gs2/dictionary/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentEntryMasterDomain {
    session: Gs2RestSession;
    client: Gs2DictionaryRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2DictionaryRestClient(
            session
        );
        this.namespaceName = namespaceName;
    }

    public async exportMaster(
        request: ExportMasterRequest
    ): Promise<ExportMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: ExportMasterResult = await this.client.exportMaster(
            request
        );
        return r;
    }

    public async load(
        request: GetCurrentEntryMasterRequest
    ): Promise<GetCurrentEntryMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentEntryMasterResult = await this.client.getCurrentEntryMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentEntryMasterRequest
    ): Promise<UpdateCurrentEntryMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentEntryMasterResult = await this.client.updateCurrentEntryMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentEntryMasterFromGitHubRequest
    ): Promise<UpdateCurrentEntryMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentEntryMasterFromGitHubResult = await this.client.updateCurrentEntryMasterFromGitHub(
            request
        );
        return r;
    }

}
