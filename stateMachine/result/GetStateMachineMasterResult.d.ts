import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class GetStateMachineMasterResult implements IResult {
    private item;
    getItem(): Gs2StateMachine.StateMachineMaster | null;
    setItem(item: Gs2StateMachine.StateMachineMaster | null): this;
    withItem(item: Gs2StateMachine.StateMachineMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStateMachineMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
