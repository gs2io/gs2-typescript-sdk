import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class DescribeGradeModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Grade.GradeModelMaster[] | null;
    setItems(items: Gs2Grade.GradeModelMaster[] | null): this;
    withItems(items: Gs2Grade.GradeModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGradeModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
