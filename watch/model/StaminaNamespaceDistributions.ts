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
import StaminaNamespaceConsumeDistributionStatistics from './StaminaNamespaceConsumeDistributionStatistics';
import StaminaNamespaceConsumeDistributionSegment from './StaminaNamespaceConsumeDistributionSegment';
import StaminaNamespaceConsumeDistribution from './StaminaNamespaceConsumeDistribution';
import StaminaNamespaceRecoverDistributionStatistics from './StaminaNamespaceRecoverDistributionStatistics';
import StaminaNamespaceRecoverDistributionSegment from './StaminaNamespaceRecoverDistributionSegment';
import StaminaNamespaceRecoverDistribution from './StaminaNamespaceRecoverDistribution';

export default class StaminaNamespaceDistributions implements IModel {
    private consume: Gs2Watch.StaminaNamespaceConsumeDistribution|null = null;
    private recover: Gs2Watch.StaminaNamespaceRecoverDistribution|null = null;
    public getConsume(): Gs2Watch.StaminaNamespaceConsumeDistribution|null {
        return this.consume;
    }
    public setConsume(consume: Gs2Watch.StaminaNamespaceConsumeDistribution|null) {
        this.consume = consume;
        return this;
    }
    public withConsume(consume: Gs2Watch.StaminaNamespaceConsumeDistribution|null): this {
        this.consume = consume;
        return this;
    }
    public getRecover(): Gs2Watch.StaminaNamespaceRecoverDistribution|null {
        return this.recover;
    }
    public setRecover(recover: Gs2Watch.StaminaNamespaceRecoverDistribution|null) {
        this.recover = recover;
        return this;
    }
    public withRecover(recover: Gs2Watch.StaminaNamespaceRecoverDistribution|null): this {
        this.recover = recover;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): StaminaNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespaceDistributions()
            .withConsume(Gs2Watch.StaminaNamespaceConsumeDistribution.fromDict(data["consume"]))
            .withRecover(Gs2Watch.StaminaNamespaceRecoverDistribution.fromDict(data["recover"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "consume": this.getConsume()?.toDict(),
            "recover": this.getRecover()?.toDict(),
        };
    }
}
