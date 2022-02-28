import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class MissionTaskModel implements IModel {
    private missionTaskId;
    private name;
    private metadata;
    private counterName;
    private targetValue;
    private completeAcquireActions;
    private challengePeriodEventId;
    private premiseMissionTaskName;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getMissionGroupName(grn: string): string | null;
    static getMissionTaskName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, missionGroupName: string | null, missionTaskName: string | null): string | null;
    getMissionTaskId(): string | null;
    setMissionTaskId(missionTaskId: string | null): this;
    withMissionTaskId(missionTaskId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getTargetValue(): number | null;
    setTargetValue(targetValue: number | null): this;
    withTargetValue(targetValue: number | null): this;
    getCompleteAcquireActions(): AcquireAction[] | null;
    setCompleteAcquireActions(completeAcquireActions: AcquireAction[] | null): this;
    withCompleteAcquireActions(completeAcquireActions: AcquireAction[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    getPremiseMissionTaskName(): string | null;
    setPremiseMissionTaskName(premiseMissionTaskName: string | null): this;
    withPremiseMissionTaskName(premiseMissionTaskName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionTaskModel | null;
    toDict(): {
        [key: string]: any;
    };
}
