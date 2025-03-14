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
import AppleAppStoreVerifyReceiptEvent from './AppleAppStoreVerifyReceiptEvent';
import GooglePlayVerifyReceiptEvent from './GooglePlayVerifyReceiptEvent';
import RefundEvent from './RefundEvent';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:refundHistory:{transactionId}";

export default class RefundHistory implements IModel {
    private refundHistoryId: string|null = null;
    private transactionId: string|null = null;
    private year: number|null = null;
    private month: number|null = null;
    private day: number|null = null;
    private userId: string|null = null;
    private detail: Gs2Money2.RefundEvent|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '.*')
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
            .replace('{transactionId}', '.*')
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
            .replace('{transactionId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getTransactionId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{transactionId}', '(.*)')
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
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        transactionId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{transactionId}', transactionId ?? '');
    }
    public getRefundHistoryId(): string|null {
        return this.refundHistoryId;
    }
    public setRefundHistoryId(refundHistoryId: string|null) {
        this.refundHistoryId = refundHistoryId;
        return this;
    }
    public withRefundHistoryId(refundHistoryId: string|null): this {
        this.refundHistoryId = refundHistoryId;
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
    public getDay(): number|null {
        return this.day;
    }
    public setDay(day: number|null) {
        this.day = day;
        return this;
    }
    public withDay(day: number|null): this {
        this.day = day;
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
    public getDetail(): Gs2Money2.RefundEvent|null {
        return this.detail;
    }
    public setDetail(detail: Gs2Money2.RefundEvent|null) {
        this.detail = detail;
        return this;
    }
    public withDetail(detail: Gs2Money2.RefundEvent|null): this {
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

    public static fromDict(data: {[key: string]: any}): RefundHistory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RefundHistory()
            .withRefundHistoryId(data["refundHistoryId"])
            .withTransactionId(data["transactionId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withUserId(data["userId"])
            .withDetail(Gs2Money2.RefundEvent.fromDict(data["detail"]))
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "refundHistoryId": this.getRefundHistoryId(),
            "transactionId": this.getTransactionId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "userId": this.getUserId(),
            "detail": this.getDetail()?.toDict(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
