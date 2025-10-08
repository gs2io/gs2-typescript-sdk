import IModel from '../../core/interface/IModel';
import Config from './Config';
export default class AcquireActionConfig implements IModel {
    private name;
    private config;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getConfig(): Config[] | null;
    setConfig(config: Config[] | null): this;
    withConfig(config: Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionConfig | null;
    toDict(): {
        [key: string]: any;
    };
}
