import IModel from '../../core/interface/IModel';
import LimitCounter from './LimitCounter';
export default class LimitLimit implements IModel {
    private limitName;
    private counter;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getCounter(): LimitCounter[] | null;
    setCounter(counter: LimitCounter[] | null): this;
    withCounter(counter: LimitCounter[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimit | null;
    toDict(): {
        [key: string]: any;
    };
}
