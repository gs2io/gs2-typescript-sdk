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
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:distributor:{namespaceName}:user:{userId}:stampSheet:result:{transactionId}";

export default class StampSheetResult implements IModel {
    private stampSheetResultId: string|null = null;
    private userId: string|null = null;
    private transactionId: string|null = null;
    private taskRequests: ConsumeAction[]|null = null;
    private sheetRequest: AcquireAction|null = null;
    private taskResults: string[]|null = null;
    private sheetResult: string|null = null;
    private nextTransactionId: string|null = null;
    private createdAt: number|null = null;

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
    public getStampSheetResultId(): string|null {
        return this.stampSheetResultId;
    }
    public setStampSheetResultId(stampSheetResultId: string|null) {
        this.stampSheetResultId = stampSheetResultId;
        return this;
    }
    public withStampSheetResultId(stampSheetResultId: string|null): this {
        this.stampSheetResultId = stampSheetResultId;
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
    public getTaskRequests(): ConsumeAction[]|null {
        return this.taskRequests;
    }
    public setTaskRequests(taskRequests: ConsumeAction[]|null) {
        this.taskRequests = taskRequests;
        return this;
    }
    public withTaskRequests(taskRequests: ConsumeAction[]|null): this {
        this.taskRequests = taskRequests;
        return this;
    }
    public getSheetRequest(): AcquireAction|null {
        return this.sheetRequest;
    }
    public setSheetRequest(sheetRequest: AcquireAction|null) {
        this.sheetRequest = sheetRequest;
        return this;
    }
    public withSheetRequest(sheetRequest: AcquireAction|null): this {
        this.sheetRequest = sheetRequest;
        return this;
    }
    public getTaskResults(): string[]|null {
        return this.taskResults;
    }
    public setTaskResults(taskResults: string[]|null) {
        this.taskResults = taskResults;
        return this;
    }
    public withTaskResults(taskResults: string[]|null): this {
        this.taskResults = taskResults;
        return this;
    }
    public getSheetResult(): string|null {
        return this.sheetResult;
    }
    public setSheetResult(sheetResult: string|null) {
        this.sheetResult = sheetResult;
        return this;
    }
    public withSheetResult(sheetResult: string|null): this {
        this.sheetResult = sheetResult;
        return this;
    }
    public getNextTransactionId(): string|null {
        return this.nextTransactionId;
    }
    public setNextTransactionId(nextTransactionId: string|null) {
        this.nextTransactionId = nextTransactionId;
        return this;
    }
    public withNextTransactionId(nextTransactionId: string|null): this {
        this.nextTransactionId = nextTransactionId;
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

    public static fromDict(data: {[key: string]: any}): StampSheetResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StampSheetResult()
            .withStampSheetResultId(data["stampSheetResultId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withTaskRequests(data.taskRequests ?
                data.taskRequests.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : [])
            .withSheetRequest(AcquireAction.fromDict(data["sheetRequest"]))
            .withTaskResults(data.taskResults ?
                data.taskResults.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withSheetResult(data["sheetResult"])
            .withNextTransactionId(data["nextTransactionId"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stampSheetResultId": this.getStampSheetResultId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "taskRequests": this.getTaskRequests() ?
                this.getTaskRequests()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "sheetRequest": this.getSheetRequest()?.toDict(),
            "taskResults": this.getTaskResults() ?
                this.getTaskResults()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "sheetResult": this.getSheetResult(),
            "nextTransactionId": this.getNextTransactionId(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
