/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2News from '../model'

export class WantGrantByUserIdResult implements IResult {
    private items: Gs2News.SetCookieRequestEntry[]|null = null;
    private browserUrl: string|null = null;
    private zipUrl: string|null = null;

    public getItems(): Gs2News.SetCookieRequestEntry[]|null {
        return this.items;
    }

    public setItems(items: Gs2News.SetCookieRequestEntry[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2News.SetCookieRequestEntry[]|null): this {
        this.items = items;
        return this;
    }

    public getBrowserUrl(): string|null {
        return this.browserUrl;
    }

    public setBrowserUrl(browserUrl: string|null) {
        this.browserUrl = browserUrl;
        return this;
    }

    public withBrowserUrl(browserUrl: string|null): this {
        this.browserUrl = browserUrl;
        return this;
    }

    public getZipUrl(): string|null {
        return this.zipUrl;
    }

    public setZipUrl(zipUrl: string|null) {
        this.zipUrl = zipUrl;
        return this;
    }

    public withZipUrl(zipUrl: string|null): this {
        this.zipUrl = zipUrl;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): WantGrantByUserIdResult {
        return new WantGrantByUserIdResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2News.SetCookieRequestEntry.fromDict(item);
                }
            ) : [])
            .withBrowserUrl(data["browserUrl"])
            .withZipUrl(data["zipUrl"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2News.SetCookieRequestEntry) => {
                    return item.toDict();
                }
            ) : [],
            "browserUrl": this.getBrowserUrl(),
            "zipUrl": this.getZipUrl(),
        };
    }
}
