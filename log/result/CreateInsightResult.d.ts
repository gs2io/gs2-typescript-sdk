import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class CreateInsightResult implements IResult {
    private item;
    getItem(): Gs2Log.Insight | null;
    setItem(item: Gs2Log.Insight | null): this;
    withItem(item: Gs2Log.Insight | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateInsightResult;
    toDict(): {
        [key: string]: any;
    };
}
