import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeRandomShowcaseMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Showcase.RandomShowcaseMaster[] | null;
    setItems(items: Gs2Showcase.RandomShowcaseMaster[] | null): this;
    withItems(items: Gs2Showcase.RandomShowcaseMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRandomShowcaseMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
