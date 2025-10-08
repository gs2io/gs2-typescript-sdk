import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class GetPasswordResult implements IResult {
    private item;
    getItem(): Gs2Identifier.Password | null;
    setItem(item: Gs2Identifier.Password | null): this;
    withItem(item: Gs2Identifier.Password | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPasswordResult;
    toDict(): {
        [key: string]: any;
    };
}
