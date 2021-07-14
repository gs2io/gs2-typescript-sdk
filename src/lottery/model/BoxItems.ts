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
import { AcquireAction } from './AcquireAction';
import { BoxItem } from './BoxItem';

export class BoxItems implements IModel {
    private boxId: string|null = null;
    private prizeTableName: string|null = null;
    private userId: string|null = null;
    private items: BoxItem[]|null = null;

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

    public getItems(): BoxItem[]|null {
        return this.items;
    }

    public setItems(items: BoxItem[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: BoxItem[]|null): this {
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
                    return BoxItem.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "boxId": this.getBoxId(),
            "prizeTableName": this.getPrizeTableName(),
            "userId": this.getUserId(),
            "items": this.getItems() ?
                this.getItems()!.map((item: BoxItem) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
