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
import MatchmakingNamespaceResultDistributionStatistics from './MatchmakingNamespaceResultDistributionStatistics';
import MatchmakingNamespaceResultDistributionSegment from './MatchmakingNamespaceResultDistributionSegment';
import MatchmakingNamespaceResultDistribution from './MatchmakingNamespaceResultDistribution';
import MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics from './MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics';
import MatchmakingNamespaceWaitElapsedSecondsDistributionSegment from './MatchmakingNamespaceWaitElapsedSecondsDistributionSegment';
import MatchmakingNamespaceWaitElapsedSecondsDistribution from './MatchmakingNamespaceWaitElapsedSecondsDistribution';

export default class MatchmakingNamespaceDistributions implements IModel {
    private result: Gs2Watch.MatchmakingNamespaceResultDistribution|null = null;
    private waitElapsedSeconds: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution|null = null;
    public getResult(): Gs2Watch.MatchmakingNamespaceResultDistribution|null {
        return this.result;
    }
    public setResult(result: Gs2Watch.MatchmakingNamespaceResultDistribution|null) {
        this.result = result;
        return this;
    }
    public withResult(result: Gs2Watch.MatchmakingNamespaceResultDistribution|null): this {
        this.result = result;
        return this;
    }
    public getWaitElapsedSeconds(): Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution|null {
        return this.waitElapsedSeconds;
    }
    public setWaitElapsedSeconds(waitElapsedSeconds: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution|null) {
        this.waitElapsedSeconds = waitElapsedSeconds;
        return this;
    }
    public withWaitElapsedSeconds(waitElapsedSeconds: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution|null): this {
        this.waitElapsedSeconds = waitElapsedSeconds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceDistributions()
            .withResult(Gs2Watch.MatchmakingNamespaceResultDistribution.fromDict(data["result"]))
            .withWaitElapsedSeconds(Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution.fromDict(data["waitElapsedSeconds"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "result": this.getResult()?.toDict(),
            "waitElapsedSeconds": this.getWaitElapsedSeconds()?.toDict(),
        };
    }
}
