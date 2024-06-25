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
import DepositTransaction from './DepositTransaction';
import WalletSummary from './WalletSummary';

export default class DepositEvent implements IModel {
    private slot: number|null = null;
    private depositTransactions: DepositTransaction[]|null = null;
    private status: WalletSummary|null = null;
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
    public getDepositTransactions(): DepositTransaction[]|null {
        return this.depositTransactions;
    }
    public setDepositTransactions(depositTransactions: DepositTransaction[]|null) {
        this.depositTransactions = depositTransactions;
        return this;
    }
    public withDepositTransactions(depositTransactions: DepositTransaction[]|null): this {
        this.depositTransactions = depositTransactions;
        return this;
    }
    public getStatus(): WalletSummary|null {
        return this.status;
    }
    public setStatus(status: WalletSummary|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: WalletSummary|null): this {
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
                    return DepositTransaction.fromDict(item);
                }
            ) : [])
            .withStatus(WalletSummary.fromDict(data["status"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "slot": this.getSlot(),
            "depositTransactions": this.getDepositTransactions() ?
                this.getDepositTransactions()!.map((item: DepositTransaction) => {
                    return item.toDict();
                }
            ) : [],
            "status": this.getStatus()?.toDict(),
        };
    }
}
