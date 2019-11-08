import styled from '@emotion/styled';

const styleVariables = {
  mainFontColor: '#444444',
  mainBackgroundColor: 'white', 
  secondaryFontColor: null,
  secondaryBackgroundColor: null,
  mainFontFamily: 'Times New Roman',
  secondaryFontFamily: null,
  fontSizeH1: '2.4rem',
  fontSizeH2: '2rem',
  fontSizeH3: '1.8rem',
  fontSizeH4: null,
  fontSizeH5: null,
  fontSizeH6: null,
  fontSizeH7: null,
  fontSizeP: '1.6rem',
  fontSizeSmall: '1.2rem',
}

export const Container = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: ${
    props => props.fd === 'c' ?
    'column' :
    props.fd === 'r' ?
    'row' :
    props.fd === 'rc' ?
    'column-reverse' :
    props.fd === 'rr' ?
    'row-reverse' :
    null
  };
  justify-content: ${
    props => props.jc === 'fs' ?
    'flex-start' :
    props.jc === 'fe' ?
    'flex-end' :
    props.jc === 'c' ?
    'center' :
    props.jc === 'sb' ?
    'space-between' :
    props.jc === 'sa' ?
    'space-around' :
    props.js === 'se' ?
    'space-evenly' :
    null
  };
  align-items: ${
    props => props.ai === 'fs' ?
    'flex-start' :
    props.ai === 'fe' ?
    'flex-end' :
    props.ai === 'c' ?
    'center' :
    props.ai === 's' ?
    'stretch' :
    props.ai === 'b' ?
    'baseline' :
    null
  };
  align-content: ${
    props => props.ac === 'fs' ?
    'flex-start' :
    props.ac === 'fe' ?
    'flex-end' :
    props.ac === 'c' ?
    'center' :
    props.ac === 'sb' ?
    'space-between' :
    props.ac === 'sa' ?
    'space-around' :
    props.ac === 'se' ?
    'space-evenly' :
    props.ac === 's' ?
    'stretch' :
    null
  };
  background-color: ${props => props.bgColor};
  margin: ${props => props.centre === 'y' ? 'auto' : null}
`

export const ImageW100 = styled.img`
  max-width: 100%;
`

export const H1 = styled.h1`
  font-size: ${styleVariables.fontSizeH1};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
`
export const H2 = styled.h2`
  font-size: ${styleVariables.fontSizeH2};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
`
export const H3 = styled.h3`
  font-size: ${styleVariables.fontSizeH3};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
`

export const P = styled.p`
  font-size: ${styleVariables.fontSizeP};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
`

export const Input = styled.input`
  font-size: ${styleVariables.fontSizeP};
  color: ${styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
`