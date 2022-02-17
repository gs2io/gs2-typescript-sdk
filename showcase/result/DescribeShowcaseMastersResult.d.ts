import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeShowcaseMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Showcase.ShowcaseMaster[] | null;
    setItems(items: Gs2Showcase.ShowcaseMaster[] | null): this;
    withItems(items: Gs2Showcase.ShowcaseMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeShowcaseMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
