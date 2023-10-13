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

import * as Gs2Lottery from '../model'

export default class CheckImportUserDataByUserIdResult implements IResult {
    private url: string|null = null;

    public getUrl(): string|null {
        return this.url;
    }

    public setUrl(url: string|null) {
        this.url = url;
        return this;
    }

    public withUrl(url: string|null): this {
        this.url = url;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CheckImportUserDataByUserIdResult {
        return new CheckImportUserDataByUserIdResult()
            .withUrl(data["url"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "url": this.getUrl(),
        };
    }
}
