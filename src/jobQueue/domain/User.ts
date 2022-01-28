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
import { JobDomain } from "@/gs2/jobQueue/domain/Job";
import { JobAccessTokenDomain } from "@/gs2/jobQueue/domain/JobAccessToken";
import { DeadLetterJobDomain } from "@/gs2/jobQueue/domain/DeadLetterJob";
import { DeadLetterJobAccessTokenDomain } from "@/gs2/jobQueue/domain/DeadLetterJobAccessToken";
import { NamespaceDomainCache } from "@/gs2/jobQueue/domain/cache/NamespaceDomainCache";
import { JobDomainCache } from "@/gs2/jobQueue/domain/cache/JobDomainCache";
import { DeadLetterJobDomainCache } from "@/gs2/jobQueue/domain/cache/DeadLetterJobDomainCache";
import { PushByUserIdRequest } from "@/gs2/jobQueue/request";
import { PushByUserIdResult } from "@/gs2/jobQueue/result";
import { RunRequest } from "@/gs2/jobQueue/request";
import { RunResult } from "@/gs2/jobQueue/result";
import { RunByUserIdRequest } from "@/gs2/jobQueue/request";
import { RunByUserIdResult } from "@/gs2/jobQueue/result";
import { DescribeJobsByUserIdIterator } from "@/gs2/jobQueue/domain/iterator/JobsByUserIdDomainIterator";
import { DescribeDeadLetterJobsByUserIdIterator } from "@/gs2/jobQueue/domain/iterator/DeadLetterJobsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2JobQueueRestClient;
    namespaceName: string;
    userId: string;
    jobCache: JobDomainCache;
    deadLetterJobCache: DeadLetterJobDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2JobQueueRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.jobCache = new JobDomainCache();
        this.deadLetterJobCache = new DeadLetterJobDomainCache();
    }

    public async push(
        request: PushByUserIdRequest
    ): Promise<PushByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PushByUserIdResult = await this.client.pushByUserId(
            request
        );
        return r;
    }

    public async run(
        request: RunByUserIdRequest
    ): Promise<RunByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: RunByUserIdResult = await this.client.runByUserId(
            request
        );
        return r;
    }

    public jobs(
    ): DescribeJobsByUserIdIterator {
        return new DescribeJobsByUserIdIterator(
            this.jobCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public deadLetterJobs(
    ): DescribeDeadLetterJobsByUserIdIterator {
        return new DescribeDeadLetterJobsByUserIdIterator(
            this.deadLetterJobCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public job(
        jobName: string
    ): JobDomain {
        return new JobDomain(
            this.session,
            this.jobCache,
            this.namespaceName,
            this.userId,
            jobName
        );
    }

    public deadLetterJob(
        deadLetterJobName: string
    ): DeadLetterJobDomain {
        return new DeadLetterJobDomain(
            this.session,
            this.deadLetterJobCache,
            this.namespaceName,
            this.userId,
            deadLetterJobName
        );
    }

}
