
import React from 'react';
import Button from '@mui/material/Button';
import { FaPlus } from 'react-icons/fa';
import { styled } from '@mui/system';

// Styled component for the CustomButton
const CustomButton = styled(Button)({
    position: 'absolute',
    top: '6px',
    right: '5px',
    width: '148px',
    height: '44px',
    padding: '0px 3px 0px 0px',
    background: 'linear-gradient(93.77deg, #01DCBA 1.69%, #7F30CB 99.58%, rgba(0, 0, 0, 0) 99.58%, #7F30CB 99.58%), linear-gradient(94.74deg, #01DCBA 2.53%, #7F30CB 97.69%)',

    borderImageSource: 'linear-gradient(93.77deg, #01DCBA 1.69%, #7F30CB 99.58%, rgba(0, 0, 0, 0) 99.58%, #7F30CB 99.58%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
    borderRadius: '10px',
});

// Styled component for the Text inside the button
const CustomButtonText = styled('div')({
   //  fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '17px',
    letterSpacing: '0em',
    textAlign: 'left',
    textTransform: 'none',
});

const ButtonComponent: React.FC = () => {
    return (
        <CustomButton variant="contained">
            <FaPlus style={{ marginRight: '5px' }} />
            <CustomButtonText>Add New Task</CustomButtonText>
        </CustomButton>
    );
};

export default ButtonComponent;