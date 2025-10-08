import IModel from '../../core/interface/IModel';
export default class LogRate implements IModel {
    private base;
    private logs;
    getBase(): number | null;
    setBase(base: number | null): this;
    withBase(base: number | null): this;
    getLogs(): number[] | null;
    setLogs(logs: number[] | null): this;
    withLogs(logs: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LogRate | null;
    toDict(): {
        [key: string]: any;
    };
}
