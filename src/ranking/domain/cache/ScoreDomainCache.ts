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

import { Score } from "@/gs2/ranking/model";

export class ScoreDomainCache {

    private readonly items: Map<String, Score>;

    public constructor() {
        this.items = new Map<String, Score>();
    }

    public update(
        item: Score
    ): void {
        let keys: string = [
            item.getCategoryName()!.toString(),
            item.getScorerUserId()!.toString(),
            item.getUniqueId()!.toString()
        ].join(":");
        this.items.set(keys, item);
    }

    public get(
        categoryName: string,
        scorerUserId: string,
        uniqueId: string
    ): Score|null {
        let keys: string = [
            categoryName.toString(),
            scorerUserId.toString(),
            uniqueId.toString()
        ].join(":");
        let result = this.items.get(keys);
        if (result === undefined) {
            return null;
        }
        return result!;
    }

    public delete(
        item: Score
    ): void {
        let keys: string = [
            item.getCategoryName()!.toString(),
            item.getScorerUserId()!.toString(),
            item.getUniqueId()!.toString()
        ].join(":");
        this.items.delete(keys);
    }
}
