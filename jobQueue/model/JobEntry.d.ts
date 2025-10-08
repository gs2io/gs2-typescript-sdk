import IModel from '../../core/interface/IModel';
export default class JobEntry implements IModel {
    private scriptId;
    private args;
    private maxTryCount;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getMaxTryCount(): number | null;
    setMaxTryCount(maxTryCount: number | null): this;
    withMaxTryCount(maxTryCount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): JobEntry | null;
    toDict(): {
        [key: string]: any;
    };
}
