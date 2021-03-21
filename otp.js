customElements.define("one-time-code",
  class extends HTMLInputElement {
    connectedCallback() {
      this.receive();
    }
    async receive() {
      let {code, type} = await navigator.credentials.get({
        otp: {
         transport: ["sms"]
        }
      });
      this.value = otp;
      this.form.submit();
    }
  }, {
    extends: "input"
});