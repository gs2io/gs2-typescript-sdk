import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class CreateGradeModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Grade.GradeModelMaster | null;
    setItem(item: Gs2Grade.GradeModelMaster | null): this;
    withItem(item: Gs2Grade.GradeModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateGradeModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
