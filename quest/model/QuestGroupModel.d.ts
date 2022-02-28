import IModel from '../../core/interface/IModel';
import QuestModel from './QuestModel';
export default class QuestGroupModel implements IModel {
    private questGroupModelId;
    private name;
    private metadata;
    private quests;
    private challengePeriodEventId;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getQuestGroupName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, questGroupName: string | null): string | null;
    getQuestGroupModelId(): string | null;
    setQuestGroupModelId(questGroupModelId: string | null): this;
    withQuestGroupModelId(questGroupModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getQuests(): QuestModel[] | null;
    setQuests(quests: QuestModel[] | null): this;
    withQuests(quests: QuestModel[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestGroupModel | null;
    toDict(): {
        [key: string]: any;
    };
}
