import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class CreateUserResult implements IResult {
    private item;
    getItem(): Gs2Identifier.User | null;
    setItem(item: Gs2Identifier.User | null): this;
    withItem(item: Gs2Identifier.User | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateUserResult;
    toDict(): {
        [key: string]: any;
    };
}
