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
import * as Gs2News from '../model'

export default class DescribeNewsResult implements IResult {
    private items: Gs2News.News[]|null = null;
    private contentHash: string|null = null;
    private templateHash: string|null = null;

    public getItems(): Gs2News.News[]|null {
        return this.items;
    }

    public setItems(items: Gs2News.News[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2News.News[]|null): this {
        this.items = items;
        return this;
    }

    public getContentHash(): string|null {
        return this.contentHash;
    }

    public setContentHash(contentHash: string|null) {
        this.contentHash = contentHash;
        return this;
    }

    public withContentHash(contentHash: string|null): this {
        this.contentHash = contentHash;
        return this;
    }

    public getTemplateHash(): string|null {
        return this.templateHash;
    }

    public setTemplateHash(templateHash: string|null) {
        this.templateHash = templateHash;
        return this;
    }

    public withTemplateHash(templateHash: string|null): this {
        this.templateHash = templateHash;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DescribeNewsResult {
        return new DescribeNewsResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2News.News.fromDict(item);
                }
            ) : null)
            .withContentHash(data["contentHash"])
            .withTemplateHash(data["templateHash"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2News.News) => {
                    return item.toDict();
                }
            ) : null,
            "contentHash": this.getContentHash(),
            "templateHash": this.getTemplateHash(),
        };
    }
}
