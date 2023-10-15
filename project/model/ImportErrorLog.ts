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
const grnFormat: string = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:import:{transactionId}:log:{errorLogName}";

export default class ImportErrorLog implements IModel {
    private dumpProgressId: string|null = null;
    private name: string|null = null;
    private microserviceName: string|null = null;
    private message: string|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getAccountName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*')
            .replace('{errorLogName}', '.*')
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
            .replace('{errorLogName}', '.*')
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
            .replace('{errorLogName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getErrorLogName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*')
            .replace('{errorLogName}', '(.*)')
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
        if (this.getErrorLogName(grn) == null || this.getErrorLogName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        accountName: string|null,
        projectName: string|null,
        transactionId: string|null,
        errorLogName: string|null,
    ): string|null {
        return grnFormat
            .replace('{accountName}', accountName ?? '')
            .replace('{projectName}', projectName ?? '')
            .replace('{transactionId}', transactionId ?? '')
            .replace('{errorLogName}', errorLogName ?? '');
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
    public getMicroserviceName(): string|null {
        return this.microserviceName;
    }
    public setMicroserviceName(microserviceName: string|null) {
        this.microserviceName = microserviceName;
        return this;
    }
    public withMicroserviceName(microserviceName: string|null): this {
        this.microserviceName = microserviceName;
        return this;
    }
    public getMessage(): string|null {
        return this.message;
    }
    public setMessage(message: string|null) {
        this.message = message;
        return this;
    }
    public withMessage(message: string|null): this {
        this.message = message;
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

    public static fromDict(data: {[key: string]: any}): ImportErrorLog|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ImportErrorLog()
            .withDumpProgressId(data["dumpProgressId"])
            .withName(data["name"])
            .withMicroserviceName(data["microserviceName"])
            .withMessage(data["message"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "dumpProgressId": this.getDumpProgressId(),
            "name": this.getName(),
            "microserviceName": this.getMicroserviceName(),
            "message": this.getMessage(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
