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

import IModel from '../../core/interface/IModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}:prize:{prizeId}";

export default class PrizeLimit implements IModel {
    private prizeLimitId: string|null = null;
    private prizeId: string|null = null;
    private drawnCount: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getPrizeTableName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '(.*)')
            .replace('{prizeId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getPrizeId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
            .replace('{prizeId}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getPrizeTableName(grn) == null || this.getPrizeTableName(grn) === '') {
            return false;
        }
        if (this.getPrizeId(grn) == null || this.getPrizeId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        prizeTableName: string|null,
        prizeId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{prizeTableName}', prizeTableName ?? '')
            .replace('{prizeId}', prizeId ?? '');
    }
    public getPrizeLimitId(): string|null {
        return this.prizeLimitId;
    }
    public setPrizeLimitId(prizeLimitId: string|null) {
        this.prizeLimitId = prizeLimitId;
        return this;
    }
    public withPrizeLimitId(prizeLimitId: string|null): this {
        this.prizeLimitId = prizeLimitId;
        return this;
    }
    public getPrizeId(): string|null {
        return this.prizeId;
    }
    public setPrizeId(prizeId: string|null) {
        this.prizeId = prizeId;
        return this;
    }
    public withPrizeId(prizeId: string|null): this {
        this.prizeId = prizeId;
        return this;
    }
    public getDrawnCount(): number|null {
        return this.drawnCount;
    }
    public setDrawnCount(drawnCount: number|null) {
        this.drawnCount = drawnCount;
        return this;
    }
    public withDrawnCount(drawnCount: number|null): this {
        this.drawnCount = drawnCount;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PrizeLimit|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PrizeLimit()
            .withPrizeLimitId(data["prizeLimitId"])
            .withPrizeId(data["prizeId"])
            .withDrawnCount(data["drawnCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "prizeLimitId": this.getPrizeLimitId(),
            "prizeId": this.getPrizeId(),
            "drawnCount": this.getDrawnCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
