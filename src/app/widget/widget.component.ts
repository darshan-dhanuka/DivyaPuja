import { Component, OnInit } from '@angular/core';

const avHoroClientId = 'CATP_DIVYAPUJA_ENG_300x400';
const url = 'https://widgets.clickastro.com/tp_double_widget_part_english_300x400-angular.js';
const avWidgetWrapperDivId = 'astro_widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadData();
    this.loadAll();
  }
avWidgetWrapperDivId = avWidgetWrapperDivId;

  loadAPI: Promise<any>;

  public loadAll() {
    this.loadAPI = new Promise((resolve) => {
        this.loadScript();
    });
  }

  public loadData() {
    let node = document.createElement('script');
    node.text = `var avHoroClientId = '${avHoroClientId}'; var avWidgetWrapperDivId = '${avWidgetWrapperDivId}';`;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  public loadScript() {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('head')[0].appendChild(node);
  }
}
