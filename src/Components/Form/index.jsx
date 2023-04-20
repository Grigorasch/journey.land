import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CloseButton from "../Button/CloseButton";
import RefreshButton from "../Button/RefreshButton";
import { SubmitButton } from "../Button/SubmitButton";
import { FormText } from "./langData";

export default function DialogForm({ modalState }) {
    //Загружаем локализацию текста
    const { lang } = useParams();
    const formText = FormText[lang];
    //ref для dialog и form
    const dialogRef = useRef();
    const formRef = useRef();
    //Хуки для полей формы
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [captcha, setCaptcha] = useState('');
    //Хуки для сообщений с ошибкой валидации
    const [nameValidate, setNameValidate] = useState('');
    const [phoneValidate, setPhoneValidate] = useState('');
    const [emailValidate, setEmailValidate] = useState('');
    const [captchaValidate, setCaptchaValidate] = useState('');
    const setValidateMessage = {
        name: setNameValidate,
        phone: setPhoneValidate,
        email: setEmailValidate,
        captcha: setCaptchaValidate
    }
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
            })
            .catch(error => console.error(error));
        setCaptcha('');
    }

    //Функция изменяет хук на false (закрытое состояние диалога). Применяется в двух случаях: 1. Когда нужно закрыть диалог; 2. Когда диалог закрыт без использования хука и теперь необходимо хук привести в соответствие с текущим состоянием диалога.
    const closeDialog = () => {
        setDialogState(props => false);
    }

    const [dialogState, setDialogState] = modalState;
    //Хук для плавного появления и исчезновения модального окна
    const [formOpacity, setFormOpacity] = useState(0);

    //Хук для предварительной настройки при монтаровнии формы
    useEffect(() => {
        //Вешает на событие закрытия dialog вызов функции, которая приводит хук состояния диалога в соответсвие
        const dialog = dialogRef.current;
        dialog.addEventListener('close', closeDialog);
        const inputCollection = formRef.current.getElementsByTagName('input');
        for (let i = 0; i < inputCollection.length - 1; i++) {
            inputCollection[i].addEventListener('keydown', event => {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    inputCollection[i + 1].focus()
                }
            })
        }
        inputCollection[inputCollection.length - 1].addEventListener('keydown', inputCollection[1].focus())

        return () => {
            dialog.removeEventListener('close', closeDialog);
        }
    }, []);

    //Хук для обработки текущего состояния формы. Открывает и закрывает её в соответствии со хуком useState
    useEffect(() => {
        if (dialogState) {
            //Обновляет капчу при открытии формы
            getCaptcha();
            //Показывает форму
            if (!dialogRef.current.open) {
                dialogRef.current.showModal()
            }
            //Запускает плавное появление с задержкой, чтобы отработал метод showModal
            setTimeout(() => setFormOpacity(1));
        } else {
            //Запускает плавное исчезание
            setFormOpacity(0);
            //Закрывает форму, задержка дана для плавного исчезноевния, чтобы сначала отработала анимация
            if (dialogRef.current.open) {
                setTimeout(() => dialogRef.current.close(), 400);
            }
        }
    }, [dialogState]);

    return (
        <FeedbackDialog
            ref={dialogRef}
            onMouseDown={closeDialog}
            formOpacity={formOpacity} >
            <FeedbackForm
                ref={formRef}
                onMouseDown={event => event.stopPropagation()}
                onSubmit={event => formSubmit(event, lang, setValidateMessage, formRef, getCaptcha, closeDialog)}
                action="post">
                <CloseButton onClick={closeDialog} />
                <FormHeading>{formText.formHeading}</FormHeading>
                <FormDescription>{formText.formDescription}</FormDescription>

                <FormFieldLabel htmlFor="name" message={nameValidate}>
                    *{formText.formNameLabel}
                    <FormField
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder={formText.formNameInput}
                        message={nameValidate} />
                </FormFieldLabel>

                <FormFieldLabel htmlFor="phone" message={phoneValidate}>
                    *{formText.formPhoneLabel}
                    <FormField
                        type="text"
                        name="phone"
                        id="phone"
                        inputMode="tel"
                        value={phone}
                        onInput={event => inputPhone(event, phone, setPhone)}
                        placeholder="+7 (987) 654-32-10"
                        message={phoneValidate} />
                </FormFieldLabel>

                <FormFieldLabel htmlFor="email" message={emailValidate}>
                    *{formText.formEmailLabel}
                    <FormField
                        type="text"
                        name="email"
                        id="email"
                        inputMode="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="user@example.com"
                        message={emailValidate} />
                </FormFieldLabel>

                <CaptchaWrapper>
                    <CaptchaImg src={urlCaptcha} alt={formText.formCaptchaLabel} id="captcha" />
                    <RefreshButton onClick={getCaptcha} />
                </CaptchaWrapper>

                <CaptchaField
                    type="text"
                    name="captcha"
                    id="captcha"
                    value={captcha}
                    onChange={event => setCaptcha(event.target.value)}
                    message={captchaValidate} />
                <CaptchaFieldLabel htmlFor="captcha" message={captchaValidate} />
                <SubmitButton />
            </FeedbackForm>
        </FeedbackDialog>
    )
}

function inputPhone(event, phone, setPhone) {
    let currentCaret = event.target.selectionStart;
    let isAuto = true;

    if (currentCaret < event.target.value.length) {
        if (event.target.value.length < phone.length) {
            if (currentCaret === 3 || currentCaret === 8 || currentCaret === 13 || currentCaret === 16) {
                currentCaret -= 1;
            } else if (currentCaret === 4 || currentCaret === 9) {
                currentCaret -= 2;
            }
        } else {
            if (currentCaret === 4 || currentCaret === 9 || currentCaret === 13 || currentCaret === 16) {
                currentCaret += 1;
            } else if (currentCaret === 3 || currentCaret === 8) {
                currentCaret += 2;
            }
        }
        isAuto = false;
    }
    phoneNumberFormatter(event.target.value, setPhone);
    if (!isAuto) {
        setTimeout(() => event.target.setSelectionRange(currentCaret, currentCaret));
    }
}

//Отправка формы
function formSubmit(event, lang, setValidateMessage, formRef, getCaptcha, closeDialog) {
    event.preventDefault();
    let isFormValidate = true;
    const validateStatus = formFieldValidate(event);

    for (let key in validateStatus) {
        if (validateStatus[key]) {
            setValidateMessage[key](validateStatus[key][lang]);
            isFormValidate = false;
        } else {
            setValidateMessage[key]('');
            isFormValidate = isFormValidate && true;
        }
    }

    if (isFormValidate) {
        sendRequest(formRef, setValidateMessage, lang, getCaptcha, closeDialog);
        getCaptcha();
    }
}

//Отправка запроса на сервер и обработка ответа
function sendRequest(formRef, setValidateMessage, lang, getCaptcha, closeDialog) {
    const formData = new FormData(formRef.current);
    formData.append('type', 'put');
    fetch('/php/send.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            switch (data) {
                case "Missing Captcha Field":
                case "Invalid Captcha":
                    setValidateMessage.captcha(regexpFormField.captcha[lang]);
                    break
                case "Captcha Timeout":
                    getCaptcha0();
                    break
                case "Error Sending Email":

                    break
                case "Success":
                    closeDialog();
                    break;
                default:
                    console.log('Message request ' + data);
            }
        })
        .catch(error => console.error(error));

}

/**
 * Функция для наложения маски на номера телефона
 *
 * @param {string} inputValue - входящее значение номера телефона
 * @param {function} setPhone - функция для обновления значения поля input
 */
function phoneNumberFormatter(inputValue, setPhone) {
    // Удаляем все символы, кроме цифр
    // inputValue = inputValue.replace(/\D/g, "");

    // Если длина входящего значения равна 1, то проверяем на соответствие шаблону и форматируем соответственно
    if (inputValue.length === 1) {
        if (inputValue === "7" || inputValue === "8") {
            inputValue = "+7";
        } else if (inputValue === "9") {
            inputValue = "+7 (9";
        }
    } else {
        // Условие, которое вызывает phoneSeparation только когда введено больше
        // 4х символов "+7 (", если <=4, то выводится просто это значение.
        if (!/^\+\d(\s\(?)?$/.test(inputValue)) {
            inputValue = phoneSeparation(inputValue);
        }
    }

    // Обновляем значение поля input
    setPhone(inputValue);
}

/**
 * Рекурсивная функция для разделения номера телефона на части.
 * 1 шаг - в полученных данных оставляем только числа;
 * 2 шаг - в зависимости от длины строки, отсекаем справа цифры до разделителя,
 *         остальное передаётся рекурсивно в себя же;
 * 3 шаг - при длине строки <=4 рекурсия прекращается и происходит сборка 
 *         итоговой строки слева на право.
 *
 * @param {string} phone    номер телефона в виде строки
 * @returns {string}        отформатированный номер телефона
 */
function phoneSeparation(phone) {
    // Удаляем все символы, кроме цифр, из номера телефона
    phone = phone.replace(/\D/g, "");
    // Если длина номера больше 11 символов, форматируем его и отбрасываем, всё что дальше 11 символа
    if (phone.length > 11) {
        return phoneSeparation(phone.substring(0, 9)) + '-' + phone.substring(9, 11);
    } else if (phone.length > 9) {
        // Если длина номера больше 9 символов, то разбиваем его на две части с разделителем "-"
        return phoneSeparation(phone.substring(0, 9)) + '-' + phone.substring(9);
    } else if (phone.length > 7) {
        // Если длина номера больше 7 символов, то разбиваем его на две части с разделителем "-"
        return phoneSeparation(phone.substring(0, 7)) + '-' + phone.substring(7);
    } else if (phone.length > 4) {
        // Если длина номера больше 4 символов, то разбиваем его на две части с разделителем ") "
        return phoneSeparation(phone.substring(0, 4)) + ') ' + phone.substring(4);
    } else if (phone.length > 1) {
        // Если длина номера больше 1 символа, то разбиваем его на две части с разделителем "+ ("
        return '+' + phone.substring(0, 1) + ' (' + phone.substring(1);
    } else {
        // Если длина номера меньше или равна 1 символу, возвращаем исходный номер телефона
        return phone;
    }
}

/**
 * Функция для валидации полей формы
 *
 * @param {Event} event     целевое событие
 * @returns {Object}        объект с результатами валидации. Если валидация пройдена,
 *                          то в объекте, в соответсвующем поле будет undefinde. Если
 *                          не пройдена, то будет содержаться объект соответсвующий
 *                          regexpFormFieldfieldName
 */
function formFieldValidate(event) {
    // Получаем все input-элементы из целевого события
    const formFields = event.target.getElementsByTagName('input');
    // Создаем объект для хранения результатов валидации
    const fieldResults = {};
    // Проходимся по всем полям формы
    for (let field = 0; field < formFields.length; field++) {
        // Получаем имя поля
        const fieldName = formFields[field].id;
        // Получаем значение поля и удаляем пробелы с начала и конца
        const fieldValue = formFields[fieldName].value.trim();
        // Валидируем поле с помощью регулярных выражений, сохраняем результат в объект fieldResults
        fieldResults[fieldName] = regexpFormField[fieldName].find(rule => !rule.rule.test(fieldValue));
    }
    // Возвращаем объект с результатами валидации
    return fieldResults;
}

//Объект, хранящий все регулярные выражения для валидации каждого из полей.
//Регулярные выражения идут в том порядке, в котором должна выполняться проверка.
//Вместе с каждым regexp находится описание ошибки, которое будет выводиться пользователю.
const regexpFormField = {
    name: [
        {
            rule: /.+/,
            ru: "Поле обязательно для заполнения.",
            en: "Required field."
        },
        {
            rule: /^.{2,255}$/,
            ru: "Поле должно содержать от 2 до 255 символов.",
            en: "The field must be from 2 to 255 characters."
        },
        {
            rule: /^[a-zA-Zа-яА-ЯёЁ0-9_\-\s]+$/,
            ru: "Поле может содержать только буквы (латинские и русские), цифры, пробел, дефис и нижнее подчёркивание",
            en: "The field can contain only letters (Latin and Russian), numbers, space, hyphen and underscore"
        },
        {
            rule: /[^@#$%^&\*\()\+={}[\]|\\/:;"'<>?!]+/,
            ru: "Поле не должно содержать следующие символы: @, #, $, %, ^, &, *, (, ), +, =, {, }, [, ], |, \, /, :, ;, \", ', <, >, ?, !",
            en: "The field must not contain the following characters:  @, #, $, %, ^, &, *, (, ), +, =, {, }, [, ], |, \, /, :, ;, \", ', <, >, ?, !"
        }
    ],

    phone: [
        {
            rule: /^\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
            ru: "Номер телефона должен состоять из 11 цифр.",
            en: "The phone number must consist of 11 digits."
        }
    ],

    email: [
        {
            rule: /.+/,
            ru: "Поле обязательно для заполнения.",
            en: "Required field."
        },
        {
            rule: /^.{6,255}$/,
            ru: "Поле должно содержать от 6 до 255 символов.",
            en: "The field must be from 6 to 255 characters."
        },
        {
            rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
            ru: "Адрес почты должен иметь формат user@example.com.",
            en: "The email address must be in the format user@example.com."
        },

    ],
    captcha: [
        {
            rule: /\d{5}/,
            ru: "Поле должно содержать 5 цифр идущих друг за другом.",
            en: "The field must contain 5 consecutive digits."
        }
    ]
}

const FeedbackDialog = styled.dialog`
    margin: 0;
    padding: 10px;
    width: 100%;
    max-width: none;
    height: 100%;
    max-height: none;
    background: #211e21b0;
    transition: opacity 0.3s;
    opacity: ${props => props.formOpacity};
`

const FeedbackForm = styled.form`
    position: relative;
    top: 50%;
    transform:translateY(-50%);

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    max-width: 400px;
    color: #ffffff;
    background: #211e21;
    border: 2px solid #4f4c4e;
    border-radius: 10px;
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
    position: relative;
    margin-bottom: 15px;
    font-size: 16px; 
    font-weight: 400; 
    line-height: 18px;

    &::after {
        content: "${props => props.message}";
        display: block;
        color: #ff0000;
    }

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`

const FormField = styled.input`
    display: block;
    margin: 0 0 5px;
    padding: 5px 10px;
    width: 100%;
    font-size: 16px; 
    font-weight: 500; 
    line-height: 18px;
    border-radius: 5px;
    border-color: ${props => (props.message) ? '#ff0000' : '#767676'};
    color: ${props => (props.message) ? '#ff0000' : '#000000'};

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`

const CaptchaWrapper = styled.div`
    text-align: center;    
`

const CaptchaImg = styled.img`
    vertical-align: middle;
    margin: 20px 15px 10px 0;
    width: 200px;
    height: 50px;
`

const CaptchaField = styled.input`
    vertical-align: text-top;
    margin: 0 auto 5px;
    padding: 5px 10px;
    width: 150px;
    font-size: 16px; 
    font-weight: 400; 
    line-height: 18px;
    border-radius: 5px;
    border-color: ${props => (props.message) ? '#ff0000' : '#767676'};
    color: ${props => (props.message) ? '#ff0000' : '#000000'};

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 26px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`

const CaptchaFieldLabel = styled.label`
    position: relative;
    margin: 0 auto 15px;
    width: 220px;
    font-size: 16px; 
    font-weight: 400; 
    line-height: 18px;
    text-align: center;

    &::after {
        content: "${props => props.message}";
        display: block;
        color: #ff0000;
    }

    @media screen and (max-width: 650px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        line-height: 14px;
    }
`