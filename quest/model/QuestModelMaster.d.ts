import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
import Contents from './Contents';
import ConsumeAction from './ConsumeAction';
export default class QuestModelMaster implements IModel {
    private questModelId;
    private questGroupName;
    private name;
    private description;
    private metadata;
    private contents;
    private challengePeriodEventId;
    private consumeActions;
    private failedAcquireActions;
    private premiseQuestNames;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getQuestGroupName(grn: string): string | null;
    static getQuestName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, questGroupName: string | null, questName: string | null): string | null;
    getQuestModelId(): string | null;
    setQuestModelId(questModelId: string | null): this;
    withQuestModelId(questModelId: string | null): this;
    getQuestGroupName(): string | null;
    setQuestGroupName(questGroupName: string | null): this;
    withQuestGroupName(questGroupName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getContents(): Contents[] | null;
    setContents(contents: Contents[] | null): this;
    withContents(contents: Contents[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    getConsumeActions(): ConsumeAction[] | null;
    setConsumeActions(consumeActions: ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: ConsumeAction[] | null): this;
    getFailedAcquireActions(): AcquireAction[] | null;
    setFailedAcquireActions(failedAcquireActions: AcquireAction[] | null): this;
    withFailedAcquireActions(failedAcquireActions: AcquireAction[] | null): this;
    getPremiseQuestNames(): string[] | null;
    setPremiseQuestNames(premiseQuestNames: string[] | null): this;
    withPremiseQuestNames(premiseQuestNames: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}