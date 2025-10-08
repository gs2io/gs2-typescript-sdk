import IModel from '../../core/interface/IModel';
export default class EmitEvent implements IModel {
    private event;
    private parameters;
    private timestamp;
    getEvent(): string | null;
    setEvent(event: string | null): this;
    withEvent(event: string | null): this;
    getParameters(): string | null;
    setParameters(parameters: string | null): this;
    withParameters(parameters: string | null): this;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EmitEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
