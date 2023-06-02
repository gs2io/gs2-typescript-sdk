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

export default class GeneralDauWauMauHistory implements IModel {
    private date: string|null = null;
    private dau: number|null = null;
    private wauLast7Days: number|null = null;
    private wauTargetWeekSunday: number|null = null;
    private wauTargetWeekMonday: number|null = null;
    private mauLast30Days: number|null = null;
    private mauTargetMonth: number|null = null;
    public getDate(): string|null {
        return this.date;
    }
    public setDate(date: string|null) {
        this.date = date;
        return this;
    }
    public withDate(date: string|null): this {
        this.date = date;
        return this;
    }
    public getDau(): number|null {
        return this.dau;
    }
    public setDau(dau: number|null) {
        this.dau = dau;
        return this;
    }
    public withDau(dau: number|null): this {
        this.dau = dau;
        return this;
    }
    public getWauLast7Days(): number|null {
        return this.wauLast7Days;
    }
    public setWauLast7Days(wauLast7Days: number|null) {
        this.wauLast7Days = wauLast7Days;
        return this;
    }
    public withWauLast7Days(wauLast7Days: number|null): this {
        this.wauLast7Days = wauLast7Days;
        return this;
    }
    public getWauTargetWeekSunday(): number|null {
        return this.wauTargetWeekSunday;
    }
    public setWauTargetWeekSunday(wauTargetWeekSunday: number|null) {
        this.wauTargetWeekSunday = wauTargetWeekSunday;
        return this;
    }
    public withWauTargetWeekSunday(wauTargetWeekSunday: number|null): this {
        this.wauTargetWeekSunday = wauTargetWeekSunday;
        return this;
    }
    public getWauTargetWeekMonday(): number|null {
        return this.wauTargetWeekMonday;
    }
    public setWauTargetWeekMonday(wauTargetWeekMonday: number|null) {
        this.wauTargetWeekMonday = wauTargetWeekMonday;
        return this;
    }
    public withWauTargetWeekMonday(wauTargetWeekMonday: number|null): this {
        this.wauTargetWeekMonday = wauTargetWeekMonday;
        return this;
    }
    public getMauLast30Days(): number|null {
        return this.mauLast30Days;
    }
    public setMauLast30Days(mauLast30Days: number|null) {
        this.mauLast30Days = mauLast30Days;
        return this;
    }
    public withMauLast30Days(mauLast30Days: number|null): this {
        this.mauLast30Days = mauLast30Days;
        return this;
    }
    public getMauTargetMonth(): number|null {
        return this.mauTargetMonth;
    }
    public setMauTargetMonth(mauTargetMonth: number|null) {
        this.mauTargetMonth = mauTargetMonth;
        return this;
    }
    public withMauTargetMonth(mauTargetMonth: number|null): this {
        this.mauTargetMonth = mauTargetMonth;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GeneralDauWauMauHistory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralDauWauMauHistory()
            .withDate(data["date"])
            .withDau(data["dau"])
            .withWauLast7Days(data["wauLast7Days"])
            .withWauTargetWeekSunday(data["wauTargetWeekSunday"])
            .withWauTargetWeekMonday(data["wauTargetWeekMonday"])
            .withMauLast30Days(data["mauLast30Days"])
            .withMauTargetMonth(data["mauTargetMonth"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "date": this.getDate(),
            "dau": this.getDau(),
            "wauLast7Days": this.getWauLast7Days(),
            "wauTargetWeekSunday": this.getWauTargetWeekSunday(),
            "wauTargetWeekMonday": this.getWauTargetWeekMonday(),
            "mauLast30Days": this.getMauLast30Days(),
            "mauTargetMonth": this.getMauTargetMonth(),
        };
    }
}
