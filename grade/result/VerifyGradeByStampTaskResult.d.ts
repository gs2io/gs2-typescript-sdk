import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class VerifyGradeByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Grade.Status | null;
    setItem(item: Gs2Grade.Status | null): this;
    withItem(item: Gs2Grade.Status | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGradeByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
