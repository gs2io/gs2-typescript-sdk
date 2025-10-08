import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeCounterModelsResult implements IResult {
    private items;
    getItems(): Gs2Mission.CounterModel[] | null;
    setItems(items: Gs2Mission.CounterModel[] | null): this;
    withItems(items: Gs2Mission.CounterModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCounterModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
