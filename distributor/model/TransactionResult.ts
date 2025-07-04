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

import * as Gs2Distributor from '../../distributor/model'
import VerifyActionResult from './VerifyActionResult';
import ConsumeActionResult from './ConsumeActionResult';
import AcquireActionResult from './AcquireActionResult';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:distributor:{namespaceName}:user:{userId}:transaction:result:{transactionId}";

export default class TransactionResult implements IModel {
    private transactionResultId: string|null = null;
    private userId: string|null = null;
    private transactionId: string|null = null;
    private verifyResults: Gs2Distributor.VerifyActionResult[]|null = null;
    private consumeResults: Gs2Distributor.ConsumeActionResult[]|null = null;
    private acquireResults: Gs2Distributor.AcquireActionResult[]|null = null;
    private hasError: boolean|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*')
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
            .replace('{userId}', '.*')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
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
        userId: string|null,
        transactionId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{transactionId}', transactionId ?? '');
    }
    public getTransactionResultId(): string|null {
        return this.transactionResultId;
    }
    public setTransactionResultId(transactionResultId: string|null) {
        this.transactionResultId = transactionResultId;
        return this;
    }
    public withTransactionResultId(transactionResultId: string|null): this {
        this.transactionResultId = transactionResultId;
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
    public getVerifyResults(): Gs2Distributor.VerifyActionResult[]|null {
        return this.verifyResults;
    }
    public setVerifyResults(verifyResults: Gs2Distributor.VerifyActionResult[]|null) {
        this.verifyResults = verifyResults;
        return this;
    }
    public withVerifyResults(verifyResults: Gs2Distributor.VerifyActionResult[]|null): this {
        this.verifyResults = verifyResults;
        return this;
    }
    public getConsumeResults(): Gs2Distributor.ConsumeActionResult[]|null {
        return this.consumeResults;
    }
    public setConsumeResults(consumeResults: Gs2Distributor.ConsumeActionResult[]|null) {
        this.consumeResults = consumeResults;
        return this;
    }
    public withConsumeResults(consumeResults: Gs2Distributor.ConsumeActionResult[]|null): this {
        this.consumeResults = consumeResults;
        return this;
    }
    public getAcquireResults(): Gs2Distributor.AcquireActionResult[]|null {
        return this.acquireResults;
    }
    public setAcquireResults(acquireResults: Gs2Distributor.AcquireActionResult[]|null) {
        this.acquireResults = acquireResults;
        return this;
    }
    public withAcquireResults(acquireResults: Gs2Distributor.AcquireActionResult[]|null): this {
        this.acquireResults = acquireResults;
        return this;
    }
    public getHasError(): boolean|null {
        return this.hasError;
    }
    public setHasError(hasError: boolean|null) {
        this.hasError = hasError;
        return this;
    }
    public withHasError(hasError: boolean|null): this {
        this.hasError = hasError;
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

    public static fromDict(data: {[key: string]: any}): TransactionResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionResult()
            .withTransactionResultId(data["transactionResultId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withVerifyResults(data.verifyResults ?
                data.verifyResults.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.VerifyActionResult.fromDict(item);
                }
            ) : null)
            .withConsumeResults(data.consumeResults ?
                data.consumeResults.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.ConsumeActionResult.fromDict(item);
                }
            ) : null)
            .withAcquireResults(data.acquireResults ?
                data.acquireResults.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.AcquireActionResult.fromDict(item);
                }
            ) : null)
            .withHasError(data["hasError"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "transactionResultId": this.getTransactionResultId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "verifyResults": this.getVerifyResults() ?
                this.getVerifyResults()!.map((item: Gs2Distributor.VerifyActionResult) => {
                    return item.toDict();
                }
            ) : null,
            "consumeResults": this.getConsumeResults() ?
                this.getConsumeResults()!.map((item: Gs2Distributor.ConsumeActionResult) => {
                    return item.toDict();
                }
            ) : null,
            "acquireResults": this.getAcquireResults() ?
                this.getAcquireResults()!.map((item: Gs2Distributor.AcquireActionResult) => {
                    return item.toDict();
                }
            ) : null,
            "hasError": this.getHasError(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
