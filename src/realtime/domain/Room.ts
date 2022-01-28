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
import { Gs2RealtimeRestClient } from "@/gs2/realtime";
import { NamespaceDomainCache } from "@/gs2/realtime/domain/cache/NamespaceDomainCache";
import { RoomDomainCache } from "@/gs2/realtime/domain/cache/RoomDomainCache";
import { GetRoomRequest } from "@/gs2/realtime/request";
import { GetRoomResult } from "@/gs2/realtime/result";
import { DeleteRoomRequest } from "@/gs2/realtime/request";
import { DeleteRoomResult } from "@/gs2/realtime/result";
import { AccessToken } from "@/gs2/auth/model";

export class RoomDomain {
    session: Gs2RestSession;
    client: Gs2RealtimeRestClient;
    roomCache: RoomDomainCache;
    namespaceName: string;
    roomName: string;

    public constructor(
        session: Gs2RestSession,
        roomCache: RoomDomainCache,
        namespaceName: string,
        roomName: string
    ) {
        this.session = session;
        this.client = new Gs2RealtimeRestClient(
            session
        );
        this.roomCache = roomCache;
        this.namespaceName = namespaceName;
        this.roomName = roomName;
    }

    public async load(
        request: GetRoomRequest
    ): Promise<GetRoomResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRoomName(this.roomName);
        let r: GetRoomResult = await this.client.getRoom(
            request
        );
        this.roomCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteRoomRequest
    ): Promise<DeleteRoomResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRoomName(this.roomName);
        let r: DeleteRoomResult = await this.client.deleteRoom(
            request
        );
        this.roomCache.delete(r.getItem()!);
        return r;
    }

}
