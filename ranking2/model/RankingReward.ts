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

export default class RankingReward implements IModel {
    private thresholdRank: number|null = null;
    private metadata: string|null = null;
    private acquireActions: AcquireAction[]|null = null;
    public getThresholdRank(): number|null {
        return this.thresholdRank;
    }
    public setThresholdRank(thresholdRank: number|null) {
        this.thresholdRank = thresholdRank;
        return this;
    }
    public withThresholdRank(thresholdRank: number|null): this {
        this.thresholdRank = thresholdRank;
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
    public getAcquireActions(): AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RankingReward|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingReward()
            .withThresholdRank(data["thresholdRank"])
            .withMetadata(data["metadata"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "thresholdRank": this.getThresholdRank(),
            "metadata": this.getMetadata(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
