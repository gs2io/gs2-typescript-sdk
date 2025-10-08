import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class GetProjectTokenByIdentifierResult implements IResult {
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
    }): GetProjectTokenByIdentifierResult;
    toDict(): {
        [key: string]: any;
    };
}
