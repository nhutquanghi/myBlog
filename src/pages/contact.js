import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/contact.module.css'

//Đối tượng `Validator`
function Validator(options){
    var selectorRules = [];
    //Hàm thực hiện validate 
    function validate(inputElement, rule){
        var errorMessage;  
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);      
        
        //Lấy ra các rule của selector 
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rules và kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; i++){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }
        
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement){
        options.rules.forEach(function (rule) {

            //Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }


            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement){
                //Xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                }
                //Xử lý người dùng nhập vào input
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);     

                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}


//Định nghĩa các rule
// Nguyên tắt của rule
// 1. Khi có lỗi => trả ra mess error
// 2. Khi hợp lệ => (undefined)
Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined: message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function(selector, min, message){
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message ||  `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';   
        }
    }
}

Validator({
    form: '#form-1', 
    errorSelector: '.formMessage',
    rules: [
        Validator.isRequired('#fullname' , 'Vui lòng nhập tên đầy đủ của bạn'),

        Validator.isRequired('#email'),
        Validator.isEmail('#email'),

        Validator.minLength('#phone', 10),

        Validator.minLength('#password', 6),
        Validator.isRequired('#password_confirmation'),
        Validator.isConfirmed('#password_confirmation', function() {
            return document.querySelector('#form-1 #password').value;
        }, 'Mật khẩu nhập lại không chính xác')
    ]
});


export default function Contact() {
    return (
        <Layout>
                <form className={`form ${styles.form}`} name="form" id="form-1" action="#">

                    <h3 className={`pageTitile ${styles.pageTitle} ${styles.title}` }>Contact Us </h3>
                    <p className={`secondaryTitle ${styles.secondaryTitle} ${styles.title}`}>Please fill this form to contact us.</p>

                    <div className={`spacer ${styles.spacer}`}></div>

                    <div className={`form-group`}>
                        <label htmlFor="fullname" className={`formLable ${styles.formLable}`}>Fullname:</label>
                        <span className={`formMessage ${styles.formMessage}`}></span>
                        <input className={`name ${styles.name} ${styles.formEntry}`} id="fullname" name="fullname" type="text" placeholder="VD: Trần Huỳnh Nhựt Quang" />
                    </div>

                    <div className={`form-group`}>
                        <label htmlFor="phone" className={`formLable ${styles.formLable}`}>Phone:</label>
                        <span  className={`formMessage ${styles.formMessage}`}></span>
                        <input className={`phone ${styles.phone} ${styles.formEntry}`} id="phone" name="phone" type="text" placeholder="VD: 0123456789" />
                    </div>

                    <div className={`form-group`}>
                        <label htmlFor="email" className={`formLable ${styles.formLable}`}>Email</label>
                        <span className={`formMessage ${styles.formMessage}`}></span>
                        <input className={`email ${styles.email} ${styles.formEntry}`} id="email" name="email" type="text" placeholder="VD: email@gmail.com" />
                    </div>

                    <div className={`form-group`}>
                        <label htmlFor="password" className={`formLable ${styles.formLable}`}>Password</label>
                        <span className={`formMessage ${styles.formMessage}`}></span>
                        <input className={`email ${styles.email} ${styles.formEntry}`} id="password" name="password" type="password" placeholder="Nhập vào mật khẩu của bạn" />
                    </div>

                    <div className={`form-group`}>
                        <label htmlFor="password_confirmation" className={`formLable ${styles.formLable}`}>Password Confirmation</label>
                        <span className={`formMessage ${styles.formMessage}`}></span>
                        <input className={`email ${styles.email} ${styles.formEntry}`} id="password_confirmation" name="password_confirmation" type="password" placeholder="Nhập lại mật khẩu của bạn" />
                    </div>

                    <div className={`form-group`}>
                        <label htmlFor="message" className={`formLable ${styles.formLable}`}>Message</label>
                        <textarea name="message" id="message" className={`message ${styles.message} ${styles.formEntry}`}></textarea>
                    </div>

                    <button className={`formSubmit ${styles.formSubmit}`}>Finish</button>
                </form>
        </Layout>
    )
}