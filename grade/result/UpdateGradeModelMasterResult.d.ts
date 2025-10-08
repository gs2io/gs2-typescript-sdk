import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class UpdateGradeModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Grade.GradeModelMaster | null;
    setItem(item: Gs2Grade.GradeModelMaster | null): this;
    withItem(item: Gs2Grade.GradeModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateGradeModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
