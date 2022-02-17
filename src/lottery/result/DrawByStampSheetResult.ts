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

import IResult from '../../core/interface/IResult';

import * as Gs2Lottery from '../model'

export default class DrawByStampSheetResult implements IResult {
    private items: Gs2Lottery.DrawnPrize[]|null = null;
    private stampSheet: string|null = null;
    private stampSheetEncryptionKeyId: string|null = null;
    private boxItems: Gs2Lottery.BoxItems|null = null;

    public getItems(): Gs2Lottery.DrawnPrize[]|null {
        return this.items;
    }

    public setItems(items: Gs2Lottery.DrawnPrize[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Lottery.DrawnPrize[]|null): this {
        this.items = items;
        return this;
    }

    public getStampSheet(): string|null {
        return this.stampSheet;
    }

    public setStampSheet(stampSheet: string|null) {
        this.stampSheet = stampSheet;
        return this;
    }

    public withStampSheet(stampSheet: string|null): this {
        this.stampSheet = stampSheet;
        return this;
    }

    public getStampSheetEncryptionKeyId(): string|null {
        return this.stampSheetEncryptionKeyId;
    }

    public setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string|null) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    }

    public withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string|null): this {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    }

    public getBoxItems(): Gs2Lottery.BoxItems|null {
        return this.boxItems;
    }

    public setBoxItems(boxItems: Gs2Lottery.BoxItems|null) {
        this.boxItems = boxItems;
        return this;
    }

    public withBoxItems(boxItems: Gs2Lottery.BoxItems|null): this {
        this.boxItems = boxItems;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DrawByStampSheetResult {
        return new DrawByStampSheetResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Lottery.DrawnPrize.fromDict(item);
                }
            ) : [])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withBoxItems(Gs2Lottery.BoxItems.fromDict(data["boxItems"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Lottery.DrawnPrize) => {
                    return item.toDict();
                }
            ) : [],
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "boxItems": this.getBoxItems()?.toDict(),
        };
    }
}
