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

export class TakeOverAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2AccountRestClient;
    takeOverCache: TakeOverDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    type: number;

    public constructor(
        session: Gs2RestSession,
        takeOverCache: TakeOverDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        type: number
    ) {
        this.session = session;
        this.client = new Gs2AccountRestClient(
            session
        );
        this.takeOverCache = takeOverCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.type = type;
    }

    public async load(
        request: GetTakeOverRequest
    ): Promise<GetTakeOverResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setType(this.type);
        let r: GetTakeOverResult = await this.client.getTakeOver(
            request
        );
        this.takeOverCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateTakeOverRequest
    ): Promise<UpdateTakeOverResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setType(this.type);
        let r: UpdateTakeOverResult = await this.client.updateTakeOver(
            request
        );
        this.takeOverCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteTakeOverRequest
    ): Promise<DeleteTakeOverResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setType(this.type);
        let r: DeleteTakeOverResult = await this.client.deleteTakeOver(
            request
        );
        this.takeOverCache.delete(r.getItem()!);
        return r;
    }

}
