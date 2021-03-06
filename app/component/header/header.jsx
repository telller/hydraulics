import React, { Component } from 'react'
import './header.styl'
import {Link} from 'react-router'
import {Modal} from 'react-bootstrap'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.handleModal = this.handleModal.bind(this)
    this.close = this.close.bind(this)
  }
  handleModal () {
    this.setState({showModal: true})
  }
  close () {
    this.setState({showModal: false})
  }
  open () {
    this.setState({showModal: true})
  }
  render () {
    return (
      <header id='header'>
        <div className='wrapper'>
          <Link to='/' className='logo'><img className='logo' width={100} src='./app/component/img/Opuh.jpg' alt='Logo' /></Link>
          <div className='conteiner'>
            <nav>
              <ul className='menu'>
                <li className='menu_item'><Link className='menu_link' to='/' activeClassName='active'>Головна</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/catalogProduct' activeClassName='active'>Каталог товарів</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/aboutUs' activeClassName='active'>Про нас</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/blog' activeClassName='active'>Блог</Link></li>
                <li className='menu_item'><Link className='menu_link' to='/contacts' activeClassName='active'>Контакти</Link></li>
              </ul>
            </nav>
            <button className='cole' onClick={this.handleModal}>Замовити дзвінок</button>
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title id='contained-modal-title'>Замовити зворотній дзвінок</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='question'>Залиште повідомлення нижче - ми вам зателефонуємо</p>
              <form action='#'>
                <div className='flex_input'>
                  <input className='short input' type='text' required placeholder="Ім'я" />
                  <input className='short' type='tel' required placeholder='Телефон' />
                </div>
                <p><input type='text' required placeholder='Тема' /></p>
                <textarea required placeholder='Ваше повідомлення' />
                <input type='submit' value='Відправити повідомленя' />
              </form>
            </Modal.Body>
            <Modal.Footer />
          </Modal>
          <ul className='contact'>
            <li className='contact_item'>050 313 55 12</li>
            <li className='contact_item'>095 432 44 67</li>
          </ul>
        </div>
      </header>
    )
  }
}
