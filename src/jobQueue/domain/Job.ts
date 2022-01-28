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
import { Gs2JobQueueRestClient } from "@/gs2/jobQueue";
import { NamespaceDomainCache } from "@/gs2/jobQueue/domain/cache/NamespaceDomainCache";
import { JobDomainCache } from "@/gs2/jobQueue/domain/cache/JobDomainCache";
import { DeadLetterJobDomainCache } from "@/gs2/jobQueue/domain/cache/DeadLetterJobDomainCache";
import { GetJobByUserIdRequest } from "@/gs2/jobQueue/request";
import { GetJobByUserIdResult } from "@/gs2/jobQueue/result";
import { DeleteJobByUserIdRequest } from "@/gs2/jobQueue/request";
import { DeleteJobByUserIdResult } from "@/gs2/jobQueue/result";
import { AccessToken } from "@/gs2/auth/model";

export class JobDomain {
    session: Gs2RestSession;
    client: Gs2JobQueueRestClient;
    jobCache: JobDomainCache;
    namespaceName: string;
    userId: string;
    jobName: string;

    public constructor(
        session: Gs2RestSession,
        jobCache: JobDomainCache,
        namespaceName: string,
        userId: string,
        jobName: string
    ) {
        this.session = session;
        this.client = new Gs2JobQueueRestClient(
            session
        );
        this.jobCache = jobCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.jobName = jobName;
    }

    public async load(
        request: GetJobByUserIdRequest
    ): Promise<GetJobByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setJobName(this.jobName);
        let r: GetJobByUserIdResult = await this.client.getJobByUserId(
            request
        );
        this.jobCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteJobByUserIdRequest
    ): Promise<DeleteJobByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setJobName(this.jobName);
        let r: DeleteJobByUserIdResult = await this.client.deleteJobByUserId(
            request
        );
        this.jobCache.delete(r.getItem()!);
        return r;
    }

}
