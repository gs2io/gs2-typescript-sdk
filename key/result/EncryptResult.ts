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

import * as Gs2Key from '../model'

export default class EncryptResult implements IResult {
    private data: string|null = null;

    public getData(): string|null {
        return this.data;
    }

    public setData(data: string|null) {
        this.data = data;
        return this;
    }

    public withData(data: string|null): this {
        this.data = data;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): EncryptResult {
        return new EncryptResult()
            .withData(data["data"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "data": this.getData(),
        };
    }
}
