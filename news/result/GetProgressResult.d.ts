import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class GetProgressResult implements IResult {
    private item;
    getItem(): Gs2News.Progress | null;
    setItem(item: Gs2News.Progress | null): this;
    withItem(item: Gs2News.Progress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProgressResult;
    toDict(): {
        [key: string]: any;
    };
}
