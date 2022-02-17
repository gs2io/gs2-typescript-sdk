import IModel from '../../core/interface/IModel';
export default class QuestGroupModelMaster implements IModel {
    private questGroupModelId;
    private name;
    private description;
    private metadata;
    private challengePeriodEventId;
    private createdAt;
    private updatedAt;
    getQuestGroupModelId(): string | null;
    setQuestGroupModelId(questGroupModelId: string | null): this;
    withQuestGroupModelId(questGroupModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestGroupModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
