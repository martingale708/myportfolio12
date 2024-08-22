import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledButtonStyle = createGlobalStyle`
    .intro__desc-cv, .error__button, .project__button {
        background-color: ${(props) =>
          props.theme.darkMode ? '#A3DEE7' : '#2200B8'};
        border: none;
        border-radius: 1000px;
        cursor: pointer;
        height: 50px;     
        margin-top: 10px; 
        transition: all 0.3s ease-in-out 0s;
        position: relative;
        width: 220px;     
    } 
    .form__button {
        background-color: ${(props) =>
          props.theme.darkMode ? '#A3DEE7' : '#2200B8'};
        border: none;    
        border-radius: 1000px;
        cursor: pointer;
        height: 50px;  
        margin-top: 40px;
        transition: all 0.3s ease-in-out 0s;
        position: relative;
        width: 220px;  
    }
    .intro__desc-cv::before, .error__button::before,
    .form__button::before, .project__button::before  {
        border: ${(props) =>
          props.theme.darkMode ? '6px solid #A3DEE7' : '6px solid #2200B8'};
        box-shadow: ${(props) =>
          props.theme.darkMode
            ? '0 0 60px #a3dee7a3'
            : '0 0 60px #2200B8A3'} ;    
    }
    .intro__desc-cv::after, .error__button::after,
    .form__button::after, .project__button::after  {
        border: ${(props) =>
          props.theme.darkMode ? '6px solid #a3dee7' : '6px solid #2200B8'};
    }
    .theme-color {
        color: ${(props) => (props.theme.darkMode ? 'black' : 'white')};
        font-size: 16px;    
    }
`

function ButtonStyle() {
  const { darkMode } = useTheme()

  return <StyledButtonStyle theme={{ darkMode }} />
}

export default ButtonStyle
