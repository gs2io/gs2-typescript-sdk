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
import QuestQuestModelStatistics from './QuestQuestModelStatistics';
import QuestQuestModelPlayTimeSecondsDistributionStatistics from './QuestQuestModelPlayTimeSecondsDistributionStatistics';
import QuestQuestModelPlayTimeSecondsDistributionSegment from './QuestQuestModelPlayTimeSecondsDistributionSegment';
import QuestQuestModelPlayTimeSecondsDistribution from './QuestQuestModelPlayTimeSecondsDistribution';
import QuestQuestModelDistributions from './QuestQuestModelDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:quest:namespace:{namespaceName}:questGroupModel:{questGroupName}:questModel:{questName}";

export default class QuestQuestModel implements IModel {
    private questModelId: string|null = null;
    private questName: string|null = null;
    private statistics: Gs2Watch.QuestQuestModelStatistics|null = null;
    private distributions: Gs2Watch.QuestQuestModelDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDay(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getQuestName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '(.*)')
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
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getQuestGroupName(grn) == null || this.getQuestGroupName(grn) === '') {
            return false;
        }
        if (this.getQuestName(grn) == null || this.getQuestName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        year: string|null,
        month: string|null,
        day: string|null,
        namespaceName: string|null,
        questGroupName: string|null,
        questName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{questGroupName}', questGroupName ?? '')
            .replace('{questName}', questName ?? '');
    }
    public getQuestModelId(): string|null {
        return this.questModelId;
    }
    public setQuestModelId(questModelId: string|null) {
        this.questModelId = questModelId;
        return this;
    }
    public withQuestModelId(questModelId: string|null): this {
        this.questModelId = questModelId;
        return this;
    }
    public getQuestName(): string|null {
        return this.questName;
    }
    public setQuestName(questName: string|null) {
        this.questName = questName;
        return this;
    }
    public withQuestName(questName: string|null): this {
        this.questName = questName;
        return this;
    }
    public getStatistics(): Gs2Watch.QuestQuestModelStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.QuestQuestModelStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.QuestQuestModelStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.QuestQuestModelDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.QuestQuestModelDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.QuestQuestModelDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestModel()
            .withQuestModelId(data["questModelId"])
            .withQuestName(data["questName"])
            .withStatistics(Gs2Watch.QuestQuestModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.QuestQuestModelDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "questModelId": this.getQuestModelId(),
            "questName": this.getQuestName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
