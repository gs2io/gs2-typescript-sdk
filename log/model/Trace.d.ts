import IModel from '../../core/interface/IModel';
import * as Gs2Log from '../../log/model';
export default class Trace implements IModel {
    private traceId;
    private spans;
    private truncated;
    getTraceId(): string | null;
    setTraceId(traceId: string | null): this;
    withTraceId(traceId: string | null): this;
    getSpans(): Gs2Log.LogEntry[] | null;
    setSpans(spans: Gs2Log.LogEntry[] | null): this;
    withSpans(spans: Gs2Log.LogEntry[] | null): this;
    getTruncated(): boolean | null;
    setTruncated(truncated: boolean | null): this;
    withTruncated(truncated: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Trace | null;
    toDict(): {
        [key: string]: any;
    };
}
