import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class UpdateCurrentEventMasterResult implements IResult {
    private item;
    getItem(): Gs2Schedule.CurrentEventMaster | null;
    setItem(item: Gs2Schedule.CurrentEventMaster | null): this;
    withItem(item: Gs2Schedule.CurrentEventMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentEventMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
