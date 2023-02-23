import styled from 'styled-components';

export const Wrapper = styled.section({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#fffff'
});

export const WrapperButton = styled.div({
  width: '70%',
  height: 'auto',
  padding: '50px 0',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '15px'
});

export const Button = styled.button({
  width: '100px',
  '&:nth-child(1)': {
    width: '200px'
  },
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
      margin: '5px 0',
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
    scale: ({ isOpenFilter }) => (isOpenFilter ? '1' : '0'),
    '> form': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '> input': {
        appearance: 'none',
        backgroundColor: '#fff',
        margin: '0',
        font: 'inherit',
        width: '1.15em',
        height: '1.15em',
        border: '1px solid black',
        borderRadius: '50%',
        transition: '0.3s box-shadow ease-in-out',
        '&:checked': {
          boxShadow: 'inset 1em 1em #D61355'
        }
      },

      '> input, > label': {
        cursor: 'pointer',
        fontSize: '17px'
      },
      '> label:hover': {
        color: '#D61355'
      }
    }
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
  border-colapse: collapse;
  th,
  td {
    padding: 9px 21px;
    border: 1px solid #cccccc;
    border-spacing: 0;
  }

  th,
  td:last-child {
    border-rigth: 1px solid red;
  }
  td:first-child {
    /* border-top: 1px solid #cccccc; */
  }
  /* Table Header */
  thead th {
    background-color: ${(props) =>
      (props.themeCurrent && props.themeCurrent.headerColor) || '#2ECD71'};
    color: ${(props) =>
      (props.themeCurrent && props.themeCurrent.headerTextColor) || '#fffff'};
  }

  /*table Body */
  tbody td {
    color: ${(props) =>
      (props.themeCurrent && props.themeCurrent.detailTextColor) || '#fffff'};
  }
  tbody tr {
    background-color: ${(props) =>
      (props.themeCurrent && props.themeCurrent.detailColor) || 'white'};
  }
  tbody tr:nth-child(odd) td {
    /* background-color: #f5fff9; */
  }
  tbody tr:hover th,
  tbody tr:hover td {
    background-color: #f0f0f0;
    transition: all 0.2s;
  }
`;
