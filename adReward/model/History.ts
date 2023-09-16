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
const grnFormat: string = "";

export default class History implements IModel {
    private provider: string|null = null;
    private transactionId: string|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static isValid(grn: string): boolean {
        return true;
    }

    public static createGrn(
    ): string|null {
        return grnFormat;
    }
    public getProvider(): string|null {
        return this.provider;
    }
    public setProvider(provider: string|null) {
        this.provider = provider;
        return this;
    }
    public withProvider(provider: string|null): this {
        this.provider = provider;
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

    public static fromDict(data: {[key: string]: any}): History|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new History()
            .withProvider(data["provider"])
            .withTransactionId(data["transactionId"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "provider": this.getProvider(),
            "transactionId": this.getTransactionId(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
