import IModel from '../../core/interface/IModel';
export default class Progress implements IModel {
    private progressId;
    private uploadToken;
    private generated;
    private patternCount;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUploadToken(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, uploadToken: string | null): string | null;
    getProgressId(): string | null;
    setProgressId(progressId: string | null): this;
    withProgressId(progressId: string | null): this;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    getGenerated(): number | null;
    setGenerated(generated: number | null): this;
    withGenerated(generated: number | null): this;
    getPatternCount(): number | null;
    setPatternCount(patternCount: number | null): this;
    withPatternCount(patternCount: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Progress | null;
    toDict(): {
        [key: string]: any;
    };
}
