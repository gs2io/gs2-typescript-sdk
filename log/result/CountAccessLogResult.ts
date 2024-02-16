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

import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model'

export default class CountAccessLogResult implements IResult {
    private items: Gs2Log.AccessLogCount[]|null = null;
    private nextPageToken: string|null = null;
    private totalCount: number|null = null;
    private scanSize: number|null = null;

    public getItems(): Gs2Log.AccessLogCount[]|null {
        return this.items;
    }

    public setItems(items: Gs2Log.AccessLogCount[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Log.AccessLogCount[]|null): this {
        this.items = items;
        return this;
    }

    public getNextPageToken(): string|null {
        return this.nextPageToken;
    }

    public setNextPageToken(nextPageToken: string|null) {
        this.nextPageToken = nextPageToken;
        return this;
    }

    public withNextPageToken(nextPageToken: string|null): this {
        this.nextPageToken = nextPageToken;
        return this;
    }

    public getTotalCount(): number|null {
        return this.totalCount;
    }

    public setTotalCount(totalCount: number|null) {
        this.totalCount = totalCount;
        return this;
    }

    public withTotalCount(totalCount: number|null): this {
        this.totalCount = totalCount;
        return this;
    }

    public getScanSize(): number|null {
        return this.scanSize;
    }

    public setScanSize(scanSize: number|null) {
        this.scanSize = scanSize;
        return this;
    }

    public withScanSize(scanSize: number|null): this {
        this.scanSize = scanSize;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CountAccessLogResult {
        return new CountAccessLogResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Log.AccessLogCount.fromDict(item);
                }
            ) : [])
            .withNextPageToken(data["nextPageToken"])
            .withTotalCount(data["totalCount"])
            .withScanSize(data["scanSize"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Log.AccessLogCount) => {
                    return item.toDict();
                }
            ) : [],
            "nextPageToken": this.getNextPageToken(),
            "totalCount": this.getTotalCount(),
            "scanSize": this.getScanSize(),
        };
    }
}
