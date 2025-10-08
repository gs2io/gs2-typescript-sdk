import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class DescribeRecoverValueTableMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Stamina.RecoverValueTableMaster[] | null;
    setItems(items: Gs2Stamina.RecoverValueTableMaster[] | null): this;
    withItems(items: Gs2Stamina.RecoverValueTableMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRecoverValueTableMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
