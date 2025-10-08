import IModel from '../../core/interface/IModel';
import * as Gs2SkillTree from '../../skillTree/model';
export default class NodeModel implements IModel {
    private nodeModelId;
    private name;
    private metadata;
    private releaseVerifyActions;
    private releaseConsumeActions;
    private returnAcquireActions;
    private restrainReturnRate;
    private premiseNodeNames;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getNodeModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, nodeModelName: string | null): string | null;
    getNodeModelId(): string | null;
    setNodeModelId(nodeModelId: string | null): this;
    withNodeModelId(nodeModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getReleaseVerifyActions(): Gs2SkillTree.VerifyAction[] | null;
    setReleaseVerifyActions(releaseVerifyActions: Gs2SkillTree.VerifyAction[] | null): this;
    withReleaseVerifyActions(releaseVerifyActions: Gs2SkillTree.VerifyAction[] | null): this;
    getReleaseConsumeActions(): Gs2SkillTree.ConsumeAction[] | null;
    setReleaseConsumeActions(releaseConsumeActions: Gs2SkillTree.ConsumeAction[] | null): this;
    withReleaseConsumeActions(releaseConsumeActions: Gs2SkillTree.ConsumeAction[] | null): this;
    getReturnAcquireActions(): Gs2SkillTree.AcquireAction[] | null;
    setReturnAcquireActions(returnAcquireActions: Gs2SkillTree.AcquireAction[] | null): this;
    withReturnAcquireActions(returnAcquireActions: Gs2SkillTree.AcquireAction[] | null): this;
    getRestrainReturnRate(): number | null;
    setRestrainReturnRate(restrainReturnRate: number | null): this;
    withRestrainReturnRate(restrainReturnRate: number | null): this;
    getPremiseNodeNames(): string[] | null;
    setPremiseNodeNames(premiseNodeNames: string[] | null): this;
    withPremiseNodeNames(premiseNodeNames: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NodeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
