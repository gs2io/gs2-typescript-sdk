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

export default class CounterScopeModel implements IModel {
    private resetType: string|null = null;
    private resetDayOfMonth: number|null = null;
    private resetDayOfWeek: string|null = null;
    private resetHour: number|null = null;

    public getResetType(): string|null {
        return this.resetType;
    }

    public setResetType(resetType: string|null) {
        this.resetType = resetType;
        return this;
    }

    public withResetType(resetType: string|null): this {
        this.resetType = resetType;
        return this;
    }

    public getResetDayOfMonth(): number|null {
        return this.resetDayOfMonth;
    }

    public setResetDayOfMonth(resetDayOfMonth: number|null) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    }

    public withResetDayOfMonth(resetDayOfMonth: number|null): this {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    }

    public getResetDayOfWeek(): string|null {
        return this.resetDayOfWeek;
    }

    public setResetDayOfWeek(resetDayOfWeek: string|null) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    }

    public withResetDayOfWeek(resetDayOfWeek: string|null): this {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    }

    public getResetHour(): number|null {
        return this.resetHour;
    }

    public setResetHour(resetHour: number|null) {
        this.resetHour = resetHour;
        return this;
    }

    public withResetHour(resetHour: number|null): this {
        this.resetHour = resetHour;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CounterScopeModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterScopeModel()
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
        };
    }
}
