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
import InventoryNamespaceConsumeDistributionStatistics from './InventoryNamespaceConsumeDistributionStatistics';
import InventoryNamespaceConsumeDistributionSegment from './InventoryNamespaceConsumeDistributionSegment';

export default class InventoryNamespaceConsumeDistribution implements IModel {
    private statistics: Gs2Watch.InventoryNamespaceConsumeDistributionStatistics|null = null;
    private distribution: Gs2Watch.InventoryNamespaceConsumeDistributionSegment[]|null = null;
    public getStatistics(): Gs2Watch.InventoryNamespaceConsumeDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.InventoryNamespaceConsumeDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.InventoryNamespaceConsumeDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): Gs2Watch.InventoryNamespaceConsumeDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: Gs2Watch.InventoryNamespaceConsumeDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: Gs2Watch.InventoryNamespaceConsumeDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryNamespaceConsumeDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceConsumeDistribution()
            .withStatistics(Gs2Watch.InventoryNamespaceConsumeDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return Gs2Watch.InventoryNamespaceConsumeDistributionSegment.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: Gs2Watch.InventoryNamespaceConsumeDistributionSegment) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
