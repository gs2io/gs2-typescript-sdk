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
import QuestQuestGroupModelQuestDistributionStatistics from './QuestQuestGroupModelQuestDistributionStatistics';
import QuestQuestGroupModelQuestDistributionSegment from './QuestQuestGroupModelQuestDistributionSegment';
import QuestQuestGroupModelQuestDistribution from './QuestQuestGroupModelQuestDistribution';

export default class QuestQuestGroupModelDistributions implements IModel {
    private quest: Gs2Watch.QuestQuestGroupModelQuestDistribution|null = null;
    public getQuest(): Gs2Watch.QuestQuestGroupModelQuestDistribution|null {
        return this.quest;
    }
    public setQuest(quest: Gs2Watch.QuestQuestGroupModelQuestDistribution|null) {
        this.quest = quest;
        return this;
    }
    public withQuest(quest: Gs2Watch.QuestQuestGroupModelQuestDistribution|null): this {
        this.quest = quest;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestGroupModelDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModelDistributions()
            .withQuest(Gs2Watch.QuestQuestGroupModelQuestDistribution.fromDict(data["quest"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "quest": this.getQuest()?.toDict(),
        };
    }
}
