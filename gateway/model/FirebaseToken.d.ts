import IModel from '../../core/interface/IModel';
export default class FirebaseToken implements IModel {
    private firebaseTokenId;
    private userId;
    private token;
    private createdAt;
    private updatedAt;
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
    static fromDict(data: {
        [key: string]: any;
    }): FirebaseToken | null;
    toDict(): {
        [key: string]: any;
    };
}
