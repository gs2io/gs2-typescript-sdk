import IModel from '../../core/interface/IModel';
import ChangeStateEvent from './ChangeStateEvent';
import EmitEvent from './EmitEvent';
export default class Event implements IModel {
    private eventType;
    private changeStateEvent;
    private emitEvent;
    getEventType(): string | null;
    setEventType(eventType: string | null): this;
    withEventType(eventType: string | null): this;
    getChangeStateEvent(): ChangeStateEvent | null;
    setChangeStateEvent(changeStateEvent: ChangeStateEvent | null): this;
    withChangeStateEvent(changeStateEvent: ChangeStateEvent | null): this;
    getEmitEvent(): EmitEvent | null;
    setEmitEvent(emitEvent: EmitEvent | null): this;
    withEmitEvent(emitEvent: EmitEvent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Event | null;
    toDict(): {
        [key: string]: any;
    };
}
