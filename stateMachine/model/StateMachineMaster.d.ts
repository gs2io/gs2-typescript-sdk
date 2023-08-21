import IModel from '../../core/interface/IModel';
export default class StateMachineMaster implements IModel {
    private stateMachineId;
    private mainStateMachineName;
    private payload;
    private version;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getVersion(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, version: string | null): string | null;
    getStateMachineId(): string | null;
    setStateMachineId(stateMachineId: string | null): this;
    withStateMachineId(stateMachineId: string | null): this;
    getMainStateMachineName(): string | null;
    setMainStateMachineName(mainStateMachineName: string | null): this;
    withMainStateMachineName(mainStateMachineName: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    getVersion(): number | null;
    setVersion(version: number | null): this;
    withVersion(version: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StateMachineMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
