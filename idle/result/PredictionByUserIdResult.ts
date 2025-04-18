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
import * as Gs2Idle from '../model'

export default class PredictionByUserIdResult implements IResult {
    private items: Gs2Idle.AcquireAction[]|null = null;
    private status: Gs2Idle.Status|null = null;

    public getItems(): Gs2Idle.AcquireAction[]|null {
        return this.items;
    }

    public setItems(items: Gs2Idle.AcquireAction[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Idle.AcquireAction[]|null): this {
        this.items = items;
        return this;
    }

    public getStatus(): Gs2Idle.Status|null {
        return this.status;
    }

    public setStatus(status: Gs2Idle.Status|null) {
        this.status = status;
        return this;
    }

    public withStatus(status: Gs2Idle.Status|null): this {
        this.status = status;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PredictionByUserIdResult {
        return new PredictionByUserIdResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Idle.AcquireAction.fromDict(item);
                }
            ) : null)
            .withStatus(Gs2Idle.Status.fromDict(data["status"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Idle.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "status": this.getStatus()?.toDict(),
        };
    }
}
