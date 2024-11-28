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
import DepositTransaction from './DepositTransaction';
import WalletSummary from './WalletSummary';

export default class DepositEvent implements IModel {
    private slot: number|null = null;
    private depositTransactions: Gs2Money2.DepositTransaction[]|null = null;
    private status: Gs2Money2.WalletSummary|null = null;
    public getSlot(): number|null {
        return this.slot;
    }
    public setSlot(slot: number|null) {
        this.slot = slot;
        return this;
    }
    public withSlot(slot: number|null): this {
        this.slot = slot;
        return this;
    }
    public getDepositTransactions(): Gs2Money2.DepositTransaction[]|null {
        return this.depositTransactions;
    }
    public setDepositTransactions(depositTransactions: Gs2Money2.DepositTransaction[]|null) {
        this.depositTransactions = depositTransactions;
        return this;
    }
    public withDepositTransactions(depositTransactions: Gs2Money2.DepositTransaction[]|null): this {
        this.depositTransactions = depositTransactions;
        return this;
    }
    public getStatus(): Gs2Money2.WalletSummary|null {
        return this.status;
    }
    public setStatus(status: Gs2Money2.WalletSummary|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: Gs2Money2.WalletSummary|null): this {
        this.status = status;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DepositEvent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DepositEvent()
            .withSlot(data["slot"])
            .withDepositTransactions(data.depositTransactions ?
                data.depositTransactions.map((item: {[key: string]: any}) => {
                    return Gs2Money2.DepositTransaction.fromDict(item);
                }
            ) : null)
            .withStatus(Gs2Money2.WalletSummary.fromDict(data["status"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "slot": this.getSlot(),
            "depositTransactions": this.getDepositTransactions() ?
                this.getDepositTransactions()!.map((item: Gs2Money2.DepositTransaction) => {
                    return item.toDict();
                }
            ) : null,
            "status": this.getStatus()?.toDict(),
        };
    }
}
