
define( [], function () {

    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: {
                uses: "dimensions",
                min: 1,
                max: 1
            },
            measures: {
                uses: "measures",
                min: 1,
                items:{
                    Stack:{
                        ref: "qDef.stack",
                        label: "stack",
                        type: "string",
                        defaultValue: '',
                        expression: "optional"
                    },
                    Type:{
                        ref: "qDef.type",
                        label: "type",
                        type: "string",
                        component: "dropdown",
                        defaultValue: 'bar',
                        options:[{value:"bar",label: "bar"},{value:"line",label:"line"}]
                    },
                    LineType:{
                        ref: "qDef.line.type",
                        label: "Line Type",
                        type: "string",
                        component: "dropdown",
                        defaultValue: 'solid',
                        options:[{value:"solid",label: "solid"},{value:"dashed",label:"dashed"},{value:"dotted",label:"dotted"}],
                        show: function(param) {
                            return param.qDef.type=="line";
                        }
                    },
                    LineWidth:{
                        ref: "qDef.line.width",
                        label: "Line Width",
                        type: "string",
                        defaultValue: '2',
                        expression: "optional",
                        show: function(param) {
                            return param.qDef.type=="line";
                        }
                    },
                    Yindex:{
                        ref: "qDef.yIndex",
                        label: "y-axis",
                        type: "string",
                        component: "dropdown",
                        defaultValue: '0',
                        options:[{value:"0",label: "left"},{value:"1",label:"right"}]
                    },
                    ColorType: {
                        ref: "qDef.colorType",
                        type: "string",
                        component: "dropdown",
                        defaultValue: 0,
                        options:[{value:0,label: "Single Color"},{value:1,label:"By Expression"}]
                    },
                    SingleColor:{
                        ref: "qDef.color",
                        component: "color-picker",
                        label: "Item Color",
                        type: "object",
                        defaultValue: {
                            color: "#4477aa",
                            index: "-1"
                        },
                        show: function(param) {
                            return param.qDef.colorType==0;
                        }
                    },
                    ColorByExpression: {
                        type: "string",
                        ref: "qAttributeExpressions.0.qExpression",
                        label: "Item Color",
                        component: "expression",
                        defaultValue: "='#000'",
                        show: function(param) {
                            return param.qDef.colorType==1;
                        }
                    },
                    LabelAutoColor: {
                        ref: "qDef.dataLabel.auto",
                        type: "boolean",
                        component: "switch",
                        label: "Label Color Auto",
                        options: [{
                            value: true,
                            label: "On"
                        }, {
                            value: false,
                            label: "Off"
                        }],
                        defaultValue: true
                    },
                    LabelColor:{
                        ref: "qDef.dataLabel.color",
                        component: "color-picker",
                        label: "Label Color",
                        type: "object",
                        defaultValue: {
                            color: "#fff",
                            index: "-1"
                          },
                          show: function(param) {
                            return !param.qDef.dataLabel.auto && param.qDef.colorType==0;
                        }
                    },
                    LabelColorByExpression:{
                        type: "string",
                        ref: "qDef.dataLabel.colorExpression",
                        label: "Label Color",
                        defaultValue: '#000',
                        expression: "optional",
                        show: function(param) {
                            return !param.qDef.dataLabel.auto && param.qDef.colorType==1;
                        }
                    },
                    LabelBorderWidth:{
                        type: "string",
                        ref: "qDef.dataLabel.border.width",
                        label: "Label Border Width",
                        defaultValue: '0',
                        expression: "optional",
                        show: function(param) {
                            return !param.qDef.dataLabel.auto
                        }
                    },
                    LabelBorderColor:{
                        ref: "qDef.dataLabel.border.color",
                        component: "color-picker",
                        label: "Label Border Color",
                        type: "object",
                        defaultValue: {
                            color: "#fff",
                            index: "-1"
                          },
                          show: function(param) {
                            return !param.qDef.dataLabel.auto && param.qDef.colorType==0;
                        }
                    },
                    LabelBorderColorByExpression:{
                        type: "string",
                        ref: "qDef.dataLabel.border.colorExpression",
                        label: "Label Border Color",
                        defaultValue: '#000',
                        expression: "optional",
                        show: function(param) {
                            return !param.qDef.dataLabel.auto && param.qDef.colorType==1;
                        }
                    },
                    
                }
            },
            Settings:{
                component: "expandable-items",
                label: "Settings",
                items:{
                    DataLabel:{
                        type: "items",
                        label: "Data Label",
                        items: {
                            LabelVisibility: {
                                ref: "settings.dataLabel.visibility",
                                type: "boolean",
                                component: "switch",
                                label: "Visibility",
                                options: [{
                                    value: true,
                                    label: "Show"
                                }, {
                                    value: false,
                                    label: "Hide"
                                }],
                                defaultValue: true
                            },
                            LabelDistance: {
                                ref: "settings.dataLabel.distance",
                                label: "Distance",
                                type: "string",
                                defaultValue: '5',
                                expression: "optional"
                            },
                            LabelRotate: {
                                type: "number",
                                component: "slider",
                                label: "Rotate",
                                ref: "settings.dataLabel.rotate",
                                min: -90,
                                max: 90,
                                step: 1,
                                defaultValue: 0
                            },
                            LabelPosition:{
                                ref: "settings.dataLabel.position",
                                label: "Position",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'inside',
                                options:[
                                    {value:"bottom",label:"bottom"},
                                    {value:"inside",label:"inside"},
                                    {value:"insideBottom",label:"insideBottom"},
                                    {value:"insideBottomLeft",label:"insideBottomLeft"},
                                    {value:"insideBottomRight",label:"insideBottomRight"},
                                    {value:"insideLeft",label:"insideLeft"},
                                    {value:"insideRight",label:"insideRight"},
                                    {value:"insideTop",label:"insideTop"},
                                    {value:"insideTopLeft",label:"insideTopLeft"},
                                    {value:"insideTopRight",label:"insideTopRight"},
                                    {value:"left",label:"left"},
                                    {value:"right",label:"right"},
                                    {value:"top",label:"top"}
                                ]
                            },
                            LabelFontStyle:{
                                ref: "settings.dataLabel.style",
                                label: "Style",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'normal',
                                options:[
                                    {value:"normal",label:"normal"},
                                    {value:"italic",label:"italic"},
                                    {value:"oblique",label:"oblique"}
                                ]
                            },
                            LabelFontWeight:{
                                ref: "settings.dataLabel.weight",
                                label: "Weight",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'normal',
                                options:[
                                    {value:"normal",label:"normal"},
                                    {value:"bold",label:"bold"},
                                    {value:"bolder",label:"bolder"},
                                    {value:"lighter",label:"lighter"}

                                ]
                            },
                            LabelFontSize: {
                                ref: "settings.dataLabel.size",
                                label: "Size",
                                type: "string",
                                defaultValue: '15',
                                expression: "optional"
                            },
                            LabelFontAlign:{
                                ref: "settings.dataLabel.align",
                                label: "Align",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'center',
                                options:[
                                    {value:"left",label:"left"},
                                    {value:"center",label:"center"},
                                    {value:"right",label:"right"}

                                ]
                            },
                            LabelDrag: {
                                ref: "settings.dataLabel.drag.isDraggable",
                                type: "boolean",
                                component: "switch",
                                label: "Allow Drag&Drop",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: false
                            },
                            LabelDragText: {
                                label:"Label dragging only works when label border width is 0.",
                                component: "text",
                                show: function(param){
                                    return param.settings.dataLabel.drag.isDraggable
                                }
                            },
                            LabelLabelLine: {
                                ref: "settings.dataLabel.labelLine.show",
                                type: "boolean",
                                component: "switch",
                                label: "Show Lable Line",
                                options: [{
                                    value: true,
                                    label: "Show"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: false,
                                show: function(param){
                                    return param.settings.dataLabel.drag.isDraggable
                                }
                            },
                            LabelLabelLineColorType: {
                                ref: "settings.dataLabel.labelLine.colorType",
                                label: "Line Color Mode",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 0,
                                options:[{value:0,label: "Single Color"},{value:1,label:"By Expression"},{value:2,label:"Use Label Color"}],
                                show: function(param){
                                    return param.settings.dataLabel.labelLine.show && param.settings.dataLabel.drag.isDraggable
                                }
                            },
                            LabelLabelLineColor:{
                                ref: "settings.dataLabel.labelLine.color",
                                component: "color-picker",
                                label: "Line Color",
                                type: "object",
                                defaultValue: {
                                    color: "#000",
                                    index: "-1"
                                },
                                show: function(param) {
                                    thisParam = param.settings.dataLabel
                                    return  param.settings.dataLabel.labelLine.show &&
                                            param.settings.dataLabel.drag.isDraggable &&
                                            param.settings.dataLabel.labelLine.colorType==0
                                }
                            },
                            LabelLabelLineColorExpression: {
                                ref: "settings.dataLabel.labelLine.colorExpression",
                                label: "Line Color",
                                type: "string",
                                defaultValue: '#000',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.dataLabel.labelLine.show &&
                                    param.settings.dataLabel.drag.isDraggable &&
                                    param.settings.dataLabel.labelLine.colorType==1
                                }
                            },
                            LabelLabelLineWidth: {
                                ref: "settings.dataLabel.labelLine.width",
                                label: "Line Width",
                                type: "string",
                                defaultValue: '1',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.dataLabel.labelLine.show &&
                                    param.settings.dataLabel.drag.isDraggable
                                }
                            },
                            LabelLabelLineOpacity: {
                                ref: "settings.dataLabel.labelLine.opacity",
                                label: "Line Opacity (0 to 1)",
                                type: "string",
                                defaultValue: '1',
                                expression: "optional",
                                show: function(param) {
                                    thisParam = param.settings.dataLabel
                                    return thisParam.labelLine.show && thisParam.drag.isDraggable
                                }
                            },
                            LabelLabelLineType:{
                                ref: "settings.dataLabel.labelLine.type",
                                label: "Line Type",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'solid',
                                options:[
                                    {value:"solid",label:"solid"},
                                    {value:"dashed",label:"dashed"},
                                    {value:"dotted",label:"dotted"}
                                ],
                                show: function(param) {
                                    thisParam = param.settings.dataLabel
                                    return thisParam.labelLine.show && thisParam.drag.isDraggable
                                }
                            },
                        }
                    },
                    AxisLabel:{
                        type: "items",
                        label: "Axis Label",
                        items: {
                            LabelVisibility: {
                                ref: "settings.axisLabel.visibility",
                                type: "boolean",
                                component: "switch",
                                label: "Visibility",
                                options: [{
                                    value: true,
                                    label: "Show"
                                }, {
                                    value: false,
                                    label: "Hide"
                                }],
                                defaultValue: true
                            },
                            LabelRotate: {
                                type: "number",
                                component: "slider",
                                label: "Rotate",
                                ref: "settings.axisLabel.rotate",
                                min: -90,
                                max: 90,
                                step: 1,
                                defaultValue: 0
                            },
                            LabelFontStyle:{
                                ref: "settings.axisLabel.style",
                                label: "Style",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'normal',
                                options:[
                                    {value:"normal",label:"normal"},
                                    {value:"italic",label:"italic"},
                                    {value:"oblique",label:"oblique"}
                                ]
                            },
                            LabelFontWeight:{
                                ref: "settings.axisLabel.weight",
                                label: "Weight",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'normal',
                                options:[
                                    {value:"normal",label:"normal"},
                                    {value:"bold",label:"bold"},
                                    {value:"bolder",label:"bolder"},
                                    {value:"lighter",label:"lighter"}
                    
                                ]
                            },
                            LabelFontSize: {
                                ref: "settings.axisLabel.size",
                                label: "Size",
                                type: "string",
                                defaultValue: '15',
                                expression: "optional"
                            },
                            LabelFontAlign:{
                                ref: "settings.axisLabel.align",
                                label: "Align",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 'center',
                                options:[
                                    {value:"left",label:"left"},
                                    {value:"center",label:"center"},
                                    {value:"right",label:"right"}
                    
                                ]
                            },
                            LabelColorType: {
                                ref: "settings.axisLabel.colorType",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 0,
                                options:[{value:0,label: "Single Color"},{value:1,label:"By Expression"}],

                            },
                            LabelColor: {
                                ref: "settings.axisLabel.color",
                                component: "color-picker",
                                label: "Text Color",
                                type: "object",
                                defaultValue: {
                                    color: "#333",
                                    index: "-2"
                                },
                                show: function(param) {
                                    return param.settings.axisLabel.colorType==0;
                                }
                            },
                            LabelColorByExpression:{
                                type: "string",
                                ref: "settings.axisLabel.colorByExpression",
                                label: "Text Color",
                                defaultValue: '#333',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.axisLabel.colorType==1;
                                }
                            },
                            LabelBorderWidth:{
                                type: "string",
                                ref: "settings.axisLabel.border.width",
                                label: "Text Border Width",
                                defaultValue: '0',
                                expression: "optional"
                            },
                            LabelBorderColor:{
                                ref: "settings.axisLabel.border.color",
                                component: "color-picker",
                                label: "Text Border Color",
                                type: "object",
                                defaultValue: {
                                    color: "#fff",
                                    index: "-1"
                                  },
                                  show: function(param) {
                                    return param.settings.axisLabel.colorType==0;
                                }
                            },
                            LabelBorderColorByExpression:{
                                type: "string",
                                ref: "settings.axisLabel.border.colorByExpression",
                                label: "Text Border Color",
                                defaultValue: '#fff',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.axisLabel.colorType==1;
                                }
                            },
                        }
                    },
                    Legend:{
                        type: "items",
                        label: "Legend",
                        items: {
                            LegendVisibility: {
                                ref: "settings.legend.visibility",
                                type: "boolean",
                                component: "switch",
                                label: "Visibility",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: true
                            },
                            LegendIcon: {
                                ref: "settings.legend.icon",
                                type: "string",
                                label: "Icon Type",
                                component: "dropdown",
                                defaultValue: 'circle',
                                options:[
                                        {value:'none',label: "none"},
                                        {value:'circle',label: "circle"},
                                        {value:'rect',label: "rect"},
                                        {value:'roundRect',label: "roundRect"},
                                        {value:'triangle',label: "triangle"},
                                        {value:'diamond',label: "diamond"},
                                        {value:'pin',label: "pin"},
                                        {value:'arrow',label: "arrow"},
                                    ]
                            },
                            LegendTextSize: {
                                type: "string",
                                ref: "settings.legend.text.size",
                                label: "Text Size",
                                expression: "optional",
                                defaultValue: '12',
                            },
                            LegendColorType: {
                                ref: "settings.legend.colorType",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 0,
                                options:[{value:0,label: "Single Color"},{value:1,label:"By Expression"}]
                            },
                            LegendSingleColor:{
                                ref: "settings.legend.text.color",
                                component: "color-picker",
                                label: "Text Color",
                                type: "object",
                                defaultValue: {
                                    color: "#4477aa",
                                    index: "-1"
                                },
                                show: function(param) {
                                    return param.settings.legend.colorType==0;
                                }
                            },
                            LegendColorByExpression: {
                                type: "string",
                                ref: "settings.legend.text.colorExpression",
                                label: "Text Color",
                                expression: "optional",
                                defaultValue: '',
                                show: function(param) {
                                    return param.settings.legend.colorType==1;
                                }
                            },
                            LegendBorderWidth:{
                                type: "string",
                                ref: "settings.legend.text.border.width",
                                label: "Text Border Width",
                                defaultValue: '0',
                                expression: "optional"
                            },
                            LegendBorderColor:{
                                ref: "settings.legend.text.border.color",
                                component: "color-picker",
                                label: "Text Border Color",
                                type: "object",
                                defaultValue: {
                                    color: "#fff",
                                    index: "-1"
                                  },
                                  show: function(param) {
                                    return param.settings.legend.colorType==0;
                                }
                            },
                            LegendBorderColorByExpression:{
                                type: "string",
                                ref: "settings.legend.text.border.colorByExpression",
                                label: "Text Border Color",
                                defaultValue: '#fff',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.legend.colorType==1;
                                }
                            },
                        }
                    },
                    Focus:{
                        type: "items",
                        label: "On Focus",
                        items: {
                            FocusOn:{
                                ref: "settings.focus.on",
                                type: "boolean",
                                component: "switch",
                                label: "Focus",
                                options: [{
                                    value: true,
                                    label: "on"
                                }, {
                                    value: false,
                                    label: "off"
                                }],
                                defaultValue: false
                            },
                            FocusColorType: {
                                ref: "settings.focus.colorType",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 0,
                                options:[{value:0,label: "Single Color"},{value:1,label:"By Expression"}]
                            },
                            FocusSingleColor:{
                                ref: "settings.focus.item.color",
                                component: "color-picker",
                                label: "Color",
                                type: "object",
                                defaultValue: {
                                    color: "#4477aa",
                                    index: "-1"
                                },
                                show: function(param) {
                                    return param.settings.focus.colorType==0;
                                }
                            },
                            FocusColorByExpression: {
                                type: "string",
                                ref: "settings.focus.item.colorExpression.color",
                                label: "Color",
                                expression: "optional",
                                defaultValue: '',
                                show: function(param) {
                                    return param.settings.focus.colorType==1;
                                }
                            },
                            FocusLabelSingleColor:{
                                ref: "settings.focus.label.color",
                                component: "color-picker",
                                label: "Label Color",
                                type: "object",
                                defaultValue: {
                                    color: "#4477aa",
                                    index: "-1"
                                },
                                show: function(param) {
                                    return param.settings.focus.colorType==0;
                                }
                            },
                            FocusLabelColorByExpression: {
                                type: "string",
                                ref: "settings.focus.label.colorExpression.color",
                                label: "Label Color",
                                expression: "optional",
                                defaultValue: '',
                                show: function(param) {
                                    return param.settings.focus.colorType==1;
                                }
                            },
                            FocusLabelSize: {
                                type: "string",
                                ref: "settings.focus.label.size",
                                label: "Label Size",
                                defaultValue: "16",
                                expression: "optional"
                            }

                        }

                    },
                    BarOptions:{
                        type: "items",
                        label: "Bar Options",
                        items:{
                            BarGap: {
                                ref: "settings.barOptions.barGap",
                                label: "Bar Gap",
                                type: "string",
                                defaultValue: '0',
                                expression: "optional"
                            },
                            BarWidthAuto:{
                                ref: "settings.barOptions.barWidthAuto",
                                type: "boolean",
                                component: "switch",
                                label: "Bar Width Auto",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: true
                            },
                            BarWidth: {
                                ref: "settings.barOptions.barWidth",
                                label: "Bar Width",
                                type: "string",
                                defaultValue: '40',
                                expression: "optional",
                                show: function(param) {
                                    return !param.settings.barOptions.barWidthAuto;
                                }
                            },
                            MaxBarWidth: {
                                ref: "settings.barOptions.maxBarWidth",
                                label: "Max Bar Width",
                                type: "string",
                                defaultValue: '100%',
                                expression: "optional",
                                show: function(param) {
                                    return !param.settings.barOptions.barWidthAuto;
                                }
                            },
                            MinBarWidth: {
                                ref: "settings.barOptions.minBarWidth",
                                label: "Min Bar Width",
                                type: "string",
                                defaultValue: '1',
                                expression: "optional",
                                show: function(param) {
                                    return !param.settings.barOptions.barWidthAuto;
                                }
                            },
                        }                      
                    },
                    yAxisLeft:{
                        type: "items",
                        label: "yAxis: Left",
                        items: {
                            yAxisLeftShow:{
                                label: "Visibility",
                                ref: "settings.yAxis.left.show",
                                type: "boolean",
                                component: "switch",
                                options: [{
                                    value: true,
                                    label: "Show"
                                }, {
                                    value: false,
                                    label: "Hide"
                                }],
                                defaultValue: false
                            },
                            yAxisLeftAutoValues:{
                                ref: "settings.yAxis.left.autoInterval",
                                type: "boolean",
                                component: "switch",
                                label: "Interval",
                                options: [{
                                    value: true,
                                    label: "Auto"
                                }, {
                                    value: false,
                                    label: "Custom"
                                }],
                                defaultValue: true
                            },
                            yAxisLeftIntervalCustom: {
                                ref: "settings.yAxis.left.intervalType",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 0,
                                options:[{value:0,label: "Min"},{value:1,label:"Max"},{value:2,label:"Min/Max"}],
                                show: function(param){
                                    return !param.settings.yAxis.left.autoInterval
                                }
                            },
                            yAxisLeftMin:{
                                ref: "settings.yAxis.left.min",
                                label: "Min",
                                type: "string",
                                defaultValue: '0',
                                expression: "optional",
                                show: function(param){
                                    return !param.settings.yAxis.left.autoInterval &&
                                            (
                                                param.settings.yAxis.left.intervalType==0 ||
                                                param.settings.yAxis.left.intervalType==2 
                                            )
                                }
                            },
                            yAxisLeftMax:{
                                ref: "settings.yAxis.left.max",
                                label: "Max",
                                type: "string",
                                defaultValue: '100',
                                expression: "optional",
                                show: function(param){
                                    return !param.settings.yAxis.left.autoInterval &&
                                            (
                                                param.settings.yAxis.left.intervalType==1 ||
                                                param.settings.yAxis.left.intervalType==2 
                                            )
                                }
                            },
                            yAxisLeftInverse:{
                                ref: "settings.yAxis.left.inverse",
                                type: "boolean",
                                component: "switch",
                                label: "Inverse",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: false
                            },
                        }
                    },
                    yAxisRight:{
                        type: "items",
                        label: "yAxis: Right",
                        items: {
                            yAxisRightShow:{
                                label: "Visibility",
                                ref: "settings.yAxis.right.show",
                                type: "boolean",
                                component: "switch",
                                options: [{
                                    value: true,
                                    label: "Show"
                                }, {
                                    value: false,
                                    label: "Hide"
                                }],
                                defaultValue: false
                            },
                            yAxisRightAutoValues:{
                                ref: "settings.yAxis.right.autoInterval",
                                type: "boolean",
                                component: "switch",
                                label: "Interval",
                                options: [{
                                    value: true,
                                    label: "Auto"
                                }, {
                                    value: false,
                                    label: "Custom"
                                }],
                                defaultValue: true
                            },
                            yAxisRightIntervalCustom: {
                                ref: "settings.yAxis.right.intervalType",
                                type: "string",
                                component: "dropdown",
                                defaultValue: 0,
                                options:[{value:0,label: "Min"},{value:1,label:"Max"},{value:2,label:"Min/Max"}],
                                show: function(param){
                                    return !param.settings.yAxis.right.autoInterval
                                }
                            },
                            yAxisRightMin:{
                                ref: "settings.yAxis.right.min",
                                label: "Min",
                                type: "string",
                                defaultValue: '0',
                                expression: "optional",
                                show: function(param){
                                    return !param.settings.yAxis.right.autoInterval &&
                                            (
                                                param.settings.yAxis.right.intervalType==0 ||
                                                param.settings.yAxis.right.intervalType==2 
                                            )
                                }
                            },
                            yAxisRightMax:{
                                ref: "settings.yAxis.right.max",
                                label: "Max",
                                type: "string",
                                defaultValue: '100',
                                expression: "optional",
                                show: function(param){
                                    return !param.settings.yAxis.right.autoInterval &&
                                            (
                                                param.settings.yAxis.right.intervalType==1 ||
                                                param.settings.yAxis.right.intervalType==2 
                                            )
                                }
                            },
                            yAxisRightInverse:{
                                ref: "settings.yAxis.right.inverse",
                                type: "boolean",
                                component: "switch",
                                label: "Inverse",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: false
                            },
                        }
                    },
                    Grid:{
                        type: "items",
                        label: "Grid",
                        items: {
                            ContainLabel:{
                                ref: "settings.grid.containLabel",
                                type: "boolean",
                                component: "switch",
                                label: "Contain Label",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "False"
                                }],
                                defaultValue: false
                            },
                            CustomGrid:{
                                ref: "settings.grid.customGridPosition",
                                type: "boolean",
                                component: "switch",
                                label: "Custom Grid Position",
                                options: [{
                                    value: true,
                                    label: "On"
                                }, {
                                    value: false,
                                    label: "Off"
                                }],
                                defaultValue: false
                            },
                            Left:{
                                ref: "settings.grid.position.left",
                                label: "Left",
                                type: "string",
                                defaultValue: '10%',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.grid.customGridPosition;
                                }
                            },
                            Right:{
                                ref: "settings.grid.position.right",
                                label: "Right",
                                type: "string",
                                defaultValue: '10%',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.grid.customGridPosition;
                                }
                            },
                            Top:{
                                ref: "settings.grid.position.top",
                                label: "Top",
                                type: "string",
                                defaultValue: '60',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.grid.customGridPosition;
                                }
                            },
                            Bottom:{
                                ref: "settings.grid.position.bottom",
                                label: "Bottom",
                                type: "string",
                                defaultValue: '60',
                                expression: "optional",
                                show: function(param) {
                                    return param.settings.grid.customGridPosition;
                                }
                            },
                            Width:{
                                ref: "settings.grid.width",
                                label: "Width",
                                type: "string",
                                defaultValue: 'auto',
                                expression: "optional"
                            },
                            Height:{
                                ref: "settings.grid.height",
                                label: "Height",
                                type: "string",
                                defaultValue: 'auto',
                                expression: "optional"
                            },
                        }

                    },
                    Others:{
                        type: "items",
                        label: "Others",
                        items: {
                            ShowZeroBars:{
                                ref: "settings.others.showZeroBars",
                                type: "boolean",
                                component: "switch",
                                label: "Show Zero Values",
                                options: [{
                                    value: true,
                                    label: "Show"
                                }, {
                                    value: false,
                                    label: "Hide"
                                }],
                                defaultValue: true
                            },
                            NumberVisibleItems:{
                                ref: "settings.others.numberVisibleItems",
                                label: "Number Visible Items",
                                type: "string",
                                defaultValue: '12',
                                expression: "optional"
                            }
                        }

                    }
                }
            },
            addons: {
                uses: "addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling"
                    },
                },
            },
            sorting: {
                uses: "sorting"
            },
            appearance: {
                uses: "settings",
            }
        }
    };
});