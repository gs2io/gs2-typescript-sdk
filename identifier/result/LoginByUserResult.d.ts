import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class LoginByUserResult implements IResult {
    private item;
    getItem(): Gs2Identifier.ProjectToken | null;
    setItem(item: Gs2Identifier.ProjectToken | null): this;
    withItem(item: Gs2Identifier.ProjectToken | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LoginByUserResult;
    toDict(): {
        [key: string]: any;
    };
}
