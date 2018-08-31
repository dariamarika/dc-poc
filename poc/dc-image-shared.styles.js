import { html } from '@polymer/polymer/polymer-element.js';

export const imageSharedStyles = html`
    <style>
        :host {
            align-items: center;
            background-color: rgb(13, 26, 38);
            background-image: linear-gradient(rgb(13, 26, 38), rgb(27, 52, 75));
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
            font-size: 1.2em;
            height: 50px;            
            left: 0;
            opacity: 0.95;   
            position: fixed;
            top: 0;
            width: 100%;                
        }
        .button {
            border: 2px solid rgb(41, 77, 112);
            background-color: rgb(13, 26, 38);            
            color: rgb(236, 242, 248);
            padding: 10px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            transition-duration: 0.4s;
            border-radius: 4px;
        }
        .button:hover {
            background-color: rgb(28, 52, 74);            
        }
        .input {
            display: inline-block;
            border: 2px solid rgb(41, 77, 112);
            background-color: rgb(218, 230, 241);
            padding: 10px 32px;
            font-size: 16px;            
            width: 20%;
            border-radius: 4px;
            margin: 0 5px;            
        }          
        .form {
            width: 50%;
        }              
    </style>
`;