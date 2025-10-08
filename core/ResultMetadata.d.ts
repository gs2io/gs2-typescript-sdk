import IModel from './interface/IModel';
export default class ResultMetadata implements IModel {
    private uncommitted;
    getUncommitted(): string | null;
    setUncommitted(uncommitted: string | null): this;
    withUncommitted(uncommitted: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ResultMetadata | null;
    toDict(): {
        [key: string]: any;
    };
}
