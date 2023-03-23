import React from 'react';

function Contact() {
  return (
    <section>
      <footer id='contact'>
        <h2>Contact</h2>
        <form>
          <div>
            <label>Prénom</label>
            <input type='text' />
          </div>
          <div>
            <label>Email</label>
            <input type='text' />
          </div>
          <div>
            <label>Message</label>
            <div className='inputMessage'></div>
          </div>
          <button className='inputSend'>Envoyer</button>
        </form>
      </footer>
    </section>
  );
}

export default Contact;
