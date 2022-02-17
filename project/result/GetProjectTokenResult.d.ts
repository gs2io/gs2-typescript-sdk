import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Project from '../model';
export declare class GetProjectTokenResult implements IResult {
    private item;
    private ownerId;
    private projectToken;
    getItem(): Gs2Project.Project | null;
    setItem(item: Gs2Project.Project | null): this;
    withItem(item: Gs2Project.Project | null): this;
    getOwnerId(): string | null;
    setOwnerId(ownerId: string | null): this;
    withOwnerId(ownerId: string | null): this;
    getProjectToken(): string | null;
    setProjectToken(projectToken: string | null): this;
    withProjectToken(projectToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProjectTokenResult;
    toDict(): {
        [key: string]: any;
    };
}
