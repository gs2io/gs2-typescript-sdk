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

import * as Gs2Lottery from '../../lottery/model'
import AcquireAction from './AcquireAction';
import BoxItem from './BoxItem';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:user:{userId}:box:items:{prizeTableName}";

export default class BoxItems implements IModel {
    private boxId: string|null = null;
    private prizeTableName: string|null = null;
    private userId: string|null = null;
    private items: Gs2Lottery.BoxItem[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{prizeTableName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
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
            .replace('{userId}', '.*')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
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
        userId: string|null,
        prizeTableName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{prizeTableName}', prizeTableName ?? '');
    }
    public getBoxId(): string|null {
        return this.boxId;
    }
    public setBoxId(boxId: string|null) {
        this.boxId = boxId;
        return this;
    }
    public withBoxId(boxId: string|null): this {
        this.boxId = boxId;
        return this;
    }
    public getPrizeTableName(): string|null {
        return this.prizeTableName;
    }
    public setPrizeTableName(prizeTableName: string|null) {
        this.prizeTableName = prizeTableName;
        return this;
    }
    public withPrizeTableName(prizeTableName: string|null): this {
        this.prizeTableName = prizeTableName;
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
    public getItems(): Gs2Lottery.BoxItem[]|null {
        return this.items;
    }
    public setItems(items: Gs2Lottery.BoxItem[]|null) {
        this.items = items;
        return this;
    }
    public withItems(items: Gs2Lottery.BoxItem[]|null): this {
        this.items = items;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BoxItems|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BoxItems()
            .withBoxId(data["boxId"])
            .withPrizeTableName(data["prizeTableName"])
            .withUserId(data["userId"])
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Lottery.BoxItem.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "boxId": this.getBoxId(),
            "prizeTableName": this.getPrizeTableName(),
            "userId": this.getUserId(),
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Lottery.BoxItem) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
