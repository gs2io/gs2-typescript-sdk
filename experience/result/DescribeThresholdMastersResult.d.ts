import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class DescribeThresholdMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Experience.ThresholdMaster[] | null;
    setItems(items: Gs2Experience.ThresholdMaster[] | null): this;
    withItems(items: Gs2Experience.ThresholdMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeThresholdMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
