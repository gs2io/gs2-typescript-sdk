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

import * as Gs2Watch from '../../watch/model'
import EngagementHistory from './EngagementHistory';
import EngagementAverage from './EngagementAverage';

export default class Engagements implements IModel {
    private history: Gs2Watch.EngagementHistory[]|null = null;
    private avg: Gs2Watch.EngagementAverage|null = null;
    public getHistory(): Gs2Watch.EngagementHistory[]|null {
        return this.history;
    }
    public setHistory(history: Gs2Watch.EngagementHistory[]|null) {
        this.history = history;
        return this;
    }
    public withHistory(history: Gs2Watch.EngagementHistory[]|null): this {
        this.history = history;
        return this;
    }
    public getAvg(): Gs2Watch.EngagementAverage|null {
        return this.avg;
    }
    public setAvg(avg: Gs2Watch.EngagementAverage|null) {
        this.avg = avg;
        return this;
    }
    public withAvg(avg: Gs2Watch.EngagementAverage|null): this {
        this.avg = avg;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Engagements|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Engagements()
            .withHistory(data.history ?
                data.history.map((item: {[key: string]: any}) => {
                    return Gs2Watch.EngagementHistory.fromDict(item);
                }
            ) : null)
            .withAvg(Gs2Watch.EngagementAverage.fromDict(data["avg"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "history": this.getHistory() ?
                this.getHistory()!.map((item: Gs2Watch.EngagementHistory) => {
                    return item.toDict();
                }
            ) : null,
            "avg": this.getAvg()?.toDict(),
        };
    }
}
