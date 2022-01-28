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

import { Stamina } from "@/gs2/stamina/model";

export class StaminaDomainCache {

    private readonly items: Map<String, Stamina>;

    public constructor() {
        this.items = new Map<String, Stamina>();
    }

    public update(
        item: Stamina
    ): void {
        let keys: string = [
            item.getStaminaName()!.toString()
        ].join(":");
        this.items.set(keys, item);
    }

    public get(
        staminaName: string
    ): Stamina|null {
        let keys: string = [
            staminaName.toString()
        ].join(":");
        let result = this.items.get(keys);
        if (result === undefined) {
            return null;
        }
        return result!;
    }

    public delete(
        item: Stamina
    ): void {
        let keys: string = [
            item.getStaminaName()!.toString()
        ].join(":");
        this.items.delete(keys);
    }
}
