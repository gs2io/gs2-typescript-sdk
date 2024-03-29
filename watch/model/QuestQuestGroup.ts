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
import QuestQuestDurationSeconds from './QuestQuestDurationSeconds';
import QuestQuestStatistics from './QuestQuestStatistics';
import QuestQuest from './QuestQuest';

export default class QuestQuestGroup implements IModel {
    private name: string|null = null;
    private quest: QuestQuest[]|null = null;
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getQuest(): QuestQuest[]|null {
        return this.quest;
    }
    public setQuest(quest: QuestQuest[]|null) {
        this.quest = quest;
        return this;
    }
    public withQuest(quest: QuestQuest[]|null): this {
        this.quest = quest;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestGroup|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroup()
            .withName(data["name"])
            .withQuest(data.quest ?
                data.quest.map((item: {[key: string]: any}) => {
                    return QuestQuest.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "quest": this.getQuest() ?
                this.getQuest()!.map((item: QuestQuest) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
