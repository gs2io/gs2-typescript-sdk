import IModel from '../../core/interface/IModel';
import * as Gs2StateMachine from '../../stateMachine/model';
export default class Event implements IModel {
    private eventType;
    private changeStateEvent;
    private emitEvent;
    getEventType(): string | null;
    setEventType(eventType: string | null): this;
    withEventType(eventType: string | null): this;
    getChangeStateEvent(): Gs2StateMachine.ChangeStateEvent | null;
    setChangeStateEvent(changeStateEvent: Gs2StateMachine.ChangeStateEvent | null): this;
    withChangeStateEvent(changeStateEvent: Gs2StateMachine.ChangeStateEvent | null): this;
    getEmitEvent(): Gs2StateMachine.EmitEvent | null;
    setEmitEvent(emitEvent: Gs2StateMachine.EmitEvent | null): this;
    withEmitEvent(emitEvent: Gs2StateMachine.EmitEvent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Event | null;
    toDict(): {
        [key: string]: any;
    };
}
