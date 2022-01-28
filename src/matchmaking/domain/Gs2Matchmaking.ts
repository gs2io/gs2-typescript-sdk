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
import { Gs2MatchmakingRestClient } from "@/gs2/matchmaking";
import { DescribeNamespacesIterator } from "@/gs2/matchmaking/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/matchmaking/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/matchmaking/domain/cache/NamespaceDomainCache";
import { GatheringDomainCache } from "@/gs2/matchmaking/domain/cache/GatheringDomainCache";
import { RatingModelMasterDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelMasterDomainCache";
import { RatingModelDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelDomainCache";
import { RatingDomainCache } from "@/gs2/matchmaking/domain/cache/RatingDomainCache";
import { CreateNamespaceRequest } from "@/gs2/matchmaking/request";
import { CreateNamespaceResult } from "@/gs2/matchmaking/result";
import { DoMatchmakingByPlayerRequest } from "@/gs2/matchmaking/request";
import { DoMatchmakingByPlayerResult } from "@/gs2/matchmaking/result";
import { DeleteGatheringRequest } from "@/gs2/matchmaking/request";
import { DeleteGatheringResult } from "@/gs2/matchmaking/result";
import { PutResultRequest } from "@/gs2/matchmaking/request";
import { PutResultResult } from "@/gs2/matchmaking/result";
import { VoteRequest } from "@/gs2/matchmaking/request";
import { VoteResult } from "@/gs2/matchmaking/result";
import { VoteMultipleRequest } from "@/gs2/matchmaking/request";
import { VoteMultipleResult } from "@/gs2/matchmaking/result";
import { CommitVoteRequest } from "@/gs2/matchmaking/request";
import { CommitVoteResult } from "@/gs2/matchmaking/result";

export class Gs2Matchmaking {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient (
            session
        );
        this.namespaceCache = new NamespaceDomainCache();
    }

    public async createNamespace(
        request: CreateNamespaceRequest
    ): Promise<CreateNamespaceResult> {
        let r: CreateNamespaceResult = await this.client.createNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async doMatchmakingByPlayer(
        request: DoMatchmakingByPlayerRequest
    ): Promise<DoMatchmakingByPlayerResult> {
        let r: DoMatchmakingByPlayerResult = await this.client.doMatchmakingByPlayer(
            request
        );
        return r;
    }

    public async deleteGathering(
        request: DeleteGatheringRequest
    ): Promise<DeleteGatheringResult> {
        let r: DeleteGatheringResult = await this.client.deleteGathering(
            request
        );
        return r;
    }

    public async putResult(
        request: PutResultRequest
    ): Promise<PutResultResult> {
        let r: PutResultResult = await this.client.putResult(
            request
        );
        return r;
    }

    public async vote(
        request: VoteRequest
    ): Promise<VoteResult> {
        let r: VoteResult = await this.client.vote(
            request
        );
        return r;
    }

    public async voteMultiple(
        request: VoteMultipleRequest
    ): Promise<VoteMultipleResult> {
        let r: VoteMultipleResult = await this.client.voteMultiple(
            request
        );
        return r;
    }

    public async commitVote(
        request: CommitVoteRequest
    ): Promise<CommitVoteResult> {
        let r: CommitVoteResult = await this.client.commitVote(
            request
        );
        return r;
    }

    public namespaces(
    ): DescribeNamespacesIterator {
        return new DescribeNamespacesIterator(
            this.namespaceCache,
            this.client
        );
    }

    public namespace(
        namespaceName: string
    ): NamespaceDomain {
        return new NamespaceDomain(
            this.session,
            this.namespaceCache,
            namespaceName
        );
    }
}
