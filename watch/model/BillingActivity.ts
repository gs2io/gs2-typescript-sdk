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

import * as Gs2Watch from '../../watch/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}";

export default class BillingActivity implements IModel {
    private billingActivityId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private service: string|null = null;
    private activityType: string|null = null;
    private value: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getService(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '(.*)')
            .replace('{activityType}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getActivityType(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getService(grn) == null || this.getService(grn) === '') {
            return false;
        }
        if (this.getActivityType(grn) == null || this.getActivityType(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        year: string|null,
        month: string|null,
        service: string|null,
        activityType: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{service}', service ?? '')
            .replace('{activityType}', activityType ?? '');
    }
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
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
            .withValue(data["value"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "billingActivityId": this.getBillingActivityId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "service": this.getService(),
            "activityType": this.getActivityType(),
            "value": this.getValue(),
            "revision": this.getRevision(),
        };
    }
}
