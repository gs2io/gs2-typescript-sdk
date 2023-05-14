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
import WeeklyActiveUsers from './WeeklyActiveUsers';
import MonthlyActiveUsers from './MonthlyActiveUsers';
import ReturningUserRatio from './ReturningUserRatio';
import FirstWeekLoginDays from './FirstWeekLoginDays';
import SessionDurationStatistics from './SessionDurationStatistics';
import SessionDurationDistribution from './SessionDurationDistribution';
import SessionDuration from './SessionDuration';

export default class GeneralMetrics implements IModel {
    private dau: number|null = null;
    private wau: WeeklyActiveUsers|null = null;
    private mau: MonthlyActiveUsers|null = null;
    private churnRate: number|null = null;
    private returningUserRatio: ReturningUserRatio|null = null;
    private firstWeekLoginDays: FirstWeekLoginDays|null = null;
    private sessionDuration: SessionDuration|null = null;
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
    public getWau(): WeeklyActiveUsers|null {
        return this.wau;
    }
    public setWau(wau: WeeklyActiveUsers|null) {
        this.wau = wau;
        return this;
    }
    public withWau(wau: WeeklyActiveUsers|null): this {
        this.wau = wau;
        return this;
    }
    public getMau(): MonthlyActiveUsers|null {
        return this.mau;
    }
    public setMau(mau: MonthlyActiveUsers|null) {
        this.mau = mau;
        return this;
    }
    public withMau(mau: MonthlyActiveUsers|null): this {
        this.mau = mau;
        return this;
    }
    public getChurnRate(): number|null {
        return this.churnRate;
    }
    public setChurnRate(churnRate: number|null) {
        this.churnRate = churnRate;
        return this;
    }
    public withChurnRate(churnRate: number|null): this {
        this.churnRate = churnRate;
        return this;
    }
    public getReturningUserRatio(): ReturningUserRatio|null {
        return this.returningUserRatio;
    }
    public setReturningUserRatio(returningUserRatio: ReturningUserRatio|null) {
        this.returningUserRatio = returningUserRatio;
        return this;
    }
    public withReturningUserRatio(returningUserRatio: ReturningUserRatio|null): this {
        this.returningUserRatio = returningUserRatio;
        return this;
    }
    public getFirstWeekLoginDays(): FirstWeekLoginDays|null {
        return this.firstWeekLoginDays;
    }
    public setFirstWeekLoginDays(firstWeekLoginDays: FirstWeekLoginDays|null) {
        this.firstWeekLoginDays = firstWeekLoginDays;
        return this;
    }
    public withFirstWeekLoginDays(firstWeekLoginDays: FirstWeekLoginDays|null): this {
        this.firstWeekLoginDays = firstWeekLoginDays;
        return this;
    }
    public getSessionDuration(): SessionDuration|null {
        return this.sessionDuration;
    }
    public setSessionDuration(sessionDuration: SessionDuration|null) {
        this.sessionDuration = sessionDuration;
        return this;
    }
    public withSessionDuration(sessionDuration: SessionDuration|null): this {
        this.sessionDuration = sessionDuration;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GeneralMetrics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralMetrics()
            .withDau(data["dau"])
            .withWau(WeeklyActiveUsers.fromDict(data["wau"]))
            .withMau(MonthlyActiveUsers.fromDict(data["mau"]))
            .withChurnRate(data["churnRate"])
            .withReturningUserRatio(ReturningUserRatio.fromDict(data["returningUserRatio"]))
            .withFirstWeekLoginDays(FirstWeekLoginDays.fromDict(data["firstWeekLoginDays"]))
            .withSessionDuration(SessionDuration.fromDict(data["sessionDuration"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "dau": this.getDau(),
            "wau": this.getWau()?.toDict(),
            "mau": this.getMau()?.toDict(),
            "churnRate": this.getChurnRate(),
            "returningUserRatio": this.getReturningUserRatio()?.toDict(),
            "firstWeekLoginDays": this.getFirstWeekLoginDays()?.toDict(),
            "sessionDuration": this.getSessionDuration()?.toDict(),
        };
    }
}
