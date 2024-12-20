import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class QuestQuestGroupModel implements IModel {
    private questGroupModelId;
    private questGroupName;
    private statistics;
    private distributions;
    private questModels;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getQuestGroupName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, questGroupName: string | null): string | null;
    getQuestGroupModelId(): string | null;
    setQuestGroupModelId(questGroupModelId: string | null): this;
    withQuestGroupModelId(questGroupModelId: string | null): this;
    getQuestGroupName(): string | null;
    setQuestGroupName(questGroupName: string | null): this;
    withQuestGroupName(questGroupName: string | null): this;
    getStatistics(): Gs2Watch.QuestQuestGroupModelStatistics | null;
    setStatistics(statistics: Gs2Watch.QuestQuestGroupModelStatistics | null): this;
    withStatistics(statistics: Gs2Watch.QuestQuestGroupModelStatistics | null): this;
    getDistributions(): Gs2Watch.QuestQuestGroupModelDistributions | null;
    setDistributions(distributions: Gs2Watch.QuestQuestGroupModelDistributions | null): this;
    withDistributions(distributions: Gs2Watch.QuestQuestGroupModelDistributions | null): this;
    getQuestModels(): Gs2Watch.QuestQuestModel[] | null;
    setQuestModels(questModels: Gs2Watch.QuestQuestModel[] | null): this;
    withQuestModels(questModels: Gs2Watch.QuestQuestModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModel | null;
    toDict(): {
        [key: string]: any;
    };
}
