{
  "title": "Untitled screen",
  "synoptic_bg": "/custom/images/03-04.png",
  "equipmentDashboardTemplate": "",
  "refreshInterval": 3000,
  "history": {
    "interval": -24,
    "unit": "hour"
  },
  "alarm_data_id": 127,
  "controls": [
    {
      "refreshInterval": 0,
      "synopticComponent":{
        "componentName":"SynopticSimpleTable",
        "clientRect": {
          "top": 570,
      	  "left": 100,
          "width": 170,
          "height": 76
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 0.5
        },
        "border": "0",
        "boxShadow": "none"
      },
      "dataSheet": [
        [
          {
            "value":"Horas Parciais",
            "textAlign":"center",
            "width": "65%"
          },
          {
            "data_id": "TEMP",
            "textAlign":"center",
            "format": "%0.2f"
          }
        ],
        [
          {
            "value":"Horas Totais",
            "textAlign":"center"
          },
          {
            "data_id": "HUMIDITY",
            "textAlign":"center",
            "format": "%0.2d"
          }
        ]
      ]
    },
    {
      "refreshInterval": 0,
      "synopticComponent":{
        "componentName":"SynopticSimpleTable",
        "clientRect": {
          "top": 570,
      	  "left": 352,
          "width": 170,
          "height": 76
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 0.5
        },
        "border": "0",
        "boxShadow": "none"
      },
      "dataSheet": [
        [
          {
            "value":"Horas Parciais",
            "textAlign":"center",
            "width": "65%"
          },
          {
            "data_id": "TEMP",
            "textAlign":"center",
            "format": "%0.2f"
          }
        ],
        [
          {
            "value":"Horas Totais",
            "textAlign":"center"
          },
          {
            "data_id": "HUMIDITY",
            "textAlign":"center",
            "format": "%0.2d"
          }
        ]
      ]
    },
    {
      "equipment_id": 1,
      "data_id": "TEMP",
      "decimals": 0,
      "format":"",
      "refreshInterval": 0,
      "synopticComponent":{
      	"componentName":"SynopticStatusIcon",
      	"clientRect": {
      	  "top": 150,
      	  "left": 185,
      	  "width": 48,
      	  "height": 48
      	},
      	"font":{
      	  "family": "Source Sans Pro",
      	  "size": 1
      	},
      	"stateImages": [
      		{"state": 21, "backgroundColor": "transparent", "img": "/custom/images/electric_motor_gray.svg", "label": "Desligado"},
      		{"state": 22, "backgroundColor": "transparent", "img": "/custom/images/electric_motor_green.svg", "label": "Ligado"},
      		{"state": 23, "backgroundColor": "transparent", "img": "/custom/images/electric_motor_red.svg", "label": "Sobrecarga"},
      	],
        "border": "none",
        "boxShadow": "none"
      }
    },
    {
      "equipment_id": 1,
      "data_id": "HUMIDITY",
      "decimals": 0,
      "format":"",
      "refreshInterval": 0,
      "synopticComponent":{
        "componentName":"SynopticStatusIcon",
        "clientRect": {
          "top": 145,
          "left": 442,
          "width": 48,
          "height": 48
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 1
        },
        "stateImages": [
          {"state": 41, "backgroundColor": "transparent", "img": "/custom/images/electric_motor_gray.svg", "label": "Desligado"},
      		{"state": 42, "backgroundColor": "transparent", "img": "/custom/images/electric_motor_green.svg", "label": "Ligado"},
      		{"state": 43, "backgroundColor": "transparent", "img": "/custom/images/electric_motor_red.svg", "label": "Sobrecarga"},
        ],
        "border": "none",
        "boxShadow": "none"
      }
    },
    {
      "equipment_id": 1,
      "data_id": "TEMP",
      "decimals": 0,
      "format":"",
      "refreshInterval": 0,
      "chart": {
        "type": "line",
        "color": "#ffce56",
        "trend": false,
        "label": "Temp Comp 1",
        "scale": "left"
      },
      "synopticComponent":{
        "componentName":"SynopticIconizedDisplayValue",
        "clientRect": {
          "top": 50,
          "left": 90,
          "width": 160,
          "height": 42
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 1
        },
        "children":[
          {
            "data_id": "TEMP",
            "decimals": 0,
            "componentName":"SynopticStatusIcon",
            "synopticComponent":{
              "stateImages": [
                {"state": 1, "backgroundColor": "#ff916f", "img": "/custom/images/chart-line-down.png"},
                {"state": 2, "backgroundColor": "#e6e6e6", "img": "/custom/images/chart-line-steady.png"},
                {"state": 3, "backgroundColor": "#84ff89", "img": "/custom/images/chart-line-up.png"}
              ]
            }
          }
        ]
      }
    },
    {
      "equipment_id": 1,
      "data_id": "HUMIDITY",
      "decimals": 0,
      "format":"",
      "refreshInterval": 0,
      "chart": {
        "type": "line",
        "color": "#9966ff",
        "trend": false,
        "label": "Pressao",
        "scale": "right"
      },
      "synopticComponent":{
        "componentName":"SynopticIconizedDisplayValue",
        "clientRect": {
          "top": 50,
          "left": 340,
          "width": 160,
          "height": 42
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 1
        },
        "children":[
          {
            "data_id": "HUMIDITY",
            "decimals": 0,
            "componentName":"SynopticStatusIcon",
            "synopticComponent":{
              "stateImages": [
                {"state": 1, "backgroundColor": "#ff916f", "img": "/custom/images/chart-line-down.png"},
                {"state": 2, "backgroundColor": "#e6e6e6", "img": "/custom/images/chart-line-steady.png"},
                {"state": 3, "backgroundColor": "#84ff89", "img": "/custom/images/chart-line-up.png"}
              ]
            }
          }
        ]
      }
    },
    {
      "equipment_id": 1,
      "data_id": "TEMP",
      "decimals": 0,
      "format":"",
      "refreshInterval": 0,
      "synopticComponent":{
        "componentName":"SynopticIconizedDisplayValue",
        "clientRect": {
          "top": 115,
          "left": 785,
          "width": 160,
          "height": 42
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 1
        },
        "children":[
          {
            "data_id": "TEMP",
            "decimals": 0,
            "componentName":"SynopticStatusIcon",
            "synopticComponent":{
              "stateImages": [
                {"state": 1, "backgroundColor": "#ff916f", "img": "/custom/images/chart-line-down.png"},
                {"state": 2, "backgroundColor": "#e6e6e6", "img": "/custom/images/chart-line-steady.png"},
                {"state": 3, "backgroundColor": "#84ff89", "img": "/custom/images/chart-line-up.png"}
              ]
            }
          }
        ]
      }
    },
    {
      "equipment_id": 1,
      "data_id": "HUMIDITY",
      "decimals": 0,
      "format":"",
      "refreshInterval": 0,
      "synopticComponent":{
        "componentName":"SynopticIconizedDisplayValue",
        "clientRect": {
          "top": 605,
          "left": 685,
          "width": 160,
          "height": 42
        },
        "font":{
          "family": "Source Sans Pro",
          "size": 1
        },
        "children":[
          {
            "data_id": 127,
            "decimals": 0,
            "componentName":"SynopticStatusIcon",
            "synopticComponent":{
              "stateImages": [
                {"state": 1, "backgroundColor": "#ff916f", "img": "/custom/images/chart-line-down.png"},
                {"state": 2, "backgroundColor": "#e6e6e6", "img": "/custom/images/chart-line-steady.png"},
                {"state": 3, "backgroundColor": "#84ff89", "img": "/custom/images/chart-line-up.png"}
              ]
            }
          }
        ]
      }
    }
  ]
}
