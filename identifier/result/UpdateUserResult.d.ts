import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class UpdateUserResult implements IResult {
    private item;
    getItem(): Gs2Identifier.User | null;
    setItem(item: Gs2Identifier.User | null): this;
    withItem(item: Gs2Identifier.User | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateUserResult;
    toDict(): {
        [key: string]: any;
    };
}
