import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class DescribeGradeModelsResult implements IResult {
    private items;
    getItems(): Gs2Grade.GradeModel[] | null;
    setItems(items: Gs2Grade.GradeModel[] | null): this;
    withItems(items: Gs2Grade.GradeModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeGradeModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
