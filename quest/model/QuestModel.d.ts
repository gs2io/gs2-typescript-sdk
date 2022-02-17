import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
import Contents from './Contents';
import ConsumeAction from './ConsumeAction';
export default class QuestModel implements IModel {
    private questModelId;
    private name;
    private metadata;
    private contents;
    private challengePeriodEventId;
    private consumeActions;
    private failedAcquireActions;
    private premiseQuestNames;
    getQuestModelId(): string | null;
    setQuestModelId(questModelId: string | null): this;
    withQuestModelId(questModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
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
    static fromDict(data: {
        [key: string]: any;
    }): QuestModel | null;
    toDict(): {
        [key: string]: any;
    };
}
