import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeCounterModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Mission.CounterModelMaster[] | null;
    setItems(items: Gs2Mission.CounterModelMaster[] | null): this;
    withItems(items: Gs2Mission.CounterModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCounterModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
