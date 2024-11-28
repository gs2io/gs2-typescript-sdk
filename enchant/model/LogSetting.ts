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

import * as Gs2Enchant from '../../enchant/model'

export default class LogSetting implements IModel {
    private loggingNamespaceId: string|null = null;
    public getLoggingNamespaceId(): string|null {
        return this.loggingNamespaceId;
    }
    public setLoggingNamespaceId(loggingNamespaceId: string|null) {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    }
    public withLoggingNamespaceId(loggingNamespaceId: string|null): this {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LogSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogSetting()
            .withLoggingNamespaceId(data["loggingNamespaceId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "loggingNamespaceId": this.getLoggingNamespaceId(),
        };
    }
}
