import IResult from '../../core/interface/IResult';
export default class NowResult implements IResult {
    private timestamp;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NowResult;
    toDict(): {
        [key: string]: any;
    };
}
