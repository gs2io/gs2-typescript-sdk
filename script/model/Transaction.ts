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
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';

export default class Transaction implements IModel {
    private transactionId: string|null = null;
    private verifyActions: VerifyAction[]|null = null;
    private consumeActions: ConsumeAction[]|null = null;
    private acquireActions: AcquireAction[]|null = null;
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
    public getVerifyActions(): VerifyAction[]|null {
        return this.verifyActions;
    }
    public setVerifyActions(verifyActions: VerifyAction[]|null) {
        this.verifyActions = verifyActions;
        return this;
    }
    public withVerifyActions(verifyActions: VerifyAction[]|null): this {
        this.verifyActions = verifyActions;
        return this;
    }
    public getConsumeActions(): ConsumeAction[]|null {
        return this.consumeActions;
    }
    public setConsumeActions(consumeActions: ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }
    public withConsumeActions(consumeActions: ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }
    public getAcquireActions(): AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Transaction|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Transaction()
            .withTransactionId(data["transactionId"])
            .withVerifyActions(data.verifyActions ?
                data.verifyActions.map((item: {[key: string]: any}) => {
                    return VerifyAction.fromDict(item);
                }
            ) : [])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : [])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "transactionId": this.getTransactionId(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions()!.map((item: VerifyAction) => {
                    return item.toDict();
                }
            ) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
