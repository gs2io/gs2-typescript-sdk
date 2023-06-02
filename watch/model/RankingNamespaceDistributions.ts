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
import RankingNamespacePutDistributionStatistics from './RankingNamespacePutDistributionStatistics';
import RankingNamespacePutDistributionSegment from './RankingNamespacePutDistributionSegment';
import RankingNamespacePutDistribution from './RankingNamespacePutDistribution';

export default class RankingNamespaceDistributions implements IModel {
    private put: RankingNamespacePutDistribution|null = null;
    public getPut(): RankingNamespacePutDistribution|null {
        return this.put;
    }
    public setPut(put: RankingNamespacePutDistribution|null) {
        this.put = put;
        return this;
    }
    public withPut(put: RankingNamespacePutDistribution|null): this {
        this.put = put;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RankingNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingNamespaceDistributions()
            .withPut(RankingNamespacePutDistribution.fromDict(data["put"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "put": this.getPut()?.toDict(),
        };
    }
}
