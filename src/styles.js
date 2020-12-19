import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    fontFamily: 'Roboto,sans-serif'
  },
  '//scrollbar
::-webkit-scrollbar-track': {
    position: 'absolute',
    backgroundColor: '#BFBFBD'
  },
  '::-webkit-scrollbar-thumb': {
    position: 'absolute',
    WebkitBorderRadius: '0px',
    borderRadius: '0px',
    backgroundColor: '#da661b',
    height: [{ unit: 'px', value: 5 }]
  },
  '::-webkit-scrollbar': {
    position: 'absolute',
    width: [{ unit: 'px', value: 4 }],
    height: [{ unit: 'px', value: 4 }],
    transition: '1s'
  },
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#1E222D'
  }
});
