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

import { Progress } from "@/gs2/enhance/model";

export class ProgressDomainCache {

    private readonly items: Map<String, Progress>;

    public constructor() {
        this.items = new Map<String, Progress>();
    }

    public update(
        item: Progress
    ): void {
        let keys: string = [
            item.getProgressId()!.toString()
        ].join(":");
        this.items.set(keys, item);
    }

    public get(
        progressId: string
    ): Progress|null {
        let keys: string = [
            progressId.toString()
        ].join(":");
        let result = this.items.get(keys);
        if (result === undefined) {
            return null;
        }
        return result!;
    }

    public delete(
        item: Progress
    ): void {
        let keys: string = [
            item.getProgressId()!.toString()
        ].join(":");
        this.items.delete(keys);
    }
}
