import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class GetLikeResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.Like | null;
    setItem(item: Gs2Dictionary.Like | null): this;
    withItem(item: Gs2Dictionary.Like | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLikeResult;
    toDict(): {
        [key: string]: any;
    };
}
