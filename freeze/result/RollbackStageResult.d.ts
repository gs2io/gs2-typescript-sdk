import IResult from '../../core/interface/IResult';
import * as Gs2Freeze from '../model';
export default class RollbackStageResult implements IResult {
    private item;
    getItem(): Gs2Freeze.Stage | null;
    setItem(item: Gs2Freeze.Stage | null): this;
    withItem(item: Gs2Freeze.Stage | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RollbackStageResult;
    toDict(): {
        [key: string]: any;
    };
}
