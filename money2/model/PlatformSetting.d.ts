import IModel from '../../core/interface/IModel';
import AppleAppStoreSetting from './AppleAppStoreSetting';
import GooglePlaySetting from './GooglePlaySetting';
import FakeSetting from './FakeSetting';
export default class PlatformSetting implements IModel {
    private appleAppStore;
    private googlePlay;
    private fake;
    getAppleAppStore(): AppleAppStoreSetting | null;
    setAppleAppStore(appleAppStore: AppleAppStoreSetting | null): this;
    withAppleAppStore(appleAppStore: AppleAppStoreSetting | null): this;
    getGooglePlay(): GooglePlaySetting | null;
    setGooglePlay(googlePlay: GooglePlaySetting | null): this;
    withGooglePlay(googlePlay: GooglePlaySetting | null): this;
    getFake(): FakeSetting | null;
    setFake(fake: FakeSetting | null): this;
    withFake(fake: FakeSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PlatformSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
