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
import { Gs2AccountRestClient } from "@/gs2/account";
import { NamespaceDomainCache } from "@/gs2/account/domain/cache/NamespaceDomainCache";
import { AccountDomainCache } from "@/gs2/account/domain/cache/AccountDomainCache";
import { TakeOverDomainCache } from "@/gs2/account/domain/cache/TakeOverDomainCache";
import { GetTakeOverRequest } from "@/gs2/account/request";
import { GetTakeOverResult } from "@/gs2/account/result";
import { GetTakeOverByUserIdRequest } from "@/gs2/account/request";
import { GetTakeOverByUserIdResult } from "@/gs2/account/result";
import { UpdateTakeOverRequest } from "@/gs2/account/request";
import { UpdateTakeOverResult } from "@/gs2/account/result";
import { UpdateTakeOverByUserIdRequest } from "@/gs2/account/request";
import { UpdateTakeOverByUserIdResult } from "@/gs2/account/result";
import { DeleteTakeOverRequest } from "@/gs2/account/request";
import { DeleteTakeOverResult } from "@/gs2/account/result";
import { AccessToken } from "@/gs2/auth/model";

export class TakeOverDomain {
    session: Gs2RestSession;
    client: Gs2AccountRestClient;
    takeOverCache: TakeOverDomainCache;
    namespaceName: string;
    userId: string;
    type: number;

    public constructor(
        session: Gs2RestSession,
        takeOverCache: TakeOverDomainCache,
        namespaceName: string,
        userId: string,
        type: number
    ) {
        this.session = session;
        this.client = new Gs2AccountRestClient(
            session
        );
        this.takeOverCache = takeOverCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.type = type;
    }

    public async load(
        request: GetTakeOverByUserIdRequest
    ): Promise<GetTakeOverByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setType(this.type);
        let r: GetTakeOverByUserIdResult = await this.client.getTakeOverByUserId(
            request
        );
        this.takeOverCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateTakeOverByUserIdRequest
    ): Promise<UpdateTakeOverByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setType(this.type);
        let r: UpdateTakeOverByUserIdResult = await this.client.updateTakeOverByUserId(
            request
        );
        this.takeOverCache.update(r.getItem()!);
        return r;
    }

}
