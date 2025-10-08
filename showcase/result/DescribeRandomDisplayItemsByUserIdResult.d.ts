import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeRandomDisplayItemsByUserIdResult implements IResult {
    private items;
    getItems(): Gs2Showcase.RandomDisplayItem[] | null;
    setItems(items: Gs2Showcase.RandomDisplayItem[] | null): this;
    withItems(items: Gs2Showcase.RandomDisplayItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRandomDisplayItemsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
