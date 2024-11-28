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

import * as Gs2Money2 from '../../money2/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:unused:{currency}";

export default class UnusedBalance implements IModel {
    private unusedBalanceId: string|null = null;
    private currency: string|null = null;
    private balance: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{currency}', '.*')
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
            .replace('{namespaceName}', '.*')
            .replace('{currency}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{currency}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCurrency(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{currency}', '(.*)')
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
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCurrency(grn) == null || this.getCurrency(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        currency: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{currency}', currency ?? '');
    }
    public getUnusedBalanceId(): string|null {
        return this.unusedBalanceId;
    }
    public setUnusedBalanceId(unusedBalanceId: string|null) {
        this.unusedBalanceId = unusedBalanceId;
        return this;
    }
    public withUnusedBalanceId(unusedBalanceId: string|null): this {
        this.unusedBalanceId = unusedBalanceId;
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
    public getBalance(): number|null {
        return this.balance;
    }
    public setBalance(balance: number|null) {
        this.balance = balance;
        return this;
    }
    public withBalance(balance: number|null): this {
        this.balance = balance;
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

    public static fromDict(data: {[key: string]: any}): UnusedBalance|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnusedBalance()
            .withUnusedBalanceId(data["unusedBalanceId"])
            .withCurrency(data["currency"])
            .withBalance(data["balance"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "unusedBalanceId": this.getUnusedBalanceId(),
            "currency": this.getCurrency(),
            "balance": this.getBalance(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
