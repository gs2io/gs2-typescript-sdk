import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestQuestModel implements IModel {
    private questModelId;
    private questName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getQuestGroupName(grn: string): string | null;
    static getQuestName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, questGroupName: string | null, questName: string | null): string | null;
    getQuestModelId(): string | null;
    setQuestModelId(questModelId: string | null): this;
    withQuestModelId(questModelId: string | null): this;
    getQuestName(): string | null;
    setQuestName(questName: string | null): this;
    withQuestName(questName: string | null): this;
    getStatistics(): Gs2Watch.QuestQuestModelStatistics | null;
    setStatistics(statistics: Gs2Watch.QuestQuestModelStatistics | null): this;
    withStatistics(statistics: Gs2Watch.QuestQuestModelStatistics | null): this;
    getDistributions(): Gs2Watch.QuestQuestModelDistributions | null;
    setDistributions(distributions: Gs2Watch.QuestQuestModelDistributions | null): this;
    withDistributions(distributions: Gs2Watch.QuestQuestModelDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestModel | null;
    toDict(): {
        [key: string]: any;
    };
}
