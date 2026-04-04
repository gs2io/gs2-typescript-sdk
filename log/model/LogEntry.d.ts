import IModel from '../../core/interface/IModel';
import * as Gs2Log from '../../log/model';
export default class LogEntry implements IModel {
    private timestamp;
    private status;
    private duration;
    private line;
    private labels;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getDuration(): number | null;
    setDuration(duration: number | null): this;
    withDuration(duration: number | null): this;
    getLine(): string | null;
    setLine(line: string | null): this;
    withLine(line: string | null): this;
    getLabels(): Gs2Log.Label[] | null;
    setLabels(labels: Gs2Log.Label[] | null): this;
    withLabels(labels: Gs2Log.Label[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LogEntry | null;
    toDict(): {
        [key: string]: any;
    };
}
