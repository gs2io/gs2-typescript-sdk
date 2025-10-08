import IModel from '../../core/interface/IModel';
export default class Version implements IModel {
    private major;
    private minor;
    private micro;
    getMajor(): number | null;
    setMajor(major: number | null): this;
    withMajor(major: number | null): this;
    getMinor(): number | null;
    setMinor(minor: number | null): this;
    withMinor(minor: number | null): this;
    getMicro(): number | null;
    setMicro(micro: number | null): this;
    withMicro(micro: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Version | null;
    toDict(): {
        [key: string]: any;
    };
}
