﻿var myLayout;
var isUsingFormLayout=true;
	$(document).ready(function () { 
	if(!isUsingFormLayout)return;
		myLayout = $('body').layout({
			north__paneSelector:'#header',
			north__size: 0,
			west__size: 0,
			north__spacing_open: 0,
			north__spacing_closed: 0,
			west__spacing_open: 0,
			west__spacing_closed: 0,
			center__minSize:500,
			resizable: false,
			paneClass: 'ui-layout-pane',
			north__resizerClass: 'ui-layout-resizer',
			west__onresize: $.layout.callbacks.resizePaneAccordions,
			center__onresize:contentResize
		});
		//contentResize();
		});

