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
const grnFormat: string = "grn:gs2:::gs2:account:{accountName}:billingMethod:{billingMethodName}";

export default class BillingMethod implements IModel {
    private billingMethodId: string|null = null;
    private accountName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private methodType: string|null = null;
    private cardSignatureName: string|null = null;
    private cardBrand: string|null = null;
    private cardLast4: string|null = null;
    private partnerId: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getAccountName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{billingMethodName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getBillingMethodName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{billingMethodName}', '(.*)')
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
        if (this.getBillingMethodName(grn) == null || this.getBillingMethodName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        accountName: string|null,
        billingMethodName: string|null,
    ): string|null {
        return grnFormat
            .replace('{accountName}', accountName ?? '')
            .replace('{billingMethodName}', billingMethodName ?? '');
    }

    public getBillingMethodId(): string|null {
        return this.billingMethodId;
    }

    public setBillingMethodId(billingMethodId: string|null) {
        this.billingMethodId = billingMethodId;
        return this;
    }

    public withBillingMethodId(billingMethodId: string|null): this {
        this.billingMethodId = billingMethodId;
        return this;
    }

    public getAccountName(): string|null {
        return this.accountName;
    }

    public setAccountName(accountName: string|null) {
        this.accountName = accountName;
        return this;
    }

    public withAccountName(accountName: string|null): this {
        this.accountName = accountName;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }

    public getMethodType(): string|null {
        return this.methodType;
    }

    public setMethodType(methodType: string|null) {
        this.methodType = methodType;
        return this;
    }

    public withMethodType(methodType: string|null): this {
        this.methodType = methodType;
        return this;
    }

    public getCardSignatureName(): string|null {
        return this.cardSignatureName;
    }

    public setCardSignatureName(cardSignatureName: string|null) {
        this.cardSignatureName = cardSignatureName;
        return this;
    }

    public withCardSignatureName(cardSignatureName: string|null): this {
        this.cardSignatureName = cardSignatureName;
        return this;
    }

    public getCardBrand(): string|null {
        return this.cardBrand;
    }

    public setCardBrand(cardBrand: string|null) {
        this.cardBrand = cardBrand;
        return this;
    }

    public withCardBrand(cardBrand: string|null): this {
        this.cardBrand = cardBrand;
        return this;
    }

    public getCardLast4(): string|null {
        return this.cardLast4;
    }

    public setCardLast4(cardLast4: string|null) {
        this.cardLast4 = cardLast4;
        return this;
    }

    public withCardLast4(cardLast4: string|null): this {
        this.cardLast4 = cardLast4;
        return this;
    }

    public getPartnerId(): string|null {
        return this.partnerId;
    }

    public setPartnerId(partnerId: string|null) {
        this.partnerId = partnerId;
        return this;
    }

    public withPartnerId(partnerId: string|null): this {
        this.partnerId = partnerId;
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

    public static fromDict(data: {[key: string]: any}): BillingMethod|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BillingMethod()
            .withBillingMethodId(data["billingMethodId"])
            .withAccountName(data["accountName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMethodType(data["methodType"])
            .withCardSignatureName(data["cardSignatureName"])
            .withCardBrand(data["cardBrand"])
            .withCardLast4(data["cardLast4"])
            .withPartnerId(data["partnerId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "billingMethodId": this.getBillingMethodId(),
            "accountName": this.getAccountName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "methodType": this.getMethodType(),
            "cardSignatureName": this.getCardSignatureName(),
            "cardBrand": this.getCardBrand(),
            "cardLast4": this.getCardLast4(),
            "partnerId": this.getPartnerId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
