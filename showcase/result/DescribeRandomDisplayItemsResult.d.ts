import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeRandomDisplayItemsResult implements IResult {
    private items;
    getItems(): Gs2Showcase.RandomDisplayItem[] | null;
    setItems(items: Gs2Showcase.RandomDisplayItem[] | null): this;
    withItems(items: Gs2Showcase.RandomDisplayItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRandomDisplayItemsResult;
    toDict(): {
        [key: string]: any;
    };
}
