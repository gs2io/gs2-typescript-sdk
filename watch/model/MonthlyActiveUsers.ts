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

export default class MonthlyActiveUsers implements IModel {
    private last: number|null = null;
    private fromFirstDay: number|null = null;
    public getLast(): number|null {
        return this.last;
    }
    public setLast(last: number|null) {
        this.last = last;
        return this;
    }
    public withLast(last: number|null): this {
        this.last = last;
        return this;
    }
    public getFromFirstDay(): number|null {
        return this.fromFirstDay;
    }
    public setFromFirstDay(fromFirstDay: number|null) {
        this.fromFirstDay = fromFirstDay;
        return this;
    }
    public withFromFirstDay(fromFirstDay: number|null): this {
        this.fromFirstDay = fromFirstDay;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MonthlyActiveUsers|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MonthlyActiveUsers()
            .withLast(data["last"])
            .withFromFirstDay(data["fromFirstDay"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "last": this.getLast(),
            "fromFirstDay": this.getFromFirstDay(),
        };
    }
}
