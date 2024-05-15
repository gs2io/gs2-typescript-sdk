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
import * as Gs2Guild from '../model'

export default class DeleteNamespaceResult implements IResult {
    private item: Gs2Guild.Namespace|null = null;

    public getItem(): Gs2Guild.Namespace|null {
        return this.item;
    }

    public setItem(item: Gs2Guild.Namespace|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Guild.Namespace|null): this {
        this.item = item;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DeleteNamespaceResult {
        return new DeleteNamespaceResult()
            .withItem(Gs2Guild.Namespace.fromDict(data["item"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
        };
    }
}
