import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DecreaseByStampTaskResult implements IResult {
    private item;
    private changedCompletes;
    private newContextStack;
    getItem(): Gs2Mission.Counter | null;
    setItem(item: Gs2Mission.Counter | null): this;
    withItem(item: Gs2Mission.Counter | null): this;
    getChangedCompletes(): Gs2Mission.Complete[] | null;
    setChangedCompletes(changedCompletes: Gs2Mission.Complete[] | null): this;
    withChangedCompletes(changedCompletes: Gs2Mission.Complete[] | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecreaseByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
