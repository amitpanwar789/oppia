// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for random selector value generator.
 */

import { Component, Input, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'random-selector',
  templateUrl: './RandomSelector.component.html'
})
export class RandomSelectorComponent implements OnInit {
  @Input() generatorId: string;
  @Input() initArgs: string;
  @Input() objType: string;
  @Input() customizationArgs: {
    value: string;
    list_of_values: string[];
  };

  SCHEMA = {
    type: 'list',
    items: {
      type: 'unicode'
    },
    ui_config: {
      add_element_text: 'Add New Choice'
    }
  };

  getTemplateUrl(): string {
    return '/value_generator_handler/' + this.generatorId;
  }

  ngOnInit(): void {
    if (!this.customizationArgs.list_of_values) {
      this.customizationArgs.list_of_values = [];
    }
  }
}

angular.module('oppia').directive(
  'randomSelector', downgradeComponent({
    component: RandomSelectorComponent}));
