import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class ExitStateMachineResult implements IResult {
    private item;
    getItem(): Gs2StateMachine.Status | null;
    setItem(item: Gs2StateMachine.Status | null): this;
    withItem(item: Gs2StateMachine.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExitStateMachineResult;
    toDict(): {
        [key: string]: any;
    };
}