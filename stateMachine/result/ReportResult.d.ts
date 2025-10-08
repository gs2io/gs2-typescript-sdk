import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class ReportResult implements IResult {
    private item;
    getItem(): Gs2StateMachine.Status | null;
    setItem(item: Gs2StateMachine.Status | null): this;
    withItem(item: Gs2StateMachine.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReportResult;
    toDict(): {
        [key: string]: any;
    };
}
