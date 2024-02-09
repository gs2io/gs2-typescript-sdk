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
import * as Gs2Quest from '../model'

export default class GetProgressByUserIdResult implements IResult {
    private item: Gs2Quest.Progress|null = null;
    private questGroup: Gs2Quest.QuestGroupModel|null = null;
    private quest: Gs2Quest.QuestModel|null = null;

    public getItem(): Gs2Quest.Progress|null {
        return this.item;
    }

    public setItem(item: Gs2Quest.Progress|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Quest.Progress|null): this {
        this.item = item;
        return this;
    }

    public getQuestGroup(): Gs2Quest.QuestGroupModel|null {
        return this.questGroup;
    }

    public setQuestGroup(questGroup: Gs2Quest.QuestGroupModel|null) {
        this.questGroup = questGroup;
        return this;
    }

    public withQuestGroup(questGroup: Gs2Quest.QuestGroupModel|null): this {
        this.questGroup = questGroup;
        return this;
    }

    public getQuest(): Gs2Quest.QuestModel|null {
        return this.quest;
    }

    public setQuest(quest: Gs2Quest.QuestModel|null) {
        this.quest = quest;
        return this;
    }

    public withQuest(quest: Gs2Quest.QuestModel|null): this {
        this.quest = quest;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetProgressByUserIdResult {
        return new GetProgressByUserIdResult()
            .withItem(Gs2Quest.Progress.fromDict(data["item"]))
            .withQuestGroup(Gs2Quest.QuestGroupModel.fromDict(data["questGroup"]))
            .withQuest(Gs2Quest.QuestModel.fromDict(data["quest"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "questGroup": this.getQuestGroup()?.toDict(),
            "quest": this.getQuest()?.toDict(),
        };
    }
}
