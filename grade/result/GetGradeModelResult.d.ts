import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class GetGradeModelResult implements IResult {
    private item;
    getItem(): Gs2Grade.GradeModel | null;
    setItem(item: Gs2Grade.GradeModel | null): this;
    withItem(item: Gs2Grade.GradeModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGradeModelResult;
    toDict(): {
        [key: string]: any;
    };
}
