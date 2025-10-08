import IModel from '../../core/interface/IModel';
export default class Variable implements IModel {
    private stateMachineName;
    private value;
    getStateMachineName(): string | null;
    setStateMachineName(stateMachineName: string | null): this;
    withStateMachineName(stateMachineName: string | null): this;
    getValue(): string | null;
    setValue(value: string | null): this;
    withValue(value: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Variable | null;
    toDict(): {
        [key: string]: any;
    };
}
