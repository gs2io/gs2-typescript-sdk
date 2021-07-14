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

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Formation from '../model'

export class AcquireActionToFormPropertiesByStampSheetResult implements IResult {
    private item: Gs2Formation.Form|null = null;
    private mold: Gs2Formation.Mold|null = null;
    private stampSheet: string|null = null;
    private stampSheetEncryptionKeyId: string|null = null;

    public getItem(): Gs2Formation.Form|null {
        return this.item;
    }

    public setItem(item: Gs2Formation.Form|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Formation.Form|null): this {
        this.item = item;
        return this;
    }

    public getMold(): Gs2Formation.Mold|null {
        return this.mold;
    }

    public setMold(mold: Gs2Formation.Mold|null) {
        this.mold = mold;
        return this;
    }

    public withMold(mold: Gs2Formation.Mold|null): this {
        this.mold = mold;
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

    public static fromDict(data: {[key: string]: any}): AcquireActionToFormPropertiesByStampSheetResult {
        return new AcquireActionToFormPropertiesByStampSheetResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "mold": this.getMold()?.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
        };
    }
}
