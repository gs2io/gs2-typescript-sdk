import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetCounterModelResult implements IResult {
    private item;
    getItem(): Gs2Mission.CounterModel | null;
    setItem(item: Gs2Mission.CounterModel | null): this;
    withItem(item: Gs2Mission.CounterModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCounterModelResult;
    toDict(): {
        [key: string]: any;
    };
}
