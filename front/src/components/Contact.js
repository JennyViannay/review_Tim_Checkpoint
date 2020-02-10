import React, { Component } from 'react';
import PhotoContact from '../assets/img/contact.jpg';
import './Contact.css';

import axios from 'axios';

class Contact extends Component {
  state = {
    email: '',
    message: '',
    flash: ''
  }

  postMessage = (e) => {
    e.preventDefault();
    const message = {
      email: this.state.email,
      message: this.state.message
    }
    
    axios.post('http://localhost:8000/contact/', message)
      .then(response => response.data)
      .then(data => {
        if(data === 'Votre message a bien été envoyé'){
          this.setState({ flash: data})
        } else {
          this.setState({ flash : 'Erreur lors de l\'envoie de votre message, veuillez réessayer plus tard'})
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.state)
  }

  render() {
    return (
      <div>
        {
          this.state.flash ? <div><p>{this.state.flash}</p><a href='/'>Retour à l'accueil</a></div> : (
            <div className='container-fluid'>
              <img className='PhotoContact' src={PhotoContact} alt="circus man" />
              <form className='container mt-5'>
                <div className="form-group container">
                  <label htmlFor="exampleFormControlInput1">Addresse Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="ton@email.com" onChange={this.handleChange} />
                </div>

                <div className="form-group container">
                  <label htmlFor="exampleFormControlTextarea1">Pose ta question</label>
                  <textarea className="form-control" name="message" placeholder="Ta question ici…" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-dark mb-4" onClick={this.postMessage}>Envoyer</button>
              </form>
            </div>
          )
        }
      </div>
    )
  }
}

export default Contact;