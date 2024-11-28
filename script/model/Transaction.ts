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

import * as Gs2Script from '../../script/model'
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';

export default class Transaction implements IModel {
    private transactionId: string|null = null;
    private verifyActions: Gs2Script.VerifyAction[]|null = null;
    private consumeActions: Gs2Script.ConsumeAction[]|null = null;
    private acquireActions: Gs2Script.AcquireAction[]|null = null;
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
    public getVerifyActions(): Gs2Script.VerifyAction[]|null {
        return this.verifyActions;
    }
    public setVerifyActions(verifyActions: Gs2Script.VerifyAction[]|null) {
        this.verifyActions = verifyActions;
        return this;
    }
    public withVerifyActions(verifyActions: Gs2Script.VerifyAction[]|null): this {
        this.verifyActions = verifyActions;
        return this;
    }
    public getConsumeActions(): Gs2Script.ConsumeAction[]|null {
        return this.consumeActions;
    }
    public setConsumeActions(consumeActions: Gs2Script.ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }
    public withConsumeActions(consumeActions: Gs2Script.ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }
    public getAcquireActions(): Gs2Script.AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: Gs2Script.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: Gs2Script.AcquireAction[]|null): this {
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
                    return Gs2Script.VerifyAction.fromDict(item);
                }
            ) : null)
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Script.ConsumeAction.fromDict(item);
                }
            ) : null)
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Script.AcquireAction.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "transactionId": this.getTransactionId(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions()!.map((item: Gs2Script.VerifyAction) => {
                    return item.toDict();
                }
            ) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: Gs2Script.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Script.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
