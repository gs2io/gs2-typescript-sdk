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

export default class InventoryNamespaceStatistics implements IModel {
    private acquire: number|null = null;
    private consume: number|null = null;
    private increaseCapacity: number|null = null;
    public getAcquire(): number|null {
        return this.acquire;
    }
    public setAcquire(acquire: number|null) {
        this.acquire = acquire;
        return this;
    }
    public withAcquire(acquire: number|null): this {
        this.acquire = acquire;
        return this;
    }
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
    public getIncreaseCapacity(): number|null {
        return this.increaseCapacity;
    }
    public setIncreaseCapacity(increaseCapacity: number|null) {
        this.increaseCapacity = increaseCapacity;
        return this;
    }
    public withIncreaseCapacity(increaseCapacity: number|null): this {
        this.increaseCapacity = increaseCapacity;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceStatistics()
            .withAcquire(data["acquire"])
            .withConsume(data["consume"])
            .withIncreaseCapacity(data["increaseCapacity"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "acquire": this.getAcquire(),
            "consume": this.getConsume(),
            "increaseCapacity": this.getIncreaseCapacity(),
        };
    }
}
