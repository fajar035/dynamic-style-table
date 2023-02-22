import styled from 'styled-components';

export const Wrapper = styled.section({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#FFE7CC'
});

export const WrapperButton = styled.div({
  width: '70%',
  height: 'auto',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '15px'
});

export const Button = styled.button({
  width: '100px',
  height: '40px',
  position: 'relative',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  '> div': {
    position: 'absolute',
    borderRadius: '5px',
    overflow: 'hidden',
    transformOrigin: 'top',
    width: '100%',
    top: '47px',
    height: 'auto',
    padding: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    backgroundColor: '#ffff',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: '0.3s',
    '> p': {
      margin: '10px 0',
      fontSize: '16px',
      '&:hover': {
        color: '#674188'
      }
    }
  }
});

export const BtnFilter = styled(Button)({
  backgroundColor: '#FFB84C',
  '> div': {
    scale: ({ isOpenFilter }) => (isOpenFilter ? '1' : '0')
  }
});

export const BtnSort = styled(Button)({
  backgroundColor: '#F16767',
  '> div': {
    scale: ({ isOpenSort }) => (isOpenSort ? '1' : '0')
  }
});

export const BtnTheme = styled(Button)({
  backgroundColor: '#A459D1',
  '> div': {
    scale: ({ isOpenTheme }) => (isOpenTheme ? '1' : '0')
  }
});

export const TableMarkup = styled.table`
  width: 70%;
  height: 50%;
  /* border: 1px solid black; */
`;
