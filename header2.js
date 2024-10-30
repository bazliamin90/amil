const headerTemplate2 = document.createElement('template');

headerTemplate2.innerHTML = `
  <style>
    .header2 {
      font-size: 14px;
      color: #555;
      background-color: #ebffe3;
      padding: 5px;
      text-align: center;
      border-bottom: 1px solid #ddd;
	  margin-bottom: 40px;
    }
	
	footer {
		text-align: center;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #ebffe3;
		padding: 5px 0;  /* Adjust padding for height slightly more than the font size */
	}

	footer p {
		font-size: 8px;
		margin: 0;  /* Ensure there's no additional margin */
		padding-left: 5px;
		padding-right: 5px;
	}
	
	.social-icons {
		display: inline-block;  /* Ensure the icons are in-line with the text */
	}

	.social-icons a {
		margin-left: 10px;
		margin-right: 10px;
		text-decoration: none;
	}

	.social-icons img {
		width: 16px;  /* Adjust the size of the icons as needed */
		height: 16px;
		vertical-align: middle;  /* Align the icons properly with the text */
	}
  </style>

  <div class="header2">
    <h3>Amil Zakat ADDIN</h3>
    <!--<p>Japanese & English</p>-->
  </div>
  
  <footer>
    <div class="social-icons">
        <a href="https://www.facebook.com/yayasanaddin" target="_blank">
            <img src="fb.svg" alt="Facebook">
        </a>
    </div>
  </footer>
`;

class Header2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate2.content);
  }
}

customElements.define('header2-component', Header2);
