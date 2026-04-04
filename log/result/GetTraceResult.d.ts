import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class GetTraceResult implements IResult {
    private trace;
    private parallels;
    private parallelTruncated;
    getTrace(): Gs2Log.Trace | null;
    setTrace(trace: Gs2Log.Trace | null): this;
    withTrace(trace: Gs2Log.Trace | null): this;
    getParallels(): Gs2Log.Trace[] | null;
    setParallels(parallels: Gs2Log.Trace[] | null): this;
    withParallels(parallels: Gs2Log.Trace[] | null): this;
    getParallelTruncated(): boolean | null;
    setParallelTruncated(parallelTruncated: boolean | null): this;
    withParallelTruncated(parallelTruncated: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTraceResult;
    toDict(): {
        [key: string]: any;
    };
}
