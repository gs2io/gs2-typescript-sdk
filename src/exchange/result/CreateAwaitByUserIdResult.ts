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

import * as Gs2Exchange from '../model'

export class CreateAwaitByUserIdResult implements IResult {
    private item: Gs2Exchange.Await|null = null;
    private unlockAt: number|null = null;

    public getItem(): Gs2Exchange.Await|null {
        return this.item;
    }

    public setItem(item: Gs2Exchange.Await|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Exchange.Await|null): this {
        this.item = item;
        return this;
    }

    public getUnlockAt(): number|null {
        return this.unlockAt;
    }

    public setUnlockAt(unlockAt: number|null) {
        this.unlockAt = unlockAt;
        return this;
    }

    public withUnlockAt(unlockAt: number|null): this {
        this.unlockAt = unlockAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateAwaitByUserIdResult {
        return new CreateAwaitByUserIdResult()
            .withItem(Gs2Exchange.Await.fromDict(data["item"]))
            .withUnlockAt(data["unlockAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "unlockAt": this.getUnlockAt(),
        };
    }
}
