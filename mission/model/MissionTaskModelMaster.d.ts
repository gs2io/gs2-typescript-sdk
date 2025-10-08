import IModel from '../../core/interface/IModel';
import * as Gs2Mission from '../../mission/model';
export default class MissionTaskModelMaster implements IModel {
    private missionTaskId;
    private name;
    private metadata;
    private description;
    private verifyCompleteType;
    private targetCounter;
    private verifyCompleteConsumeActions;
    private completeAcquireActions;
    private challengePeriodEventId;
    private premiseMissionTaskName;
    private createdAt;
    private updatedAt;
    private revision;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getVerifyCompleteType(): string | null;
    setVerifyCompleteType(verifyCompleteType: string | null): this;
    withVerifyCompleteType(verifyCompleteType: string | null): this;
    getTargetCounter(): Gs2Mission.TargetCounterModel | null;
    setTargetCounter(targetCounter: Gs2Mission.TargetCounterModel | null): this;
    withTargetCounter(targetCounter: Gs2Mission.TargetCounterModel | null): this;
    getVerifyCompleteConsumeActions(): Gs2Mission.VerifyAction[] | null;
    setVerifyCompleteConsumeActions(verifyCompleteConsumeActions: Gs2Mission.VerifyAction[] | null): this;
    withVerifyCompleteConsumeActions(verifyCompleteConsumeActions: Gs2Mission.VerifyAction[] | null): this;
    getCompleteAcquireActions(): Gs2Mission.AcquireAction[] | null;
    setCompleteAcquireActions(completeAcquireActions: Gs2Mission.AcquireAction[] | null): this;
    withCompleteAcquireActions(completeAcquireActions: Gs2Mission.AcquireAction[] | null): this;
    getChallengePeriodEventId(): string | null;
    setChallengePeriodEventId(challengePeriodEventId: string | null): this;
    withChallengePeriodEventId(challengePeriodEventId: string | null): this;
    getPremiseMissionTaskName(): string | null;
    setPremiseMissionTaskName(premiseMissionTaskName: string | null): this;
    withPremiseMissionTaskName(premiseMissionTaskName: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
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
    }): MissionTaskModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
