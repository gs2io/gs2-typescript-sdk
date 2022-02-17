import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class DescribeRawEventsResult implements IResult {
    private items;
    getItems(): Gs2Schedule.Event[] | null;
    setItems(items: Gs2Schedule.Event[] | null): this;
    withItems(items: Gs2Schedule.Event[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRawEventsResult;
    toDict(): {
        [key: string]: any;
    };
}
