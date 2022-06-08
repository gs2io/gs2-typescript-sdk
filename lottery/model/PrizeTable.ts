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
import AcquireAction from './AcquireAction';
import Prize from './Prize';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:table:{prizeTableName}";

export default class PrizeTable implements IModel {
    private prizeTableId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private prizes: Prize[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{prizeTableName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        prizeTableName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{prizeTableName}', prizeTableName ?? '');
    }
    public getPrizeTableId(): string|null {
        return this.prizeTableId;
    }
    public setPrizeTableId(prizeTableId: string|null) {
        this.prizeTableId = prizeTableId;
        return this;
    }
    public withPrizeTableId(prizeTableId: string|null): this {
        this.prizeTableId = prizeTableId;
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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getPrizes(): Prize[]|null {
        return this.prizes;
    }
    public setPrizes(prizes: Prize[]|null) {
        this.prizes = prizes;
        return this;
    }
    public withPrizes(prizes: Prize[]|null): this {
        this.prizes = prizes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PrizeTable|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PrizeTable()
            .withPrizeTableId(data["prizeTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withPrizes(data.prizes ?
                data.prizes.map((item: {[key: string]: any}) => {
                    return Prize.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "prizeTableId": this.getPrizeTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "prizes": this.getPrizes() ?
                this.getPrizes()!.map((item: Prize) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
