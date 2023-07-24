import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2StateMachine.Namespace | null;
    setItem(item: Gs2StateMachine.Namespace | null): this;
    withItem(item: Gs2StateMachine.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
