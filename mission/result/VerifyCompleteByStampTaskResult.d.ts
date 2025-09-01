import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class VerifyCompleteByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Mission.Complete | null;
    setItem(item: Gs2Mission.Complete | null): this;
    withItem(item: Gs2Mission.Complete | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCompleteByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
