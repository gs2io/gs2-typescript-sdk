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
import AcquireAction from './AcquireAction';
import Contents from './Contents';
import ConsumeAction from './ConsumeAction';
import QuestModel from './QuestModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}";

export default class QuestGroupModel implements IModel {
    private questGroupModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private quests: QuestModel[]|null = null;
    private challengePeriodEventId: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getQuestGroupName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getQuestGroupName(grn) == null || this.getQuestGroupName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        questGroupName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{questGroupName}', questGroupName ?? '');
    }

    public getQuestGroupModelId(): string|null {
        return this.questGroupModelId;
    }

    public setQuestGroupModelId(questGroupModelId: string|null) {
        this.questGroupModelId = questGroupModelId;
        return this;
    }

    public withQuestGroupModelId(questGroupModelId: string|null): this {
        this.questGroupModelId = questGroupModelId;
        return this;
    }

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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getQuests(): QuestModel[]|null {
        return this.quests;
    }

    public setQuests(quests: QuestModel[]|null) {
        this.quests = quests;
        return this;
    }

    public withQuests(quests: QuestModel[]|null): this {
        this.quests = quests;
        return this;
    }

    public getChallengePeriodEventId(): string|null {
        return this.challengePeriodEventId;
    }

    public setChallengePeriodEventId(challengePeriodEventId: string|null) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }

    public withChallengePeriodEventId(challengePeriodEventId: string|null): this {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestGroupModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestGroupModel()
            .withQuestGroupModelId(data["questGroupModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withQuests(data.quests ?
                data.quests.map((item: {[key: string]: any}) => {
                    return QuestModel.fromDict(item);
                }
            ) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "questGroupModelId": this.getQuestGroupModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "quests": this.getQuests() ?
                this.getQuests()!.map((item: QuestModel) => {
                    return item.toDict();
                }
            ) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    }
}
