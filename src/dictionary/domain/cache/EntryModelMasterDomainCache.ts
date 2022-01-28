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

import { EntryModelMaster } from "@/gs2/dictionary/model";

export class EntryModelMasterDomainCache {

    private readonly items: Map<String, EntryModelMaster>;

    public constructor() {
        this.items = new Map<String, EntryModelMaster>();
    }

    public update(
        item: EntryModelMaster
    ): void {
        let keys: string = [
            item.getName()!.toString()
        ].join(":");
        this.items.set(keys, item);
    }

    public get(
        entryName: string
    ): EntryModelMaster|null {
        let keys: string = [
            entryName.toString()
        ].join(":");
        let result = this.items.get(keys);
        if (result === undefined) {
            return null;
        }
        return result!;
    }

    public delete(
        item: EntryModelMaster
    ): void {
        let keys: string = [
            item.getName()!.toString()
        ].join(":");
        this.items.delete(keys);
    }
}
