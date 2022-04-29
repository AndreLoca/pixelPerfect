import React, { useState, useRef } from 'react'

//Utils
import { checkIsRegular } from '../../utils/utils';

//Styles
import './Login.css';
import LandscapeIcon from '@material-ui/icons/Landscape';
import { faUnlockAlt, faUser } from '@fortawesome/free-solid-svg-icons'

//Routing
import { useNavigate } from "react-router-dom";

//Components
import Input from '../../components/funcComponents/ui/uiInputForm/InputForm';
import Button from '../../components/funcComponents/ui/uiButton/ButtonForm';
import Checkbox from '../../components/funcComponents/ui/uiCheckbox/Checkbox';
import Switch from '../../components/funcComponents/ui/uiSwitch/Switch';

//Localization
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export default function Login() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const LANG1 = 'en';
    const LANG2 = 'it';

    const idToName = ['Username', 'Password']
    const [state, setState] = useState({
        username: '',
        password: '',
        alertUsername: false,
        alertPassword: false,
        pswConfirm: null
    });

    function detectInput(input, id) {
        setState({
            ...state,
            [idToName[id].toLocaleLowerCase()]: input
        })
    }

    /* console.log(state) */

    const loginUser = () => {
        let id = null;
        let pswConfirmation = false;
        pswConfirmation = checkIsRegular('password', state.password);
        setState({
            ...state,
            alertUsername: false,
            alertPassword: false
        })
        if (state.username !== '' && state.password !== '' && state.pswConfirm == true) {
            navigate(
                "/"
            )
        } else if (state.username === '' && state.password === '') {
            setState({
                ...state,
                alertUsername: true,
                alertPassword: true
            })
            return;
        }
        else if (state.username === '') {
            id = 0;
        }
        else if (state.password === '') {
            id = 1;
        }

        setState({
            ...state,
            [`alert${idToName[id]}`]: true,
            pswConfirm: pswConfirmation
        })
    }

    function onLangSwitch(newLang) {
        if (newLang) {
            i18n.changeLanguage(LANG2);
        }
        else {
            i18n.changeLanguage(LANG1);
        }
    }

    //RENDER

    return (
        <div className='form_background'>
            <div className='login_container'>
                <div className='switch_container'>
                    <Switch
                        callback={onLangSwitch}
                        defaultLang={LANG1}
                        translateToLang={LANG2}
                    />
                </div>
                <div className='login_title'>
                    <div className='login_icon'>
                        <LandscapeIcon className='landscape_icon'></LandscapeIcon>
                    </div>
                    <h1>{t('LOG IN')}</h1>
                    <p></p>
                </div>
                <div className='form_container'>
                    <form>
                        <div className='form_input'>
                            <Input
                                id={0}
                                placeholder={t('Username')}
                                type={'text'}
                                tabindex={0}
                                required={true}
                                icon={faUser}
                                callback={detectInput}
                                alert={state.alertUsername === true ? true : false}
                                state={state}
                                setstate={setState}
                            />
                            <Input
                                id={1}
                                placeholder={'Password'}
                                type={'password'}
                                tabindex={1}
                                required={true}
                                icon={faUnlockAlt}
                                callback={detectInput}
                                alert={state.alertPassword === true ? true : false}
                                state={state}
                                setstate={setState}
                            />
                        </div>
                        <Checkbox
                            label={t('Remember me')}
                        />
                        <div className='form_button'>
                            <Button
                                label={t('Sign Up')}
                                type={'button'}
                            />
                            <Button
                                label={t('Login')}
                                type={'button'}
                                callback={loginUser}
                            />
                        </div>
                    </form>
                </div>
                <p onClick={() => {
                    navigate(
                        "/password_reset"
                    )
                }
                } className='forgot_password'>{t('Forgot Password?')}</p>
            </div>
        </div>
    )
}
