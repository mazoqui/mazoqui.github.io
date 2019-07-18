{
  title: 'Untitled screen',
  synoptic_bg: '/custom/images/03-04.png',
  equipmentDashboardTemplate: '', // It depends on chosen dashboard layout
  refreshInterval: 3000,
  history: {
    interval: -24,
    unit: "hour"
  },
  alarm_data_id: 127, // if specified, alarm counter will be taken from the data instead of history
  controls: [
    // Compressor 1 total and partial hours
    {
      equipment_id: 1,
      data_id: 127,
      format:'Horas totais: %0.2f',
      refreshInterval: 0,
      synopticComponent:{
      	componentName:'SynopticFormattedDisplayValue',
      	clientRect: {
      	  top: 570,
      	  left: 100,
      	  width: 160,
      	  height: 20
      	},
      	font:{
      	  family: 'Source Sans Pro',
      	  size: 0.5 // always in vw
      	},
        border: '1px solid gray',
        boxShadow: 'none'
      }
    },
    {
      equipment_id: 1,
      data_id: 129,
      format:'Horas parciais: %0.2f',
      refreshInterval: 0,
      synopticComponent:{
      	componentName:'SynopticFormattedDisplayValue',
      	clientRect: {
      	  top: 592,
      	  left: 100,
      	  width: 160,
      	  height: 20
      	},
      	font:{
      	  family: 'Source Sans Pro',
      	  size: 0.5 // always in vw
      	},
        border: '1px solid gray',
        boxShadow: 'none'
      }
    },


    // Compressor 1 Status icon and label
    {
      equipment_id: 1,
      data_id: 127,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      synopticComponent:{
      	componentName:'SynopticStatusIcon',
      	clientRect: {
      	  top: 150,
      	  left: 185,
      	  width: 48,
      	  height: 48
      	},
      	font:{
      	  family: 'Source Sans Pro',
      	  size: 1 // always in vw
      	},
      	stateImages: [
      		{state: 21, backgroundColor: 'transparent', img: '/custom/images/electric_motor_gray.svg'},
      		{state: 22, backgroundColor: 'transparent', img: '/custom/images/electric_motor_green.svg'},
      		{state: 23, backgroundColor: 'transparent', img: '/custom/images/electric_motor_red.svg'}
      	],
        border: 'none',
        boxShadow: 'none'
      }
    },
    {
      equipment_id: 1,
      data_id: 127,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticStatusLabel',
        clientRect: {
          top: 350,
          left: 123,
          width: 130,
          height: 28
        },
        font:{
          family: 'Source Sans Pro',
          size: 0.8 // always in vw
        },
        stateImages: [
          {state: 21, backgroundColor: 'rgba(158, 157, 157, 0.68)', label: 'Desligado'},
          {state: 22, backgroundColor: 'rgba(49, 245, 0, 0.69)', label: 'Ligado'},
          {state: 23, backgroundColor: 'rgba(244, 67, 54, 0.68)', label: 'Sobrecarga'}
        ],
        border: '1px solid black',
        boxShadow: 'none',
        backgroundColor: 'transparent'
      }
    },


    // Compressor 1 total and partial hours
    {
      equipment_id: 1,
      data_id: 127,
      format:'Horas totais: %.2f',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticFormattedDisplayValue',
        clientRect: {
          top: 570,
          left: 352,
          width: 160,
          height: 20
        },
        font:{
          family: 'Source Sans Pro',
          size: 0.5 // always in vw
        },
        border: '1px solid gray',
        boxShadow: 'none'
      }
    },
    {
      equipment_id: 1,
      data_id: 129,
      format:'Horas parciais: %.2f',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticFormattedDisplayValue',
        clientRect: {
          top: 592,
          left: 352,
          width: 160,
          height: 20
        },
        font:{
          family: 'Source Sans Pro',
          size: 0.5 // always in vw
        },
        border: '1px solid gray',
        boxShadow: 'none'
      }
    },
    // Compressor 2 Status icon and label
    {
      equipment_id: 1,
      data_id: 129,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticStatusIcon',
        clientRect: {
          top: 145,
          left: 442,
          width: 48,
          height: 48
        },
        font:{
          family: 'Source Sans Pro',
          size: 1 // always in vw
        },
        stateImages: [
          {state: 41, backgroundColor: 'transparent', img: '/custom/images/electric_motor_gray.svg'},
          {state: 42, backgroundColor: 'transparent', img: '/custom/images/electric_motor_green.svg'},
          {state: 43, backgroundColor: 'transparent', img: '/custom/images/electric_motor_red.svg'}
        ],
        border: 'none',
        boxShadow: 'none'
      }
    },
    {
      equipment_id: 1,
      data_id: 129,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticStatusLabel',
        clientRect: {
          top: 350,
          left: 375,
          width: 130,
          height: 28
        },
        font:{
          family: 'Source Sans Pro',
          size: 0.8 // always in vw
        },
        stateImages: [
          {state: 41, backgroundColor: 'rgba(158, 157, 157, 0.68)', label: 'Desligado'},
          {state: 42, backgroundColor: 'rgba(49, 245, 0, 0.69)', label: 'Ligado'},
          {state: 43, backgroundColor: 'rgba(244, 67, 54, 0.68)', label: 'Sobrecarga'}
        ],
        border: '1px solid black',
        boxShadow: 'none',
        backgroundColor: 'transparent'
      }
    },

    {
      equipment_id: 1,
      data_id: 127,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      chart: {
        type: 'line',
        color: "#ffce56",
        trend: false,
        label: 'Temp Comp 1',
        scale: 'left'
      },
      synopticComponent:{
        componentName:'SynopticIconizedDisplayValue',
        clientRect: {
          top: 50,
          left: 90,
          width: 160,
          height: 42
        },
        font:{
          family: 'Source Sans Pro',
          size: 1 // always in vw
        },
        children:[
          {
            data_id: 127,
            decimals: 0,
            componentName:'SynopticStatusIcon',
            synopticComponent:{
              stateImages: [
                {state: 1, backgroundColor: '#ff916f', img: '/custom/images/chart-line-down.png'},
                {state: 2, backgroundColor: '#e6e6e6', img: '/custom/images/chart-line-steady.png'},
                {state: 3, backgroundColor: '#84ff89', img: '/custom/images/chart-line-up.png'}
              ]
            }
          }
        ]
      }
    },
    {
      equipment_id: 1,
      data_id: 129,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      chart: {
        type: 'line',
        color: '#9966ff',
        trend: false,
        label: 'Pressao',
        scale: 'right'
      },
      synopticComponent:{
        componentName:'SynopticIconizedDisplayValue',
        clientRect: {
          top: 50,
          left: 340,
          width: 160,
          height: 42
        },
        font:{
          family: 'Source Sans Pro',
          size: 1 // always in vw
        },
        children:[
          {
            data_id: 129,
            decimals: 0,
            componentName:'SynopticStatusIcon',
            synopticComponent:{
              stateImages: [
                {state: 1, backgroundColor: '#ff916f', img: '/custom/images/chart-line-down.png'},
                {state: 2, backgroundColor: '#e6e6e6', img: '/custom/images/chart-line-steady.png'},
                {state: 3, backgroundColor: '#84ff89', img: '/custom/images/chart-line-up.png'}
              ]
            }
          }
        ]
      }
    },
    {
      equipment_id: 1,
      data_id: 127,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticIconizedDisplayValue',
        clientRect: {
          top: 115,
          left: 785,
          width: 160,
          height: 42
        },
        font:{
          family: 'Source Sans Pro',
          size: 1 // always in vw
        },
        children:[
          {
            data_id: 127,
            decimals: 0,
            componentName:'SynopticStatusIcon',
            synopticComponent:{
              stateImages: [
                {state: 1, backgroundColor: '#ff916f', img: '/custom/images/chart-line-down.png'},
                {state: 2, backgroundColor: '#e6e6e6', img: '/custom/images/chart-line-steady.png'},
                {state: 3, backgroundColor: '#84ff89', img: '/custom/images/chart-line-up.png'}
              ]
            }
          }
        ]
      }
    },
    {
      equipment_id: 1,
      data_id: 129,
      decimals: 0,
      format:'',
      refreshInterval: 0,
      synopticComponent:{
        componentName:'SynopticIconizedDisplayValue',
        clientRect: {
          top: 605,
          left: 685,
          width: 160,
          height: 42
        },
        font:{
          family: 'Source Sans Pro',
          size: 1
        },
        children:[
          {
            data_id: 127,
            decimals: 0,
            componentName:'SynopticStatusIcon',
            synopticComponent:{
              stateImages: [
                {state: 1, backgroundColor: '#ff916f', img: '/custom/images/chart-line-down.png'},
                {state: 2, backgroundColor: '#e6e6e6', img: '/custom/images/chart-line-steady.png'},
                {state: 3, backgroundColor: '#84ff89', img: '/custom/images/chart-line-up.png'}
              ]
            }
          }
        ]
      }
    }
  ]
}
