import IModel from '../../core/interface/IModel';
export default class MobileNotificationMessage implements IModel {
    private locale;
    private title;
    private message;
    getLocale(): string | null;
    setLocale(locale: string | null): this;
    withLocale(locale: string | null): this;
    getTitle(): string | null;
    setTitle(title: string | null): this;
    withTitle(title: string | null): this;
    getMessage(): string | null;
    setMessage(message: string | null): this;
    withMessage(message: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MobileNotificationMessage | null;
    toDict(): {
        [key: string]: any;
    };
}
