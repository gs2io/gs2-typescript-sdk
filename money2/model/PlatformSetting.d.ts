import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class PlatformSetting implements IModel {
    private appleAppStore;
    private googlePlay;
    private fake;
    getAppleAppStore(): Gs2Money2.AppleAppStoreSetting | null;
    setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSetting | null): this;
    withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSetting | null): this;
    getGooglePlay(): Gs2Money2.GooglePlaySetting | null;
    setGooglePlay(googlePlay: Gs2Money2.GooglePlaySetting | null): this;
    withGooglePlay(googlePlay: Gs2Money2.GooglePlaySetting | null): this;
    getFake(): Gs2Money2.FakeSetting | null;
    setFake(fake: Gs2Money2.FakeSetting | null): this;
    withFake(fake: Gs2Money2.FakeSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PlatformSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
