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
import VerifyReceiptEvent from './VerifyReceiptEvent';
import DepositTransaction from './DepositTransaction';
import WalletSummary from './WalletSummary';
import DepositEvent from './DepositEvent';
import WithdrawEvent from './WithdrawEvent';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:event:{transactionId}";

export default class Event implements IModel {
    private eventId: string|null = null;
    private transactionId: string|null = null;
    private userId: string|null = null;
    private eventType: string|null = null;
    private verifyReceiptEvent: Gs2Money2.VerifyReceiptEvent|null = null;
    private depositEvent: Gs2Money2.DepositEvent|null = null;
    private withdrawEvent: Gs2Money2.WithdrawEvent|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

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
    public getEventId(): string|null {
        return this.eventId;
    }
    public setEventId(eventId: string|null) {
        this.eventId = eventId;
        return this;
    }
    public withEventId(eventId: string|null): this {
        this.eventId = eventId;
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
    public getEventType(): string|null {
        return this.eventType;
    }
    public setEventType(eventType: string|null) {
        this.eventType = eventType;
        return this;
    }
    public withEventType(eventType: string|null): this {
        this.eventType = eventType;
        return this;
    }
    public getVerifyReceiptEvent(): Gs2Money2.VerifyReceiptEvent|null {
        return this.verifyReceiptEvent;
    }
    public setVerifyReceiptEvent(verifyReceiptEvent: Gs2Money2.VerifyReceiptEvent|null) {
        this.verifyReceiptEvent = verifyReceiptEvent;
        return this;
    }
    public withVerifyReceiptEvent(verifyReceiptEvent: Gs2Money2.VerifyReceiptEvent|null): this {
        this.verifyReceiptEvent = verifyReceiptEvent;
        return this;
    }
    public getDepositEvent(): Gs2Money2.DepositEvent|null {
        return this.depositEvent;
    }
    public setDepositEvent(depositEvent: Gs2Money2.DepositEvent|null) {
        this.depositEvent = depositEvent;
        return this;
    }
    public withDepositEvent(depositEvent: Gs2Money2.DepositEvent|null): this {
        this.depositEvent = depositEvent;
        return this;
    }
    public getWithdrawEvent(): Gs2Money2.WithdrawEvent|null {
        return this.withdrawEvent;
    }
    public setWithdrawEvent(withdrawEvent: Gs2Money2.WithdrawEvent|null) {
        this.withdrawEvent = withdrawEvent;
        return this;
    }
    public withWithdrawEvent(withdrawEvent: Gs2Money2.WithdrawEvent|null): this {
        this.withdrawEvent = withdrawEvent;
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

    public static fromDict(data: {[key: string]: any}): Event|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventId(data["eventId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withEventType(data["eventType"])
            .withVerifyReceiptEvent(Gs2Money2.VerifyReceiptEvent.fromDict(data["verifyReceiptEvent"]))
            .withDepositEvent(Gs2Money2.DepositEvent.fromDict(data["depositEvent"]))
            .withWithdrawEvent(Gs2Money2.WithdrawEvent.fromDict(data["withdrawEvent"]))
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "eventId": this.getEventId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "eventType": this.getEventType(),
            "verifyReceiptEvent": this.getVerifyReceiptEvent()?.toDict(),
            "depositEvent": this.getDepositEvent()?.toDict(),
            "withdrawEvent": this.getWithdrawEvent()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
