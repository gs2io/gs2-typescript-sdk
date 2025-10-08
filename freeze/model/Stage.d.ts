import IModel from '../../core/interface/IModel';
export default class Stage implements IModel {
    private stageId;
    private name;
    private sourceStageName;
    private sortNumber;
    private status;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getStageName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, stageName: string | null): string | null;
    getStageId(): string | null;
    setStageId(stageId: string | null): this;
    withStageId(stageId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getSourceStageName(): string | null;
    setSourceStageName(sourceStageName: string | null): this;
    withSourceStageName(sourceStageName: string | null): this;
    getSortNumber(): number | null;
    setSortNumber(sortNumber: number | null): this;
    withSortNumber(sortNumber: number | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
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
    }): Stage | null;
    toDict(): {
        [key: string]: any;
    };
}
