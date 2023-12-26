import IModel from '../../core/interface/IModel';
export default class Status implements IModel {
    private statusId;
    private gradeName;
    private userId;
    private propertyId;
    private gradeValue;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getGradeName(grn: string): string | null;
    static getPropertyId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, gradeName: string | null, propertyId: string | null): string | null;
    getStatusId(): string | null;
    setStatusId(statusId: string | null): this;
    withStatusId(statusId: string | null): this;
    getGradeName(): string | null;
    setGradeName(gradeName: string | null): this;
    withGradeName(gradeName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getGradeValue(): number | null;
    setGradeValue(gradeValue: number | null): this;
    withGradeValue(gradeValue: number | null): this;
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
    }): Status | null;
    toDict(): {
        [key: string]: any;
    };
}
