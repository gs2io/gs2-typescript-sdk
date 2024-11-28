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

import * as Gs2Ranking from '../../ranking/model'

export default class FixedTiming implements IModel {
    private hour: number|null = null;
    private minute: number|null = null;
    public getHour(): number|null {
        return this.hour;
    }
    public setHour(hour: number|null) {
        this.hour = hour;
        return this;
    }
    public withHour(hour: number|null): this {
        this.hour = hour;
        return this;
    }
    public getMinute(): number|null {
        return this.minute;
    }
    public setMinute(minute: number|null) {
        this.minute = minute;
        return this;
    }
    public withMinute(minute: number|null): this {
        this.minute = minute;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FixedTiming|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FixedTiming()
            .withHour(data["hour"])
            .withMinute(data["minute"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "hour": this.getHour(),
            "minute": this.getMinute(),
        };
    }
}
