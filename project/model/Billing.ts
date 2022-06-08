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
const grnFormat: string = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:billing:{year}:{month}";

export default class Billing implements IModel {
    private billingId: string|null = null;
    private projectName: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private region: string|null = null;
    private service: string|null = null;
    private activityType: string|null = null;
    private unit: number|null = null;
    private unitName: string|null = null;
    private price: number|null = null;
    private currency: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getAccountName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getProjectName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getAccountName(grn) == null || this.getAccountName(grn) === '') {
            return false;
        }
        if (this.getProjectName(grn) == null || this.getProjectName(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        accountName: string|null,
        projectName: string|null,
        year: string|null,
        month: string|null,
    ): string|null {
        return grnFormat
            .replace('{accountName}', accountName ?? '')
            .replace('{projectName}', projectName ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '');
    }
    public getBillingId(): string|null {
        return this.billingId;
    }
    public setBillingId(billingId: string|null) {
        this.billingId = billingId;
        return this;
    }
    public withBillingId(billingId: string|null): this {
        this.billingId = billingId;
        return this;
    }
    public getProjectName(): string|null {
        return this.projectName;
    }
    public setProjectName(projectName: string|null) {
        this.projectName = projectName;
        return this;
    }
    public withProjectName(projectName: string|null): this {
        this.projectName = projectName;
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
    public getRegion(): string|null {
        return this.region;
    }
    public setRegion(region: string|null) {
        this.region = region;
        return this;
    }
    public withRegion(region: string|null): this {
        this.region = region;
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
    public getUnit(): number|null {
        return this.unit;
    }
    public setUnit(unit: number|null) {
        this.unit = unit;
        return this;
    }
    public withUnit(unit: number|null): this {
        this.unit = unit;
        return this;
    }
    public getUnitName(): string|null {
        return this.unitName;
    }
    public setUnitName(unitName: string|null) {
        this.unitName = unitName;
        return this;
    }
    public withUnitName(unitName: string|null): this {
        this.unitName = unitName;
        return this;
    }
    public getPrice(): number|null {
        return this.price;
    }
    public setPrice(price: number|null) {
        this.price = price;
        return this;
    }
    public withPrice(price: number|null): this {
        this.price = price;
        return this;
    }
    public getCurrency(): string|null {
        return this.currency;
    }
    public setCurrency(currency: string|null) {
        this.currency = currency;
        return this;
    }
    public withCurrency(currency: string|null): this {
        this.currency = currency;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Billing|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Billing()
            .withBillingId(data["billingId"])
            .withProjectName(data["projectName"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withRegion(data["region"])
            .withService(data["service"])
            .withActivityType(data["activityType"])
            .withUnit(data["unit"])
            .withUnitName(data["unitName"])
            .withPrice(data["price"])
            .withCurrency(data["currency"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "billingId": this.getBillingId(),
            "projectName": this.getProjectName(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "region": this.getRegion(),
            "service": this.getService(),
            "activityType": this.getActivityType(),
            "unit": this.getUnit(),
            "unitName": this.getUnitName(),
            "price": this.getPrice(),
            "currency": this.getCurrency(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
