import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class StartStateMachineByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2StateMachine.Status | null;
    setItem(item: Gs2StateMachine.Status | null): this;
    withItem(item: Gs2StateMachine.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StartStateMachineByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
