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

export class TimeSpan implements IModel {
    private days: number|null = null;
    private hours: number|null = null;
    private minutes: number|null = null;

    public getDays(): number|null {
        return this.days;
    }

    public setDays(days: number|null) {
        this.days = days;
        return this;
    }

    public withDays(days: number|null): this {
        this.days = days;
        return this;
    }

    public getHours(): number|null {
        return this.hours;
    }

    public setHours(hours: number|null) {
        this.hours = hours;
        return this;
    }

    public withHours(hours: number|null): this {
        this.hours = hours;
        return this;
    }

    public getMinutes(): number|null {
        return this.minutes;
    }

    public setMinutes(minutes: number|null) {
        this.minutes = minutes;
        return this;
    }

    public withMinutes(minutes: number|null): this {
        this.minutes = minutes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TimeSpan|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TimeSpan()
            .withDays(data["days"])
            .withHours(data["hours"])
            .withMinutes(data["minutes"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "days": this.getDays(),
            "hours": this.getHours(),
            "minutes": this.getMinutes(),
        };
    }
}
