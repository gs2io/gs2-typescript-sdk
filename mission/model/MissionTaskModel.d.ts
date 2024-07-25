import IModel from '../../core/interface/IModel';
import TargetCounterModel from './TargetCounterModel';
import VerifyAction from './VerifyAction';
import AcquireAction from './AcquireAction';
export default class MissionTaskModel implements IModel {
    private missionTaskId;
    private name;
    private metadata;
    private verifyCompleteType;
    private targetCounter;
    private verifyCompleteConsumeActions;
    private completeAcquireActions;
    private challengePeriodEventId;
    private premiseMissionTaskName;
    private counterName;
    private targetResetType;
    private targetValue;
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
    getVerifyCompleteType(): string | null;
    setVerifyCompleteType(verifyCompleteType: string | null): this;
    withVerifyCompleteType(verifyCompleteType: string | null): this;
    getTargetCounter(): TargetCounterModel | null;
    setTargetCounter(targetCounter: TargetCounterModel | null): this;
    withTargetCounter(targetCounter: TargetCounterModel | null): this;
    getVerifyCompleteConsumeActions(): VerifyAction[] | null;
    setVerifyCompleteConsumeActions(verifyCompleteConsumeActions: VerifyAction[] | null): this;
    withVerifyCompleteConsumeActions(verifyCompleteConsumeActions: VerifyAction[] | null): this;
    getCompleteAcquireActions(): AcquireAction[] | null;
    setCompleteAcquireActions(completeAcquireActions: AcquireAction[] | null): this;
    withCompleteAcquireActions(completeAcquireActions: AcquireAction[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    getPremiseMissionTaskName(): string | null;
    setPremiseMissionTaskName(premiseMissionTaskName: string | null): this;
    withPremiseMissionTaskName(premiseMissionTaskName: string | null): this;
    /** @deprecated */
    getCounterName(): string | null;
    /** @deprecated */
    setCounterName(counterName: string | null): this;
    /** @deprecated */
    withCounterName(counterName: string | null): this;
    /** @deprecated */
    getTargetResetType(): string | null;
    /** @deprecated */
    setTargetResetType(targetResetType: string | null): this;
    /** @deprecated */
    withTargetResetType(targetResetType: string | null): this;
    /** @deprecated */
    getTargetValue(): number | null;
    /** @deprecated */
    setTargetValue(targetValue: number | null): this;
    /** @deprecated */
    withTargetValue(targetValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionTaskModel | null;
    toDict(): {
        [key: string]: any;
    };
}
