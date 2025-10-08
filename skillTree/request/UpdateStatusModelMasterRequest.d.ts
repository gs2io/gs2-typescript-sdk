import IRequest from '../../core/interface/IRequest';
import * as Gs2SkillTree from '../model';
export default class UpdateStatusModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private nodeModelName;
    private description;
    private metadata;
    private releaseConsumeActions;
    private restrainReturnRate;
    private premiseNodeNames;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getNodeModelName(): string | null;
    setNodeModelName(nodeModelName: string | null): this;
    withNodeModelName(nodeModelName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getReleaseConsumeActions(): Gs2SkillTree.ConsumeAction[] | null;
    setReleaseConsumeActions(releaseConsumeActions: Gs2SkillTree.ConsumeAction[] | null): this;
    withReleaseConsumeActions(releaseConsumeActions: Gs2SkillTree.ConsumeAction[] | null): this;
    getRestrainReturnRate(): number | null;
    setRestrainReturnRate(restrainReturnRate: number | null): this;
    withRestrainReturnRate(restrainReturnRate: number | null): this;
    getPremiseNodeNames(): string[] | null;
    setPremiseNodeNames(premiseNodeNames: string[] | null): this;
    withPremiseNodeNames(premiseNodeNames: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStatusModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
