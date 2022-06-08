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

export default class Contents implements IModel {
    private metadata: string|null = null;
    private completeAcquireActions: AcquireAction[]|null = null;
    private weight: number|null = null;
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
    public getCompleteAcquireActions(): AcquireAction[]|null {
        return this.completeAcquireActions;
    }
    public setCompleteAcquireActions(completeAcquireActions: AcquireAction[]|null) {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    }
    public withCompleteAcquireActions(completeAcquireActions: AcquireAction[]|null): this {
        this.completeAcquireActions = completeAcquireActions;
        return this;
    }
    public getWeight(): number|null {
        return this.weight;
    }
    public setWeight(weight: number|null) {
        this.weight = weight;
        return this;
    }
    public withWeight(weight: number|null): this {
        this.weight = weight;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Contents|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Contents()
            .withMetadata(data["metadata"])
            .withCompleteAcquireActions(data.completeAcquireActions ?
                data.completeAcquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withWeight(data["weight"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "metadata": this.getMetadata(),
            "completeAcquireActions": this.getCompleteAcquireActions() ?
                this.getCompleteAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "weight": this.getWeight(),
        };
    }
}
