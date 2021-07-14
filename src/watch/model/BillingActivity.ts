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

import IModel from '@/gs2/core/interface/IModel';

export class BillingActivity implements IModel {
    private billingActivityId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private service: string|null = null;
    private activityType: string|null = null;
    private value: number|null = null;

    public getBillingActivityId(): string|null {
        return this.billingActivityId;
    }

    public setBillingActivityId(billingActivityId: string|null) {
        this.billingActivityId = billingActivityId;
        return this;
    }

    public withBillingActivityId(billingActivityId: string|null): this {
        this.billingActivityId = billingActivityId;
        return this;
    }

    public getYear(): number|null {
        return this.year;
    }

    public setYear(year: number|null) {
        this.year = year;
        return this;
    }

    public withYear(year: number|null): this {
        this.year = year;
        return this;
    }

    public getMonth(): number|null {
        return this.month;
    }

    public setMonth(month: number|null) {
        this.month = month;
        return this;
    }

    public withMonth(month: number|null): this {
        this.month = month;
        return this;
    }

    public getService(): string|null {
        return this.service;
    }

    public setService(service: string|null) {
        this.service = service;
        return this;
    }

    public withService(service: string|null): this {
        this.service = service;
        return this;
    }

    public getActivityType(): string|null {
        return this.activityType;
    }

    public setActivityType(activityType: string|null) {
        this.activityType = activityType;
        return this;
    }

    public withActivityType(activityType: string|null): this {
        this.activityType = activityType;
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

    public static fromDict(data: {[key: string]: any}): BillingActivity|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BillingActivity()
            .withBillingActivityId(data["billingActivityId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withService(data["service"])
            .withActivityType(data["activityType"])
            .withValue(data["value"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "billingActivityId": this.getBillingActivityId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "service": this.getService(),
            "activityType": this.getActivityType(),
            "value": this.getValue(),
        };
    }
}
