import { CONTROL_TYPE, RADIO_BUTTON, SELECT } from '../../../../../modules/fwk/core/model/dynamic-form/dynamic-field';

export const FORMULARIO_CREATE_BEHAVIOR: any[] = 
[
  {
    fieldKey: 'nivelAcceso',
    condition: {
      if: [
        {
          key: 'nivelAcceso',
          value: 'R',
        } 
      ],
      then: [
        {
            key: 'accesoMatriculado',
            controlType: 'checkbox',
          },
          {
          key: 'accesoNoMatriculado',
          controlType: 'checkbox',
          },

      ],
      else: [

      ]            
    }
  },
  {
    fieldKey: 'nivelAcceso',
    condition: {
      if: [
        {
          key: 'nivelAcceso',
          value: 'A',
        } 
      ],
      then: [
        {
          key: 'accesoMatriculado',
          controlType: 'hidden',
          value: false

        },
        {
        key: 'accesoNoMatriculado',
        controlType: 'hidden',
        value: false
        }
      ],
      else: [

      ]            
    }
  },
  // {
  //   fieldKey: 'nivelAcceso',
  //   condition: {
  //     if: [
  //       {
  //         key: 'nivelAcceso',
  //         value: 'A',
  //       } 
  //     ],
  //     then: [
  //       {
  //         key: 'accesoMatriculado',
  //         controlType: 'hidden'
  //       },
  //       {
  //       key: 'accesoNoMatriculado',
  //       controlType: 'hidden'
  //       },


  //     ],
  //     else: [

  //     ]            
  //   }
  // },
  {
    fieldKey: 'accesoMatriculado',
    condition: {
      if: [
        {
          key: 'accesoMatriculado',
          value: true,
        } 
      ],
      then: [
        {
            key: 'estadosMatricula',
            controlType: SELECT
        },


      ],
      else: [
        {
            key: 'estadosMatricula',
            controlType: 'hidden'
        },
      ]            
    }
  },
  {
    fieldKey: 'estadosMatricula',
    condition: {
      if: [
        {
          key: 'estadosMatricula',
          value: 'S',
        } 
      ],
      then: [
        {
            key: 'estadosSeleccionados',
            controlType: 'simple-pick-list'
        },

      ],
      else: [
        {
            key: 'estadosSeleccionados',
            controlType: 'hidden'
        },
      ]            
    }
  },
];


