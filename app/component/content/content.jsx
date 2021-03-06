import React, { Component } from 'react'
import './content.styl'
import {Modal} from 'react-bootstrap'

export default class Content extends Component {
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
      <div id='content'>
        <section className='content_item'>
          <article className='goods'>
            <img src='#' alt='img1' />
            <h3 className='goods_title'>Гідравлічне обладнання</h3>
            <button className='catalog'>Каталог товарів</button>
            <ul className='goods_item'>
              <li><a href='#'>гідравлічні насоси</a></li>
              <li><a href='#'>гідравлічне обладнання</a></li>
              <li><a href='#'>шланги</a></li>
              <li><a href='#'>трубки</a></li>
              <li><a href='#'>компресори</a></li>
              <li><a href='#'>запчастини до гідравліки</a></li>
              <li><a href='#'>форсунки</a></li>
              <li><a href='#'>корпуси до редукторів</a></li>
              <li><a href='#'>редуктори</a></li>
              <li><a href='#'>насоси</a></li>
            </ul>
          </article>
          <article className='goods'>
            <img src='#' alt='img2' />
            <h3 className='goods_title'>Металообробні станки</h3>
            <button className='catalog'>Каталог товарів</button>
            <ul className='goods_item'>
              <li><a href='#'>станки DELLA</a></li>
              <li><a href='#'>станки FOX</a></li>
              <li><a href='#'>станки METALFULL</a></li>
              <li><a href='#'>дробильні станки</a></li>
              <li><a href='#'>гравіровочні станки</a></li>
              <li><a href='#'>відбивочні станки FELL</a></li>
              <li><a href='#'>станки CAT</a></li>
            </ul>
          </article>
          <article className='goods'>
            <img src='#' alt='img3' />
            <h3 className='goods_title'>Запчастини для авто</h3>
            <button className='catalog'>Каталог товарів</button>
            <ul className='goods_item'>
              <li><a href='#'>запчастини до двигуна</a></li>
              <li><a href='#'>запчастини до ПК</a></li>
              <li><a href='#'>диски та шини</a></li>
              <li><a href='#'>форсунки</a></li>
              <li><a href='#'>корпуса</a></li>
              <li><a href='#'>авто метизи</a></li>
              <li><a href='#'>автомагнітоли</a></li>
            </ul>
          </article>
        </section>
        <section className='content_item bottom'>
          <article className='question goods'>
            <h3>Є ПИТАННЯ?</h3>
            <p>Залиште заявку на консультацію з фахівцем або зателефонуйте нам <span>(050) 313 55 12</span></p>
            <button className='consultation' onClick={this.handleModal}>Отримати консультацію</button>
          </article>
          <article className='contacts goods'>
            <h3>КОНТАКТИ</h3>
            <ul className='contacts_list'>
              <li>
                <p>Головний офіс</p>
                <p>м.Житомир вул Промислова 12</p>
              </li>
              <li>
                <p>Телефони офісу</p>
                <p>050 313 55 12, 095 567 42 85</p>
              </li>
              <li>
                <p><a className='our_site' href='#'>info@website.info</a></p>
              </li>
            </ul>
          </article>
        </section>
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
      </div>
    )
  }
}
