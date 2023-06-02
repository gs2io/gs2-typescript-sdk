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
import ChurnRateHistory from './ChurnRateHistory';
import ChurnRateAverage from './ChurnRateAverage';

export default class ChurnRateAggregate implements IModel {
    private history: ChurnRateHistory[]|null = null;
    private avg: ChurnRateAverage|null = null;
    public getHistory(): ChurnRateHistory[]|null {
        return this.history;
    }
    public setHistory(history: ChurnRateHistory[]|null) {
        this.history = history;
        return this;
    }
    public withHistory(history: ChurnRateHistory[]|null): this {
        this.history = history;
        return this;
    }
    public getAvg(): ChurnRateAverage|null {
        return this.avg;
    }
    public setAvg(avg: ChurnRateAverage|null) {
        this.avg = avg;
        return this;
    }
    public withAvg(avg: ChurnRateAverage|null): this {
        this.avg = avg;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChurnRateAggregate|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChurnRateAggregate()
            .withHistory(data.history ?
                data.history.map((item: {[key: string]: any}) => {
                    return ChurnRateHistory.fromDict(item);
                }
            ) : [])
            .withAvg(ChurnRateAverage.fromDict(data["avg"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "history": this.getHistory() ?
                this.getHistory()!.map((item: ChurnRateHistory) => {
                    return item.toDict();
                }
            ) : [],
            "avg": this.getAvg()?.toDict(),
        };
    }
}
