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
 *
 * deny overwrite
 */

import { Gs2RestSession } from "@/gs2/core/model";
import { Gs2AuthRestClient } from "@/gs2/auth";
import { LoginRequest } from "@/gs2/auth/request";
import { LoginResult } from "@/gs2/auth/result";
import { LoginBySignatureRequest } from "@/gs2/auth/request";
import { LoginBySignatureResult } from "@/gs2/auth/result";

export class Gs2Auth {
    session: Gs2RestSession;
    client: Gs2AuthRestClient;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2AuthRestClient (
            session
        );
    }

    public async login(
        request: LoginRequest
    ): Promise<LoginResult> {
        let r: LoginResult = await this.client.login(
            request
        );
        return r;
    }

    public async loginBySignature(
        request: LoginBySignatureRequest
    ): Promise<LoginBySignatureResult> {
        let r: LoginBySignatureResult = await this.client.loginBySignature(
            request
        );
        return r;
    }
}
