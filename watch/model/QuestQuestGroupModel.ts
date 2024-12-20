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
import QuestQuestGroupModelStatistics from './QuestQuestGroupModelStatistics';
import QuestQuestGroupModelQuestDistributionStatistics from './QuestQuestGroupModelQuestDistributionStatistics';
import QuestQuestGroupModelQuestDistributionSegment from './QuestQuestGroupModelQuestDistributionSegment';
import QuestQuestGroupModelQuestDistribution from './QuestQuestGroupModelQuestDistribution';
import QuestQuestGroupModelDistributions from './QuestQuestGroupModelDistributions';
import QuestQuestModelStatistics from './QuestQuestModelStatistics';
import QuestQuestModelPlayTimeSecondsDistributionStatistics from './QuestQuestModelPlayTimeSecondsDistributionStatistics';
import QuestQuestModelPlayTimeSecondsDistributionSegment from './QuestQuestModelPlayTimeSecondsDistributionSegment';
import QuestQuestModelPlayTimeSecondsDistribution from './QuestQuestModelPlayTimeSecondsDistribution';
import QuestQuestModelDistributions from './QuestQuestModelDistributions';
import QuestQuestModel from './QuestQuestModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:quest:namespace:{namespaceName}:questGroupModel:{questGroupName}";

export default class QuestQuestGroupModel implements IModel {
    private questGroupModelId: string|null = null;
    private questGroupName: string|null = null;
    private statistics: Gs2Watch.QuestQuestGroupModelStatistics|null = null;
    private distributions: Gs2Watch.QuestQuestGroupModelDistributions|null = null;
    private questModels: Gs2Watch.QuestQuestModel[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
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
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
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
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
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
    public getQuestGroupName(): string|null {
        return this.questGroupName;
    }
    public setQuestGroupName(questGroupName: string|null) {
        this.questGroupName = questGroupName;
        return this;
    }
    public withQuestGroupName(questGroupName: string|null): this {
        this.questGroupName = questGroupName;
        return this;
    }
    public getStatistics(): Gs2Watch.QuestQuestGroupModelStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: Gs2Watch.QuestQuestGroupModelStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: Gs2Watch.QuestQuestGroupModelStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): Gs2Watch.QuestQuestGroupModelDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: Gs2Watch.QuestQuestGroupModelDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: Gs2Watch.QuestQuestGroupModelDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getQuestModels(): Gs2Watch.QuestQuestModel[]|null {
        return this.questModels;
    }
    public setQuestModels(questModels: Gs2Watch.QuestQuestModel[]|null) {
        this.questModels = questModels;
        return this;
    }
    public withQuestModels(questModels: Gs2Watch.QuestQuestModel[]|null): this {
        this.questModels = questModels;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestGroupModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModel()
            .withQuestGroupModelId(data["questGroupModelId"])
            .withQuestGroupName(data["questGroupName"])
            .withStatistics(Gs2Watch.QuestQuestGroupModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.QuestQuestGroupModelDistributions.fromDict(data["distributions"]))
            .withQuestModels(data.questModels ?
                data.questModels.map((item: {[key: string]: any}) => {
                    return Gs2Watch.QuestQuestModel.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "questGroupModelId": this.getQuestGroupModelId(),
            "questGroupName": this.getQuestGroupName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "questModels": this.getQuestModels() ?
                this.getQuestModels()!.map((item: Gs2Watch.QuestQuestModel) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
