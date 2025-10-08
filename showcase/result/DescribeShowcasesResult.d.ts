import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeShowcasesResult implements IResult {
    private items;
    getItems(): Gs2Showcase.Showcase[] | null;
    setItems(items: Gs2Showcase.Showcase[] | null): this;
    withItems(items: Gs2Showcase.Showcase[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeShowcasesResult;
    toDict(): {
        [key: string]: any;
    };
}
