import IModel from '../../core/interface/IModel';
export default class FirebaseToken implements IModel {
    private firebaseTokenId;
    private userId;
    private token;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null): string | null;
    getFirebaseTokenId(): string | null;
    setFirebaseTokenId(firebaseTokenId: string | null): this;
    withFirebaseTokenId(firebaseTokenId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getToken(): string | null;
    setToken(token: string | null): this;
    withToken(token: string | null): this;
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
    }): FirebaseToken | null;
    toDict(): {
        [key: string]: any;
    };
}
