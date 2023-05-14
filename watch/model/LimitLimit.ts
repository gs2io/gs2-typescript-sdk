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
import LimitCounterDistributionUsage from './LimitCounterDistributionUsage';
import LimitCounterDistribution from './LimitCounterDistribution';
import LimitCounter from './LimitCounter';

export default class LimitLimit implements IModel {
    private limitName: string|null = null;
    private counter: LimitCounter[]|null = null;
    public getLimitName(): string|null {
        return this.limitName;
    }
    public setLimitName(limitName: string|null) {
        this.limitName = limitName;
        return this;
    }
    public withLimitName(limitName: string|null): this {
        this.limitName = limitName;
        return this;
    }
    public getCounter(): LimitCounter[]|null {
        return this.counter;
    }
    public setCounter(counter: LimitCounter[]|null) {
        this.counter = counter;
        return this;
    }
    public withCounter(counter: LimitCounter[]|null): this {
        this.counter = counter;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitLimit|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimit()
            .withLimitName(data["limitName"])
            .withCounter(data.counter ?
                data.counter.map((item: {[key: string]: any}) => {
                    return LimitCounter.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "limitName": this.getLimitName(),
            "counter": this.getCounter() ?
                this.getCounter()!.map((item: LimitCounter) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
