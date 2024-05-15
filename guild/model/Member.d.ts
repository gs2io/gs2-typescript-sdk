import IModel from '../../core/interface/IModel';
export default class Member implements IModel {
    private userId;
    private roleName;
    private joinedAt;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRoleName(): string | null;
    setRoleName(roleName: string | null): this;
    withRoleName(roleName: string | null): this;
    getJoinedAt(): number | null;
    setJoinedAt(joinedAt: number | null): this;
    withJoinedAt(joinedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Member | null;
    toDict(): {
        [key: string]: any;
    };
}
