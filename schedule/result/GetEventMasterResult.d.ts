import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class GetEventMasterResult implements IResult {
    private item;
    getItem(): Gs2Schedule.EventMaster | null;
    setItem(item: Gs2Schedule.EventMaster | null): this;
    withItem(item: Gs2Schedule.EventMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
