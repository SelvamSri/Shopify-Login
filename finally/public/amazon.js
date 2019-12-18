const image = {





    logo: {
      position: 'absolute',
      top: '15px',
      left: '30px',
      cursor: 'pointer',
    },
    logo1: {
      position: 'absolute',
      top: '15px',
      left: '155px', 
      cursor: 'pointer',
    },
    
    logo2: {
      position: 'absolute',
      top: '15px',
      left: '285px', 
      cursor: 'pointer',
    },
    logo3: {
      position: 'absolute',
      top: '15px',
      left: '415px',
      cursor: 'pointer',
    },
    logo4: {
      position: 'absolute',
      top: '15px',
      left: '545px',
      cursor: 'pointer',
    },
    loginwith: {
      position: 'absolute',
      top: '150px',
      left: '150px',
    }
    }
function MyImage() {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <img style={image.logo2} src='./amazon_logo.png' title="facebook login" alt="facebook" height="150px" width="150px" />
  }
  
  export default MyImage