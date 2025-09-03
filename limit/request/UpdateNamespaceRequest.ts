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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Limit from '../model'

export default class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Limit.TransactionSetting|null = null;
    private logSetting: Gs2Limit.LogSetting|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getTransactionSetting(): Gs2Limit.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Limit.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Limit.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getLogSetting(): Gs2Limit.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Limit.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Limit.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Limit.TransactionSetting.fromDict(data["transactionSetting"]))
            .withLogSetting(Gs2Limit.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}