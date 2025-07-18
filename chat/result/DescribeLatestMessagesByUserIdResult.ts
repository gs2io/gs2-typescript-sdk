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
import * as Gs2Chat from '../model'

export default class DescribeLatestMessagesByUserIdResult implements IResult {
    private items: Gs2Chat.Message[]|null = null;
    private nextPageToken: string|null = null;

    public getItems(): Gs2Chat.Message[]|null {
        return this.items;
    }

    public setItems(items: Gs2Chat.Message[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Chat.Message[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): DescribeLatestMessagesByUserIdResult {
        return new DescribeLatestMessagesByUserIdResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Chat.Message.fromDict(item);
                }
            ) : null)
            .withNextPageToken(data["nextPageToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Chat.Message) => {
                    return item.toDict();
                }
            ) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    }
}
