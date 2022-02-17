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
import { WalletDetail } from './WalletDetail';

export class Wallet implements IModel {
    private walletId: string|null = null;
    private userId: string|null = null;
    private slot: number|null = null;
    private paid: number|null = null;
    private free: number|null = null;
    private detail: WalletDetail[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getPaid(): number|null {
        return this.paid;
    }

    public setPaid(paid: number|null) {
        this.paid = paid;
        return this;
    }

    public withPaid(paid: number|null): this {
        this.paid = paid;
        return this;
    }

    public getFree(): number|null {
        return this.free;
    }

    public setFree(free: number|null) {
        this.free = free;
        return this;
    }

    public withFree(free: number|null): this {
        this.free = free;
        return this;
    }

    public getDetail(): WalletDetail[]|null {
        return this.detail;
    }

    public setDetail(detail: WalletDetail[]|null) {
        this.detail = detail;
        return this;
    }

    public withDetail(detail: WalletDetail[]|null): this {
        this.detail = detail;
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

    public static fromDict(data: {[key: string]: any}): Wallet|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Wallet()
            .withWalletId(data["walletId"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withPaid(data["paid"])
            .withFree(data["free"])
            .withDetail(data.detail ?
                data.detail.map((item: {[key: string]: any}) => {
                    return WalletDetail.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "walletId": this.getWalletId(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "paid": this.getPaid(),
            "free": this.getFree(),
            "detail": this.getDetail() ?
                this.getDetail()!.map((item: WalletDetail) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
