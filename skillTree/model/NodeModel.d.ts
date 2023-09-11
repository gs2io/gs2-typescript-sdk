import IModel from '../../core/interface/IModel';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
export default class NodeModel implements IModel {
    private nodeModelId;
    private name;
    private metadata;
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
    getReleaseConsumeActions(): ConsumeAction[] | null;
    setReleaseConsumeActions(releaseConsumeActions: ConsumeAction[] | null): this;
    withReleaseConsumeActions(releaseConsumeActions: ConsumeAction[] | null): this;
    getReturnAcquireActions(): AcquireAction[] | null;
    setReturnAcquireActions(returnAcquireActions: AcquireAction[] | null): this;
    withReturnAcquireActions(returnAcquireActions: AcquireAction[] | null): this;
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
