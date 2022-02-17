import IModel from '../../core/interface/IModel';
export default class DataObject implements IModel {
    private dataObjectId;
    private name;
    private userId;
    private scope;
    private allowUserIds;
    private status;
    private generation;
    private previousGeneration;
    private createdAt;
    private updatedAt;
    getDataObjectId(): string | null;
    setDataObjectId(dataObjectId: string | null): this;
    withDataObjectId(dataObjectId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getScope(): string | null;
    setScope(scope: string | null): this;
    withScope(scope: string | null): this;
    getAllowUserIds(): string[] | null;
    setAllowUserIds(allowUserIds: string[] | null): this;
    withAllowUserIds(allowUserIds: string[] | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    getPreviousGeneration(): string | null;
    setPreviousGeneration(previousGeneration: string | null): this;
    withPreviousGeneration(previousGeneration: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DataObject | null;
    toDict(): {
        [key: string]: any;
    };
}
