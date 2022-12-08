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

export default class Chart implements IModel {
    private timestamp: number|null = null;
    private value: number|null = null;
    private groupBys: string[]|null = null;
    public getTimestamp(): number|null {
        return this.timestamp;
    }
    public setTimestamp(timestamp: number|null) {
        this.timestamp = timestamp;
        return this;
    }
    public withTimestamp(timestamp: number|null): this {
        this.timestamp = timestamp;
        return this;
    }
    public getValue(): number|null {
        return this.value;
    }
    public setValue(value: number|null) {
        this.value = value;
        return this;
    }
    public withValue(value: number|null): this {
        this.value = value;
        return this;
    }
    public getGroupBys(): string[]|null {
        return this.groupBys;
    }
    public setGroupBys(groupBys: string[]|null) {
        this.groupBys = groupBys;
        return this;
    }
    public withGroupBys(groupBys: string[]|null): this {
        this.groupBys = groupBys;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Chart|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Chart()
            .withTimestamp(data["timestamp"])
            .withValue(data["value"])
            .withGroupBys(data.groupBys ?
                data.groupBys.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "timestamp": this.getTimestamp(),
            "value": this.getValue(),
            "groupBys": this.getGroupBys() ?
                this.getGroupBys()!.map((item: string) => {
                    return item;
                }
            ) : [],
        };
    }
}
