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
import { Gs2KeyRestClient } from "@/gs2/key";
import { NamespaceDomainCache } from "@/gs2/key/domain/cache/NamespaceDomainCache";
import { KeyDomainCache } from "@/gs2/key/domain/cache/KeyDomainCache";
import { GitHubApiKeyDomainCache } from "@/gs2/key/domain/cache/GitHubApiKeyDomainCache";
import { UpdateKeyRequest } from "@/gs2/key/request";
import { UpdateKeyResult } from "@/gs2/key/result";
import { GetKeyRequest } from "@/gs2/key/request";
import { GetKeyResult } from "@/gs2/key/result";
import { DeleteKeyRequest } from "@/gs2/key/request";
import { DeleteKeyResult } from "@/gs2/key/result";
import { EncryptRequest } from "@/gs2/key/request";
import { EncryptResult } from "@/gs2/key/result";
import { DecryptRequest } from "@/gs2/key/request";
import { DecryptResult } from "@/gs2/key/result";
import { AccessToken } from "@/gs2/auth/model";

export class KeyDomain {
    session: Gs2RestSession;
    client: Gs2KeyRestClient;
    keyCache: KeyDomainCache;
    namespaceName: string;
    keyName: string;

    public constructor(
        session: Gs2RestSession,
        keyCache: KeyDomainCache,
        namespaceName: string,
        keyName: string
    ) {
        this.session = session;
        this.client = new Gs2KeyRestClient(
            session
        );
        this.keyCache = keyCache;
        this.namespaceName = namespaceName;
        this.keyName = keyName;
    }

    public async update(
        request: UpdateKeyRequest
    ): Promise<UpdateKeyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setKeyName(this.keyName);
        let r: UpdateKeyResult = await this.client.updateKey(
            request
        );
        this.keyCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetKeyRequest
    ): Promise<GetKeyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setKeyName(this.keyName);
        let r: GetKeyResult = await this.client.getKey(
            request
        );
        this.keyCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteKeyRequest
    ): Promise<DeleteKeyResult> {
        request.setNamespaceName(this.namespaceName);
        request.setKeyName(this.keyName);
        let r: DeleteKeyResult = await this.client.deleteKey(
            request
        );
        this.keyCache.delete(r.getItem()!);
        return r;
    }

    public async encrypt(
        request: EncryptRequest
    ): Promise<EncryptResult> {
        request.setNamespaceName(this.namespaceName);
        request.setKeyName(this.keyName);
        let r: EncryptResult = await this.client.encrypt(
            request
        );
        return r;
    }

    public async decrypt(
        request: DecryptRequest
    ): Promise<DecryptResult> {
        request.setNamespaceName(this.namespaceName);
        request.setKeyName(this.keyName);
        let r: DecryptResult = await this.client.decrypt(
            request
        );
        return r;
    }

}
