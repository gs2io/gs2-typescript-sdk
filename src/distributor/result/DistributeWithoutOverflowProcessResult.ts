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

import IResult from '../../core/interface/IResult';

import * as Gs2Distributor from '../model'

export class DistributeWithoutOverflowProcessResult implements IResult {
    private distributeResource: Gs2Distributor.DistributeResource|null = null;
    private result: string|null = null;

    public getDistributeResource(): Gs2Distributor.DistributeResource|null {
        return this.distributeResource;
    }

    public setDistributeResource(distributeResource: Gs2Distributor.DistributeResource|null) {
        this.distributeResource = distributeResource;
        return this;
    }

    public withDistributeResource(distributeResource: Gs2Distributor.DistributeResource|null): this {
        this.distributeResource = distributeResource;
        return this;
    }

    public getResult(): string|null {
        return this.result;
    }

    public setResult(result: string|null) {
        this.result = result;
        return this;
    }

    public withResult(result: string|null): this {
        this.result = result;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DistributeWithoutOverflowProcessResult {
        return new DistributeWithoutOverflowProcessResult()
            .withDistributeResource(Gs2Distributor.DistributeResource.fromDict(data["distributeResource"]))
            .withResult(data["result"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "distributeResource": this.getDistributeResource()?.toDict(),
            "result": this.getResult(),
        };
    }
}
