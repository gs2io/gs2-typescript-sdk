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
import MatchmakingNamespaceResultDistributionStatistics from './MatchmakingNamespaceResultDistributionStatistics';
import MatchmakingNamespaceResultDistributionSegment from './MatchmakingNamespaceResultDistributionSegment';
import MatchmakingNamespaceResultDistribution from './MatchmakingNamespaceResultDistribution';
import MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics from './MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics';
import MatchmakingNamespaceWaitElapsedSecondsDistributionSegment from './MatchmakingNamespaceWaitElapsedSecondsDistributionSegment';
import MatchmakingNamespaceWaitElapsedSecondsDistribution from './MatchmakingNamespaceWaitElapsedSecondsDistribution';

export default class MatchmakingNamespaceDistributions implements IModel {
    private result: MatchmakingNamespaceResultDistribution|null = null;
    private waitElapsedSeconds: MatchmakingNamespaceWaitElapsedSecondsDistribution|null = null;
    public getResult(): MatchmakingNamespaceResultDistribution|null {
        return this.result;
    }
    public setResult(result: MatchmakingNamespaceResultDistribution|null) {
        this.result = result;
        return this;
    }
    public withResult(result: MatchmakingNamespaceResultDistribution|null): this {
        this.result = result;
        return this;
    }
    public getWaitElapsedSeconds(): MatchmakingNamespaceWaitElapsedSecondsDistribution|null {
        return this.waitElapsedSeconds;
    }
    public setWaitElapsedSeconds(waitElapsedSeconds: MatchmakingNamespaceWaitElapsedSecondsDistribution|null) {
        this.waitElapsedSeconds = waitElapsedSeconds;
        return this;
    }
    public withWaitElapsedSeconds(waitElapsedSeconds: MatchmakingNamespaceWaitElapsedSecondsDistribution|null): this {
        this.waitElapsedSeconds = waitElapsedSeconds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceDistributions()
            .withResult(MatchmakingNamespaceResultDistribution.fromDict(data["result"]))
            .withWaitElapsedSeconds(MatchmakingNamespaceWaitElapsedSecondsDistribution.fromDict(data["waitElapsedSeconds"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "result": this.getResult()?.toDict(),
            "waitElapsedSeconds": this.getWaitElapsedSeconds()?.toDict(),
        };
    }
}
