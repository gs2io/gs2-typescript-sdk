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

import { QuestModel } from "@/gs2/quest/model";

export class QuestModelDomainCache {

    private readonly items: Map<String, QuestModel>;

    public constructor() {
        this.items = new Map<String, QuestModel>();
    }

    public update(
        item: QuestModel
    ): void {
        let keys: string = [
            item.getName()!.toString()
        ].join(":");
        this.items.set(keys, item);
    }

    public get(
        questName: string
    ): QuestModel|null {
        let keys: string = [
            questName.toString()
        ].join(":");
        let result = this.items.get(keys);
        if (result === undefined) {
            return null;
        }
        return result!;
    }

    public delete(
        item: QuestModel
    ): void {
        let keys: string = [
            item.getName()!.toString()
        ].join(":");
        this.items.delete(keys);
    }
}
