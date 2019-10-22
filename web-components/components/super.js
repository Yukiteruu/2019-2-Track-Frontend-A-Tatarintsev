




class superInput extends HTMLElement{
	constructor(){
		super();
		this.shadow = this.attachShadowRoot();

	}


	connectedCallback(){
		var template = '<input type="text" placeholder="message"/>';
		this.shadow.innerHTML = template;

	}

}


window.customElements.define('super-input', superInput );