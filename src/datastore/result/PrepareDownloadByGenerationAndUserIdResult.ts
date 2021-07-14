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

import * as Gs2Datastore from '../model'

export class PrepareDownloadByGenerationAndUserIdResult implements IResult {
    private item: Gs2Datastore.DataObject|null = null;
    private fileUrl: string|null = null;
    private contentLength: number|null = null;

    public getItem(): Gs2Datastore.DataObject|null {
        return this.item;
    }

    public setItem(item: Gs2Datastore.DataObject|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Datastore.DataObject|null): this {
        this.item = item;
        return this;
    }

    public getFileUrl(): string|null {
        return this.fileUrl;
    }

    public setFileUrl(fileUrl: string|null) {
        this.fileUrl = fileUrl;
        return this;
    }

    public withFileUrl(fileUrl: string|null): this {
        this.fileUrl = fileUrl;
        return this;
    }

    public getContentLength(): number|null {
        return this.contentLength;
    }

    public setContentLength(contentLength: number|null) {
        this.contentLength = contentLength;
        return this;
    }

    public withContentLength(contentLength: number|null): this {
        this.contentLength = contentLength;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PrepareDownloadByGenerationAndUserIdResult {
        return new PrepareDownloadByGenerationAndUserIdResult()
            .withItem(Gs2Datastore.DataObject.fromDict(data["item"]))
            .withFileUrl(data["fileUrl"])
            .withContentLength(data["contentLength"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "fileUrl": this.getFileUrl(),
            "contentLength": this.getContentLength(),
        };
    }
}
