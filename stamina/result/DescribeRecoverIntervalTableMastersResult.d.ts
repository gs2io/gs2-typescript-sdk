import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class DescribeRecoverIntervalTableMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Stamina.RecoverIntervalTableMaster[] | null;
    setItems(items: Gs2Stamina.RecoverIntervalTableMaster[] | null): this;
    withItems(items: Gs2Stamina.RecoverIntervalTableMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRecoverIntervalTableMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
