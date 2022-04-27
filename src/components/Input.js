import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Input = () => {
    const [user_name, setUserName] = useState("");
    const [pwd, setPwd] = useState("");

    const [is_email, setIsEmail] = useState(false);
    const [is_pwd, setIsPwd] = useState(false);

    const onChangeEmail = (e) => {
        const email_reg =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const current_email = e.target.value;

        setUserName(current_email);

        if (!email_reg.test(current_email)) {
            setIsEmail(false);
        } else {
            setIsEmail(true);
        }
    }

    const onChangePwd = (e) => {
        const pwd_reg =
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        const current_pwd = e.target.value;
        setPwd(current_pwd);


        if (!pwd_reg.test(current_pwd)) {
            setIsPwd(false);
        } else {
            setIsPwd(true);
        }
    }


    return (
        <div>
            <h1>Input</h1>
            <InputWrap>
                <InputLabel>E-mail</InputLabel>
                <SignupInput
                    type="text"
                    onChange={onChangeEmail}
                />
                {user_name.length > 0 && !is_email && (
                    <ErrorText>올바른 이메일 형식을 입력해주세요.</ErrorText>
                )}
            </InputWrap>
            <InputWrap>
                <InputLabel>Password</InputLabel>
                <SignupInput
                    type="text"
                    onChange={onChangePwd}
                />
                {pwd.length > 0 && !is_pwd && (
                    <ErrorText>8~20자로 영문 대소문자, 숫자, 특수문자 조합을 사용하세요.</ErrorText>
                )}
            </InputWrap>
        </div>
    );
};


const InputWrap = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SignupInput = styled.input`
  padding-left: 20px;
  width: 460px;
  height: 55px;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 15px;
`;

const InputLabel = styled.label`
  font-weight: 500;
  margin-bottom: 12px;
  text-align: left;
`;

const ErrorText = styled.p`
  position: absolute;
  bottom: -20px;
  left: 10px;
  margin-top: 4px;
  color: red;
`;


export default Input;