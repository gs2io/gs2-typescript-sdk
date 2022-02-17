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
import { Config } from './Config';

export class AcquireActionConfig implements IModel {
    private name: string|null = null;
    private config: Config[]|null = null;

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getConfig(): Config[]|null {
        return this.config;
    }

    public setConfig(config: Config[]|null) {
        this.config = config;
        return this;
    }

    public withConfig(config: Config[]|null): this {
        this.config = config;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireActionConfig|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionConfig()
            .withName(data["name"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Config.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Config) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
