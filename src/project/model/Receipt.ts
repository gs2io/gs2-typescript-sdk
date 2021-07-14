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
    private accountName: string|null = null;
    private name: string|null = null;
    private date: number|null = null;
    private amount: string|null = null;
    private pdfUrl: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getDate(): number|null {
        return this.date;
    }

    public setDate(date: number|null) {
        this.date = date;
        return this;
    }

    public withDate(date: number|null): this {
        this.date = date;
        return this;
    }

    public getAmount(): string|null {
        return this.amount;
    }

    public setAmount(amount: string|null) {
        this.amount = amount;
        return this;
    }

    public withAmount(amount: string|null): this {
        this.amount = amount;
        return this;
    }

    public getPdfUrl(): string|null {
        return this.pdfUrl;
    }

    public setPdfUrl(pdfUrl: string|null) {
        this.pdfUrl = pdfUrl;
        return this;
    }

    public withPdfUrl(pdfUrl: string|null): this {
        this.pdfUrl = pdfUrl;
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

    public static fromDict(data: {[key: string]: any}): Receipt|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Receipt()
            .withReceiptId(data["receiptId"])
            .withAccountName(data["accountName"])
            .withName(data["name"])
            .withDate(data["date"])
            .withAmount(data["amount"])
            .withPdfUrl(data["pdfUrl"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "receiptId": this.getReceiptId(),
            "accountName": this.getAccountName(),
            "name": this.getName(),
            "date": this.getDate(),
            "amount": this.getAmount(),
            "pdfUrl": this.getPdfUrl(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
