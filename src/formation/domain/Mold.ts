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
import { Gs2FormationRestClient } from "@/gs2/formation";
import { FormDomain } from "@/gs2/formation/domain/Form";
import { FormAccessTokenDomain } from "@/gs2/formation/domain/FormAccessToken";
import { NamespaceDomainCache } from "@/gs2/formation/domain/cache/NamespaceDomainCache";
import { FormModelMasterDomainCache } from "@/gs2/formation/domain/cache/FormModelMasterDomainCache";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { GetMoldRequest } from "@/gs2/formation/request";
import { GetMoldResult } from "@/gs2/formation/result";
import { GetMoldByUserIdRequest } from "@/gs2/formation/request";
import { GetMoldByUserIdResult } from "@/gs2/formation/result";
import { SetMoldCapacityByUserIdRequest } from "@/gs2/formation/request";
import { SetMoldCapacityByUserIdResult } from "@/gs2/formation/result";
import { AddMoldCapacityByUserIdRequest } from "@/gs2/formation/request";
import { AddMoldCapacityByUserIdResult } from "@/gs2/formation/result";
import { DeleteMoldRequest } from "@/gs2/formation/request";
import { DeleteMoldResult } from "@/gs2/formation/result";
import { DeleteMoldByUserIdRequest } from "@/gs2/formation/request";
import { DeleteMoldByUserIdResult } from "@/gs2/formation/result";
import { DescribeFormsIterator } from "@/gs2/formation/domain/iterator/FormsDomainIterator";
import { DescribeFormsByUserIdIterator } from "@/gs2/formation/domain/iterator/FormsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class MoldDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    moldCache: MoldDomainCache;
    namespaceName: string;
    userId: string;
    moldName: string;
    formCache: FormDomainCache;

    public constructor(
        session: Gs2RestSession,
        moldCache: MoldDomainCache,
        namespaceName: string,
        userId: string,
        moldName: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.moldCache = moldCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.moldName = moldName;
        this.formCache = new FormDomainCache();
    }

    public async load(
        request: GetMoldByUserIdRequest
    ): Promise<GetMoldByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        let r: GetMoldByUserIdResult = await this.client.getMoldByUserId(
            request
        );
        this.moldCache.update(r.getItem()!);
        return r;
    }

    public async setCapacity(
        request: SetMoldCapacityByUserIdRequest
    ): Promise<SetMoldCapacityByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        let r: SetMoldCapacityByUserIdResult = await this.client.setMoldCapacityByUserId(
            request
        );
        this.moldCache.update(r.getItem()!);
        return r;
    }

    public async addCapacity(
        request: AddMoldCapacityByUserIdRequest
    ): Promise<AddMoldCapacityByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        let r: AddMoldCapacityByUserIdResult = await this.client.addMoldCapacityByUserId(
            request
        );
        this.moldCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMoldByUserIdRequest
    ): Promise<DeleteMoldByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        let r: DeleteMoldByUserIdResult = await this.client.deleteMoldByUserId(
            request
        );
        this.moldCache.delete(r.getItem()!);
        return r;
    }

    public forms(
    ): DescribeFormsByUserIdIterator {
        return new DescribeFormsByUserIdIterator(
            this.formCache,
            this.client,
            this.namespaceName,
            this.moldName,
            this.userId
        );
    }

    public form(
        index: number
    ): FormDomain {
        return new FormDomain(
            this.session,
            this.formCache,
            this.namespaceName,
            this.userId,
            this.moldName,
            index
        );
    }

}
