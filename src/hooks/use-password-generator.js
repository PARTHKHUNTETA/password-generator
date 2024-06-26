import React, { useState } from 'react'

const usePasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const generatePassword = (checkboxData, length) => {
        let password = '';
        let charset = '';

        const selectedOption = checkboxData.filter((checkbox) => checkbox.state)

        if (selectedOption.length === 0) {
            setErrorMessage('Please select at least one checkbox')
            setPassword('')
            return;

        }

        selectedOption.forEach(element => {
            switch (element.title) {
                case 'Include Uppercase Letters':
                    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;
                case 'Include Lowercase Letters':
                    charset += 'abcdefghijklmnopqrstuvwxyz';
                    break;
                case 'Include Numbers':
                    charset += '0123456789';
                    break;
                case 'Include Symbols':
                    charset += '!@#$%^&*()_+{}|:"<>?';
                    break;
                default:
                    break;
            }

        });

        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(password);
        setErrorMessage('')
    }


    return { password, errorMessage, generatePassword }
}

export default usePasswordGenerator;