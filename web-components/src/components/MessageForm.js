const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
            display: flex;
        }

        .result {
            color: black;
            border: none;
            width: 200px;
            height: 10 px;
            padding: 10px;
            margin: 10px;
            border-radius: 10px;
            position: relative;
            word-wrap: break-word;
            background-color: #F3E5F5;

        }

        input[type=submit] {
            visibility: collapse;
            flex: 1;
        }
        form{
            background: #F5F5F5;
            
        }
        .message-field{
            width: 500px;
            height: 500px;
            overflow-y: scroll;

        }
        .inpt{
            display: flex;
        }
        .btn{
            background: #8E24AA;
            height: 40px;
            width: 40px;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            font-size: 12px;
            margin-left: 10px;
            flex: 1;


        }
        .btn:hover{
            cursor: pointer;
            background:#F3E5F5;
        }
    </style>    

    <form>
        <div class="message-field">
            
        </div>
        <div class="inpt">
            <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
            <div class="btn">send</div>
        </div>
    </form>    
     
    
`;



class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        this.btn = this._shadowRoot.querySelector('.btn');
        this.btn.addEventListener('click',this._onSubmit.bind(this));
        this.field = this._shadowRoot.querySelector('.message-field');

        if(localStorage.getItem('items')){
            this.messageArray =JSON.parse(localStorage.getItem('items'));
            this.data = JSON.parse(localStorage.getItem('items'));
            this.data.forEach(item => {
                let div = document.createElement('div');
                div.classList.add('result');
                div.innerText = item;
                this.field.appendChild(div);
            
            });
        }
        else{
            this.messageArray = [];
        }

        
        this.field.scrollTop = this.field.scrollHeight;
    }
    
    
    

    _onSubmit (event) {
        event.preventDefault();
        this.$messa= this.$input.value;
        if(this.$input.value!=''){
            this.$input.clear();
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerText =this.$messa; 
            this.field.appendChild(div);

            this.messageArray.push(this.$messa);
            localStorage.setItem('items', JSON.stringify(this.messageArray));
            this.field.scrollTop = this.field.scrollHeight;
        }

        
        
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }

    
}

customElements.define('message-form', MessageForm);
