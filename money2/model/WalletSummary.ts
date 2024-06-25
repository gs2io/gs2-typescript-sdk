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

export default class WalletSummary implements IModel {
    private paid: number|null = null;
    private free: number|null = null;
    private total: number|null = null;
    public getPaid(): number|null {
        return this.paid;
    }
    public setPaid(paid: number|null) {
        this.paid = paid;
        return this;
    }
    public withPaid(paid: number|null): this {
        this.paid = paid;
        return this;
    }
    public getFree(): number|null {
        return this.free;
    }
    public setFree(free: number|null) {
        this.free = free;
        return this;
    }
    public withFree(free: number|null): this {
        this.free = free;
        return this;
    }
    public getTotal(): number|null {
        return this.total;
    }
    public setTotal(total: number|null) {
        this.total = total;
        return this;
    }
    public withTotal(total: number|null): this {
        this.total = total;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): WalletSummary|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new WalletSummary()
            .withPaid(data["paid"])
            .withFree(data["free"])
            .withTotal(data["total"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "paid": this.getPaid(),
            "free": this.getFree(),
            "total": this.getTotal(),
        };
    }
}
