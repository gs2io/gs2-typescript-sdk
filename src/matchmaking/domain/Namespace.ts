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
import { UserDomain } from "@/gs2/matchmaking/domain/User";
import { UserAccessTokenDomain } from "@/gs2/matchmaking/domain/UserAccessToken";
import { CurrentRatingModelMasterDomain } from "@/gs2/matchmaking/domain/CurrentRatingModelMaster";
import { RatingModelDomain } from "@/gs2/matchmaking/domain/RatingModel";
import { RatingModelMasterDomain } from "@/gs2/matchmaking/domain/RatingModelMaster";
import { NamespaceDomainCache } from "@/gs2/matchmaking/domain/cache/NamespaceDomainCache";
import { GatheringDomainCache } from "@/gs2/matchmaking/domain/cache/GatheringDomainCache";
import { RatingModelMasterDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelMasterDomainCache";
import { RatingModelDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelDomainCache";
import { RatingDomainCache } from "@/gs2/matchmaking/domain/cache/RatingDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/matchmaking/request";
import { GetNamespaceStatusResult } from "@/gs2/matchmaking/result";
import { GetNamespaceRequest } from "@/gs2/matchmaking/request";
import { GetNamespaceResult } from "@/gs2/matchmaking/result";
import { UpdateNamespaceRequest } from "@/gs2/matchmaking/request";
import { UpdateNamespaceResult } from "@/gs2/matchmaking/result";
import { DeleteNamespaceRequest } from "@/gs2/matchmaking/request";
import { DeleteNamespaceResult } from "@/gs2/matchmaking/result";
import { CreateRatingModelMasterRequest } from "@/gs2/matchmaking/request";
import { CreateRatingModelMasterResult } from "@/gs2/matchmaking/result";
import { DescribeRatingModelMastersIterator } from "@/gs2/matchmaking/domain/iterator/RatingModelMastersDomainIterator";
import { DescribeRatingModelsIterator } from "@/gs2/matchmaking/domain/iterator/RatingModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    ratingModelMasterCache: RatingModelMasterDomainCache;
    ratingModelCache: RatingModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.ratingModelMasterCache = new RatingModelMasterDomainCache();
        this.ratingModelCache = new RatingModelDomainCache();
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

    public async createRatingModelMaster(
        request: CreateRatingModelMasterRequest
    ): Promise<CreateRatingModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateRatingModelMasterResult = await this.client.createRatingModelMaster(
            request
        );
        return r;
    }

    public ratingModelMasters(
    ): DescribeRatingModelMastersIterator {
        return new DescribeRatingModelMastersIterator(
            this.ratingModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public ratingModels(
    ): DescribeRatingModelsIterator {
        return new DescribeRatingModelsIterator(
            this.ratingModelCache,
            this.client,
            this.namespaceName
        );
    }

    public user(
        userId: string
    ): UserDomain {
        return new UserDomain(
            this.session,
            this.namespaceName,
            userId
        );
    }

    public accessToken(
        accessToken: AccessToken
    ): UserAccessTokenDomain  {
        return new UserAccessTokenDomain(
            this.session,
            this.namespaceName,
            accessToken
        );
    }

    public currentRatingModelMaster(
    ): CurrentRatingModelMasterDomain {
        return new CurrentRatingModelMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public ratingModel(
        ratingName: string
    ): RatingModelDomain {
        return new RatingModelDomain(
            this.session,
            this.ratingModelCache,
            this.namespaceName,
            ratingName
        );
    }

    public ratingModelMaster(
        ratingName: string
    ): RatingModelMasterDomain {
        return new RatingModelMasterDomain(
            this.session,
            this.ratingModelMasterCache,
            this.namespaceName,
            ratingName
        );
    }

}
