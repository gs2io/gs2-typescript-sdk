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

import * as Gs2Lottery from '../model'

export default class UpdatePrizeTableMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private prizeTableName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private prizes: Gs2Lottery.Prize[]|null = null;

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
    public getPrizeTableName(): string|null {
        return this.prizeTableName;
    }
    public setPrizeTableName(prizeTableName: string|null) {
        this.prizeTableName = prizeTableName;
        return this;
    }
    public withPrizeTableName(prizeTableName: string|null): this {
        this.prizeTableName = prizeTableName;
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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getPrizes(): Gs2Lottery.Prize[]|null {
        return this.prizes;
    }
    public setPrizes(prizes: Gs2Lottery.Prize[]|null) {
        this.prizes = prizes;
        return this;
    }
    public withPrizes(prizes: Gs2Lottery.Prize[]|null): this {
        this.prizes = prizes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdatePrizeTableMasterRequest {
        return new UpdatePrizeTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withPrizes(data.prizes ?
                data.prizes.map((item: {[key: string]: any}) => {
                    return Gs2Lottery.Prize.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "prizes": this.getPrizes() ?
                this.getPrizes()!.map((item: Gs2Lottery.Prize) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}