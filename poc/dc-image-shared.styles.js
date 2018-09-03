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
            left: 25%;
            opacity: 0.95;   
            position: fixed;
            top: 0;
            width: 50%;                
        }
        .button {
            background-color: rgb(13, 26, 38);
            border: 2px solid rgb(41, 77, 112);
            border-radius: 4px;                        
            color: rgb(236, 242, 248);
            cursor: pointer;
            display: inline-block;
            font-size: 1em;
            margin: 4px 2px;
            padding: 7px 25px;                     
            text-align: center;
            text-decoration: none;
            transition-duration: 0.4s;
        }
        .button:hover {
            background-color: rgb(28, 52, 74);            
        }
        .input {
            background-color: rgb(218, 230, 241);
            border: 2px solid rgb(41, 77, 112);
            border-radius: 4px;
            display: inline-block;  
            height: 32px;                      
            font-size: 1em;
            margin: 0 5px;
            padding: 0 10px;                     
            width: 20%;
        }          
        .content {
            margin: 0;
            padding: 0;
            text-align: center;                     
            width: 100%;
        }                   
    </style>
`;