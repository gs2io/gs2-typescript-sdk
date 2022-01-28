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
import { Gs2LotteryRestClient } from "@/gs2/lottery";
import { NamespaceDomainCache } from "@/gs2/lottery/domain/cache/NamespaceDomainCache";
import { LotteryModelMasterDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelMasterDomainCache";
import { PrizeTableMasterDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableMasterDomainCache";
import { BoxDomainCache } from "@/gs2/lottery/domain/cache/BoxDomainCache";
import { LotteryModelDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelDomainCache";
import { PrizeTableDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableDomainCache";
import { ProbabilityDomainCache } from "@/gs2/lottery/domain/cache/ProbabilityDomainCache";
import { ExportMasterRequest } from "@/gs2/lottery/request";
import { ExportMasterResult } from "@/gs2/lottery/result";
import { GetCurrentLotteryMasterRequest } from "@/gs2/lottery/request";
import { GetCurrentLotteryMasterResult } from "@/gs2/lottery/result";
import { UpdateCurrentLotteryMasterRequest } from "@/gs2/lottery/request";
import { UpdateCurrentLotteryMasterResult } from "@/gs2/lottery/result";
import { UpdateCurrentLotteryMasterFromGitHubRequest } from "@/gs2/lottery/request";
import { UpdateCurrentLotteryMasterFromGitHubResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentLotteryMasterDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
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
        request: GetCurrentLotteryMasterRequest
    ): Promise<GetCurrentLotteryMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentLotteryMasterResult = await this.client.getCurrentLotteryMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentLotteryMasterRequest
    ): Promise<UpdateCurrentLotteryMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentLotteryMasterResult = await this.client.updateCurrentLotteryMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentLotteryMasterFromGitHubRequest
    ): Promise<UpdateCurrentLotteryMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentLotteryMasterFromGitHubResult = await this.client.updateCurrentLotteryMasterFromGitHub(
            request
        );
        return r;
    }

}
