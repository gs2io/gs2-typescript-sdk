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

export default class RepeatSetting implements IModel {
    private repeatType: string|null = null;
    private beginDayOfMonth: number|null = null;
    private endDayOfMonth: number|null = null;
    private beginDayOfWeek: string|null = null;
    private endDayOfWeek: string|null = null;
    private beginHour: number|null = null;
    private endHour: number|null = null;
    public getRepeatType(): string|null {
        return this.repeatType;
    }
    public setRepeatType(repeatType: string|null) {
        this.repeatType = repeatType;
        return this;
    }
    public withRepeatType(repeatType: string|null): this {
        this.repeatType = repeatType;
        return this;
    }
    public getBeginDayOfMonth(): number|null {
        return this.beginDayOfMonth;
    }
    public setBeginDayOfMonth(beginDayOfMonth: number|null) {
        this.beginDayOfMonth = beginDayOfMonth;
        return this;
    }
    public withBeginDayOfMonth(beginDayOfMonth: number|null): this {
        this.beginDayOfMonth = beginDayOfMonth;
        return this;
    }
    public getEndDayOfMonth(): number|null {
        return this.endDayOfMonth;
    }
    public setEndDayOfMonth(endDayOfMonth: number|null) {
        this.endDayOfMonth = endDayOfMonth;
        return this;
    }
    public withEndDayOfMonth(endDayOfMonth: number|null): this {
        this.endDayOfMonth = endDayOfMonth;
        return this;
    }
    public getBeginDayOfWeek(): string|null {
        return this.beginDayOfWeek;
    }
    public setBeginDayOfWeek(beginDayOfWeek: string|null) {
        this.beginDayOfWeek = beginDayOfWeek;
        return this;
    }
    public withBeginDayOfWeek(beginDayOfWeek: string|null): this {
        this.beginDayOfWeek = beginDayOfWeek;
        return this;
    }
    public getEndDayOfWeek(): string|null {
        return this.endDayOfWeek;
    }
    public setEndDayOfWeek(endDayOfWeek: string|null) {
        this.endDayOfWeek = endDayOfWeek;
        return this;
    }
    public withEndDayOfWeek(endDayOfWeek: string|null): this {
        this.endDayOfWeek = endDayOfWeek;
        return this;
    }
    public getBeginHour(): number|null {
        return this.beginHour;
    }
    public setBeginHour(beginHour: number|null) {
        this.beginHour = beginHour;
        return this;
    }
    public withBeginHour(beginHour: number|null): this {
        this.beginHour = beginHour;
        return this;
    }
    public getEndHour(): number|null {
        return this.endHour;
    }
    public setEndHour(endHour: number|null) {
        this.endHour = endHour;
        return this;
    }
    public withEndHour(endHour: number|null): this {
        this.endHour = endHour;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RepeatSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RepeatSetting()
            .withRepeatType(data["repeatType"])
            .withBeginDayOfMonth(data["beginDayOfMonth"])
            .withEndDayOfMonth(data["endDayOfMonth"])
            .withBeginDayOfWeek(data["beginDayOfWeek"])
            .withEndDayOfWeek(data["endDayOfWeek"])
            .withBeginHour(data["beginHour"])
            .withEndHour(data["endHour"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "repeatType": this.getRepeatType(),
            "beginDayOfMonth": this.getBeginDayOfMonth(),
            "endDayOfMonth": this.getEndDayOfMonth(),
            "beginDayOfWeek": this.getBeginDayOfWeek(),
            "endDayOfWeek": this.getEndDayOfWeek(),
            "beginHour": this.getBeginHour(),
            "endHour": this.getEndHour(),
        };
    }
}
