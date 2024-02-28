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

export default class TransactionSetting implements IModel {
    private distributorNamespaceId: string|null = null;
    private queueNamespaceId: string|null = null;
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
            .withDistributorNamespaceId(data["distributorNamespaceId"])
            .withQueueNamespaceId(data["queueNamespaceId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "distributorNamespaceId": this.getDistributorNamespaceId(),
            "queueNamespaceId": this.getQueueNamespaceId(),
        };
    }
}
