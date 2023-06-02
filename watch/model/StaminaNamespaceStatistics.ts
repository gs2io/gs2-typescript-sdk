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

export default class StaminaNamespaceStatistics implements IModel {
    private consume: number|null = null;
    private recover: number|null = null;
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

    public static fromDict(data: {[key: string]: any}): StaminaNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespaceStatistics()
            .withConsume(data["consume"])
            .withRecover(data["recover"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "consume": this.getConsume(),
            "recover": this.getRecover(),
        };
    }
}
