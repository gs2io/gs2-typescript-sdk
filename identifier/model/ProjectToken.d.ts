import IModel from '../../core/interface/IModel';
export default class ProjectToken implements IModel {
    private token;
    getToken(): string | null;
    setToken(token: string | null): this;
    withToken(token: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ProjectToken | null;
    toDict(): {
        [key: string]: any;
    };
}
