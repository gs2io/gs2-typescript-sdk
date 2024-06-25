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

import IModel from '../../core/interface/IModel';

export default class GooglePlayContent implements IModel {
    private productId: string|null = null;
    public getProductId(): string|null {
        return this.productId;
    }
    public setProductId(productId: string|null) {
        this.productId = productId;
        return this;
    }
    public withProductId(productId: string|null): this {
        this.productId = productId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GooglePlayContent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlayContent()
            .withProductId(data["productId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "productId": this.getProductId(),
        };
    }
}
