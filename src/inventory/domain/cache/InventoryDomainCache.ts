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

import { Inventory } from "@/gs2/inventory/model";

export class InventoryDomainCache {

    private readonly items: Map<String, Inventory>;

    public constructor() {
        this.items = new Map<String, Inventory>();
    }

    public update(
        item: Inventory
    ): void {
        let keys: string = [
            item.getInventoryName()!.toString()
        ].join(":");
        this.items.set(keys, item);
    }

    public get(
        inventoryName: string
    ): Inventory|null {
        let keys: string = [
            inventoryName.toString()
        ].join(":");
        let result = this.items.get(keys);
        if (result === undefined) {
            return null;
        }
        return result!;
    }

    public delete(
        item: Inventory
    ): void {
        let keys: string = [
            item.getInventoryName()!.toString()
        ].join(":");
        this.items.delete(keys);
    }
}
