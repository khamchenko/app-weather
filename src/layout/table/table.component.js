import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ':host': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: '1'
  },
  view_table: {
    backgroundColor: 'rgb(72 72 74)',
    color: '#FFF',
    margin: [{ unit: 'px', value: 24 }, { unit: 'px', value: 24 }, { unit: 'px', value: 24 }, { unit: 'px', value: 24 }],
    borderRadius: '4px',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 2 }, { unit: 'px', value: 1 }, { unit: 'px', value: -1 }, { unit: 'string', value: 'rgba(0,0,0,0.2)' }, { unit: 'string', value: 'rgba(0,0,0,0.2),
' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0,0,0,0.14)' }, { unit: 'string', value: 'rgba(0,0,0,0.14),
' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 3 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0,0,0,0.12)' }]
  },
  view_row: {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(81, 81, 81, 1)' }]
  },
  'view_row th': {
    cursor: 'pointer'
  },
  'th:nth-child(1)': {
    textAlign: 'left'
  },
  'td:nth-child(1)': {
    textAlign: 'left'
  },
  view_elem: {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    textAlign: 'right'
  },
  view_elem_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  'view_elem_wrapper:hover': {
    color: '"#d9d9d9"'
  },
  'view_elem_wrapper img': {
    height: [{ unit: 'px', value: 12 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }],
    opacity: '0'
  },
  'view_elem_wrapper:hover img': {
    opacity: '1'
  },
  'view_elem_wrapper span': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }]
  }
});
