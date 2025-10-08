import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class GetOutputResult implements IResult {
    private item;
    getItem(): Gs2News.Output | null;
    setItem(item: Gs2News.Output | null): this;
    withItem(item: Gs2News.Output | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetOutputResult;
    toDict(): {
        [key: string]: any;
    };
}
