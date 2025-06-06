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
import * as Gs2Showcase from '../model'

export default class ForceReDrawByUserIdByStampSheetResult implements IResult {
    private items: Gs2Showcase.RandomDisplayItem[]|null = null;

    public getItems(): Gs2Showcase.RandomDisplayItem[]|null {
        return this.items;
    }

    public setItems(items: Gs2Showcase.RandomDisplayItem[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Showcase.RandomDisplayItem[]|null): this {
        this.items = items;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ForceReDrawByUserIdByStampSheetResult {
        return new ForceReDrawByUserIdByStampSheetResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.RandomDisplayItem.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Showcase.RandomDisplayItem) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
