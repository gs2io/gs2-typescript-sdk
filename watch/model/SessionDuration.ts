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
import SessionDurationStatistics from './SessionDurationStatistics';
import SessionDurationDistribution from './SessionDurationDistribution';

export default class SessionDuration implements IModel {
    private statistics: SessionDurationStatistics|null = null;
    private distribution: SessionDurationDistribution[]|null = null;
    public getStatistics(): SessionDurationStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: SessionDurationStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: SessionDurationStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistribution(): SessionDurationDistribution[]|null {
        return this.distribution;
    }
    public setDistribution(distribution: SessionDurationDistribution[]|null) {
        this.distribution = distribution;
        return this;
    }
    public withDistribution(distribution: SessionDurationDistribution[]|null): this {
        this.distribution = distribution;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SessionDuration|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SessionDuration()
            .withStatistics(SessionDurationStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
                data.distribution.map((item: {[key: string]: any}) => {
                    return SessionDurationDistribution.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statistics": this.getStatistics()?.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution()!.map((item: SessionDurationDistribution) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
