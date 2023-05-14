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
import QuestQuestGroup from './QuestQuestGroup';

export default class QuestNamespace implements IModel {
    private namespaceName: string|null = null;
    private questGroup: QuestQuestGroup[]|null = null;
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getQuestGroup(): QuestQuestGroup[]|null {
        return this.questGroup;
    }
    public setQuestGroup(questGroup: QuestQuestGroup[]|null) {
        this.questGroup = questGroup;
        return this;
    }
    public withQuestGroup(questGroup: QuestQuestGroup[]|null): this {
        this.questGroup = questGroup;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestNamespace()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroup(data.questGroup ?
                data.questGroup.map((item: {[key: string]: any}) => {
                    return QuestQuestGroup.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroup": this.getQuestGroup() ?
                this.getQuestGroup()!.map((item: QuestQuestGroup) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
