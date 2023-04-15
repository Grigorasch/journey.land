import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"
import { Form, useBeforeUnload } from "react-router-dom";
import styled from "styled-components";

export default function DialogForm({ modalState }) {
    const dialogRef = useRef();
    //Хук для хранения актуальной ссылки на капчу
    const [urlCaptcha, setUrlCaptcha] = useState('');
    //Функция загружает новую капчу перезаписывая старую. Вызывается при открытии диалога, а также при обновлении капчи вручную или автоматически при неправильно введенной капче.
    const getCaptcha = () => {
        const formData = new FormData();
        formData.append('type', 'get');
        fetch('/php/send.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.blob())
            .then(captcha => {
                //Устанавливаем ссылку на актуальную капчу
                setUrlCaptcha(props => URL.createObjectURL(captcha))
                console.log('OK');
            })
            .catch(error => console.error(error));
    }
    //Функция изменяет хук на false (закрытое состояние диалога). Применяется в двух случаях: 1. Когда нужно закрыть диалог; 2. Когда диалог закрыт без использования хука и теперь необходимо хук привести в соответствие с текущим состоянием диалога.
    const closeDialog = () => {
        setDialogState(props => false);
        console.log('aa');
    }
    const [dialogState, setDialogState] = modalState;



    useEffect(() => {
        const closeButton = document.getElementById('close');
        closeButton.addEventListener('click', closeDialog);
        dialogRef.current.addEventListener('close', closeDialog);
        dialogRef.current.addEventListener('show', getCaptcha);

        return () => {
            closeButton.removeEventListener('click', closeDialog);
            dialogRef.current.removeEventListener('close', closeDialog);
            dialogRef.current.removeEventListener('show', getCaptcha);
        }
    }, []);

    useEffect(() => {
        if (dialogState) {
            getCaptcha();
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [dialogState]);

    return (
        <FeedbackDialog ref={dialogRef} open={true} >
            <FeedbackForm>
                <FormHeading>Закажи обратный звонок</FormHeading>
                <FormDescription>Укажите контактные данные и мы обязательно свяжемся с Вами.</FormDescription>
                <FormFieldLabel htmlFor="name">*Ваше имя</FormFieldLabel>
                <FormField type="text" name="name" id="name" />
                <FormFieldLabel htmlFor="phone">*Номер телефона</FormFieldLabel>
                <FormField type="text" name="phone" id="phone" />
                <FormFieldLabel htmlFor="email">*Email</FormFieldLabel>
                <FormField type="text" name="email" id="email" />
                <CaptchaImg src={urlCaptcha} alt="Капча" id="captcha" />
                <CaptchaField type="text" name="captcha" id="captcha" />
                <button type="submit" id="submit">Отправить заявку</button>
                <button aria-label="Закрыть" id="close">X</button>
            </FeedbackForm>
        </FeedbackDialog>
    )
}

const FeedbackDialog = styled.dialog`
    background: #211e21;
    border: 2px solid #4f4c4e;
    border-radius: 10px;
`

const FeedbackForm = styled(Form)`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    color: #ffffff;
`

const FormHeading = styled.h1`
    margin-bottom: 10px;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;

    @media screen and (max-width: 650px) {
        font-size: 28px;
        line-height: 36px;
    }
    
    @media screen and (max-width: 450px) {
        font-size: 22px;
        line-height: 28px;
    }
`

const FormDescription = styled.p`
    margin-bottom: 15px;
    text-align: center;
    font-size: 20px; 
    font-weight: 500; 
    line-height: 24px;

    @media screen and (max-width: 650px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media screen and (max-width: 450px) {
        font-size: 16px;
        line-height: 20px;
    }
`

const FormFieldLabel = styled.label`
    margin-bottom: 5px;
    font-size: 16px; 
    font-weight: 400; 
    line-height: 18px;

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 26px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`

const FormField = styled.input`
    margin-bottom: 15px;
    padding: 5px 10px;
    font-size: 16px; 
    font-weight: 500; 
    line-height: 18px;

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 26px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`

const CaptchaImg = styled.img`
    margin: 0 auto 10px;
    width: 200px;
    height: 50px;
`

const CaptchaField = styled.input`
    margin: 0 auto 30px;
    padding: 5px 10px;
    width: 200px;
    font-size: 16px; 
    font-weight: 400; 
    line-height: 18px;

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 26px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`