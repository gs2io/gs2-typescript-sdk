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
import QuestQuestModelPlayTimeSecondsDistributionStatistics from './QuestQuestModelPlayTimeSecondsDistributionStatistics';
import QuestQuestModelPlayTimeSecondsDistributionSegment from './QuestQuestModelPlayTimeSecondsDistributionSegment';
import QuestQuestModelPlayTimeSecondsDistribution from './QuestQuestModelPlayTimeSecondsDistribution';

export default class QuestQuestModelDistributions implements IModel {
    private playTimeSeconds: Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution|null = null;
    public getPlayTimeSeconds(): Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution|null {
        return this.playTimeSeconds;
    }
    public setPlayTimeSeconds(playTimeSeconds: Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution|null) {
        this.playTimeSeconds = playTimeSeconds;
        return this;
    }
    public withPlayTimeSeconds(playTimeSeconds: Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution|null): this {
        this.playTimeSeconds = playTimeSeconds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestModelDistributions()
            .withPlayTimeSeconds(Gs2Watch.QuestQuestModelPlayTimeSecondsDistribution.fromDict(data["playTimeSeconds"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "playTimeSeconds": this.getPlayTimeSeconds()?.toDict(),
        };
    }
}
