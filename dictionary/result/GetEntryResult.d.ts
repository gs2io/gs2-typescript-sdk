import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class GetEntryResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.Entry | null;
    setItem(item: Gs2Dictionary.Entry | null): this;
    withItem(item: Gs2Dictionary.Entry | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEntryResult;
    toDict(): {
        [key: string]: any;
    };
}
