/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '@/gs2/core/interface/IModel';

export class Entry implements IModel {
    private entryId: string|null = null;
    private userId: string|null = null;
    private name: string|null = null;
    private acquiredAt: number|null = null;

    public getEntryId(): string|null {
        return this.entryId;
    }

    public setEntryId(entryId: string|null) {
        this.entryId = entryId;
        return this;
    }

    public withEntryId(entryId: string|null): this {
        this.entryId = entryId;
        return this;
    }

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getAcquiredAt(): number|null {
        return this.acquiredAt;
    }

    public setAcquiredAt(acquiredAt: number|null) {
        this.acquiredAt = acquiredAt;
        return this;
    }

    public withAcquiredAt(acquiredAt: number|null): this {
        this.acquiredAt = acquiredAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Entry|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Entry()
            .withEntryId(data["entryId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withAcquiredAt(data["acquiredAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "entryId": this.getEntryId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "acquiredAt": this.getAcquiredAt(),
        };
    }
}
