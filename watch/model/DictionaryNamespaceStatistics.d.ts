import IModel from '../../core/interface/IModel';
export default class DictionaryNamespaceStatistics implements IModel {
    private register;
    getRegister(): number | null;
    setRegister(register: number | null): this;
    withRegister(register: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
