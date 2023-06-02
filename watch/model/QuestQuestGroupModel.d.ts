import IModel from '../../core/interface/IModel';
import QuestQuestGroupModelStatistics from './QuestQuestGroupModelStatistics';
import QuestQuestGroupModelDistributions from './QuestQuestGroupModelDistributions';
import QuestQuestModel from './QuestQuestModel';
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
    getStatistics(): QuestQuestGroupModelStatistics | null;
    setStatistics(statistics: QuestQuestGroupModelStatistics | null): this;
    withStatistics(statistics: QuestQuestGroupModelStatistics | null): this;
    getDistributions(): QuestQuestGroupModelDistributions | null;
    setDistributions(distributions: QuestQuestGroupModelDistributions | null): this;
    withDistributions(distributions: QuestQuestGroupModelDistributions | null): this;
    getQuestModels(): QuestQuestModel[] | null;
    setQuestModels(questModels: QuestQuestModel[] | null): this;
    withQuestModels(questModels: QuestQuestModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroupModel | null;
    toDict(): {
        [key: string]: any;
    };
}
