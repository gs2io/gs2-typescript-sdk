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

import * as Gs2Project from '../../project/model'
const grnFormat: string = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:dump:{transactionId}";

export default class DumpProgress implements IModel {
    private dumpProgressId: string|null = null;
    private transactionId: string|null = null;
    private userId: string|null = null;
    private dumped: number|null = null;
    private microserviceCount: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getAccountName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getProjectName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{transactionId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getTransactionId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '(.*)')
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
        if (this.getProjectName(grn) == null || this.getProjectName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        accountName: string|null,
        projectName: string|null,
        transactionId: string|null,
    ): string|null {
        return grnFormat
            .replace('{accountName}', accountName ?? '')
            .replace('{projectName}', projectName ?? '')
            .replace('{transactionId}', transactionId ?? '');
    }
    public getDumpProgressId(): string|null {
        return this.dumpProgressId;
    }
    public setDumpProgressId(dumpProgressId: string|null) {
        this.dumpProgressId = dumpProgressId;
        return this;
    }
    public withDumpProgressId(dumpProgressId: string|null): this {
        this.dumpProgressId = dumpProgressId;
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
    public getDumped(): number|null {
        return this.dumped;
    }
    public setDumped(dumped: number|null) {
        this.dumped = dumped;
        return this;
    }
    public withDumped(dumped: number|null): this {
        this.dumped = dumped;
        return this;
    }
    public getMicroserviceCount(): number|null {
        return this.microserviceCount;
    }
    public setMicroserviceCount(microserviceCount: number|null) {
        this.microserviceCount = microserviceCount;
        return this;
    }
    public withMicroserviceCount(microserviceCount: number|null): this {
        this.microserviceCount = microserviceCount;
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

    public static fromDict(data: {[key: string]: any}): DumpProgress|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DumpProgress()
            .withDumpProgressId(data["dumpProgressId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withDumped(data["dumped"])
            .withMicroserviceCount(data["microserviceCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "dumpProgressId": this.getDumpProgressId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "dumped": this.getDumped(),
            "microserviceCount": this.getMicroserviceCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
