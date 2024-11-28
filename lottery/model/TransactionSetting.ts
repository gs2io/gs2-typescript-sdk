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

import * as Gs2Lottery from '../../lottery/model'

export default class TransactionSetting implements IModel {
    private enableAutoRun: boolean|null = null;
    private enableAtomicCommit: boolean|null = null;
    private transactionUseDistributor: boolean|null = null;
    private acquireActionUseJobQueue: boolean|null = null;
    private distributorNamespaceId: string|null = null;
    private keyId: string|null = null;
    private queueNamespaceId: string|null = null;
    public getEnableAutoRun(): boolean|null {
        return this.enableAutoRun;
    }
    public setEnableAutoRun(enableAutoRun: boolean|null) {
        this.enableAutoRun = enableAutoRun;
        return this;
    }
    public withEnableAutoRun(enableAutoRun: boolean|null): this {
        this.enableAutoRun = enableAutoRun;
        return this;
    }
    public getEnableAtomicCommit(): boolean|null {
        return this.enableAtomicCommit;
    }
    public setEnableAtomicCommit(enableAtomicCommit: boolean|null) {
        this.enableAtomicCommit = enableAtomicCommit;
        return this;
    }
    public withEnableAtomicCommit(enableAtomicCommit: boolean|null): this {
        this.enableAtomicCommit = enableAtomicCommit;
        return this;
    }
    public getTransactionUseDistributor(): boolean|null {
        return this.transactionUseDistributor;
    }
    public setTransactionUseDistributor(transactionUseDistributor: boolean|null) {
        this.transactionUseDistributor = transactionUseDistributor;
        return this;
    }
    public withTransactionUseDistributor(transactionUseDistributor: boolean|null): this {
        this.transactionUseDistributor = transactionUseDistributor;
        return this;
    }
    public getAcquireActionUseJobQueue(): boolean|null {
        return this.acquireActionUseJobQueue;
    }
    public setAcquireActionUseJobQueue(acquireActionUseJobQueue: boolean|null) {
        this.acquireActionUseJobQueue = acquireActionUseJobQueue;
        return this;
    }
    public withAcquireActionUseJobQueue(acquireActionUseJobQueue: boolean|null): this {
        this.acquireActionUseJobQueue = acquireActionUseJobQueue;
        return this;
    }
    public getDistributorNamespaceId(): string|null {
        return this.distributorNamespaceId;
    }
    public setDistributorNamespaceId(distributorNamespaceId: string|null) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    }
    public withDistributorNamespaceId(distributorNamespaceId: string|null): this {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    }
    /** @deprecated */
    public getKeyId(): string|null {
        return this.keyId;
    }
    /** @deprecated */
    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }
    /** @deprecated */
    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }
    public getQueueNamespaceId(): string|null {
        return this.queueNamespaceId;
    }
    public setQueueNamespaceId(queueNamespaceId: string|null) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }
    public withQueueNamespaceId(queueNamespaceId: string|null): this {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TransactionSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionSetting()
            .withEnableAutoRun(data["enableAutoRun"])
            .withEnableAtomicCommit(data["enableAtomicCommit"])
            .withTransactionUseDistributor(data["transactionUseDistributor"])
            .withAcquireActionUseJobQueue(data["acquireActionUseJobQueue"])
            .withDistributorNamespaceId(data["distributorNamespaceId"])
            .withKeyId(data["keyId"])
            .withQueueNamespaceId(data["queueNamespaceId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "enableAutoRun": this.getEnableAutoRun(),
            "enableAtomicCommit": this.getEnableAtomicCommit(),
            "transactionUseDistributor": this.getTransactionUseDistributor(),
            "acquireActionUseJobQueue": this.getAcquireActionUseJobQueue(),
            "distributorNamespaceId": this.getDistributorNamespaceId(),
            "keyId": this.getKeyId(),
            "queueNamespaceId": this.getQueueNamespaceId(),
        };
    }
}
