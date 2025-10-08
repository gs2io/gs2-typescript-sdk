import IResult from '../../core/interface/IResult';
import * as Gs2Freeze from '../model';
export default class GetOutputResult implements IResult {
    private item;
    getItem(): Gs2Freeze.Output | null;
    setItem(item: Gs2Freeze.Output | null): this;
    withItem(item: Gs2Freeze.Output | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetOutputResult;
    toDict(): {
        [key: string]: any;
    };
}
