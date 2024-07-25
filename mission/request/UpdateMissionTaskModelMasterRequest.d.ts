import IRequest from '../../core/interface/IRequest';
import * as Gs2Mission from '../model';
export default class UpdateMissionTaskModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private missionGroupName;
    private missionTaskName;
    private metadata;
    private description;
    private verifyCompleteType;
    private targetCounter;
    private verifyCompleteConsumeActions;
    private completeAcquireActions;
    private challengePeriodEventId;
    private premiseMissionTaskName;
    private counterName;
    private targetResetType;
    private targetValue;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getMissionGroupName(): string | null;
    setMissionGroupName(missionGroupName: string | null): this;
    withMissionGroupName(missionGroupName: string | null): this;
    getMissionTaskName(): string | null;
    setMissionTaskName(missionTaskName: string | null): this;
    withMissionTaskName(missionTaskName: string | null): this;
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
    }): UpdateMissionTaskModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
