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
import { Gs2LogRestClient } from "@/gs2/log";
import { NamespaceDomainCache } from "@/gs2/log/domain/cache/NamespaceDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/log/request";
import { GetNamespaceStatusResult } from "@/gs2/log/result";
import { GetNamespaceRequest } from "@/gs2/log/request";
import { GetNamespaceResult } from "@/gs2/log/result";
import { UpdateNamespaceRequest } from "@/gs2/log/request";
import { UpdateNamespaceResult } from "@/gs2/log/result";
import { DeleteNamespaceRequest } from "@/gs2/log/request";
import { DeleteNamespaceResult } from "@/gs2/log/result";
import { QueryAccessLogRequest } from "@/gs2/log/request";
import { QueryAccessLogResult } from "@/gs2/log/result";
import { CountAccessLogRequest } from "@/gs2/log/request";
import { CountAccessLogResult } from "@/gs2/log/result";
import { QueryIssueStampSheetLogRequest } from "@/gs2/log/request";
import { QueryIssueStampSheetLogResult } from "@/gs2/log/result";
import { CountIssueStampSheetLogRequest } from "@/gs2/log/request";
import { CountIssueStampSheetLogResult } from "@/gs2/log/result";
import { QueryExecuteStampSheetLogRequest } from "@/gs2/log/request";
import { QueryExecuteStampSheetLogResult } from "@/gs2/log/result";
import { CountExecuteStampSheetLogRequest } from "@/gs2/log/request";
import { CountExecuteStampSheetLogResult } from "@/gs2/log/result";
import { QueryExecuteStampTaskLogRequest } from "@/gs2/log/request";
import { QueryExecuteStampTaskLogResult } from "@/gs2/log/result";
import { CountExecuteStampTaskLogRequest } from "@/gs2/log/request";
import { CountExecuteStampTaskLogResult } from "@/gs2/log/result";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2LogRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2LogRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
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

    public async queryAccessLog(
        request: QueryAccessLogRequest
    ): Promise<QueryAccessLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: QueryAccessLogResult = await this.client.queryAccessLog(
            request
        );
        return r;
    }

    public async countAccessLog(
        request: CountAccessLogRequest
    ): Promise<CountAccessLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CountAccessLogResult = await this.client.countAccessLog(
            request
        );
        return r;
    }

    public async queryIssueStampSheetLog(
        request: QueryIssueStampSheetLogRequest
    ): Promise<QueryIssueStampSheetLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: QueryIssueStampSheetLogResult = await this.client.queryIssueStampSheetLog(
            request
        );
        return r;
    }

    public async countIssueStampSheetLog(
        request: CountIssueStampSheetLogRequest
    ): Promise<CountIssueStampSheetLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CountIssueStampSheetLogResult = await this.client.countIssueStampSheetLog(
            request
        );
        return r;
    }

    public async queryExecuteStampSheetLog(
        request: QueryExecuteStampSheetLogRequest
    ): Promise<QueryExecuteStampSheetLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: QueryExecuteStampSheetLogResult = await this.client.queryExecuteStampSheetLog(
            request
        );
        return r;
    }

    public async countExecuteStampSheetLog(
        request: CountExecuteStampSheetLogRequest
    ): Promise<CountExecuteStampSheetLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CountExecuteStampSheetLogResult = await this.client.countExecuteStampSheetLog(
            request
        );
        return r;
    }

    public async queryExecuteStampTaskLog(
        request: QueryExecuteStampTaskLogRequest
    ): Promise<QueryExecuteStampTaskLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: QueryExecuteStampTaskLogResult = await this.client.queryExecuteStampTaskLog(
            request
        );
        return r;
    }

    public async countExecuteStampTaskLog(
        request: CountExecuteStampTaskLogRequest
    ): Promise<CountExecuteStampTaskLogResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CountExecuteStampTaskLogResult = await this.client.countExecuteStampTaskLog(
            request
        );
        return r;
    }

}
