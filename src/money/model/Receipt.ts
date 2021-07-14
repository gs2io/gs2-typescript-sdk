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

export class Receipt implements IModel {
    private receiptId: string|null = null;
    private transactionId: string|null = null;
    private userId: string|null = null;
    private type: string|null = null;
    private slot: number|null = null;
    private price: number|null = null;
    private paid: number|null = null;
    private free: number|null = null;
    private total: number|null = null;
    private contentsId: string|null = null;
    private createdAt: number|null = null;

    public getReceiptId(): string|null {
        return this.receiptId;
    }

    public setReceiptId(receiptId: string|null) {
        this.receiptId = receiptId;
        return this;
    }

    public withReceiptId(receiptId: string|null): this {
        this.receiptId = receiptId;
        return this;
    }

    public getTransactionId(): string|null {
        return this.transactionId;
    }

    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }

    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
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

    public getType(): string|null {
        return this.type;
    }

    public setType(type: string|null) {
        this.type = type;
        return this;
    }

    public withType(type: string|null): this {
        this.type = type;
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

    public getTotal(): number|null {
        return this.total;
    }

    public setTotal(total: number|null) {
        this.total = total;
        return this;
    }

    public withTotal(total: number|null): this {
        this.total = total;
        return this;
    }

    public getContentsId(): string|null {
        return this.contentsId;
    }

    public setContentsId(contentsId: string|null) {
        this.contentsId = contentsId;
        return this;
    }

    public withContentsId(contentsId: string|null): this {
        this.contentsId = contentsId;
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

    public static fromDict(data: {[key: string]: any}): Receipt|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Receipt()
            .withReceiptId(data["receiptId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withSlot(data["slot"])
            .withPrice(data["price"])
            .withPaid(data["paid"])
            .withFree(data["free"])
            .withTotal(data["total"])
            .withContentsId(data["contentsId"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "receiptId": this.getReceiptId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "slot": this.getSlot(),
            "price": this.getPrice(),
            "paid": this.getPaid(),
            "free": this.getFree(),
            "total": this.getTotal(),
            "contentsId": this.getContentsId(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
