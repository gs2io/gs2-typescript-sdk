import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class DescribeEventsResult implements IResult {
    private items;
    getItems(): Gs2Schedule.Event[] | null;
    setItems(items: Gs2Schedule.Event[] | null): this;
    withItems(items: Gs2Schedule.Event[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEventsResult;
    toDict(): {
        [key: string]: any;
    };
}
