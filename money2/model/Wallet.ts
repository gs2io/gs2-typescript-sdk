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
import WalletSummary from './WalletSummary';
import DepositTransaction from './DepositTransaction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:user:{userId}:wallet:{slot}";

export default class Wallet implements IModel {
    private walletId: string|null = null;
    private userId: string|null = null;
    private slot: number|null = null;
    private summary: Gs2Money2.WalletSummary|null = null;
    private depositTransactions: Gs2Money2.DepositTransaction[]|null = null;
    private sharedFreeCurrency: boolean|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{slot}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{slot}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{slot}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSlot(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{slot}', '(.*)')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getSlot(grn) == null || this.getSlot(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        slot: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{slot}', slot ?? '');
    }
    public getWalletId(): string|null {
        return this.walletId;
    }
    public setWalletId(walletId: string|null) {
        this.walletId = walletId;
        return this;
    }
    public withWalletId(walletId: string|null): this {
        this.walletId = walletId;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getSlot(): number|null {
        return this.slot;
    }
    public setSlot(slot: number|null) {
        this.slot = slot;
        return this;
    }
    public withSlot(slot: number|null): this {
        this.slot = slot;
        return this;
    }
    public getSummary(): Gs2Money2.WalletSummary|null {
        return this.summary;
    }
    public setSummary(summary: Gs2Money2.WalletSummary|null) {
        this.summary = summary;
        return this;
    }
    public withSummary(summary: Gs2Money2.WalletSummary|null): this {
        this.summary = summary;
        return this;
    }
    public getDepositTransactions(): Gs2Money2.DepositTransaction[]|null {
        return this.depositTransactions;
    }
    public setDepositTransactions(depositTransactions: Gs2Money2.DepositTransaction[]|null) {
        this.depositTransactions = depositTransactions;
        return this;
    }
    public withDepositTransactions(depositTransactions: Gs2Money2.DepositTransaction[]|null): this {
        this.depositTransactions = depositTransactions;
        return this;
    }
    public getSharedFreeCurrency(): boolean|null {
        return this.sharedFreeCurrency;
    }
    public setSharedFreeCurrency(sharedFreeCurrency: boolean|null) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    }
    public withSharedFreeCurrency(sharedFreeCurrency: boolean|null): this {
        this.sharedFreeCurrency = sharedFreeCurrency;
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

    public static fromDict(data: {[key: string]: any}): Wallet|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Wallet()
            .withWalletId(data["walletId"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withSummary(Gs2Money2.WalletSummary.fromDict(data["summary"]))
            .withDepositTransactions(data.depositTransactions ?
                data.depositTransactions.map((item: {[key: string]: any}) => {
                    return Gs2Money2.DepositTransaction.fromDict(item);
                }
            ) : null)
            .withSharedFreeCurrency(data["sharedFreeCurrency"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "walletId": this.getWalletId(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "summary": this.getSummary()?.toDict(),
            "depositTransactions": this.getDepositTransactions() ?
                this.getDepositTransactions()!.map((item: Gs2Money2.DepositTransaction) => {
                    return item.toDict();
                }
            ) : null,
            "sharedFreeCurrency": this.getSharedFreeCurrency(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
