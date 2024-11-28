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

export default class Receipt implements IModel {
    private store: string|null = null;
    private transactionID: string|null = null;
    private payload: string|null = null;
    public getStore(): string|null {
        return this.store;
    }
    public setStore(store: string|null) {
        this.store = store;
        return this;
    }
    public withStore(store: string|null): this {
        this.store = store;
        return this;
    }
    public getTransactionID(): string|null {
        return this.transactionID;
    }
    public setTransactionID(transactionID: string|null) {
        this.transactionID = transactionID;
        return this;
    }
    public withTransactionID(transactionID: string|null): this {
        this.transactionID = transactionID;
        return this;
    }
    public getPayload(): string|null {
        return this.payload;
    }
    public setPayload(payload: string|null) {
        this.payload = payload;
        return this;
    }
    public withPayload(payload: string|null): this {
        this.payload = payload;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Receipt|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Receipt()
            .withStore(data["Store"])
            .withTransactionID(data["TransactionID"])
            .withPayload(data["Payload"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "Store": this.getStore(),
            "TransactionID": this.getTransactionID(),
            "Payload": this.getPayload(),
        };
    }
}
