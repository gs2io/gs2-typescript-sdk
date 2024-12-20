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

import * as Gs2Watch from '../../watch/model'

export default class StaminaStaminaModelStatistics implements IModel {
    private consume: number|null = null;
    private consumeAmount: number|null = null;
    private recover: number|null = null;
    private recoverAmount: number|null = null;
    public getConsume(): number|null {
        return this.consume;
    }
    public setConsume(consume: number|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: number|null): this {
        this.consume = consume;
        return this;
    }
    public getConsumeAmount(): number|null {
        return this.consumeAmount;
    }
    public setConsumeAmount(consumeAmount: number|null) {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public withConsumeAmount(consumeAmount: number|null): this {
        this.consumeAmount = consumeAmount;
        return this;
    }
    public getRecover(): number|null {
        return this.recover;
    }
    public setRecover(recover: number|null) {
        this.recover = recover;
        return this;
    }
    public withRecover(recover: number|null): this {
        this.recover = recover;
        return this;
    }
    public getRecoverAmount(): number|null {
        return this.recoverAmount;
    }
    public setRecoverAmount(recoverAmount: number|null) {
        this.recoverAmount = recoverAmount;
        return this;
    }
    public withRecoverAmount(recoverAmount: number|null): this {
        this.recoverAmount = recoverAmount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): StaminaStaminaModelStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaStaminaModelStatistics()
            .withConsume(data["consume"])
            .withConsumeAmount(data["consumeAmount"])
            .withRecover(data["recover"])
            .withRecoverAmount(data["recoverAmount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "consume": this.getConsume(),
            "consumeAmount": this.getConsumeAmount(),
            "recover": this.getRecover(),
            "recoverAmount": this.getRecoverAmount(),
        };
    }
}
