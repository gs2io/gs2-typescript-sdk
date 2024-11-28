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

export default class BoxItem implements IModel {
    private prizeId: string|null = null;
    private acquireActions: Gs2Lottery.AcquireAction[]|null = null;
    private remaining: number|null = null;
    private initial: number|null = null;
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
    public getAcquireActions(): Gs2Lottery.AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: Gs2Lottery.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: Gs2Lottery.AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }
    public getRemaining(): number|null {
        return this.remaining;
    }
    public setRemaining(remaining: number|null) {
        this.remaining = remaining;
        return this;
    }
    public withRemaining(remaining: number|null): this {
        this.remaining = remaining;
        return this;
    }
    public getInitial(): number|null {
        return this.initial;
    }
    public setInitial(initial: number|null) {
        this.initial = initial;
        return this;
    }
    public withInitial(initial: number|null): this {
        this.initial = initial;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BoxItem|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BoxItem()
            .withPrizeId(data["prizeId"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Lottery.AcquireAction.fromDict(item);
                }
            ) : null)
            .withRemaining(data["remaining"])
            .withInitial(data["initial"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "prizeId": this.getPrizeId(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Lottery.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "remaining": this.getRemaining(),
            "initial": this.getInitial(),
        };
    }
}
