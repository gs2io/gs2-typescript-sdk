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
import ShowcaseShowcaseBuyDistributionStatistics from './ShowcaseShowcaseBuyDistributionStatistics';
import ShowcaseShowcaseBuyDistributionSegment from './ShowcaseShowcaseBuyDistributionSegment';

export default class ShowcaseShowcaseBuyDistribution implements IModel {
    private statistics: ShowcaseShowcaseBuyDistributionStatistics|null = null;
    private distribution: ShowcaseShowcaseBuyDistributionSegment[]|null = null;
    public getStatistics(): ShowcaseShowcaseBuyDistributionStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ShowcaseShowcaseBuyDistributionStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ShowcaseShowcaseBuyDistributionStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): ShowcaseShowcaseBuyDistributionSegment[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: ShowcaseShowcaseBuyDistributionSegment[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: ShowcaseShowcaseBuyDistributionSegment[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseShowcaseBuyDistribution|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcaseBuyDistribution()
            .withStatistics(ShowcaseShowcaseBuyDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return ShowcaseShowcaseBuyDistributionSegment.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: ShowcaseShowcaseBuyDistributionSegment) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
