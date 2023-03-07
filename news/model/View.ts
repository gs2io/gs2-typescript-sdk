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
import Content from './Content';

export default class View implements IModel {
    private contents: Content[]|null = null;
    private removeContents: Content[]|null = null;
    public getContents(): Content[]|null {
        return this.contents;
    }
    public setContents(contents: Content[]|null) {
        this.contents = contents;
        return this;
    }
    public withContents(contents: Content[]|null): this {
        this.contents = contents;
        return this;
    }
    public getRemoveContents(): Content[]|null {
        return this.removeContents;
    }
    public setRemoveContents(removeContents: Content[]|null) {
        this.removeContents = removeContents;
        return this;
    }
    public withRemoveContents(removeContents: Content[]|null): this {
        this.removeContents = removeContents;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): View|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new View()
            .withContents(data.contents ?
                data.contents.map((item: {[key: string]: any}) => {
                    return Content.fromDict(item);
                }
            ) : [])
            .withRemoveContents(data.removeContents ?
                data.removeContents.map((item: {[key: string]: any}) => {
                    return Content.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "contents": this.getContents() ?
                this.getContents()!.map((item: Content) => {
                    return item.toDict();
                }
            ) : [],
            "removeContents": this.getRemoveContents() ?
                this.getRemoveContents()!.map((item: Content) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
